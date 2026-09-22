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
  location: string;
  missionPillars: { title: string; desc: string }[];
  techStack: string[];
  milestones: { year: string; title: string; desc: string }[];
  projects: { title: string; category: string; description: string; impact: string }[];
  openSource: { name: string; desc: string; link?: string }[];
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
    avatar: "/logo_nobg.webp",
    brandexIdea:
      "Brandex wasn't created to be another mundane agency churning out bloated boilerplate WordPress templates with 40 unmaintained plugins. The thesis was simple: treat modern business software like high-frequency infrastructure — sub-second edge speeds, 100% client code ownership, zero recurring platform tax, and automated pipelines that run flawlessly.",
    dailyEngine:
      "At Brandex, Pavan spends his days in the engine room turning complex business workflows into bulletproof, event-driven software. From distributed database models to sub-18ms edge frontends and automated webhook orchestrations, he builds systems designed to handle immense scale without flinching.",
    funPunchline:
      "Turning caffeine, edge CDNs, and zero-compromise code into bulletproof digital systems so your business runs smoothly while you sleep.",
    bio: [
      "Brandex wasn't created to be another mundane agency churning out bloated boilerplate WordPress templates with 40 unmaintained plugins. The thesis was simple: treat modern business software like high-frequency infrastructure — sub-second edge speeds, 100% client code ownership, zero recurring platform tax, and automated pipelines that run flawlessly.",
      "At Brandex, Pavan spends his days in the engine room turning complex business workflows into bulletproof, event-driven software. From distributed database models to sub-18ms edge frontends and automated webhook orchestrations, he builds systems designed to handle immense scale without flinching.",
      "Beyond engineering enterprise client software, Pavan spearheads the Brandex Education infrastructure for smart schools and builds open-source developer toolkits for the 500+ builder ecosystem in Bangalore.",
    ],
    missionPillars: [
      {
        title: "Killing Latency & Slow Agency Stacks",
        desc: "Replacing bloated 5-second monolithic page loads with sub-100ms distributed cloud architectures.",
      },
      {
        title: "Automating Heavy Business Workflows",
        desc: "Building custom transactional pipelines and database sync engines that save clients 40+ hours every week.",
      },
      {
        title: "Empowering Smart Classrooms",
        desc: "Architecting distraction-free smartboard video streaming and formative evaluation tools for Karnataka schools.",
      },
      {
        title: "Powering the 500+ Builder Community",
        desc: "Authoring open-source Vite presets, API blueprints, and mentoring the next generation of software architects.",
      },
    ],
    techStack: [
      "React",
      "TypeScript",
      "Next.js",
      "Node.js",
      "PostgreSQL",
      "TailwindCSS",
      "Three.js",
      "Docker",
      "AWS / Edge CDN",
      "Redis",
    ],
    milestones: [
      {
        year: "2026",
        title: "Brandex Education & WebGL Simulation Engine",
        desc: "Deployed Karnataka State Board smart classroom video modules and 3D digital simulation systems.",
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
        title: "SaaS Multi-Tenant Architecture",
        category: "Enterprise Cloud",
        description:
          "Engineered end-to-end cloud infrastructure with isolated tenant databases, automated role-based access, and real-time event logging.",
        impact: "99.99% SLA Uptime & Sub-18ms TTFB",
      },
      {
        title: "Automated Commerce & Booking Pipeline",
        category: "Business Engine",
        description:
          "Designed bespoke headless commerce and automated calendar dispatch engine integrating payments, SMS webhooks, and CRM sync.",
        impact: "40+ Hours Saved Per Week in Manual Admin",
      },
    ],
    openSource: [
      {
        name: "brandex-edge-presets",
        desc: "Production-ready scaffolding for sub-second Vite & React micro-frontends with edge CDN routing.",
      },
      {
        name: "liquid-glass-ui",
        desc: "Apple-grade translucent glassmorphic design token library for modern web applications.",
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
    name: "Sathvik",
    role: "Co-Founder & Head of Product Design",
    tagline: "Bridging human-centered interaction design with high-performance digital engineering.",
    location: "Bangalore, India",
    avatar: "/logo_nobg.webp",
    brandexIdea:
      "Most corporate software looks like it was designed in 2004 by someone who hated users. The idea behind Brandex is that enterprise software should feel as sleek, fluid, and delightful as a luxury sports car — zero clutter, razor-sharp typography, and conversion funnels that make users actually want to click.",
    dailyEngine:
      "At Brandex, Sathvik leads product experience, UI architecture, and brand strategy. He takes messy, multifaceted business requirements and transforms them into intuitive, translucent 'Liquid Glass' interfaces that command authority, build immediate trust, and drive measurable revenue lifts.",
    funPunchline:
      "Obsessively destroying ugly corporate templates and crafting digital interfaces so addictive that even your competitors bookmark them.",
    bio: [
      "Most corporate software looks like it was designed in 2004 by someone who hated users. The idea behind Brandex is that enterprise software should feel as sleek, fluid, and delightful as a luxury sports car — zero clutter, razor-sharp typography, and conversion funnels that make users actually want to click.",
      "At Brandex, Sathvik leads product experience, UI architecture, and brand strategy. He takes messy, multifaceted business requirements and transforms them into intuitive, translucent 'Liquid Glass' interfaces that command authority, build immediate trust, and drive measurable revenue lifts.",
      "Sathvik also runs the Brandex Community Guild, hosting in-person design teardowns, product circles, and hack sprints for 500+ builders across Bangalore's booming tech landscape.",
    ],
    missionPillars: [
      {
        title: "Eradicating Boring Corporate UX",
        desc: "Designing high-impact, conversion-optimized interfaces that turn casual website visitors into signed enterprise clients.",
      },
      {
        title: "Pioneering the Liquid Glass Design System",
        desc: "Crafting multi-viewport translucent UI components with strict typographic harmony and micro-motion choreography.",
      },
      {
        title: "Distraction-Free Classroom Experience",
        desc: "Designing clean, ad-free smartboard theater stages for Karnataka educators and Class 6–10 students.",
      },
      {
        title: "Fostering the 500+ Builder Circle",
        desc: "Organizing weekly meetups, UI/UX critiques, and collaborative sprints for Bangalore's top product minds.",
      },
    ],
    techStack: [
      "Figma",
      "UI Systems",
      "Framer Motion",
      "React UI",
      "CSS Architecture",
      "Design Tokens",
      "Wireframing",
      "User Testing",
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
        title: "Brandex Liquid Glass Canvas",
        category: "Design System",
        description:
          "Created comprehensive multi-viewport UI architecture blending translucent frosted glass with strict typographic rhythm.",
        impact: "Zero-template Custom Design Standard",
      },
      {
        title: "Enterprise Client Portal UX",
        category: "Product Architecture",
        description:
          "Crafted frictionless client intake workflows, interactive scoping tools, and self-service administration dashboards.",
        impact: "65% Reduction in User Drop-off",
      },
    ],
    openSource: [
      {
        name: "brandex-design-tokens",
        desc: "Standardized JSON/CSS design token definitions for typography, glass translucency, and spatial scales.",
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

  return (
    <>
      <SEOHead
        title={`${founder.name} — ${founder.role} | Brandex`}
        description={`${founder.name} is ${founder.role} at Brandex. ${founder.tagline}`}
        canonicalUrl={`/${founder.id}`}
      />

      <section className="pt-24 pb-14 lg:pt-28 lg:pb-20 bg-[#f8fafd] relative overflow-hidden border-b border-slate-200/80">
        <div className="absolute inset-0 bg-grid opacity-35 pointer-events-none" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 max-w-5xl space-y-8">
          
          {/* Back links & Leadership Ribbon */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <Link
                to="/about"
                className="liquid-glass-pill inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold text-slate-700 hover:text-[#4f47e6] transition-colors shadow-2xs"
              >
                <ArrowLeft size={13} /> <span>Back to About</span>
              </Link>
              <Link
                to="/"
                className="liquid-glass-pill inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold text-slate-700 hover:text-[#4f47e6] transition-colors shadow-2xs"
              >
                <span>Home</span>
              </Link>
            </div>

            {/* Quick Switcher */}
            <div className="flex items-center gap-2 bg-white p-1 rounded-2xl border border-slate-200/90 shadow-2xs self-start sm:self-auto">
              <Link
                to="/pavan-kumar"
                className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${
                  founder.id === "pavan-kumar"
                    ? "bg-[#4f47e6] text-white shadow-xs"
                    : "text-slate-600 hover:text-slate-900 hover:bg-slate-50"
                }`}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                <span>Pavan Kumar</span>
              </Link>

              <Link
                to="/sathvik"
                className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${
                  founder.id === "sathvik"
                    ? "bg-[#4f47e6] text-white shadow-xs"
                    : "text-slate-600 hover:text-slate-900 hover:bg-slate-50"
                }`}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-indigo-400" />
                <span>Sathvik Nagesh</span>
              </Link>
            </div>
          </div>

          {/* Hero Profile Card */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="liquid-glass rounded-3xl p-6 sm:p-10 shadow-sm border border-slate-200/90"
          >
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-8 border-b border-slate-200/70">
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5 sm:gap-6">
                <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl bg-[#4f47e6] flex items-center justify-center p-3.5 shadow-md shrink-0">
                  <img
                    src={founder.avatar}
                    alt={founder.name}
                    className="w-full h-full object-contain filter brightness-0 invert drop-shadow-sm"
                  />
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#4f47e6]">
                      Brandex Technical Leadership
                    </span>
                  </div>
                  <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
                    {founder.name}
                  </h1>
                  <p className="text-[#4f47e6] font-semibold mt-1 font-mono text-xs sm:text-sm">
                    {founder.role} &bull; {founder.location}
                  </p>
                </div>
              </div>

              {/* Social Links with Authentic Brand Colors on Hover */}
              <div className="flex items-center gap-2.5">
                {founder.socials.github && (
                  <a
                    href={founder.socials.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-xl bg-white border border-slate-200/90 text-slate-700 hover:text-white hover:bg-[#181717] hover:border-[#181717] transition-all duration-200 hover:scale-105 active:scale-95 flex items-center justify-center shadow-2xs cursor-pointer"
                    title="GitHub Profile"
                  >
                    <Github size={17} />
                  </a>
                )}
                {founder.socials.linkedin && (
                  <a
                    href={founder.socials.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-xl bg-white border border-slate-200/90 text-slate-700 hover:text-white hover:bg-[#0A66C2] hover:border-[#0A66C2] transition-all duration-200 hover:scale-105 active:scale-95 flex items-center justify-center shadow-2xs cursor-pointer"
                    title="LinkedIn Profile"
                  >
                    <Linkedin size={17} />
                  </a>
                )}
                {founder.socials.twitter && (
                  <a
                    href={founder.socials.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-xl bg-white border border-slate-200/90 text-slate-700 hover:text-white hover:bg-[#000000] hover:border-[#000000] transition-all duration-200 hover:scale-105 active:scale-95 flex items-center justify-center shadow-2xs cursor-pointer"
                    title="Twitter / X"
                  >
                    <Twitter size={17} />
                  </a>
                )}
                <a
                  href={`mailto:${founder.socials.email}`}
                  className="w-10 h-10 rounded-xl bg-white border border-slate-200/90 text-slate-700 hover:text-white hover:bg-[#ea4335] hover:border-[#ea4335] transition-all duration-200 hover:scale-105 active:scale-95 flex items-center justify-center shadow-2xs cursor-pointer"
                  title="Direct Founder Email"
                >
                  <Mail size={17} />
                </a>
              </div>
            </div>

            {/* Tagline, Bio & Catchy Punchline */}
            <div className="pt-8 grid md:grid-cols-12 gap-8">
              <div className="md:col-span-8 space-y-5">
                <p className="text-lg sm:text-xl font-medium text-slate-900 leading-relaxed font-display">
                  "{founder.tagline}"
                </p>
                {founder.bio.map((paragraph, i) => (
                  <p key={i} className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                    {paragraph}
                  </p>
                ))}

                {/* Catchy Formal-Funky Bold Punchline */}
                <div className="pt-2">
                  <div className="p-4 sm:p-5 rounded-2xl bg-indigo-50/50 border border-indigo-200/90 text-xs sm:text-sm text-slate-900 leading-relaxed shadow-2xs">
                    <div className="flex items-center gap-1.5 font-mono text-[10px] font-extrabold uppercase tracking-wider text-[#4f47e6] mb-1.5">
                      <Zap size={13} className="text-[#4f47e6]" />
                      <span>THE UNFILTERED VIBE</span>
                    </div>
                    <strong className="font-extrabold text-slate-900 block text-sm sm:text-base leading-snug">
                      "{founder.funPunchline}"
                    </strong>
                  </div>
                </div>
              </div>

              {/* Catchy Real-Time Dispatch Card */}
              <div className="md:col-span-4 space-y-4">
                <div className="liquid-glass-card rounded-3xl p-6 border border-slate-200/90 shadow-2xs space-y-4">
                  <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-400">
                      FOUNDER TELEMETRY
                    </span>
                    <span className="flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 text-[10px] font-mono font-bold">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                      Live in Bangalore
                    </span>
                  </div>

                  <div className="space-y-2 text-xs text-slate-600">
                    <p className="font-medium text-slate-800 flex items-center gap-1.5">
                      <Zap size={13} className="text-[#4f47e6] shrink-0" />
                      <span><strong>0% Corporate Jargon.</strong> 100% Shipped Production Systems.</span>
                    </p>
                    <p className="text-[11px] text-slate-500 leading-relaxed">
                      Every project is scoped and executed directly with founders.
                    </p>
                  </div>

                  <Button asChild variant="brand" size="default" className="w-full rounded-xl font-bold text-xs h-11 shadow-md">
                    <Link to="/contact" className="flex items-center justify-center gap-2">
                      <span>Schedule Founder Sync</span>
                      <ArrowRight size={14} />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>

          {/* What We Are Doing At Brandex (Mission Pillars) & Milestones */}
          <div className="grid md:grid-cols-2 gap-6">
            <div className="liquid-glass rounded-3xl p-6 sm:p-7 border border-slate-200/90 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <Zap size={18} className="text-[#4f47e6]" />
                  <h2 className="font-display text-xl font-bold text-slate-900">
                    What I'm Driving at Brandex
                  </h2>
                </div>
                <div className="space-y-3.5">
                  {founder.missionPillars.map((pillar) => (
                    <div key={pillar.title} className="p-3.5 rounded-2xl bg-white/70 border border-slate-200/70 space-y-1">
                      <div className="flex items-center gap-2 text-xs sm:text-sm font-bold text-slate-900">
                        <CheckCircle2 size={14} className="text-[#4f47e6] shrink-0" />
                        <span>{pillar.title}</span>
                      </div>
                      <p className="text-xs text-slate-600 pl-5 leading-relaxed font-normal">
                        {pillar.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Milestones */}
            <div className="liquid-glass rounded-3xl p-6 sm:p-7 border border-slate-200/90">
              <div className="flex items-center gap-2 mb-4">
                <Award size={18} className="text-[#4f47e6]" />
                <h2 className="font-display text-xl font-bold text-slate-900">
                  Key Milestones
                </h2>
              </div>
              <div className="space-y-3.5">
                {founder.milestones.map((m) => (
                  <div key={m.year} className="border-l-2 border-[#4f47e6] pl-3.5">
                    <span className="text-xs font-mono font-bold text-[#4f47e6]">{m.year}</span>
                    <h3 className="text-sm font-bold text-slate-900">{m.title}</h3>
                    <p className="text-xs text-slate-600 mt-0.5">{m.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Featured Projects & Open Source */}
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="font-display text-2xl font-bold text-slate-900">
                Architectural Work & Open Source
              </h2>
              <Link to="/case-studies" className="text-xs font-semibold text-[#4f47e6] hover:underline flex items-center gap-1">
                <span>View all systems</span> <ExternalLink size={12} />
              </Link>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              {founder.projects.map((proj) => (
                <div key={proj.title} className="liquid-glass-card hover:bg-white rounded-3xl p-6 flex flex-col justify-between space-y-4 border border-slate-200 shadow-sm">
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-wider text-[#4f47e6] font-bold">
                      {proj.category}
                    </span>
                    <h3 className="font-display font-bold text-base text-slate-900 mt-1 mb-2">
                      {proj.title}
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed font-normal">
                      {proj.description}
                    </p>
                  </div>
                  <div className="pt-3 border-t border-slate-100 text-xs font-mono text-[#4f47e6] font-semibold flex items-center gap-1.5">
                    <Zap size={12} className="text-[#4f47e6] shrink-0" />
                    <span>{proj.impact}</span>
                  </div>
                </div>
              ))}

              {founder.openSource.map((os) => (
                <div key={os.name} className="liquid-glass-card hover:bg-white rounded-3xl p-6 flex flex-col justify-between space-y-4 border border-slate-200 shadow-sm">
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-wider text-slate-500 font-bold flex items-center gap-1">
                      <Code2 size={12} className="text-[#4f47e6]" /> Open Source
                    </span>
                    <h3 className="font-mono font-bold text-sm text-slate-900 mt-1 mb-2">
                      {os.name}
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed font-normal">
                      {os.desc}
                    </p>
                  </div>
                  <div className="pt-3 border-t border-slate-100 text-xs font-mono text-slate-500">
                    MIT License &bull; Free Community Tool
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Switch founder shortcut pill */}
          <div className="pt-8 border-t border-slate-200/80 text-center">
            <p className="text-xs text-slate-500 mb-3">View other leadership profile:</p>
            <Link
              to={founder.id === "pavan-kumar" ? "/sathvik" : "/pavan-kumar"}
              className="liquid-glass-pill inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-bold text-slate-800 hover:text-[#4f47e6] transition-colors shadow-2xs hover:scale-102"
            >
              <span>View {founder.id === "pavan-kumar" ? "Sathvik's Profile" : "Pavan Kumar's Profile"}</span>
              <ArrowRight size={13} />
            </Link>
          </div>

        </div>
      </section>
    </>
  );
}
