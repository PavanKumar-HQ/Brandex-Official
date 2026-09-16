import { useParams, Link } from "react-router-dom";
import { useEffect } from "react";
import { ArrowLeft, ExternalLink, CheckCircle2, ArrowRight } from "lucide-react";
import { projects } from "@/data/projects";
import SEOHead from "@/components/SEOHead";

export default function CaseStudyDetail() {
  const { id } = useParams();
  const project = projects.find((p) => p.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center text-center bg-white">
        <div className="liquid-glass-card rounded-3xl p-10 max-w-md mx-auto">
          <h2 className="text-2xl font-bold mb-3 text-slate-900">Project Not Found</h2>
          <Link to="/case-studies" className="text-[#4f47e6] font-semibold hover:underline">Return to Case Studies</Link>
        </div>
      </div>
    );
  }

  return (
    <>
      <SEOHead
        title={`${project.title} Case Study | Brandex`}
        description={project.description}
        canonical={`https://brandex.me/case-studies/${project.id}`}
      />

      <article className="min-h-screen bg-white">
        {/* Hero Section */}
        <header className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden bg-[#fbfdff] border-b border-slate-100">
          <div className="container mx-auto px-6 relative z-10">
            <Link to="/case-studies" className="liquid-glass-pill inline-flex items-center text-slate-700 hover:text-[#4f47e6] transition-colors mb-10 text-xs font-semibold px-4 py-2 rounded-full group">
              <ArrowLeft size={14} className="mr-2 group-hover:-translate-x-1 transition-transform" />
              <span>Back to Case Studies</span>
            </Link>
            
            <div className="max-w-4xl">
              <span className="liquid-glass-pill text-[10px] font-mono font-bold uppercase tracking-widest text-[#4f47e6] px-3 py-1 rounded-md mb-4 inline-block">
                {project.category}
              </span>
              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 mb-6 leading-tight tracking-tight">
                {project.title}
              </h1>
              <p className="text-base sm:text-lg text-slate-600 leading-relaxed mb-8 max-w-2xl font-normal">
                {project.description}
              </p>

              {project.url && (
                <a 
                  href={project.url} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="inline-flex items-center gap-2 bg-[#4f47e6] hover:bg-[#4338ca] text-white px-6 py-3 rounded-xl font-semibold shadow-[0_4px_16px_rgba(79,71,230,0.3)] hover:shadow-[0_8px_24px_rgba(79,71,230,0.4)] hover:-translate-y-0.5 transition-all text-xs sm:text-sm"
                >
                  <span>Visit Live Platform</span>
                  <ExternalLink size={15} />
                </a>
              )}
            </div>
          </div>
        </header>

        {/* Overview Grid */}
        <section className="py-12 border-b border-slate-100 bg-white">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="liquid-glass-card rounded-2xl p-5">
                <p className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-1">Industry</p>
                <p className="font-bold text-slate-900">{project.category}</p>
              </div>
              <div className="liquid-glass-card rounded-2xl p-5">
                <p className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-1">Timeline</p>
                <p className="font-bold text-slate-900">{project.duration || "Ongoing"}</p>
              </div>
              <div className="col-span-2 liquid-glass-card rounded-2xl p-5">
                <p className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-1">Services</p>
                <div className="flex flex-wrap gap-1.5 mt-2">
                  {project.services?.map(s => <span key={s} className="text-xs font-semibold px-2.5 py-1 rounded-md bg-white border border-slate-200 text-[#4f47e6]">{s}</span>)}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Deep Dive Content */}
        <section className="py-20 lg:py-28 bg-white">
          <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
              
              <div className="lg:col-span-8 space-y-14">
                {/* Problem/Challenge */}
                <div className="liquid-glass-card rounded-3xl p-8">
                  <h3 className="font-display text-2xl font-extrabold text-slate-900 mb-3 tracking-tight">The Operational Challenge</h3>
                  <p className="text-base text-slate-600 leading-relaxed font-normal">
                    {project.challenge} Before our intervention, existing workflows and legacy templates were causing severe bottlenecks and limiting revenue expansion.
                  </p>
                </div>

                {/* Solution */}
                <div className="liquid-glass-card rounded-3xl p-8">
                  <h3 className="font-display text-2xl font-extrabold text-slate-900 mb-3 tracking-tight">The Engineered Solution</h3>
                  <p className="text-base text-slate-600 leading-relaxed mb-6 font-normal">
                    We architected a bespoke {project.category.toLowerCase()} platform prioritizing sub-second latency, automated data syncing, and conversion-optimized UX. 
                  </p>
                  <div className="grid sm:grid-cols-2 gap-4 mt-6">
                    {project.features?.map((feature, i) => (
                      <div key={i} className="flex items-start gap-3 bg-white/80 p-4 rounded-2xl border border-slate-200/80 shadow-2xs">
                        <CheckCircle2 size={18} className="text-[#4f47e6] shrink-0 mt-0.5" />
                        <p className="text-xs sm:text-sm font-semibold text-slate-800">{feature}</p>
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* Process Steps */}
                <div className="liquid-glass-card rounded-3xl p-8">
                  <h3 className="font-display text-2xl font-extrabold text-slate-900 mb-6 tracking-tight">Engineering Approach</h3>
                  <div className="relative pl-6 space-y-7 before:absolute before:inset-y-0 before:left-[11px] before:w-px before:bg-slate-200">
                    <div className="relative">
                      <div className="absolute -left-[30px] w-5 h-5 rounded-full bg-white border-2 border-[#4f47e6] flex items-center justify-center">
                        <div className="w-2 h-2 rounded-full bg-[#4f47e6]" />
                      </div>
                      <h4 className="text-base font-bold text-slate-900 mb-1">Diagnostic & Prototyping</h4>
                      <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-normal">We mapped out user journeys, operational data pipelines, and high-fidelity wireframes to validate UX friction points early.</p>
                    </div>
                    <div className="relative">
                      <div className="absolute -left-[30px] w-5 h-5 rounded-full bg-white border-2 border-[#4f47e6] flex items-center justify-center">
                        <div className="w-2 h-2 rounded-full bg-[#4f47e6]" />
                      </div>
                      <h4 className="text-base font-bold text-slate-900 mb-1">Production Build & Automation</h4>
                      <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-normal">Iterative full-stack development using {project.tech.slice(0, 2).join(" and ")} guaranteed sub-second speeds and scalable APIs.</p>
                    </div>
                    <div className="relative">
                      <div className="absolute -left-[30px] w-5 h-5 rounded-full bg-white border-2 border-[#4f47e6] flex items-center justify-center">
                        <div className="w-2 h-2 rounded-full bg-[#4f47e6]" />
                      </div>
                      <h4 className="text-base font-bold text-slate-900 mb-1">Deployment & Telemetry</h4>
                      <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-normal">Post-launch real-time analytics monitoring ensured 99.9% uptime SLA and zero-downtime scalability.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Sidebar */}
              <div className="lg:col-span-4">
                <div className="sticky top-32 liquid-glass rounded-3xl p-6 space-y-6">
                  <h4 className="font-display font-bold text-base text-slate-900 border-b border-slate-200/60 pb-3">Technology Stack</h4>
                  <div className="flex flex-col gap-2.5">
                    {project.tech.map((t) => (
                      <div key={t} className="flex justify-between items-center bg-white/90 rounded-xl px-4 py-2.5 border border-slate-200/80 shadow-2xs">
                        <span className="text-xs font-mono font-bold text-slate-800">{t}</span>
                      </div>
                    ))}
                  </div>

                  <div className="pt-6 border-t border-slate-200/60 text-center">
                    <h4 className="font-display font-extrabold text-3xl text-[#4f47e6] mb-1">{project.result}</h4>
                    <p className="text-[11px] font-mono uppercase tracking-widest font-semibold text-slate-500">Measurable Outcome</p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Next Step CTA */}
        <section className="py-20 bg-[#fbfdff] border-t border-slate-100 text-center">
          <div className="container mx-auto px-6 max-w-2xl">
            <div className="liquid-glass rounded-3xl p-8 sm:p-12 shadow-[0_20px_50px_rgba(15,23,42,0.06)]">
              <h2 className="font-display text-3xl font-extrabold text-slate-900 mb-4 tracking-tight">Ready for similar growth?</h2>
              <p className="text-slate-600 text-sm sm:text-base mb-8 font-normal">Let our founding engineers architect your custom web and automation system.</p>
              <Link to="/contact" className="inline-flex items-center gap-2 bg-[#4f47e6] hover:bg-[#4338ca] text-white px-7 py-3.5 rounded-xl font-semibold shadow-[0_4px_16px_rgba(79,71,230,0.3)] hover:shadow-[0_8px_24px_rgba(79,71,230,0.4)] transition-all hover:-translate-y-0.5 text-xs sm:text-sm">
                <span>Start Your Project</span>
                <ArrowRight size={15} />
              </Link>
            </div>
          </div>
        </section>
      </article>
    </>
  );
}
