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
}

export const projects: ProjectData[] = [
  {
    id: "vignan-public-school",
    title: "Vignan Public School",
    category: "Web",
    description: "Modern educational institution website with comprehensive information architecture for students and parents.",
    tech: ["Next.js", "React", "Tailwind CSS"],
    result: "Digital Presence",
    challenge: "Needed a digital front door that reflects their academic excellence and engages parents effectively.",
    logo: "/Clients/vignan-public-school.webp",
    liveUrl: "https://www.vignanschool.com",
    url: "https://www.vignanschool.com",
    metrics: [
      { label: "Monthly Active Users", value: "10,000+" },
      { label: "Admission Inquiries", value: "+180%" },
      { label: "Page Load Time", value: "< 0.8s" },
      { label: "Core Web Vitals", value: "100/100" }
    ],
    gallery: []
  },
  {
    id: "vignan-tutorials",
    title: "Vignan Tutorials Student Portal",
    subtitle: "High-Speed Student Learning Portal & Study Materials Engine",
    client: "Vignan Tutorials",
    industry: "EdTech & Test Prep",
    year: "2024",
    duration: "4 weeks",
    deliverables: [
      "Dynamic LMS Course Player",
      "PDF Material Ingestion Pipeline",
      "Batch WhatsApp Notification Engine",
      "Automated Student Roll Call"
    ],
    tags: ["React", "LMS", "Sub-Second Latency", "WhatsApp API", "Zero-Tax"],
    description: "Built a lightning-fast learning portal enabling students to access course materials, live class updates, and past papers with sub-second page loads across Karnataka.",
    logo: "/Clients/vignan-tutorials.webp",
    liveUrl: "https://www.vignantutorials.in",
    url: "https://www.vignantutorials.in",
    metrics: [
      { label: "Concurrent Students", value: "3,500+" },
      { label: "Query Response Time", value: "42ms" },
      { label: "Monthly Active Hours", value: "45,000+" },
      { label: "Zero-Tax Savings", value: "₹2.4L/yr" }
    ],
    gallery: []
  },
  {
    id: "srushti-publications",
    title: "Srushti Publications E-Commerce",
    subtitle: "Automated Regional Literature Storefront & Invoicing Engine",
    client: "Srushti Publications",
    industry: "Publishing & E-Commerce",
    year: "2024",
    duration: "5 weeks",
    deliverables: [
      "Custom High-Speed Storefront",
      "Automated GST Invoice Generator",
      "Razorpay Multi-Method Checkout",
      "Shiprocket Automated Dispatch"
    ],
    tags: ["E-Commerce", "Razorpay", "GST Engine", "Shiprocket", "High-Throughput"],
    description: "Engineered a high-throughput bookstore e-commerce platform that replaced a buggy third-party SaaS, automating GST compliance and shipping dispatch with zero monthly platform cuts.",
    logo: "/Clients/srushti-publications.webp",
    liveUrl: "https://www.srushtipublications.com",
    url: "https://www.srushtipublications.com",
    metrics: [
      { label: "Monthly Orders", value: "2,200+" },
      { label: "Cart Abandonment Drop", value: "-45%" },
      { label: "GST Invoices Generated", value: "10,000+" },
      { label: "Platform Fees Paid", value: "₹0" }
    ],
    gallery: []
  },
  {
    id: "geniusphere",
    title: "GeniuSphere Interactive 3D WebGL Labs",
    subtitle: "Gamified Science Learning Platform & Real-Time Assessment Engine",
    client: "GeniuSphere EdTech",
    industry: "Digital Education & STEM",
    year: "2024",
    duration: "6 weeks",
    deliverables: [
      "Interactive 3D Simulation Canvas",
      "Gamified Quiz & Formative Engine",
      "Real-Time Student Analytics Dashboard",
      "Smartboard Fullscreen Kiosk Mode"
    ],
    tags: ["WebGL", "Three.js", "EdTech", "3D Interactive", "KSEEB Curriculum"],
    description: "Designed and developed an immersive 3D interactive educational platform mapping Karnataka Board science curriculum into interactive WebGL laboratory simulations.",
    logo: "/Clients/geniusphere.webp",
    liveUrl: "https://www.geniusphere.tech",
    url: "https://www.geniusphere.tech",
    metrics: [
      { label: "Classrooms Deployed", value: "50+" },
      { label: "Active Student Sessions", value: "25,000+" },
      { label: "Interactive 3D Labs", value: "40+" },
      { label: "Engagement Lift", value: "3.2x" }
    ],
    gallery: []
  },
  {
    id: "propquant-ai",
    title: "PropQuant.ai Algorithmic Trading Platform",
    subtitle: "Automated Strategy Execution & Real-Time Telemetry Dashboard",
    client: "PropQuant Capital",
    industry: "FinTech & Quantitative Trading",
    year: "2024",
    duration: "10 Weeks",
    deliverables: [
      "MT5 Broker Bridge API",
      "Sub-Millisecond Signal Dispatcher",
      "Real-Time Equity Curve Telemetry",
      "Automated Kill-Switch Risk Guard"
    ],
    tags: ["FinTech", "Python", "FastAPI", "WebSockets", "Low-Latency"],
    description: "Architected a low-latency algorithmic trading platform with real-time risk guards, automated trade journaling, and direct broker API execution pipelines.",
    logo: "/Clients/propquant-ai.webp",
    liveUrl: "https://www.propquant.ai",
    url: "https://www.propquant.ai",
    services: ["Algorithmic Trading System", "API Integration", "Web Dashboard"],
    features: ["Real-time execution", "Emotion-free scaling", "MT5 direct sync"],
  },
];
