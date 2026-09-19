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

interface SEOHeadProps {
  title?: string;
  description?: string;
  canonicalUrl?: string;
  keywords?: string;
  image?: string;
  type?: "website" | "article";
  publishedTime?: string;
  author?: string;
}

export default function SEOHead({
  title: propTitle,
  description: propDesc,
  canonicalUrl: propCanonical,
  keywords: propKeywords,
  image: propImage = "https://brandex-official.vercel.app/main_logo.png",
  type = "website",
}: SEOHeadProps = {}) {
  const { pathname } = useLocation();

  useEffect(() => {
    // Determine meta: check passed props first, then exact pathname match, then fallback
    const staticMeta = pageMeta[pathname];
    const title = propTitle || staticMeta?.title || (
      pathname.startsWith("/blog/")
        ? "Blog Article – Brandex | Technical Architecture"
        : pathname.startsWith("/case-studies/")
        ? "Case Study – Brandex | Impact & Results"
        : pageMeta["/"].title
    );

    const description = propDesc || staticMeta?.description || (
      pathname.startsWith("/blog/")
        ? "Read in-depth technical insights on software development, edge architectures, and scalable cloud systems from Brandex engineers."
        : pathname.startsWith("/case-studies/")
        ? "Discover our in-depth case study showcasing technical architecture and business growth results."
        : pageMeta["/"].description
    );

    const keywords = propKeywords || staticMeta?.keywords || "Brandex, software engineering, Bangalore, web development, cloud architectures, AI automation";

    // Dynamic Title
    document.title = title;

    // Canonical link
    const canonicalUrl = propCanonical 
      ? (propCanonical.startsWith("http") ? propCanonical : `https://brandex-official.vercel.app${propCanonical}`)
      : `https://brandex-official.vercel.app${pathname === "/" ? "" : pathname}`;

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

    // OpenGraph Tags
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
    setMeta("og:image", propImage);

    setTwitter("twitter:title", title);
    setTwitter("twitter:description", description);
    setTwitter("twitter:url", canonicalUrl);
    setTwitter("twitter:image", propImage);
  }, [pathname, propTitle, propDesc, propCanonical, propKeywords, propImage, type]);

  return null;
}
