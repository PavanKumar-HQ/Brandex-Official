import { useState } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Link2, ExternalLink } from "lucide-react";
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
        title="Case Studies & Client Deployments | Brandex"
        description="Explore production case studies, custom architectures, and measurable ROI delivered by Brandex for modern enterprises."
        canonical="https://brandex.me/case-studies"
      />

      <section className="pt-32 pb-24 lg:pt-40 lg:pb-32 bg-white border-b border-slate-100">
        <div className="container mx-auto px-6">
          
          {/* Header */}
          <div className="max-w-3xl mb-12 scroll-reveal">
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
          <div className="flex flex-wrap gap-2 mb-12 scroll-reveal">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
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
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7">
            {filtered.map((project) => {
              return (
                <div
                  key={project.title}
                  className="group liquid-glass-card hover:bg-white/95 rounded-3xl overflow-hidden transition-all duration-300 flex flex-col hover:-translate-y-1.5"
                >
                  <div className="aspect-[16/10] bg-slate-50 relative overflow-hidden">
                    {project.url ? (
                      <div className="absolute inset-0 w-full h-full relative group-hover:scale-105 transition-transform duration-500 ease-out">
                        {/* Browser Chrome Overlay */}
                        <div className="absolute top-0 left-0 right-0 h-7 bg-white/95 border-b border-slate-200/60 flex items-center px-3 gap-1.5 z-10">
                          <div className="w-2 h-2 rounded-full bg-slate-300" />
                          <div className="w-2 h-2 rounded-full bg-slate-300" />
                          <div className="w-2 h-2 rounded-full bg-slate-200" />
                        </div>
                        <img
                          src={`https://s.wordpress.com/mshots/v1/${encodeURIComponent(project.url)}?w=800`}
                          alt={`Preview of ${project.title}`}
                          className="w-full h-full object-cover object-top pt-7"
                          loading="lazy"
                        />
                      </div>
                    ) : (
                      <div className="absolute inset-0 flex items-center justify-center text-slate-400 font-mono text-xs">
                        Preview Loading...
                      </div>
                    )}

                    <div className="absolute inset-0 bg-slate-950/90 backdrop-blur-xs flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-6 text-center z-20">
                      <span className="text-white font-display text-2xl font-bold mb-2">{project.result}</span>
                      <span className="text-slate-300 text-xs mb-4">{project.challenge}</span>
                      {project.url && (
                        <a href={project.url} target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-[#4f47e6] text-white rounded-full text-xs font-semibold flex items-center gap-1.5 hover:bg-[#4338ca] transition-colors shadow-sm">
                          <span>Visit Live Site</span>
                          <ExternalLink size={13} />
                        </a>
                      )}
                    </div>
                  </div>

                  <div className="p-6 flex flex-col flex-1 justify-between">
                    <div>
                      <span className="liquid-glass-pill text-[10px] font-mono font-bold text-[#4f47e6] uppercase tracking-wider px-2.5 py-0.5 rounded-md">
                        {project.category}
                      </span>
                      <div className="flex justify-between items-start mt-3 mb-2">
                        <h3 className="font-display font-bold text-lg text-slate-900 group-hover:text-[#4f47e6] transition-colors">
                          {project.title}
                        </h3>
                        <Link to={`/case-studies/${project.id}`} className="text-[#4f47e6] hover:underline flex items-center gap-1 text-xs font-semibold shrink-0" title="View Deep Dive">
                          <span>Deep Dive</span>
                          <Link2 size={12} />
                        </Link>
                      </div>
                      <p className="text-xs sm:text-sm text-slate-600 mb-4 font-normal leading-relaxed">{project.description}</p>
                    </div>

                    <div className="flex flex-wrap gap-1.5 pt-3 border-t border-slate-200/60">
                      {project.tech.map((t) => (
                        <span key={t} className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-white border border-slate-200 text-slate-700 font-medium">
                          {t}
                        </span>
                      ))}
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
