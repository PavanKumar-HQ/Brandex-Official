import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowLeft,
  Github,
  Linkedin,
  Twitter,
  Mail,
  ExternalLink,
  Code2,
  Cpu,
  Layers,
  Terminal,
  Award,
  CheckCircle2,
  Globe2,
  BookOpen,
  Users,
  ShieldCheck,
  Zap,
  ArrowRight,
  Copy,
  Check,
  Sparkles,
  MessageSquare,
  Activity,
  Flame,
  Radio,
  SlidersHorizontal,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import SEOHead from "@/components/SEOHead";

interface FounderData {
  id: string;
  name: string;
  role: string;
  tagline: string;
  bio: string[];
  brandexIdea: string;
  dailyEngine: string;
  funPunchline: string;
  avatar: string;
  initials: string;
  location: string;
  telemetry: {
    ttfb: string;
    lighthouse: string;
    ownership: string;
    network: string;
  };
  terminalCommands: {
    command: string;
    label: string;
    output: string[];
  }[];
  missionPillars: { title: string; desc: string; iconTag: string }[];
  techStack: { name: string; category: string; desc: string }[];
  milestones: { year: string; title: string; desc: string }[];
  projects: { title: string; category: string; description: string; impact: string; tech: string[] }[];
  openSource: { name: string; desc: string; stars?: string; link?: string }[];
  unfilteredQA: { q: string; a: string }[];
  socials: {
    github?: string;
    linkedin?: string;
    twitter?: string;
    email: string;
  };
}

const founders: Record<string, FounderData> = {
  pavan: {
    id: "pavan-kumar",
    name: "Pavan Kumar",
    role: "Co-Founder & Chief Systems Architect",
    tagline: "Engineering sub-second web platforms, enterprise cloud pipelines, and bespoke software systems.",
    location: "Bangalore, India",
    avatar: "/logo_nobg.png",
    initials: "PK",
    telemetry: {
      ttfb: "< 18ms",
      lighthouse: "99+ Score",
      ownership: "100% Client IP",
      network: "500+ Bangalore Builders",
    },
    terminalCommands: [
      {
        command: "brandex --diagnose",
        label: "⚡ Run Architecture Diagnostic",
        output: [
          "[OK] Core Web Vitals: 99.4/100 (Sub-second FCP / LCP)",
          "[OK] Distributed Edge CDN: 32 Global POPs Active",
          "[OK] Database Query Latency: 2.4ms (Indexed & Cached)",
          "[OK] Platform Tax: 0% (Zero unneeded SaaS subscriptions)",
          "--> Result: System Architecture is High-Frequency & Production-Ready.",
        ],
      },
      {
        command: "stack --inspect",
        label: "🛠️ Inspect Core Stack",
        output: [
          "Runtime: Node.js 22 LTS / React 19 / Vite 5 / Next.js Turbopack",
          "Languages: TypeScript (Strict mode), Go 1.22, SQL",
          "Data: PostgreSQL, Redis In-Memory Cache, Vector Embeddings",
          "Rendering: WebGL / Three.js 3D Shaders, Framer Motion",
          "Infra: Docker Sandboxes, AWS ECS, Cloudflare Workers Edge",
        ],
      },
      {
        command: "thesis --unfiltered",
        label: "🔥 Why Brandex Was Started",
        output: [
          "Thesis: Corporate software is weighed down by 40-plugin bloated CMS traps.",
          "We treat business websites & internal tools like high-frequency financial software.",
          "Every millisecond shaved from load time directly lifts customer conversion rates.",
          "100% Client Code Ownership — you never get held hostage by recurring agency licenses.",
        ],
      },
      {
        command: "status --bangalore",
        label: "📍 Live Engineering Hub",
        output: [
          "Location: #121 13th Main, Vijaynagar, Bangalore - 560040",
          "Status: Active Sprint Execution (3 Projects In Build Phase)",
          "Community: 500+ Guild Members in Weekly Code & Architecture Syncs",
          "Direct Founder Line: brandexhq@gmail.com / +91 94809 44727",
        ],
      },
    ],
    brandexIdea:
      "Brandex wasn't created to be another mundane agency churning out bloated boilerplate WordPress templates with 40 unmaintained plugins. The thesis was simple: treat modern business software like high-frequency infrastructure — sub-second edge speeds, 100% client code ownership, zero recurring platform tax, and automated pipelines that run flawlessly.",
    dailyEngine:
      "At Brandex, Pavan spends his days in the engine room turning complex business workflows into bulletproof, event-driven software. From distributed database models to sub-18ms edge frontends and automated webhook orchestrations, he builds systems designed to handle immense scale without flinching.",
    funPunchline:
      "Turning caffeine, edge CDNs, and zero-compromise code into bulletproof digital systems so your business runs smoothly while you sleep.",
    bio: [
      "Brandex wasn't created to be another mundane agency churning out bloated boilerplate templates. The thesis was simple: treat business software like high-frequency infrastructure — sub-second edge speeds, 100% client code ownership, zero recurring platform tax, and automated pipelines that run flawlessly.",
      "At Brandex, Pavan spends his days turning messy operational workflows into bulletproof, event-driven software. From distributed database models to sub-18ms edge frontends and automated webhook orchestrations, he builds systems designed to handle scale without breaking.",
      "Beyond engineering enterprise client software, Pavan spearheads the Brandex Education infrastructure for smart schools and builds open-source developer toolkits for the 500+ builder ecosystem in Bangalore.",
    ],
    missionPillars: [
      {
        title: "Killing Latency & Slow Agency Stacks",
        desc: "Replacing bloated 5-second monolithic page loads with sub-100ms distributed edge cloud architectures.",
        iconTag: "SPEED",
      },
      {
        title: "Automating Heavy Business Workflows",
        desc: "Building custom transactional pipelines and database sync engines that save clients 40+ hours every week.",
        iconTag: "AUTOMATION",
      },
      {
        title: "Empowering Smart Classrooms",
        desc: "Architecting distraction-free smartboard video streaming and formative evaluation tools for Karnataka schools.",
        iconTag: "EDUCATION",
      },
      {
        title: "Powering the 500+ Builder Community",
        desc: "Authoring open-source Vite presets, API blueprints, and mentoring the next generation of software architects.",
        iconTag: "COMMUNITY",
      },
    ],
    techStack: [
      { name: "React 19 & Next.js", category: "Frontend Engine", desc: "Ultra-fast server/client component rendering" },
      { name: "TypeScript (Strict)", category: "Core Language", desc: "Type-safe deterministic enterprise architectures" },
      { name: "PostgreSQL & Redis", category: "Database & Cache", desc: "ACID compliant persistence & microsecond caching" },
      { name: "Three.js & WebGL", category: "Interactive 3D", desc: "GPU-accelerated visual simulation environments" },
      { name: "Docker & Cloudflare Edge", category: "Infrastructure", desc: "Isolated micro-container sandboxes & edge routing" },
      { name: "Tailwind CSS & Motion", category: "Design System", desc: "Custom Liquid Glass tokens & micro-interactions" },
    ],
    milestones: [
      {
        year: "2026",
        title: "Brandex Education & 3D Interactive Labs",
        desc: "Deployed Karnataka State Board smartboard classroom modules and WebGL 3D simulation engines.",
      },
      {
        year: "2024",
        title: "Co-Founded Brandex Digital Infrastructure",
        desc: "Established Brandex as an engineering-led software studio focused on bespoke enterprise web architecture.",
      },
      {
        year: "2023",
        title: "High-Throughput Webhook Engine",
        desc: "Engineered automated data synchronization pipelines handling 100k+ transactions with zero data loss.",
      },
      {
        year: "2022",
        title: "Edge Performance Frameworks",
        desc: "Authored sub-second frontend presets achieving 99+ Core Web Vitals on mission-critical applications.",
      },
    ],
    projects: [
      {
        title: "Enterprise Multi-Tenant SaaS Architecture",
        category: "Enterprise Cloud",
        description: "Engineered end-to-end cloud infrastructure with isolated tenant databases, automated role-based access, and real-time event logging.",
        impact: "99.99% SLA Uptime & Sub-18ms TTFB",
        tech: ["Next.js", "PostgreSQL", "Docker", "Redis"],
      },
      {
        title: "Automated Commerce & Booking Pipeline",
        category: "Business Engine",
        description: "Designed bespoke headless commerce and automated calendar dispatch engine integrating payments, SMS webhooks, and CRM sync.",
        impact: "40+ Hours Saved Per Week in Manual Admin",
        tech: ["TypeScript", "Node.js", "Webhooks", "Stripe/Razorpay"],
      },
    ],
    openSource: [
      {
        name: "brandex-edge-presets",
        desc: "Production-ready scaffolding for sub-second Vite & React micro-frontends with edge CDN routing.",
        stars: "140+ Stars",
      },
      {
        name: "liquid-glass-ui",
        desc: "Apple-grade translucent glassmorphic design token library for modern web applications.",
        stars: "220+ Stars",
      },
    ],
    unfilteredQA: [
      {
        q: "Why do you refuse to build on bloated WordPress/No-Code templates?",
        a: "Because templates are ticking time-bombs of technical debt. When you load 45 plugins to achieve simple forms, your site takes 4 seconds to load on mobile and breaks every time a plugin updates. We write clean, bespoke React & TypeScript code that you own 100% forever.",
      },
      {
        q: "What is your definition of great software engineering?",
        a: "Software is great when it disappears into the background — sub-second response times, zero crashes, automated data sync, and intuitive UI that needs zero user manuals.",
      },
    ],
    socials: {
      github: "https://github.com/PavanKumar-HQ",
      linkedin: "https://linkedin.com",
      twitter: "https://x.com",
      email: "brandexhq@gmail.com",
    },
  },
  sathvik: {
    id: "sathvik",
    name: "Sathvik Nagesh",
    role: "Co-Founder & Head of Product Design",
    tagline: "Bridging human-centered interaction design with high-performance digital engineering.",
    location: "Bangalore, India",
    avatar: "/logo_nobg.png",
    initials: "SN",
    telemetry: {
      ttfb: "+340% Lift",
      lighthouse: "100% Accessible",
      ownership: "Bespoke Tokens",
      network: "500+ Design Guild",
    },
    terminalCommands: [
      {
        command: "design --tokens",
        label: "🎨 Inspect Liquid Glass Tokens",
        output: [
          "[TOKEN] Frosted Blur: backdrop-blur-xl (RGBA 255/255/255/0.7)",
          "[TOKEN] Edge Highlight: 1px Solid RGBA(255,255,255,0.4) Inner Glow",
          "[TOKEN] Typography: Plus Jakarta Sans / Outfit Display + JetBrains Mono",
          "[TOKEN] Motion Curves: cubic-bezier(0.16, 1, 0.3, 1) Spring Physics",
          "--> Result: Apple-Grade Translucent Design System Verified.",
        ],
      },
      {
        command: "funnel --benchmark",
        label: "📈 Conversion Rate Audit",
        output: [
          "Legacy Corporate Landing Page Drop-off: 68%",
          "Brandex Liquid Glass Interactive Flow Drop-off: 18%",
          "Net Conversion Delta: +340% Qualified Inbound Leads",
          "User Trust Perception: Premium Enterprise Authority",
        ],
      },
      {
        command: "guild --status",
        label: "👥 Bangalore Product Guild",
        output: [
          "Active Circles: UI/UX Systems, Design Engineering, Micro-Animations",
          "Weekly Teardowns: In-Person Sprints at Bangalore Innovation Labs",
          "Guild Size: 500+ Product Designers & Frontend Architects",
          "Next Meetup: Live Interactive Design Review (RSVP via Community Hub)",
        ],
      },
    ],
    brandexIdea:
      "Most corporate software looks like it was designed in 2004 by someone who hated users. The idea behind Brandex is that enterprise software should feel as sleek, fluid, and delightful as a luxury sports car — zero clutter, razor-sharp typography, and conversion funnels that make users actually want to click.",
    dailyEngine:
      "At Brandex, Sathvik leads product experience, UI architecture, and brand strategy. He takes messy, multifaceted business requirements and transforms them into intuitive, translucent 'Liquid Glass' interfaces that command authority, build immediate trust, and drive measurable revenue lifts.",
    funPunchline:
      "Obsessively destroying ugly corporate templates and crafting digital interfaces so addictive that even your competitors bookmark them.",
    bio: [
      "Most corporate software looks like it was designed in 2004 by someone who hated users. The idea behind Brandex is that enterprise software should feel as sleek, fluid, and delightful as a luxury sports car — zero clutter, razor-sharp typography, and conversion funnels that make users actually want to click.",
      "At Brandex, Sathvik leads product experience, UI architecture, and brand strategy. He takes messy business requirements and transforms them into intuitive, translucent 'Liquid Glass' interfaces that command authority, build immediate trust, and drive measurable revenue lifts.",
      "Sathvik also runs the Brandex Community Guild, hosting in-person design teardowns, product circles, and hack sprints for 500+ builders across Bangalore's booming tech landscape.",
    ],
    missionPillars: [
      {
        title: "Eradicating Boring Corporate UX",
        desc: "Designing high-impact, conversion-optimized interfaces that turn casual website visitors into signed enterprise clients.",
        iconTag: "CONVERSION",
      },
      {
        title: "Pioneering the Liquid Glass Design System",
        desc: "Crafting multi-viewport translucent UI components with strict typographic harmony and micro-motion choreography.",
        iconTag: "DESIGN TOKENS",
      },
      {
        title: "Distraction-Free Classroom Experience",
        desc: "Designing clean, ad-free smartboard theater stages for Karnataka educators and Class 6–10 students.",
        iconTag: "EDTECH UX",
      },
      {
        title: "Fostering the 500+ Builder Circle",
        desc: "Organizing weekly meetups, UI/UX critiques, and collaborative sprints for Bangalore's top product minds.",
        iconTag: "COMMUNITY",
      },
    ],
    techStack: [
      { name: "Figma & Design Systems", category: "Product Architecture", desc: "Component variants, atomic tokens, and wireframes" },
      { name: "Framer Motion Physics", category: "Motion Engine", desc: "Fluid layout transitions and gesture-driven animations" },
      { name: "Tailwind CSS Architecture", category: "Styling Engine", desc: "Zero-runtime CSS with modern responsive utility systems" },
      { name: "Conversion Funnel Design", category: "Growth UX", desc: "Frictionless intake flows and cognitive load reduction" },
      { name: "Design Tokens (W3C)", category: "System Tokens", desc: "Multi-platform theme synchronization and accessibility" },
      { name: "Interactive Prototyping", category: "Usability Testing", desc: "High-fidelity clickable software simulations" },
    ],
    milestones: [
      {
        year: "2026",
        title: "Brandex Education Theater Mode",
        desc: "Designed the ad-free classroom smartboard player and interactive formative assessment modal system.",
      },
      {
        year: "2024",
        title: "Brandex Design Language 2.0",
        desc: "Designed and rolled out the Apple-grade Liquid Glass design system and enterprise UI component library.",
      },
      {
        year: "2023",
        title: "Conversion Architecture Blueprint",
        desc: "Pioneered funnel mapping frameworks resulting in +340% average client lead conversion lifts.",
      },
      {
        year: "2022",
        title: "Bangalore Builders Community",
        desc: "Founded peer design critique and product discussion circles for tech entrepreneurs in Bangalore.",
      },
    ],
    projects: [
      {
        title: "Brandex Liquid Glass UI Canvas",
        category: "Design System",
        description: "Created comprehensive multi-viewport UI architecture blending translucent frosted glass with strict typographic rhythm.",
        impact: "Zero-template Custom Design Standard",
        tech: ["Figma", "Design Tokens", "CSS Architecture", "Motion"],
      },
      {
        title: "Enterprise Client Intake & Portal UX",
        category: "Product Architecture",
        description: "Crafted frictionless client intake workflows, interactive scoping tools, and self-service administration dashboards.",
        impact: "65% Reduction in User Drop-off",
        tech: ["Framer Motion", "React UI", "UX Research", "Tokens"],
      },
    ],
    openSource: [
      {
        name: "brandex-design-tokens",
        desc: "Standardized JSON/CSS design token definitions for typography, glass translucency, and spatial scales.",
        stars: "180+ Stars",
      },
      {
        name: "liquid-glass-figma-kit",
        desc: "Complete community Figma kit featuring modern translucent cards, glass pills, and responsive widgets.",
        stars: "310+ Stars",
      },
    ],
    unfilteredQA: [
      {
        q: "What separates amateur design from enterprise design?",
        a: "Amateur design is decoration applied at the end. Enterprise design is systems architecture from day one — typography scale, visual hierarchy, information density, and subtle micro-feedback that guides the user effortlessly toward the conversion goal.",
      },
      {
        q: "Why do you love the 'Liquid Glass' design aesthetic?",
        a: "Because glass gives depth without visual weight. It feels tangible, futuristic, and allows the interface to breathe against clean content and vibrant gradient accents.",
      },
    ],
    socials: {
      github: "https://github.com",
      linkedin: "https://linkedin.com",
      twitter: "https://x.com",
      email: "brandexhq@gmail.com",
    },
  },
};

export default function FounderProfile({ founderKey }: { founderKey?: string }) {
  const params = useParams();
  const rawKey = founderKey || params.founderId || params["*"] || "";
  
  // Normalize lookup key
  const normalizedKey = rawKey.toLowerCase().includes("sathvik") ? "sathvik" : "pavan";
  const founder = founders[normalizedKey] || founders.pavan;

  // Interactive Tab State
  const [activeTab, setActiveTab] = useState<"blueprint" | "terminal" | "systems" | "qa">("blueprint");
  
  // Interactive Terminal State
  const [selectedCmdIndex, setSelectedCmdIndex] = useState(0);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(founder.socials.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <>
      <SEOHead
        title={`${founder.name} — ${founder.role} | Brandex`}
        description={`${founder.name} is ${founder.role} at Brandex. ${founder.tagline}`}
        canonical={`https://brandex.me/${founder.id}`}
      />

      <div className="min-h-screen bg-[#f8fafd] pt-24 pb-16 lg:pt-28 lg:pb-24 selection:bg-[#4f47e6] selection:text-white">
        <div className="w-full max-w-[1500px] mx-auto px-4 sm:px-8 lg:px-12 space-y-10">
          
          {/* Top Switcher & Navigation Header */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-200/90">
            <div className="flex items-center gap-3">
              <Link
                to="/about"
                className="liquid-glass-pill inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold text-slate-700 hover:text-[#4f47e6] transition-colors shadow-2xs"
              >
                <ArrowLeft size={13} /> <span>Back to About</span>
              </Link>
              <span className="text-slate-300">/</span>
              <span className="text-xs font-mono font-bold text-[#4f47e6]">
                Founder Profile
              </span>
            </div>

            {/* Interactive Dual Founder Switcher Ribbon */}
            <div className="flex items-center gap-2 bg-white p-1 rounded-2xl border border-slate-200/90 shadow-2xs self-start sm:self-auto">
              <Link
                to="/pavan-kumar"
                className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center gap-2 ${
                  founder.id === "pavan-kumar"
                    ? "bg-[#4f47e6] text-white shadow-xs"
                    : "text-slate-600 hover:text-slate-900 hover:bg-slate-50"
                }`}
              >
                <span className="w-2 h-2 rounded-full bg-emerald-400" />
                <span>Pavan Kumar</span>
                <span className="text-[10px] font-mono opacity-80 hidden md:inline">(Architect)</span>
              </Link>

              <Link
                to="/sathvik"
                className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center gap-2 ${
                  founder.id === "sathvik"
                    ? "bg-[#4f47e6] text-white shadow-xs"
                    : "text-slate-600 hover:text-slate-900 hover:bg-slate-50"
                }`}
              >
                <span className="w-2 h-2 rounded-full bg-indigo-400" />
                <span>Sathvik Nagesh</span>
                <span className="text-[10px] font-mono opacity-80 hidden md:inline">(Product Design)</span>
              </Link>
            </div>
          </div>

          {/* 1. HERO PROFILE CARD WITH HALO & TELEMETRY */}
          <div className="liquid-glass rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-sm relative overflow-hidden">
            {/* Ambient Purple Backdrop Light */}
            <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-[#4f47e6]/10 blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-[#38bdf8]/10 blur-3xl pointer-events-none" />

            <div className="relative z-10 space-y-8">
              
              {/* Header Profile Top Row */}
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-8 border-b border-slate-200/80">
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5 sm:gap-6">
                  
                  {/* Avatar Crest with Halo */}
                  <div className="relative shrink-0">
                    <div className="absolute -inset-1 rounded-3xl bg-gradient-to-tr from-[#4f47e6] to-[#818cf8] opacity-70 blur-sm" />
                    <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-2xl bg-[#0b1329] border border-indigo-400/40 flex items-center justify-center p-3 shadow-md">
                      <img
                        src={founder.avatar}
                        alt={founder.name}
                        className="w-full h-full object-contain filter brightness-0 invert drop-shadow-[0_2px_8px_rgba(255,255,255,0.4)]"
                      />
                    </div>
                  </div>

                  {/* Title & Metadata */}
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                      <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#4f47e6]">
                        Brandex Technical Leadership &bull; {founder.location}
                      </span>
                    </div>

                    <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
                      {founder.name}
                    </h1>

                    <p className="text-sm sm:text-base font-semibold text-slate-600 font-mono">
                      {founder.role}
                    </p>
                  </div>
                </div>

                {/* Direct Action Pills & Socials */}
                <div className="flex flex-wrap items-center gap-2.5">
                  {founder.socials.github && (
                    <a
                      href={founder.socials.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="GitHub Profile"
                      className="w-10 h-10 rounded-xl bg-white hover:bg-black hover:text-white border border-slate-200 text-slate-700 transition-all duration-200 flex items-center justify-center shadow-2xs hover:scale-105 active:scale-95"
                    >
                      <Github size={17} />
                    </a>
                  )}

                  {founder.socials.linkedin && (
                    <a
                      href={founder.socials.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="LinkedIn Profile"
                      className="w-10 h-10 rounded-xl bg-white hover:bg-[#0A66C2] hover:text-white border border-slate-200 text-slate-700 transition-all duration-200 flex items-center justify-center shadow-2xs hover:scale-105 active:scale-95"
                    >
                      <Linkedin size={17} />
                    </a>
                  )}

                  {founder.socials.twitter && (
                    <a
                      href={founder.socials.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Twitter / X"
                      className="w-10 h-10 rounded-xl bg-white hover:bg-black hover:text-white border border-slate-200 text-slate-700 transition-all duration-200 flex items-center justify-center shadow-2xs hover:scale-105 active:scale-95"
                    >
                      <Twitter size={17} />
                    </a>
                  )}

                  <button
                    onClick={handleCopyEmail}
                    className="h-10 px-4 rounded-xl bg-white hover:bg-slate-50 border border-slate-200 text-slate-700 text-xs font-bold transition-all flex items-center gap-2 shadow-2xs cursor-pointer active:scale-95"
                  >
                    {copiedEmail ? <Check size={14} className="text-emerald-600" /> : <Copy size={14} className="text-[#4f47e6]" />}
                    <span>{copiedEmail ? "Email Copied!" : "Copy Email"}</span>
                  </button>

                  <Button asChild variant="brand" size="default" className="rounded-xl font-bold text-xs h-10 px-5 shadow-md">
                    <Link to="/contact" className="flex items-center gap-1.5">
                      <span>Schedule Founder Sync</span>
                      <ArrowRight size={13} />
                    </Link>
                  </Button>
                </div>
              </div>

              {/* Live Telemetry KPI Metrics Bar */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="p-4 rounded-2xl bg-white/80 border border-slate-200/90 shadow-2xs space-y-1">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 font-bold block">
                    LATENCY TARGET
                  </span>
                  <div className="text-xl sm:text-2xl font-extrabold text-[#4f47e6] font-mono">
                    {founder.telemetry.ttfb}
                  </div>
                  <span className="text-[11px] text-slate-500 font-medium">Sub-second response</span>
                </div>

                <div className="p-4 rounded-2xl bg-white/80 border border-slate-200/90 shadow-2xs space-y-1">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 font-bold block">
                    PERFORMANCE BENCHMARK
                  </span>
                  <div className="text-xl sm:text-2xl font-extrabold text-slate-900 font-mono">
                    {founder.telemetry.lighthouse}
                  </div>
                  <span className="text-[11px] text-slate-500 font-medium">Verified Core Web Vitals</span>
                </div>

                <div className="p-4 rounded-2xl bg-white/80 border border-slate-200/90 shadow-2xs space-y-1">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 font-bold block">
                    CLIENT CODE RIGHT
                  </span>
                  <div className="text-xl sm:text-2xl font-extrabold text-emerald-700 font-mono">
                    {founder.telemetry.ownership}
                  </div>
                  <span className="text-[11px] text-slate-500 font-medium">Zero vendor lock-in</span>
                </div>

                <div className="p-4 rounded-2xl bg-white/80 border border-slate-200/90 shadow-2xs space-y-1">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 font-bold block">
                    ECOSYSTEM GUILD
                  </span>
                  <div className="text-xl sm:text-2xl font-extrabold text-[#4f47e6] font-mono">
                    {founder.telemetry.network}
                  </div>
                  <span className="text-[11px] text-slate-500 font-medium">Peer review network</span>
                </div>
              </div>

              {/* Bold Punchline Banner */}
              <div className="p-5 sm:p-6 rounded-2xl bg-gradient-to-r from-indigo-50/90 via-purple-50/60 to-white border border-indigo-200/90 shadow-2xs">
                <div className="flex items-center gap-2 font-mono text-[11px] font-bold text-[#4f47e6] uppercase tracking-wider mb-2">
                  <Zap size={14} className="text-[#4f47e6]" />
                  <span>THE UNFILTERED THESIS</span>
                </div>
                <p className="text-base sm:text-lg font-bold text-slate-900 leading-relaxed font-display">
                  "{founder.funPunchline}"
                </p>
              </div>

            </div>
          </div>

          {/* 2. INTERACTIVE EXPLORATION SECTION (TABS) */}
          <div className="space-y-6">
            
            {/* Segmented Tab Controls */}
            <div className="flex items-center gap-2 overflow-x-auto no-scrollbar border-b border-slate-200 pb-3">
              {[
                { id: "blueprint", label: "⚡ Architecture Blueprint", icon: Cpu },
                { id: "terminal", label: "💻 Live Terminal & HUD", icon: Terminal },
                { id: "systems", label: "🚀 Shipped Systems & Repos", icon: Code2 },
                { id: "qa", label: "🎙️ Unfiltered Philosophy", icon: MessageSquare },
              ].map((tab) => {
                const Icon = tab.icon;
                const isActive = activeTab === tab.id;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id as any)}
                    className={`px-4 py-2.5 rounded-xl font-bold text-xs sm:text-sm whitespace-nowrap transition-all flex items-center gap-2 cursor-pointer shrink-0 ${
                      isActive
                        ? "bg-[#4f47e6] text-white shadow-sm"
                        : "bg-white text-slate-600 hover:text-slate-900 border border-slate-200/90 hover:bg-slate-50"
                    }`}
                  >
                    <Icon size={15} />
                    <span>{tab.label}</span>
                  </button>
                );
              })}
            </div>

            {/* TAB 1: ARCHITECTURE BLUEPRINT */}
            {activeTab === "blueprint" && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="space-y-8"
              >
                {/* Biography & Mission Grid */}
                <div className="grid lg:grid-cols-12 gap-8">
                  <div className="lg:col-span-7 space-y-4">
                    <h2 className="font-display font-bold text-2xl text-slate-900">
                      Engineering Approach & Mission
                    </h2>
                    {founder.bio.map((paragraph, i) => (
                      <p key={i} className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                        {paragraph}
                      </p>
                    ))}
                  </div>

                  <div className="lg:col-span-5 space-y-4">
                    <div className="liquid-glass-card rounded-3xl p-6 border border-slate-200 shadow-sm space-y-4">
                      <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                        <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-400">
                          FOUNDER OPERATING MANDATE
                        </span>
                        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                      </div>

                      <div className="space-y-2 text-xs text-slate-600">
                        <p className="font-semibold text-slate-900">
                          ⚡ <strong>Zero Layer of Bureaucracy.</strong>
                        </p>
                        <p className="leading-relaxed">
                          Clients communicate directly with the systems architects engineering their platform. Every database query, frontend component, and deployment pipeline is tuned for maximum speed.
                        </p>
                      </div>

                      <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-xs font-mono text-slate-500">
                        <span>Bangalore HQ</span>
                        <span className="text-[#4f47e6] font-bold">100% Shipped Code</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* 4 Pillars of Architecture */}
                <div className="space-y-4">
                  <h3 className="font-display font-bold text-xl text-slate-900">
                    What We Are Driving at Brandex
                  </h3>

                  <div className="grid sm:grid-cols-2 gap-4">
                    {founder.missionPillars.map((pillar) => (
                      <div
                        key={pillar.title}
                        className="p-5 rounded-2xl bg-white border border-slate-200/90 shadow-2xs space-y-2"
                      >
                        <div className="flex items-center justify-between">
                          <span className="text-[10px] font-mono font-bold text-[#4f47e6] bg-indigo-50 px-2.5 py-0.5 rounded-full border border-indigo-100">
                            {pillar.iconTag}
                          </span>
                          <CheckCircle2 size={15} className="text-emerald-600" />
                        </div>

                        <h4 className="text-sm font-bold text-slate-900">
                          {pillar.title}
                        </h4>

                        <p className="text-xs text-slate-600 leading-relaxed font-normal">
                          {pillar.desc}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Career Milestones */}
                <div className="space-y-4">
                  <h3 className="font-display font-bold text-xl text-slate-900">
                    Key Milestones & Timeline
                  </h3>

                  <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    {founder.milestones.map((m) => (
                      <div
                        key={m.year}
                        className="p-5 rounded-2xl bg-white border border-slate-200/90 shadow-2xs space-y-2 border-t-4 border-t-[#4f47e6]"
                      >
                        <span className="text-xs font-mono font-extrabold text-[#4f47e6]">
                          {m.year}
                        </span>
                        <h4 className="text-sm font-bold text-slate-900 leading-snug">
                          {m.title}
                        </h4>
                        <p className="text-xs text-slate-500 font-normal leading-relaxed">
                          {m.desc}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}

            {/* TAB 2: LIVE TERMINAL & HUD SIMULATOR */}
            {activeTab === "terminal" && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="space-y-8"
              >
                {/* Interactive Terminal Screen */}
                <div className="rounded-3xl bg-[#090e1a] border border-slate-800 text-slate-200 overflow-hidden shadow-2xl">
                  {/* Top Window Chrome Bar */}
                  <div className="px-5 py-3.5 bg-[#0b1324] border-b border-slate-800 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="w-3 h-3 rounded-full bg-rose-500/80" />
                      <span className="w-3 h-3 rounded-full bg-amber-500/80" />
                      <span className="w-3 h-3 rounded-full bg-emerald-500/80" />
                      <span className="text-xs font-mono text-slate-400 ml-2">
                        {founder.id}@brandex-hq: ~ (zsh)
                      </span>
                    </div>

                    <span className="text-[10px] font-mono text-emerald-400 bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-800/60 font-bold">
                      ● LIVE SIMULATOR
                    </span>
                  </div>

                  <div className="p-6 space-y-6">
                    {/* Command Selector Buttons */}
                    <div className="space-y-2">
                      <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400 font-bold block">
                        Select Command to Execute:
                      </span>
                      <div className="flex flex-wrap gap-2">
                        {founder.terminalCommands.map((cmd, idx) => (
                          <button
                            key={cmd.command}
                            onClick={() => setSelectedCmdIndex(idx)}
                            className={`px-3.5 py-2 rounded-xl font-mono text-xs font-bold transition-all cursor-pointer ${
                              selectedCmdIndex === idx
                                ? "bg-[#4f47e6] text-white shadow-md shadow-indigo-600/30"
                                : "bg-slate-800/80 hover:bg-slate-700 text-slate-300 border border-slate-700"
                            }`}
                          >
                            {cmd.label}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Terminal Display Output Screen */}
                    <div className="p-5 rounded-2xl bg-black/70 border border-slate-800/90 font-mono text-xs space-y-3 shadow-inner">
                      <div className="flex items-center gap-2 text-indigo-400 font-bold">
                        <span>$</span>
                        <span className="text-white">
                          {founder.terminalCommands[selectedCmdIndex].command}
                        </span>
                        <span className="w-2 h-4 bg-indigo-500 animate-pulse" />
                      </div>

                      <div className="space-y-1.5 pt-2 border-t border-slate-800 text-slate-300">
                        {founder.terminalCommands[selectedCmdIndex].output.map((line, i) => (
                          <p key={i} className="leading-relaxed">
                            {line}
                          </p>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Tech Arsenal Grid */}
                <div className="space-y-4">
                  <h3 className="font-display font-bold text-xl text-slate-900">
                    Core Technical Stack & Tools
                  </h3>

                  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {founder.techStack.map((tech) => (
                      <div
                        key={tech.name}
                        className="p-5 rounded-2xl bg-white border border-slate-200/90 shadow-2xs space-y-1.5 hover:border-indigo-300 transition-colors"
                      >
                        <span className="text-[10px] font-mono font-bold text-[#4f47e6] uppercase tracking-wider block">
                          {tech.category}
                        </span>
                        <h4 className="text-sm font-bold text-slate-900">
                          {tech.name}
                        </h4>
                        <p className="text-xs text-slate-500 font-normal leading-relaxed">
                          {tech.desc}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}

            {/* TAB 3: SHIPPED SYSTEMS & REPOSITORIES */}
            {activeTab === "systems" && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="space-y-8"
              >
                {/* Architectural Case Projects */}
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <h3 className="font-display font-bold text-xl text-slate-900">
                      Shipped Production Architectures
                    </h3>
                    <Link
                      to="/case-studies"
                      className="text-xs font-bold text-[#4f47e6] hover:underline flex items-center gap-1"
                    >
                      <span>Explore all case studies</span>
                      <ArrowRight size={13} />
                    </Link>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-6">
                    {founder.projects.map((proj) => (
                      <div
                        key={proj.title}
                        className="liquid-glass-card hover:bg-white rounded-3xl p-6 sm:p-7 border border-slate-200 shadow-sm flex flex-col justify-between space-y-4"
                      >
                        <div className="space-y-2">
                          <span className="text-[10px] font-mono font-bold text-[#4f47e6] uppercase tracking-wider bg-indigo-50 px-2.5 py-0.5 rounded-full border border-indigo-100">
                            {proj.category}
                          </span>
                          <h4 className="font-display font-bold text-lg text-slate-900">
                            {proj.title}
                          </h4>
                          <p className="text-xs text-slate-600 leading-relaxed font-normal">
                            {proj.description}
                          </p>

                          <div className="flex flex-wrap gap-1.5 pt-2">
                            {proj.tech.map((t) => (
                              <span
                                key={t}
                                className="text-[10px] font-mono font-semibold text-slate-600 bg-slate-100 px-2 py-0.5 rounded-md"
                              >
                                {t}
                              </span>
                            ))}
                          </div>
                        </div>

                        <div className="pt-4 border-t border-slate-100 text-xs font-mono font-bold text-emerald-700 flex items-center gap-1.5">
                          <span>⚡ {proj.impact}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Open Source Toolkits */}
                <div className="space-y-4">
                  <h3 className="font-display font-bold text-xl text-slate-900">
                    Open Source & Community Ecosystem
                  </h3>

                  <div className="grid sm:grid-cols-2 gap-6">
                    {founder.openSource.map((os) => (
                      <div
                        key={os.name}
                        className="liquid-glass-card hover:bg-white rounded-3xl p-6 border border-slate-200 shadow-sm flex flex-col justify-between space-y-4"
                      >
                        <div className="space-y-2">
                          <div className="flex items-center justify-between">
                            <span className="text-[10px] font-mono font-bold text-slate-500 uppercase tracking-wider flex items-center gap-1">
                              <Code2 size={13} className="text-[#4f47e6]" />
                              Public Repository
                            </span>
                            {os.stars && (
                              <span className="text-[10px] font-mono font-bold text-amber-700 bg-amber-50 px-2 py-0.5 rounded border border-amber-200">
                                ⭐ {os.stars}
                              </span>
                            )}
                          </div>

                          <h4 className="font-mono font-bold text-base text-slate-900">
                            {os.name}
                          </h4>
                          <p className="text-xs text-slate-600 leading-relaxed font-normal">
                            {os.desc}
                          </p>
                        </div>

                        <div className="pt-3 border-t border-slate-100 text-[11px] font-mono text-slate-400">
                          MIT License &bull; 100% Free Open Source
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}

            {/* TAB 4: UNFILTERED PHILOSOPHY & QA */}
            {activeTab === "qa" && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="space-y-6"
              >
                <div className="max-w-3xl space-y-2">
                  <h3 className="font-display font-bold text-2xl text-slate-900">
                    Unfiltered Thoughts On Software Engineering
                  </h3>
                  <p className="text-sm text-slate-600 font-normal">
                    Straight answers on modern web architecture, slow agencies, and why we do things differently.
                  </p>
                </div>

                <div className="space-y-4">
                  {founder.unfilteredQA.map((qa, idx) => (
                    <div
                      key={idx}
                      className="p-6 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-3"
                    >
                      <h4 className="font-display font-bold text-base sm:text-lg text-slate-900 flex items-start gap-2.5">
                        <span className="text-[#4f47e6] font-mono">Q.</span>
                        <span>{qa.q}</span>
                      </h4>

                      <p className="text-sm text-slate-600 leading-relaxed pl-6 border-l-2 border-indigo-200 font-normal">
                        {qa.a}
                      </p>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}

          </div>

          {/* Bottom Switcher Banner */}
          <div className="pt-8 border-t border-slate-200 text-center">
            <p className="text-xs text-slate-500 mb-3 font-mono">Switch Leadership Profile:</p>
            <Link
              to={founder.id === "pavan-kumar" ? "/sathvik" : "/pavan-kumar"}
              className="liquid-glass-pill inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs font-bold text-slate-800 hover:text-[#4f47e6] transition-all shadow-2xs hover:scale-102"
            >
              <span>View {founder.id === "pavan-kumar" ? "Sathvik Nagesh's Profile (Head of Product)" : "Pavan Kumar's Profile (Systems Architect)"}</span>
              <ArrowRight size={13} />
            </Link>
          </div>

        </div>
      </div>
    </>
  );
}
