/**
 * Brandex Static HTML Prerenderer (SSG Generator for Vite)
 * 
 * Generates standalone static HTML files for every indexable route
 * in dist/<route>/index.html.
 * 
 * Solves:
 * 1. 404 errors on SPA direct route access on Vercel
 * 2. Crawlability for search engines and AI bots that do not execute client JS
 * 3. Exact route-specific OpenGraph & Twitter preview cards on social platforms
 * 4. Sub-second initial HTML render (FCP / TTFB)
 */

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(__dirname, '..');
const distDir = path.resolve(rootDir, 'dist');

const CANONICAL_ORIGIN = (process.env.VITE_SITE_URL || 'https://brandex-official.vercel.app').replace(/\/+$/, '');

if (!fs.existsSync(distDir)) {
  console.error('[Prerender] Error: dist/ directory not found. Run vite build first.');
  process.exit(1);
}

const masterTemplatePath = path.resolve(distDir, 'index.html');
const masterHtml = fs.readFileSync(masterTemplatePath, 'utf-8');

// Helper to extract objects from TS data files
function extractObjects(filePath) {
  const content = fs.readFileSync(filePath, 'utf-8');
  const items = [];
  const idMatches = [...content.matchAll(/(?:\bid\b|"id")\s*:\s*["']([^"']+)["']/g)];
  const titleMatches = [...content.matchAll(/(?:\btitle\b|"title")\s*:\s*["']([^"']+)["']/g)];
  const descMatches = [...content.matchAll(/(?:\bdescription\b|"description"|\bexcerpt\b|"excerpt")\s*:\s*["']([^"']+)["']/g)];

  for (let i = 0; i < idMatches.length; i++) {
    const id = idMatches[i]?.[1];
    if (!id || id.startsWith('chap-') || id.startsWith('top-') || id.startsWith('les-')) continue;
    items.push({
      id,
      title: titleMatches[i]?.[1] || id,
      description: descMatches[i]?.[1] || 'Brandex technical architecture and engineering case study.',
    });
  }
  return items;
}

const servicesData = [
  {
    id: 'custom-crm-erp',
    title: 'Custom CRM & ERP Software Systems – Brandex Digital',
    h1: 'Custom CRM & ERP Software Systems',
    description: 'Replace recurring per-seat SaaS costs with bespoke CRM and ERP systems engineered for your business workflows. Zero licensing tax, full data ownership.',
    deliverables: ['Custom sales pipeline & lead staging', 'Automated GST invoicing engine', 'Multi-tier RBAC & audit logging', 'Direct WhatsApp & SMS customer sync', '100% full source code ownership'],
    category: 'Enterprise Software',
  },
  {
    id: 'ai-workflow-automation',
    title: 'AI Agents & Autonomous Workflow Automation – Brandex Digital',
    h1: 'AI Agents & Autonomous Workflow Automation',
    description: 'Custom AI agents, WhatsApp bots, and automated webhook pipelines that eliminate repetitive operational bottlenecks 24/7.',
    deliverables: ['24/7 WhatsApp customer booking bot', 'OCR document parsing & CRM sync', 'Automated multi-app webhook queues', 'Dead-letter retry & error alerts', 'Real-time telemetry & latency tracking'],
    category: 'AI Automation',
  },
  {
    id: 'mobile-app-development',
    title: 'High-Performance Mobile App Development (iOS & Android) – Brandex Digital',
    h1: 'High-Performance Mobile App Development (iOS & Android)',
    description: 'Offline-first, native-performance iOS and Android applications built with React Native. Real-time sync, push notifications, and store deployment.',
    deliverables: ['Cross-platform React Native iOS & Android', 'Offline-first SQLite local caching', 'Background sync engine with retry logic', 'Native biometrics authentication', 'App Store & Google Play submission'],
    category: 'Mobile Engineering',
  },
  {
    id: 'web-engineering',
    title: 'Bespoke Web Platforms & SaaS Engineering – Brandex Digital',
    h1: 'Bespoke Web Platforms & SaaS Engineering',
    description: 'Sub-second React & Next.js web applications, client portals, and SaaS platforms engineered for high throughput and search discoverability.',
    deliverables: ['Sub-second Next.js / React edge rendering', 'Liquid Glass responsive design system', 'Role-based student & client portals', 'Automated recurring billing (Razorpay/Stripe)', 'Lighthouse 95+ Core Web Vitals'],
    category: 'Web Platforms',
  },
  {
    id: 'cloud-devops-infrastructure',
    title: 'Cloud Infrastructure, DevOps & Edge Deployment – Brandex Digital',
    h1: 'Cloud Infrastructure, DevOps & Edge Deployment',
    description: 'Automated CI/CD pipelines, container orchestration, edge CDN caching, and automated multi-region backup systems with 99.9% uptime SLAs.',
    deliverables: ['Terraform / Pulumi Infrastructure-as-Code', 'Automated GitHub Actions CI/CD pipelines', 'Cloudflare Enterprise edge caching & DDoS', 'Daily automated multi-region snapshots', 'Zero-downtime rolling deployments'],
    category: 'Cloud & DevOps',
  },
  {
    id: 'api-database-systems',
    title: 'Custom APIs, Microservices & Database Architecture – Brandex Digital',
    h1: 'Custom APIs, Microservices & Database Architecture',
    description: 'High-throughput REST and GraphQL APIs, PostgreSQL optimization, Redis caching layers, and legacy system integrations built for sub-50ms latency.',
    deliverables: ['Sub-50ms REST and GraphQL API microservices', 'PostgreSQL schema design & query indexing', 'Redis distributed caching & session store', 'Legacy software & ERP bridge adapters', 'Interactive OpenAPI / Swagger documentation'],
    category: 'Backend & Data',
  },
];

const projectsData = [
  {
    id: 'vignan-public-school',
    title: 'Vignan Public School Platform Case Study | Brandex',
    h1: 'Vignan Public School Platform Case Study',
    description: 'Bespoke educational institution platform with comprehensive information architecture, parent inquiry workflows, and sub-second load times.',
  },
  {
    id: 'vignan-tutorials',
    title: 'Vignan Tutorials Student Portal Case Study | Brandex',
    h1: 'Vignan Tutorials Student Portal Case Study',
    description: 'Interactive tutorial platform featuring dynamic lesson delivery, study materials distribution, and automated student enrollment tracking.',
  },
  {
    id: 'srushti-publications',
    title: 'Srushti Publications E-Commerce Case Study | Brandex',
    h1: 'Srushti Publications E-Commerce Case Study',
    description: 'High-throughput literature e-commerce platform with automated GST invoicing, Razorpay checkout, and warehouse fulfillment integration.',
  },
  {
    id: 'geniusphere',
    title: 'GeniuSphere 3D WebGL LMS Case Study | Brandex',
    h1: 'GeniuSphere 3D WebGL LMS Case Study',
    description: 'Interactive 3D WebGL educational platform with granular student assessment metrics, gamified learning paths, and real-time telemetry.',
  },
  {
    id: 'propquant-ai',
    title: 'PropQuant.ai Algorithmic Trading Platform Case Study | Brandex',
    h1: 'PropQuant.ai Algorithmic Trading Platform Case Study',
    description: 'High-precision automated trading execution platform integrated with MT5 broker APIs, backtesting pipelines, and real-time risk analytics.',
  },
];

const staticPages = [
  {
    route: 'services',
    title: 'Services – Brandex | Software Development, AI & Cloud Infrastructure',
    h1: 'Enterprise Software Engineering & Digital Infrastructure',
    description: 'End-to-end bespoke digital services: sub-second web applications, AI automation engines, and cloud microservices designed for scale.',
    contentHtml: `
      <h2>Core Engineering Capabilities</h2>
      <ul>
        <li><a href="/services/custom-crm-erp">Custom CRM & ERP Software Systems</a></li>
        <li><a href="/services/ai-workflow-automation">AI Agents & Autonomous Workflow Automation</a></li>
        <li><a href="/services/mobile-app-development">High-Performance Mobile App Development</a></li>
        <li><a href="/services/web-engineering">Bespoke Web Platforms & SaaS Engineering</a></li>
        <li><a href="/services/cloud-devops-infrastructure">Cloud Infrastructure, DevOps & Edge Deployment</a></li>
        <li><a href="/services/api-database-systems">Custom APIs, Microservices & Database Architecture</a></li>
      </ul>
    `,
  },
  {
    route: 'case-studies',
    title: 'Case Studies – Brandex | Real Projects, Real Results',
    h1: 'Production Case Studies & Architectural Impact',
    description: 'Explore how Brandex drove +340% order growth, sub-18ms latency, and 40+ hours saved weekly through digital transformation.',
    contentHtml: `
      <h2>Verified Deployments</h2>
      <ul>
        <li><a href="/case-studies/vignan-public-school">Vignan Public School Platform</a></li>
        <li><a href="/case-studies/vignan-tutorials">Vignan Tutorials Student Portal</a></li>
        <li><a href="/case-studies/srushti-publications">Srushti Publications E-Commerce</a></li>
        <li><a href="/case-studies/geniusphere">GeniuSphere 3D WebGL LMS</a></li>
        <li><a href="/case-studies/propquant-ai">PropQuant.ai Algorithmic Trading Platform</a></li>
      </ul>
    `,
  },
  {
    route: 'solutions',
    title: 'Solutions – Brandex | Industry-Specific Digital Systems',
    h1: 'Engineered Solutions For Specific Operational Bottlenecks',
    description: 'Tailored digital systems for restaurants, healthcare, finance, logistics, and retail. Built to solve real operational bottlenecks.',
  },
  {
    route: 'pricing',
    title: 'Engineering Sprints & Investment Packages – Brandex',
    h1: 'Engineering Sprints & Investment Packages',
    description: 'Transparent engineering sprint packages. Zero hidden costs, 100% client code ownership, fixed deliverables, and sub-second SLAs.',
  },
  {
    route: 'about',
    title: 'About – Brandex | The Team Behind Your Digital Growth',
    h1: 'Engineering Systems Built For Real Scale',
    description: 'Meet the engineering and design leaders at Brandex. Engineering bespoke digital infrastructure for ambitious businesses.',
  },
  {
    route: 'blog',
    title: 'Blog – Brandex | Insights on Engineering, Design & Scale',
    h1: 'Engineering Blog & Technical Architecture',
    description: 'Deep-dives on software architecture, sub-second web performance, and automated systems straight from the Brandex team.',
  },
  {
    route: 'contact',
    title: 'Start Your Project – Brandex | Bespoke Digital Engineering',
    h1: 'Schedule a Technical Architecture Diagnostic',
    description: 'Schedule a diagnostic with Brandex founders. Discuss your custom software, website architecture, or workflow automation project.',
  },
  {
    route: 'contact-us',
    title: 'Contact Us – Brandex | Merchant & Support Information',
    h1: 'Contact Us — Official Merchant Channels',
    description: 'Official merchant and support channels for Brandex Digital Infrastructure. Vijaynagar, Bangalore.',
  },
  {
    route: 'pavan-kumar',
    title: 'Pavan Kumar — Co-Founder & Chief Systems Architect | Brandex',
    h1: 'Pavan Kumar — Co-Founder & Chief Systems Architect',
    description: 'Engineering sub-second web platforms, enterprise cloud pipelines, and bespoke software systems. Bangalore, India.',
  },
  {
    route: 'sathvik',
    title: 'Sathvik Nagesh — Co-Founder & Head of Product Design | Brandex',
    h1: 'Sathvik Nagesh — Co-Founder & Head of Product Design',
    description: 'Bridging human-centered interaction design with high-performance digital engineering and the Liquid Glass design system.',
  },
  {
    route: 'education',
    title: 'Brandex Digital Education | Smart Classroom Curriculum (KSEEB)',
    h1: 'Brandex Digital Education — Smart Classroom Curriculum',
    description: 'Curriculum-mapped video lessons and interactive formative assessments for Karnataka State Board Classes 6 to 10 with distraction-free smartboard player.',
  },
  {
    route: 'community',
    title: 'Brandex Community | 500+ Software Builders & Founders Guild',
    h1: 'Brandex Builder Guild & Open-Source Community',
    description: 'Connect with 500+ software engineers, product architects, and startup founders in Bangalore. Live meetups, peer reviews, and open-source sprints.',
  },
  {
    route: 'privacy-policy',
    title: 'Privacy Policy – Brandex Digital',
    h1: 'Privacy Policy',
    description: 'Official Privacy Policy regarding user data protection, encryption standards, and digital telemetry.',
  },
  {
    route: 'terms-and-conditions',
    title: 'Terms & Conditions – Brandex Digital',
    h1: 'Terms & Conditions',
    description: 'Read the Terms and Conditions governing use of Brandex website, software development services, and IP ownership policies.',
  },
  {
    route: 'education/explore',
    title: 'KSEEB Curriculum Explorer – Brandex Digital Education',
    h1: 'Karnataka State Board Digital Curriculum Explorer',
    description: 'Explore Karnataka State Board (KSEEB) interactive lessons for Mathematics, Science, and Social Science across Classes 6 to 10.',
  },
  {
    route: 'education/classroom',
    title: 'Smartboard Classroom Player – Brandex Digital Education',
    h1: 'Distraction-Free Smartboard Classroom Player',
    description: 'Interactive classroom player engineered for touch smartboards in schools across Karnataka.',
  },
  {
    route: 'education/login',
    title: 'Educator Portal Login – Brandex Digital Education',
    h1: 'Educator & Institutional Login Portal',
    description: 'Secure educator portal login for Karnataka State Board curriculum materials and lesson sequencing.',
  },
  {
    route: 'education/admin',
    title: 'Institutional Administration – Brandex Digital Education',
    h1: 'School & Institutional Curriculum Administration',
    description: 'Institutional metrics, classroom deployment status, and teacher licensing administration.',
  },
  {
    route: 'community/events',
    title: 'Tech Meetups, Hackathons & Architecture Sprints – Brandex Community',
    h1: 'Bangalore Tech Meetups & Architecture Sprints',
    description: 'Join hands-on software engineering workshops, architectural breakdowns, and hackathons hosted in Bangalore.',
  },
  {
    route: 'community/training',
    title: 'Engineering Apprenticeships & Production Sprints – Brandex Community',
    h1: 'Production Engineering Apprenticeships & Sprints',
    description: 'Intensive engineering cohorts covering distributed systems, React performance optimization, and cloud DevOps.',
  },
  {
    route: 'community/stories',
    title: 'Engineer Case Studies & Member Stories – Brandex Community',
    h1: 'Engineer Stories & Architecture Retrospectives',
    description: 'Read first-hand accounts of software engineering milestones, migrations, and open-source contributions.',
  },
  {
    route: 'community/ambassador',
    title: 'Campus Ambassador Guild – Brandex Community',
    h1: 'Brandex Campus Ambassador Guild',
    description: 'Represent Brandex software architecture and engineering excellence at your university campus.',
  },
  {
    route: 'community/status',
    title: 'Application Status Tracker – Brandex Community',
    h1: 'Application & Apprenticeship Status Tracker',
    description: 'Check the real-time review status of your engineering cohort or builder guild application.',
  },
  {
    route: 'community/projects',
    title: 'Open Source Labs & Architecture Projects – Brandex Community',
    h1: 'Open Source Engineering & Architecture Labs',
    description: 'Explore open-source libraries, UI kits, and micro-benchmarks developed by the Brandex engineering collective.',
  },
  {
    route: 'community/careers',
    title: 'Engineering & Design Careers – Brandex Digital',
    h1: 'Join the Brandex Engineering Team',
    description: 'Explore open full-stack engineering, cloud architecture, and product design roles at Brandex in Bangalore.',
  },
  {
    route: 'community/media',
    title: 'Media Press Kit & Event Gallery – Brandex Community',
    h1: 'Media Press Kit & Architecture Event Gallery',
    description: 'Official Brandex brand assets, logos, engineering summit photographs, and press contact details.',
  },
  {
    route: 'community/search',
    title: 'Ecosystem Search Engine – Brandex Community',
    h1: 'Search Across the Brandex Ecosystem',
    description: 'Instant search across events, engineering articles, community cohorts, and open source projects.',
  },
  {
    route: 'community/brandex',
    title: 'Brandex HQ & Ecosystem Architecture – Brandex Community',
    h1: 'Brandex HQ & Ecosystem Architecture Overview',
    description: 'Complete overview of Brandex digital infrastructure, business automation, and developer community platforms.',
  },
  {
    route: 'community/guidelines',
    title: 'Community Code of Conduct – Brandex Community',
    h1: 'Community Guidelines & Code of Conduct',
    description: 'Standards of respect, technical rigor, and collaborative ethics across all Brandex spaces.',
  },
  {
    route: 'community/work-with-us',
    title: 'Collaborate & Work With Us – Brandex Community',
    h1: 'Collaborate With Brandex Engineering',
    description: 'Partner with Brandex on custom software development, institutional curriculum deployment, or hackathons.',
  },
  {
    route: 'community/overview',
    title: 'Community Overview – Brandex Builder Guild',
    h1: 'Brandex Community & Builder Guild Overview',
    description: 'Overview of the 500+ builder ecosystem in Bangalore, Karnataka.',
  },
  {
    route: 'community/privacy',
    title: 'Community Privacy Policy – Brandex Digital',
    h1: 'Community Privacy Policy',
    description: 'Privacy standards and member data protection across the Brandex community platform.',
  },
  {
    route: 'community/terms',
    title: 'Community Terms of Service – Brandex Digital',
    h1: 'Community Terms of Service',
    description: 'Terms governing participation in the Brandex builder guild, events, and apprenticeships.',
  },
  {
    route: 'community/college-partnership',
    title: 'College & Institutional Partnerships – Brandex Community',
    h1: 'Higher Education & Engineering College Partnerships',
    description: 'Curriculum integration, hackathons, and campus innovation labs for engineering institutions across India.',
  },
  {
    route: 'community/education-pathways',
    title: 'Technical Education Pathways – Brandex Community',
    h1: 'Technical Education & Engineering Career Pathways',
    description: 'Structured roadmaps from foundational web development to distributed systems engineering.',
  },
];

// Blog posts
const blogPostsPath = path.resolve(rootDir, 'src/data/blogPosts.ts');
const blogPostsData = extractObjects(blogPostsPath);

let prerenderCount = 0;

function renderPage(routePath, title, description, h1, extraBodyHtml = '', customSchema = null, explicitCanonical = null) {
  const cleanRoute = routePath.replace(/^\/+/, '').replace(/\/+$/, '');
  const pageCanonical = explicitCanonical || (cleanRoute ? `${CANONICAL_ORIGIN}/${cleanRoute}` : `${CANONICAL_ORIGIN}/`);

  let html = masterHtml;

  // Replace Title
  html = html.replace(/<title>[^<]*<\/title>/i, `<title>${title}</title>`);

  // Replace Canonical
  html = html.replace(/<link\s+rel="canonical"[^>]*>/i, `<link rel="canonical" href="${pageCanonical}" />`);

  // Replace Description
  html = html.replace(/<meta\s+name="description"[^>]*>/i, `<meta name="description" content="${description}" />`);

  // Replace OpenGraph & Twitter
  html = html.replace(/<meta\s+property="og:title"[^>]*>/i, `<meta property="og:title" content="${title}" />`);
  html = html.replace(/<meta\s+property="og:description"[^>]*>/i, `<meta property="og:description" content="${description}" />`);
  html = html.replace(/<meta\s+property="og:url"[^>]*>/i, `<meta property="og:url" content="${pageCanonical}" />`);
  html = html.replace(/<meta\s+name="twitter:title"[^>]*>/i, `<meta name="twitter:title" content="${title}" />`);
  html = html.replace(/<meta\s+name="twitter:description"[^>]*>/i, `<meta name="twitter:description" content="${description}" />`);
  html = html.replace(/<meta\s+name="twitter:url"[^>]*>/i, `<meta name="twitter:url" content="${pageCanonical}" />`);

  // Build semantic crawlable static content inside root container
  let initialContent = '';
  if (cleanRoute === '') {
    initialContent = extraBodyHtml.trim();
  } else {
    initialContent = `
    <div id="prerendered-content" style="opacity:1">
      <header style="padding: 2rem; max-width: 1200px; margin: 0 auto;">
        <nav aria-label="Breadcrumb" style="font-size: 0.85rem; margin-bottom: 1rem;">
          <a href="/">Home</a> / <span aria-current="page">${h1}</span>
        </nav>
        <h1 style="font-size: 2.25rem; font-weight: 800; color: #0f172a; margin-bottom: 1rem;">${h1}</h1>
        <p style="font-size: 1.125rem; color: #475569; max-width: 800px; line-height: 1.6;">${description}</p>
      </header>
      <main style="padding: 0 2rem 4rem; max-width: 1200px; margin: 0 auto;">
        ${extraBodyHtml}
      </main>
    </div>
    `.trim();
  }

  // For crawlers/bots without JavaScript, inject rich semantic crawlable content in <noscript>
  // This keeps <div id="root"></div> completely empty for React, eliminating any UI glitch or flash of different content!
  if (initialContent) {
    html = html.replace(
      '<div id="root"></div>',
      `<div id="root"></div>\n    <noscript id="seo-prerender">\n      ${initialContent}\n    </noscript>`
    );
  }

  // Inject route-specific Schema if provided
  if (customSchema) {
    const schemaScript = `\n    <script type="application/ld+json" data-prerender-schema="true">\n    ${JSON.stringify(customSchema, null, 2)}\n    </script>\n  </head>`;
    html = html.replace('</head>', schemaScript);
  }

  // Create destination folder and write index.html
  const targetFile = cleanRoute ? path.resolve(distDir, cleanRoute, 'index.html') : path.resolve(distDir, 'index.html');
  const targetDir = path.dirname(targetFile);
  if (!fs.existsSync(targetDir)) {
    fs.mkdirSync(targetDir, { recursive: true });
  }
  fs.writeFileSync(targetFile, html, 'utf-8');

  // ALSO generate cleanRoute.html (e.g. dist/community/events.html) for instantaneous Vercel cleanUrls resolution
  if (cleanRoute) {
    const directHtmlFile = path.resolve(distDir, `${cleanRoute}.html`);
    const directHtmlDir = path.dirname(directHtmlFile);
    if (!fs.existsSync(directHtmlDir)) {
      fs.mkdirSync(directHtmlDir, { recursive: true });
    }
    fs.writeFileSync(directHtmlFile, html, 'utf-8');
  }
  prerenderCount++;
}

console.log('[Prerender] Generating static HTML for indexable routes...');

// 0. Render Homepage / into dist/index.html
const homeHeroHtml = `
  <section style="padding: 3.5rem 1.5rem; max-width: 1200px; margin: 0 auto; text-align: center;">
    <div style="display: inline-flex; align-items: center; gap: 0.5rem; padding: 0.4rem 1rem; border-radius: 9999px; background: rgba(79,71,230,0.08); border: 1px solid rgba(79,71,230,0.2); color: #4f47e6; font-size: 0.75rem; font-weight: 700; text-transform: uppercase; margin-bottom: 1.5rem; letter-spacing: 0.06em;">
      Bespoke Digital Systems &amp; Cloud Architecture
    </div>
    <h1 style="font-size: clamp(2.2rem, 5vw, 3.75rem); font-weight: 900; color: #0f172a; line-height: 1.12; letter-spacing: -0.03em; margin-bottom: 1.5rem;">
      Engineering Digital Systems<br />
      <span style="color: #4f47e6;">Built For Real Scale.</span>
    </h1>
    <p style="font-size: 1.15rem; color: #475569; max-width: 680px; margin: 0 auto 2.5rem; line-height: 1.6;">
      We design and engineer bespoke web applications, high-throughput cloud software, and automated workflows tailored to how your business actually works.
    </p>
    <div style="display: flex; gap: 1rem; justify-content: center; flex-wrap: wrap; margin-bottom: 2.5rem;">
      <a href="/contact" style="display: inline-block; padding: 0.85rem 1.75rem; border-radius: 0.75rem; background: #4f47e6; color: #ffffff; font-weight: 700; text-decoration: none; font-size: 0.875rem;">Start Your Project</a>
      <a href="/case-studies" style="display: inline-block; padding: 0.85rem 1.75rem; border-radius: 0.75rem; background: #ffffff; color: #0f172a; font-weight: 700; text-decoration: none; border: 1px solid #cbd5e1; font-size: 0.875rem;">View Our Work</a>
    </div>
    <div style="display: flex; gap: 1.75rem; justify-content: center; flex-wrap: wrap; font-size: 0.8125rem; font-weight: 600; color: #334155; border-top: 1px solid #e2e8f0; padding-top: 1.5rem;">
      <span>✓ 100% Client Code Ownership</span>
      <span>✓ Zero Recurring Platform Tax</span>
      <span>✓ 2–4 Week Turnaround</span>
    </div>
  </section>
`;

renderPage(
  '',
  'Brandex | Next-Gen Digital Solutions for Ambitious Brands',
  'Brandex engineers digital systems built for real scale. Custom web applications, enterprise cloud architecture, automated workflows, and digital learning infrastructure in Bangalore, India.',
  'Engineering Digital Systems Built For Real Scale',
  homeHeroHtml
);

// 1. Render Core Static Pages
staticPages.forEach(p => {
  renderPage(p.route, p.title, p.description, p.h1, p.contentHtml || '');
});

// 2. Render 6 Service Pages
servicesData.forEach(s => {
  const serviceHtml = `
    <section>
      <h2>Architecture &amp; Deliverables</h2>
      <ul>
        ${s.deliverables.map(d => `<li>${d}</li>`).join('')}
      </ul>
      <p><a href="/contact">Schedule a Technical Architecture Diagnostic for ${s.h1}</a></p>
    </section>
  `;

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${CANONICAL_ORIGIN}/services/${s.id}#service`,
    "name": s.h1,
    "serviceType": s.category,
    "description": s.description,
    "provider": {
      "@type": "Organization",
      "name": "Brandex",
      "url": CANONICAL_ORIGIN
    }
  };

  renderPage(`services/${s.id}`, s.title, s.description, s.h1, serviceHtml, serviceSchema);
});

// 3. Render 5 Case Studies
projectsData.forEach(p => {
  const caseStudyHtml = `
    <section>
      <h2>Production Deployment Summary</h2>
      <p>${p.description}</p>
      <p><a href="/case-studies">Explore all Brandex Case Studies</a></p>
    </section>
  `;

  const caseStudySchema = {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    "@id": `${CANONICAL_ORIGIN}/case-studies/${p.id}#article`,
    "headline": p.h1,
    "description": p.description,
    "author": {
      "@type": "Organization",
      "name": "Brandex Engineering Team",
      "url": CANONICAL_ORIGIN
    },
    "publisher": {
      "@type": "Organization",
      "name": "Brandex",
      "url": CANONICAL_ORIGIN
    }
  };

  renderPage(`case-studies/${p.id}`, p.title, p.description, p.h1, caseStudyHtml, caseStudySchema);
});

// 4. Render 50 Blog Posts
blogPostsData.forEach(b => {
  const blogHtml = `
    <article>
      <h2>Article Overview</h2>
      <p>${b.description}</p>
      <p><a href="/blog">Back to Brandex Engineering Blog</a></p>
    </article>
  `;

  const blogSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "@id": `${CANONICAL_ORIGIN}/blog/${b.id}#article`,
    "headline": b.title,
    "description": b.description,
    "publisher": {
      "@type": "Organization",
      "name": "Brandex",
      "url": CANONICAL_ORIGIN
    }
  };

  renderPage(`blog/${b.id}`, `${b.title} | Brandex Engineering`, b.description, b.title, blogHtml, blogSchema);
});

// 5. Render Convenience Alias Routes (pointing canonical to primary parent route)
const aliasRoutes = [
  { route: 'contact-us', parent: `${CANONICAL_ORIGIN}/contact`, title: 'Contact Brandex | Direct Founder Diagnostic' },
  { route: 'privacy', parent: `${CANONICAL_ORIGIN}/privacy-policy`, title: 'Privacy Policy | Brandex' },
  { route: 'terms', parent: `${CANONICAL_ORIGIN}/terms-and-conditions`, title: 'Terms & Conditions | Brandex' },
  { route: 'pavan', parent: `${CANONICAL_ORIGIN}/pavan-kumar`, title: 'Pavan Kumar — Systems Architect | Brandex' },
  { route: 'sathvik-shetty', parent: `${CANONICAL_ORIGIN}/sathvik`, title: 'Sathvik Nagesh — Product Design | Brandex' },
  { route: 'founders/pavan', parent: `${CANONICAL_ORIGIN}/pavan-kumar`, title: 'Pavan Kumar — Systems Architect | Brandex' },
  { route: 'founders/sathvik', parent: `${CANONICAL_ORIGIN}/sathvik`, title: 'Sathvik Nagesh — Product Design | Brandex' },
  { route: 'events', parent: `${CANONICAL_ORIGIN}/community/events`, title: 'Engineering Meetups & Hackathons | Brandex' },
  { route: 'projects', parent: `${CANONICAL_ORIGIN}/community/projects`, title: 'Open Source Projects & Architecture Labs | Brandex' },
  { route: 'training', parent: `${CANONICAL_ORIGIN}/community/training`, title: 'Technical Sprints & Apprenticeships | Brandex' },
  { route: 'stories', parent: `${CANONICAL_ORIGIN}/community/stories`, title: 'Member Stories & Engineering Case Studies | Brandex' },
  { route: 'ambassador', parent: `${CANONICAL_ORIGIN}/community/ambassador`, title: 'Brand Ambassador Guild | Brandex' },
  { route: 'status', parent: `${CANONICAL_ORIGIN}/community/status`, title: 'Application Status Tracker | Brandex' },
  { route: 'careers', parent: `${CANONICAL_ORIGIN}/community/careers`, title: 'Engineering & Design Careers | Brandex' },
  { route: 'media', parent: `${CANONICAL_ORIGIN}/community/media`, title: 'Media & Press Kit | Brandex' },
  { route: 'media/photos', parent: `${CANONICAL_ORIGIN}/community/media`, title: 'Media Gallery | Brandex' },
  { route: 'search', parent: `${CANONICAL_ORIGIN}/community/search`, title: 'Ecosystem Search | Brandex' },
  { route: 'brandex', parent: `${CANONICAL_ORIGIN}/community/brandex`, title: 'Brandex Ecosystem Overview | Brandex' },
  { route: 'ecosystem', parent: `${CANONICAL_ORIGIN}/community/brandex`, title: 'Brandex Ecosystem Overview | Brandex' },
  { route: 'work-with-us', parent: `${CANONICAL_ORIGIN}/community/work-with-us`, title: 'Work With Us | Brandex' },
  { route: 'explore', parent: `${CANONICAL_ORIGIN}/education/explore`, title: 'Curriculum Explorer | Brandex' },
  { route: 'classroom', parent: `${CANONICAL_ORIGIN}/education/classroom`, title: 'Classroom Player | Brandex' },
  { route: 'login', parent: `${CANONICAL_ORIGIN}/education/login`, title: 'Educator Login | Brandex' },
  { route: 'admin', parent: `${CANONICAL_ORIGIN}/education/admin`, title: 'Educator Admin | Brandex' },
  { route: 'case-studies/srushti', parent: `${CANONICAL_ORIGIN}/case-studies/srushti-publications`, title: 'Srushti Publications E-Commerce Case Study | Brandex' },
  { route: 'srushti-publications', parent: `${CANONICAL_ORIGIN}/case-studies/srushti-publications`, title: 'Srushti Publications E-Commerce Case Study | Brandex' },
  { route: 'srushti', parent: `${CANONICAL_ORIGIN}/case-studies/srushti-publications`, title: 'Srushti Publications E-Commerce Case Study | Brandex' },
  { route: 'projects/srushti-publications', parent: `${CANONICAL_ORIGIN}/case-studies/srushti-publications`, title: 'Srushti Publications E-Commerce Case Study | Brandex' },
  { route: 'vignan-public-school', parent: `${CANONICAL_ORIGIN}/case-studies/vignan-public-school`, title: 'Vignan Public School Platform Case Study | Brandex' },
  { route: 'vignan-tutorials', parent: `${CANONICAL_ORIGIN}/case-studies/vignan-tutorials`, title: 'Vignan Tutorials Student Portal Case Study | Brandex' },
  { route: 'propquant-ai', parent: `${CANONICAL_ORIGIN}/case-studies/propquant-ai`, title: 'PropQuant.ai Algorithmic Trading Platform Case Study | Brandex' },
  { route: 'geniusphere', parent: `${CANONICAL_ORIGIN}/case-studies/geniusphere`, title: 'GeniuSphere 3D WebGL LMS Case Study | Brandex' },
];

aliasRoutes.forEach(a => {
  renderPage(
    a.route,
    a.title,
    'Official Brandex digital infrastructure, engineering services, and architecture labs.',
    a.title,
    `<p>Redirecting to <a href="${a.parent}">${a.parent}</a>...</p>`,
    null,
    a.parent
  );
});

// 6. Render Branded 404 Recovery Page (dist/404.html)
const notFoundHtml = `
  <section style="padding: 5rem 1.5rem; max-width: 800px; margin: 0 auto; text-align: center; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;">
    <div style="font-size: 5.5rem; font-weight: 900; color: #4f47e6; line-height: 1; margin-bottom: 1rem; letter-spacing: -0.04em;">404</div>
    <h1 style="font-size: 2.25rem; font-weight: 800; color: #0f172a; margin-bottom: 1rem;">Page Not Found</h1>
    <p style="font-size: 1.125rem; color: #475569; max-width: 540px; margin: 0 auto 2.5rem; line-height: 1.6;">
      The requested URL does not exist or has been relocated. Explore our core engineering services, case studies, or return home.
    </p>
    <div style="display: flex; gap: 1rem; justify-content: center; flex-wrap: wrap;">
      <a href="/" style="display: inline-block; padding: 0.85rem 1.75rem; border-radius: 0.75rem; background: #4f47e6; color: #ffffff; font-weight: 700; text-decoration: none; font-size: 0.875rem;">Return to Homepage</a>
      <a href="/services" style="display: inline-block; padding: 0.85rem 1.75rem; border-radius: 0.75rem; background: #ffffff; color: #0f172a; font-weight: 700; text-decoration: none; border: 1px solid #cbd5e1; font-size: 0.875rem;">Core Services</a>
      <a href="/case-studies" style="display: inline-block; padding: 0.85rem 1.75rem; border-radius: 0.75rem; background: #ffffff; color: #0f172a; font-weight: 700; text-decoration: none; border: 1px solid #cbd5e1; font-size: 0.875rem;">Case Studies</a>
      <a href="/contact" style="display: inline-block; padding: 0.85rem 1.75rem; border-radius: 0.75rem; background: #ffffff; color: #0f172a; font-weight: 700; text-decoration: none; border: 1px solid #cbd5e1; font-size: 0.875rem;">Contact Founders</a>
    </div>
  </section>
`;

let notFoundPageHtml = masterHtml;
notFoundPageHtml = notFoundPageHtml.replace(/<title>[^<]*<\/title>/i, `<title>404 Page Not Found – Brandex Digital</title>`);
notFoundPageHtml = notFoundPageHtml.replace(/<meta\s+name="description"[^>]*>/i, `<meta name="description" content="The requested page could not be found. Return to Brandex software engineering and cloud infrastructure." />`);
notFoundPageHtml = notFoundPageHtml.replace(/<link\s+rel="canonical"[^>]*>/i, `<meta name="robots" content="noindex, nofollow" />`);
notFoundPageHtml = notFoundPageHtml.replace('<div id="root"></div>', `<div id="root">${notFoundHtml}</div>`);
// Strip SPA script bundle from static 404.html to avoid unnecessary hydration on true 404s
notFoundPageHtml = notFoundPageHtml.replace(/<script\s+type="module"[^>]*src="\/assets\/[^"]+"[^>]*><\/script>/gi, '');
fs.writeFileSync(path.resolve(distDir, '404.html'), notFoundPageHtml, 'utf-8');
console.log('[Prerender] Successfully generated dist/404.html (branded recovery with noindex)!');

console.log(`[Prerender] Successfully generated ${prerenderCount} standalone static HTML pages in dist/!`);
