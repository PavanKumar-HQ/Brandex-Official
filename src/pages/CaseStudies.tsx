import { useState } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Link2, ExternalLink, ArrowLeft, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { projects } from "@/data/projects";
import SEOHead from "@/components/SEOHead";

const categories = ["All", "Web", "Automation", "Application", "Mobile"];

export default function CaseStudiesPage() {
  useScrollReveal();
  const [filter, setFilter] = useState("All");
  const filtered = filter === "All" ? projects : projects.filter((p) => p.category === filter);

  return (
    <>
      <SEOHead
        title="Production Case Studies & Client Architecture | Brandex"
        description="Explore production case studies, custom architectures, and measurable results delivered by Brandex for real businesses."
        canonicalUrl="/case-studies"
      />

      <section className="pt-24 pb-16 lg:pt-28 lg:pb-20 bg-white border-b border-slate-100">
        <div className="container mx-auto px-6">
          
          {/* Back link */}
          <div className="mb-6">
            <Link
              to="/"
              className="liquid-glass-pill inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold text-slate-700 hover:text-[#4f47e6] transition-colors"
            >
              <ArrowLeft size={13} /> Back to Home
            </Link>
          </div>

          {/* Header */}
          <div className="max-w-3xl mb-10 scroll-reveal">
            <div className="liquid-glass-pill inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-semibold tracking-widest text-[#4f47e6] uppercase mb-4 shadow-2xs">
              <span className="w-1.5 h-1.5 rounded-full bg-[#4f47e6] animate-pulse" />
              Production Case Studies
            </div>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 mb-6 tracking-tight leading-[1.1]">
              Measurable impact, <span className="text-[#4f47e6]">proven results</span>.
            </h1>
            <p className="text-lg sm:text-xl text-slate-600 leading-relaxed font-normal">
              Real client deployments, sub-second architectures, and automated scale. Explore how we engineer digital growth.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex items-center gap-2 mb-8 overflow-x-auto pb-2 scroll-reveal no-scrollbar">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all shrink-0 ${
                  filter === cat
                    ? "bg-[#4f47e6] text-white shadow-2xs"
                    : "liquid-glass-pill text-slate-700 hover:text-slate-950 hover:bg-white"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Liquid Glass Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
            {filtered.map((project) => {
              return (
                <div
                  key={project.title}
                  className="group liquid-glass-card hover:bg-white/95 rounded-3xl overflow-hidden transition-all duration-300 flex flex-col hover:-translate-y-1.5 border border-slate-200/90 shadow-2xs"
                >
                  <Link
                    to={`/case-studies/${project.id}`}
                    className="aspect-[16/10] bg-slate-50 relative overflow-hidden block"
                  >
                    {project.previewImage || project.url ? (
                      <div className="absolute inset-0 w-full h-full relative group-hover:scale-105 transition-transform duration-500 ease-out">
                        {/* Browser Chrome Overlay */}
                        <div className="absolute top-0 left-0 right-0 h-7 bg-white/95 border-b border-slate-200/60 flex items-center px-3 gap-1.5 z-10">
                          <div className="w-2 h-2 rounded-full bg-slate-300" />
                          <div className="w-2 h-2 rounded-full bg-slate-300" />
                          <div className="w-2 h-2 rounded-full bg-slate-200" />
                        </div>
                        <img
                          src={project.previewImage || (project.url ? `https://s.wordpress.com/mshots/v1/${encodeURIComponent(project.url)}?w=800` : project.logo)}
                          alt={`Preview of ${project.title}`}
                          className="w-full h-full object-cover object-top pt-7"
                          loading="lazy"
                          onError={(e) => {
                            if (project.logo) {
                              (e.target as HTMLImageElement).src = project.logo;
                              (e.target as HTMLImageElement).className = "w-full h-full object-contain p-10 bg-slate-900 pt-7";
                            }
                          }}
                        />
                      </div>
                    ) : (
                      <div className="absolute inset-0 flex items-center justify-center text-slate-400 font-mono text-xs">
                        Production Architecture
                      </div>
                    )}

                    {/* Desktop Hover Overlay (desktop only) */}
                    <div className="hidden md:flex absolute inset-0 bg-slate-950/90 backdrop-blur-xs flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-6 text-center z-20">
                      <span className="text-white font-display text-2xl font-bold mb-2">{project.result}</span>
                      <span className="text-slate-300 text-xs mb-4 line-clamp-2">{project.challenge}</span>
                      <span className="px-4 py-2 bg-[#4f47e6] text-white rounded-full text-xs font-semibold flex items-center gap-1.5 shadow-sm">
                        <span>Read Case Study</span>
                        <ArrowRight size={13} />
                      </span>
                    </div>
                  </Link>

                  <div className="p-5 sm:p-6 flex flex-col flex-1 justify-between">
                    <div>
                      <div className="flex items-center justify-between gap-2 mb-2.5">
                        <span className="liquid-glass-pill text-[10px] font-mono font-bold text-[#4f47e6] uppercase tracking-wider px-2.5 py-0.5 rounded-md">
                          {project.category}
                        </span>
                        <span className="text-[11px] font-bold text-emerald-700 bg-emerald-50 border border-emerald-200/80 px-2.5 py-0.5 rounded-full">
                          {project.result}
                        </span>
                      </div>

                      <div className="flex justify-between items-start mb-2">
                        <Link to={`/case-studies/${project.id}`}>
                          <h3 className="font-display font-bold text-lg text-slate-900 group-hover:text-[#4f47e6] transition-colors leading-snug">
                            {project.title}
                          </h3>
                        </Link>
                      </div>

                      <p className="text-xs sm:text-sm text-slate-600 mb-4 font-normal leading-relaxed line-clamp-2 sm:line-clamp-3">
                        {project.description}
                      </p>
                    </div>

                    <div>
                      <div className="flex flex-wrap gap-1.5 pt-3 border-t border-slate-200/60 mb-4">
                        {project.tech.map((t) => (
                          <span key={t} className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-white border border-slate-200 text-slate-700 font-medium">
                            {t}
                          </span>
                        ))}
                      </div>

                      {/* Explicit, high-touch mobile & desktop actions */}
                      <div className="flex items-center gap-2 pt-2 border-t border-slate-100">
                        <Link
                          to={`/case-studies/${project.id}`}
                          className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-slate-900 hover:bg-[#4f47e6] text-white text-xs font-bold transition-all shadow-xs hover:-translate-y-0.5 active:scale-95 text-center"
                        >
                          <span>View Case Study</span>
                          <ArrowRight size={13} />
                        </Link>
                        {project.url && (
                          <a
                            href={project.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center px-3 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 hover:text-[#4f47e6] text-xs font-bold transition-colors border border-slate-200/80"
                            title="Visit Live Platform"
                            aria-label={`Visit live website for ${project.title}`}
                          >
                            <ExternalLink size={14} />
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
