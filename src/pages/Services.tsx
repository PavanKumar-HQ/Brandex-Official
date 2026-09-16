import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Globe, Workflow, AppWindow, Share2, CheckCircle, Check, Plus, Minus, Users, Zap, Database, TrendingUp, Heart, MessageSquare, Calendar, Search, Award, Settings, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useState } from "react";
import SEOHead from "@/components/SEOHead";

const services = [
  {
    icon: Globe,
    title: "Web Engineering",
    tagline: "Ultra-fast websites that convert visitors into revenue",
    description: "We build high-performance websites and web applications using modern technologies. From marketing sites to complex platforms — every site is responsive, fast, and optimized for search engines.",
    features: ["Custom responsive design", "Technical SEO optimization", "Sub-second Core Web Vitals", "Headless CMS integration", "E-commerce capabilities", "Real-time analytics & tracking"],
    visual: "web",
  },
  {
    icon: Workflow,
    title: "Business Automation",
    tagline: "Stop doing manually what software can do on autopilot",
    description: "We analyze your workflows and build automation systems that eliminate repetitive tasks, connect your tools, and free your team to focus on what matters.",
    features: ["Workflow bottleneck analysis", "Custom webhook integrations", "API development", "Automated CRM synchronization", "Automated invoicing & alerts", "Process optimization"],
    visual: "automation",
  },
  {
    icon: AppWindow,
    title: "Custom Applications",
    tagline: "Bespoke software built around your exact business logic",
    description: "Off-the-shelf tools don't fit every business. We design and develop custom applications — dashboards, portals, internal tools — tailored to your exact processes.",
    features: ["Requirements discovery", "UX/UI design systems", "Full-stack development", "Secure database architecture", "Role-based user management", "Ongoing SLA support"],
    visual: "app",
  },
  {
    icon: Share2,
    title: "Brand Strategy & Conversion UX",
    tagline: "Your brand authority, amplified across touchpoints",
    description: "Strategic visual identity and conversion-funnel optimization that builds your brand presence, drives trust, and converts cold traffic into high-LTV customers.",
    features: ["Design system creation", "Conversion funnel mapping", "Tactile micro-animations", "Mobile-first layouts", "Copywriting alignment", "Performance tuning"],
    visual: "social",
  },
  {
    icon: TrendingUp,
    title: "SEO & Search Infrastructure",
    tagline: "Be discovered on Google when high-intent buyers search",
    description: "We optimize your digital presence to rank higher on search engines, drive organic traffic, and implement structured data graphs that search engine crawlers favor.",
    features: ["Technical SEO audits", "Keyword mapping", "Schema.org JSON-LD graph", "Performance audits (98+)", "Canonical URL routing", "Analytics dashboards"],
    visual: "seo",
  },
  {
    icon: Award,
    title: "Reputation & Growth Engines",
    tagline: "Build unshakeable trust with 5-star customer proof",
    description: "Your online reputation dictates conversion rates. We help you systematically generate, manage, and showcase authentic client reviews and testimonials to establish market authority.",
    features: ["Automated review intake", "Review showcase widgets", "Google Business optimization", "Customer feedback flows", "Sentiment analytics", "Local SEO optimization"],
    visual: "reputation",
  },
];

const packages = [
  {
    name: "Foundation Sprint",
    description: "High-performance marketing website & brand architecture.",
    price: "Custom",
    period: "fixed scope",
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
    description: "For businesses ready to scale with custom applications and automated pipelines.",
    price: "Custom",
    period: "tailored build",
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
    description: "Full-scale bespoke software and proprietary automated systems.",
    price: "Custom",
    period: "dedicated sprint",
    popular: false,
    features: [
      "Full-Stack Bespoke SaaS / Web Application",
      "Complex Multi-Tenant Architecture",
      "Dedicated Engineering & Design Squad",
      "Custom AI / LLM Workflow Automations",
      "24/7 SLA & Direct Leadership Access",
      "Continuous Iteration & DevOps Pipeline",
    ],
    cta: "Consult Leadership",
  },
];

export default function ServicesPage() {
  useScrollReveal();

  return (
    <>
      <SEOHead
        title="Web Engineering, Automation & Custom Software Services | Brandex"
        description="Explore Brandex engineering services: bespoke web development, business automation, custom SaaS applications, and SEO infrastructure."
        canonical="https://brandex.me/services"
      />

      {/* Hero */}
      <section className="pt-32 pb-20 lg:pt-40 lg:pb-28 bg-white border-b border-slate-100">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl scroll-reveal">
            <div className="liquid-glass-pill inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-semibold tracking-widest text-[#4f47e6] uppercase mb-4 shadow-2xs">
              <span className="w-1.5 h-1.5 rounded-full bg-[#4f47e6] animate-pulse" />
              Engineering Services
            </div>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 mb-6 tracking-tight leading-[1.1]">
              End-to-end digital <span className="text-[#4f47e6]">engineering & scale</span>.
            </h1>
            <p className="text-lg sm:text-xl text-slate-600 leading-relaxed font-normal">
              From architectural discovery to production deployment and automated pipelines, we execute every layer of your digital platform.
            </p>
          </div>
        </div>
      </section>

      {/* Service details */}
      {services.map((service, i) => (
        <section
          key={service.title}
          className={`py-20 lg:py-28 border-b border-slate-100 ${i % 2 === 1 ? "bg-[#fbfdff]" : "bg-white"}`}
        >
          <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className={`scroll-reveal ${i % 2 === 1 ? "lg:order-2" : ""}`}>
                <div className="w-14 h-14 rounded-2xl bg-white border border-slate-200/80 flex items-center justify-center mb-6 shadow-2xs">
                  <service.icon size={26} className="text-[#4f47e6]" />
                </div>
                <h2 className="font-display text-3xl lg:text-4xl font-extrabold text-slate-900 mb-2 tracking-tight">{service.title}</h2>
                <p className="text-sm font-mono font-semibold text-[#4f47e6] uppercase tracking-wider mb-4">{service.tagline}</p>
                <p className="text-slate-600 leading-relaxed mb-8 font-normal">{service.description}</p>
                <div className="grid sm:grid-cols-2 gap-3 mb-8">
                  {service.features.map((f) => (
                    <div key={f} className="flex items-center gap-2">
                      <CheckCircle size={16} className="text-[#4f47e6] flex-shrink-0" />
                      <span className="text-xs sm:text-sm text-slate-700 font-medium">{f}</span>
                    </div>
                  ))}
                </div>
                <Button asChild className="bg-[#4f47e6] hover:bg-[#4338ca] text-white rounded-xl h-11 px-6 font-semibold text-xs shadow-xs">
                  <Link to="/contact">
                    <span>Consult on {service.title}</span>
                    <ArrowRight size={13} className="ml-1" />
                  </Link>
                </Button>
              </div>
              <div className={`scroll-reveal scroll-reveal-delay-2 ${i % 2 === 1 ? "lg:order-1" : ""}`}>
                <ServiceVisual type={service.visual} />
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* Pricing Section */}
      <section className="py-24 lg:py-32 bg-white border-b border-slate-100">
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            className="text-center max-w-2xl mx-auto mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <div className="liquid-glass-pill inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-semibold tracking-widest text-[#4f47e6] uppercase mb-4 shadow-2xs">
              <span className="w-1.5 h-1.5 rounded-full bg-[#4f47e6] animate-pulse" />
              Investment
            </div>
            <h2 className="font-display text-4xl lg:text-5xl font-extrabold text-slate-900 mb-4 tracking-tight leading-[1.1]">
              Transparent packages, <span className="text-[#4f47e6]">measurable ROI</span>
            </h2>
            <p className="text-slate-600 text-base sm:text-lg font-normal leading-relaxed">
              Zero hidden fees. Complete repository ownership. Built around your operational deliverables.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-7 max-w-6xl mx-auto items-stretch">
            {packages.map((pkg, i) => (
              <motion.div
                key={pkg.name}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: i * 0.1, ease: "easeOut" }}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                className={`relative rounded-3xl p-8 flex flex-col justify-between transition-all duration-300 ${
                  pkg.popular
                    ? "liquid-glass border-2 border-[#4f47e6] shadow-[0_20px_50px_rgba(79,71,230,0.12)] bg-white/95"
                    : "liquid-glass-card hover:bg-white/90"
                }`}
              >
                {pkg.popular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                    <span className="inline-flex items-center px-4 py-1 rounded-full bg-[#4f47e6] text-white text-[11px] font-mono font-bold tracking-wider uppercase shadow-sm">
                      Most Requested
                    </span>
                  </div>
                )}

                <div>
                  <h3 className="font-display text-2xl font-bold text-slate-900 mb-1.5">{pkg.name}</h3>
                  <p className="text-xs sm:text-sm text-slate-600 mb-6 leading-relaxed font-normal min-h-[38px]">{pkg.description}</p>

                  <div className="mb-6 pb-5 border-b border-slate-200/60">
                    <span className="font-display text-3xl font-extrabold text-slate-900">{pkg.price}</span>
                    <span className="text-xs font-mono text-[#4f47e6] uppercase tracking-wider font-semibold ml-2">/ {pkg.period}</span>
                  </div>

                  <ul className="space-y-3 mb-8">
                    {pkg.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2.5">
                        <div className={`w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${
                          pkg.popular ? "bg-[#4f47e6] text-white" : "bg-white border border-slate-200 text-[#4f47e6]"
                        }`}>
                          <Check size={10} />
                        </div>
                        <span className="text-xs sm:text-sm text-slate-700 font-medium leading-relaxed">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Button
                  asChild
                  className={`w-full h-11 text-xs font-semibold rounded-xl transition-all duration-200 ${
                    pkg.popular
                      ? "bg-[#4f47e6] hover:bg-[#4338ca] text-white shadow-[0_4px_14px_rgba(79,71,230,0.3)]"
                      : "liquid-glass-pill hover:bg-white text-slate-800"
                  }`}
                >
                  <Link to="/contact">{pkg.cta}</Link>
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQSection />
    </>
  );
}

function ServiceVisual({ type }: { type: string }) {
  if (type === "web") {
    return (
      <div className="liquid-glass rounded-3xl p-6 shadow-[0_16px_45px_rgba(15,23,42,0.06)] overflow-hidden">
        <div className="flex flex-col h-full bg-white rounded-2xl border border-slate-200/80 overflow-hidden shadow-2xs">
          <div className="flex items-center gap-2 px-4 py-3 border-b border-slate-100 bg-slate-50">
            <div className="w-2.5 h-2.5 rounded-full bg-slate-300" />
            <div className="w-2.5 h-2.5 rounded-full bg-slate-300" />
            <div className="w-2.5 h-2.5 rounded-full bg-slate-200" />
            <div className="ml-4 h-2 w-32 bg-slate-200 rounded-full" />
          </div>
          <div className="p-6 space-y-4">
            <div className="h-6 w-3/4 bg-slate-200 rounded-md" />
            <div className="h-3 w-1/2 bg-slate-100 rounded-md" />
            <div className="grid grid-cols-2 gap-4 pt-2">
              <div className="h-20 bg-indigo-50/70 rounded-xl border border-[#4f47e6]/20 p-3 flex flex-col justify-between">
                <span className="text-[10px] font-mono text-[#4f47e6] font-bold">Sub-Second Core Vitals</span>
                <span className="text-lg font-bold text-slate-900">99 / 100</span>
              </div>
              <div className="h-20 bg-slate-50 rounded-xl border border-slate-200 p-3 flex flex-col justify-between">
                <span className="text-[10px] font-mono text-slate-500 font-semibold">Uptime SLA</span>
                <span className="text-lg font-bold text-slate-900">99.9%</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (type === "automation") {
    return (
      <div className="liquid-glass rounded-3xl p-6 shadow-[0_16px_45px_rgba(15,23,42,0.06)] flex items-center justify-center min-h-[300px]">
        <div className="w-full max-w-sm space-y-3">
          <div className="liquid-glass-card p-3.5 rounded-2xl flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-[#4f47e6] shadow-2xs">
                <Database size={15} />
              </div>
              <div>
                <div className="text-xs font-bold text-slate-900">Webhook Trigger Intake</div>
                <div className="text-[10px] text-slate-500 font-medium">Instant CRM Sync</div>
              </div>
            </div>
            <span className="text-[10px] font-mono font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-md">Live</span>
          </div>

          <div className="liquid-glass-card p-3.5 rounded-2xl flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-[#4f47e6] shadow-2xs">
                <Settings size={15} />
              </div>
              <div>
                <div className="text-xs font-bold text-slate-900">Data Transformation Engine</div>
                <div className="text-[10px] text-slate-500 font-medium">Invoicing & PDF Generation</div>
              </div>
            </div>
            <span className="text-[10px] font-mono font-bold text-[#4f47e6] bg-indigo-50 px-2 py-0.5 rounded-md">Automated</span>
          </div>

          <div className="liquid-glass-card p-3.5 rounded-2xl flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-[#4f47e6] shadow-2xs">
                <Zap size={15} />
              </div>
              <div>
                <div className="text-xs font-bold text-slate-900">Notification Handoff</div>
                <div className="text-[10px] text-slate-500 font-medium">WhatsApp / SMS Alert</div>
              </div>
            </div>
            <span className="text-[10px] font-mono font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-md">0ms Delay</span>
          </div>
        </div>
      </div>
    );
  }

  // Generic liquid visual card
  return (
    <div className="liquid-glass rounded-3xl p-6 shadow-[0_16px_45px_rgba(15,23,42,0.06)] flex flex-col justify-between min-h-[300px]">
      <div className="flex items-center gap-2 mb-4">
        <Share2 size={18} className="text-[#4f47e6]" />
        <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-900">Telemetry Dashboard</span>
      </div>
      <div className="grid grid-cols-2 gap-3 mb-4">
        <div className="liquid-glass-card rounded-2xl p-4">
          <div className="text-xl font-bold font-display text-[#4f47e6] mb-1">+340%</div>
          <div className="text-[11px] text-slate-500 font-medium">Conversion Lift</div>
        </div>
        <div className="liquid-glass-card rounded-2xl p-4">
          <div className="text-xl font-bold font-display text-slate-900 mb-1">40+ hrs</div>
          <div className="text-[11px] text-slate-500 font-medium">Ops Automated</div>
        </div>
      </div>
      <div className="liquid-glass-card rounded-2xl p-3.5 flex items-center justify-between">
        <span className="text-xs font-semibold text-slate-800">Production Reliability</span>
        <span className="text-xs font-mono font-bold text-[#4f47e6]">99.9% SLA</span>
      </div>
    </div>
  );
}

const faqs = [
  {
    q: "How long does a typical engineering project take?",
    a: "A marketing website typically takes 2–3 weeks, while a custom web application or business portal takes 4–6 weeks. We provide transparent weekly milestones and direct Slack channel access.",
  },
  {
    q: "What technologies do you use for development?",
    a: "We work with React, TypeScript, Next.js, Node.js, and PostgreSQL — modern, battle-tested tools that scale without proprietary handcuffs.",
  },
  {
    q: "Do you offer ongoing maintenance retainers?",
    a: "Yes. All packages include post-launch support. We also offer monthly engineering retainers for continuous feature improvements and SLA monitoring.",
  },
  {
    q: "Can you integrate with our existing database and CRM?",
    a: "Absolutely. We specialize in custom webhook pipelines and API architectures that seamlessly connect your existing tools and databases.",
  },
];

function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 lg:py-32 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="liquid-glass-pill inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-semibold tracking-widest text-[#4f47e6] uppercase mb-4 shadow-2xs">
            <span className="w-1.5 h-1.5 rounded-full bg-[#4f47e6] animate-pulse" />
            Common Inquiries
          </div>
          <h2 className="font-display text-3xl lg:text-4xl font-extrabold text-slate-900 mb-3 tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-slate-600 text-sm sm:text-base font-normal">
            Direct answers regarding our engineering standards and project delivery.
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-3.5">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div
                key={i}
                className={`rounded-2xl overflow-hidden transition-all duration-300 ${
                  isOpen ? "liquid-glass bg-white/95" : "liquid-glass-card hover:bg-white/85"
                }`}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="w-full flex items-center justify-between p-5 text-left group focus:outline-none"
                >
                  <span className={`font-display font-bold text-base transition-colors duration-200 ${
                    isOpen ? "text-[#4f47e6]" : "text-slate-800 group-hover:text-slate-950"
                  }`}>
                    {faq.q}
                  </span>
                  <div className={`w-8 h-8 rounded-xl flex items-center justify-center shrink-0 transition-all duration-200 ${
                    isOpen ? "bg-[#4f47e6] text-white" : "bg-white text-[#4f47e6] border border-slate-200/80"
                  }`}>
                    {isOpen ? <Minus size={16} /> : <Plus size={16} />}
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 pb-5 pt-0">
                        <div className="h-px bg-slate-200/60 mb-3" />
                        <p className="text-slate-600 text-xs sm:text-sm font-normal leading-relaxed">{faq.a}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
