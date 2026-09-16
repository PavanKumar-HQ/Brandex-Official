import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Search, PenTool, Code2, Rocket, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const steps = [
  {
    step: "01",
    title: "Discovery & Strategy",
    description: "We dive deep into your business model, customer workflows, and bottlenecks to build an actionable, high-ROI technical roadmap.",
    icon: Search,
    duration: "Week 1",
  },
  {
    step: "02",
    title: "UI/UX Architecture",
    description: "Our product design team crafts high-conversion wireframes, interactive prototypes, and luxury design systems built to engage.",
    icon: PenTool,
    duration: "Week 2-3",
  },
  {
    step: "03",
    title: "Production Engineering",
    description: "We build resilient, ultra-fast web applications with clean TypeScript, robust API integrations, and sub-second load performance.",
    icon: Code2,
    duration: "Week 3-5",
  },
  {
    step: "04",
    title: "Launch & Automated Scale",
    description: "Rigorous quality assurance, automated CI/CD deployment, analytics tracking, and continuous workflow automation to scale effortlessly.",
    icon: Rocket,
    duration: "Week 6+",
  },
];

export default function ProcessTimeline() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section className="py-24 lg:py-32 relative overflow-hidden bg-[#05080f]" ref={containerRef}>
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-indigo-600/[0.03] blur-[150px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-indigo-500/20 bg-indigo-500/10 text-xs font-mono tracking-widest text-indigo-300 uppercase mb-4"
          >
            Delivery Lifecycle
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-5 tracking-tight"
          >
            How We Execute from Concept to Launch
          </motion.h2>
          <p className="text-zinc-400 text-base sm:text-lg">
            A battle-tested 4-stage delivery sprint designed for transparency, speed, and precision.
          </p>
        </div>

        <div className="max-w-4xl mx-auto relative">
          {/* Animated Glowing Center Line (Desktop) */}
          <div className="absolute left-6 lg:left-1/2 top-0 bottom-0 w-0.5 bg-white/[0.08] -translate-x-1/2 overflow-hidden">
            <motion.div 
              className="absolute top-0 left-0 w-full bg-gradient-to-b from-indigo-500 via-cyan-400 to-indigo-600"
              style={{ height: lineHeight }}
            />
          </div>

          <div className="space-y-12 lg:space-y-20">
            {steps.map((step, index) => {
              const isEven = index % 2 === 0;
              const Icon = step.icon;

              return (
                <div key={index} className="relative flex items-center lg:justify-between group">
                  
                  {/* Left Side (Desktop Even) */}
                  <div className={`hidden lg:block w-5/12 text-right pr-12 ${!isEven ? "lg:invisible" : ""}`}>
                    {isEven && (
                      <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-80px" }}
                        transition={{ duration: 0.5, ease: "easeOut" }}
                        className="glass-card rounded-2xl p-6 text-left border-white/[0.08] hover:border-indigo-500/40 transition-all duration-300 shadow-xl"
                      >
                        <div className="flex items-center justify-between mb-3">
                          <span className="font-mono text-xs font-semibold text-indigo-400 bg-indigo-500/10 px-2.5 py-1 rounded-md border border-indigo-500/20">
                            {step.step}
                          </span>
                          <span className="text-[11px] font-mono text-zinc-500">{step.duration}</span>
                        </div>
                        <h3 className="text-xl font-display font-bold text-white mb-2">{step.title}</h3>
                        <p className="text-zinc-400 text-sm leading-relaxed">{step.description}</p>
                      </motion.div>
                    )}
                  </div>

                  {/* Icon Center Node */}
                  <motion.div 
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 0.4, delay: 0.15 }}
                    className="absolute left-6 lg:left-1/2 w-12 h-12 rounded-2xl bg-[#0b101c] border border-white/20 flex items-center justify-center -translate-x-1/2 z-10 transition-all duration-300 group-hover:border-indigo-500 group-hover:shadow-lg group-hover:shadow-indigo-500/30 shadow-md"
                  >
                    <Icon size={20} className="text-indigo-400 group-hover:text-cyan-400 transition-colors" />
                  </motion.div>

                  {/* Right Side (Desktop Odd) & Mobile Layout */}
                  <div className={`w-full pl-16 lg:w-5/12 lg:pl-12 ${isEven ? "lg:invisible" : ""}`}>
                    <motion.div
                      initial={{ opacity: 0, x: 30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: "-80px" }}
                      transition={{ duration: 0.5, ease: "easeOut" }}
                      className="glass-card rounded-2xl p-6 text-left border-white/[0.08] hover:border-indigo-500/40 transition-all duration-300 shadow-xl"
                    >
                      <div className="flex items-center justify-between mb-3">
                        <span className="font-mono text-xs font-semibold text-indigo-400 bg-indigo-500/10 px-2.5 py-1 rounded-md border border-indigo-500/20">
                          {step.step}
                        </span>
                        <span className="text-[11px] font-mono text-zinc-500">{step.duration}</span>
                      </div>
                      <h3 className="text-xl font-display font-bold text-white mb-2">{step.title}</h3>
                      <p className="text-zinc-400 text-sm leading-relaxed">{step.description}</p>
                    </motion.div>
                  </div>
                  
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
