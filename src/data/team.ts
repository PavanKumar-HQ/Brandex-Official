export interface OpenSourceProject {
  title: string;
  repoUrl: string;
  description: string;
  category: string;
  tags: string[];
}

export interface TeamMember {
  slug: string;
  name: string;
  role: string;
  title: string;
  tagline: string;
  initials: string;
  image: string | null;
  bio: string;
  longBio: string[];
  educationOrCertifications?: string[];
  expertise: string[];
  philosophies: { title: string; desc: string }[];
  keyInitiatives: { title: string; desc: string; link?: string }[];
  openSourceProjects?: OpenSourceProject[];
  linkedin: string | null;
  twitter: string | null;
  github: string | null;
  email: string;
}

export const openSourceProjects: OpenSourceProject[] = [
  {
    title: "Convertly",
    repoUrl: "https://github.com/Sathvik-Nagesh/convertly",
    description: "High-performance, privacy-first client-side file and media conversion utility engine with instant batch transformations and zero server-side storage overhead.",
    category: "Developer Utility & Media Tooling",
    tags: ["TypeScript", "WebAssembly", "Client-Side Processing", "Open Source"]
  },
  {
    title: "Passworks",
    repoUrl: "https://github.com/Sathvik-Nagesh/passworks.git",
    description: "Cryptographically resilient password generation, entropy analysis, and offline vault security suite engineered to defend against modern brute-force and dictionary attacks.",
    category: "Cybersecurity & Cryptography",
    tags: ["Cybersecurity", "Cryptography", "Entropy Analysis", "Zero-Knowledge"]
  },
  {
    title: "Blushbooth",
    repoUrl: "https://github.com/Sathvik-Nagesh/Blushbooth",
    description: "Interactive, browser-based digital photo booth web application featuring real-time WebGL shader filters, dynamic canvas compositing, and instant multi-format exports.",
    category: "Interactive Web & Creative Tech",
    tags: ["React", "WebGL / Canvas", "Real-Time Processing", "UI/UX"]
  },
  {
    title: "GeoSnap",
    repoUrl: "https://github.com/Sathvik-Nagesh/GeoSnap",
    description: "Geospatial metadata capture and location-verified visual documentation platform designed for precision mapping, field audits, and geolocation tagging.",
    category: "Geospatial & Field Tech",
    tags: ["Geolocation API", "Mapping", "Metadata Verification", "PWA"]
  }
];

export const teamMembers: TeamMember[] = [
  {
    slug: "sathvik-nagesh",
    name: "Sathvik Nagesh",
    role: "Founder & Chief Technology Officer",
    title: "CTO, Cybersecurity Specialist & Systems Architect",
    tagline: "Architecting battle-hardened cybersecurity defenses, zero-trust infrastructure, and elite full-stack web applications for global scale.",
    initials: "SN",
    image: "/team/sathvik-nagesh.jpg",
    bio: "Founder and CTO at Brandex. Specialized in enterprise cybersecurity, threat modeling, and full-stack software architecture with advanced cybersecurity training from the United States.",
    longBio: [
      "Sathvik Nagesh is the Founder and Chief Technology Officer at Brandex, leading engineering architecture, offensive/defensive cybersecurity posture, and product innovation across the organization. Having completed specialized cybersecurity training in the United States, Sathvik brings elite, battle-tested security paradigms—including Zero-Trust Architecture, threat emulation, cryptography, and secure runtime boundaries—directly into every software system Brandex engineers.",
      "As a master full-stack engineer and distributed systems architect, Sathvik commands deep proficiency across the modern software engineering spectrum—from sub-second reactive frontend interfaces in React, Next.js, and TypeScript, to high-throughput microservices, edge-computed APIs, PostgreSQL data partitioning, and autonomous AI agents in production.",
      "Under his technical direction, Brandex has engineered enterprise-grade commercial platforms including the Brandex Travel CRM & Quotation Platform and the Brandex Invoice Builder & Inventory Suite, alongside high-security digital infrastructures for education, healthcare, publishing, and fintech clients.",
      "Sathvik is also a passionate open-source contributor and developer ecosystem advocate, authoring security utilities, media engines, and interactive applications that empower the global builder community."
    ],
    educationOrCertifications: [
      "Advanced Cybersecurity Specialization & Applied Security Studies (United States)",
      "Zero-Trust Architecture & Threat Modeling Practitioner",
      "Full-Stack Software Engineering & Distributed Cloud Architecture"
    ],
    expertise: [
      "Enterprise Cybersecurity & Zero-Trust",
      "Full-Stack Architecture & Next.js",
      "Autonomous AI Agents & LLM Systems",
      "Cloud Infrastructure & Edge Systems",
      "Core Web Vitals & Sub-Second Latency",
      "High-Throughput APIs & Microservices"
    ],
    philosophies: [
      {
        title: "Security is Not an Afterthought",
        desc: "Every system must be secure by default. We bake cryptographic isolation, defensive authorization, and threat mitigation into the architecture from line one."
      },
      {
        title: "Performance is an Inflexible Feature",
        desc: "Applications must load instantly and respond in milliseconds on any hardware or network. Zero bloat, optimal tree-shaking, and clean execution paths."
      },
      {
        title: "Engineering That Solves Real-World Problems",
        desc: "We prioritize clean, readable, robust code that delivers measurable business ROI and unlocks competitive advantage."
      }
    ],
    keyInitiatives: [
      {
        title: "Brandex Travel CRM & Quotation Engine",
        desc: "Architected a real-time multi-currency itinerary parsing and sales CRM pipeline for tour operators worldwide.",
        link: "/products/travel-crm"
      },
      {
        title: "Brandex Invoice Builder & Inventory Suite",
        desc: "Engineered an offline-capable, GST-compliant real-time billing and revenue tracking engine with a lifetime license model.",
        link: "/products/invoice-builder"
      },
      {
        title: "Open Source Tooling Ecosystem",
        desc: "Published developer utilities including Convertly, Passworks, Blushbooth, and GeoSnap for global builders.",
        link: "https://github.com/Sathvik-Nagesh"
      },
      {
        title: "Brandex Developer Community & Hackathons",
        desc: "Co-leads the Brandex builder ecosystem, hosting technical teardowns, code reviews, and live architecture build sessions.",
        link: "/community"
      }
    ],
    openSourceProjects: openSourceProjects,
    linkedin: "https://www.linkedin.com/in/sathvik-nagesh/",
    twitter: null,
    github: "https://github.com/Sathvik-Nagesh",
    email: "sathvik@brandex.co.in"
  },
  {
    slug: "pavan-kumar",
    name: "Pavan Kumar",
    role: "Co-Founder & Chief Executive Officer",
    title: "Co-Founder & CEO, Brandex",
    tagline: "Co-founder at Brandex, working across software engineering, AI literacy, and education initiatives based in Bengaluru.",
    initials: "PK",
    image: "/team/pavan-kumar.webp",
    bio: "Pavan Kumar is a co-founder of Brandex, a technology company based in Bengaluru, leading executive strategy, AI literacy, university partnerships, and builder communities.",
    longBio: [
      "Pavan Kumar is a co-founder of Brandex, a technology company based in Bengaluru. As Co-Founder and Chief Executive Officer (CEO), Pavan directs enterprise strategy, institutional university partnerships, AI literacy initiatives, and product operations.",
      "With a dedicated commitment to technology education and software development, Pavan spearheads Brandex's educational outreach and workshop programs—delivering hands-on sessions in AI literacy, full-stack web development, and cloud computing for schools and colleges, including Geniusphere initiatives and collegiate programs across Karnataka.",
      "Pavan co-leads the Brandex Community and builder ecosystem alongside Sathvik Nagesh, mentoring student developers, campus ambassadors, and aspiring founders through hackathons, architecture teardowns, and startup incubators.",
      "Under his operational leadership, Brandex delivers custom enterprise software, CRM systems, and digital infrastructure projects with strict milestone governance, transparent communication, and engineering excellence."
    ],
    educationOrCertifications: [
      "Executive Technology Leadership & Strategic Operations",
      "Educational Program Architecture & AI Literacy Curriculum",
      "Campus Leadership & Builder Community Governance"
    ],
    expertise: [
      "Executive Leadership & Strategy",
      "AI Literacy & Educational Workshops",
      "Campus Leadership & Student Mentorship",
      "Software Project Delivery & Governance",
      "Enterprise & Institutional Partnerships",
      "Community Hackathons & Builder Ecosystem"
    ],
    philosophies: [
      {
        title: "Empowering Students Through Practical Skills",
        desc: "Academic degrees provide foundational theory; hands-on engineering builds lasting careers. We equip students with modern tools, practical project experience, and industry mentorship."
      },
      {
        title: "Uncompromising Milestone Clarity",
        desc: "Clients, academic partners, and teams deserve zero ambiguity. Transparent roadmaps, proactive progress updates, and reliable execution build lasting trust."
      },
      {
        title: "Community-First Innovation",
        desc: "Great technology ecosystems grow through open knowledge-sharing, practical mentorship, and collective builder curiosity."
      }
    ],
    keyInitiatives: [
      {
        title: "Brandex Education & Geniusphere AI Workshops",
        desc: "Directs curriculum design and hands-on AI literacy workshops for schools, degree colleges, and engineering institutions.",
        link: "/education"
      },
      {
        title: "Campus Ambassador Leadership Program",
        desc: "Scales student developer chapters and tech ambassador networks across collegiate campuses in India.",
        link: "/education/campus-ambassador"
      },
      {
        title: "Brandex Community & Bangalore Builder Ecosystem",
        desc: "Co-leads community events, student hackathons, and founder-developer networking sessions in Bangalore.",
        link: "/community"
      },
      {
        title: "Enterprise Delivery & SLA Governance",
        desc: "Oversees end-to-end software project management, QA reviews, and client retainer support.",
        link: "/case-studies"
      }
    ],
    linkedin: "https://www.linkedin.com/in/pavankumarofficialcareers/",
    twitter: null,
    github: "https://github.com/Pavan-Kumar-HQ",
    email: "pavankumar@brandex.co.in"
  }
];

export function getTeamMember(slug: string): TeamMember | undefined {
  const normalized = decodeURIComponent(slug || "").trim().toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "");

  return teamMembers.find((m) => {
    const memberSlug = m.slug.toLowerCase();
    const memberName = m.name.toLowerCase().replace(/[^a-z0-9]+/g, "-");

    if (memberSlug === normalized || memberName === normalized) return true;
    if ((normalized === "pavan" || normalized === "pavan-kumar" || normalized === "pavan-kumar-s") && memberSlug.includes("pavan")) return true;
    if ((normalized === "sathvik" || normalized === "sathvik-nagesh") && memberSlug.includes("sathvik")) return true;
    return false;
  });
}
