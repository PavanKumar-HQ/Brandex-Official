export type ServiceFeature = {
  title: string;
  description: string;
};

export type ServiceFAQ = {
  q: string;
  a: string;
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
};

export const servicesData: ServiceData[] = [
  {
    id: "software",
    slug: "software-development",
    title: "Software Development",
    tagline: "Custom software built around your business workflows.",
    description: "We design and develop custom software systems tailored to your exact business workflows — from enterprise ERPs to niche industry applications. Our solutions are scalable, secure, and built for performance.",
    iconName: "Code2",
    color: "hsl(230 60% 55%)",
    features: [
      { title: "Custom CRMs & Operations", description: "Manage customer relationships, quotations, and automated workflows (like our custom Travel CRM)." },
      { title: "Enterprise ERPs", description: "Streamline operations with tailored enterprise resource planning and booking systems." },
      { title: "Document & Workflow Automation", description: "Turn unstructured documents, Word files, and PDFs into automated digital pipelines." },
      { title: "API Integrations", description: "Seamlessly connect custom software with existing payment gateways, communication tools, and databases." }
    ],
    process: ["Discovery & Planning", "Architecture Design", "Agile Development", "Testing & QA", "Deployment", "Maintenance"],
    industriesServed: ["Healthcare", "Manufacturing", "Retail", "Education", "Logistics"],
    faqs: [
      { q: "How long does it take to build custom software?", a: "Depending on complexity, a custom MVP can take 6-12 weeks, while full enterprise systems take 4-8 months." },
      { q: "Do you provide post-launch support?", a: "Yes, we offer comprehensive AMC and maintenance packages to keep your software updated and secure." },
      { q: "Who owns the source code?", a: "Upon final payment, the client retains 100% intellectual property and source code ownership." }
    ]
  },
  {
    id: "website",
    slug: "website-development",
    title: "Website Development",
    tagline: "High-performance websites that drive conversions.",
    description: "From corporate sites to full ecommerce platforms, we build websites that work as hard as you do. Optimized for speed, SEO, and user experience.",
    iconName: "Globe",
    color: "hsl(210 70% 50%)",
    features: [
      { title: "Responsive Design", description: "Flawless experience across mobile, tablet, and desktop." },
      { title: "Technical SEO", description: "Built from the ground up to rank on Google." },
      { title: "Blazing Fast", description: "Sub-second load times using modern frameworks like React and Next.js." },
      { title: "CMS Integration", description: "Easily manage your own content with WordPress or headless CMS." }
    ],
    process: ["UI/UX Prototyping", "Frontend Development", "Backend Integration", "SEO Optimization", "Go-Live"],
    industriesServed: ["Corporate", "E-commerce", "Startups", "Real Estate", "Hospitality"],
    faqs: [
      { q: "Do you build e-commerce websites?", a: "Yes, we specialize in Shopify, WooCommerce, and custom headless e-commerce solutions." },
      { q: "Will my website be mobile-friendly?", a: "Absolutely. 100% of our websites are responsive and optimized for mobile devices." }
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
