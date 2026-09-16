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
  Terminal,
  Award,
  CheckCircle2,
  Globe2,
  Sparkles,
  BookOpen,
  Users
} from "lucide-react";
import { Button } from "@/components/ui/button";
import SEOHead from "@/components/SEOHead";

interface FounderData {
  id: string;
  name: string;
  role: string;
  tagline: string;
  bio: string[];
  avatar: string;
  location: string;
  specialties: string[];
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
    tagline: "Architecting sub-second web platforms, enterprise cloud pipelines, and bespoke software systems.",
    location: "Bangalore, India",
    avatar: "/logo_nobg.png",
    bio: [
      "Pavan Kumar is the Co-Founder and Chief Systems Architect at Brandex, leading core technical architecture, distributed edge infrastructure, and full-stack software development.",
      "With a deep background in modern web engineering, distributed systems, and API design, Pavan specializes in building high-concurrency applications that automate operations and eliminate manual bottlenecks.",
      "Beyond client software engineering, Pavan actively builds developer tools, mentors aspiring engineers through the Brandex Education initiative, and leads open-source architecture blueprints."
    ],
    specialties: [
      "Distributed Cloud Systems",
      "React / TypeScript Architecture",
      "Sub-Second Edge Infrastructure",
      "Enterprise Database Design",
      "Automated Webhook Pipelines",
      "Technical SEO & Schema Optimization"
    ],
    techStack: [
      "React", "TypeScript", "Next.js", "Node.js", "PostgreSQL",
      "TailwindCSS", "Three.js", "Docker", "AWS / Edge CDN", "Redis"
    ],
    milestones: [
      {
        year: "2024",
        title: "Co-Founded Brandex Digital Canvas",
        desc: "Established Brandex as an engineering-led software studio focused on bespoke enterprise web architecture."
      },
      {
        year: "2023",
        title: "High-Throughput Webhook Engine",
        desc: "Engineered automated data synchronization pipelines handling 100k+ transactions with zero data loss."
      },
      {
        year: "2022",
        title: "Edge Performance Frameworks",
        desc: "Authored sub-second frontend presets achieving 99+ Core Web Vitals on mission-critical applications."
      }
    ],
    projects: [
      {
        title: "SaaS Multi-Tenant Architecture",
        category: "Enterprise Cloud",
        description: "Engineered end-to-end cloud infrastructure with isolated tenant databases, automated role-based access, and real-time event logging.",
        impact: "99.99% SLA Uptime & Sub-18ms TTFB"
      },
      {
        title: "Automated Commerce & Booking Pipeline",
        category: "Business Engine",
        description: "Designed bespoke headless commerce and automated calendar dispatch engine integrating payments, SMS webhooks, and CRM sync.",
        impact: "40+ Hours Saved Per Week in Manual Admin"
      }
    ],
    openSource: [
      {
        name: "brandex-edge-presets",
        desc: "Production-ready scaffolding for sub-second Vite & React micro-frontends with edge CDN routing."
      },
      {
        name: "liquid-glass-ui",
        desc: "Apple-grade translucent glassmorphic design token library for modern web applications."
      }
    ],
    socials: {
      github: "https://github.com",
      linkedin: "https://linkedin.com",
      twitter: "https://x.com",
      email: "brandexhq@gmail.com"
    }
  },
  sathvik: {
    id: "sathvik",
    name: "Sathvik",
    role: "Co-Founder & Head of Product Design",
    tagline: "Bridging human-centered interaction design with high-performance digital engineering.",
    location: "Bangalore, India",
    avatar: "/logo_nobg.png",
    bio: [
      "Sathvik is the Co-Founder and Head of Product Design at Brandex, steering product experience, user interface architecture, and brand design systems.",
      "Combining sharp product strategy with visual excellence, Sathvik ensures every digital application engineered at Brandex delivers intuitive usability, brand authority, and measurable conversion lift.",
      "Sathvik also oversees the Brandex Community Network, organizing tech builder sessions and collaborating with founders across Bangalore's tech ecosystem."
    ],
    specialties: [
      "Product Design & Strategy",
      "Conversion Rate Optimization (CRO)",
      "Design Systems & Tokenization",
      "Interactive UI Micro-Animations",
      "User Journey & Funnel Mapping",
      "Client Discovery & Architecture Scope"
    ],
    techStack: [
      "Figma", "UI Systems", "Framer Motion", "React UI",
      "CSS Architecture", "Design Tokens", "Wireframing", "User Testing"
    ],
    milestones: [
      {
        year: "2024",
        title: "Brandex Design Language 2.0",
        desc: "Designed and rolled out the Apple-grade Liquid Glass design system and enterprise UI component library."
      },
      {
        year: "2023",
        title: "Conversion Architecture Blueprint",
        desc: "Pioneered funnel mapping frameworks resulting in +340% average client lead conversion lifts."
      },
      {
        year: "2022",
        title: "Bangalore Builders Community",
        desc: "Founded peer design critique and product discussion circles for tech entrepreneurs in Bangalore."
      }
    ],
    projects: [
      {
        title: "Brandex Liquid Glass Canvas",
        category: "Design System",
        description: "Created comprehensive multi-viewport UI architecture blending translucent frosted glass with strict typographic rhythm.",
        impact: "Zero-template Custom Design Standard"
      },
      {
        title: "Enterprise Client Portal UX",
        category: "Product Architecture",
        description: "Crafted frictionless client intake workflows, interactive scoping tools, and self-service administration dashboards.",
        impact: "65% Reduction in User Drop-off"
      }
    ],
    openSource: [
      {
        name: "brandex-design-tokens",
        desc: "Standardized JSON/CSS design token definitions for typography, glass translucency, and spatial scales."
      }
    ],
    socials: {
      github: "https://github.com",
      linkedin: "https://linkedin.com",
      twitter: "https://x.com",
      email: "brandexhq@gmail.com"
    }
  }
};

export default function FounderProfile({ founderKey }: { founderKey?: string }) {
  const params = useParams();
  const rawKey = founderKey || params.founderId || params["*"] || "";
  
  // Normalize lookup key
  const normalizedKey = rawKey.toLowerCase().includes("pavan") ? "pavan" : "sathvik";
  const founder = founders[normalizedKey] || founders.pavan;

  return (
    <>
      <SEOHead
        title={`${founder.name} — ${founder.role} | Brandex`}
        description={`${founder.name} is ${founder.role} at Brandex. ${founder.tagline}`}
        canonical={`https://brandex.me/${founder.id}`}
      />

      <section className="pt-28 pb-12 lg:pt-32 lg:pb-16 bg-[#f8fafd] relative overflow-hidden border-b border-slate-200/80">
        <div className="absolute inset-0 bg-grid opacity-40 pointer-events-none" />

        <div className="container mx-auto px-6 relative z-10 max-w-5xl">
          
          {/* Back link */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-6"
          >
            <Link
              to="/about"
              className="liquid-glass-pill inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold text-slate-700 hover:text-[#4f47e6] transition-colors"
            >
              <ArrowLeft size={13} /> Back to About Team
            </Link>
          </motion.div>

          {/* Hero Profile Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="liquid-glass rounded-3xl p-6 sm:p-10 mb-8 shadow-xs border border-slate-200/90"
          >
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pb-8 border-b border-slate-200/60">
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
                <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl bg-[#4f47e6] flex items-center justify-center p-3 shadow-xs shrink-0">
                  <img
                    src={founder.avatar}
                    alt={founder.name}
                    className="w-full h-full object-contain filter brightness-0 invert"
                  />
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1.5">
                    <span className="w-2 h-2 rounded-full bg-[#4f47e6]" />
                    <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#4f47e6]">
                      Brandex Leadership
                    </span>
                  </div>
                  <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
                    {founder.name}
                  </h1>
                  <p className="text-base text-[#4f47e6] font-semibold mt-1 font-mono text-xs sm:text-sm">
                    {founder.role} &bull; {founder.location}
                  </p>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex items-center gap-2.5">
                {founder.socials.github && (
                  <a
                    href={founder.socials.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="liquid-glass-pill p-2.5 rounded-xl text-slate-700 hover:text-[#4f47e6] transition-colors"
                    title="GitHub Profile"
                  >
                    <Github size={16} />
                  </a>
                )}
                {founder.socials.linkedin && (
                  <a
                    href={founder.socials.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="liquid-glass-pill p-2.5 rounded-xl text-slate-700 hover:text-[#4f47e6] transition-colors"
                    title="LinkedIn Profile"
                  >
                    <Linkedin size={16} />
                  </a>
                )}
                {founder.socials.twitter && (
                  <a
                    href={founder.socials.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="liquid-glass-pill p-2.5 rounded-xl text-slate-700 hover:text-[#4f47e6] transition-colors"
                    title="Twitter / X"
                  >
                    <Twitter size={16} />
                  </a>
                )}
                <a
                  href={`mailto:${founder.socials.email}`}
                  className="liquid-glass-pill p-2.5 rounded-xl text-slate-700 hover:text-[#4f47e6] transition-colors"
                  title="Direct Email"
                >
                  <Mail size={16} />
                </a>
              </div>
            </div>

            {/* Tagline & Bio */}
            <div className="pt-8 grid md:grid-cols-12 gap-8">
              <div className="md:col-span-8 space-y-4">
                <p className="text-lg sm:text-xl font-medium text-slate-900 leading-relaxed font-display">
                  "{founder.tagline}"
                </p>
                {founder.bio.map((paragraph, i) => (
                  <p key={i} className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                    {paragraph}
                  </p>
                ))}
              </div>

              {/* Quick Tech Stack & Action */}
              <div className="md:col-span-4 space-y-6">
                <div className="liquid-glass-card rounded-2xl p-5">
                  <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-900 mb-3 flex items-center gap-1.5">
                    <Terminal size={14} className="text-[#4f47e6]" />
                    <span>Core Technologies</span>
                  </h3>
                  <div className="flex flex-wrap gap-1.5">
                    {founder.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 rounded-lg bg-white border border-slate-200/90 text-slate-800 text-[11px] font-mono font-medium shadow-2xs"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <Button asChild variant="brand" size="default" className="w-full">
                  <Link to="/contact">Book Technical Discussion</Link>
                </Button>
              </div>
            </div>
          </motion.div>

          {/* Specialties & Engineering Focus */}
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="liquid-glass rounded-3xl p-6 sm:p-7 border border-slate-200/90">
              <div className="flex items-center gap-2 mb-4">
                <Cpu size={18} className="text-[#4f47e6]" />
                <h2 className="font-display text-xl font-bold text-slate-900">
                  Architectural Specialties
                </h2>
              </div>
              <div className="space-y-2.5">
                {founder.specialties.map((spec) => (
                  <div key={spec} className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-700 font-medium">
                    <CheckCircle2 size={15} className="text-[#4f47e6] shrink-0" />
                    <span>{spec}</span>
                  </div>
                ))}
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
                <div key={proj.title} className="liquid-glass-card rounded-2xl p-6 flex flex-col justify-between">
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-wider text-[#4f47e6] font-bold">
                      {proj.category}
                    </span>
                    <h3 className="font-display font-bold text-base text-slate-900 mt-1 mb-2">
                      {proj.title}
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {proj.description}
                    </p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-slate-200/60 text-xs font-mono text-[#4f47e6] font-semibold">
                    ⚡ {proj.impact}
                  </div>
                </div>
              ))}

              {founder.openSource.map((os) => (
                <div key={os.name} className="liquid-glass-card rounded-2xl p-6 flex flex-col justify-between">
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-wider text-slate-500 font-bold flex items-center gap-1">
                      <Code2 size={12} className="text-[#4f47e6]" /> Open Source
                    </span>
                    <h3 className="font-mono font-bold text-sm text-slate-900 mt-1 mb-2">
                      {os.name}
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {os.desc}
                    </p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-slate-200/60 text-xs font-mono text-slate-500">
                    MIT License &bull; Free Community Tool
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Switch founder shortcut pill */}
          <div className="mt-14 pt-8 border-t border-slate-200/80 text-center">
            <p className="text-xs text-slate-500 mb-3">View other founder profile:</p>
            <Link
              to={founder.id === "pavan-kumar" ? "/sathvik" : "/pavan-kumar"}
              className="liquid-glass-pill inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-bold text-slate-800 hover:text-[#4f47e6] transition-colors"
            >
              <span>View {founder.id === "pavan-kumar" ? "Sathvik's Profile" : "Pavan Kumar's Profile"}</span>
              <ArrowLeft className="rotate-180" size={13} />
            </Link>
          </div>

        </div>
      </section>
    </>
  );
}
