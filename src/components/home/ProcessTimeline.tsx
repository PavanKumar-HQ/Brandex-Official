import React from "react";
import { motion } from "framer-motion";
import { Search, Palette, Code2, Rocket, ArrowRight } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Discover & Strategy",
    description: "We analyze your business bottlenecks, target audience, and architecture requirements to outline a high-ROI roadmap.",
    icon: Search,
  },
  {
    number: "02",
    title: "UI/UX & System Design",
    description: "We craft intuitive, high-conversion interfaces and design modular schemas built for speed and seamless usability.",
    icon: Palette,
  },
  {
    number: "03",
    title: "High-Velocity Engineering",
    description: "Production-grade development using React, TypeScript, Next.js, and Node.js with weekly progress demos.",
    icon: Code2,
  },
  {
    number: "04",
    title: "Launch, Automate & Scale",
    description: "Rigorous QA testing, edge deployment, SEO indexing, and ongoing maintenance to ensure effortless scaling.",
    icon: Rocket,
  },
];

export default React.memo(function ProcessTimeline() {
  return (
    <section className="py-16 lg:py-20 relative overflow-hidden bg-secondary/20">
      <div className="absolute inset-0 bg-grid opacity-10 pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          className="text-center max-w-2xl mx-auto mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-accent mb-3">Our Process</p>
          <h2 className="font-display text-3xl lg:text-4xl font-bold text-foreground mb-3 leading-[1.15]">
            How we engineer <span className="text-gradient">digital products</span>
          </h2>
          <p className="text-muted-foreground text-base leading-relaxed">
            A transparent, sprint-based methodology that moves you from idea to launch without friction.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.45, delay: index * 0.1, ease: "easeOut" }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                className="group relative bg-card border border-border/70 rounded-2xl p-6 flex flex-col justify-between hover:border-accent/40 hover:shadow-xl hover:shadow-accent/[0.04] transition-all duration-300 overflow-hidden"
              >
                {/* Top header with step number & icon */}
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-accent-foreground transition-all duration-300">
                      <Icon size={22} />
                    </div>
                    <span className="font-mono text-2xl font-bold text-muted-foreground/30 group-hover:text-accent/50 transition-colors">
                      {step.number}
                    </span>
                  </div>

                  <h3 className="font-display text-lg font-bold text-foreground mb-2.5 group-hover:text-accent transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Progress dot connector */}
                <div className="mt-6 pt-4 border-t border-border/50 flex items-center justify-between text-[11px] text-muted-foreground font-medium">
                  <span>Phase {index + 1} of 4</span>
                  {index < 3 ? (
                    <ArrowRight size={13} className="text-accent/60 group-hover:translate-x-1 transition-transform" />
                  ) : (
                    <span className="text-emerald-500 font-bold">Launch Ready</span>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
});
