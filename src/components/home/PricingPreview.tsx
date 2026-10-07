import { Check, ArrowRight, Zap } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export interface PricingPlan {
  category: string;
  topBadge?: string;
  name: string;
  tagline: string;
  originalPrice?: string | null;
  discountBadge?: string | null;
  price: string;
  period: string;
  popular: boolean;
  features: string[];
  ctaText: string;
  ctaLink: string;
}

export const PRICING_PLANS: PricingPlan[] = [
  {
    category: "CORE BUSINESS PRESENCE",
    name: "Starter",
    tagline: "Designed for businesses needing a high-credibility, ultra-fast modern digital platform and automated lead capture.",
    originalPrice: "₹35,000",
    discountBadge: "Save ~25%",
    price: "₹25,000",
    period: "/ one-time",
    popular: false,
    features: [
      "Custom scope aligned to your core business goals",
      "High-performance, sub-second edge architecture",
      "On-page technical SEO & Google indexing setup",
      "Instant WhatsApp & direct email lead capture alerts",
      "1 month dedicated post-launch support & warranty",
    ],
    ctaText: "Get Started",
    ctaLink: "/contact?plan=Starter",
  },
  {
    category: "RECOMMENDED • SCALING BRANDS",
    topBadge: "Most Popular",
    name: "Growth",
    tagline: "Engineered for companies wanting dynamic web applications, e-commerce, custom customer portals, or workflow automations.",
    originalPrice: "₹80,000",
    discountBadge: "Save ~25%",
    price: "₹59,000",
    period: "/ one-time",
    popular: true,
    features: [
      "Comprehensive scope tailored to dynamic web apps or e-commerce",
      "Custom web application or complete store architecture",
      "Payment gateway (Razorpay/Stripe) integration",
      "Automated multi-channel lead & customer workflow alerts",
      "Advanced technical SEO & performance optimization",
      "3 months priority engineering support & fast iterations",
    ],
    ctaText: "Start Growth Project",
    ctaLink: "/contact?plan=Growth",
  },
  {
    category: "DEDICATED CUSTOM ENGINEERING",
    name: "Enterprise",
    tagline: "Bespoke software architecture for proprietary systems, custom CRMs, ERPs, AI agents, and high-throughput platforms.",
    originalPrice: null,
    discountBadge: null,
    price: "Custom Quoted",
    period: "/ project scope",
    popular: false,
    features: [
      "Full custom architecture specification & engineering scope",
      "Bespoke SaaS, proprietary CRM, ERP, or AI agent workflows",
      "High-throughput database, cloud setup & API integrations",
      "Enterprise security, role-based access & automated backups",
      "Dedicated engineering squad & 24/7 priority SLA",
    ],
    ctaText: "Request Architecture Quote",
    ctaLink: "/contact?plan=Enterprise",
  },
];

export default function PricingPreview() {
  return (
    <section className="py-10 lg:py-14 relative overflow-hidden bg-[#f8fafd] border-b border-slate-200/80 w-full" id="pricing">
      <div className="w-full max-w-[1700px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 relative z-10">
        
        {/* Header */}
        <motion.div
          className="text-center max-w-3xl mx-auto mb-8"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-semibold tracking-widest text-[#475fd1] uppercase mb-4 bg-indigo-50 border border-indigo-100 shadow-2xs">
            <span className="w-1.5 h-1.5 rounded-full bg-[#475fd1] animate-pulse" />
            Pricing &amp; Plans
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 mb-4 tracking-tight">
            How much does custom software engineering cost at <span className="text-[#475fd1]">Brandex?</span>
          </h2>
          <p className="text-slate-600 text-base sm:text-lg font-normal leading-relaxed">
            Brandex provides transparent software engineering plans with zero recurring platform tax and 100% full source code ownership.
          </p>
        </motion.div>

        {/* Pricing Cards Grid matching screenshot media_1791138290315.png */}
        <div className="grid lg:grid-cols-3 gap-8 items-stretch">
          {PRICING_PLANS.map((pkg, i) => (
            <motion.div
              key={pkg.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.1, ease: "easeOut" }}
              className={`relative rounded-3xl p-7 sm:p-9 flex flex-col justify-between transition-all duration-300 bg-white ${
                pkg.popular
                  ? "border-2 border-[#475fd1] shadow-xl shadow-[#475fd1]/10"
                  : "border border-slate-200/90 shadow-sm hover:shadow-md"
              }`}
            >
              {/* Optional Top Floating Badge */}
              {pkg.topBadge && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                  <span className="inline-flex items-center gap-1 px-3.5 py-1 rounded-full bg-[#475fd1] text-white text-[11px] font-bold tracking-wide shadow-md">
                    <Zap size={11} fill="white" />
                    <span>{pkg.topBadge}</span>
                  </span>
                </div>
              )}

              <div>
                {/* Category Tag */}
                <div className="mb-4">
                  <span
                    className={`inline-block font-mono text-[10px] tracking-wider uppercase font-bold px-3 py-1 rounded-md ${
                      pkg.popular
                        ? "bg-indigo-50 text-[#4f47e6] border border-indigo-200/80"
                        : "bg-slate-100 text-slate-600 border border-slate-200/60"
                    }`}
                  >
                    {pkg.category}
                  </span>
                </div>

                {/* Plan Name */}
                <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-slate-900 mb-3">
                  {pkg.name}
                </h3>

                {/* Tagline */}
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6 min-h-[40px]">
                  {pkg.tagline}
                </p>

                {/* Price Block */}
                <div className="mb-8 pb-6 border-b border-slate-100">
                  {pkg.originalPrice && (
                    <div className="flex items-center gap-2 mb-1.5">
                      <span className="text-xs sm:text-sm text-slate-400 font-semibold line-through">
                        {pkg.originalPrice}
                      </span>
                      {pkg.discountBadge && (
                        <span className="bg-emerald-50 text-emerald-700 border border-emerald-200 text-[11px] font-bold px-2 py-0.5 rounded-full">
                          {pkg.discountBadge}
                        </span>
                      )}
                    </div>
                  )}

                  <div className="flex items-baseline gap-1.5 flex-wrap">
                    <span className="font-display text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                      {pkg.price}
                    </span>
                    <span className="text-xs text-slate-500 font-medium">
                      {pkg.period}
                    </span>
                  </div>
                </div>

                {/* Features List */}
                <div className="space-y-3.5 mb-8">
                  {pkg.features.map((feature) => (
                    <div key={feature} className="flex items-start gap-3">
                      <div
                        className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5 ${
                          pkg.popular
                            ? "bg-indigo-100 text-[#4f47e6]"
                            : "bg-slate-100 text-slate-700"
                        }`}
                      >
                        <Check size={12} strokeWidth={2.5} />
                      </div>
                      <span className="text-xs sm:text-sm text-slate-700 leading-normal">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Action CTA Button */}
              <div className="pt-2">
                <Link
                  to={pkg.ctaLink}
                  className={`w-full h-12 rounded-xl font-bold text-xs sm:text-sm transition-all duration-300 flex items-center justify-center gap-2 group ${
                    pkg.popular
                      ? "bg-[#475fd1] hover:bg-[#3b51be] text-white shadow-md shadow-[#475fd1]/25 hover:shadow-xl hover:shadow-[#475fd1]/35 hover:-translate-y-0.5 active:translate-y-0"
                      : "bg-white hover:bg-indigo-50/50 border-2 border-slate-200 hover:border-[#475fd1] text-slate-900 hover:text-[#475fd1] shadow-2xs hover:shadow-md hover:-translate-y-0.5 active:translate-y-0"
                  }`}
                >
                  <span>{pkg.ctaText}</span>
                  <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
