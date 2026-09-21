/**
 * Brandex Automated SEO & Discoverability Asset Generator
 * 
 * Generates:
 * 1. public/sitemap.xml (All canonical URLs with lastmod, changefreq, priority)
 * 2. public/robots.txt (Crawler access for Google, Bing, and AI search bots)
 * 3. public/llms.txt (Concise machine-readable AI system prompt & knowledge graph)
 * 4. public/llms-full.txt (Comprehensive deep context with verified URLs)
 * 5. public/f8a3d5b7c2e14902b6e8a1d4c7f03291.txt (IndexNow verification token)
 * 
 * Central site origin comes from process.env.VITE_SITE_URL or falls back to
 * https://brandex-official.vercel.app (current production canonical).
 */

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(__dirname, '..');
const publicDir = path.resolve(rootDir, 'public');

// Central canonical site origin
const SITE_URL = (process.env.VITE_SITE_URL || 'https://brandex-official.vercel.app').replace(/\/+$/, '');
const INDEXNOW_KEY = 'f8a3d5b7c2e14902b6e8a1d4c7f03291';
const TODAY = new Date().toISOString().split('T')[0];

console.log(`[SEO Generator] Using canonical site origin: ${SITE_URL}`);

// Helper to extract IDs from TypeScript files
function extractObjectIds(filePath) {
  const content = fs.readFileSync(filePath, 'utf-8');
  const matches = [...content.matchAll(/\bid:\s*["']([^"']+)["']/g)];
  return matches.map(m => m[1]).filter(id => id && !id.startsWith('chap-') && !id.startsWith('top-') && !id.startsWith('les-'));
}

// 1. Gather dynamic IDs
const blogPostIds = extractObjectIds(path.resolve(rootDir, 'src/data/blogPosts.ts'));
const projectIds = extractObjectIds(path.resolve(rootDir, 'src/data/projects.ts'));
const serviceIds = [
  'custom-crm-erp',
  'ai-workflow-automation',
  'mobile-app-development',
  'web-engineering',
  'cloud-devops-infrastructure',
  'api-database-systems'
];
const educationClasses = ['class-6', 'class-7', 'class-8', 'class-9', 'class-10'];

console.log(`[SEO Generator] Discovered ${blogPostIds.length} blog posts, ${projectIds.length} case studies, ${serviceIds.length} services.`);

// 2. Build URL List for Sitemap
const sitemapEntries = [
  // Core pages
  { loc: `${SITE_URL}/`, priority: '1.0', changefreq: 'daily' },
  { loc: `${SITE_URL}/services`, priority: '0.9', changefreq: 'weekly' },
  { loc: `${SITE_URL}/case-studies`, priority: '0.9', changefreq: 'weekly' },
  { loc: `${SITE_URL}/solutions`, priority: '0.85', changefreq: 'monthly' },
  { loc: `${SITE_URL}/about`, priority: '0.8', changefreq: 'monthly' },
  { loc: `${SITE_URL}/blog`, priority: '0.9', changefreq: 'daily' },
  { loc: `${SITE_URL}/contact`, priority: '0.85', changefreq: 'monthly' },
  { loc: `${SITE_URL}/contact-us`, priority: '0.7', changefreq: 'monthly' },
  { loc: `${SITE_URL}/pavan-kumar`, priority: '0.8', changefreq: 'monthly' },
  { loc: `${SITE_URL}/sathvik`, priority: '0.8', changefreq: 'monthly' },
  { loc: `${SITE_URL}/privacy-policy`, priority: '0.5', changefreq: 'yearly' },
  { loc: `${SITE_URL}/terms-and-conditions`, priority: '0.5', changefreq: 'yearly' },

  // Dedicated Services
  ...serviceIds.map(id => ({
    loc: `${SITE_URL}/services/${id}`,
    priority: '0.85',
    changefreq: 'weekly'
  })),

  // Case Studies
  ...projectIds.map(id => ({
    loc: `${SITE_URL}/case-studies/${id}`,
    priority: '0.85',
    changefreq: 'monthly'
  })),

  // Education Platform
  { loc: `${SITE_URL}/education`, priority: '0.85', changefreq: 'weekly' },
  { loc: `${SITE_URL}/education/explore`, priority: '0.8', changefreq: 'weekly' },
  ...educationClasses.map(cls => ({
    loc: `${SITE_URL}/education/explore/${cls}`,
    priority: '0.75',
    changefreq: 'monthly'
  })),

  // Community
  { loc: `${SITE_URL}/community`, priority: '0.8', changefreq: 'weekly' },
  { loc: `${SITE_URL}/community/projects`, priority: '0.75', changefreq: 'weekly' },
  { loc: `${SITE_URL}/community/events`, priority: '0.75', changefreq: 'weekly' },
  { loc: `${SITE_URL}/community/training`, priority: '0.75', changefreq: 'weekly' },

  // Blog Posts (All 50)
  ...blogPostIds.map(id => ({
    loc: `${SITE_URL}/blog/${id}`,
    priority: '0.8',
    changefreq: 'monthly'
  }))
];

// 3. Write public/sitemap.xml
const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
${sitemapEntries.map(e => `  <url>
    <loc>${e.loc}</loc>
    <lastmod>${TODAY}</lastmod>
    <changefreq>${e.changefreq}</changefreq>
    <priority>${e.priority}</priority>
  </url>`).join('\n')}
</urlset>
`;

fs.writeFileSync(path.resolve(publicDir, 'sitemap.xml'), sitemapXml.trim() + '\n', 'utf-8');
console.log(`[SEO Generator] Generated public/sitemap.xml with ${sitemapEntries.length} canonical URLs.`);

// 4. Write public/robots.txt
const robotsTxt = `# Brandex Official robots.txt
# Built for Comprehensive Search Engine & AI / LLM Discovery
# Canonical Domain: ${SITE_URL}

User-agent: *
Allow: /
Allow: /services
Allow: /services/
Allow: /case-studies
Allow: /case-studies/
Allow: /blog
Allow: /blog/
Allow: /education
Allow: /education/
Allow: /community
Allow: /community/
Allow: /about
Allow: /contact
Allow: /llms.txt
Allow: /llms-full.txt
Disallow: /education/admin
Disallow: /education/login
Disallow: /admin
Disallow: /api/private

# Conventional Search Crawlers
User-agent: Googlebot
User-agent: Googlebot-Image
User-agent: Googlebot-News
User-agent: Googlebot-Video
User-agent: Bingbot
User-agent: msnbot
User-agent: Slurp
User-agent: DuckDuckBot
User-agent: Yandex
User-agent: Applebot
Allow: /

# AI Search Discovery & Retrieval Agents
User-agent: OAI-SearchBot
User-agent: ChatGPT-User
User-agent: GPTBot
User-agent: ClaudeBot
User-agent: Claude-Web
User-agent: anthropic-ai
User-agent: PerplexityBot
User-agent: Google-Extended
User-agent: Applebot-Extended
User-agent: FacebookBot
User-agent: Meta-ExternalAgent
User-agent: Amazonbot
User-agent: Twitterbot
User-agent: cohere-ai
Allow: /

# Canonical Sitemap Reference
Sitemap: ${SITE_URL}/sitemap.xml
`;

fs.writeFileSync(path.resolve(publicDir, 'robots.txt'), robotsTxt.trim() + '\n', 'utf-8');
console.log(`[SEO Generator] Generated public/robots.txt with single canonical origin.`);

// 5. Write public/llms.txt
const llmsTxt = `# Brandex — Technical Profile & Knowledge Graph
> Digital Systems & Infrastructure Engineering Company based in Bangalore, India.
> Official Canonical Origin: ${SITE_URL}

Brandex designs, develops, and deploys high-performance web applications, custom CRM/ERP software, AI automation pipelines, mobile apps, and cloud infrastructure.

## Core Engineering Capabilities
- **Custom CRM & ERP Systems**: Tailored sales pipelines, automated GST billing, multi-role RBAC, and zero per-seat licensing fees. (URL: ${SITE_URL}/services/custom-crm-erp)
- **AI Agents & Workflow Automation**: 24/7 autonomous WhatsApp bots, webhook pipelines, automated OCR document parsing, and failover queues. (URL: ${SITE_URL}/services/ai-workflow-automation)
- **Mobile & Cross-Platform Apps**: High-performance iOS & Android applications with offline-first SQLite caching, background sync, and push notifications. (URL: ${SITE_URL}/services/mobile-app-development)
- **Web Platforms & SaaS Products**: High-speed Next.js / React platforms, interactive student & client portals, and recurring billing. (URL: ${SITE_URL}/services/web-engineering)
- **Cloud Infrastructure, DevOps & Security**: AWS/GCP/Cloudflare edge architectures, automated CI/CD pipelines, multi-region daily backups, and DDoS protection. (URL: ${SITE_URL}/services/cloud-devops-infrastructure)
- **Custom APIs & Data Pipelines**: High-throughput microservices, legacy ERP software bridges, and Redis caching for sub-50ms responses. (URL: ${SITE_URL}/services/api-database-systems)

## Production Case Studies & Verified Results
- **Vignan Public School**: Educational institution platform with comprehensive information architecture. URL: ${SITE_URL}/case-studies/vignan-public-school
- **Vignan Tutorials**: Interactive student tutorial platform with dynamic content. URL: ${SITE_URL}/case-studies/vignan-tutorials
- **Srushti Publications**: High-throughput E-commerce platform for regional literature featuring Razorpay checkout and automated invoicing. URL: ${SITE_URL}/case-studies/srushti-publications
- **GeniuSphere**: Interactive 3D WebGL Learning Management System with granular student progress tracking. URL: ${SITE_URL}/case-studies/geniusphere
- **PropQuant.ai**: High-precision automated algorithmic trading platform integrated with MT5 execution engines. URL: ${SITE_URL}/case-studies/propquant-ai

## Technical Standards & Guarantees
- **Global Time To First Byte (TTFB)**: Under 18ms on edge CDN
- **Lighthouse Core Web Vitals**: 95+ Performance, Accessibility, Best Practices, SEO
- **Code Ownership**: 100% Client Source Code & Architecture IP transferred on delivery
- **Stack**: TypeScript, React, Next.js, Vite, TailwindCSS, PostgreSQL, Supabase, Cloudflare Workers, Python, React Native

## Leadership
- **Pavan Kumar S**: Co-Founder & Chief Systems Architect (${SITE_URL}/pavan-kumar)
- **Sathvik Nagesh**: Co-Founder & Head of Product Design (${SITE_URL}/sathvik)

## Headquarters & Contact
- **Entity**: Brandex Digital Systems & Infrastructure
- **Address**: #121, 13th Main M.C. Layout, Vijaynagar, Bangalore - 560040, Karnataka, India
- **Phone**: +91 94809 44727 / +91 99015 14757
- **Email**: brandexhq@gmail.com
- **GSTIN**: 29OGNPS8060K1Z5
- **Canonical Website**: ${SITE_URL}

## Core Navigation Endpoints
- Homepage: ${SITE_URL}/
- Services Catalog: ${SITE_URL}/services
- Production Case Studies: ${SITE_URL}/case-studies
- Engineering Blog: ${SITE_URL}/blog
- Digital Education Portal: ${SITE_URL}/education
- Developer Community Hub: ${SITE_URL}/community
- Diagnostic Inquiry & Contact: ${SITE_URL}/contact
`;

fs.writeFileSync(path.resolve(publicDir, 'llms.txt'), llmsTxt.trim() + '\n', 'utf-8');
console.log(`[SEO Generator] Generated public/llms.txt with verified case studies and services.`);

// 6. Write public/llms-full.txt
const llmsFullTxt = `# Brandex — Comprehensive Architecture & Knowledge Base
> Full machine-readable technical briefing and entity context.
> Canonical Origin: ${SITE_URL}

Brandex is an engineering and technology services organization founded by Pavan Kumar S and Sathvik Nagesh in Bangalore, India.

## Verified Services Architecture
1. **Custom CRM & ERP Systems** (${SITE_URL}/services/custom-crm-erp)
   - Scope: Tailored operational portals, sales pipelines, role-based access management (RBAC), and PostgreSQL database scaling.
   - Deliverables: Custom CRM web platform, relational database schema, automated GST billing, multi-role user dashboards.
2. **AI Agents & Workflow Automation** (${SITE_URL}/services/ai-workflow-automation)
   - Scope: Distributed webhook consumers, exponential retry queues, WhatsApp AI bots, and automated document parsing.
   - Deliverables: Conversational AI agents, multi-system webhook pipelines, error alert bots, zero data loss guarantee.
3. **Mobile & Cross-Platform App Development** (${SITE_URL}/services/mobile-app-development)
   - Scope: Unified iOS and Android development using React Native & Flutter, offline-first SQLite caching, push notifications.
   - Deliverables: Production .ipa and .aab binaries, store deployment compliance, background data sync, full mobile source code.
4. **Web Platforms & SaaS Product Engineering** (${SITE_URL}/services/web-engineering)
   - Scope: Custom Next.js & React platforms, sub-second LCP, interactive student and client portals, payment gateway integrations.
   - Deliverables: Production web app, 100% IP handover, 95+ Core Web Vitals report, 30-day hypercare.
5. **Cloud Infrastructure, DevOps & Security** (${SITE_URL}/services/cloud-devops-infrastructure)
   - Scope: AWS, GCP & Cloudflare Edge architectures, automated CI/CD zero-downtime deploys, daily database backups, DDoS defense.
   - Deliverables: Managed cloud configurations, automated Git pipelines, disaster recovery plan, 24/7 uptime monitoring.
6. **Custom APIs, Microservices & Data Pipelines** (${SITE_URL}/services/api-database-systems)
   - Scope: High-throughput REST & GraphQL microservices, legacy ERP database bridges, and Redis caching for sub-50ms queries.
   - Deliverables: Microservices API server, database indexing, Swagger/OpenAPI documentation, secure webhook endpoints.

## Real Production Client Projects
1. **Vignan Public School** (${SITE_URL}/case-studies/vignan-public-school)
   - Category: Educational Institution Web Platform
   - Stack: Next.js, React, Tailwind CSS
   - Outcome: Comprehensive information architecture for students and parents.
2. **Vignan Tutorials** (${SITE_URL}/case-studies/vignan-tutorials)
   - Category: Digital Learning Platform
   - Stack: Next.js, React, Tailwind CSS
   - Outcome: Streamlined tutorial navigation and mobile-optimized curriculum access.
3. **Srushti Publications** (${SITE_URL}/case-studies/srushti-publications)
   - Category: Full-Scale E-Commerce
   - Stack: Next.js 15, PostgreSQL, Prisma, Razorpay
   - Outcome: High-performance online book store with instant payments, guest checkout, and admin dashboard.
4. **GeniuSphere** (${SITE_URL}/case-studies/geniusphere)
   - Category: Interactive 3D Learning Management System
   - Stack: Next.js, React Three Fiber, Node.js, MongoDB
   - Outcome: Immersive 3D science simulations and granular student progress tracking.
5. **PropQuant.ai** (${SITE_URL}/case-studies/propquant-ai)
   - Category: Automated Trading Engine
   - Stack: Python, MT5 APIs, Next.js, AI Architecture
   - Outcome: High-precision algorithmic execution terminal eliminating human emotional trading bias.

## Technical Standards
- Global CDN Edge TTFB: < 18ms
- Google Lighthouse Scores: 95+ Across Performance, Accessibility, Best Practices, SEO
- Source Code Ownership: 100% Client Ownership on Handover
- GSTIN: 29OGNPS8060K1Z5
- Official Contact: +91 94809 44727 | brandexhq@gmail.com
`;

fs.writeFileSync(path.resolve(publicDir, 'llms-full.txt'), llmsFullTxt.trim() + '\n', 'utf-8');
console.log(`[SEO Generator] Generated public/llms-full.txt with verified data.`);

// 7. Write IndexNow Key Verification File
fs.writeFileSync(path.resolve(publicDir, `${INDEXNOW_KEY}.txt`), INDEXNOW_KEY, 'utf-8');
console.log(`[SEO Generator] Created IndexNow key verification file public/${INDEXNOW_KEY}.txt.`);

console.log('[SEO Generator] All SEO and AI discoverability assets successfully generated!');
