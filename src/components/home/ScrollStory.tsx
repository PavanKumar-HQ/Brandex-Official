import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { RollingNumber } from "@/components/ui/RollingNumber";

interface ProcessPillar {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  description: string;
  points: string[];
  metrics: {
    label: string;
    numeric?: number;
    prefix?: string;
    suffix?: string;
    fallbackText?: string;
  }[];
  badge: string;
}

const pillars: ProcessPillar[] = [
  {
    id: "business-understanding",
    number: "01",
    title: "Business Understanding",
    subtitle: "Reverse-engineering your operational bottlenecks before writing code",
    description:
      "We dissect your existing operations, customer touchpoints, and manual spreadsheets. Instead of pushing cookie-cutter templates, we map out a bespoke digital architecture that solves real business pain points.",
    points: [
      "Operational workflow audit & bottleneck identification",
      "Customer journey mapping & conversion funnels",
      "Tech stack feasibility & ROI projection",
    ],
    metrics: [
      { label: "Discovery Deep-Dive", numeric: 48, suffix: " Hours" },
      { label: "Bespoke Blueprint", numeric: 100, suffix: "% Custom" },
    ],
    badge: "Stage 01 · Diagnostic",
  },
  {
    id: "design-systems",
    number: "02",
    title: "Design & High-Converting UX",
    subtitle: "High-contrast editorial aesthetics engineered with conversion psychology",
    description:
      "We craft high-fidelity, responsive user interfaces that captivate your audience from the first millisecond. Micro-interactions, modern typography, and kinetic clarity build immediate authority and drive user action.",
    points: [
      "Bespoke design systems & interactive prototypes",
      "Tactile micro-interactions & fluid transitions",
      "Mobile-first responsiveness & accessibility (WCAG AA)",
    ],
    metrics: [
      { label: "Avg. User Retention Lift", numeric: 65, prefix: "+", suffix: "%" },
      { label: "Device Compatibility", numeric: 100, suffix: "%" },
    ],
    badge: "Stage 02 · Experience",
  },
  {
    id: "custom-engineering",
    number: "03",
    title: "Custom Engineering & Architecture",
    subtitle: "Production-grade code built for sub-second speeds and zero lock-in",
    description:
      "We build resilient frontend and backend architectures using React, TypeScript, and modern cloud infrastructure. Clean, documented, scalable code that you fully own without monthly proprietary platform handcuffs.",
    points: [
      "Modern React / TypeScript full-stack builds",
      "Sub-second load times & Core Web Vitals optimization",
      "Seamless API integrations & real-time databases",
    ],
    metrics: [
      { label: "Lighthouse Score", numeric: 98, suffix: "+" },
      { label: "Code Ownership", numeric: 100, suffix: "% Client" },
    ],
    badge: "Stage 03 · Build",
  },
  {
    id: "automation-scale",
    number: "04",
    title: "Automated Workflows & Scale",
    subtitle: "Automating repetitive work so your business grows on autopilot",
    description:
      "Connect your CRM, order management, payment gateways, and client notifications into an automated machine. Eliminate manual data entry, reduce human error, and handle 10x volume effortlessly.",
    points: [
      "End-to-end webhook & API workflow automation",
      "Automated customer notifications & lead routing",
      "Real-time analytics dashboard & performance tracking",
    ],
    metrics: [
      { label: "Hours Saved / Week", numeric: 40, suffix: "+ hrs" },
      { label: "Order Throughput Lift", numeric: 340, prefix: "+", suffix: "%" },
    ],
    badge: "Stage 04 · Scale",
  },
];

export default function ScrollStory() {
  const [activeId, setActiveId] = useState<string>("business-understanding");

  const togglePillar = (id: string) => {
    setActiveId(activeId === id ? "" : id);
  };

  return (
    <section className="py-24 lg:py-32 relative overflow-hidden bg-white border-b border-slate-100">
      <div className="container mx-auto px-6 relative z-10">
        
        {/* Section Header with Grand Reveal */}
        <motion.div
          className="max-w-4xl mb-16 lg:mb-20"
          initial={{ opacity: 0, y: 30, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="liquid-glass-pill inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-semibold tracking-widest text-[#4f47e6] uppercase mb-6 shadow-2xs">
            <span className="w-1.5 h-1.5 rounded-full bg-[#4f47e6] animate-pulse" />
            Engineering Methodology
          </div>

          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.1] mb-6">
            Built around how your business <span className="text-[#4f47e6]">actually works</span>, not generic agency templates.
          </h2>

          <p className="text-base sm:text-lg text-slate-600 max-w-2xl leading-relaxed font-normal">
            Every business has distinct operational bottlenecks. We don't force you into predefined constraints — we architect custom systems tailored to your workflows.
          </p>
        </motion.div>

        {/* Interactive Liquid Glass Accordion */}
        <div className="space-y-4">
          {pillars.map((pillar, index) => {
            const isOpen = activeId === pillar.id;

            return (
              <motion.div
                key={pillar.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
                className={`group rounded-3xl transition-all duration-300 overflow-hidden ${
                  isOpen
                    ? "liquid-glass shadow-[0_16px_45px_rgba(15,23,42,0.06)] bg-white/90"
                    : "liquid-glass-card hover:bg-white/85"
                }`}
              >
                {/* Header Row */}
                <button
                  onClick={() => togglePillar(pillar.id)}
                  className="w-full flex items-center justify-between p-6 sm:p-8 text-left transition-colors focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-center gap-4 sm:gap-7">
                    <span className="font-mono text-sm sm:text-base font-bold text-slate-400 group-hover:text-[#4f47e6] transition-colors">
                      {pillar.number}
                    </span>
                    <h3
                      className={`font-display text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight transition-all duration-200 ${
                        isOpen ? "text-slate-900" : "text-slate-700 group-hover:text-slate-950"
                      }`}
                    >
                      {pillar.title}
                    </h3>
                  </div>

                  <div className="flex items-center gap-4 shrink-0">
                    <span className="hidden md:inline-block font-mono text-xs text-[#4f47e6] font-semibold tracking-wider uppercase liquid-glass-pill px-3 py-1 rounded-full">
                      {pillar.badge}
                    </span>
                    <div
                      className={`w-9 h-9 sm:w-10 sm:h-10 rounded-2xl flex items-center justify-center transition-all duration-200 ${
                        isOpen
                          ? "bg-[#4f47e6] text-white rotate-180 shadow-xs"
                          : "bg-white text-[#4f47e6] border border-slate-200/80 group-hover:border-[#4f47e6]/40"
                      }`}
                    >
                      {isOpen ? <Minus size={18} /> : <Plus size={18} />}
                    </div>
                  </div>
                </button>

                {/* Expandable Body */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                    >
                      <div className="px-6 pb-7 sm:px-8 sm:pb-8 pt-1 border-t border-slate-200/60">
                        <div className="grid lg:grid-cols-12 gap-8 items-center">
                          
                          {/* Left Details */}
                          <div className="lg:col-span-7 space-y-4">
                            <p className="text-base font-bold text-slate-900">
                              {pillar.subtitle}
                            </p>
                            <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                              {pillar.description}
                            </p>

                            <div className="space-y-2.5 pt-1">
                              {pillar.points.map((pt, idx) => (
                                <div key={idx} className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-700 font-medium">
                                  <div className="w-1.5 h-1.5 rounded-full bg-[#4f47e6] shrink-0" />
                                  <span>{pt}</span>
                                </div>
                              ))}
                            </div>
                          </div>

                          {/* Right Metrics Card */}
                          <div className="lg:col-span-5">
                            <div className="liquid-glass-card rounded-2xl p-5 space-y-4">
                              <div className="text-xs font-mono uppercase tracking-wider text-[#4f47e6] font-bold">
                                Deliverables & Impact
                              </div>
                              <div className="grid grid-cols-2 gap-3">
                                {pillar.metrics.map((m, idx) => (
                                  <div key={idx} className="bg-white/90 rounded-xl p-3.5 border border-slate-200/80 shadow-2xs">
                                    <div className="text-xl font-extrabold font-display text-[#4f47e6]">
                                      {m.numeric ? (
                                        <RollingNumber
                                          value={m.numeric}
                                          prefix={m.prefix || ""}
                                          suffix={m.suffix || ""}
                                          duration={1.5}
                                        />
                                      ) : (
                                        m.fallbackText
                                      )}
                                    </div>
                                    <div className="text-[11px] text-slate-500 font-medium mt-0.5">
                                      {m.label}
                                    </div>
                                  </div>
                                ))}
                              </div>
                              <Button
                                asChild
                                size="sm"
                                className="w-full bg-[#4f47e6] hover:bg-[#4338ca] text-white rounded-xl h-10 transition-all text-xs font-semibold shadow-xs"
                              >
                                <Link to="/contact">
                                  <span>Consult on {pillar.title}</span>
                                  <ArrowRight size={13} className="ml-1" />
                                </Link>
                              </Button>
                            </div>
                          </div>

                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
