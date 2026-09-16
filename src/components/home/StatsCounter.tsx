import { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import { RollingNumber } from "@/components/ui/RollingNumber";

interface StatItem {
  value: number;
  suffix: string;
  prefix?: string;
  decimals?: number;
  label: string;
  sub: string;
}

const stats: StatItem[] = [
  { value: 50, suffix: "+", label: "Production Deployments", sub: "Websites & bespoke platforms" },
  { value: 340, prefix: "+", suffix: "%", label: "Average Revenue Lift", sub: "Post-launch customer growth" },
  { value: 40, suffix: "+", label: "Weekly Hours Automated", sub: "Per client operations" },
  { value: 99.9, suffix: "%", decimals: 1, label: "Client Satisfaction SLA", sub: "Long-term engineering retention" },
];

export default function StatsCounter() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="py-20 lg:py-28 relative overflow-hidden bg-white border-b border-slate-100" ref={ref}>
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: i * 0.1, ease: "easeOut" }}
              className="liquid-glass-card hover:bg-white/95 rounded-3xl p-6 sm:p-8 text-center transition-all duration-300 hover:-translate-y-1.5"
            >
              <div className="mb-2">
                <span className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl text-[#4f47e6] tracking-tight">
                  <RollingNumber
                    value={stat.value}
                    prefix={stat.prefix || ""}
                    suffix={stat.suffix}
                    decimals={stat.decimals || 0}
                  />
                </span>
              </div>
              <h3 className="text-xs sm:text-sm font-bold text-slate-900 mt-2">{stat.label}</h3>
              <p className="text-[11px] text-slate-500 font-medium mt-1">{stat.sub}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
