import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, ExternalLink, Globe, CheckCircle2, ShieldCheck, Zap } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { projects } from "@/data/projects";
import { Button } from "@/components/ui/button";

export default function CaseStudiesPreview() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const active = projects[selectedIndex] || projects[0];

  return (
    <section className="py-14 lg:py-18 relative overflow-hidden bg-[#f8fafd] border-b border-slate-200/80" id="case-studies">
      {/* Background Grid */}
      <div className="absolute inset-0 bg-grid opacity-30 pointer-events-none" />

      <div className="w-full max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-10 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
          <motion.div
            className="max-w-xl"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="liquid-glass-pill inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-bold tracking-widest text-[#4f47e6] uppercase mb-2.5 shadow-2xs">
              <span className="w-1.5 h-1.5 rounded-full bg-[#4f47e6] animate-pulse" />
              Our Work
            </div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
              Real Results for <span className="text-[#4f47e6]">Real Businesses</span>
            </h2>
            <p className="text-slate-600 text-sm sm:text-base font-normal mt-1.5">
              Explore websites, software, and platforms we've built for our clients.
            </p>
          </motion.div>

          <Button asChild variant="brand" size="default" className="self-start sm:self-auto shrink-0 rounded-xl">
            <Link to="/case-studies" className="gap-2">
              <span>View All Projects</span>
              <ArrowRight size={14} />
            </Link>
          </Button>
        </div>

        {/* Mobile Interactive Project Selector Tabs (< lg) */}
        <div className="lg:hidden flex items-center gap-2 overflow-x-auto pb-3 mb-4 no-scrollbar scroll-smooth">
          {projects.map((p, idx) => {
            const isSelected = selectedIndex === idx;
            return (
              <button
                key={p.id}
                onClick={() => setSelectedIndex(idx)}
                className={`flex items-center gap-2 px-3.5 py-2.5 rounded-xl text-xs font-bold shrink-0 transition-all ${
                  isSelected
                    ? "bg-[#4f47e6] text-white shadow-md shadow-indigo-500/20 ring-2 ring-[#4f47e6]/30"
                    : "bg-white border border-slate-200 text-slate-700 hover:bg-slate-50 shadow-2xs"
                }`}
              >
                {p.logo && (
                  <img
                    src={p.logo}
                    alt=""
                    aria-hidden="true"
                    width={16}
                    height={16}
                    loading="lazy"
                    decoding="async"
                    className="w-4 h-4 object-contain rounded shrink-0"
                  />
                )}
                <span>{p.title}</span>
                <span className={`text-[10px] px-1.5 py-0.5 rounded-md font-bold ${isSelected ? "bg-white text-[#4f47e6]" : "bg-slate-100 text-slate-700"}`}>
                  {p.result}
                </span>
              </button>
            );
          })}
        </div>

        {/* Interactive Master Case Studies Studio */}
        <div className="grid lg:grid-cols-12 gap-6 items-stretch">
          
          {/* Left Column: Interactive Project Selector List (Desktop Only) */}
          <div className="hidden lg:flex lg:col-span-5 space-y-3 flex-col justify-between">
            {projects.map((p, idx) => {
              const isSelected = selectedIndex === idx;
              return (
                <div
                  key={p.id}
                  onClick={() => setSelectedIndex(idx)}
                  className={`p-4 sm:p-5 rounded-2xl cursor-pointer transition-all duration-200 border ${
                    isSelected
                      ? "bg-white border-[#4f47e6] shadow-md ring-2 ring-[#4f47e6]/20"
                      : "liquid-glass-card hover:bg-white hover:border-slate-300"
                  }`}
                >
                  <div className="flex items-center justify-between gap-2 mb-1.5">
                    <div className="flex items-center gap-2.5">
                      {p.logo && (
                        <div className="w-7 h-7 rounded-lg bg-white border border-slate-200 p-0.5 flex items-center justify-center overflow-hidden shrink-0">
                          <img
                            src={p.logo}
                            alt=""
                            aria-hidden="true"
                            width={28}
                            height={28}
                            loading="lazy"
                            decoding="async"
                            className="h-full w-full object-contain"
                          />
                        </div>
                      )}
                      <span className="text-xs font-sans font-extrabold uppercase tracking-wider text-[#4f47e6]">
                        {p.category}
                      </span>
                    </div>

                    <span className="text-xs font-sans font-bold text-slate-900 bg-slate-100 px-2.5 py-0.5 rounded-full border border-slate-200">
                      {p.result}
                    </span>
                  </div>

                  <h3 className={`font-display font-extrabold text-base transition-colors ${
                    isSelected ? "text-[#4f47e6]" : "text-slate-900"
                  }`}>
                    {p.title}
                  </h3>

                  <p className="text-xs text-slate-500 font-normal line-clamp-2 mt-1">
                    {p.description}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Right Column: Dynamic Project Master Showcase Panel */}
          <div className="lg:col-span-7">
            <AnimatePresence mode="wait">
              <motion.div
                key={active.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.25 }}
                className="bg-white rounded-3xl p-5 sm:p-7 border border-slate-200 shadow-sm flex flex-col justify-between h-full"
              >
                <div>
                  {/* Browser Chrome Top Bar */}
                  <div className="rounded-2xl border border-slate-300 overflow-hidden bg-slate-900/5 mb-6 shadow-2xs">
                    <div className="px-3 sm:px-4 py-2 bg-slate-100 border-b border-slate-200 flex items-center justify-between">
                      <div className="flex items-center gap-1.5">
                        <span className="w-2.5 h-2.5 rounded-full bg-rose-400" />
                        <span className="w-2.5 h-2.5 rounded-full bg-amber-400" />
                        <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
                      </div>
                      {active.url && (
                        <div className="bg-white px-3 sm:px-4 py-0.5 rounded-md border border-slate-200 text-xs font-sans font-medium text-slate-700 truncate max-w-[200px] sm:max-w-[400px]">
                          {active.url.replace(/^https?:\/\//, '')}
                        </div>
                      )}
                      <div className="w-4 sm:w-8" />
                    </div>

                    {/* Live Screenshot Viewport */}
                    <div className="relative aspect-[16/9] w-full overflow-hidden bg-slate-100">
                      {active.previewImage || active.url ? (
                        <img
                          src={active.previewImage || (active.url ? `https://s.wordpress.com/mshots/v1/${encodeURIComponent(active.url)}?w=900` : active.logo)}
                          alt={`Preview of ${active.title}`}
                          className="w-full h-full object-cover object-top transition-transform duration-500 hover:scale-102"
                          loading="lazy"
                          onError={(e) => {
                            if (active.logo) {
                              (e.target as HTMLImageElement).src = active.logo;
                              (e.target as HTMLImageElement).className = "w-full h-full object-contain p-12 bg-slate-900";
                            }
                          }}
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center text-slate-700 font-sans text-xs font-semibold">
                          Interactive Production System
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Title & Key Highlights */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 sm:gap-4 mb-3">
                    <h3 className="font-display font-extrabold text-xl sm:text-2xl text-slate-900">
                      {active.title}
                    </h3>
                    <span className="self-start sm:self-auto liquid-glass-pill px-3 py-1 rounded-full text-xs font-sans font-bold text-[#4f47e6] border border-indigo-100 shadow-2xs">
                      {active.result}
                    </span>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal mb-5">
                    {active.description}
                  </p>

                  {/* Highlights */}
                  {active.features && active.features.length > 0 && (
                    <div className="grid sm:grid-cols-2 gap-2.5 pt-4 border-t border-slate-200 mb-6">
                      {active.features.map((feat) => (
                        <div key={feat} className="flex items-center gap-2 text-xs font-sans font-semibold text-slate-800">
                          <CheckCircle2 size={14} className="text-[#4f47e6] shrink-0" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* Bottom Action Row */}
                <div className="pt-4 border-t border-slate-200 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
                  {active.url ? (
                    <Button asChild variant="liquidGlass" size="default" className="rounded-xl w-full sm:w-auto justify-center">
                      <a href={active.url} target="_blank" rel="noopener noreferrer" className="gap-2 font-bold">
                        <Globe size={14} className="text-[#4f47e6]" />
                        <span>Visit Live Site</span>
                        <ExternalLink size={13} className="opacity-70" />
                      </a>
                    </Button>
                  ) : (
                    <span className="text-xs font-sans font-medium text-slate-500 text-center sm:text-left">Production Deployed</span>
                  )}

                  <Button asChild variant="brand" size="default" className="rounded-xl w-full sm:w-auto justify-center">
                    <Link to={`/case-studies/${active.id}`} className="gap-2 font-bold">
                      <span>View Case Study Breakdown</span>
                      <ArrowRight size={14} />
                    </Link>
                  </Button>
                </div>

              </motion.div>
            </AnimatePresence>
          </div>

        </div>

      </div>
    </section>
  );
}
