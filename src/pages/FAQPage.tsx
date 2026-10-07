import { useState, useMemo, useEffect } from "react";
import { Plus, Minus, Search, MessageSquare } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import SEOTags from "@/components/SEOTags";
import Breadcrumb from "@/components/Breadcrumb";

const faqs = [
  // General
  {
    category: "General",
    q: "What exactly does Brandex do?",
    a: "Brandex is an end-to-end Technology, Digital Transformation, Business Solutions, and Infrastructure Company. We help businesses build, automate, secure, design, modernize, and scale — covering everything from software development and AI to branding, interior design, printing, HVAC, solar, and facility management.",
  },
  {
    category: "General",
    q: "Is Brandex only a software company?",
    a: "No. While we began in technology, Brandex has grown into a complete business solutions company. We handle your software, your office setup, your branding, your digital marketing, your physical infrastructure — everything a business needs to launch and grow.",
  },
  {
    category: "General",
    q: "Where is Brandex based? Do you work with clients outside Bangalore?",
    a: "We're headquartered in Bangalore, India. We work with clients across India and internationally. Software, digital marketing, AI, and automation projects are delivered globally. Physical services like HVAC, CCTV, and interior design are primarily served in Bangalore and surrounding regions.",
  },
  {
    category: "General",
    q: "How do I get started with Brandex?",
    a: "Simply fill out our contact form or reach us on WhatsApp. We'll schedule a free consultation call where we understand your business, identify your needs, and propose the right solution — with a clear timeline and pricing.",
  },
  {
    category: "General",
    q: "Do you offer free consultations?",
    a: "Yes. Our initial consultation is completely free. We believe in understanding your business goals before recommending any solution. There's no obligation to proceed after the consultation.",
  },
  {
    category: "General",
    q: "How long does a typical project take?",
    a: "It depends on complexity. A marketing website typically takes 2–3 weeks. A custom software application takes 4–8 weeks. Office setup or interior projects depend on scope. We always provide a detailed project timeline before we begin.",
  },
  {
    category: "General",
    q: "Do you offer ongoing support and maintenance?",
    a: "Yes. We offer Annual Maintenance Contracts (AMCs) for software, websites, hardware, CCTV, networking, and AC systems. We believe in long-term partnerships, not one-off transactions.",
  },
  // Software & Web
  {
    category: "Software & Web",
    q: "Can you build a custom software system for my business?",
    a: "Absolutely. We build custom ERP, CRM, billing, inventory, POS, school management, hospital management, booking systems, admin panels, and more. Every system is designed around your specific workflows.",
  },
  {
    category: "Software & Web",
    q: "What technologies do you use for software development?",
    a: "We work with React, Next.js, Node.js, Python, PostgreSQL, MySQL, and modern cloud platforms. We choose the best technology stack based on your project requirements, not trends.",
  },
  {
    category: "Software & Web",
    q: "Can you redesign my existing website?",
    a: "Yes. Website redesign is one of our most popular services. We audit your current site, identify performance and UX issues, and rebuild it to be fast, modern, secure, and conversion-optimized.",
  },
  {
    category: "Software & Web",
    q: "Do you build ecommerce stores?",
    a: "Yes. We build custom ecommerce platforms, Shopify stores, and WooCommerce sites. We handle product pages, payments, inventory management, order tracking, and delivery integration.",
  },
  {
    category: "Software & Web",
    q: "Can you build mobile apps?",
    a: "Yes. We develop Android apps, iOS apps, cross-platform apps (Flutter/React Native), and Progressive Web Apps (PWAs) for businesses of all sizes.",
  },
  // AI & Automation
  {
    category: "AI & Automation",
    q: "What kind of AI solutions do you offer?",
    a: "We build AI chatbots, AI assistants, AI agents, document automation, workflow automation, WhatsApp bots, email automation, and custom AI integrations with your existing systems. We help you move from manual to intelligent.",
  },
  {
    category: "AI & Automation",
    q: "Can you automate my WhatsApp customer support?",
    a: "Yes. We build WhatsApp automation systems that handle inquiries, send order updates, collect leads, answer FAQs, and route complex cases to human agents — 24/7 without manual effort.",
  },
  {
    category: "AI & Automation",
    q: "Do I need a large budget to use AI?",
    a: "No. AI automation can be implemented at various scales and budgets. A basic WhatsApp bot or automated email system is very affordable. We help you find the right AI entry point for your business size.",
  },
  // Cybersecurity & IT
  {
    category: "Cybersecurity & IT",
    q: "What cybersecurity services do you offer?",
    a: "We offer penetration testing, vulnerability assessments, security audits, firewall configuration, endpoint security, email security, backup solutions, security awareness training, and incident response.",
  },
  {
    category: "Cybersecurity & IT",
    q: "Can you set up Microsoft 365 or Google Workspace for my company?",
    a: "Yes. We handle the full setup, migration, user management, and training for Microsoft 365 and Google Workspace — including business email configuration and security settings.",
  },
  {
    category: "Cybersecurity & IT",
    q: "Do you provide server setup and cloud migration?",
    a: "Yes. We handle server room setup, cloud migration, NAS storage, remote monitoring, and backup systems. We help businesses modernize their IT infrastructure for reliability and scalability.",
  },
  // Physical Infrastructure
  {
    category: "Infrastructure",
    q: "Do you install CCTV and access control systems?",
    a: "Yes. We install CCTV surveillance systems, access control, biometric attendance systems, video doorbells, and smart security solutions for offices and commercial spaces.",
  },
  {
    category: "Infrastructure",
    q: "Can you set up office networking and WiFi?",
    a: "Yes. We design and install structured cabling, office networking, enterprise WiFi, server rooms, and rack installations. We ensure your office has fast, secure, and reliable connectivity.",
  },
  {
    category: "Infrastructure",
    q: "Do you install AC systems for offices?",
    a: "Yes. We install split ACs, VRV/VRF systems, central air conditioning, ducting, and ventilation systems. We also offer AMC contracts for regular maintenance and servicing.",
  },
  {
    category: "Infrastructure",
    q: "Do you offer solar panel installation?",
    a: "Yes. We provide rooftop solar installation, commercial solar projects, solar consultation, energy monitoring systems, and energy optimization planning for businesses.",
  },
  {
    category: "Infrastructure",
    q: "Can Brandex design and furnish our office?",
    a: "Yes. We offer complete office interior design — workspace planning, false ceiling, lighting design, wall graphics, reception design — along with modular and ergonomic furniture supply.",
  },
  // Branding & Marketing
  {
    category: "Branding & Marketing",
    q: "Do you do logo and brand identity design?",
    a: "Yes. We provide complete brand identity services — logo design, brand strategy, brand guidelines, stationery design, packaging design, social media branding, and corporate identity kits.",
  },
  {
    category: "Branding & Marketing",
    q: "Can you run Google and Meta ads for my business?",
    a: "Yes. We run Google Ads, Meta (Facebook/Instagram) Ads, and performance marketing campaigns. We handle strategy, creative, targeting, optimization, and detailed reporting.",
  },
  {
    category: "Branding & Marketing",
    q: "Do you offer SEO services?",
    a: "Yes. We offer technical SEO audits, on-page optimization, keyword strategy, link building, local SEO, and performance analytics. We focus on sustainable organic growth.",
  },
  // Printing
  {
    category: "Printing",
    q: "What printing services does Brandex offer?",
    a: "We print business cards, brochures, flyers, catalogues, posters, banners, signboards, ACP boards, LED signage, vinyl, stickers, letterheads, ID cards, office branding, vehicle branding, packaging, and promotional merchandise.",
  },
  {
    category: "Printing",
    q: "Can you do office branding and signage?",
    a: "Yes. We handle complete office branding — from reception wall graphics and signboards to vehicle branding and promotional merchandise. We work with your brand guidelines to ensure consistency.",
  },
  // Pricing & Process
  {
    category: "Pricing",
    q: "How does Brandex price its services?",
    a: "Pricing depends on the scope, complexity, and timeline of your project. We offer transparent, project-based pricing with no hidden costs. Contact us for a free quote tailored to your specific requirements.",
  },
  {
    category: "Pricing",
    q: "Do you offer payment plans?",
    a: "Yes. We typically structure payments in milestones — a deposit to begin, milestone payments during the project, and a final payment upon delivery. We're flexible based on project size and client relationship.",
  },
  {
    category: "Pricing",
    q: "Can Brandex handle a complete business setup from scratch?",
    a: "Yes. This is one of our most comprehensive offerings. We can handle software, website, branding, printing, office interior, furniture, HVAC, networking, CCTV, solar, and digital marketing — everything you need to launch and run a business under one roof.",
  },
];

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const { hash } = useLocation();

  const categories = Array.from(new Set(faqs.map((f) => f.category)));

  const filtered = useMemo(() => {
    if (!searchQuery.trim()) return faqs;
    const lowerQuery = searchQuery.toLowerCase();
    return faqs.filter(
      (f) => f.q.toLowerCase().includes(lowerQuery) || f.a.toLowerCase().includes(lowerQuery)
    );
  }, [searchQuery]);

  // Handle deep linking
  useEffect(() => {
    if (hash) {
      const id = hash.replace("#", "");
      const index = faqs.findIndex(
        (f) => f.q.toLowerCase().replace(/[^a-z0-9]+/g, "-") === id
      );
      if (index !== -1) {
        setOpenIndex(index);
        setTimeout(() => {
          document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "center" });
        }, 100);
      }
    }
  }, [hash]);

  const generateSlug = (text: string) => text.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)+/g, "");

  const getFaqsByCategory = (category: string) => filtered.filter((f) => f.category === category);

  return (
    <>
      <SEOTags 
        title="Frequently Asked Questions | Services, Pricing & Process | Brandex"
        description="Find clear answers to common questions about Brandex custom software engineering, web development, pricing models, delivery timelines, and support."
        keywords="brandex faq, software development cost, web development process, AMC pricing, tech support bangalore"
        canonicalUrl="https://www.brandex.co.in/faq"
        image="https://www.brandex.co.in/og/faq.png"
        schema={[
          {
            "@type": "WebPage",
            "@id": "https://www.brandex.co.in/faq#webpage",
            "name": "Brandex FAQs",
            "description": "Frequently asked questions regarding Brandex software development, web engineering, pricing, and support.",
            "url": "https://www.brandex.co.in/faq",
            "isPartOf": { "@id": "https://www.brandex.co.in/#website" }
          },
          {
            "@type": "FAQPage",
            "@id": "https://www.brandex.co.in/faq#faqpage",
            "mainEntity": faqs.map((faq) => ({
              "@type": "Question",
              "name": faq.q,
              "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.a,
              },
            })),
          }
        ]}
      />

      <div className="min-h-screen bg-background">
        <div className="pt-4 sm:pt-6 pb-8 px-6">
          <div className="container mx-auto max-w-4xl text-center">
            <Breadcrumb items={[{ label: "FAQ" }]} className="mb-6 justify-center" />
            <h1 className="text-4xl md:text-5xl font-bold font-display text-foreground mb-4">
              Frequently Asked Questions
            </h1>
            <p className="text-lg text-muted-foreground">
              Everything you need to know about working with Brandex.
            </p>
          </div>
        </div>

        <div className="container mx-auto px-6 py-12">
          <div className="grid lg:grid-cols-12 gap-12">
            {/* Sticky Sidebar */}
            <div className="lg:col-span-4 lg:col-start-1">
              <div className="sticky top-28 space-y-8">
                {/* Search */}
                <div className="relative">
                  <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                  <input
                    type="text"
                    placeholder="Search all FAQs..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-12 pr-4 py-3.5 bg-card border border-border/60 rounded-xl focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-all text-foreground shadow-sm"
                  />
                </div>

                {/* Categories Desktop */}
                <div className="hidden lg:block">
                  <h3 className="font-semibold text-lg mb-4">Categories</h3>
                  <div className="flex flex-col gap-1.5 border-l-2 border-border/50">
                    {categories.map((cat) => (
                      <button
                        key={cat}
                        onClick={() => {
                          const el = document.getElementById(`category-${generateSlug(cat)}`);
                          el?.scrollIntoView({ behavior: "smooth", block: "start" });
                        }}
                        className="text-left px-4 py-2 text-muted-foreground hover:text-foreground hover:bg-secondary/30 transition-colors border-l-2 border-transparent hover:border-accent -ml-[2px]"
                      >
                        {cat}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Contact CTA */}
                <div className="bg-secondary/30 rounded-2xl p-6 border border-border/50">
                  <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center mb-4 text-accent">
                    <MessageSquare size={24} />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">Still need help?</h3>
                  <p className="text-muted-foreground text-sm mb-6 leading-relaxed">
                    Can't find the answer you're looking for? Please chat to our friendly team.
                  </p>
                  <Button asChild className="w-full bg-foreground text-background hover:bg-foreground/90">
                    <Link to="/contact">Get in touch</Link>
                  </Button>
                </div>
              </div>
            </div>

            {/* Content Area */}
            <div className="lg:col-span-8 space-y-16">
              {filtered.length > 0 ? (
                categories.map((category) => {
                  const categoryFaqs = getFaqsByCategory(category);
                  if (categoryFaqs.length === 0) return null;

                  return (
                    <div key={category} id={`category-${generateSlug(category)}`} className="scroll-mt-32">
                      <h2 className="text-2xl font-bold mb-6 font-display flex items-center gap-3">
                        <span className="w-2 h-2 rounded-full bg-accent inline-block"></span>
                        {category}
                      </h2>
                      <div className="space-y-4">
                        {categoryFaqs.map((faq) => {
                          const globalIndex = faqs.findIndex((f) => f.q === faq.q);
                          const isOpen = openIndex === globalIndex;
                          const slug = generateSlug(faq.q);

                          return (
                            <motion.div
                              key={globalIndex}
                              initial={{ opacity: 0, y: 20 }}
                              whileInView={{ opacity: 1, y: 0 }}
                              viewport={{ once: true, margin: "-20px" }}
                              transition={{ duration: 0.3 }}
                              id={slug}
                              className="scroll-mt-32"
                            >
                              <div className={`bg-card border rounded-xl overflow-hidden transition-colors duration-300 ${isOpen ? "border-accent/30 shadow-sm" : "border-border/60 hover:border-accent/20"}`}>
                                <button
                                  onClick={() => setOpenIndex(isOpen ? null : globalIndex)}
                                  className="w-full flex items-center justify-between p-5 text-left group"
                                >
                                  <span className={`font-medium pr-4 transition-colors ${isOpen ? "text-accent" : "text-foreground"}`}>
                                    {faq.q}
                                  </span>
                                  <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-colors ${isOpen ? "bg-accent/10" : "bg-secondary group-hover:bg-accent/5"}`}>
                                    {isOpen ? <Minus size={16} className="text-accent" /> : <Plus size={16} className="text-muted-foreground group-hover:text-accent" />}
                                  </div>
                                </button>
                                <AnimatePresence initial={false}>
                                  {isOpen && (
                                    <motion.div
                                      initial={{ height: 0, opacity: 0 }}
                                      animate={{ height: "auto", opacity: 1 }}
                                      exit={{ height: 0, opacity: 0 }}
                                      transition={{ duration: 0.3, ease: "easeInOut" }}
                                      className="overflow-hidden"
                                    >
                                      <div className="px-5 pb-5 pt-0">
                                        <div className="h-px bg-border/40 mb-4" />
                                        <p className="text-muted-foreground leading-relaxed text-[15px]">{faq.a}</p>
                                        <div className="mt-4 flex justify-end">
                                          <button
                                            onClick={(e) => {
                                              e.stopPropagation();
                                              navigator.clipboard.writeText(`${window.location.origin}/faq#${slug}`);
                                            }}
                                            className="text-xs text-muted-foreground hover:text-accent transition-colors flex items-center gap-1.5"
                                          >
                                            Copy Link
                                          </button>
                                        </div>
                                      </div>
                                    </motion.div>
                                  )}
                                </AnimatePresence>
                              </div>
                            </motion.div>
                          );
                        })}
                      </div>
                    </div>
                  );
                })
              ) : (
                <div className="text-center py-20 bg-secondary/20 rounded-2xl border border-border/50">
                  <Search className="w-10 h-10 text-muted-foreground mx-auto mb-4 opacity-50" />
                  <h3 className="text-lg font-semibold mb-2">No results found</h3>
                  <p className="text-muted-foreground">We couldn't find any FAQs matching "{searchQuery}".</p>
                  <Button 
                    variant="link" 
                    onClick={() => setSearchQuery("")}
                    className="mt-4 text-accent"
                  >
                    Clear search
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
