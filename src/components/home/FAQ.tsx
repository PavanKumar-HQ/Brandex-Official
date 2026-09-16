import { useState } from "react";
import { Plus, Minus, HelpCircle, MessageSquare, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const faqs = [
  {
    q: "How long does a typical engineering sprint take?",
    a: "A bespoke marketing website and brand platform takes 2–3 weeks. Custom web applications, portals, and automated workflow engines take 4–6 weeks. We provide transparent weekly milestones and direct Slack channel access.",
  },
  {
    q: "Do I own 100% of the source code and designs?",
    a: "Yes. Unlike generic agencies or proprietary site-builders, you receive complete repository ownership, Figma design files, and deployment keys with zero ongoing platform lock-in fees.",
  },
  {
    q: "How do your solutions improve our search engine optimization (SEO)?",
    a: "Every project is built with semantic HTML5, sub-second Core Web Vitals, Schema.org JSON-LD structured data, dynamic OpenGraph assets, canonical URL routing, and search engine crawler optimizations out of the box.",
  },
  {
    q: "Can you integrate with our existing CRM, payment gateway, and database?",
    a: "Absolutely. We specialize in custom API architectures and webhook pipelines — integrating HubSpot, Salesforce, Stripe, Razorpay, WhatsApp Business API, PostgreSQL, Supabase, and proprietary backends seamlessly.",
  },
  {
    q: "What support and SLAs do you provide post-launch?",
    a: "All builds include dedicated 30 to 90-day hypercare support for updates, bug fixes, and performance tuning. We also offer ongoing engineering retainers for continuous feature iterations.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map((f) => ({
      "@type": "Question",
      "name": f.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": f.a,
      },
    })),
  };

  return (
    <section className="py-20 lg:py-28 relative overflow-hidden bg-white border-b border-slate-100 w-full" id="faq">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="w-full max-w-[1700px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 relative z-10">
        
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          
          {/* Left Column: Heading & Help Desk Card (5 cols) */}
          <motion.div
            className="lg:col-span-5"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6 }}
          >
            <div className="liquid-glass-pill inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-semibold tracking-widest text-[#4f47e6] uppercase mb-4 shadow-2xs">
              <span className="w-1.5 h-1.5 rounded-full bg-[#4f47e6] animate-pulse" />
              Direct Answers
            </div>
            
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 mb-4 tracking-tight leading-[1.15]">
              Frequently Asked <span className="text-[#4f47e6]">Questions</span>
            </h2>
            
            <p className="text-slate-600 text-base sm:text-lg font-normal mb-8 leading-relaxed">
              Direct answers regarding our engineering standards, sprint timelines, API integrations, and complete code ownership.
            </p>

            {/* Direct Support Hub Card */}
            <div className="liquid-glass-card rounded-3xl p-6 border border-slate-200 shadow-sm">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-xl bg-[#4f47e6] text-white flex items-center justify-center shadow-[0_4px_12px_rgba(79,71,230,0.3)]">
                  <MessageSquare size={18} />
                </div>
                <div>
                  <h3 className="font-display font-bold text-base text-slate-900">Have a custom question?</h3>
                  <p className="text-xs text-slate-500">Talk directly with our lead architects</p>
                </div>
              </div>
              <p className="text-xs text-slate-600 mb-5 leading-relaxed">
                Whether you need technical advice on your current stack or want a custom feasibility diagnostic, we're here to help.
              </p>
              <Button asChild variant="brand" size="sm" className="w-full rounded-xl h-10 font-bold text-xs shadow-xs">
                <Link to="/contact" className="flex items-center justify-center gap-2">
                  <span>Contact Engineering Team</span>
                  <ArrowRight size={13} />
                </Link>
              </Button>
            </div>
          </motion.div>

          {/* Right Column: Full-Width Accordion (7 cols) */}
          <motion.div
            className="lg:col-span-7 space-y-4"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.6 }}
          >
            {faqs.map((faq, i) => {
              const isOpen = openIndex === i;
              return (
                <div
                  key={i}
                  className={`liquid-glass-card rounded-2xl p-5 sm:p-6 transition-all duration-200 border ${
                    isOpen ? "border-[#4f47e6] bg-white shadow-md ring-1 ring-[#4f47e6]/15" : "border-slate-200 hover:border-slate-300"
                  }`}
                >
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : i)}
                    className="w-full flex items-center justify-between text-left group focus:outline-none cursor-pointer gap-4"
                    aria-expanded={isOpen}
                  >
                    <span
                      className={`font-display font-bold text-base sm:text-lg transition-colors duration-150 ${
                        isOpen ? "text-[#4f47e6]" : "text-slate-900 group-hover:text-[#4f47e6]"
                      }`}
                    >
                      {faq.q}
                    </span>
                    <div
                      className={`w-8 h-8 rounded-xl flex items-center justify-center shrink-0 transition-all duration-200 ${
                        isOpen
                          ? "bg-[#4f47e6] text-white shadow-[0_4px_10px_rgba(79,71,230,0.3)]"
                          : "bg-slate-100 text-slate-600 group-hover:bg-[#4f47e6] group-hover:text-white"
                      }`}
                    >
                      {isOpen ? <Minus size={15} /> : <Plus size={15} />}
                    </div>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <p className="text-slate-600 leading-relaxed text-sm sm:text-base pt-4 font-normal border-t border-slate-100 mt-3">
                          {faq.a}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </motion.div>

        </div>

      </div>
    </section>
  );
}
