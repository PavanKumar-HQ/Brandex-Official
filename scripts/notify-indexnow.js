/**
 * Brandex IndexNow URL Notifier
 * 
 * Submits updated URLs to the IndexNow protocol (supported by Microsoft Bing,
 * Yandex, Seznam, and other participating search engines).
 * 
 * Usage:
 *   node scripts/notify-indexnow.js [url1] [url2] ...
 * 
 * Or run without arguments to submit core canonical URLs from the sitemap.
 */

import https from 'node:https';

const HOST = (process.env.VITE_SITE_URL || 'https://brandex-official.vercel.app').replace(/^https?:\/\//, '').replace(/\/+$/, '');
const KEY = process.env.INDEXNOW_KEY || 'f8a3d5b7c2e14902b6e8a1d4c7f03291';
const KEY_LOCATION = `https://${HOST}/${KEY}.txt`;

// Default core URLs to submit if none passed
const DEFAULT_URLS = [
  `https://${HOST}/`,
  `https://${HOST}/services`,
  `https://${HOST}/services/custom-crm-erp`,
  `https://${HOST}/services/ai-workflow-automation`,
  `https://${HOST}/services/mobile-app-development`,
  `https://${HOST}/services/web-engineering`,
  `https://${HOST}/services/cloud-devops-infrastructure`,
  `https://${HOST}/services/api-database-systems`,
  `https://${HOST}/case-studies`,
  `https://${HOST}/education`,
  `https://${HOST}/education/explore`,
  `https://${HOST}/community`,
  `https://${HOST}/blog`,
  `https://${HOST}/about`,
  `https://${HOST}/contact`,
];

const urlsToSubmit = process.argv.slice(2).length > 0 ? process.argv.slice(2) : DEFAULT_URLS;

const payload = JSON.stringify({
  host: HOST,
  key: KEY,
  keyLocation: KEY_LOCATION,
  urlList: urlsToSubmit,
});

console.log(`[IndexNow] Submitting ${urlsToSubmit.length} URLs for host: ${HOST}`);

const req = https.request(
  {
    hostname: 'api.indexnow.org',
    port: 443,
    path: '/indexnow',
    method: 'POST',
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
      'Content-Length': Buffer.byteLength(payload),
    },
  },
  (res) => {
    console.log(`[IndexNow] Response status: ${res.statusCode} ${res.statusMessage}`);
    res.on('data', (d) => process.stdout.write(d));
  }
);

req.on('error', (e) => {
  console.error(`[IndexNow] Request error: ${e.message}`);
});

req.write(payload);
req.end();
