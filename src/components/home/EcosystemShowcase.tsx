import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Users,
  GraduationCap,
  Code2,
  ArrowRight,
  ExternalLink,
  CheckCircle2,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const pillars = [
  {
    icon: Users,
    category: "Community Network",
    title: "Brandex Builders & Founders Club",
    description: "An exclusive community of founders, product creators, and software engineers in Bangalore and worldwide. Active meetups, architecture teardowns, and peer review circles.",
    stats: "500+ Active Builders",
    actionText: "Explore Community Hub",
    href: "/community",
    isExternal: false,
    image: "/ecosystem/community.jpg",
    highlights: ["Bangalore Tech Meetups", "System Teardowns", "Peer Founder Sprints"],
  },
  {
    icon: GraduationCap,
    category: "Education Platform",
    title: "Karnataka State Digital Learning",
    description: "Smartboard-optimized curriculum video platform and formative assessment engines mapped to Karnataka State Board (KSEEB) Classes 6 through 10.",
    stats: "Classes 6–10 Mapped",
    actionText: "Launch Education Portal",
    href: "/education",
    isExternal: false,
    image: "/ecosystem/education.jpg",
    highlights: ["Smartboard Presentation Mode", "Pre-Built Formative Quizzes", "Distraction-Free Theater"],
  },
  {
    icon: Code2,
    category: "Open Source Ecosystem",
    title: "Public Developer Tooling & Repos",
    description: "We contribute production-grade developer libraries, Vite/React performance boilerplates, and Liquid Glass design tokens back to the global software engineering community.",
    stats: "100% Free & MIT Licensed",
    actionText: "Browse Repositories",
    href: "/community/projects",
    isExternal: false,
    image: "/ecosystem/opensource.jpg",
    highlights: ["Liquid Glass UI Tokens", "Edge API Scaffolds", "Automated Intake Hooks"],
  },
];

export default function EcosystemShowcase() {
  return (
    <section className="py-16 lg:py-20 relative overflow-hidden bg-white border-b border-slate-100 w-full" id="ecosystem">
      <div className="w-full max-w-[1700px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 relative z-10">
        
        {/* Section Header */}
        <motion.div
          className="text-center max-w-2xl mx-auto mb-12"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="liquid-glass-pill inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-bold tracking-widest text-[#4f47e6] uppercase mb-3 shadow-2xs">
            <span className="w-1.5 h-1.5 rounded-full bg-[#4f47e6] animate-pulse" />
            Brandex Ecosystem
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Community, Education & <span className="text-[#4f47e6]">Open Source</span>
          </h2>
          <p className="text-slate-600 text-sm sm:text-base font-normal mt-2 leading-relaxed">
            Beyond client work, we support students, developers, and founders with free learning resources and open-source software.
          </p>
        </motion.div>

        {/* 3-Column Ecosystem Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {pillars.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: idx * 0.08 }}
                className="liquid-glass-card hover:bg-white rounded-3xl p-6 sm:p-7 flex flex-col justify-between group hover:-translate-y-1.5 transition-all duration-200 border border-slate-200 shadow-sm hover:shadow-md"
              >
                <div>
                  {/* Top Banner Image */}
                  <div className="relative aspect-[16/9] w-full rounded-2xl overflow-hidden mb-5 border border-slate-200/90 bg-slate-50 shadow-2xs">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute top-2.5 right-2.5">
                      <span className="liquid-glass-pill px-3 py-1 rounded-full text-[10px] font-mono font-bold text-[#4f47e6] shadow-xs">
                        {item.stats}
                      </span>
                    </div>
                  </div>

                  {/* Category Pill & Title */}
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-6 h-6 rounded-lg bg-slate-100 border border-slate-200 text-[#4f47e6] flex items-center justify-center">
                      <Icon size={13} />
                    </div>
                    <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#4f47e6]">
                      {item.category}
                    </span>
                  </div>
                  
                  <h3 className="font-display font-bold text-lg sm:text-xl text-slate-900 mt-1 mb-2 group-hover:text-[#4f47e6] transition-colors leading-snug">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal mb-4">
                    {item.description}
                  </p>

                  <div className="space-y-1.5 mb-5 pt-3 border-t border-slate-200/70">
                    {item.highlights.map((h) => (
                      <div key={h} className="flex items-center gap-2 text-xs text-slate-700 font-medium">
                        <CheckCircle2 size={13} className="text-[#4f47e6] shrink-0" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {item.isExternal ? (
                  <Button asChild variant="liquidGlass" size="default" className="w-full justify-between rounded-xl h-11 text-xs sm:text-sm font-bold">
                    <a href={item.href} target="_blank" rel="noopener noreferrer">
                      <span>{item.actionText}</span>
                      <ExternalLink size={14} />
                    </a>
                  </Button>
                ) : (
                  <Button asChild variant="brand" size="default" className="w-full justify-between rounded-xl h-11 text-xs sm:text-sm font-bold shadow-sm">
                    <Link to={item.href}>
                      <span>{item.actionText}</span>
                      <ArrowRight size={14} />
                    </Link>
                  </Button>
                )}
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
