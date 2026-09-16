import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Briefcase,
  Globe,
  ArrowRight,
  ArrowLeft,
  CheckCircle2,
  Clock,
  Send,
  Building2,
  Heart,
  Code2,
} from "lucide-react";
import { Button } from "@/components/ui/button";

interface Role {
  id: string;
  title: string;
  department: string;
  location: string;
  type: string;
  description: string;
  requirements: string[];
}

const ROLES: Role[] = [
  {
    id: "lead-systems-engineer",
    title: "Lead Full-Stack Systems Architect",
    department: "Core Engineering",
    location: "Bangalore / Remote",
    type: "Full-Time",
    description: "Lead end-to-end architecture for enterprise cloud applications, sub-second web platforms, and automated webhook ingestion pipelines.",
    requirements: ["5+ years with React, TypeScript, Next.js", "Deep PostgreSQL & distributed caching experience", "Track record of shipping mission-critical SaaS"],
  },
  {
    id: "senior-product-designer",
    title: "Senior Product & Conversion UX Designer",
    department: "Design Systems",
    location: "Bangalore / Hybrid",
    type: "Full-Time",
    description: "Design Apple/Linear-grade digital canvases, design token systems, and conversion-engineered sales funnels.",
    requirements: ["Expertise in Figma design systems", "Understanding of Framer Motion & CSS architecture", "High-velocity interaction prototyping"],
  },
  {
    id: "ai-automation-engineer",
    title: "AI & Workflow Automation Engineer",
    department: "Applied AI",
    location: "Remote",
    type: "Full-Time",
    description: "Build autonomous multi-agent systems, deterministic LLM pipelines, and automated CRM/ERP synchronization engines.",
    requirements: ["Python / TypeScript proficiency", "Experience with LangGraph / LlamaIndex / Redis Streams", "Webhook idempotency engineering"],
  },
];

export default function CareersPage() {
  const [selectedRole, setSelectedRole] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-[#f8fafd] pt-24 pb-16 lg:pt-28 lg:pb-20 selection:bg-[#4f47e6] selection:text-white">
      <div className="w-full max-w-[1200px] mx-auto px-4 sm:px-8 space-y-10">
        
        {/* Navigation & Header */}
        <div className="border-b border-slate-200/90 pb-8 space-y-4">
          <div className="flex items-center gap-3">
            <Link
              to="/community"
              className="inline-flex items-center gap-2 text-xs font-bold text-slate-600 hover:text-[#4f47e6] transition-colors bg-white px-3.5 py-2 rounded-xl border border-slate-200 shadow-2xs"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Back to Community Hub</span>
            </Link>
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-xs font-bold text-slate-600 hover:text-[#4f47e6] transition-colors bg-white px-3.5 py-2 rounded-xl border border-slate-200 shadow-2xs"
            >
              <span>Main Website</span>
            </Link>
          </div>

          <div className="space-y-2 pt-2">
            <div className="liquid-glass-pill inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-bold text-[#4f47e6] mb-1">
              Join the Engineering Studio
            </div>
            <h1 className="font-display text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
              Careers at Brandex
            </h1>
            <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed max-w-2xl">
              We build high-performance software systems and digital education platforms. Work with founding architects on challenging engineering problems.
            </p>
          </div>
        </div>

        {/* Culture / Benefits Cards */}
        <div className="grid sm:grid-cols-3 gap-6">
          <div className="liquid-glass-card rounded-2xl p-6 border border-slate-200 space-y-2">
            <Globe className="w-5 h-5 text-[#4f47e6]" />
            <h3 className="font-display font-bold text-base text-slate-900">Remote & Async-First</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Output and engineering excellence over rigid office hours. Work from Bangalore or anywhere.
            </p>
          </div>

          <div className="liquid-glass-card rounded-2xl p-6 border border-slate-200 space-y-2">
            <Code2 className="w-5 h-5 text-emerald-600" />
            <h3 className="font-display font-bold text-base text-slate-900">Zero-Bloat Tech Stack</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              We build with modern TypeScript, React 19, Next.js, PostgreSQL, and high-concurrency edge runtimes.
            </p>
          </div>

          <div className="liquid-glass-card rounded-2xl p-6 border border-slate-200 space-y-2">
            <Heart className="w-5 h-5 text-purple-600" />
            <h3 className="font-display font-bold text-base text-slate-900">Direct Founder Mentorship</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Collaborate directly with founding systems architects and product designers on real production deployments.
            </p>
          </div>
        </div>

        {/* Open Roles */}
        <div className="space-y-6">
          <h2 className="font-display font-extrabold text-2xl text-slate-900">Open Positions</h2>
          
          <div className="space-y-4">
            {ROLES.map((role) => (
              <div
                key={role.id}
                className="liquid-glass rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-4"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-xs font-mono font-bold text-[#4f47e6] uppercase">{role.department}</span>
                      <span className="text-slate-300">&bull;</span>
                      <span className="text-xs text-slate-500 font-medium">{role.location}</span>
                    </div>
                    <h3 className="font-display font-bold text-xl text-slate-900">{role.title}</h3>
                  </div>

                  <Button asChild variant="brand" size="sm" className="rounded-xl shrink-0">
                    <Link to={`/contact?role=${encodeURIComponent(role.title)}`}>
                      <span>Apply for Role</span>
                      <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
                    </Link>
                  </Button>
                </div>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{role.description}</p>

                <div className="space-y-1.5 pt-2 border-t border-slate-200/80">
                  <span className="text-[11px] font-mono text-slate-400 uppercase font-bold">Key Requirements:</span>
                  <div className="grid sm:grid-cols-3 gap-2">
                    {role.requirements.map((req) => (
                      <div key={req} className="flex items-center gap-2 text-xs text-slate-700">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                        <span>{req}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
