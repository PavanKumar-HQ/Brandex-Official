import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2, Mail } from "lucide-react";
import { motion } from "framer-motion";

export default function CTABanner() {
  return (
    <section className="py-16 lg:py-24 relative overflow-hidden bg-white border-t border-slate-100 w-full" id="contact">
      <div className="w-full max-w-[1700px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 relative z-10">
        <motion.div
          className="w-full text-center"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Badge */}
          <div className="liquid-glass-pill inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-[#4f47e6] text-xs font-mono font-semibold tracking-widest uppercase mb-6 shadow-2xs">
            <span className="w-1.5 h-1.5 rounded-full bg-[#4f47e6] animate-pulse" />
            <span>Scale Your Operations</span>
          </div>

          {/* Heading */}
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-extrabold text-slate-900 mb-5 leading-[1.08] tracking-tight max-w-4xl mx-auto">
            Let's engineer a system that <span className="text-[#4f47e6]">drives real growth</span>.
          </h2>

          {/* Subtext */}
          <p className="text-base sm:text-lg text-slate-600 mb-10 max-w-2xl mx-auto leading-relaxed font-normal">
            Turn manual bottlenecks into automated revenue. Share your project goals with our founding engineers today.
          </p>

          {/* Liquid Glass Action Hub Card across full width */}
          <div className="liquid-glass rounded-3xl p-6 sm:p-10 lg:p-12 relative overflow-hidden border border-slate-200 shadow-sm">
            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6 text-left">
              <div className="max-w-xl">
                <h3 className="font-display text-2xl sm:text-3xl font-bold text-slate-900 mb-1.5">
                  Start an Architectural Discovery Call
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 font-normal">
                  Direct conversation with our technical leadership team. Response guaranteed within 24 hours.
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-3.5 shrink-0 w-full md:w-auto">
                <Button
                  asChild
                  variant="brand"
                  size="default"
                  className="w-full sm:w-auto h-12 px-7 text-xs sm:text-sm rounded-xl font-bold shadow-[0_4px_16px_rgba(79,71,230,0.3)]"
                >
                  <Link to="/contact" className="flex items-center justify-center gap-2">
                    <span>Submit Project Details</span>
                    <ArrowRight size={15} />
                  </Link>
                </Button>

                <Button
                  asChild
                  variant="liquidGlass"
                  size="default"
                  className="w-full sm:w-auto h-12 px-6 text-xs sm:text-sm rounded-xl font-bold border border-slate-300"
                >
                  <a href="mailto:brandexhq@gmail.com" className="flex items-center justify-center gap-2">
                    <Mail size={15} />
                    <span>Quick Email</span>
                  </a>
                </Button>
              </div>
            </div>

            {/* Micro guarantees */}
            <div className="relative z-10 grid sm:grid-cols-3 gap-4 pt-8 mt-8 border-t border-slate-200/60 text-xs sm:text-sm font-semibold text-slate-700">
              <div className="flex items-center gap-2.5">
                <CheckCircle2 size={16} className="text-[#4f47e6] shrink-0" />
                <span>100% Code Ownership</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 size={16} className="text-[#4f47e6] shrink-0" />
                <span>Fixed Scope & Deliverables</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 size={16} className="text-[#4f47e6] shrink-0" />
                <span>NDA & Privacy Protected</span>
              </div>
            </div>
          </div>

        </motion.div>
      </div>
    </section>
  );
}
