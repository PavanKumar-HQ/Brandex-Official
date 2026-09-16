import { Check, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const plans = [
  {
    name: "Foundation Sprint",
    tagline: "High-performance marketing website & brand architecture",
    price: "Custom Scope",
    period: "Fixed Deliverables",
    popular: false,
    features: [
      "Bespoke React / Next.js Architecture",
      "Mobile-First Responsive UX System",
      "Complete Technical SEO & Schema Graph",
      "Sub-Second Core Web Vitals (98+)",
      "CMS / Content Management Integration",
      "30-Day Post-Launch Hypercare",
    ],
    cta: "Book Diagnostic",
  },
  {
    name: "Growth Engine",
    tagline: "Custom web applications & automated business workflows",
    price: "Tailored Sprint",
    period: "Full Pipeline Build",
    popular: true,
    features: [
      "Everything in Foundation Sprint",
      "Custom Client Portals & Dashboards",
      "End-to-End Webhook Automation (CRM, SMS, Email)",
      "Payment Gateway & Subscription Engine",
      "Real-Time Database & Analytics Pipeline",
      "90-Day Architecture & Growth Support",
    ],
    cta: "Scale Your Business",
  },
  {
    name: "Enterprise Ecosystem",
    tagline: "Complex full-stack software & proprietary automated systems",
    price: "Dedicated Squad",
    period: "Continuous Retainer",
    popular: false,
    features: [
      "Full-Stack Bespoke SaaS / Web Application",
      "Complex Multi-Tenant Architecture",
      "Dedicated Engineering & Design Squad",
      "Custom Workflow Automations & Integrations",
      "24/7 SLA & Direct Leadership Access",
      "Continuous Iteration & DevOps Pipeline",
    ],
    cta: "Consult Leadership",
  },
];

export default function PricingPreview() {
  return (
    <section className="py-20 lg:py-28 relative overflow-hidden bg-white border-b border-slate-100 w-full" id="pricing">
      <div className="w-full max-w-[1700px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 relative z-10">
        
        {/* Header */}
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 28, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: "-70px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="liquid-glass-pill inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-semibold tracking-widest text-[#4f47e6] uppercase mb-4 shadow-2xs">
            <span className="w-1.5 h-1.5 rounded-full bg-[#4f47e6] animate-pulse" />
            Investment & Packages
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 mb-3 tracking-tight">
            Transparent Engineering <span className="text-[#4f47e6]">Sprint Packages</span>
          </h2>
          <p className="text-slate-600 text-base sm:text-lg font-normal">
            Zero hidden costs. 100% code ownership. Built around your precise operational deliverables.
          </p>
        </motion.div>

        {/* Pricing Cards Grid spanning full responsive width */}
        <div className="grid lg:grid-cols-3 gap-8 items-stretch">
          {plans.map((pkg, i) => (
            <motion.div
              key={pkg.name}
              initial={{ opacity: 0, y: 35, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className={`relative rounded-3xl p-8 sm:p-9 flex flex-col justify-between transition-all duration-300 ${
                pkg.popular
                  ? "liquid-glass border-2 border-[#4f47e6] shadow-[0_24px_60px_-10px_rgba(79,71,230,0.18)] bg-white/95"
                  : "liquid-glass-card hover:bg-white/90 border border-slate-200"
              }`}
            >
              {pkg.popular && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                  <span className="inline-flex items-center px-4 py-1 rounded-full bg-[#4f47e6] text-white text-[11px] font-mono font-bold tracking-wider uppercase shadow-[0_4px_12px_rgba(79,71,230,0.35)]">
                    Most Requested
                  </span>
                </div>
              )}

              <div>
                <div className="flex items-start justify-between gap-4 mb-2">
                  <h3 className="font-display text-2xl sm:text-3xl font-bold text-slate-900">{pkg.name}</h3>
                </div>
                
                <p className="text-xs sm:text-sm text-slate-600 mb-6 leading-relaxed min-h-[38px]">
                  {pkg.tagline}
                </p>

                <div className="mb-7 pb-6 border-b border-slate-200/60">
                  <div className="font-display text-3xl sm:text-4xl font-extrabold text-slate-900">
                    {pkg.price}
                  </div>
                  <span className="text-xs font-mono text-[#4f47e6] uppercase tracking-wider font-semibold mt-1 block">
                    {pkg.period}
                  </span>
                </div>

                <div className="space-y-3.5 mb-8">
                  {pkg.features.map((f) => (
                    <div key={f} className="flex items-start gap-3">
                      <div className={`w-4 h-4 rounded-full flex items-center justify-center shrink-0 mt-0.5 ${
                        pkg.popular ? "bg-[#4f47e6] text-white" : "bg-white border border-slate-200 text-[#4f47e6]"
                      }`}>
                        <Check size={10} />
                      </div>
                      <span className="text-xs sm:text-sm text-slate-700 leading-relaxed font-medium">{f}</span>
                    </div>
                  ))}
                </div>
              </div>

              <Button
                asChild
                variant={pkg.popular ? "brand" : "liquidGlass"}
                size="default"
                className="w-full h-12 text-xs sm:text-sm font-semibold rounded-2xl"
              >
                <Link to="/contact" className="flex items-center justify-center gap-1.5">
                  <span>{pkg.cta}</span>
                  <ArrowRight size={14} />
                </Link>
              </Button>
            </motion.div>
          ))}
        </div>

        <div className="mt-14 text-center">
          <p className="text-xs sm:text-sm text-slate-600 font-medium">
            Need an enterprise retainer or dedicated ongoing squad?{" "}
            <Link to="/contact" className="text-[#4f47e6] hover:underline font-bold">
              Schedule a Custom Architecture Discussion
            </Link>
          </p>
        </div>

      </div>
    </section>
  );
}
