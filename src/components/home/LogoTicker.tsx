import { motion } from "framer-motion";
import { ExternalLink, CheckCircle2, ShieldCheck, Globe, ArrowUpRight } from "lucide-react";

const clients = [
  {
    name: "Vignan Public School",
    category: "Education & Campus Portal",
    url: "https://www.vignanschool.com",
    logo: "/Clients/vignan-public-school.webp",
    metric: "10k+ Monthly Active",
    deliverable: "Institutional Campus Web Platform",
    tag: "Education",
  },
  {
    name: "Vignan Tutorials",
    category: "Learning Management System",
    url: "https://www.vignantutorials.in",
    logo: "/Clients/vignan-tutorials.webp",
    metric: "Sub-Second Latency",
    deliverable: "High-Speed Student Learning Portal",
    tag: "EdTech",
  },
  {
    name: "Srushti Publications",
    category: "Full-Stack Book E-Commerce",
    url: "https://www.srushtipublications.com",
    logo: "/Clients/srushti-publications.webp",
    metric: "+340% Order Lift",
    deliverable: "Automated Storefront & Invoicing Engine",
    tag: "E-Commerce",
  },
  {
    name: "GeniuSphere",
    category: "Interactive 3D WebGL Labs",
    url: "https://www.geniusphere.tech",
    logo: "/Clients/geniusphere.webp",
    metric: "Real-Time 3D Simulation",
    deliverable: "Interactive 3D Digital Simulation System",
    tag: "Interactive 3D",
  },
  {
    name: "PropQuant.ai",
    category: "Automated Algorithmic Platform",
    url: "https://www.propquant.ai",
    logo: "/Clients/propquant-ai.webp",
    metric: "Zero Latency Execution",
    deliverable: "Automated Financial Execution Engine",
    tag: "FinTech AI",
  },
];

const doubled = [...clients, ...clients, ...clients];

export default function LogoTicker() {
  return (
    <section className="py-14 lg:py-18 overflow-hidden border-y border-slate-200/80 bg-white relative">
      {/* Background Grid */}
      <div className="absolute inset-0 bg-grid opacity-30 pointer-events-none" />

      <div className="w-full max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-10 mb-8 relative z-10">
        
        {/* Header */}
        <motion.div
          className="text-center max-w-3xl mx-auto mb-8"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="liquid-glass-pill inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-bold tracking-widest text-[#4f47e6] uppercase mb-3 shadow-2xs">
            <span className="w-1.5 h-1.5 rounded-full bg-[#4f47e6] animate-pulse" />
            Verified Enterprise Clients
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            Trusted by Industry Pioneers
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-2 font-normal">
            Real enterprise web applications, educational portals, and automated platforms engineered by Brandex.
          </p>
        </motion.div>

        {/* High-Contrast Client Showcase Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 xl:gap-5">
          {clients.map((client, idx) => (
            <motion.a
              key={client.name}
              href={client.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              className="liquid-glass-card hover:bg-white p-5 rounded-2xl flex flex-col justify-between group cursor-pointer hover:-translate-y-1.5 transition-all duration-200 border border-slate-300 shadow-sm hover:shadow-md relative overflow-hidden"
            >
              {/* Top Accent Bar */}
              <div className="absolute top-0 inset-x-0 h-1 bg-[#4f47e6] opacity-0 group-hover:opacity-100 transition-opacity" />

              <div>
                {/* Logo & Category Pill */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <div className="w-14 h-14 rounded-xl bg-white p-2 flex items-center justify-center overflow-hidden border border-slate-200 shadow-2xs group-hover:scale-105 transition-transform shrink-0">
                    <img
                      src={client.logo}
                      alt={`${client.name} logo`}
                      width={56}
                      height={56}
                      className="h-full w-full object-contain"
                      loading="lazy"
                      decoding="async"
                    />
                  </div>

                  <span className="liquid-glass-pill px-2.5 py-1 rounded-full text-xs font-sans font-bold text-[#4f47e6] shrink-0 border border-indigo-100">
                    {client.tag}
                  </span>
                </div>

                {/* Company Name & Category */}
                <h3 className="font-display font-extrabold text-base text-slate-900 group-hover:text-[#4f47e6] transition-colors leading-snug">
                  {client.name}
                </h3>
                <p className="text-xs text-slate-500 font-medium mt-0.5">
                  {client.category}
                </p>

                {/* Deliverable Spec - Clean Bold Dark Font */}
                <div className="mt-3 text-xs font-sans font-semibold text-slate-800 bg-slate-100/80 p-2.5 rounded-xl border border-slate-200 leading-snug">
                  {client.deliverable}
                </div>
              </div>

              {/* Bottom Row: Verified Metric & Action Button */}
              <div className="mt-4 pt-3 border-t border-slate-200 flex items-center justify-between gap-2">
                <span className="text-xs font-sans font-extrabold text-[#4f47e6]">
                  {client.metric}
                </span>

                <span className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-900 group-hover:text-[#4f47e6] transition-colors whitespace-nowrap shrink-0">
                  <span>Visit Platform</span>
                  <ArrowUpRight size={13} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform shrink-0" />
                </span>
              </div>
            </motion.a>
          ))}
        </div>

      </div>

      {/* Infinite Rolling Client Marquee Bar */}
      <div className="relative group pt-4">
        <div className="absolute left-0 top-0 bottom-0 w-24 sm:w-48 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 sm:w-48 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

        <div className="css-marquee-left gap-4 items-center px-4">
          {doubled.map((client, i) => (
            <a
              key={`${client.name}-marquee-${i}`}
              href={client.url}
              target="_blank"
              rel="noopener noreferrer"
              className="liquid-glass-pill flex items-center gap-3 px-4 py-2 rounded-xl shrink-0 group/pill hover:bg-white transition-all cursor-pointer border border-slate-200 shadow-2xs"
            >
              <div className="w-7 h-7 rounded-lg bg-white p-1 flex items-center justify-center overflow-hidden border border-slate-200 shrink-0">
                <img
                  src={client.logo}
                  alt={`${client.name} logo`}
                  width={28}
                  height={28}
                  className="h-full w-full object-contain"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <span className="font-display text-xs font-bold text-slate-800 group-hover/pill:text-[#4f47e6] whitespace-nowrap">
                {client.name}
              </span>
              <span className="text-[11px] font-sans font-medium text-slate-500">&bull; {client.category}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
