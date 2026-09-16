import { Link } from "react-router-dom";
import { Compass, Layout, Cpu, Rocket, ArrowRight, CheckCircle2, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const methodologyPhases = [
  {
    step: "01",
    icon: Compass,
    title: "System Architecture & Discovery",
    timeline: "Week 1",
    description: "We map your operational workflows, entity data schemas, and user journeys into a concrete technical specification document.",
    deliverables: ["Entity Schema Modeling", "API Contract Specifications", "Interactive Prototype"],
  },
  {
    step: "02",
    icon: Layout,
    title: "High-Trust Interface Engineering",
    timeline: "Week 2",
    description: "We engineer pixel-perfect, liquid-glass responsive interfaces built for conversion psychology, accessibility, and sub-second rendering.",
    deliverables: ["Liquid Glass Design Tokens", "Mobile-First UX System", "Conversion Pathway Mapping"],
  },
  {
    step: "03",
    icon: Cpu,
    title: "Resilient Backend & Automations",
    timeline: "Week 3",
    description: "We build secure database layers, automated webhook pipelines, real-time sync engines, and payment gateway bridges with zero data loss.",
    deliverables: ["Atomic Idempotent Webhooks", "Optimized Query Indexing", "Real-Time Event Streams"],
  },
  {
    step: "04",
    icon: Rocket,
    title: "Edge Deployment & Hypercare",
    timeline: "Week 4",
    description: "We deploy to distributed edge infrastructure, verify 99+ Core Web Vitals, and provide 30–90 days of dedicated engineering hypercare.",
    deliverables: ["Sub-Second TTFB Tuning", "100% Client Code Handover", "Continuous Retainer SLA"],
  },
];

export default function SolutionsPreview() {
  return (
    <section className="py-14 lg:py-18 relative overflow-hidden bg-white border-b border-slate-100" id="methodology">
      <div className="w-full max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-10 relative z-10">
        
        {/* Header */}
        <motion.div
          className="text-center max-w-2xl mx-auto mb-10"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="liquid-glass-pill inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-bold tracking-widest text-[#4f47e6] uppercase mb-3 shadow-2xs">
            <span className="w-1.5 h-1.5 rounded-full bg-[#4f47e6] animate-pulse" />
            Execution Methodology
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
            How We Deliver <span className="text-[#4f47e6]">Production Systems</span>
          </h2>
          <p className="text-slate-600 text-sm sm:text-base font-normal mt-2 leading-relaxed">
            A battle-tested 4-stage engineering framework that turns complex business bottlenecks into automated software assets.
          </p>
        </motion.div>

        {/* 4-Column Methodology Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {methodologyPhases.map((phase, idx) => {
            const Icon = phase.icon;
            return (
              <motion.div
                key={phase.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: idx * 0.08 }}
                className="liquid-glass-card hover:bg-white rounded-2xl p-6 flex flex-col justify-between group hover:-translate-y-1.5 transition-all duration-200 border border-slate-300 shadow-sm hover:shadow-md"
              >
                <div>
                  {/* Step & Timeline Header */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-xl bg-slate-100 border border-slate-200 flex items-center justify-center text-[#4f47e6] font-mono font-extrabold text-sm group-hover:bg-[#4f47e6] group-hover:text-white transition-colors">
                      {phase.step}
                    </div>
                    <span className="liquid-glass-pill px-2.5 py-0.5 rounded-full text-[11px] font-sans font-bold text-[#4f47e6] border border-indigo-100">
                      {phase.timeline}
                    </span>
                  </div>

                  <h3 className="font-display font-extrabold text-lg text-slate-900 mb-2 group-hover:text-[#4f47e6] transition-colors leading-snug">
                    {phase.title}
                  </h3>

                  <p className="text-xs text-slate-600 leading-relaxed font-normal mb-5">
                    {phase.description}
                  </p>

                  <div className="space-y-2 pt-4 border-t border-slate-200/80 mb-4">
                    {phase.deliverables.map((item) => (
                      <div key={item} className="flex items-center gap-2 text-xs font-sans font-semibold text-slate-800">
                        <CheckCircle2 size={13} className="text-[#4f47e6] shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-3 border-t border-slate-200/80 flex items-center justify-between text-xs font-bold text-[#4f47e6]">
                  <span>Stage Verified</span>
                  <ShieldCheck size={14} />
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          className="mt-10 text-center"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.4 }}
        >
          <Button asChild variant="brand" size="lg" className="rounded-xl shadow-[0_4px_14px_rgba(79,71,230,0.3)]">
            <Link to="/contact" className="gap-2">
              <span>Initiate Sprint 01 for Your Project</span>
              <ArrowRight size={14} />
            </Link>
          </Button>
        </motion.div>

      </div>
    </section>
  );
}
