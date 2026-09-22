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
  previewImage?: string;
  metrics?: { label: string; value: string }[];
  gallery?: string[];
  liveUrl?: string;
  subtitle?: string;
  client?: string;
  industry?: string;
  year?: string;
  deliverables?: string[];
  tags?: string[];
}

export const projects: ProjectData[] = [
  {
    id: "vignan-public-school",
    title: "Vignan Public School",
    category: "Web",
    description: "Modern educational institution website with comprehensive information architecture for students and parents.",
    tech: ["Next.js", "React", "Tailwind CSS", "TypeScript"],
    result: "10,000+ MAU",
    challenge: "Needed a modern digital front door that reflects their academic excellence and engages parents effectively.",
    mockup: "dashboard",
    logo: "/Clients/vignan-public-school.webp",
    previewImage: "/Clients/vignan-public-school-preview.webp",
    liveUrl: "https://www.vignanschool.com",
    url: "https://www.vignanschool.com",
    subtitle: "High-Throughput Institutional Portal & Parent Engagement System",
    client: "Vignan Educational Trust",
    industry: "K-12 Education",
    year: "2024",
    duration: "3 weeks",
    deliverables: [
      "Institutional Showcase Architecture",
      "Dynamic Admissions Portal",
      "Mobile-First Responsive Layout",
      "Parent Query Dispatch Queue"
    ],
    tags: ["Next.js", "React", "Tailwind CSS", "Sub-Second Latency"],
    services: ["Web Platform Engineering", "Information Architecture", "Core Web Vitals Optimization"],
    features: ["Sub-0.8s LCP Load Time", "Automated Admissions Inquiries", "100/100 Core Web Vitals"],
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
    category: "Application",
    description: "Built a lightning-fast learning portal enabling students to access course materials, live class updates, and past papers with sub-second page loads across Karnataka.",
    tech: ["React", "FastAPI", "WhatsApp API", "PostgreSQL", "Tailwind CSS"],
    result: "3,500+ Students",
    challenge: "Scaling course materials and lecture notes with sub-second latency across regional Karnataka networks without per-seat licensing fees.",
    mockup: "learning",
    logo: "/Clients/vignan-tutorials.webp",
    previewImage: "/Clients/vignan-tutorials-preview.webp",
    liveUrl: "https://www.vignantutorials.in",
    url: "https://www.vignantutorials.in",
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
    services: ["Student Portal Engineering", "Automated WhatsApp Bot", "Cloud PDF Engine"],
    features: ["42ms Database Query Response", "Real-Time Study Notes Distribution", "Zero Recurring SaaS Tax"],
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
    category: "Automation",
    description: "Engineered a high-throughput bookstore e-commerce platform that replaced a buggy third-party SaaS, automating GST compliance and shipping dispatch with zero monthly platform cuts.",
    tech: ["React", "Node.js", "Razorpay", "Shiprocket API", "Tailwind CSS"],
    result: "+340% Orders",
    challenge: "Replacing an expensive, brittle Shopify SaaS with an automated regional literature storefront, GST invoice generator, and courier dispatch queue.",
    mockup: "ordering",
    logo: "/Clients/srushti-publications.webp",
    previewImage: "/Clients/srushti-preview.webp",
    liveUrl: "https://srushtipublications.com",
    url: "https://srushtipublications.com",
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
    services: ["Custom E-Commerce Platform", "Automated GST Invoicing", "Courier Webhook Pipeline"],
    features: ["Instant Razorpay & UPI Checkout", "Direct Shiprocket Label Generation", "Zero Platform Commission"],
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
    category: "Application",
    description: "Designed and developed an immersive 3D interactive educational platform mapping Karnataka Board science curriculum into interactive WebGL laboratory simulations.",
    tech: ["Three.js", "WebGL", "React", "TypeScript", "Tailwind CSS"],
    result: "50+ Classrooms",
    challenge: "Translating textbook state curriculum into high-performance 3D WebGL interactive simulations that run smoothly on touch smartboards in schools.",
    mockup: "learning",
    logo: "/Clients/geniusphere.webp",
    previewImage: "/Clients/geniusphere-preview.webp",
    liveUrl: "https://www.geniusphere.tech",
    url: "https://www.geniusphere.tech",
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
    services: ["WebGL 3D Engine Development", "Smartboard Kiosk UI", "Formative Assessment System"],
    features: ["60 FPS 3D Laboratory Models", "Curriculum-Mapped Simulations", "Offline Classroom Kiosk Support"],
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
    category: "Automation",
    description: "Architected a low-latency algorithmic trading platform with real-time risk guards, automated trade journaling, and direct broker API execution pipelines.",
    tech: ["Python", "FastAPI", "WebSockets", "React", "Tailwind CSS"],
    result: "< 5ms Execution",
    challenge: "Sub-millisecond broker order routing and automated kill-switch risk guards to protect trader capital during flash market volatility.",
    mockup: "dashboard",
    logo: "/Clients/propquant-ai.webp",
    previewImage: "/Clients/propquant-ai-preview.webp",
    liveUrl: "https://www.propquant.ai",
    url: "https://www.propquant.ai",
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
    services: ["Algorithmic Trading System", "API Integration", "Web Dashboard"],
    features: ["Sub-5ms Signal Execution", "Automated Stop-Loss Enforcement", "Direct MT5 & Webhook Bridge"],
    metrics: [
      { label: "Execution Latency", value: "< 5ms" },
      { label: "Automated Trades", value: "50,000+" },
      { label: "Uptime Reliability", value: "99.99%" },
      { label: "Risk Breaches", value: "0" }
    ],
    gallery: []
  },
];
