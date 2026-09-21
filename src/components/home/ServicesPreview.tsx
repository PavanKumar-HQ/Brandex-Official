import { Link } from "react-router-dom";
import { Globe, Workflow, AppWindow, Share2, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import TiltCard from "./TiltCard";

const services = [
  {
    icon: Globe,
    title: "Websites & Web Apps",
    description: "Fast, modern websites and web applications built to look sharp and work flawlessly on mobile and desktop.",
    details: "Clean design, fast loading, and easy content management so you can update text and images anytime.",
    tag: "Web Design & Dev",
  },
  {
    icon: Workflow,
    title: "Workflow Automation",
    description: "Connect your favorite tools, automate customer follow-ups, and get rid of repetitive manual tasks.",
    details: "Automate leads, customer notifications, and data updates so you save hours every single week.",
    tag: "Save Time & Effort",
  },
  {
    icon: AppWindow,
    title: "Custom Software & Portals",
    description: "Tailored client dashboards, internal company portals, and specialized software built for how you work.",
    details: "Built to match your unique workflow with secure logins, role management, and clean user experience.",
    tag: "Tailored Tools",
  },
  {
    icon: Share2,
    title: "Brand & Digital Design",
    description: "Memorable logos, clear messaging, and engaging user experiences that build instant trust.",
    details: "Stand out from competitors with clean, premium design that turns visitors into repeat clients.",
    tag: "Brand Identity",
  },
];

export default function ServicesPreview() {
  return (
    <section className="py-20 lg:py-28 relative overflow-hidden bg-white border-b border-slate-100 w-full" id="services">
      <div className="w-full max-w-[1700px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 relative z-10">
        
        {/* Header */}
        <motion.div
          className="max-w-3xl mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
        >
          <div className="liquid-glass-pill inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-semibold tracking-widest text-[#4f47e6] uppercase mb-4 shadow-2xs">
            <span className="w-1.5 h-1.5 rounded-full bg-[#4f47e6] animate-pulse" />
            What We Do
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 mb-3 leading-[1.15] tracking-tight">
            Everything you need to <span className="text-[#4f47e6]">grow online</span>
          </h2>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed font-normal">
            From custom websites and web apps to workflow automation, we build software that works for you.
          </p>
        </motion.div>

        {/* 4-Column Grid across full width */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
            >
              <TiltCard className="h-full rounded-2xl">
                <Link to="/services" className="block h-full">
                  <div className="group relative liquid-glass-card hover:bg-white rounded-3xl p-6 transition-all duration-200 overflow-hidden h-full flex flex-col justify-between hover:-translate-y-1 border border-slate-200 shadow-sm hover:shadow-md">
                    <div className="relative z-10">
                      <div className="flex items-center justify-between mb-4">
                        <div className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-200/90 flex items-center justify-center transition-all duration-200 group-hover:bg-[#4f47e6] group-hover:text-white shadow-2xs">
                          <service.icon size={18} className="text-[#4f47e6] group-hover:text-white transition-colors" />
                        </div>
                        <span className="text-[10px] font-mono uppercase tracking-wider text-[#4f47e6] liquid-glass-pill px-2.5 py-0.5 rounded-full font-bold">
                          {service.tag}
                        </span>
                      </div>

                      <h3 className="font-display font-bold text-base sm:text-lg text-slate-900 mb-2 tracking-tight group-hover:text-[#4f47e6] transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-600 mb-3 leading-relaxed">
                        {service.description}
                      </p>
                      <p className="text-[11px] sm:text-xs text-slate-500 leading-relaxed pt-3 border-t border-slate-200/60">
                        {service.details}
                      </p>
                    </div>

                    <div className="relative z-10 mt-6 pt-3 border-t border-slate-200/80">
                      <div className="w-full inline-flex items-center justify-center gap-1.5 py-2.5 px-4 rounded-xl bg-slate-100 hover:bg-[#4f47e6] text-slate-800 hover:text-white border border-slate-200 hover:border-[#4f47e6] text-xs font-bold tracking-wide transition-all duration-200 shadow-2xs group-hover:bg-[#4f47e6] group-hover:text-white group-hover:border-[#4f47e6]">
                        <span>Explore Capabilities</span>
                        <ArrowRight size={13} className="group-hover:translate-x-0.5 transition-transform" />
                      </div>
                    </div>
                  </div>
                </Link>
              </TiltCard>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-14 text-center"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.4 }}
        >
          <Button asChild variant="liquidGlass" size="lg" className="rounded-full shadow-sm hover:shadow-md px-8">
            <Link to="/services" className="flex items-center gap-2 font-bold text-xs sm:text-sm">
              <span>View All Engineering Services & Specifications</span>
              <ArrowRight size={14} />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
