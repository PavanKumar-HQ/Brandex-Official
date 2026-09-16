import { Link } from "react-router-dom";
import { Globe, ShieldCheck, ArrowUpRight, Zap, ArrowLeft, ArrowRight, Layers, Building2 } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function BrandexHQPage() {
  return (
    <div className="min-h-screen bg-[#f8fafd] pt-24 pb-16 lg:pt-28 lg:pb-20 selection:bg-[#4f47e6] selection:text-white">
      <div className="w-full max-w-[1200px] mx-auto px-4 sm:px-8 space-y-10">
        
        {/* Navigation */}
        <div className="flex items-center gap-3">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-xs font-bold text-slate-600 hover:text-[#4f47e6] transition-colors bg-white px-3.5 py-2 rounded-xl border border-slate-200 shadow-2xs"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to Home</span>
          </Link>
          <Link
            to="/community"
            className="inline-flex items-center gap-2 text-xs font-bold text-slate-600 hover:text-[#4f47e6] transition-colors bg-white px-3.5 py-2 rounded-xl border border-slate-200 shadow-2xs"
          >
            <span>Community Hub</span>
          </Link>
        </div>

        {/* Hero */}
        <div className="liquid-glass rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-sm space-y-6">
          <div className="space-y-3">
            <div className="liquid-glass-pill inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-bold text-[#4f47e6]">
              Official Parent Ecosystem
            </div>
            <h1 className="font-display text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.12]">
              Brandex Corporate HQ & Innovation Group
            </h1>
            <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed max-w-3xl">
              Brandex is a technology collective engineering bespoke web platforms, enterprise software architectures, open-source developer tooling, and statewide digital education initiatives in Karnataka.
            </p>
          </div>

          <div className="grid sm:grid-cols-3 gap-4 pt-4 border-t border-slate-200">
            <div className="p-4 rounded-2xl bg-white border border-slate-200 space-y-1">
              <span className="text-[10px] font-mono uppercase text-slate-400 font-bold">HQ Base</span>
              <p className="text-sm font-bold text-slate-900">Bangalore, Karnataka</p>
            </div>
            <div className="p-4 rounded-2xl bg-white border border-slate-200 space-y-1">
              <span className="text-[10px] font-mono uppercase text-slate-400 font-bold">Engineering SLA</span>
              <p className="text-sm font-bold text-slate-900">Sub-Second Core Web Vitals</p>
            </div>
            <div className="p-4 rounded-2xl bg-white border border-slate-200 space-y-1">
              <span className="text-[10px] font-mono uppercase text-slate-400 font-bold">Ecosystem Model</span>
              <p className="text-sm font-bold text-slate-900">Microservice Architecture</p>
            </div>
          </div>
        </div>

        {/* Tri-Pillar Ecosystem Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          <div className="liquid-glass-card rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm flex flex-col justify-between">
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-2xl bg-indigo-50 text-[#4f47e6] flex items-center justify-center font-bold font-mono">
                01
              </div>
              <h3 className="font-display font-bold text-xl text-slate-900">Software Studio</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Bespoke high-concurrency web apps, automated data ingestion pipelines, and multi-tenant cloud platforms for commercial clients.
              </p>
            </div>
            <Button asChild variant="brand" size="sm" className="rounded-xl mt-6">
              <Link to="/services">Explore Services</Link>
            </Button>
          </div>

          <div className="liquid-glass-card rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm flex flex-col justify-between">
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-2xl bg-purple-50 text-purple-600 flex items-center justify-center font-bold font-mono">
                02
              </div>
              <h3 className="font-display font-bold text-xl text-slate-900">Digital Education</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Smartboard classroom theater, chapter quizzes, and offline-ready syllabus lectures mapped to the Karnataka State Board (KSEEB).
              </p>
            </div>
            <Button asChild variant="brand" size="sm" className="rounded-xl mt-6">
              <Link to="/education">Launch Learning</Link>
            </Button>
          </div>

          <div className="liquid-glass-card rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm flex flex-col justify-between">
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold font-mono">
                03
              </div>
              <h3 className="font-display font-bold text-xl text-slate-900">Builder Community</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Peer reviews, open-source repositories, developer bootcamps, and live Bangalore engineering summits.
              </p>
            </div>
            <Button asChild variant="brand" size="sm" className="rounded-xl mt-6">
              <Link to="/community">Join Community</Link>
            </Button>
          </div>
        </div>

      </div>
    </div>
  );
}
