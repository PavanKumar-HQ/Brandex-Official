export interface ProjectData {
  id: string;
  title: string;
  category: string;
  description: string;
  tech: string[];
  result: string;
  challenge: string;
  mockup: "ordering" | "dashboard" | "learning" | "mobile" | "booking" | "automation";
  url?: string;
  logo?: string;
  duration?: string;
  services?: string[];
  features?: string[];
  featured?: boolean;
}

export const projects: ProjectData[] = [
  {
    id: "travel-crm",
    title: "Travel CRM — Agency Operations & Itinerary Automation Platform",
    category: "Software Product",
    description: "A complete travel software product engineered to manage clients, quotations, itineraries, travel directories, and the entire workflow from enquiry to confirmed trip — turning Word and PDF itineraries into structured, editable travel documents automatically. Launch offer at ₹1,500/mo (regular ₹2,000/mo).",
    tech: ["React", "TypeScript", "Node.js", "PostgreSQL", "Document Parsing Engine", "PDF Automation", "Dynamic QR"],
    result: "Unified Itinerary & CRM Pipeline",
    challenge: "Travel agencies and tour operators were managing sales, quotations, manual hotel lists, and itineraries across disconnected Word documents, spreadsheets, and WhatsApp threads, leading to heavy duplication of work and fragmented client records.",
    mockup: "automation",
    url: "/products/travel-crm",
    duration: "Production Software",
    featured: true,
    services: [
      "Software Product (₹1,500/mo)",
      "Custom Software Development",
      "CRM Development",
      "Document Automation",
      "PDF Generation Engine"
    ],
    features: [
      "Document-to-Itinerary Automation (Word/PDF Parsing)",
      "Fully Customizable Itinerary Builder",
      "Reusable Travel Directory (Hotels, Destinations, Activities)",
      "End-to-End Quotation & Lead Management",
      "Automated Structured PDF Generation",
      "Embedded Dynamic QR Codes & WhatsApp Links",
      "Reference & Document Tracking System",
      "₹1,500/mo Launch Offer (Regular ₹2,000/mo)"
    ],
  },
  {
    id: "invoice-builder",
    title: "Invoice Builder — Real-Time Billing & Inventory Software",
    category: "Software Product",
    description: "A business software product engineered for real-time invoice generation, product inventory management, customer directories, and revenue tracking with 12+ PDF templates. Launch offer at ₹6,000 lifetime license (regular ₹8,000).",
    tech: ["React", "TypeScript", "Tailwind CSS", "PDF Engine", "Inventory Sync", "Revenue Analytics"],
    result: "Instant Billing & Stock Sync",
    challenge: "Small businesses and agencies struggled with expensive monthly SaaS billing subscriptions and disconnected spreadsheets to track products, client invoices, and outstanding payments.",
    mockup: "dashboard",
    url: "/products/invoice-builder",
    duration: "Production Software",
    featured: true,
    services: [
      "Software Product (₹6,000 Lifetime)",
      "Custom Software Development",
      "Billing Architecture",
      "Inventory Management",
      "PDF Vector Engine"
    ],
    features: [
      "Real-Time Invoice Creation with Live Preview",
      "12+ Professional Multi-Industry PDF Templates",
      "Connected Product & Inventory Catalog",
      "Client & Customer Account Management",
      "Revenue & Payment Status Analytics (Paid/Pending)",
      "GST Calculation & UPI Payment QR Codes",
      "₹6,000 Lifetime License — Save ₹2,000 (Regular ₹8,000)"
    ],
  },
  {
    id: "the-man-wanders-globe",
    title: "The Man Wanders Globe",
    category: "Web",
    description: "A luxury bespoke travel portal engineered with high-performance web architecture, featuring curated global tour packages, interactive destination itineraries, and high-converting inquiry workflows.",
    tech: ["Astro", "Tailwind CSS", "TypeScript", "GSAP"],
    result: "Bespoke Luxury Travel Hub",
    challenge: "The agency needed an ultra-luxurious, lightning-fast digital platform to showcase high-ticket domestic & international tour packages while simplifying customized itinerary planning and direct inquiries.",
    mockup: "booking",
    url: "https://www.themanwandersglobetours.com",
    logo: "/Clients/The Man Wanders Globe.webp",
    duration: "4 Weeks",
    services: ["Web Architecture", "UI/UX Design", "Performance Optimization", "Inquiry Workflow"],
    features: ["Curated Tour Packages", "Interactive Destination Guides", "High-Converting Inquiry Flow", "Mobile-First Luxury UI"],
  },
  {
    id: "vignan-public-school",
    title: "Vignan Public School",
    category: "Web",
    description: "A premium, accessible digital ecosystem engineered to streamline parent-teacher interactions and elevate the institution's online authority.",
    tech: ["Next.js", "React", "Tailwind CSS"],
    result: "Unified Digital Campus",
    challenge: "The institution lacked a centralized digital infrastructure, leading to fragmented communication and a brand presence that didn't match their offline academic prestige.",
    mockup: "learning",
    url: "https://www.vignanschool.com",
    logo: "/Clients/Vigan Public School.webp",
    duration: "4 Weeks",
    services: ["Web Development", "UI/UX Design"],
    features: ["Responsive Design", "Information Architecture"],
  },
  {
    id: "vignan-tutorials",
    title: "Vignan Tutorials",
    category: "Web",
    description: "A high-conversion interactive learning portal designed to seamlessly integrate dynamic tutorial content with intuitive user journeys.",
    tech: ["Next.js", "React", "Tailwind CSS"],
    result: "Scalable E-Learning Platform",
    challenge: "Physical tutoring operations were scaling, but the lack of a cohesive digital platform hindered student onboarding and content delivery accessibility.",
    mockup: "learning",
    url: "https://www.vignantutorials.in",
    logo: "/Clients/Vignan Tutorials.webp",
    duration: "4 Weeks",
    services: ["Web Development", "UI/UX Design"],
    features: ["Dynamic Content", "Mobile Optimized"],
  },
  {
    id: "srushti-publications",
    title: "Srushti Publications",
    category: "Web",
    description: "An enterprise-grade e-commerce architecture powering a massive catalog of regional literature with lightning-fast search and frictionless checkout.",
    tech: ["Next.js 15", "PostgreSQL", "Prisma", "Razorpay"],
    result: "10x Revenue Velocity",
    challenge: "Legacy systems caused severe checkout drop-offs and catalog management bottlenecks, bottlenecking the ability to capture growing regional demand.",
    mockup: "ordering",
    url: "https://srushtipublications.com",
    logo: "/Clients/Srushti Logo-2 (1).webp",
    duration: "6 Weeks",
    services: ["UI/UX Design", "Custom Web Development", "Payment Integration", "Admin Dashboard"],
    features: ["Guest Checkout", "Grid/List Catalog views", "Razorpay UPI/Cards", "Automated Invoicing"],
  },
  {
    id: "geniusphere",
    title: "GeniuSphere",
    category: "Application",
    description: "A state-of-the-art Learning Management System built around interactive 3D WebGL environments, gamifying complex educational concepts.",
    tech: ["Next.js", "React Three Fiber", "Node.js", "MongoDB"],
    result: "Immersive 3D Learning",
    challenge: "Traditional 2D learning mediums failed to capture student attention for complex scientific concepts; a deeply immersive technological solution was required.",
    mockup: "learning",
    url: "https://www.geniusphere.tech",
    logo: "/Clients/Geniusphere.webp",
    duration: "12 Weeks",
    services: ["Custom LMS Development", "3D WebGL Experiences", "Backend CMS"],
    features: ["Interactive 3D WebGL", "Student Progress Tracking", "Course Management"],
  },
  {
    id: "qshala-quiz-league",
    title: "Qshala Quiz League",
    category: "Web",
    description: "A highly interactive, gamified event platform utilizing state-of-the-art Astro performance and dynamic SVG micro-animations to maximize audience retention.",
    tech: ["Astro", "SVG Animation", "Tailwind CSS"],
    result: "Peak Audience Engagement",
    challenge: "For the 2026 Quiz League, the client required a highly compelling, instantly loading digital experience that could convert casual visitors into active participants.",
    mockup: "learning",
    url: "https://quizleague2026.qshala.com/",
    logo: "/Clients/QShala Logo 1.webp",
    duration: "4 Weeks",
    services: ["Web Development", "UI/UX Design", "Animation Integration"],
    features: ["Animated SVG Logo", "Custom Tab Animation", "Fast Loading (Astro)"],
  },
];
