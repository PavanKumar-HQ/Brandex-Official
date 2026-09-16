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
  const inView = useInView(ref, { once: false, margin: "-80px" });
  const [triggers, setTriggers] = useState<number[]>([0, 0, 0, 0]);

  const handleInteract = (index: number) => {
    setTriggers((prev) => {
      const next = [...prev];
      next[index] = next[index] + 1;
      return next;
    });
  };

  return (
    <section className="py-20 lg:py-28 relative overflow-hidden bg-white border-b border-slate-100" ref={ref}>
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {stats.map((stat, i) => (
            <motion.button
              key={stat.label}
              type="button"
              onClick={() => handleInteract(i)}
              onMouseEnter={() => handleInteract(i)}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: i * 0.08, ease: "easeOut" }}
              whileHover={{ y: -4, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="liquid-glass-card hover:bg-white/95 rounded-3xl p-6 sm:p-8 text-center transition-all duration-200 border border-slate-200/90 shadow-xs hover:shadow-md cursor-pointer text-left w-full group relative overflow-hidden"
            >
              {/* Subtle interactive hover highlight */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#4f47e6]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

              <div className="mb-2 text-center">
                <span className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl text-[#4f47e6] tracking-tight group-hover:text-[#4338ca] transition-colors">
                  <RollingNumber
                    value={stat.value}
                    prefix={stat.prefix || ""}
                    suffix={stat.suffix}
                    decimals={stat.decimals || 0}
                    triggerKey={triggers[i]}
                  />
                </span>
              </div>
              <h3 className="text-xs sm:text-sm font-bold text-slate-900 mt-2 text-center">{stat.label}</h3>
              <p className="text-[11px] text-slate-500 font-medium mt-1 text-center">{stat.sub}</p>
            </motion.button>
          ))}
        </div>
      </div>
    </section>
  );
}
