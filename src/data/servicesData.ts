export type ServiceFeature = {
  title: string;
  description: string;
};

export type ServiceFAQ = {
  q: string;
  a: string;
};

export type ServiceTechItem = {
  name: string;
  role: string;
};

export type ServiceComparisonItem = {
  feature: string;
  brandex: string;
  legacy: string;
};

export type ServiceData = {
  id: string;
  slug: string;
  title: string;
  tagline: string;
  description: string;
  iconName: string; // lucide-react icon
  color: string;
  features: ServiceFeature[];
  process: string[];
  industriesServed: string[];
  faqs: ServiceFAQ[];
  techStack?: ServiceTechItem[];
  comparison?: ServiceComparisonItem[];
};

export const servicesData: ServiceData[] = [
  {
    id: "software",
    slug: "software-development",
    title: "Software Development",
    tagline: "Custom software built around your exact business workflows.",
    description: "We design and engineer bespoke software systems tailored to your unique operational processes — from multi-tenant SaaS products and enterprise ERPs to custom operational dashboards. Our architectures prioritize sub-second performance, zero-trust security, and 100% client intellectual property ownership.",
    iconName: "Code2",
    color: "hsl(230 60% 55%)",
    features: [
      { title: "Custom CRMs & Operations", description: "Bespoke customer relationship management, quotation engines, and automated operational pipelines (like our flagship Travel CRM platform)." },
      { title: "Enterprise ERPs & SCM Systems", description: "Consolidate accounting, inventory, supply chain, and employee management into one unified custom dashboard without recurring SaaS license taxes." },
      { title: "Document & Workflow Automation", description: "Extract, auto-parse, and convert raw Word docs, PDFs, and spreadsheets into structured digital workflows and vector-grade PDF exports." },
      { title: "High-Throughput API Architecture", description: "Robust REST & GraphQL microservices, webhooks, and secure database partitioning connecting payment gateways, messaging bots, and third-party tools." },
      { title: "Zero-Trust Security & DPDP Compliance", description: "Cryptographically isolated data stores, defensive RBAC permissions, and strict audit compliance with India's DPDP Act." },
      { title: "100% IP & Full Code Ownership", description: "Full handover of production repositories, database schemas, and infrastructure configs with zero vendor lock-in." }
    ],
    process: ["Discovery & Architecture Blueprint", "UI/UX & Wireframing", "Agile Milestone Sprints", "Security & QA Audits", "Production Deployment", "24/7 SLA & AMC Support"],
    industriesServed: ["Healthcare", "Manufacturing", "Fintech", "Retail & Commerce", "Education", "Logistics & Supply Chain"],
    techStack: [
      { name: "Node.js & TypeScript", role: "Backend Microservices" },
      { name: "PostgreSQL & Supabase", role: "Relational Data Storage" },
      { name: "React & Next.js", role: "High-Throughput Web Portals" },
      { name: "Docker & Cloud Edge", role: "Containerized Deployment" },
      { name: "Redis", role: "In-Memory Caching & Rate Limiting" },
      { name: "Tailwind CSS", role: "Design Systems & UI" }
    ],
    comparison: [
      { feature: "Code Ownership", brandex: "100% Client Ownership (Full Git Repo Transfer)", legacy: "Rented licenses, proprietary lock-in, recurring user fees" },
      { feature: "Customization", brandex: "Engineered exactly for your business logic", legacy: "Rigid predefined templates requiring forced workflow changes" },
      { feature: "Security & Isolation", brandex: "Isolated databases, DPDP compliance, zero-trust architecture", legacy: "Shared multi-tenant database risks & generic security" },
      { feature: "Ongoing Costs", brandex: "One-time build or transparent retainer with zero seat tax", legacy: "Monthly per-user billing scaling uncontrollably" }
    ],
    faqs: [
      { q: "How long does it take to build custom enterprise software?", a: "Depending on system scope, a production-ready MVP typically takes 6-10 weeks, while full enterprise ERP or CRM architectures span 3-6 months with bi-weekly milestone demos." },
      { q: "Who owns the software source code and intellectual property?", a: "You do. Upon milestone completion and final payment, 100% of all source code, database architectures, APIs, and IP rights transfer entirely to your company." },
      { q: "Do you offer post-launch maintenance and SLA support?", a: "Yes. We provide comprehensive Annual Maintenance Contracts (AMCs), 24/7 uptime monitoring, security patching, and continuous feature expansion." },
      { q: "Can custom software integrate with our existing accounting and payment tools?", a: "Absolutely. We build custom API connectors for Tally, Razorpay, Stripe, WhatsApp Business API, Zoho, Salesforce, and custom legacy databases." }
    ]
  },
  {
    id: "website",
    slug: "website-development",
    title: "Website Development & Custom CMS",
    tagline: "High-performance websites and bespoke CMS platforms that outrank competitors and drive conversion.",
    description: "Brandex engineers high-speed corporate websites, custom headless CMS platforms, and digital portals built from the ground up for search dominance, conversion, and sub-second load times. We replace sluggish, bloated legacy websites with modern React, Next.js, and Astro architectures that outpace decades-old competitors in Google search and AI answer engines.",
    iconName: "Globe",
    color: "hsl(210 70% 50%)",
    features: [
      { title: "Custom CMS & Headless Admin", description: "Bespoke, intuitive content management systems (Strapi, Sanity, Payload, or Custom React Admin) built around your team's workflow — free from vulnerable WordPress plugins and database bloat." },
      { title: "Sub-Second Core Web Vitals", description: "Engineered with Next.js, React, and Astro island architecture to achieve sub-second LCP, zero CLS layout shifts, and sub-50ms INP responsiveness across all devices." },
      { title: "Technical SEO & AEO (AI Engine Optimization)", description: "Pre-rendered semantic HTML, complete Schema.org JSON-LD graphs, automated XML sitemaps, Open Graph cards, and machine-readable llms.txt integration for Google and AI Overviews." },
      { title: "Luxury UI/UX & Responsive Safety", description: "Bespoke design systems that project executive authority, fluid viewport safety from 320px to 1920px+, touch-friendly ergonomics, and zero unintended horizontal scroll." },
      { title: "E-Commerce & High-Converting Funnels", description: "Custom transactional stores with lightning-fast cart experiences, multi-currency support, GST-compliant invoicing, and friction-free payment checkouts." },
      { title: "100% Code & Asset Ownership", description: "You own every single line of code, design file, and database record. Zero proprietary platform lock-in, zero monthly builder taxes." }
    ],
    process: ["UI/UX Prototyping & UX Wireframes", "Headless CMS & Content Modeling", "Modern Frontend & Component Engineering", "Technical SEO & Schema Optimization", "Cross-Device QA & Speed Audits", "Production Go-Live & Post-Launch Support"],
    industriesServed: ["Corporate & B2B Enterprises", "E-Commerce & Retail", "Education & Universities", "Real Estate & Architecture", "Hospitality & Travel", "Healthcare & Clinics"],
    techStack: [
      { name: "Next.js & React 18+", role: "Server-Rendered Frontend & Routing" },
      { name: "Astro Framework", role: "Zero-JS Island Architecture for Content" },
      { name: "TypeScript", role: "Type-Safe Enterprise Reliability" },
      { name: "Tailwind CSS & Shadcn UI", role: "Responsive Design System & Ergonomics" },
      { name: "Headless CMS (Strapi/Sanity/Custom)", role: "Content Management & Publishing" },
      { name: "Vercel & Cloudflare Edge", role: "Global CDN & Sub-Second TTFB" }
    ],
    comparison: [
      { feature: "Content Management (CMS)", brandex: "Modern Headless CMS tailored to your editorial team — lightning fast, clean database", legacy: "Bloated WordPress or Drupal with 40+ third-party plugins that break on update" },
      { feature: "Page Speed & Core Web Vitals", brandex: "Sub-second load times, 95+ Google PageSpeed score, 0 Cumulative Layout Shift", legacy: "4 to 8 second load times on shared servers with bloated theme builders" },
      { feature: "Search & AI Discoverability", brandex: "Built-in Schema.org graph, AEO optimization for AI Overviews, clean semantic HTML", legacy: "Generic Yoast plugin defaults with missing entity connections" },
      { feature: "Security & Vulnerabilities", brandex: "Static and edge-rendered boundaries; no exposed SQL injection vectors", legacy: "Frequent PHP plugin vulnerabilities, brute force attacks, and spam bots" },
      { feature: "Source Code & IP Rights", brandex: "100% Full Intellectual Property & Git Repository Ownership", legacy: "Locked in proprietary SaaS builders (Wix/Squarespace) or hostage agency code" }
    ],
    faqs: [
      { q: "How do your websites outrank legacy competitors who have been around for decades?", a: "Legacy agencies rely on old WordPress websites with heavy plugins, slow TTFB, and poor Core Web Vitals. We win by deploying modern Jamstack and Next.js architectures that achieve perfect 95+ PageSpeed scores, structured Schema.org JSON-LD graphs, and comprehensive topical authority that Google's algorithm and AI Overviews prioritize over outdated websites." },
      { q: "What is a Custom CMS, and how does it compare to WordPress?", a: "A custom or headless CMS separates your content creation dashboard from your frontend code. Unlike WordPress—which suffers from security holes, slow database queries, and plugin conflicts—a headless CMS (like Sanity, Strapi, or our bespoke React CMS) gives your team an ultra-fast, tailored publishing interface while keeping the public website blazing fast and virtually unhackable." },
      { q: "Will our website be 100% mobile responsive and accessible?", a: "Yes. Every website is built mobile-first and audited across 15+ viewport resolutions (from 320px up to 1920px+). We guarantee zero horizontal overflow, touch-safe buttons, proper safe-area padding for mobile notches, and accessible contrast ratios." },
      { q: "Who owns the website and source code once the project is finished?", a: "You own 100% of the intellectual property, source code repositories, design assets, and database schemas upon project completion. There are zero platform licensing fees or vendor lock-in." },
      { q: "How long does a custom website and CMS project take from start to finish?", a: "A standard high-performance corporate website with CMS integration takes 3 to 5 weeks. More complex e-commerce portals or multi-portal platforms typically require 6 to 8 weeks." },
      { q: "Can you migrate our existing content, blog posts, and domain without losing SEO traffic?", a: "Yes. We execute seamless 301 redirect mapping, preserving your existing URLs, backlinks, and search equity while transitioning your site to the new high-speed architecture." }
    ]
  },
  {
    id: "ai",
    slug: "ai-automation",
    title: "AI & Automation",
    tagline: "Intelligent systems that work while you sleep.",
    description: "Implement AI-powered chatbots, workflow automations, and intelligent agents to eliminate repetitive tasks and accelerate your operations.",
    iconName: "Brain",
    color: "hsl(270 55% 55%)",
    features: [
      { title: "Custom AI Agents", description: "Automate customer support and lead qualification." },
      { title: "Workflow Automation", description: "Connect apps via Zapier/Make to eliminate manual data entry." },
      { title: "WhatsApp Bots", description: "Engage customers 24/7 directly on WhatsApp." },
      { title: "Data Analysis", description: "Leverage machine learning to extract insights from your business data." }
    ],
    process: ["Workflow Audit", "AI Strategy", "Model Integration", "Automation Testing", "Deployment"],
    industriesServed: ["Customer Service", "Sales", "Healthcare", "E-commerce"],
    faqs: [
      { q: "Can AI really replace our customer support?", a: "AI handles 80% of routine inquiries instantly. Complex issues are smoothly escalated to human agents." },
      { q: "Is our data secure with your AI tools?", a: "Yes, we use enterprise-grade APIs (like OpenAI's API) which do not train public models on your data." }
    ]
  },
  {
    id: "cyber",
    slug: "cybersecurity",
    title: "Cybersecurity",
    tagline: "Secure by design, protected by default.",
    description: "Protect your business with enterprise-grade cybersecurity — from penetration testing and audits to endpoint security and incident response.",
    iconName: "Shield",
    color: "hsl(0 60% 50%)",
    features: [
      { title: "Penetration Testing", description: "Identify vulnerabilities before hackers do." },
      { title: "Security Audits", description: "Comprehensive reviews of your IT infrastructure." },
      { title: "Endpoint Protection", description: "Secure company devices against malware and ransomware." },
      { title: "Incident Response", description: "Rapid action plans for data breaches or attacks." }
    ],
    process: ["Vulnerability Scan", "Threat Modeling", "Implementation", "Continuous Monitoring", "Staff Training"],
    industriesServed: ["Finance", "Healthcare", "Government", "Enterprise"],
    faqs: [
      { q: "How often should we run security audits?", a: "We recommend a comprehensive audit annually, with automated vulnerability scans running monthly." },
      { q: "Do you provide compliance support?", a: "Yes, we help businesses achieve compliance with ISO 27001, GDPR, and HIPAA standards." }
    ]
  }
];
