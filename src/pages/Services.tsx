import { useState } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import {
  Code2, Globe, Smartphone, Brain, Workflow, Shield, Cloud, Server,
  Palette, Megaphone, Printer, Home, Sofa, Wind, Zap, Sun,
  Wrench, ArrowRight, ChevronRight, Check, Video, PhoneCall,
  Building2, BatteryCharging, ShieldCheck, CheckCircle2
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Breadcrumb from "@/components/Breadcrumb";
import CTABanner from "@/components/home/CTABanner";
import SEOTags from "@/components/SEOTags";

type MacroGroup = "all" | "digital" | "creative" | "physical";

interface ServiceCategory {
  id: string;
  group: "digital" | "creative" | "physical";
  icon: any;
  color: string;
  title: string;
  tagline: string;
  description: string;
  deliverablesSummary: string;
  deepLink?: string;
  services: string[];
}

const serviceCategories: ServiceCategory[] = [
  // ── Digital & Software Engineering ──
  {
    id: "software",
    group: "digital",
    icon: Code2,
    color: "hsl(230 60% 55%)",
    title: "Custom Software Development",
    tagline: "Proprietary software tailored to your workflows",
    description: "We architect, build, and deploy bespoke software systems tailored to your exact business logic — from high-throughput enterprise ERPs and custom CRMs to scalable multi-tenant SaaS products.",
    deliverablesSummary: "Custom Source Code, Scalable APIs, PostgreSQL / Cloud Databases, Automated QA Tests, and Deployment Pipelines.",
    deepLink: "/services/software-development",
    services: [
      "Custom Software Engineering", "SaaS Platform Architecture", "Enterprise CRM Development", "Custom ERP Solutions",
      "Real-Time Billing & Invoicing", "Inventory & Supply Chain Sync", "Point-of-Sale (POS) Systems", "Educational Management Systems",
      "Healthcare Portals", "Customer & Vendor Portals", "High-Throughput REST & GraphQL APIs", "Microservices & Cloud Architecture",
    ],
  },
  {
    id: "website",
    group: "digital",
    icon: Globe,
    color: "hsl(210 70% 50%)",
    title: "High-Performance Website Development",
    tagline: "Ultra-fast websites engineered to convert",
    description: "Sub-second, conversion-optimized web applications and corporate digital flagships built with modern React, Next.js, and TypeScript. Optimized for maximum Core Web Vitals (INP/LCP) and technical SEO.",
    deliverablesSummary: "100% Mobile Responsive Layouts, Sub-Second Page Load Times, Technical SEO Schema, CMS Integrations, Analytics.",
    deepLink: "/services/website-development",
    services: [
      "Corporate Digital Flagships", "E-commerce Architectures", "Modern Headless Shopify & Next.js", "Landing Pages & Conversion Funnels",
      "Custom Headless CMS", "Website Redesigns & Speed Audits", "Core Web Vitals Optimization", "Technical SEO & Schema Markup",
      "Progressive Web Apps (PWAs)", "Secure Website Maintenance",
    ],
  },
  {
    id: "ai",
    group: "digital",
    icon: Brain,
    color: "hsl(270 55% 55%)",
    title: "AI & Autonomous Workflow Automation",
    tagline: "Intelligent systems that eliminate operational drag",
    description: "AI-powered tools, autonomous background agents, and multi-app automations that eliminate repetitive human tasks, triage customer conversations, and streamline your operations 24/7.",
    deliverablesSummary: "Autonomous AI Agents, Meta WhatsApp Business API Webhooks, Custom RAG Knowledge Bases, Multi-Tool Automation.",
    deepLink: "/services/ai-automation",
    services: [
      "Conversational AI Chatbots", "Autonomous Customer Service Agents", "WhatsApp Business Cloud Automation", "Multi-App Webhook Pipelines",
      "Document AI & OCR Parsing", "Internal Workflow Automation", "AI Data Analytics & Insights", "Custom LLM Fine-Tuning & RAG",
    ],
  },
  {
    id: "cyber",
    group: "digital",
    icon: Shield,
    color: "hsl(0 60% 50%)",
    title: "Cybersecurity & Zero-Trust Defense",
    tagline: "Defensive architecture, audits, and compliance",
    description: "Led by US-trained cybersecurity leadership. Protect your business with offensive penetration testing, architectural vulnerability audits, DPDP Act compliance, and automated threat mitigation.",
    deliverablesSummary: "Penetration Testing Reports, Threat Vulnerability Remediation, Zero-Trust Access Setup, DPDP India Compliance Audit.",
    deepLink: "/services/cybersecurity",
    services: [
      "Full-Scope Penetration Testing", "Vulnerability Assessment (VAPT)", "Zero-Trust Architecture", "DPDP Act Compliance Audits",
      "Web Application Security (OWASP)", "Cloud Security Hardening (AWS/GCP)", "Database Encryption & Cryptography", "Active Incident Response",
    ],
  },
  {
    id: "mobile",
    group: "digital",
    icon: Smartphone,
    color: "hsl(250 60% 55%)",
    title: "Mobile App Development",
    tagline: "Native and cross-platform mobile experiences",
    description: "High-performance iOS and Android mobile applications built using React Native and Flutter for buttery 60fps animations, offline-first reliability, and seamless backend synchronization.",
    deliverablesSummary: "iOS App Store & Google Play Store Deliverables, Offline Storage, Push Notification Engines, Native Device API Integration.",
    services: [
      "iOS App Development", "Android App Development", "Cross-Platform React Native & Flutter",
      "Progressive Web Apps (PWAs)", "Enterprise Field Apps", "Offline-First Sync Engines",
    ],
  },
  {
    id: "cloud",
    group: "digital",
    icon: Cloud,
    color: "hsl(200 65% 50%)",
    title: "Cloud Infrastructure & Managed IT",
    tagline: "Resilient cloud backbones for modern teams",
    description: "Zero-downtime cloud migration, managed server setups, database clustering, Google Workspace, Microsoft 365 administration, and automated backup solutions.",
    deliverablesSummary: "Cloud Infrastructure as Code, Database Backups, High-Availability Clusters, Managed Email & Identity Provisioning.",
    services: [
      "AWS & GCP Cloud Architecture", "Database Replication & Clustering", "Microsoft 365 & Google Workspace", "Domain & DNS Security",
      "Automated Disaster Recovery", "Serverless Edge Deployments", "Managed IT Helpdesk & AMCs",
    ],
  },

  // ── Physical & Energy Infrastructure ──
  {
    id: "solar",
    group: "physical",
    icon: Sun,
    color: "hsl(45 95% 50%)",
    title: "Solar & Clean Energy Solutions",
    tagline: "Clean solar power for cost-efficient businesses",
    description: "Turnkey commercial and rooftop solar photovoltaic (PV) engineering, net-metering setup, battery storage integration, and IoT energy monitoring to dramatically lower electricity overhead.",
    deliverablesSummary: "Feasibility Analysis, Tier-1 Solar PV Panels & Inverters, Net-Metering Grid Approvals, IoT Real-Time Energy Dashboards.",
    services: [
      "Commercial Rooftop Solar", "Industrial Solar Power Plants", "On-Grid & Hybrid Solar Systems", "Solar Feasibility & ROI Audits",
      "Battery Energy Storage Systems (BESS)", "IoT Solar Generation Monitoring", "BESCOM / Discom Net-Metering Liaison", "Solar Maintenance & Cleaning AMCs",
    ],
  },
  {
    id: "infrastructure",
    group: "physical",
    icon: Server,
    color: "hsl(220 50% 45%)",
    title: "IT Infrastructure & Smart Office",
    tagline: "Physical networking, security, and smart workspace tech",
    description: "Complete physical IT infrastructure for corporate offices in Bangalore — structured CAT6/Fiber cabling, high-definition IP CCTV surveillance, biometric access control, and server rack installations.",
    deliverablesSummary: "Certified Network Cabling, IP CCTV Recording Servers, Biometric Attendance Hardware, Secure Server Rack Enclosures.",
    services: [
      "Structured Network Cabling (CAT6/Fiber)", "High-Definition IP CCTV Surveillance", "Biometric & RFID Access Control", "Server Room & Network Rack Setup",
      "Enterprise Wi-Fi 6 Mesh Networks", "Video Conferencing & Smart Board Systems", "Public Address (PA) & Sound Systems", "Turnkey IT Office Relocations",
    ],
  },
  {
    id: "hvac",
    group: "physical",
    icon: Wind,
    color: "hsl(195 65% 50%)",
    title: "HVAC & Commercial Air Conditioning",
    tagline: "Precision climate control and ventilation",
    description: "Commercial HVAC engineering, VRV/VRF multi-zone air conditioning systems, ductable split units, fresh air ventilation, and comprehensive preventive annual service contracts.",
    deliverablesSummary: "Thermal Load Calculations, VRV/VRF Multi-Zone Air Distribution, Clean Air Ducting, Energy-Efficient Chillers.",
    services: [
      "VRV / VRF Central AC Systems", "Commercial Ductable Units", "Precision Server Room Cooling", "Fresh Air & Exhaust Ventilation",
      "AC Preventive Maintenance AMCs", "Duct Fabrication & Acoustic Insulation", "Chiller Plant Optimization",
    ],
  },
  {
    id: "electrical",
    group: "physical",
    icon: Zap,
    color: "hsl(50 85% 48%)",
    title: "Electrical Contracting & UPS Backup",
    tagline: "Uninterrupted power, safety, and smart lighting",
    description: "Licensed commercial electrical contracting, heavy power distribution panels, online UPS backup systems, surge protection, smart office lighting automation, and power factor correction.",
    deliverablesSummary: "Electrical Panel Fabrication, High-Capacity Online UPS, Smart IoT Lighting Controls, Certified Power Factor Correction.",
    services: [
      "Commercial Electrical Contracting", "Online Industrial UPS Systems", "Diesel Generator Synchronization", "Smart Office Lighting Automation",
      "Power Distribution Panels (PCC/MCC)", "Harmonic Filtration & Power Quality Audits", "Earthing & Lightning Surge Protection",
    ],
  },
  {
    id: "interior",
    group: "physical",
    icon: Home,
    color: "hsl(30 55% 48%)",
    title: "Office Interior Design & Turnkey Fit-Outs",
    tagline: "Workspaces that foster focus, creativity, and speed",
    description: "Turnkey commercial interior architectural design, acoustic false ceilings, modular executive cabins, ergonomic open workstations, glass partitions, and reception branding.",
    deliverablesSummary: "2D/3D Architectural Renders, Turnkey Fit-Out Execution, Acoustic Ceilings, Modular Partitions, Ergonomic Furniture.",
    services: [
      "Turnkey Office Interior Fit-Outs", "Acoustic False Ceiling & Lighting", "Modular Workstations & Executive Cabins", "Frameless Glass Partitions",
      "Reception & Lounge Architecture", "Custom Ergonomic Seating", "Wall Murals & Acoustic Paneling",
    ],
  },
  {
    id: "facility",
    group: "physical",
    icon: Wrench,
    color: "hsl(240 35% 50%)",
    title: "Facility Maintenance & Retainer AMCs",
    tagline: "Single-vendor accountability for zero downtime",
    description: "Consolidated Annual Maintenance Contracts (AMCs) covering your company's software, websites, IT hardware, network infrastructure, CCTV, AC units, and electrical systems.",
    deliverablesSummary: "Quarterly Preventive Maintenance, SLA-Guaranteed Reactive Support, 24/7 Remote Monitoring, Single-Point Accountability.",
    services: [
      "Comprehensive IT & Software AMCs", "Website & Cloud Maintenance Retainers", "CCTV & Security Hardware Maintenance", "HVAC & AC Service Contracts",
      "Network Infrastructure Health Checks", "Emergency On-Site Support (Bangalore)",
    ],
  },

  // ── Brand & Creative Production ──
  {
    id: "branding",
    group: "creative",
    icon: Palette,
    color: "hsl(340 60% 52%)",
    title: "Brand Identity & Corporate Design",
    tagline: "Visual authority that sets your business apart",
    description: "Complete corporate brand identity systems — bespoke logo design, strategic typography, brand guidelines, stationery, investor pitch decks, and digital UI/UX design systems.",
    deliverablesSummary: "Vector Logo Master Suite, Comprehensive Brand Guidelines, Corporate Stationery Assets, High-Res Digital Brand Assets.",
    services: [
      "Corporate Logo & Identity Design", "Strategic Brand Positioning", "Comprehensive Design Systems", "Stationery & Corporate Collateral",
      "Product Packaging & Label Design", "High-Ticket Pitch Decks & Presentations", "Digital UI/UX Design (Figma)",
    ],
  },
  {
    id: "marketing",
    group: "creative",
    icon: Megaphone,
    color: "hsl(35 80% 50%)",
    title: "Digital Growth & Performance Marketing",
    tagline: "Predictable lead acquisition and search ranking",
    description: "Performance marketing campaigns across Google Search, Meta Ads, and LinkedIn, paired with technical SEO, conversion rate optimization (CRO), and content marketing.",
    deliverablesSummary: "High-ROI Paid Ad Campaigns, Organic Search Rankings (SEO), Conversion Landing Pages, Transparent Analytics Dashboards.",
    services: [
      "Search Engine Optimization (SEO)", "Google Ads Search & Display", "Meta (Instagram/Facebook) Paid Ads", "LinkedIn B2B Lead Generation",
      "Content & Editorial Strategy", "Conversion Rate Optimization (CRO)", "Multi-Channel Marketing Analytics",
    ],
  },
  {
    id: "photography",
    group: "creative",
    icon: Video,
    color: "hsl(310 55% 50%)",
    title: "Commercial Photography & Brand Films",
    tagline: "Studio-grade visual media that elevates your brand",
    description: "On-site corporate video production, founder interviews, customer case-study films, product photography, and architectural interior captures shot with 4K cinema-grade equipment.",
    deliverablesSummary: "4K Color-Graded Brand Videos, High-Res Product & Executive Photos, Short-Form Social Reels, Motion Graphics.",
    services: [
      "Corporate Brand Films & Promos", "Executive & Founder Video Interviews", "Client Video Testimonials", "High-Resolution Product Photography",
      "Commercial Architecture & Office Shoots", "Drone Aerial Cinematography", "Post-Production, Color Grading & Motion Graphics",
    ],
  },
  {
    id: "printing",
    group: "creative",
    icon: Printer,
    color: "hsl(160 50% 45%)",
    title: "Commercial Printing & Signage Solutions",
    tagline: "Precision large-format and corporate print manufacturing",
    description: "End-to-end commercial printing — illuminated LED ACP signboards, outdoor vinyl branding, corporate brochures, vehicle wraps, and premium event merchandise.",
    deliverablesSummary: "Illuminated LED Acrylic/ACP Signboards, Offset & Digital Print Materials, Vehicle Wrap Graphics, Corporate Gifts.",
    services: [
      "Illuminated LED ACP Signboards", "Large Format Vinyl & Flex Printing", "Corporate Brochures & Catalogs", "Premium Visiting Cards & Letterheads",
      "Vehicle & Fleet Branding", "Custom Packaging & Boxes", "Exhibition Stalls & Roll-Up Banners", "Corporate Merchandise & Employee Swag",
    ],
  },
];

export default function ServicesPage() {
  useScrollReveal();
  const [activeCategory, setActiveCategory] = useState<string>("software");
  const [macroGroup, setMacroGroup] = useState<MacroGroup>("all");

  const filteredCategories = serviceCategories.filter((c) => {
    if (macroGroup === "all") return true;
    return c.group === macroGroup;
  });

  const active = serviceCategories.find((c) => c.id === activeCategory) || serviceCategories[0];
  const ActiveIcon = active.icon;

  return (
    <>
      <SEOTags
        title="Comprehensive Technology, Software, Solar & Infrastructure Services | Brandex"
        description="Brandex is your single technology and infrastructure partner: Custom software development, website engineering, AI automation, cybersecurity, commercial solar power, and smart office infrastructure."
        keywords="custom software development, website development services, AI workflow automation, cybersecurity consulting, commercial solar installation bangalore, office IT infrastructure bangalore, HVAC contracting, brandex services"
        canonicalUrl="https://www.brandex.co.in/services"
        image="https://www.brandex.co.in/og/services.png"
      />

      {/* Hero Section */}
      <section className="pt-4 sm:pt-6 pb-10 sm:pb-14 relative overflow-hidden bg-background border-b border-border/40">
        <div className="absolute inset-0 bg-grid opacity-15 pointer-events-none" />
        <div className="absolute top-10 right-10 w-96 h-96 bg-accent/[0.04] rounded-full blur-[120px] pointer-events-none" />

        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <Breadcrumb items={[{ label: "Services & Capabilities" }]} className="mb-6" />

          <div className="max-w-4xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-accent/10 border border-accent/20 text-accent text-xs font-bold tracking-wide uppercase">
              <ShieldCheck size={13} className="text-accent" />
              End-to-End Technology, Software &amp; Physical Infrastructure
            </div>

            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground leading-[1.1]">
              Everything Your Business Needs, <span className="text-gradient">Under One Roof</span>
            </h1>

            <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed font-normal max-w-3xl">
              From bespoke software development and AI automation to rooftop solar installations, IT networking, and smart workspace infrastructure — Brandex is your single, accountable engineering partner.
            </p>

            {/* Macro Pillar Filter Pills */}
            <div className="flex flex-wrap gap-2 pt-2">
              <button
                onClick={() => setMacroGroup("all")}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer border ${macroGroup === "all"
                    ? "bg-accent text-accent-foreground border-accent shadow-md shadow-accent/20"
                    : "bg-card text-muted-foreground border-border hover:text-foreground"
                  }`}
              >
                All Capabilities (17 Categories)
              </button>
              <button
                onClick={() => setMacroGroup("digital")}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer border ${macroGroup === "digital"
                    ? "bg-accent text-accent-foreground border-accent shadow-md shadow-accent/20"
                    : "bg-card text-muted-foreground border-border hover:text-foreground"
                  }`}
              >
                Digital &amp; Software Engineering
              </button>
              <button
                onClick={() => setMacroGroup("physical")}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer border ${macroGroup === "physical"
                    ? "bg-accent text-accent-foreground border-accent shadow-md shadow-accent/20"
                    : "bg-card text-muted-foreground border-border hover:text-foreground"
                  }`}
              >
                Physical, Solar &amp; Smart Infrastructure
              </button>
              <button
                onClick={() => setMacroGroup("creative")}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer border ${macroGroup === "creative"
                    ? "bg-accent text-accent-foreground border-accent shadow-md shadow-accent/20"
                    : "bg-card text-muted-foreground border-border hover:text-foreground"
                  }`}
              >
                Brand &amp; Creative Production
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Category Selector + Deep Detail Explorer */}
      <section className="py-12 lg:py-18 bg-background relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-10">
            {/* Left Column: Category Navigation Tabs */}
            <div className="lg:col-span-4 space-y-2">
              <div className="p-2 sm:p-3 bg-card border-2 border-border/80 rounded-2xl space-y-1.5 max-h-[720px] overflow-y-auto shadow-sm">
                <div className="px-2.5 sm:px-3 py-2 text-xs font-bold uppercase tracking-wider text-muted-foreground border-b border-border/60 mb-1 flex items-center justify-between">
                  <span>Select Capability</span>
                  <span className="text-[11px] font-semibold text-accent">{filteredCategories.length} available</span>
                </div>

                {filteredCategories.map((cat) => {
                  const Icon = cat.icon;
                  const isCurrent = cat.id === active.id;
                  return (
                    <button
                      key={cat.id}
                      onClick={() => setActiveCategory(cat.id)}
                      className={`w-full flex items-center justify-between p-2.5 sm:p-3 rounded-xl text-left transition-all duration-200 cursor-pointer border ${isCurrent
                          ? "bg-accent/15 text-accent border-accent/40 shadow-sm"
                          : "border-transparent text-foreground/80 hover:bg-secondary hover:text-foreground"
                        }`}
                    >
                      <div className="flex items-center gap-2.5 sm:gap-3 min-w-0 flex-1">
                        <div
                          className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0"
                          style={{ background: `${cat.color}20` }}
                        >
                          <Icon size={16} style={{ color: cat.color }} />
                        </div>
                        <div className="min-w-0 flex-1">
                          <span className="text-xs font-bold block truncate">{cat.title}</span>
                          <span className="text-[10px] text-muted-foreground line-clamp-1 truncate">{cat.tagline}</span>
                        </div>
                      </div>
                      <ChevronRight size={14} className={`shrink-0 ml-1.5 ${isCurrent ? "text-accent" : "text-muted-foreground/40"}`} />
                    </button>
                  );
                })}
              </div>

              {/* Quick Contact Box */}
              <div className="p-5 rounded-2xl bg-secondary/40 border-2 border-border/80 space-y-3">
                <div className="flex items-center gap-2 text-xs font-bold text-foreground">
                  <PhoneCall size={14} className="text-accent" /> Need a Custom Scope or Turnkey RFP?
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Our engineering and infrastructure directors can prepare a comprehensive project proposal within 48 hours.
                </p>
                <Button asChild size="sm" className="w-full bg-accent text-accent-foreground hover:bg-accent/90 font-bold shadow-md text-xs">
                  <Link to="/contact">Request Comprehensive RFP</Link>
                </Button>
              </div>
            </div>

            {/* Right Column: Active Category Deep Breakdown */}
            <div className="lg:col-span-8">
              <AnimatePresence mode="wait">
                <motion.div
                  key={active.id}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  className="bg-card border-2 border-border/80 rounded-3xl p-7 sm:p-9 shadow-xl space-y-8 relative overflow-hidden"
                >
                  {/* Decorative background glow */}
                  <div
                    className="absolute top-0 right-0 w-80 h-80 rounded-full blur-[100px] pointer-events-none opacity-20"
                    style={{ background: active.color }}
                  />

                  {/* Header */}
                  <div className="relative z-10">
                    <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
                      <div className="flex items-center gap-3">
                        <div
                          className="w-14 h-14 rounded-2xl flex items-center justify-center shadow-inner border border-border/60"
                          style={{ background: `${active.color}20` }}
                        >
                          <ActiveIcon size={28} style={{ color: active.color }} />
                        </div>
                        <div>
                          <span className="text-[11px] font-bold uppercase tracking-wider text-accent block">
                            {active.tagline}
                          </span>
                          <h2 className="font-display text-2xl sm:text-3xl font-bold text-foreground">
                            {active.title}
                          </h2>
                        </div>
                      </div>

                      {active.deepLink && (
                        <Button asChild variant="outline" size="sm" className="border-border bg-secondary hover:bg-accent hover:text-white font-bold text-xs">
                          <Link to={active.deepLink}>
                            Dedicated Service Page <ArrowRight size={13} className="ml-1.5" />
                          </Link>
                        </Button>
                      )}
                    </div>

                    <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                      {active.description}
                    </p>
                  </div>

                  {/* Deliverables Banner */}
                  <div className="p-4 sm:p-5 rounded-2xl bg-secondary/50 border border-border/70 space-y-1 relative z-10">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-foreground flex items-center gap-1.5">
                      <ShieldCheck size={14} className="text-emerald-500" /> Standard Engineering Deliverables:
                    </span>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      {active.deliverablesSummary}
                    </p>
                  </div>

                  {/* Included Services Grid */}
                  <div className="space-y-4 relative z-10">
                    <h3 className="font-display font-bold text-sm uppercase tracking-wider text-foreground">
                      Specific Solutions &amp; Scope Items:
                    </h3>
                    <div className="grid sm:grid-cols-2 gap-3">
                      {active.services.map((serviceName, idx) => (
                        <div
                          key={idx}
                          className="flex items-start gap-2.5 p-3.5 rounded-xl bg-secondary/30 border border-border/60 text-xs sm:text-sm font-medium text-foreground hover:border-accent/40 hover:bg-secondary/60 transition-all"
                        >
                          <CheckCircle2 size={15} className="text-accent shrink-0 mt-0.5" />
                          <span>{serviceName}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Action CTAs */}
                  <div className="pt-4 border-t border-border/70 flex flex-wrap items-center justify-between gap-4 relative z-10">
                    <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 font-bold shadow-md px-7">
                      <Link to={`/contact?service=${encodeURIComponent(active.title)}`}>
                        Consult on {active.title.split(" ")[0]} Project <ArrowRight size={14} className="ml-1.5" />
                      </Link>
                    </Button>

                    <a
                      href="https://wa.me/919480944727"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-semibold text-emerald-600 hover:text-emerald-500 flex items-center gap-1.5 hover:underline"
                    >
                      <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                      Quick WhatsApp Chat: +91 94809 44727
                    </a>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>



      {/* Why Single-Partner Advantage */}
      <section className="py-16 lg:py-20 bg-background overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto mb-14 scroll-reveal">
            <h2 className="font-display text-3xl lg:text-4xl font-bold text-foreground mb-3">
              The Single-Partner Advantage
            </h2>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Why fast-growing companies replace disconnected vendor fragments with Brandex.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Unified Accountability",
                desc: "Software, cloud, cybersecurity, physical networking, and solar handled by a single dedicated team.",
                icon: ShieldCheck,
              },
              {
                title: "US-Trained Engineering",
                desc: "Architecture led by specialists in zero-trust cybersecurity, distributed systems, and performance tuning.",
                icon: Code2,
              },
              {
                title: "Zero Vendor Lock-In",
                desc: "100% full source code, cloud credentials, and intellectual property ownership delivered to you upon launch.",
                icon: CheckCircle2,
              },
              {
                title: "Guaranteed AMCs & SLAs",
                desc: "Comprehensive annual maintenance retainers ensuring high system uptime and rapid reactive support.",
                icon: Wrench,
              },
            ].map((item, i) => {
              const Icon = item.icon;
              return (
                <div
                  key={i}
                  className={`scroll-reveal scroll-reveal-delay-${i + 1} p-6 bg-card border-2 border-border/80 rounded-2xl hover:border-accent/40 transition-all shadow-sm`}
                >
                  <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center text-accent mb-4">
                    <Icon size={20} />
                  </div>
                  <h3 className="font-display font-bold text-base text-foreground mb-2">{item.title}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
