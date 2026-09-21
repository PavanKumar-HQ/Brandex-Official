import { Star, CheckCircle2, Building2 } from "lucide-react";
import { motion } from "framer-motion";

interface Testimonial {
  name: string;
  role: string;
  company: string;
  content: string;
  rating: number;
  metric: string;
  location: string;
}

const testimonialsRow1: Testimonial[] = [
  {
    name: "Sarah Mitchell",
    role: "CEO & Co-Founder",
    company: "GreenLeaf Organics",
    content: "Brandex engineered our entire custom digital ordering infrastructure from scratch. Our sales surged by 180% in the first quarter alone, and checkout abandonment dropped significantly.",
    rating: 5,
    metric: "+180% Sales Growth",
    location: "Bangalore",
  },
  {
    name: "James Rodriguez",
    role: "Director of Engineering",
    company: "TechVault Systems",
    content: "The workflow automation pipelines Brandex developed save our core team over 25 hours every single week. Their technical rigor, speed, and architectural understanding are world-class.",
    rating: 5,
    metric: "25+ Hrs Saved / Wk",
    location: "San Francisco",
  },
  {
    name: "Dr. Arvind Rao",
    role: "Managing Director",
    company: "Apex Health Diagnostics",
    content: "Our appointment booking and automated WhatsApp reminder platform reduced patient no-shows by 60%. The UI is lightning fast and our staff loves the custom admin dashboard.",
    rating: 5,
    metric: "60% Fewer No-Shows",
    location: "Bangalore",
  },
  {
    name: "Elena Rostova",
    role: "Founder & Head of Product",
    company: "Lumina Retail",
    content: "Working with Brandex was the smoothest agency experience we have ever had. They delivered a custom, high-converting e-commerce web platform in just 3 weeks.",
    rating: 5,
    metric: "3.2x Conversion Lift",
    location: "London",
  }
];

const testimonialsRow2: Testimonial[] = [
  {
    name: "Marcus Chen",
    role: "Operations Lead",
    company: "NextWave Logistics",
    content: "They automated our manual dispatch spreadsheets into a real-time web portal. What used to take 4 people all morning is now completely automated in seconds.",
    rating: 5,
    metric: "100% Automated Dispatch",
    location: "Singapore",
  },
  {
    name: "Vikram Malhotra",
    role: "Chief Executive Officer",
    company: "Zeno FinTech Solutions",
    content: "Sub-second response times and rock-solid webhook integration. Brandex brought our customer onboarding latency down from minutes to under 2 seconds.",
    rating: 5,
    metric: "<2s Customer Onboarding",
    location: "Mumbai",
  },
  {
    name: "Ananya Deshmukh",
    role: "Co-Founder & COO",
    company: "Nova Cloud Labs",
    content: "Pavan and Sathvik are exceptional founders to work with. They don't just write code; they deeply analyze business logic and solve real operational bottlenecks.",
    rating: 5,
    metric: "99.99% Core Uptime",
    location: "Bangalore",
  },
  {
    name: "David K.",
    role: "VP of Product",
    company: "Stratis Global Systems",
    content: "The architectural depth Brandex delivered is unparalleled. Our web platform handles millions of event pings without a hiccup.",
    rating: 5,
    metric: "4.2M+ Monthly Requests",
    location: "Frankfurt",
  }
];

const row1Doubled = [...testimonialsRow1, ...testimonialsRow1];
const row2Doubled = [...testimonialsRow2, ...testimonialsRow2];

export default function Testimonials() {
  return (
    <section className="py-20 lg:py-24 relative overflow-hidden bg-white border-b border-slate-100">
      <div className="w-full max-w-[1700px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 relative z-10 mb-12 text-center">
        
        {/* Header */}
        <motion.div
          className="max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
        >
          <div className="liquid-glass-pill inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-semibold tracking-widest text-[#4f47e6] uppercase mb-3 shadow-2xs">
            <span className="w-1.5 h-1.5 rounded-full bg-[#4f47e6] animate-pulse" />
            Client Reviews
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 mb-3 tracking-tight">
            Loved by <span className="text-[#4f47e6]">Growing Businesses</span>
          </h2>
          <p className="text-slate-600 text-base sm:text-lg font-normal">
            Here is what founders and business owners say about working with us.
          </p>
        </motion.div>

      </div>

      {/* Row 1: Leftward Infinite Marquee */}
      <div className="relative overflow-hidden group mb-5">
        <div className="absolute left-0 top-0 bottom-0 w-20 sm:w-36 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-20 sm:w-36 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

        <motion.div
          className="flex gap-5 items-stretch w-max px-4 group-hover:[animation-play-state:paused]"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ x: { repeat: Infinity, repeatType: "loop", duration: 36, ease: "linear" } }}
        >
          {row1Doubled.map((t, i) => {
            const initials = t.name.split(" ").map((n) => n[0]).join("").slice(0, 2);
            return (
              <div
                key={`r1-${t.name}-${i}`}
                className="w-[300px] sm:w-[360px] liquid-glass-card hover:bg-white rounded-2xl p-5 transition-all duration-200 flex flex-col justify-between hover:-translate-y-1 select-none"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <div className="flex gap-0.5">
                      {Array.from({ length: t.rating }).map((_, idx) => (
                        <Star key={idx} size={13} className="text-[#4f47e6] fill-[#4f47e6]" />
                      ))}
                    </div>
                    <span className="liquid-glass-pill text-[10px] font-mono font-bold text-[#4f47e6] px-2.5 py-0.5 rounded-full">
                      {t.metric}
                    </span>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-normal mb-4">
                    "{t.content}"
                  </p>
                </div>

                <div className="flex items-center gap-3 pt-3.5 border-t border-slate-200/60">
                  <div className="w-9 h-9 rounded-xl bg-[#4f47e6] flex items-center justify-center text-white font-bold text-xs shrink-0 shadow-2xs font-mono">
                    {initials}
                  </div>
                  <div>
                    <div className="font-display font-bold text-sm text-slate-900">{t.name}</div>
                    <div className="text-[11px] text-slate-500 font-medium">{t.role} &bull; {t.company}</div>
                  </div>
                </div>
              </div>
            );
          })}
        </motion.div>
      </div>

      {/* Row 2: Rightward Infinite Marquee */}
      <div className="relative overflow-hidden group">
        <div className="absolute left-0 top-0 bottom-0 w-20 sm:w-36 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-20 sm:w-36 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

        <motion.div
          className="flex gap-5 items-stretch w-max px-4 group-hover:[animation-play-state:paused]"
          animate={{ x: ["-50%", "0%"] }}
          transition={{ x: { repeat: Infinity, repeatType: "loop", duration: 38, ease: "linear" } }}
        >
          {row2Doubled.map((t, i) => {
            const initials = t.name.split(" ").map((n) => n[0]).join("").slice(0, 2);
            return (
              <div
                key={`r2-${t.name}-${i}`}
                className="w-[300px] sm:w-[360px] liquid-glass-card hover:bg-white rounded-2xl p-5 transition-all duration-200 flex flex-col justify-between hover:-translate-y-1 select-none"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <div className="flex gap-0.5">
                      {Array.from({ length: t.rating }).map((_, idx) => (
                        <Star key={idx} size={13} className="text-[#4f47e6] fill-[#4f47e6]" />
                      ))}
                    </div>
                    <span className="liquid-glass-pill text-[10px] font-mono font-bold text-[#4f47e6] px-2.5 py-0.5 rounded-full">
                      {t.metric}
                    </span>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-normal mb-4">
                    "{t.content}"
                  </p>
                </div>

                <div className="flex items-center gap-3 pt-3.5 border-t border-slate-200/60">
                  <div className="w-9 h-9 rounded-xl bg-slate-900 flex items-center justify-center text-white font-bold text-xs shrink-0 shadow-2xs font-mono">
                    {initials}
                  </div>
                  <div>
                    <div className="font-display font-bold text-sm text-slate-900">{t.name}</div>
                    <div className="text-[11px] text-slate-500 font-medium">{t.role} &bull; {t.company}</div>
                  </div>
                </div>
              </div>
            );
          })}
        </motion.div>
      </div>

    </section>
  );
}
