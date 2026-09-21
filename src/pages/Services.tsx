import { useState } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import {
  Database,
  Bot,
  Smartphone,
  Globe,
  Cloud,
  Network,
  CheckCircle2,
  ArrowRight,
  ChevronRight,
  Plus,
  Minus,
  Check
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import SEOHead from "@/components/SEOHead";

interface ServiceItem {
  slug: string;
  category: string;
  icon: typeof Database;
  title: string;
  tagline: string;
  highlight: string;
  deliverables: string[];
  techStack: string[];
  color: string;
  badgeBg: string;
}

const servicesList: ServiceItem[] = [
  {
    slug: "custom-crm-erp",
    category: "CRM & ERP",
    icon: Database,
    title: "Custom CRM & ERP Systems",
    tagline: "Tailored operations, sales pipelines, and automated billing software",
    highlight: "Zero Per-Seat Fees",
    deliverables: [
      "Custom sales pipelines & automated lead intake",
      "One-click GST invoices & Razorpay/Stripe sync",
      "Granular multi-role staff access control",
      "Unlimited user accounts with 100% data ownership"
    ],
    techStack: ["PostgreSQL", "React", "Node.js", "Supabase"],
    color: "#4f46e5",
    badgeBg: "bg-indigo-50 text-indigo-700 border-indigo-200"
  },
  {
    slug: "ai-workflow-automation",
    category: "AI & Automation",
    icon: Bot,
    title: "AI Agents & Workflow Automation",
    tagline: "Autonomous WhatsApp bots, webhook pipelines, and auto-synced tools",
    highlight: "24/7 Autopilot",
    deliverables: [
      "Autonomous WhatsApp & web conversational AI bots",
      "Cross-platform webhook event ingestion pipelines",
      "Automated document, PDF & receipt OCR parsing",
      "Resilient retry queues with zero data loss"
    ],
    techStack: ["Python", "OpenAI / Claude", "Webhooks", "Zapier / Make"],
    color: "#0284c7",
    badgeBg: "bg-sky-50 text-sky-700 border-sky-200"
  },
  {
    slug: "mobile-app-development",
    category: "Mobile Apps",
    icon: Smartphone,
    title: "Mobile App Development",
    tagline: "Native-speed iOS & Android applications with offline-first support",
    highlight: "iOS & Android",
    deliverables: [
      "Cross-platform iOS & Android unified codebase",
      "Offline-first local SQLite caching & background sync",
      "Real-time push notifications & alert triggers",
      "Hardware integrations (Camera, GPS, Biometrics)"
    ],
    techStack: ["React Native", "Flutter", "TypeScript", "Firebase"],
    color: "#7c3aed",
    badgeBg: "bg-purple-50 text-purple-700 border-purple-200"
  },
  {
    slug: "web-engineering",
    category: "Web & SaaS",
    icon: Globe,
    title: "Web Platforms & SaaS Products",
    tagline: "High-speed platforms, student/client portals, and SaaS software",
    highlight: "Sub-Second LCP",
    deliverables: [
      "High-speed Next.js & React full-stack architecture",
      "Interactive multi-tenant student and client portals",
      "Built-in technical SEO and Schema.org structured graphs",
      "Payment gateway integration (Razorpay / Stripe)"
    ],
    techStack: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    color: "#059669",
    badgeBg: "bg-emerald-50 text-emerald-700 border-emerald-200"
  },
  {
    slug: "cloud-devops-infrastructure",
    category: "Cloud & DevOps",
    icon: Cloud,
    title: "Cloud, DevOps & Security",
    tagline: "Scalable cloud hosting, automated CI/CD, and hardened security",
    highlight: "99.9% Uptime",
    deliverables: [
      "Managed cloud architecture on AWS, GCP & Cloudflare",
      "Automated Git CI/CD pipelines with zero downtime",
      "Geographically redundant daily database backups",
      "Cloudflare enterprise firewall, SSL & DDoS defense"
    ],
    techStack: ["AWS", "Docker", "Cloudflare", "PostgreSQL"],
    color: "#ea580c",
    badgeBg: "bg-amber-50 text-amber-700 border-amber-200"
  },
  {
    slug: "api-database-systems",
    category: "APIs & Data",
    icon: Network,
    title: "Custom APIs & Data Pipelines",
    tagline: "High-throughput microservices, legacy bridges, and real-time sync",
    highlight: "Sub-50ms Response",
    deliverables: [
      "Custom REST & GraphQL microservices architecture",
      "Legacy ERP, accounting & software database bridges",
      "Redis caching layer for sub-50ms query responses",
      "Cryptographically verified webhook endpoints"
    ],
    techStack: ["Node.js", "FastAPI", "Redis", "GraphQL"],
    color: "#db2777",
    badgeBg: "bg-pink-50 text-pink-700 border-pink-200"
  }
];

const packages = [
  {
    name: "Custom Sprint",
    description: "Targeted development for an automation pipeline, standalone software module, or custom web platform.",
    price: "Custom Scope",
    period: "Fixed Milestone",
    popular: false,
    features: [
      "Custom React, Next.js or Node.js Build",
      "Mobile-First Responsive Layouts",
      "Automated Database & API Connections",
      "Sub-Second Performance & Security",
      "Full Source Code & Git IP Handover",
      "30-Day Free Post-Launch Hypercare"
    ],
    cta: "Start a Sprint"
  },
  {
    name: "Full Application Build",
    description: "End-to-end engineering for custom CRM/ERP systems, cross-platform mobile apps, or multi-tenant portals.",
    price: "Tailored Project",
    period: "Full Delivery",
    popular: true,
    features: [
      "Everything in Custom Sprint",
      "Multi-Role Access & User Dashboards",
      "Automated Webhooks (WhatsApp, SMS, Email)",
      "Payment Gateway & Billing Integration",
      "Offline-First Sync & Push Notifications",
      "90-Day Dedicated Post-Launch SLA"
    ],
    cta: "Build My Application"
  },
  {
    name: "Enterprise IT Retainer",
    description: "Dedicated software engineering team for continuous product features, DevOps, and high-throughput systems.",
    price: "Dedicated Team",
    period: "Continuous Retainer",
    popular: false,
    features: [
      "Full-Stack Software Engineering Team",
      "Cloud Infrastructure & DevOps SLA",
      "Direct WhatsApp / Slack Leadership Channel",
      "Custom Third-Party System Integrations",
      "Continuous CI/CD Testing & Deployments",
      "Priority 24/7 Incident Escalation"
    ],
    cta: "Talk to Leadership"
  }
];

const processSteps = [
  {
    number: "01",
    title: "Discovery & Architecture",
    desc: "We analyze your requirements, operational bottlenecks, and tech stack to define a clear, scoped technical blueprint."
  },
  {
    number: "02",
    title: "UI/UX & Prototyping",
    desc: "We craft responsive wireframes and interactive prototypes focusing on clean visual hierarchy and tactile interactions."
  },
  {
    number: "03",
    title: "Full-Stack Engineering",
    desc: "We write clean, strictly-typed code with automated testing, database migrations, and edge-cached CDN deployments."
  },
  {
    number: "04",
    title: "Testing & Handover",
    desc: "Full device testing, performance audits, complete Git repository IP handover, and 30-90 days of dedicated support."
  }
];

const faqs = [
  {
    q: "What types of IT and software services does Brandex provide?",
    a: "We build custom CRM & ERP systems, AI automation agents, iOS and Android mobile apps, high-speed web platforms, cloud infrastructure, and custom API data pipelines."
  },
  {
    q: "Do I own 100% of the code and intellectual property?",
    a: "Yes. You receive complete ownership of the Git repositories, database schemas, and cloud deployment keys with zero ongoing vendor lock-in or recurring per-seat taxes."
  },
  {
    q: "Can you connect with our existing tools and legacy software?",
    a: "Yes. We develop custom API bridges and webhooks to synchronize with legacy ERPs, WhatsApp Business, payment providers (Stripe/Razorpay), and cloud databases."
  },
  {
    q: "What post-launch technical support is included?",
    a: "Every project includes 30 to 90 days of complimentary support for bug fixes, performance monitoring, and team onboarding. We also offer dedicated monthly retainers for active feature development."
  }
];

export default function ServicesPage() {
  useScrollReveal();
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const categories = ["All", "CRM & ERP", "AI & Automation", "Mobile Apps", "Web & SaaS", "Cloud & DevOps", "APIs & Data"];

  const filteredServices = selectedCategory === "All"
    ? servicesList
    : servicesList.filter((s) => s.category === selectedCategory);

  return (
    <div className="bg-[#f8fafd] min-h-screen">
      <SEOHead
        title="Digital Services: Websites, Web Apps & Workflow Automation | Brandex"
        description="Explore Brandex services: custom websites, web applications, workflow automation, modern design systems, SEO infrastructure, and client reputation tools."
        canonicalUrl="/services"
      />

      {/* =========================================================
          PAGE HEADER (COMPACT & CLEAN - SERVICES VISIBLE IMMEDIATELY)
         ========================================================= */}
      <section className="pt-20 pb-5 sm:pt-24 sm:pb-6 bg-white border-b border-slate-200/80 relative">
        <div className="w-full max-w-[1700px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <div className="flex items-center gap-2 text-xs font-mono text-slate-400 mb-1.5 uppercase tracking-wider">
                <Link to="/" className="hover:text-indigo-600 transition-colors">Home</Link>
                <span>/</span>
                <span className="text-indigo-600 font-semibold">Services</span>
              </div>
              <h1 className="font-display text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                IT & Software Services
              </h1>
              <p className="text-sm sm:text-base text-slate-500 font-normal mt-1 max-w-2xl">
                Custom CRM & ERP software, AI automation, mobile apps, cloud infrastructure, and enterprise data pipelines.
              </p>
            </div>

            {/* Direct CTA */}
            <div className="shrink-0">
              <Button asChild className="bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl h-10 px-5 text-xs font-bold shadow-xs">
                <Link to="/contact">Discuss a Project <ArrowRight className="w-3.5 h-3.5 ml-1.5" /></Link>
              </Button>
            </div>
          </div>

          {/* Quick Category Filter Pills */}
          <div className="flex items-center gap-2 mt-6 overflow-x-auto pb-1 no-scrollbar scroll-smooth">
            {categories.map((cat) => {
              const isSelected = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all shrink-0 cursor-pointer ${
                    isSelected
                      ? "bg-indigo-600 text-white shadow-xs"
                      : "bg-slate-100 hover:bg-slate-200/80 text-slate-700 border border-slate-200/70"
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================================================
          SERVICES GRID SECTION (STARTS IMMEDIATELY ABOVE THE FOLD)
         ========================================================= */}
      <section className="py-8 sm:py-12 w-full" id="services-grid">
        <div className="w-full max-w-[1700px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
            {filteredServices.map((srv) => {
              const Icon = srv.icon;
              return (
                <div
                  key={srv.slug}
                  className="group bg-white rounded-2xl p-6 sm:p-7 border border-slate-200/90 hover:border-indigo-500 shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between hover:-translate-y-1"
                >
                  <div>
                    {/* Top Meta Header */}
                    <div className="flex items-center justify-between gap-3 mb-4">
                      <div className="w-11 h-11 rounded-xl bg-slate-50 border border-slate-200/90 shadow-2xs flex items-center justify-center text-indigo-600 group-hover:scale-105 transition-transform duration-200">
                        <Icon size={20} style={{ color: srv.color }} />
                      </div>

                      <div className="flex items-center gap-2">
                        <span className={`text-[10px] font-mono font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-md border ${srv.badgeBg}`}>
                          {srv.category}
                        </span>
                        <span className="text-[10px] font-mono font-medium text-slate-500 bg-slate-50 px-2 py-0.5 rounded border border-slate-200/60 hidden sm:inline-block">
                          {srv.highlight}
                        </span>
                      </div>
                    </div>

                    {/* Title & Tagline */}
                    <h2 className="font-display font-bold text-xl text-slate-900 group-hover:text-indigo-600 transition-colors mb-1.5 leading-snug">
                      {srv.title}
                    </h2>
                    <p className="text-xs font-normal text-slate-600 mb-4 leading-relaxed">
                      {srv.tagline}
                    </p>

                    {/* Deliverables Checklist */}
                    <div className="space-y-2 mb-4 pt-3.5 border-t border-slate-100">
                      <div className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-400 mb-1.5">
                        Key Capabilities:
                      </div>
                      {srv.deliverables.map((d, i) => (
                        <div key={i} className="flex items-start gap-2 text-xs text-slate-700">
                          <CheckCircle2 size={13} className="text-emerald-600 shrink-0 mt-0.5" />
                          <span className="leading-snug font-medium">{d}</span>
                        </div>
                      ))}
                    </div>

                    {/* Tech Stack Pills */}
                    <div className="flex flex-wrap gap-1.5 mb-5 pt-3 border-t border-slate-100">
                      {srv.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-0.5 rounded-md bg-slate-50 border border-slate-200/80 text-[10px] font-mono text-slate-600 font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Dual Action Buttons */}
                  <div className="pt-4 border-t border-slate-100 flex items-center gap-2">
                    <Button
                      asChild
                      className="flex-1 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl h-9 text-xs font-bold shadow-2xs hover:shadow-indigo-600/20 transition-all text-center"
                    >
                      <Link to={`/services/${srv.slug}`} className="flex items-center justify-center gap-1.5">
                        <span>View Details</span>
                        <ChevronRight size={14} />
                      </Link>
                    </Button>

                    <Button
                      asChild
                      variant="outline"
                      className="rounded-xl h-9 px-3.5 text-xs font-semibold text-slate-700 hover:text-indigo-600 border-slate-200 hover:border-indigo-300 bg-white"
                    >
                      <Link to={`/contact?service=${srv.slug}`} className="flex items-center justify-center gap-1">
                        <span>Inquire</span>
                        <ArrowRight size={13} />
                      </Link>
                    </Button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================================================
          HOW WE WORK / 4-STEP PROCESS
         ========================================================= */}
      <section className="py-16 lg:py-24 bg-white border-y border-slate-200/80">
        <div className="w-full max-w-[1700px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <div className="liquid-glass-pill inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-semibold tracking-widest text-[#4f47e6] uppercase mb-3 shadow-2xs">
              <span className="w-1.5 h-1.5 rounded-full bg-[#4f47e6] animate-pulse" />
              Our Process
            </div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
              Simple, Transparent <span className="text-[#4f47e6]">Delivery</span>
            </h2>
            <p className="text-slate-600 text-sm sm:text-base font-normal mt-2">
              From our first conversation to final deployment, here is how we bring your project to life.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {processSteps.map((step) => (
              <div
                key={step.number}
                className="liquid-glass-card hover:bg-white rounded-3xl p-6 border border-slate-200/80 shadow-2xs flex flex-col justify-between"
              >
                <div>
                  <div className="text-3xl font-mono font-extrabold text-indigo-200 mb-4">
                    {step.number}
                  </div>
                  <h3 className="font-display font-bold text-lg text-slate-900 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          TRANSPARENT PACKAGES & PRICING
         ========================================================= */}
      <section className="py-16 lg:py-24 bg-[#f8fafd] border-b border-slate-200/80">
        <div className="w-full max-w-[1700px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <div className="liquid-glass-pill inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-semibold tracking-widest text-[#4f47e6] uppercase mb-3 shadow-2xs">
              <span className="w-1.5 h-1.5 rounded-full bg-[#4f47e6] animate-pulse" />
              Pricing & Plans
            </div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
              Transparent, Fixed <span className="text-[#4f47e6]">Sprint Packages</span>
            </h2>
            <p className="text-slate-600 text-sm sm:text-base font-normal mt-2">
              Clear scopes, no hidden fees, and you own 100% of your code and design assets.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 items-stretch max-w-6xl mx-auto">
            {packages.map((pkg) => (
              <div
                key={pkg.name}
                className={`relative rounded-3xl p-8 flex flex-col justify-between transition-all duration-300 ${
                  pkg.popular
                    ? "liquid-glass border-2 border-[#4f47e6] shadow-[0_20px_50px_rgba(79,71,230,0.12)] bg-white/95"
                    : "liquid-glass-card hover:bg-white/90 border border-slate-200"
                }`}
              >
                {pkg.popular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                    <span className="inline-flex items-center px-4 py-1 rounded-full bg-[#4f47e6] text-white text-[11px] font-mono font-bold tracking-wider uppercase shadow-sm">
                      Most Popular
                    </span>
                  </div>
                )}

                <div>
                  <h3 className="font-display text-2xl font-bold text-slate-900 mb-1.5">{pkg.name}</h3>
                  <p className="text-xs sm:text-sm text-slate-600 mb-6 leading-relaxed font-normal min-h-[40px]">{pkg.description}</p>

                  <div className="mb-6 pb-5 border-b border-slate-200/60">
                    <span className="font-display text-3xl font-extrabold text-slate-900">{pkg.price}</span>
                    <span className="text-xs font-mono text-[#4f47e6] uppercase tracking-wider font-semibold ml-2">/ {pkg.period}</span>
                  </div>

                  <ul className="space-y-3 mb-8">
                    {pkg.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2.5">
                        <div className={`w-4 h-4 rounded-full flex items-center justify-center shrink-0 mt-0.5 ${
                          pkg.popular ? "bg-[#4f47e6] text-white" : "bg-white border border-slate-200 text-[#4f47e6]"
                        }`}>
                          <Check size={10} />
                        </div>
                        <span className="text-xs sm:text-sm text-slate-700 font-medium leading-relaxed">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Button
                  asChild
                  className={`w-full h-11 text-xs font-bold rounded-xl transition-all duration-200 ${
                    pkg.popular
                      ? "bg-[#4f47e6] hover:bg-[#4338ca] text-white shadow-[0_4px_14px_rgba(79,71,230,0.3)]"
                      : "liquid-glass-pill hover:bg-white text-slate-800 border border-slate-200"
                  }`}
                >
                  <Link to="/contact">{pkg.cta}</Link>
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          FAQ SECTION
         ========================================================= */}
      <section className="py-16 lg:py-24 bg-white border-b border-slate-200/80">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="text-center mb-12">
            <div className="liquid-glass-pill inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-semibold tracking-widest text-[#4f47e6] uppercase mb-3 shadow-2xs">
              <span className="w-1.5 h-1.5 rounded-full bg-[#4f47e6] animate-pulse" />
              Direct Answers
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Frequently Asked Questions
            </h2>
            <p className="text-slate-600 text-sm sm:text-base font-normal mt-2">
              Common questions about working with Brandex.
            </p>
          </div>

          <div className="space-y-3.5">
            {faqs.map((faq, i) => {
              const isOpen = openFaqIndex === i;
              return (
                <div
                  key={i}
                  className={`rounded-2xl overflow-hidden transition-all duration-200 border border-slate-200/80 ${
                    isOpen ? "bg-white shadow-sm" : "bg-slate-50/60 hover:bg-white"
                  }`}
                >
                  <button
                    onClick={() => setOpenFaqIndex(isOpen ? null : i)}
                    className="w-full flex items-center justify-between p-5 text-left group focus:outline-none cursor-pointer"
                  >
                    <span className={`font-display font-bold text-base transition-colors duration-200 ${
                      isOpen ? "text-[#4f47e6]" : "text-slate-800 group-hover:text-slate-950"
                    }`}>
                      {faq.q}
                    </span>
                    <div className={`w-8 h-8 rounded-xl flex items-center justify-center shrink-0 transition-all duration-200 ${
                      isOpen ? "bg-[#4f47e6] text-white" : "bg-white text-[#4f47e6] border border-slate-200"
                    }`}>
                      {isOpen ? <Minus size={16} /> : <Plus size={16} />}
                    </div>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="overflow-hidden"
                      >
                        <div className="px-5 pb-5 pt-0">
                          <div className="h-px bg-slate-100 mb-3" />
                          <p className="text-slate-600 text-xs sm:text-sm font-normal leading-relaxed">{faq.a}</p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================================================
          DIRECT CONSULTATION CTA BANNER
         ========================================================= */}
      <section className="py-16 lg:py-24 bg-[#f8fafd]">
        <div className="w-full max-w-[1700px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16">
          <div className="liquid-glass rounded-3xl p-8 sm:p-12 lg:p-14 border border-slate-200 shadow-sm relative overflow-hidden bg-white text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-8">
            <div className="max-w-2xl space-y-2">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#4f47e6]">
                Ready to Start?
              </span>
              <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
                Let's build something exceptional for your business.
              </h2>
              <p className="text-slate-600 text-sm sm:text-base font-normal">
                Tell us about your project goals. We will reply within 24 hours with a clear roadmap and feasibility proposal.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0 w-full sm:w-auto">
              <Button
                asChild
                className="w-full sm:w-auto h-12 px-7 rounded-xl bg-[#4f47e6] hover:bg-[#4338ca] text-white font-bold text-xs sm:text-sm shadow-[0_4px_16px_rgba(79,71,230,0.3)] text-center"
              >
                <Link to="/contact" className="flex items-center justify-center gap-2">
                  <span>Start Your Project</span>
                  <ArrowRight size={15} />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className="w-full sm:w-auto h-12 px-6 rounded-xl border border-slate-300 font-bold text-xs sm:text-sm text-slate-700 hover:bg-slate-50 text-center"
              >
                <Link to="/case-studies">Explore Our Work</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
