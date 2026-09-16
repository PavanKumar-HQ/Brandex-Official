import { useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowLeft,
  Briefcase,
  Users,
  Code2,
  CheckCircle2,
  ArrowRight,
  Send,
  Building2,
} from "lucide-react";
import { Button } from "@/components/ui/button";

export default function WorkWithBrandexPage() {
  const [submitted, setSubmitted] = useState(false);

  const tracks = [
    {
      title: "Core Software Engineering",
      role: "Full-Stack / React / Node / Cloud Infrastructure",
      desc: "Build high-throughput web applications, headless architectures, and distributed databases for enterprise clients.",
    },
    {
      title: "Product & UI/UX Design",
      role: "Design Systems / Swiss Typography / Micro-interactions",
      desc: "Craft bespoke visual identities, fluid Figma prototypes, and high-converting conversion funnel interfaces.",
    },
    {
      title: "AI & Workflow Automation",
      role: "LLM Orchestration / Webhooks / API Pipelines",
      desc: "Engineer automated data sync pipelines, custom business bots, and production algorithmic solutions.",
    },
  ];

  return (
    <div className="min-h-screen bg-[#f8fafd] pt-24 pb-16 lg:pt-28 lg:pb-20 selection:bg-[#4f47e6] selection:text-white">
      <div className="w-full max-w-[1200px] mx-auto px-4 sm:px-8 space-y-10">
        
        {/* Navigation & Header */}
        <div className="border-b border-slate-200/90 pb-8 space-y-4">
          <Link
            to="/community"
            className="inline-flex items-center gap-2 text-xs font-bold text-slate-600 hover:text-[#4f47e6] transition-colors bg-white px-3.5 py-2 rounded-xl border border-slate-200 shadow-2xs"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to Community Hub</span>
          </Link>

          <div className="space-y-2 pt-2">
            <div className="liquid-glass-pill inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-bold text-[#4f47e6] mb-1">
              Careers & Contractor Network
            </div>
            <h1 className="font-display text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
              Work With Brandex
            </h1>
            <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed max-w-2xl">
              Join our engineering squads as a core contributor, contract architect, or design lead. We build real systems with zero corporate bloat.
            </p>
          </div>
        </div>

        {/* Tracks */}
        <div className="grid sm:grid-cols-3 gap-6">
          {tracks.map((t, i) => (
            <div
              key={i}
              className="liquid-glass-card hover:bg-white rounded-3xl p-6 sm:p-7 border border-slate-200 shadow-sm flex flex-col justify-between space-y-4"
            >
              <div>
                <span className="text-[10px] font-mono font-bold text-[#4f47e6] liquid-glass-pill px-2.5 py-0.5 rounded-full uppercase">
                  {t.role}
                </span>
                <h3 className="font-display font-bold text-lg text-slate-900 mt-3 mb-2">{t.title}</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">{t.desc}</p>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center gap-2 text-xs font-semibold text-slate-700">
                <CheckCircle2 size={14} className="text-[#4f47e6]" />
                <span>Remote & Bangalore Hybrid</span>
              </div>
            </div>
          ))}
        </div>

        {/* Application Form */}
        <div className="liquid-glass rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-sm space-y-6">
          <div className="space-y-2">
            <h2 className="font-display font-extrabold text-2xl text-slate-900">
              Submit Your Builder Profile
            </h2>
            <p className="text-xs sm:text-sm text-slate-600">
              Share your proof of work (GitHub, portfolio, past projects). We value shipped code over lengthy resumes.
            </p>
          </div>

          {submitted ? (
            <div className="p-6 rounded-2xl bg-emerald-50 text-emerald-800 border border-emerald-200 font-bold text-sm flex items-center gap-3">
              <CheckCircle2 size={20} className="text-emerald-600" />
              <span>Application received! Our technical founders will review your portfolio and reach out.</span>
            </div>
          ) : (
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setSubmitted(true);
              }}
              className="space-y-4 max-w-xl"
            >
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-bold text-slate-700 block mb-1">Full Name</label>
                  <input
                    required
                    type="text"
                    placeholder="Jane Doe"
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-300 focus:border-[#4f47e6] text-xs outline-none bg-white"
                  />
                </div>
                <div>
                  <label className="text-xs font-bold text-slate-700 block mb-1">Email</label>
                  <input
                    required
                    type="email"
                    placeholder="jane@example.com"
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-300 focus:border-[#4f47e6] text-xs outline-none bg-white"
                  />
                </div>
              </div>

              <div>
                <label className="text-xs font-bold text-slate-700 block mb-1">Primary Discipline / Track</label>
                <select className="w-full px-4 py-2.5 rounded-xl border border-slate-300 focus:border-[#4f47e6] text-xs outline-none bg-white font-medium text-slate-800">
                  <option>Core Software Engineering (React / Node / Vite)</option>
                  <option>Product & UI/UX Design (Figma / WebGL)</option>
                  <option>AI & Automated Systems (Python / Webhooks)</option>
                  <option>Technical Product Management</option>
                </select>
              </div>

              <div>
                <label className="text-xs font-bold text-slate-700 block mb-1">GitHub / Portfolio URL</label>
                <input
                  required
                  type="url"
                  placeholder="https://github.com/username or https://portfolio.dev"
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-300 focus:border-[#4f47e6] text-xs outline-none bg-white"
                />
              </div>

              <Button
                type="submit"
                className="bg-[#4f47e6] hover:bg-[#4338ca] text-white font-bold rounded-xl px-7 h-11 text-xs shadow-md mt-2"
              >
                Submit Application
              </Button>
            </form>
          )}
        </div>

      </div>
    </div>
  );
}
