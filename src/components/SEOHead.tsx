import { useEffect } from "react";
import { useLocation } from "react-router-dom";

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
    title: "Terms & Conditions – Brandex",
    description: "Read the Terms and Conditions governing use of Brandex website, software development services, and IP ownership policies.",
    keywords: "terms and conditions, refund policy, service agreement",
  },
  "/privacy-policy": {
    title: "Privacy Policy – Brandex",
    description: "Official Privacy Policy regarding user data protection, encryption standards, and digital telemetry.",
    keywords: "privacy policy, data protection",
  },
};

export default function SEOHead() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Determine meta: check exact match or fallback for dynamic routes
    let meta = pageMeta[pathname];
    if (!meta) {
      if (pathname.startsWith("/blog/")) {
        meta = {
          title: "Blog Article – Brandex | Engineering & Design",
          description: "Read in-depth insights on software development and scalable architecture from Brandex.",
        };
      } else if (pathname.startsWith("/case-studies/")) {
        meta = {
          title: "Case Study – Brandex | Impact & Results",
          description: "Discover our in-depth case study showcasing technical architecture and business growth results.",
        };
      } else {
        meta = pageMeta["/"];
      }
    }

    // Title
    document.title = meta.title;

    // Canonical link
    const canonicalUrl = `https://brandex.dev${pathname === "/" ? "" : pathname}`;
    let canonicalTag = document.querySelector('link[rel="canonical"]');
    if (canonicalTag) {
      canonicalTag.setAttribute("href", canonicalUrl);
    }

    // Meta Description
    const descTag = document.querySelector('meta[name="description"]');
    if (descTag) descTag.setAttribute("content", meta.description);

    // Meta Keywords
    if (meta.keywords) {
      let keywordsTag = document.querySelector('meta[name="keywords"]');
      if (keywordsTag) keywordsTag.setAttribute("content", meta.keywords);
    }

    // OpenGraph Tags
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute("content", meta.title);

    const ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) ogDesc.setAttribute("content", meta.description);

    const ogUrl = document.querySelector('meta[property="og:url"]');
    if (ogUrl) ogUrl.setAttribute("content", canonicalUrl);

    // Twitter Tags
    const twTitle = document.querySelector('meta[name="twitter:title"]');
    if (twTitle) twTitle.setAttribute("content", meta.title);

    const twDesc = document.querySelector('meta[name="twitter:description"]');
    if (twDesc) twDesc.setAttribute("content", meta.description);

    const twUrl = document.querySelector('meta[name="twitter:url"]');
    if (twUrl) twUrl.setAttribute("content", canonicalUrl);
  }, [pathname]);

  return null;
}
