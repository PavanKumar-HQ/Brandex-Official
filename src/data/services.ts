export interface ServiceFAQ {
  question: string;
  answer: string;
}

export interface ServiceProcessStep {
  step: string;
  title: string;
  detail: string;
}

export interface ServiceProblemSolution {
  problem: string;
  solution: string;
}

export interface ServiceData {
  id: string;
  title: string;
  shortTitle: string;
  tagline: string;
  metaDescription: string;
  description: string;
  targetAudience: string[];
  problemsSolved: ServiceProblemSolution[];
  process: ServiceProcessStep[];
  deliverables: string[];
  faqs: ServiceFAQ[];
  relatedServices: string[];
  relatedProjectIds: string[];
  relatedBlogIds: string[];
}

export const servicesData: ServiceData[] = [
  {
    id: "custom-crm-erp",
    title: "Custom CRM & ERP Systems",
    shortTitle: "CRM & ERP Systems",
    tagline: "Centralized operations, customer pipelines, and automated invoicing",
    metaDescription: "Tailored CRM and ERP systems engineered for specific business workflows, automated billing, sales tracking, and multi-role access control.",
    description: "Generic SaaS CRMs force your business into rigid boxes with expensive per-seat fees. Brandex designs and engineers bespoke CRM and ERP software tailored to your exact sales pipelines, customer lifecycles, inventory tracking, and billing operations with 100% data ownership.",
    targetAudience: [
      "Companies with complex sales funnels outgrowing spreadsheets and generic CRMs",
      "Retailers, manufacturers, and distributors needing unified inventory and order workflows",
      "Educational institutions and training academies managing admissions and student records",
      "Service agencies requiring integrated quotation, invoicing, and client tracking"
    ],
    problemsSolved: [
      {
        problem: "Paying thousands in recurring per-seat SaaS licensing for unused CRM features",
        solution: "Bespoke internal software with unlimited user accounts, zero per-seat fees, and 100% source code ownership."
      },
      {
        problem: "Sales reps manually updating spreadsheets leading to missed leads and delayed follow-ups",
        solution: "Automated lead intake from websites, WhatsApp, and email with auto-assignment and activity tracking."
      },
      {
        problem: "Disjointed invoicing and manual reconciliation with payment gateways",
        solution: "One-click automated GST invoices, Razorpay/Stripe integration, and automated payment receipt generation."
      },
      {
        problem: "Uncontrolled access to sensitive business numbers and client records",
        solution: "Granular Role-Based Access Control (RBAC) ensuring staff only view authorized data."
      }
    ],
    process: [
      {
        step: "01",
        title: "Workflow & Schema Mapping",
        detail: "We audit your sales funnels, team roles, database schemas, and operational bottlenecks to build a tailored architecture blueprint."
      },
      {
        step: "02",
        title: "Interactive UX & Wireframes",
        detail: "We design clean, fast dashboards with actionable tables, lead Kanban boards, and quick-filter search views."
      },
      {
        step: "03",
        title: "Full-Stack Development & Integrations",
        detail: "We build secure REST/GraphQL endpoints, database indexing, and seamless WhatsApp/Email transaction triggers."
      },
      {
        step: "04",
        title: "Data Migration & Staff Onboarding",
        detail: "We safely migrate historical records, train your team, and provide 60-day hypercare support post-deployment."
      }
    ],
    deliverables: [
      "Bespoke CRM & ERP web platform with responsive mobile-friendly dashboards",
      "Granular multi-role permissions (Super Admin, Sales Manager, Rep, Accountant)",
      "Automated lead capture, WhatsApp notification triggers, and auto-followups",
      "Automated invoice and quotation PDF generator with GST compliance",
      "Real-time database (PostgreSQL / Supabase) with automated daily backups",
      "Complete Git source code repository and deployment documentation"
    ],
    faqs: [
      {
        question: "Can this replace Salesforce, HubSpot, or Zoho for our team?",
        answer: "Yes. We build only what your business actually needs, eliminating the clunkiness, complexity, and steep monthly subscription fees of generic SaaS giants."
      },
      {
        question: "How difficult is it to migrate our current spreadsheet data?",
        answer: "We handle the entire data migration process, including cleaning, deduplicating, and indexing your historical records into the new relational database."
      },
      {
        question: "Can our field team access the CRM on mobile devices?",
        answer: "Yes. All our CRM interfaces are engineered mobile-first with touch-optimized controls, fast loading, and offline draft capabilities."
      }
    ],
    relatedServices: ["ai-workflow-automation", "api-database-systems", "cloud-devops-infrastructure"],
    relatedProjectIds: ["srushti-publications", "vignan-tutorials"],
    relatedBlogIds: ["multi-tenant-rbac-security", "automated-business-crm-sync", "postgresql-connection-pooling"]
  },
  {
    id: "ai-workflow-automation",
    title: "AI Agents & Workflow Automation",
    shortTitle: "AI & Automation",
    tagline: "Autonomous WhatsApp bots, webhook pipelines, and zero-effort operations",
    metaDescription: "Intelligent process automation, autonomous WhatsApp customer bots, webhook pipelines, and multi-system data synchronization with zero data loss.",
    description: "Eliminate repetitive human work and delight customers with instant responses. Brandex builds custom AI agents, automated WhatsApp business bots, multi-app webhook pipelines, and document-parsing workflows that operate flawlessly 24 hours a day.",
    targetAudience: [
      "Businesses receiving high volumes of WhatsApp, email, or web inquiries",
      "Operations teams spending hours manually copying data between software tools",
      "E-commerce & retail brands wanting automated order tracking and instant customer support",
      "Service providers needing automated appointment booking and diagnostic workflows"
    ],
    problemsSolved: [
      {
        problem: "Slow response times to inquiries during nights and weekends causing lost sales",
        solution: "Custom AI customer support agents on WhatsApp and web that qualify leads and answer FAQs 24/7."
      },
      {
        problem: "Manual repetitive data entry across multiple disconnected platforms",
        solution: "Event-driven webhook pipelines that sync order status, customer updates, and payments instantly."
      },
      {
        problem: "Time wasted extracting data from scanned invoices, receipts, and documents",
        solution: "Automated OCR and AI parsing models that extract key fields directly into your database."
      },
      {
        problem: "Automations breaking silently when third-party APIs have temporary downtime",
        solution: "Resilient message queues with exponential backoff retries and alert bots ensuring zero data loss."
      }
    ],
    process: [
      {
        step: "01",
        title: "Process & Failure Point Audit",
        detail: "We map out high-frequency repetitive tasks, customer touchpoints, and existing software integrations."
      },
      {
        step: "02",
        title: "AI Logic & Pipeline Architecture",
        detail: "We design conversation trees, webhook triggers, payload validation, and safety guardrails."
      },
      {
        step: "03",
        title: "Bot Development & API Wiring",
        detail: "We build custom cloud workers, WhatsApp Business API connections, and database synchronization logic."
      },
      {
        step: "04",
        title: "Edge Case Testing & Monitoring",
        detail: "We stress test message volumes, verify retry queues, and set up live alerting channels for your team."
      }
    ],
    deliverables: [
      "Custom WhatsApp & web AI chat agents with company knowledge base integration",
      "Multi-system webhook ingestion pipelines with automated data reconciliation",
      "Automated customer notification engine (WhatsApp, SMS, transactional email)",
      "Automated document and receipt parsing pipelines",
      "Live telemetry dashboard with automated error alerts"
    ],
    faqs: [
      {
        question: "Does the AI bot hallucinate or provide false company information?",
        answer: "No. We implement strict Retrieval-Augmented Generation (RAG) guardrails. The AI only responds using your verified company documents and FAQs, gracefully handing off complex issues to human agents."
      },
      {
        question: "Can you automate tools like WhatsApp Business and Google Sheets?",
        answer: "Yes. We regularly connect WhatsApp Cloud API, Google Workspace, payment gateways, and custom internal systems."
      }
    ],
    relatedServices: ["custom-crm-erp", "api-database-systems", "cloud-devops-infrastructure"],
    relatedProjectIds: ["propquant-ai", "srushti-publications"],
    relatedBlogIds: ["webhook-reliability-idempotency", "automated-business-crm-sync", "redis-distributed-caching-patterns"]
  },
  {
    id: "mobile-app-development",
    title: "Mobile & Cross-Platform App Development",
    shortTitle: "Mobile Apps",
    tagline: "High-performance iOS & Android apps with offline support and fluid touch UX",
    metaDescription: "Bespoke iOS and Android application development using React Native and Flutter, featuring offline sync, real-time push notifications, and hardware integrations.",
    description: "Deliver a flawless mobile experience to your customers and field workforce. Brandex designs and develops native-speed iOS and Android applications with offline-first synchronization, push notifications, camera/GPS integrations, and buttery-smooth 60fps animations.",
    targetAudience: [
      "Brands wanting a direct-to-consumer mobile app on the App Store and Google Play",
      "Educational institutions delivering interactive learning modules to students",
      "Logistics and service companies equipping field staff with offline-capable tools",
      "Startups launching proprietary mobile products and subscription platforms"
    ],
    problemsSolved: [
      {
        problem: "Clunky hybrid web wrappers that feel laggy and unresponsive to native gestures",
        solution: "Clean React Native / Flutter architecture utilizing native platform UI components and GPU acceleration."
      },
      {
        problem: "App failure and blank screens when users enter low-connectivity or offline areas",
        solution: "Offline-first local SQLite caching with automatic background synchronization once connectivity resumes."
      },
      {
        problem: "Difficult and delayed App Store & Google Play approval processes",
        solution: "End-to-end management of app store compliance, developer certificates, and automated store release pipelines."
      }
    ],
    process: [
      {
        step: "01",
        title: "Mobile UX & Prototype Design",
        detail: "We design tactile mobile layouts, thumb-friendly navigation, and interactive prototypes in Figma."
      },
      {
        step: "02",
        title: "Cross-Platform Engineering",
        detail: "We develop the application using React Native or Flutter with strict TypeScript safety and state management."
      },
      {
        step: "03",
        title: "Hardware & Cloud Integration",
        detail: "We hook up camera scanners, biometric authentication, GPS location, push notifications, and backend APIs."
      },
      {
        step: "04",
        title: "App Store Publishing & Hypercare",
        detail: "We prepare screenshots, privacy policies, and app store listings, ensuring swift Google Play and App Store approval."
      }
    ],
    deliverables: [
      "Production-ready iOS and Android application binaries (.ipa and .aab)",
      "Offline-first local database caching with background sync",
      "Real-time push notification infrastructure (Firebase Cloud Messaging)",
      "Biometric login (Face ID / Fingerprint) and secure local storage",
      "Full app store submission handling for Google Play Store and Apple App Store",
      "Complete mobile source code ownership and build scripts"
    ],
    faqs: [
      {
        question: "Do you build separate apps for iOS and Android or one codebase?",
        answer: "We use modern cross-platform frameworks (React Native / Flutter) that share up to 90% of the codebase across both iOS and Android, cutting development costs and time in half while maintaining native speed."
      },
      {
        question: "Can the app function without an internet connection?",
        answer: "Yes. We engineer offline-first architectures using local encrypted databases that store data locally and sync automatically when the device reconnects."
      }
    ],
    relatedServices: ["web-engineering", "api-database-systems", "cloud-devops-infrastructure"],
    relatedProjectIds: ["geniusphere", "vignan-public-school"],
    relatedBlogIds: ["micro-interactions-framer-motion", "full-stack-typescript-type-safety", "sub-second-web-performance"]
  },
  {
    id: "web-engineering",
    title: "Web Platforms & SaaS Product Engineering",
    shortTitle: "Web & SaaS Engineering",
    tagline: "Sub-second web platforms, student portals, and scalable SaaS applications",
    metaDescription: "Custom-engineered web platforms and multi-tenant SaaS products built with Next.js, React, and TypeScript for high throughput and sub-second page performance.",
    description: "Brandex engineers high-performance web platforms and digital portals built from the ground up with modern frameworks like React, Next.js, and TypeScript. We deliver sub-100ms response times, custom role-based portals, and architectures tailored to your business model.",
    targetAudience: [
      "High-growth startups and established brands requiring lightning-fast web experiences",
      "Educational institutions needing interactive student learning platforms and video portals",
      "B2B service firms looking to elevate conversion rates from organic search",
      "SaaS founders building multi-tenant web applications with recurring billing"
    ],
    problemsSolved: [
      {
        problem: "Slow page loads (>3s) causing high bounce rates and lost conversions",
        solution: "Bespoke code-split assets, edge caching, and optimized media delivery guaranteeing sub-second LCP performance."
      },
      {
        problem: "Heavy WordPress / Shopify monthly plugin subscriptions and security vulnerabilities",
        solution: "Clean, zero-template architecture where you own 100% of the source code with zero ongoing platform licensing fees."
      },
      {
        problem: "Inadequate SEO foundations and missing semantic search markup",
        solution: "Built-in server-side metadata, clean canonical routing, and Schema.org JSON-LD structured data for Google, Bing, and AI search engines."
      }
    ],
    process: [
      {
        step: "01",
        title: "Technical Discovery & Architecture",
        detail: "We audit user journeys, data requirements, and deployment goals to define the database schema and component hierarchy."
      },
      {
        step: "02",
        title: "UI/UX & Interactive Design",
        detail: "We craft bespoke layouts focusing on clear spatial hierarchy, tactile action buttons, and fast checkout flows."
      },
      {
        step: "03",
        title: "Full-Stack Implementation",
        detail: "Strict TypeScript hygiene, zero-bloat styling, automated webhook hooks, and edge CDN routing configured for global speed."
      },
      {
        step: "04",
        title: "QA & Hypercare Handover",
        detail: "Rigorous cross-device validation, Core Web Vitals testing, full Git repository IP handover, and 30-day post-launch support."
      }
    ],
    deliverables: [
      "Production-ready Next.js / React web application with responsive layouts",
      "100% client source code ownership transferred with complete documentation",
      "Sub-second Core Web Vitals performance audit (95+ Lighthouse score)",
      "Structured data JSON-LD graph (Organization, WebSite, Breadcrumbs)",
      "Direct integration with payment gateways (Razorpay/Stripe) and contact endpoints",
      "30-day post-launch deployment hypercare and architecture support"
    ],
    faqs: [
      {
        question: "Do I own the source code after launch?",
        answer: "Yes, 100%. Upon project completion and handover, full IP rights, source repositories, and deployment configurations are completely transferred to your business."
      },
      {
        question: "Can we integrate our existing CRM or booking tools?",
        answer: "Absolutely. We build custom API bridges and webhooks to synchronize your web platform with your existing tools seamlessly."
      }
    ],
    relatedServices: ["custom-crm-erp", "mobile-app-development", "cloud-devops-infrastructure"],
    relatedProjectIds: ["vignan-public-school", "vignan-tutorials", "srushti-publications"],
    relatedBlogIds: ["sub-second-web-performance", "conversion-rate-optimization-ux", "nextjs-15-app-router-migration"]
  },
  {
    id: "cloud-devops-infrastructure",
    title: "Cloud Infrastructure, DevOps & Security",
    shortTitle: "Cloud & DevOps",
    tagline: "Scalable cloud deployments, automated CI/CD pipelines, and hardened security",
    metaDescription: "Enterprise cloud architecture on AWS, GCP, and Cloudflare. Automated CI/CD pipelines, Docker containerization, database clustering, and security audits.",
    description: "Keep your applications fast, reliable, and unhackable. Brandex designs and manages robust cloud infrastructure across AWS, Google Cloud, and Cloudflare. We automate continuous deployment, implement database failover replication, and protect your digital assets with enterprise-grade security.",
    targetAudience: [
      "Companies experiencing server crashes, slow response times, or unexpected downtime",
      "Development teams spending hours on manual, risky production deployments",
      "Businesses storing sensitive client data requiring security hardening and backups",
      "Founders scaling from local prototypes to production multi-server architectures"
    ],
    problemsSolved: [
      {
        problem: "Unplanned server crashes during marketing campaigns and traffic spikes",
        solution: "Auto-scaling server clusters and edge CDN caching that handle traffic spikes without breaking a sweat."
      },
      {
        problem: "Manual, fragile deployments leading to bugs and production downtime",
        solution: "Automated Git CI/CD pipelines with preview environments, test suites, and zero-downtime rollback capabilities."
      },
      {
        problem: "Catastrophic data loss risk due to missing or untested database backups",
        solution: "Automated daily and point-in-time database backups stored across geographically redundant cloud regions."
      },
      {
        problem: "Vulnerability to DDoS attacks, credential leaks, and data breaches",
        solution: "Cloudflare enterprise firewall, SSL encryption, rate limiting, and environment variable vault security."
      }
    ],
    process: [
      {
        step: "01",
        title: "Infrastructure & Security Audit",
        detail: "We inspect your existing server configurations, DNS setup, database queries, and vulnerability vectors."
      },
      {
        step: "02",
        title: "Architecture & Container Blueprint",
        detail: "We design containerized microservices, VPC networks, managed database clusters, and edge CDN rules."
      },
      {
        step: "03",
        title: "Automated CI/CD Pipeline Build",
        detail: "We configure GitHub Actions, automated Docker builds, staging environments, and production rollouts."
      },
      {
        step: "04",
        title: "Monitoring, Alerting & Runbooks",
        detail: "We set up 24/7 uptime monitors, alert bots on Slack/WhatsApp, and deliver step-by-step disaster recovery runbooks."
      }
    ],
    deliverables: [
      "Hardened cloud infrastructure configuration on AWS / GCP / Cloudflare",
      "Automated CI/CD pipeline for instant, zero-downtime deployments",
      "Automated multi-region database backup and disaster recovery plan",
      "DDoS protection, SSL certificates, rate-limiting, and Web Application Firewall (WAF)",
      "24/7 uptime telemetry and automated incident alert bots"
    ],
    faqs: [
      {
        question: "Can you help migrate our existing servers without downtime?",
        answer: "Yes. We execute zero-downtime database and DNS migrations with parallel staging and instant cutover."
      },
      {
        question: "Which cloud providers do you work with?",
        answer: "We specialize in AWS, Google Cloud Platform (GCP), Cloudflare, Vercel, Supabase, and DigitalOcean, matching the right provider to your budget and technical needs."
      }
    ],
    relatedServices: ["web-engineering", "custom-crm-erp", "api-database-systems"],
    relatedProjectIds: ["propquant-ai", "geniusphere"],
    relatedBlogIds: ["redis-distributed-caching-patterns", "postgresql-connection-pooling", "multi-tenant-rbac-security"]
  },
  {
    id: "api-database-systems",
    title: "Custom APIs, Microservices & Data Pipelines",
    shortTitle: "APIs & Data Pipelines",
    tagline: "Custom microservices, legacy software bridges, and real-time data sync",
    metaDescription: "Custom REST and GraphQL API engineering, database architecture, third-party ERP/CRM integrations, and real-time event synchronization.",
    description: "Connect your disparate tools and unlock real-time data across your company. Brandex designs and builds high-throughput REST and GraphQL APIs, custom microservices, third-party software connectors, and event-driven data pipelines with strict consistency and zero data loss.",
    targetAudience: [
      "Companies with legacy accounting or ERP software that cannot talk to modern web tools",
      "Businesses integrating multiple third-party APIs (payment gateways, WhatsApp, logistics)",
      "Organizations with slow, unindexed databases causing application lag",
      "Startups needing scalable backend microservices to support web and mobile apps"
    ],
    problemsSolved: [
      {
        problem: "Legacy software operating in silos, requiring manual data re-entry",
        solution: "Custom middleware bridges that automatically extract, transform, and sync data between legacy and modern systems."
      },
      {
        problem: "Sluggish database queries slowing down customer-facing applications",
        solution: "Database indexing, query optimization, connection pooling, and Redis caching layers delivering <50ms queries."
      },
      {
        problem: "Disjointed API documentation making it impossible for internal teams to integrate",
        solution: "Interactive OpenAPI / Swagger documentation with interactive code snippets and sandbox environments."
      }
    ],
    process: [
      {
        step: "01",
        title: "API Schema & Data Contract Design",
        detail: "We define clean data models, authentication methods (OAuth2, JWT, API Keys), and endpoint specifications."
      },
      {
        step: "02",
        title: "Microservice Engineering",
        detail: "We build modular, stateless API handlers in TypeScript or Python with strict request validation."
      },
      {
        step: "03",
        title: "Database Indexing & Caching Layer",
        detail: "We configure connection pools, write optimized SQL queries, and implement Redis pub/sub for real-time events."
      },
      {
        step: "04",
        title: "Stress Testing & Documentation",
        detail: "We conduct automated load testing, document endpoints with Swagger/Postman, and deploy with telemetry."
      }
    ],
    deliverables: [
      "Custom REST / GraphQL API server with strict validation and error handling",
      "High-performance database schema with indexing and automated migrations",
      "Redis caching layer for sub-50ms data retrieval and pub/sub events",
      "Third-party integration bridges (Payment gateways, CRMs, WhatsApp, ERPs)",
      "Interactive Swagger / OpenAPI documentation and Postman collections"
    ],
    faqs: [
      {
        question: "Can you connect our custom database to WhatsApp or external services?",
        answer: "Yes. We build secure webhook listeners and API gateways that trigger external events instantly whenever database records change."
      },
      {
        question: "How do you handle API security and rate limiting?",
        answer: "We employ cryptographically signed JWT tokens, IP rate limiting, input sanitization, and encrypted environment variable vaults."
      }
    ],
    relatedServices: ["custom-crm-erp", "ai-workflow-automation", "cloud-devops-infrastructure"],
    relatedProjectIds: ["srushti-publications", "propquant-ai"],
    relatedBlogIds: ["webhook-reliability-idempotency", "redis-distributed-caching-patterns", "postgresql-connection-pooling"]
  }
];

export function getServiceById(id: string): ServiceData | undefined {
  return servicesData.find((s) => s.id === id);
}
