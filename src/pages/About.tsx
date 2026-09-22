import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Target, Eye, Heart, Users, ArrowRight, ArrowLeft, ShieldCheck, Zap, Server, Code2, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";
import TeamSection from "@/components/about/TeamSection";
import SEOHead from "@/components/SEOHead";

const values = [
  {
    icon: Target,
    title: "Purpose-Driven Code",
    description: "Every line of code serves a business outcome. We engineer to eliminate bottlenecks and accelerate client revenue.",
  },
  {
    icon: Eye,
    title: "Clarity Over Complexity",
    description: "Lean, sub-second architectures. We believe the highest caliber engineering is invisible and frictionless.",
  },
  {
    icon: Heart,
    title: "Uncompromising Craft",
    description: "Strict TypeScript hygiene, 60fps interaction polish, and zero-template bespoke architecture from day one.",
  },
  {
    icon: Users,
    title: "Direct Technical Leadership",
    description: "You work directly with founding architects. No account middlemen, no outsourced handoffs, 100% accountability.",
  },
];

const telemetryStats = [
  { label: "Production SLA", value: "99.98%", sub: "Edge Uptime" },
  { label: "Average TTFB", value: "< 100ms", sub: "Sub-Second Speed" },
  { label: "Ownership", value: "100%", sub: "Source Code Handover" },
  { label: "Bloatware", value: "0%", sub: "Zero-Template Rigor" },
];

export default function AboutPage() {
  useScrollReveal();

  return (
    <>
      <SEOHead
        title="About Brandex | Engineering & Operations Squad"
        description="Brandex bridges the gap between ambitious brands and high-performance digital infrastructure with custom software and automation."
        canonicalUrl="/about"
      />

      {/* Hero Header */}
      <section className="pt-24 pb-10 lg:pt-28 lg:pb-12 relative overflow-hidden bg-white border-b border-slate-100 w-full">
        <div className="w-full max-w-[1500px] mx-auto px-4 sm:px-8 lg:px-12 relative z-10">
          
          {/* Back Button */}
          <div className="mb-6">
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-xs font-bold text-slate-600 hover:text-[#4f47e6] transition-colors bg-white px-3.5 py-2 rounded-xl border border-slate-200 shadow-2xs cursor-pointer"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Back to Home</span>
            </Link>
          </div>

          <div className="scroll-reveal max-w-3xl">
            <div className="liquid-glass-pill inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-semibold tracking-widest text-[#4f47e6] uppercase mb-3 shadow-2xs">
              <span className="w-1.5 h-1.5 rounded-full bg-[#4f47e6] animate-pulse" />
              About Brandex Digital
            </div>
            <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 mb-3 tracking-tight leading-[1.12]">
              Making powerful technology <span className="text-[#4f47e6]">simple, lean, and scalable</span>.
            </h1>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal max-w-3xl">
              We engineer custom web platforms, distributed cloud services, and automated workflow pipelines that help ambitious businesses dominate their market without bloated templates or enterprise lock-in.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-12 lg:py-16 bg-[#f8fafd] border-b border-slate-100 w-full">
        <div className="w-full max-w-[1500px] mx-auto px-4 sm:px-8 lg:px-12">
          <div className="grid lg:grid-cols-12 gap-8 items-stretch">
            
            {/* Left Column: Mission Statement */}
            <div className="lg:col-span-6 flex flex-col justify-center scroll-reveal space-y-4">
              <div className="liquid-glass-pill inline-flex items-center gap-2 px-3 py-1 rounded-full text-[11px] font-mono font-bold tracking-wider text-[#4f47e6] uppercase w-fit">
                <Zap size={12} />
                <span>Our Core Mandate</span>
              </div>
              <h2 className="font-display text-2xl lg:text-3xl font-extrabold text-slate-900 tracking-tight">
                Architecting High-Speed Digital Engines That Drive Measurable ROI
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                Brandex was founded to bridge the gap between fast-moving companies and bespoke digital infrastructure. Most agencies rely on bloated WordPress templates and slow drag-and-drop page builders that collapse under traffic.
              </p>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                We take an engineering-first stance: every system is custom-architected with modern TypeScript stacks, sub-second edge distribution, and automated backend webhooks tailored directly to your operational workflows.
              </p>

              {/* Guarantees Checklist */}
              <div className="pt-2 grid sm:grid-cols-2 gap-2.5">
                <div className="flex items-center gap-2 text-xs font-semibold text-slate-800">
                  <CheckCircle2 size={15} className="text-[#4f47e6] shrink-0" />
                  <span>Direct Founder Technical Access</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-semibold text-slate-800">
                  <CheckCircle2 size={15} className="text-[#4f47e6] shrink-0" />
                  <span>100% Client Code Ownership</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-semibold text-slate-800">
                  <CheckCircle2 size={15} className="text-[#4f47e6] shrink-0" />
                  <span>Sub-100ms Performance SLA</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-semibold text-slate-800">
                  <CheckCircle2 size={15} className="text-[#4f47e6] shrink-0" />
                  <span>Zero Vendor Lock-In</span>
                </div>
              </div>
            </div>

            {/* Right Column: Architectural Telemetry Bento Box (No Empty Space) */}
            <div className="lg:col-span-6 scroll-reveal scroll-reveal-delay-2 flex flex-col justify-between">
              <div className="liquid-glass-card rounded-3xl p-6 sm:p-7 border border-slate-200/90 shadow-xs h-full flex flex-col justify-between space-y-6">
                
                {/* Card Top: Brand Crest & Live Status */}
                <div className="flex items-center justify-between pb-4 border-b border-slate-200/70">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-[#4f47e6] flex items-center justify-center p-2 shadow-xs">
                      <img src="/logo_nobg.webp" alt="Brandex" width={40} height={40} className="w-full h-full object-contain filter brightness-0 invert" decoding="async" />
                    </div>
                    <div>
                      <div className="font-display font-bold text-sm text-slate-900">Brandex Digital Infrastructure</div>
                      <div className="text-[11px] font-mono text-slate-500">Engineering Studio &bull; Bangalore, India</div>
                    </div>
                  </div>
                  <div className="liquid-glass-pill px-2.5 py-1 rounded-full text-[10px] font-mono font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    <span>Active Deployment</span>
                  </div>
                </div>

                {/* Card Middle: 4 High-Impact Metrics Grid */}
                <div className="grid grid-cols-2 gap-3">
                  {telemetryStats.map((stat) => (
                    <div key={stat.label} className="p-3.5 rounded-2xl bg-white border border-slate-200/80 shadow-2xs">
                      <div className="font-display text-xl sm:text-2xl font-extrabold text-[#4f47e6] tracking-tight">
                        {stat.value}
                      </div>
                      <div className="text-xs font-bold text-slate-900 mt-0.5">{stat.label}</div>
                      <div className="text-[10px] font-mono text-slate-500">{stat.sub}</div>
                    </div>
                  ))}
                </div>

                {/* Card Bottom: Founder Quote */}
                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/70 flex items-start gap-3">
                  <Code2 size={18} className="text-[#4f47e6] shrink-0 mt-0.5" />
                  <p className="text-xs text-slate-700 font-medium italic leading-relaxed">
                    "We don't build disposable agency websites. We engineer high-performance systems and automation pipelines that scale with your business."
                  </p>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Guiding Principles */}
      <section className="py-10 lg:py-14 bg-white border-b border-slate-100">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="max-w-2xl mb-8 scroll-reveal">
            <div className="liquid-glass-pill inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-semibold tracking-widest text-[#4f47e6] uppercase mb-2 shadow-2xs">
              <span className="w-1.5 h-1.5 rounded-full bg-[#4f47e6] animate-pulse" />
              Guiding Principles
            </div>
            <h2 className="font-display text-2xl lg:text-3xl font-extrabold text-slate-900 tracking-tight">
              What We Stand For
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
            {values.map((v, i) => (
              <div key={v.title} className={`scroll-reveal scroll-reveal-delay-${i + 1} p-5 liquid-glass-card hover:bg-white/95 rounded-2xl transition-all hover:-translate-y-1`}>
                <div className="w-10 h-10 rounded-xl bg-white border border-slate-200/80 flex items-center justify-center mb-4 shadow-2xs">
                  <v.icon size={19} className="text-[#4f47e6]" />
                </div>
                <h3 className="font-display font-bold text-base text-slate-900 mb-1.5 tracking-tight">{v.title}</h3>
                <p className="text-xs text-slate-600 leading-relaxed font-normal">{v.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Founding Leadership Section */}
      <TeamSection />

      {/* Vision & Partnership Callout */}
      <section className="py-12 lg:py-16 bg-[#f8fafd] border-t border-slate-100">
        <div className="container mx-auto px-6 text-center max-w-3xl scroll-reveal">
          <div className="liquid-glass rounded-3xl p-7 sm:p-10 border border-slate-200/80 shadow-xs">
            <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-slate-900 mb-3 tracking-tight">
              Ready to Upgrade Your Digital Infrastructure?
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6 font-normal max-w-xl mx-auto">
              Schedule a technical discovery session with our founding team to evaluate your system architecture, eliminate manual friction, and accelerate execution.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-[#4f47e6] hover:bg-[#4338ca] text-white font-semibold text-xs sm:text-sm h-11 px-6 rounded-xl shadow-[0_4px_16px_rgba(79,71,230,0.3)] hover:shadow-[0_8px_24px_rgba(79,71,230,0.4)] transition-all hover:-translate-y-0.5"
              >
                <span>Start Direct Project Intake</span>
                <ArrowRight size={14} />
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center gap-2 liquid-glass-pill hover:bg-white text-slate-800 font-semibold text-xs sm:text-sm h-11 px-5 rounded-xl border border-slate-200 transition-all"
              >
                <span>Explore Capabilities</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
