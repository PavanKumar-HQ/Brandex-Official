/**
 * Brandex Production Crawl Test Suite
 * 
 * Performs real HTTP network requests and DOM extraction against
 * the live deployed production origin: https://brandex-official.vercel.app/
 */

import { JSDOM } from 'jsdom';

const BASE_URL = 'https://brandex-official.vercel.app';

const urlsToTest = [
  '/',
  '/services',
  '/services/custom-crm-erp',
  '/services/ai-workflow-automation',
  '/services/mobile-app-development',
  '/services/web-engineering',
  '/services/cloud-devops-infrastructure',
  '/services/api-database-systems',
  '/case-studies',
  '/blog',
  '/about',
  '/contact'
];

async function runCrawlTest() {
  console.log('\n======================================================');
  console.log(' LIVE PRODUCTION CRAWL & RENDER TEST');
  console.log(` Target Origin: ${BASE_URL}`);
  console.log('======================================================\n');

  const results = [];

  for (const path of urlsToTest) {
    const fullUrl = `${BASE_URL}${path}`;
    console.log(`[CRAWL] Fetching: ${fullUrl}...`);

    const startTime = Date.now();
    let res;
    try {
      res = await fetch(fullUrl, {
        headers: {
          'User-Agent': 'Mozilla/5.0 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)',
          'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8'
        }
      });
    } catch (err) {
      console.error(`  ✖ Failed to fetch ${fullUrl}: ${err.message}`);
      continue;
    }

    const duration = Date.now() - startTime;
    const status = res.status;
    const rawHtml = await res.text();

    const dom = new JSDOM(rawHtml);
    const doc = dom.window.document;

    const title = doc.querySelector('title')?.textContent?.trim() || '';
    const canonical = doc.querySelector('link[rel="canonical"]')?.getAttribute('href') || '';
    const description = doc.querySelector('meta[name="description"]')?.getAttribute('content') || '';
    const robots = doc.querySelector('meta[name="robots"]')?.getAttribute('content') || '';
    const ogTitle = doc.querySelector('meta[property="og:title"]')?.getAttribute('content') || '';
    const ogUrl = doc.querySelector('meta[property="og:url"]')?.getAttribute('content') || '';
    const ogImage = doc.querySelector('meta[property="og:image"]')?.getAttribute('content') || '';

    // H1 in raw HTML
    const h1Elements = [...doc.querySelectorAll('h1')].map(h => h.textContent.trim());
    const firstH1 = h1Elements[0] || 'NONE';

    // Content inside root
    const rootEl = doc.getElementById('root');
    const rootText = rootEl?.textContent?.trim() || '';
    const initialContentPresent = rootText.length > 30;

    // JSON-LD
    const jsonLdScripts = [...doc.querySelectorAll('script[type="application/ld+json"]')];
    const schemasFound = [];
    jsonLdScripts.forEach(s => {
      try {
        const parsed = JSON.parse(s.textContent || '{}');
        if (parsed['@graph']) {
          parsed['@graph'].forEach(g => schemasFound.push(g['@type']));
        } else if (parsed['@type']) {
          schemasFound.push(parsed['@type']);
        }
      } catch (e) {}
    });

    // Internal links found in initial HTML
    const links = [...doc.querySelectorAll('a[href]')].map(a => a.getAttribute('href')).filter(Boolean);
    const internalLinks = links.filter(l => l.startsWith('/') || l.startsWith(BASE_URL));

    results.push({
      path,
      fullUrl,
      status,
      duration,
      canonical,
      title,
      description,
      robots,
      h1: firstH1,
      initialContentPresent,
      rootTextSnippet: rootText.slice(0, 100).replace(/\s+/g, ' '),
      schemasFound,
      ogTitle,
      ogUrl,
      ogImage,
      internalLinksCount: internalLinks.length
    });

    const statusMark = status === 200 ? '\x1b[32m200 OK\x1b[0m' : `\x1b[31m${status}\x1b[0m`;
    const contentMark = initialContentPresent ? '\x1b[32m✔ Initial HTML\x1b[0m' : '\x1b[33mClient-only\x1b[0m';
    console.log(`  Status: ${statusMark} (${duration}ms) | Canonical: ${canonical} | Content: ${contentMark} | H1: "${firstH1.slice(0, 40)}"`);
  }

  console.log('\n======================================================');
  console.log(' PRODUCTION CRAWL SUMMARY REPORT');
  console.log('======================================================\n');

  console.log(JSON.stringify(results, null, 2));
}

runCrawlTest();
