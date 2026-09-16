import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Zap,
  GraduationCap,
  ShieldCheck,
  Users,
  Globe2,
  Cpu,
  ArrowRight,
  Sparkles,
  CheckCircle2,
  Flame,
} from "lucide-react";

const STICKERS = [
  {
    id: "speed",
    tag: "EDGE INFRASTRUCTURE",
    title: "Sub-18ms TTFB",
    subtitle: "Global Low-Latency Routing",
    icon: Zap,
    badgeColor: "bg-indigo-600 text-white",
    cardBg: "bg-white border-indigo-200/90 shadow-[0_8px_24px_rgba(79,71,230,0.12)]",
    tilt: "-rotate-1",
    link: "/services",
  },
  {
    id: "edtech",
    tag: "SMART SCHOOLS",
    title: "Classroom Smartboard",
    subtitle: "KSEEB Syllabus 6–10 Video LMS",
    icon: GraduationCap,
    badgeColor: "bg-purple-600 text-white",
    cardBg: "bg-white border-purple-200/90 shadow-[0_8px_24px_rgba(147,51,234,0.12)]",
    tilt: "rotate-2",
    link: "/education",
  },
  {
    id: "ownership",
    tag: "ZERO PLATFORM TAX",
    title: "100% Client Code IP",
    subtitle: "Zero SaaS Vendor Lock-In",
    icon: ShieldCheck,
    badgeColor: "bg-emerald-600 text-white",
    cardBg: "bg-white border-emerald-200/90 shadow-[0_8px_24px_rgba(16,185,129,0.12)]",
    tilt: "-rotate-2",
    link: "/case-studies",
  },
  {
    id: "community",
    tag: "500+ BUILDER GUILD",
    title: "Bangalore Tech Circles",
    subtitle: "Live Sprints & Hackathons",
    icon: Users,
    badgeColor: "bg-blue-600 text-white",
    cardBg: "bg-white border-blue-200/90 shadow-[0_8px_24px_rgba(37,99,235,0.12)]",
    tilt: "rotate-1",
    link: "/community",
  },
  {
    id: "webgl",
    tag: "INTERACTIVE 3D",
    title: "GPU WebGL Simulation",
    subtitle: "Procedural Earth & GIS Data",
    icon: Globe2,
    badgeColor: "bg-cyan-600 text-white",
    cardBg: "bg-white border-cyan-200/90 shadow-[0_8px_24px_rgba(6,182,212,0.12)]",
    tilt: "-rotate-1",
    link: "/solutions",
  },
  {
    id: "automation",
    tag: "WORKFLOW ENGINES",
    title: "Automated Pipelines",
    subtitle: "40+ Hours Saved Per Week",
    icon: Cpu,
    badgeColor: "bg-amber-600 text-white",
    cardBg: "bg-white border-amber-200/90 shadow-[0_8px_24px_rgba(217,119,6,0.12)]",
    tilt: "rotate-2",
    link: "/contact",
  },
];

export default function FeatureStickerBanner() {
  return (
    <section className="py-8 bg-gradient-to-r from-slate-50 via-indigo-50/40 to-slate-50 border-y border-slate-200/80 overflow-hidden relative select-none">
      {/* Subtle Background Glow */}
      <div className="absolute inset-0 bg-grid opacity-20 pointer-events-none" />

      {/* Top Banner Header Pill */}
      <div className="max-w-7xl mx-auto px-4 mb-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#4f47e6] animate-pulse" />
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-700">
            Brandex Architectural Superpowers &bull; Live Telemetry
          </span>
        </div>

        <Link
          to="/services"
          className="text-xs font-bold text-[#4f47e6] hover:underline inline-flex items-center gap-1 group"
        >
          <span>Explore All Engineering Standards</span>
          <ArrowRight size={13} className="transition-transform group-hover:translate-x-0.5" />
        </Link>
      </div>

      {/* Continuous Marquee Scrolling Sticker Strip */}
      <div className="relative w-full overflow-hidden group">
        {/* Edge Fade Masks */}
        <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-r from-slate-50 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-l from-slate-50 to-transparent z-10 pointer-events-none" />

        <motion.div
          className="flex gap-4 sm:gap-6 w-max py-2"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 32,
              ease: "linear",
            },
          }}
        >
          {[...STICKERS, ...STICKERS, ...STICKERS].map((item, idx) => {
            const Icon = item.icon;
            return (
              <Link
                key={idx}
                to={item.link}
                className={`group/sticker p-4 sm:p-5 rounded-2xl border ${item.cardBg} ${item.tilt} hover:rotate-0 hover:scale-105 transition-all duration-250 flex items-center gap-3.5 shrink-0 cursor-pointer hover:shadow-lg`}
              >
                <div className={`w-11 h-11 rounded-xl ${item.badgeColor} flex items-center justify-center shadow-xs shrink-0 transition-transform group-hover/sticker:scale-110`}>
                  <Icon size={20} />
                </div>

                <div className="space-y-0.5">
                  <div className="flex items-center gap-1.5">
                    <span className="text-[9px] font-mono font-extrabold uppercase tracking-wider text-slate-400">
                      {item.tag}
                    </span>
                  </div>
                  <h4 className="font-display font-bold text-sm text-slate-900 leading-tight group-hover/sticker:text-[#4f47e6] transition-colors">
                    {item.title}
                  </h4>
                  <p className="text-[11px] text-slate-500 font-normal leading-tight">
                    {item.subtitle}
                  </p>
                </div>

                <div className="w-6 h-6 rounded-full bg-slate-100 group-hover/sticker:bg-[#4f47e6] group-hover/sticker:text-white text-slate-400 flex items-center justify-center transition-colors ml-2 shrink-0">
                  <ArrowRight size={11} />
                </div>
              </Link>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
