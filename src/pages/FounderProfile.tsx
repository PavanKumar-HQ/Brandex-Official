import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
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
  missionPillars: { title: string; desc: string; iconTag: string }[];
  techStack: { name: string; category: string }[];
  milestones: { year: string; title: string; desc: string }[];
  projects: { title: string; category: string; description: string; impact: string; tech: string[] }[];
  openSource: { name: string; desc: string; stars?: string; link?: string }[];
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
        title: "Eliminating Latency & Slow Agency Stacks",
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
      { name: "React 19 & Next.js", category: "Frontend Engine" },
      { name: "TypeScript (Strict)", category: "Core Language" },
      { name: "PostgreSQL & Redis", category: "Database & Cache" },
      { name: "Three.js & WebGL", category: "Interactive 3D" },
      { name: "Docker & Cloudflare Edge", category: "Infrastructure" },
      { name: "Tailwind CSS & Motion", category: "Design System" },
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
      { name: "Figma & Design Systems", category: "Product Architecture" },
      { name: "Framer Motion Physics", category: "Motion Engine" },
      { name: "Tailwind CSS Architecture", category: "Styling Engine" },
      { name: "Conversion Funnel Design", category: "Growth UX" },
      { name: "Design Tokens (W3C)", category: "System Tokens" },
      { name: "Interactive Prototyping", category: "Usability Testing" },
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
        <div className="w-full max-w-[1500px] mx-auto px-4 sm:px-8 lg:px-12 space-y-12">
          
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
                Leadership Profile
              </span>
            </div>

            {/* Dual Founder Switcher Ribbon */}
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

          {/* 1. HERO PROFILE CARD WITH KPI BAR */}
          <div className="liquid-glass rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-sm relative overflow-hidden">
            {/* Ambient Purple Backdrop Light */}
            <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-[#4f47e6]/10 blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-[#818cf8]/10 blur-3xl pointer-events-none" />

            <div className="relative z-10 space-y-8">
              
              {/* Header Profile Top Row */}
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-8 border-b border-slate-200/80">
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5 sm:gap-6">
                  
                  {/* Avatar Crest with Halo */}
                  <div className="relative shrink-0">
                    <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl bg-[#4f47e6] border border-indigo-300/40 flex items-center justify-center p-3 shadow-md">
                      <img
                        src={founder.avatar}
                        alt={founder.name}
                        className="w-full h-full object-contain filter brightness-0 invert drop-shadow-sm"
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

          {/* 2. THE STORY & MISSION GRID */}
          <div className="grid lg:grid-cols-12 gap-8">
            <div className="lg:col-span-7 space-y-4">
              <h2 className="font-display font-bold text-2xl sm:text-3xl text-slate-900">
                Engineering Approach & Mission
              </h2>
              {founder.bio.map((paragraph, i) => (
                <p key={i} className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                  {paragraph}
                </p>
              ))}

              <div className="pt-3">
                <h3 className="font-mono text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">
                  Core Technologies & Tools
                </h3>
                <div className="flex flex-wrap gap-2">
                  {founder.techStack.map((tech) => (
                    <span
                      key={tech.name}
                      className="px-3 py-1.5 rounded-xl bg-white border border-slate-200/90 text-xs font-semibold text-slate-800 shadow-2xs flex items-center gap-1.5"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-[#4f47e6]" />
                      <span>{tech.name}</span>
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 space-y-4">
              <div className="liquid-glass-card rounded-3xl p-6 sm:p-7 border border-slate-200 shadow-sm space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-400">
                    FOUNDER OPERATING MANDATE
                  </span>
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                </div>

                <div className="space-y-2.5 text-xs sm:text-sm text-slate-600">
                  <p className="font-bold text-slate-900">
                    ⚡ <strong>Zero Layer of Bureaucracy.</strong>
                  </p>
                  <p className="leading-relaxed">
                    Clients communicate directly with the systems architects engineering their platform. Every database query, frontend component, and deployment pipeline is tuned for maximum speed.
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-mono text-slate-500">
                  <span>Bangalore HQ</span>
                  <span className="text-[#4f47e6] font-bold">100% Shipped Code</span>
                </div>
              </div>
            </div>
          </div>

          {/* 3. 4 PILLARS OF ARCHITECTURE */}
          <div className="space-y-5">
            <h2 className="font-display font-bold text-2xl text-slate-900">
              What We Are Driving at Brandex
            </h2>

            <div className="grid sm:grid-cols-2 gap-5">
              {founder.missionPillars.map((pillar) => (
                <div
                  key={pillar.title}
                  className="p-6 rounded-3xl bg-white border border-slate-200/90 shadow-xs space-y-2.5"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono font-bold text-[#4f47e6] bg-indigo-50 px-2.5 py-0.5 rounded-full border border-indigo-100">
                      {pillar.iconTag}
                    </span>
                    <CheckCircle2 size={16} className="text-emerald-600" />
                  </div>

                  <h3 className="text-base font-bold text-slate-900">
                    {pillar.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                    {pillar.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* 4. KEY MILESTONES */}
          <div className="space-y-5">
            <h2 className="font-display font-bold text-2xl text-slate-900">
              Key Milestones & Timeline
            </h2>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {founder.milestones.map((m) => (
                <div
                  key={m.year}
                  className="p-5 rounded-2xl bg-white border border-slate-200/90 shadow-2xs space-y-2 border-t-4 border-t-[#4f47e6]"
                >
                  <span className="text-xs font-mono font-extrabold text-[#4f47e6]">
                    {m.year}
                  </span>
                  <h3 className="text-sm font-bold text-slate-900 leading-snug">
                    {m.title}
                  </h3>
                  <p className="text-xs text-slate-500 font-normal leading-relaxed">
                    {m.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* 5. SHIPPED SYSTEMS & OPEN SOURCE */}
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="font-display font-bold text-2xl text-slate-900">
                Shipped Systems & Open Source
              </h2>
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
                    <h3 className="font-display font-bold text-lg text-slate-900">
                      {proj.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                      {proj.description}
                    </p>

                    <div className="flex flex-wrap gap-1.5 pt-2">
                      {proj.tech.map((t) => (
                        <span
                          key={t}
                          className="text-[10px] font-mono font-semibold text-slate-600 bg-slate-100 px-2.5 py-0.5 rounded-md"
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

              {founder.openSource.map((os) => (
                <div
                  key={os.name}
                  className="liquid-glass-card hover:bg-white rounded-3xl p-6 sm:p-7 border border-slate-200 shadow-sm flex flex-col justify-between space-y-4"
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

                    <h3 className="font-mono font-bold text-base text-slate-900">
                      {os.name}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                      {os.desc}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-slate-100 text-[11px] font-mono text-slate-400">
                    MIT License &bull; 100% Free Open Source
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 6. BOTTOM SWITCHER BANNER */}
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
