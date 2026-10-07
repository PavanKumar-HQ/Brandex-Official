import { Link } from "react-router-dom";
import { Globe, Workflow, AppWindow, Share2, ArrowRight } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import TiltCard from "./TiltCard";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: Globe,
    title: "Web Development",
    description: "High-performance websites and web applications built with modern technologies.",
    details: "From marketing sites to complex platforms — responsive, fast, and SEO-optimized.",
  },
  {
    icon: Workflow,
    title: "Business Automation",
    description: "Streamline operations with custom automation workflows and integrations.",
    details: "Eliminate manual tasks, connect your tools, and let systems work for you.",
  },
  {
    icon: AppWindow,
    title: "Custom Applications",
    description: "Tailored software solutions designed around your unique business processes.",
    details: "Dashboards, internal tools, customer portals — built exactly to your needs.",
  },
  {
    icon: Share2,
    title: "Social Media Management",
    description: "Strategic social presence that drives engagement and brand awareness.",
    details: "Content strategy, scheduling, analytics, and growth campaigns.",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: "easeOut" as const },
  }),
};

export default function ServicesPreview() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const headerY = useTransform(scrollYProgress, [0, 0.5], [40, 0]);

  return (
    <section ref={ref} className="py-10 lg:py-14">
      <div className="container mx-auto px-6">
        <motion.div
          className="max-w-2xl mb-8"
          style={{ y: headerY }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <div className="liquid-glass-pill inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-bold tracking-widest text-[#475fd1] uppercase mb-3 shadow-2xs">
            <span className="w-1.5 h-1.5 rounded-full bg-[#475fd1] animate-pulse" />
            Capabilities &amp; Services
          </div>
          <h2 className="font-display text-4xl lg:text-5xl font-extrabold text-slate-900 mb-3 leading-[1.1] tracking-tight">
            Everything you need to <span className="text-[#475fd1]">go digital</span>
          </h2>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            From concept to launch, we handle every aspect of your digital transformation.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
            >
              <Link to="/services" className="block h-full group">
                <TiltCard className="h-full rounded-3xl">
                  <div className="relative bg-card dark:bg-card/90 border border-border/80 dark:border-border/60 rounded-3xl p-7 sm:p-8 shadow-xs hover:shadow-xl hover:border-slate-300 dark:hover:border-slate-700 hover:-translate-y-1.5 transition-all duration-300 cursor-pointer overflow-hidden h-full flex flex-col justify-between">
                    <div className="relative z-10">
                      {/* Prominent Icon Badge */}
                      <div className="w-12 h-12 rounded-xl bg-indigo-50 border border-indigo-100/60 flex items-center justify-center mb-6 group-hover:scale-105 transition-all duration-300">
                        <service.icon size={22} className="text-[#4f47e6]" />
                      </div>

                      <h3 className="font-display font-bold text-xl text-foreground mb-3 leading-snug">
                        {service.title}
                      </h3>

                      <p className="text-sm text-muted-foreground mb-3 leading-relaxed">
                        {service.description}
                      </p>

                      <p className="text-xs text-muted-foreground/80 leading-relaxed mb-6">
                        {service.details}
                      </p>
                    </div>

                    {/* Sleek Action Button matching Brandex-Official */}
                    <div className="relative z-10 mt-6 pt-3 border-t border-slate-200/80">
                      <div className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-slate-100 group-hover:bg-[#475fd1] text-slate-800 group-hover:text-white border border-slate-200 group-hover:border-[#475fd1] text-xs font-bold tracking-wide transition-all duration-200 shadow-2xs">
                        <span>Explore Capabilities</span>
                        <ArrowRight size={13} className="group-hover:translate-x-0.5 transition-transform" />
                      </div>
                    </div>
                  </div>
                </TiltCard>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* View All Services CTA */}
        <motion.div
          className="mt-14 text-center flex justify-center"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.4 }}
        >
          <Button
            asChild
            size="lg"
            className="rounded-full shadow-xs hover:shadow-md px-8 h-12 bg-white text-slate-900 border-2 border-slate-200 hover:border-[#475fd1] hover:bg-[#475fd1] hover:text-white font-bold text-xs sm:text-sm transition-all duration-200 group"
          >
            <Link to="/services" className="inline-flex items-center gap-2.5">
              <span>View All Engineering Services &amp; Specifications</span>
              <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
