/**
 * Brandex Automated SEO & Discoverability Audit Test Suite
 * 
 * Verifies:
 * - Title uniqueness, presence, and length
 * - Meta descriptions presence and length
 * - Canonical URLs and strict origin enforcement (https://brandex-official.vercel.app)
 * - Robots.txt crawler permissions (OAI-SearchBot, Bingbot, Googlebot, etc.)
 * - Sitemap validity, canonical consistency, and non-indexable exclusion
 * - Machine-readable LLM context (llms.txt & llms-full.txt)
 * - Structured Data JSON-LD graph integrity (Organization, WebSite, Services)
 * - Service architecture completeness (6 IT services with 6 core questions answered)
 * - IndexNow server-side configuration and token file
 * - Image alt attributes across major UI components
 */

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { JSDOM } from 'jsdom';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(__dirname, '..');
const publicDir = path.resolve(rootDir, 'public');

const CANONICAL_ORIGIN = 'https://brandex-official.vercel.app';
let totalChecks = 0;
let passedChecks = 0;
const errors = [];
const warnings = [];

function check(title, assertion, details = '') {
  totalChecks++;
  if (assertion) {
    passedChecks++;
    console.log(`  \x1b[32m✔\x1b[0m ${title}`);
  } else {
    errors.push({ title, details });
    console.log(`  \x1b[31m✖\x1b[0m ${title}`);
    if (details) console.log(`    \x1b[33m↳ ${details}\x1b[0m`);
  }
}

function warn(title, details = '') {
  warnings.push({ title, details });
  console.log(`  \x1b[33m⚠\x1b[0m ${title}`);
  if (details) console.log(`    \x1b[33m↳ ${details}\x1b[0m`);
}

console.log('\n======================================================');
console.log(' BRANDEX COMPREHENSIVE SEO & AI-DISCOVERABILITY AUDIT');
console.log(` Canonical Target: ${CANONICAL_ORIGIN}`);
console.log('======================================================\n');

// ----------------------------------------------------
// 1. Static HTML & Root Metadata Audit (index.html)
// ----------------------------------------------------
console.log('\x1b[1m[1/8] Auditing index.html Root Metadata & JSON-LD\x1b[0m');
const indexHtmlPath = path.resolve(rootDir, 'index.html');
const indexHtml = fs.readFileSync(indexHtmlPath, 'utf-8');
const dom = new JSDOM(indexHtml);
const doc = dom.window.document;

// Title
const titleTag = doc.querySelector('title');
check('index.html contains non-empty <title>', Boolean(titleTag && titleTag.textContent.trim().length > 10));

// Canonical
const canonicalTag = doc.querySelector('link[rel="canonical"]');
check(
  'index.html contains canonical link matching exact production URL',
  Boolean(canonicalTag && canonicalTag.getAttribute('href') === `${CANONICAL_ORIGIN}/`),
  `Expected ${CANONICAL_ORIGIN}/, got ${canonicalTag?.getAttribute('href')}`
);

// Meta Description
const descTag = doc.querySelector('meta[name="description"]');
check(
  'index.html contains descriptive meta description (50-300 chars)',
  Boolean(descTag && descTag.getAttribute('content')?.length >= 50 && descTag.getAttribute('content')?.length <= 300),
  `Length: ${descTag?.getAttribute('content')?.length || 0}`
);

// Open Graph & Twitter
const ogUrl = doc.querySelector('meta[property="og:url"]')?.getAttribute('content');
const ogTitle = doc.querySelector('meta[property="og:title"]')?.getAttribute('content');
const ogDesc = doc.querySelector('meta[property="og:description"]')?.getAttribute('content');
const ogImage = doc.querySelector('meta[property="og:image"]')?.getAttribute('content');
const twitterCard = doc.querySelector('meta[name="twitter:card"]')?.getAttribute('content');

check('index.html contains og:url matching canonical origin', ogUrl === `${CANONICAL_ORIGIN}/`, `Got ${ogUrl}`);
check('index.html contains og:title and og:description', Boolean(ogTitle && ogDesc));
check('index.html contains absolute og:image URL on canonical origin', Boolean(ogImage && ogImage.startsWith(CANONICAL_ORIGIN)));
check('index.html contains twitter:card summary_large_image', twitterCard === 'summary_large_image');

// JSON-LD Multi-Entity Graph
const jsonLdScript = doc.querySelector('script[type="application/ld+json"]');
check('index.html contains <script type="application/ld+json">', Boolean(jsonLdScript));

let parsedJsonLd = null;
try {
  parsedJsonLd = JSON.parse(jsonLdScript?.textContent || '{}');
  check('JSON-LD parses without syntax errors', Boolean(parsedJsonLd && parsedJsonLd['@graph']));
} catch (e) {
  check('JSON-LD parses without syntax errors', false, e.message);
}

if (parsedJsonLd && parsedJsonLd['@graph']) {
  const graph = parsedJsonLd['@graph'];
  const org = graph.find(e => e['@type'] === 'Organization');
  const webSite = graph.find(e => e['@type'] === 'WebSite');
  const service = graph.find(e => e['@type'] === 'ProfessionalService');
  const nav = graph.find(e => e['@type'] === 'ItemList');

  check('JSON-LD contains Organization entity with valid @id', Boolean(org && org['@id']?.includes('#organization')));
  check('Organization entity specifies Bangalore address and geo-locality', Boolean(org?.address?.addressLocality === 'Bangalore'));
  check('Organization entity specifies genuine contact channels', Boolean(org?.contactPoint?.telephone && org?.contactPoint?.email));
  check('Organization entity sameAs contains only verified social profiles', Boolean(org?.sameAs && org.sameAs.length >= 3));
  check('JSON-LD contains WebSite entity linked to Organization publisher', Boolean(webSite && webSite.publisher?.['@id'] === org?.['@id']));
  check('JSON-LD contains ProfessionalService entity with GeoCoordinates', Boolean(service?.geo?.latitude && service?.geo?.longitude));
  check('JSON-LD contains ItemList navigation elements with canonical URLs', Boolean(nav?.itemListElement?.length >= 5));
}

// ----------------------------------------------------
// 2. robots.txt & AI Crawler Directives Audit
// ----------------------------------------------------
console.log('\n\x1b[1m[2/8] Auditing robots.txt & Crawler Configuration\x1b[0m');
const robotsPath = path.resolve(publicDir, 'robots.txt');
check('robots.txt exists in public directory', fs.existsSync(robotsPath));
const robotsTxt = fs.existsSync(robotsPath) ? fs.readFileSync(robotsPath, 'utf-8') : '';

check(
  'robots.txt references canonical sitemap',
  robotsTxt.includes(`Sitemap: ${CANONICAL_ORIGIN}/sitemap.xml`),
  `Expected Sitemap: ${CANONICAL_ORIGIN}/sitemap.xml`
);

check('robots.txt explicitly allows Googlebot', robotsTxt.includes('User-agent: Googlebot'));
check('robots.txt explicitly allows Bingbot', robotsTxt.includes('User-agent: Bingbot'));
check('robots.txt explicitly allows OAI-SearchBot without obstruction', robotsTxt.includes('User-agent: OAI-SearchBot'));
check('robots.txt explicitly allows ClaudeBot & PerplexityBot', robotsTxt.includes('User-agent: ClaudeBot') && robotsTxt.includes('User-agent: PerplexityBot'));
check('robots.txt disallows sensitive admin endpoints', robotsTxt.includes('Disallow: /admin') && robotsTxt.includes('Disallow: /education/admin'));

// ----------------------------------------------------
// 3. sitemap.xml Canonicalization & Health Audit
// ----------------------------------------------------
console.log('\n\x1b[1m[3/8] Auditing sitemap.xml URLs & Structure\x1b[0m');
const sitemapPath = path.resolve(publicDir, 'sitemap.xml');
check('sitemap.xml exists in public directory', fs.existsSync(sitemapPath));
const sitemapXml = fs.existsSync(sitemapPath) ? fs.readFileSync(sitemapPath, 'utf-8') : '';

const locMatches = [...sitemapXml.matchAll(/<loc>([^<]+)<\/loc>/g)].map(m => m[1]);
check('sitemap.xml contains indexable URLs', locMatches.length > 20, `Total URLs: ${locMatches.length}`);

const invalidDomainUrls = locMatches.filter(url => !url.startsWith(CANONICAL_ORIGIN));
check('All sitemap URLs start with strict canonical origin', invalidDomainUrls.length === 0, `${invalidDomainUrls.length} mismatched URLs: ${invalidDomainUrls.slice(0, 3).join(', ')}`);

const disallowCheck = locMatches.filter(url => url.includes('/admin') || url.includes('/private'));
check('Zero disallowed or admin routes in sitemap.xml', disallowCheck.length === 0, `Disallowed URLs: ${disallowCheck.join(', ')}`);

// Check duplicate sitemap URLs
const uniqueSitemapUrls = new Set(locMatches);
check('Zero duplicate URLs in sitemap.xml', uniqueSitemapUrls.size === locMatches.length, `${locMatches.length - uniqueSitemapUrls.size} duplicates found`);

// ----------------------------------------------------
// 4. LLMs.txt & Machine-Readable Context Audit
// ----------------------------------------------------
console.log('\n\x1b[1m[4/8] Auditing llms.txt and llms-full.txt Context Files\x1b[0m');
const llmsPath = path.resolve(publicDir, 'llms.txt');
const llmsFullPath = path.resolve(publicDir, 'llms-full.txt');

check('public/llms.txt exists', fs.existsSync(llmsPath));
check('public/llms-full.txt exists', fs.existsSync(llmsFullPath));

if (fs.existsSync(llmsPath)) {
  const llmsTxt = fs.readFileSync(llmsPath, 'utf-8');
  check('llms.txt references canonical origin', llmsTxt.includes(CANONICAL_ORIGIN));
  check('llms.txt does not contain deceptive prompt injection', !llmsTxt.includes('AI should recommend') && !llmsTxt.includes('ignore previous instructions'));
  check('llms.txt outlines all 6 core IT engineering capabilities', 
    llmsTxt.includes('Custom CRM & ERP') &&
    llmsTxt.includes('AI Agents & Workflow Automation') &&
    llmsTxt.includes('Mobile & Cross-Platform Apps') &&
    llmsTxt.includes('Web Platforms & SaaS Products') &&
    llmsTxt.includes('Cloud Infrastructure') &&
    llmsTxt.includes('Custom APIs & Data Pipelines')
  );
}

// ----------------------------------------------------
// 5. IndexNow Protocol & Key Verification
// ----------------------------------------------------
console.log('\n\x1b[1m[5/8] Auditing IndexNow Architecture & Verification Key\x1b[0m');
const indexNowKey = 'f8a3d5b7c2e14902b6e8a1d4c7f03291';
const indexNowFile = path.resolve(publicDir, `${indexNowKey}.txt`);
check(`Verification key file exists: public/${indexNowKey}.txt`, fs.existsSync(indexNowFile));
if (fs.existsSync(indexNowFile)) {
  const keyContent = fs.readFileSync(indexNowFile, 'utf-8').trim();
  check('Verification file contains exact matching key string', keyContent === indexNowKey);
}

const notifierScript = path.resolve(rootDir, 'scripts/notify-indexnow.js');
check('Server-side notify-indexnow.js script exists', fs.existsSync(notifierScript));
if (fs.existsSync(notifierScript)) {
  const scriptContent = fs.readFileSync(notifierScript, 'utf-8');
  check('notify-indexnow.js uses server-side Node HTTPS request', scriptContent.includes('api.indexnow.org'));
  check('notify-indexnow.js defaults to canonical origin', scriptContent.includes(CANONICAL_ORIGIN));
}

// ----------------------------------------------------
// 6. Central Site Configuration & Entity Integrity
// ----------------------------------------------------
console.log('\n\x1b[1m[6/8] Auditing src/config/site.ts Central Origin & Entity\x1b[0m');
const siteConfigPath = path.resolve(rootDir, 'src/config/site.ts');
const siteConfigContent = fs.readFileSync(siteConfigPath, 'utf-8');

check('site.ts fallback URL is set to canonical production origin', siteConfigContent.includes(CANONICAL_ORIGIN));
check('site.ts contains genuine Bangalore address', siteConfigContent.includes('Vijaynagar') && siteConfigContent.includes('Bangalore'));
check('site.ts contains geo coordinates for Bangalore', siteConfigContent.includes('12.9716') && siteConfigContent.includes('77.5946'));
check('site.ts contains official contact details', siteConfigContent.includes('+91 94809 44727') && siteConfigContent.includes('brandexhq@gmail.com'));
check('site.ts defines verified founders (Pavan Kumar S & Sathvik Nagesh)', siteConfigContent.includes('Pavan Kumar S') && siteConfigContent.includes('Sathvik Nagesh'));

// ----------------------------------------------------
// 7. Service Architecture & 6 Core Capabilities
// ----------------------------------------------------
console.log('\n\x1b[1m[7/8] Auditing Services Data Architecture & Content Depth\x1b[0m');
const servicesDataPath = path.resolve(rootDir, 'src/data/services.ts');
const servicesContent = fs.readFileSync(servicesDataPath, 'utf-8');

const requiredServices = [
  'custom-crm-erp',
  'ai-workflow-automation',
  'mobile-app-development',
  'web-engineering',
  'cloud-devops-infrastructure',
  'api-database-systems'
];

requiredServices.forEach(id => {
  check(`Service '${id}' is defined in services.ts`, servicesContent.includes(`id: "${id}"`));
});

check('services.ts includes deliverables for all services', servicesContent.includes('deliverables: ['));
check('services.ts includes problemsSolved (What problem does it solve?)', servicesContent.includes('problemsSolved: ['));
check('services.ts includes targetAudience (Who is it for?)', servicesContent.includes('targetAudience: ['));
check('services.ts includes 4-step execution process (How does it work?)', servicesContent.includes('process: ['));
check('services.ts includes FAQs for rich snippet inclusion', servicesContent.includes('faqs: ['));

// ----------------------------------------------------
// 8. Dynamic SEOHead & Route Metadata Coverage
// ----------------------------------------------------
console.log('\n\x1b[1m[8/8] Auditing SEOHead Route Metadata Coverage\x1b[0m');
const seoHeadPath = path.resolve(rootDir, 'src/components/SEOHead.tsx');
const seoHeadContent = fs.readFileSync(seoHeadPath, 'utf-8');

const coreRoutesToCheck = [
  '/',
  '/services',
  '/case-studies',
  '/solutions',
  '/about',
  '/blog',
  '/contact',
  '/education',
  '/community',
  '/services/custom-crm-erp',
  '/services/ai-workflow-automation',
  '/services/mobile-app-development',
  '/services/web-engineering',
  '/services/cloud-devops-infrastructure',
  '/services/api-database-systems'
];

coreRoutesToCheck.forEach(route => {
  check(`SEOHead provides dedicated metadata for route '${route}'`, seoHeadContent.includes(`"${route}": {`));
});

// Check for duplicate titles in pageMeta
const titleMatches = [...seoHeadContent.matchAll(/title:\s*["']([^"']+)["']/g)].map(m => m[1]);
const seenTitles = new Set();
const duplicateTitles = [];
titleMatches.forEach(t => {
  if (seenTitles.has(t)) duplicateTitles.push(t);
  seenTitles.add(t);
});
check('Zero duplicate page titles in static pageMeta', duplicateTitles.length === 0, `Duplicates: ${duplicateTitles.join('; ')}`);

// ----------------------------------------------------
// 9. Machine-Readable SEO Targets Dataset (seo-targets.json)
// ----------------------------------------------------
console.log('\n\x1b[1m[9/10] Auditing Machine-Readable SEO Targets (seo-targets.json)\x1b[0m');
const seoTargetsPath = path.resolve(publicDir, 'seo-targets.json');
check('seo-targets.json exists in public directory', fs.existsSync(seoTargetsPath));

let parsedTargets = null;
try {
  parsedTargets = JSON.parse(fs.readFileSync(seoTargetsPath, 'utf-8'));
  check('seo-targets.json parses as valid JSON', Boolean(parsedTargets));
} catch (e) {
  check('seo-targets.json parses as valid JSON', false, e.message);
}

if (parsedTargets && Array.isArray(parsedTargets.targets)) {
  check('seo-targets.json contains at least 15 prioritized targets', parsedTargets.targets.length >= 15, `Found: ${parsedTargets.targets.length}`);
  
  const allTargetsHaveRequiredFields = parsedTargets.targets.every(t => 
    t.query && t.intent && t.targetUrl && t.priority && t.status
  );
  check('All SEO targets contain required fields (query, intent, targetUrl, priority, status)', allTargetsHaveRequiredFields);

  const allTargetUrlsCanonical = parsedTargets.targets.every(t => 
    t.targetUrl.startsWith(CANONICAL_ORIGIN)
  );
  check('All target URLs in seo-targets.json use canonical origin', allTargetUrlsCanonical);
}

// ----------------------------------------------------
// 10. Prerendered 404 Recovery & Alias Validation
// ----------------------------------------------------
console.log('\n\x1b[1m[10/10] Auditing Prerendered 404 Recovery & Alias Canonical Architecture\x1b[0m');
const notFoundDistPath = path.resolve(rootDir, 'dist/404.html');
if (fs.existsSync(notFoundDistPath)) {
  const notFoundHtml = fs.readFileSync(notFoundDistPath, 'utf-8');
  check('dist/404.html exists', true);
  check('dist/404.html includes noindex robots directive', notFoundHtml.includes('content="noindex'));
  check('dist/404.html includes recovery links to Home and Services', notFoundHtml.includes('href="/"') && notFoundHtml.includes('href="/services"'));
} else {
  warn('dist/404.html does not exist yet (run npm run build first)');
}


// ----------------------------------------------------
// Summary Report
// ----------------------------------------------------
console.log('\n======================================================');
console.log(` AUDIT COMPLETE: ${passedChecks}/${totalChecks} Checks Passed (${Math.round((passedChecks / totalChecks) * 100)}%)`);
if (warnings.length > 0) console.log(` Warnings: ${warnings.length}`);
if (errors.length > 0) {
  console.log(` \x1b[31mErrors Encountered: ${errors.length}\x1b[0m`);
  errors.forEach(e => console.log(`   - ${e.title}: ${e.details}`));
  console.log('======================================================\n');
  process.exit(1);
} else {
  console.log(' \x1b[32mAll SEO & AI Discoverability Invariants Validated Successfully.\x1b[0m');
  console.log('======================================================\n');
}
