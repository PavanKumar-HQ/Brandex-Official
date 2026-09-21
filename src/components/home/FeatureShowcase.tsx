import { motion } from "framer-motion";
import { Code2, Zap, Palette, BarChart3, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { RollingNumber } from "@/components/ui/RollingNumber";

const capabilities = [
  {
    icon: Code2,
    title: "Always Online & Reliable",
    desc: "Dependable cloud hosting and clean, maintainable code with zero bloated templates.",
    numericValue: 99.9,
    prefix: "",
    suffix: "%",
    decimals: 1,
    statLabel: "Guaranteed Uptime",
    iconBg: "bg-white text-[#4f47e6] border-slate-200/80 shadow-2xs",
  },
  {
    icon: Zap,
    title: "Lightning Fast Speed",
    desc: "Instant page loads and responsive navigation so your visitors never wait.",
    numericValue: 0.8,
    prefix: "<",
    suffix: "s",
    decimals: 1,
    statLabel: "Average Load Time",
    iconBg: "bg-white text-[#4f47e6] border-slate-200/80 shadow-2xs",
  },
  {
    icon: Palette,
    title: "Custom Modern Design",
    desc: "Every page is crafted to match your brand and make a great first impression.",
    numericValue: 100,
    prefix: "",
    suffix: "%",
    decimals: 0,
    statLabel: "Custom Crafted",
    iconBg: "bg-white text-[#4f47e6] border-slate-200/80 shadow-2xs",
  },
  {
    icon: BarChart3,
    title: "Built to Convert",
    desc: "Clear layouts and calls-to-action that turn everyday website visitors into paying clients.",
    numericValue: 3.4,
    prefix: "",
    suffix: "x",
    decimals: 1,
    statLabel: "More Inquiries & Sales",
    iconBg: "bg-white text-[#4f47e6] border-slate-200/80 shadow-2xs",
  },
];

export default function FeatureShowcase() {
  return (
    <section className="py-16 lg:py-20 relative overflow-hidden bg-white border-b border-slate-100 w-full">
      <div className="w-full max-w-[1700px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 relative z-10">
        
        {/* Heading */}
        <motion.div
          className="text-center max-w-3xl mx-auto mb-12"
          initial={{ opacity: 0, y: 28, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="liquid-glass-pill inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-semibold tracking-widest text-[#4f47e6] uppercase mb-4 shadow-2xs">
            <span className="w-1.5 h-1.5 rounded-full bg-[#4f47e6] animate-pulse" />
            Why Work With Us
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 mb-4 leading-[1.15] tracking-tight">
            Built with care, <span className="text-[#4f47e6]">designed to grow your business.</span>
          </h2>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed font-normal">
            No cookie-cutter templates. We build fast, reliable websites and apps that help you stand out and win more customers.
          </p>
        </motion.div>

        {/* 4-Column Liquid Glass Grid spanning full width */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {capabilities.map((cap, i) => {
            const Icon = cap.icon;
            return (
              <motion.div
                key={cap.title}
                initial={{ opacity: 0, y: 35, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.65, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                className="group relative liquid-glass-card rounded-3xl p-6 sm:p-7 transition-all duration-300 hover:bg-white/95"
              >
                <div className="relative z-10">
                  {/* Icon */}
                  <div className={`w-12 h-12 rounded-2xl border flex items-center justify-center mb-5 transition-transform duration-200 group-hover:scale-110 ${cap.iconBg}`}>
                    <Icon size={22} />
                  </div>

                  {/* Rolling Stat Metric */}
                  <div className="mb-4">
                    <span className="font-display text-3xl sm:text-4xl font-extrabold text-[#4f47e6] tracking-tight">
                      <RollingNumber
                        value={cap.numericValue}
                        prefix={cap.prefix}
                        suffix={cap.suffix}
                        decimals={cap.decimals}
                        duration={2}
                      />
                    </span>
                    <p className="text-xs font-mono text-slate-500 font-semibold mt-1 uppercase tracking-wider">{cap.statLabel}</p>
                  </div>

                  <h3 className="font-display font-bold text-base sm:text-lg text-slate-900 mb-2 tracking-tight group-hover:text-[#4f47e6] transition-colors">
                    {cap.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">{cap.desc}</p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Action Capsule */}
        <motion.div
          className="mt-14 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <div className="liquid-glass-pill inline-flex flex-col sm:flex-row items-center gap-3.5 sm:gap-5 rounded-2xl sm:rounded-full px-6 py-3.5">
            <p className="text-xs sm:text-sm text-slate-700 font-medium">Ready to upgrade your brand's digital infrastructure?</p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-1.5 bg-[#4f47e6] hover:bg-[#4338ca] text-white px-5 py-2 rounded-full text-xs font-semibold transition-all shadow-[0_4px_14px_rgba(79,71,230,0.3)] hover:-translate-y-0.5"
            >
              <span>Consult with our Team</span>
              <ArrowRight size={13} />
            </Link>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
