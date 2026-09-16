import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const pageMeta: Record<string, { title: string; description: string; keywords?: string }> = {
  "/": {
    title: "Brandex | Next-Gen Digital Solutions for Ambitious Brands",
    description: "Brandex empowers businesses with high-performance websites, custom applications, and automated workflows designed to accelerate growth.",
    keywords: "web development, custom software, business automation, React, Next.js, digital engineering, Bangalore",
  },
  "/services": {
    title: "Services – Brandex | Web Development, Automation & Custom Apps",
    description: "End-to-end digital services including web development, business automation, custom applications, and cloud software engineering.",
    keywords: "custom software development, business workflows, API automation, responsive web design, mobile apps",
  },
  "/solutions": {
    title: "Solutions – Brandex | Industry-Specific Digital Systems",
    description: "Tailored digital solutions for restaurants, healthcare, finance, logistics, and retail. Built to solve real business bottlenecks.",
    keywords: "industry solutions, enterprise SaaS, workflow automation, healthcare tech, restaurant digital systems",
  },
  "/case-studies": {
    title: "Case Studies – Brandex | Real Projects, Real Results",
    description: "Explore how Brandex drove 340% order growth, 60% fewer no-shows, and 40+ hours saved weekly through digital transformation.",
    keywords: "case studies, client portfolio, software transformation, ROI metrics, web design success",
  },
  "/about": {
    title: "About – Brandex | The Team Behind Your Digital Growth",
    description: "Meet the engineering and design leaders at Brandex. Four co-founders driving technology, delivery, growth, and finance.",
    keywords: "Brandex team, founders, engineering agency, Bangalore startup, digital transformation team",
  },
  "/blog": {
    title: "Blog – Brandex | Insights on Engineering, Design & Growth",
    description: "Thoughts on software engineering, product design, and scaling digital systems straight from the Brandex team.",
    keywords: "engineering blog, tech articles, web architecture, automation insights, design patterns",
  },
  "/contact": {
    title: "Contact – Brandex | Start Your Digital Project Today",
    description: "Get in touch with Brandex to discuss your software, website, or automation project. Bangalore based, operating worldwide.",
    keywords: "contact Brandex, hire software developers, web development quote, project inquiry",
  },
  "/contact-us": {
    title: "Contact Us – Brandex | Legal & Merchant Information",
    description: "Official merchant and legal contact details for Brandex. Registered legal entity information and support channels.",
    keywords: "merchant information, legal entity, Brandex support",
  },
  "/terms-and-conditions": {
    title: "Terms & Conditions – Brandex",
    description: "Read the Terms and Conditions governing use of Brandex website, software development services, and liability policies.",
    keywords: "terms and conditions, refund policy, service agreement",
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
