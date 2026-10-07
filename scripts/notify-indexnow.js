/**
 * Brandex IndexNow URL Notifier (Section 24: Bing / Copilot Optimization)
 * 
 * Submits updated URLs to the IndexNow protocol (supported by Microsoft Bing,
 * Copilot, Yandex, Seznam, and other participating search engines).
 * 
 * Usage:
 *   node scripts/notify-indexnow.js [url1] [url2] ...
 */

import https from 'node:https';

const HOST = (process.env.VITE_SITE_URL || 'https://www.brandex.co.in').replace(/^https?:\/\//, '').replace(/\/+$/, '');
const KEY = process.env.INDEXNOW_KEY || 'f8a3d5b7c2e14902b6e8a1d4c7f03291';
const KEY_LOCATION = `https://${HOST}/${KEY}.txt`;

// Default core URLs to submit if none passed
const DEFAULT_URLS = [
  `https://${HOST}/`,
  `https://${HOST}/services`,
  `https://${HOST}/services/software-development`,
  `https://${HOST}/services/website-development`,
  `https://${HOST}/services/ai-automation`,
  `https://${HOST}/services/cybersecurity`,
  `https://${HOST}/products/travel-crm`,
  `https://${HOST}/products/invoice-builder`,
  `https://${HOST}/projects`,
  `https://${HOST}/education`,
  `https://${HOST}/community`,
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
    console.log(`[IndexNow] Response Status: ${res.statusCode} ${res.statusMessage}`);
    res.on('data', (d) => process.stdout.write(d));
    res.on('end', () => console.log('\n[IndexNow] Submission completed.'));
  }
);

req.on('error', (err) => {
  console.error(`[IndexNow] Submission Error: ${err.message}`);
});

req.write(payload);
req.end();
