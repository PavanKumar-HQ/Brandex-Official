import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { SITE_CONFIG, getCanonicalUrl, getAbsoluteAssetUrl } from "@/config/site";

const pageMeta: Record<string, { title: string; description: string; keywords?: string }> = {
  "/": {
    title: "Brandex — Engineering Digital Systems Built For Real Scale",
    description: "Bespoke web platforms, high-throughput cloud applications, and automated workflows. Sub-second performance, zero recurring platform tax, 100% client code ownership.",
    keywords: "web development, custom software, business automation, React, Next.js, digital engineering, Bangalore",
  },
  "/services": {
    title: "Services – Brandex | Software Development, AI & Cloud Infrastructure",
    description: "End-to-end bespoke digital services: sub-second web applications, AI automation engines, and cloud microservices designed for scale.",
    keywords: "custom software development, business workflows, API automation, responsive web design, mobile apps",
  },
  "/pricing": {
    title: "Engineering Sprints & Investment Packages – Brandex",
    description: "Transparent engineering sprint packages. Zero hidden costs, 100% client code ownership, fixed deliverables, and sub-second SLAs.",
    keywords: "web development pricing, engineering sprints, software packages",
  },
  "/solutions": {
    title: "Solutions – Brandex | Industry-Specific Digital Systems",
    description: "Tailored digital systems for restaurants, healthcare, finance, logistics, and retail. Built to solve real operational bottlenecks.",
    keywords: "industry solutions, enterprise SaaS, workflow automation, healthcare tech, restaurant digital systems",
  },
  "/case-studies": {
    title: "Case Studies – Brandex | Real Projects, Real Results",
    description: "Explore how Brandex drove +340% order growth, sub-18ms latency, and 40+ hours saved weekly through digital transformation.",
    keywords: "case studies, client portfolio, software transformation, ROI metrics, web design success",
  },
  "/community": {
    title: "Brandex Community | 500+ Software Builders & Founders Guild",
    description: "Connect with 500+ software engineers, product architects, and startup founders in Bangalore. Live meetups, peer reviews, and open-source sprints.",
    keywords: "developer community, Bangalore tech meetup, open source contributors, builder guild",
  },
  "/education": {
    title: "Brandex Digital Education | Smart Classroom Curriculum (KSEEB)",
    description: "Curriculum-mapped video lessons and interactive formative assessments for Karnataka State Board Classes 6 to 10 with distraction-free smartboard player.",
    keywords: "Karnataka State syllabus video lessons, KSEEB digital learning, smartboard classroom edtech",
  },
  "/education/explore": {
    title: "Curriculum Explorer – Classes 6 to 10 Video Lessons & Quizzes | Brandex EDU",
    description: "Explore chapter-wise Karnataka State Board video lessons, interactive quizzes, and learning objectives for Classes 6 through 10.",
    keywords: "KSEEB curriculum explorer, class 10 science video lessons, class 9 maths quiz",
  },
  "/pavan-kumar": {
    title: "Pavan Kumar — Co-Founder & Chief Systems Architect | Brandex",
    description: "Engineering sub-second web platforms, enterprise cloud pipelines, and bespoke software systems. Bangalore, India.",
    keywords: "Pavan Kumar, systems architect, Brandex founder, full stack engineer Bangalore",
  },
  "/sathvik": {
    title: "Sathvik Nagesh — Co-Founder & Head of Product Design | Brandex",
    description: "Bridging human-centered interaction design with high-performance digital engineering and the Liquid Glass design system.",
    keywords: "Sathvik Nagesh, product designer, Brandex co-founder, UI UX architect",
  },
  "/about": {
    title: "About – Brandex | The Team Behind Your Digital Growth",
    description: "Meet the engineering and design leaders at Brandex. Engineering bespoke digital infrastructure for ambitious businesses.",
    keywords: "Brandex team, founders, engineering agency, Bangalore startup, digital transformation team",
  },
  "/blog": {
    title: "Blog – Brandex | Insights on Engineering, Design & Scale",
    description: "Deep-dives on software architecture, sub-second web performance, and automated systems straight from the Brandex team.",
    keywords: "engineering blog, tech articles, web architecture, automation insights, design patterns",
  },
  "/contact": {
    title: "Start Your Project – Brandex | Bespoke Digital Engineering",
    description: "Schedule a diagnostic with Brandex founders. Discuss your custom software, website architecture, or workflow automation project.",
    keywords: "contact Brandex, hire software developers, web development quote, project inquiry",
  },
  "/contact-us": {
    title: "Contact Us – Brandex | Merchant & Support Information",
    description: "Official merchant and support channels for Brandex Digital Infrastructure. Vijaynagar, Bangalore.",
    keywords: "merchant information, legal entity, Brandex support",
  },
  "/terms-and-conditions": {
    title: "Terms & Conditions – Brandex Digital",
    description: "Read the Terms and Conditions governing use of Brandex website, software development services, and IP ownership policies.",
    keywords: "terms and conditions, refund policy, service agreement",
  },
  "/privacy-policy": {
    title: "Privacy Policy – Brandex Digital",
    description: "Official Privacy Policy regarding user data protection, encryption standards, and digital telemetry.",
    keywords: "privacy policy, data protection",
  },
  "/privacy": {
    title: "Privacy Policy & Data Rights – Brandex",
    description: "Official Privacy Policy regarding user data protection, encryption standards, and digital telemetry.",
    keywords: "privacy policy, data protection",
  },
  "/terms": {
    title: "Terms of Service & Usage Agreement – Brandex",
    description: "Read the Terms and Conditions governing use of Brandex website, software development services, and IP ownership policies.",
    keywords: "terms and conditions, refund policy, service agreement",
  },
  "/services/custom-crm-erp": {
    title: "Custom CRM & ERP Software Systems – Brandex Digital",
    description: "Replace recurring per-seat SaaS costs with bespoke CRM and ERP systems engineered for your business workflows. Zero licensing tax, full data ownership.",
    keywords: "custom CRM development, ERP systems Bangalore, workflow automation, inventory ERP, sales CRM",
  },
  "/services/ai-workflow-automation": {
    title: "AI Agents & Autonomous Workflow Automation – Brandex Digital",
    description: "Custom AI agents, WhatsApp bots, and automated webhook pipelines that eliminate repetitive operational bottlenecks 24/7.",
    keywords: "AI workflow automation, WhatsApp business bots, autonomous agents, process automation Bangalore",
  },
  "/services/mobile-app-development": {
    title: "High-Performance Mobile App Development (iOS & Android) – Brandex Digital",
    description: "Offline-first, native-performance iOS and Android applications built with React Native. Real-time sync, push notifications, and store deployment.",
    keywords: "mobile app development, React Native agency Bangalore, iOS development, Android app developers",
  },
  "/services/web-engineering": {
    title: "Bespoke Web Platforms & SaaS Engineering – Brandex Digital",
    description: "Sub-second React & Next.js web applications, client portals, and SaaS platforms engineered for high throughput and search discoverability.",
    keywords: "SaaS engineering, Next.js web development, custom web portal, web architecture Bangalore",
  },
  "/services/cloud-devops-infrastructure": {
    title: "Cloud Infrastructure, DevOps & Edge Deployment – Brandex Digital",
    description: "Automated CI/CD pipelines, container orchestration, edge CDN caching, and automated multi-region backup systems with 99.9% uptime SLAs.",
    keywords: "DevOps consulting, AWS infrastructure, Cloudflare edge, Docker Kubernetes Bangalore",
  },
  "/services/api-database-systems": {
    title: "Custom APIs, Microservices & Database Architecture – Brandex Digital",
    description: "High-throughput REST and GraphQL APIs, PostgreSQL optimization, Redis caching layers, and legacy system integrations built for sub-50ms latency.",
    keywords: "API development, microservices architecture, database design, backend engineering Bangalore",
  },
  "/community/projects": {
    title: "Open Source Projects & Architecture Labs | Brandex Community",
    description: "Explore open-source developer tools, architecture templates, and collaborative projects built by the Brandex builder network.",
    keywords: "open source projects, developer tools, GitHub repositories, software builder projects",
  },
  "/community/events": {
    title: "Engineering Meetups & Hackathons | Brandex Community",
    description: "Join tech meetups, architecture deep-dives, and hands-on developer hackathons organized by Brandex in Bangalore.",
    keywords: "Bangalore tech meetups, engineering hackathons, developer gatherings, tech talks",
  },
  "/community/training": {
    title: "Engineering Apprenticeships & Technical Sprints | Brandex Community",
    description: "Accelerated technical training sprints in modern web engineering, distributed systems, and product design.",
    keywords: "software training, engineering apprenticeships, full stack coaching, developer mentorship",
  },
  "/community/stories": {
    title: "Founder Stories & Builder Journeys | Brandex Community",
    description: "Real stories from founders, software architects, and product designers building impactful technology in Bangalore.",
    keywords: "founder stories, builder journey, tech case studies, developer highlights",
  },
  "/community/careers": {
    title: "Careers & Open Roles | Brandex Engineering",
    description: "Join Brandex in building high-performance digital systems. Explore open positions for software architects, full-stack engineers, and product designers.",
    keywords: "Brandex careers, software engineering jobs Bangalore, frontend developer jobs, hiring developers",
  },
  "/community/brandex": {
    title: "Brandex HQ & Ecosystem Architecture | Brandex",
    description: "Overview of Brandex Digital Systems & Infrastructure entity, mission, technical principles, and ecosystem initiatives.",
    keywords: "Brandex HQ, company overview, tech architecture, Bangalore engineering studio",
  },
  "/community/search": {
    title: "Search Knowledge & Community Hub | Brandex",
    description: "Search across Brandex case studies, engineering blogs, tutorials, community projects, and documentation.",
    keywords: "Brandex search, knowledge base, developer resources",
  },
  "/education/explore/class-6": {
    title: "Class 6 Karnataka State Board Curriculum – Lessons & Quizzes | Brandex EDU",
    description: "Interactive video lessons and formative chapter assessments for Class 6 Karnataka State Board (KSEEB).",
    keywords: "Class 6 KSEEB, Karnataka board class 6 science, maths video lessons",
  },
  "/education/explore/class-7": {
    title: "Class 7 Karnataka State Board Curriculum – Lessons & Quizzes | Brandex EDU",
    description: "Interactive video lessons and chapter tests for Class 7 Karnataka State Board (KSEEB).",
    keywords: "Class 7 KSEEB, Karnataka board class 7 science, maths video lessons",
  },
  "/education/explore/class-8": {
    title: "Class 8 Karnataka State Board Curriculum – Lessons & Quizzes | Brandex EDU",
    description: "Curriculum-aligned video lessons and interactive quizzes for Class 8 Karnataka State Board (KSEEB).",
    keywords: "Class 8 KSEEB, Karnataka board class 8 science, maths video lessons",
  },
  "/education/explore/class-9": {
    title: "Class 9 Karnataka State Board Curriculum – Lessons & Quizzes | Brandex EDU",
    description: "Comprehensive video lessons, concept breakdowns, and practice quizzes for Class 9 Karnataka State Board (KSEEB).",
    keywords: "Class 9 KSEEB, Karnataka board class 9 science, maths video lessons",
  },
  "/education/explore/class-10": {
    title: "Class 10 SSLC Karnataka State Board Curriculum – Lessons & Quizzes | Brandex EDU",
    description: "Complete chapter video lessons and exam-oriented quizzes for Class 10 SSLC Karnataka State Board (KSEEB).",
    keywords: "Class 10 SSLC KSEEB, Karnataka 10th standard science maths, board exam preparation",
  },
};

export interface SEOHeadProps {
  title?: string;
  description?: string;
  canonicalUrl?: string;
  keywords?: string;
  image?: string;
  type?: "website" | "article";
  publishedTime?: string;
  author?: string;
  noindex?: boolean;
  schema?: object | object[];
}

let activeCustomPath = "";

export default function SEOHead({
  title: propTitle,
  description: propDesc,
  canonicalUrl: propCanonical,
  keywords: propKeywords,
  image: propImage,
  type = "website",
  noindex = false,
  schema,
}: SEOHeadProps = {}) {
  const { pathname } = useLocation();
  const hasCustomProps = Boolean(propTitle || propDesc || propCanonical || schema);

  useEffect(() => {
    // If this is a child call with explicit props, mark this route as customized
    if (hasCustomProps) {
      activeCustomPath = pathname;
    } else if (activeCustomPath === pathname) {
      // If an explicit child call has already customized this route, skip layout-level fallback
      return;
    }

    // Determine meta: check passed props first, then exact pathname match, then fallback
    const staticMeta = pageMeta[pathname];
    const title = propTitle || staticMeta?.title || (
      pathname.startsWith("/blog/")
        ? "Blog Article – Brandex | Technical Architecture"
        : pathname.startsWith("/case-studies/")
        ? "Case Study – Brandex | Impact & Results"
        : pathname.startsWith("/services/")
        ? "Service Architecture – Brandex"
        : pageMeta["/"].title
    );

    const description = propDesc || staticMeta?.description || (
      pathname.startsWith("/blog/")
        ? "Read in-depth technical insights on software development, edge architectures, and scalable cloud systems from Brandex engineers."
        : pathname.startsWith("/case-studies/")
        ? "Discover our in-depth case study showcasing technical architecture and business growth results."
        : pathname.startsWith("/services/")
        ? "Bespoke digital architecture, workflow automation, and custom software systems built by Brandex."
        : pageMeta["/"].description
    );

    const keywords = propKeywords || staticMeta?.keywords || "Brandex, software engineering, Bangalore, web development, cloud architectures, AI automation";
    const resolvedImage = propImage ? getAbsoluteAssetUrl(propImage) : getAbsoluteAssetUrl(SITE_CONFIG.defaultOgImage);

    // Dynamic Title
    document.title = title;

    // Canonical link
    const canonicalUrl = propCanonical 
      ? getCanonicalUrl(propCanonical)
      : getCanonicalUrl(pathname === "/" ? "" : pathname);

    let canonicalTag = document.querySelector('link[rel="canonical"]');
    if (!canonicalTag) {
      canonicalTag = document.createElement("link");
      canonicalTag.setAttribute("rel", "canonical");
      document.head.appendChild(canonicalTag);
    }
    canonicalTag.setAttribute("href", canonicalUrl);

    // Meta Description
    let descTag = document.querySelector('meta[name="description"]');
    if (!descTag) {
      descTag = document.createElement("meta");
      descTag.setAttribute("name", "description");
      document.head.appendChild(descTag);
    }
    descTag.setAttribute("content", description);

    // Meta Keywords
    let keywordsTag = document.querySelector('meta[name="keywords"]');
    if (!keywordsTag) {
      keywordsTag = document.createElement("meta");
      keywordsTag.setAttribute("name", "keywords");
      document.head.appendChild(keywordsTag);
    }
    keywordsTag.setAttribute("content", keywords);

    // Robots meta (index/noindex)
    let robotsTag = document.querySelector('meta[name="robots"]');
    if (!robotsTag) {
      robotsTag = document.createElement("meta");
      robotsTag.setAttribute("name", "robots");
      document.head.appendChild(robotsTag);
    }
    robotsTag.setAttribute(
      "content",
      noindex
        ? "noindex, nofollow"
        : "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"
    );

    // Helper functions for OpenGraph and Twitter
    const setMeta = (property: string, content: string) => {
      let tag = document.querySelector(`meta[property="${property}"]`);
      if (!tag) {
        tag = document.createElement("meta");
        tag.setAttribute("property", property);
        document.head.appendChild(tag);
      }
      tag.setAttribute("content", content);
    };

    const setTwitter = (name: string, content: string) => {
      let tag = document.querySelector(`meta[name="${name}"]`);
      if (!tag) {
        tag = document.createElement("meta");
        tag.setAttribute("name", name);
        document.head.appendChild(tag);
      }
      tag.setAttribute("content", content);
    };

    setMeta("og:title", title);
    setMeta("og:description", description);
    setMeta("og:url", canonicalUrl);
    setMeta("og:type", type);
    setMeta("og:image", resolvedImage);
    setMeta("og:site_name", SITE_CONFIG.name);

    setTwitter("twitter:title", title);
    setTwitter("twitter:description", description);
    setTwitter("twitter:url", canonicalUrl);
    setTwitter("twitter:image", resolvedImage);
    setTwitter("twitter:card", "summary_large_image");

    // Dynamic JSON-LD schema injection if provided
    let dynamicSchemaScript = document.querySelector('script[data-dynamic-seo="true"]');
    if (schema) {
      if (!dynamicSchemaScript) {
        dynamicSchemaScript = document.createElement("script");
        dynamicSchemaScript.setAttribute("type", "application/ld+json");
        dynamicSchemaScript.setAttribute("data-dynamic-seo", "true");
        document.head.appendChild(dynamicSchemaScript);
      }
      dynamicSchemaScript.textContent = JSON.stringify(schema);
    } else if (dynamicSchemaScript) {
      dynamicSchemaScript.remove();
    }
  }, [pathname, propTitle, propDesc, propCanonical, propKeywords, propImage, type, noindex, schema]);

  return null;
}
