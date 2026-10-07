import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Compass,
  FileText,
  Rocket,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Zap,
  ExternalLink,
  Layers,
  Database,
  CalendarDays,
  CreditCard,
  Building2,
  Users,
  Code2,
  Sliders,
  ChevronDown
} from "lucide-react";
import { Button } from "@/components/ui/button";
import SEOTags from "@/components/SEOTags";
import Breadcrumb from "@/components/Breadcrumb";
import { useCalBooking } from "@/hooks/useCalBooking";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useProductCheckout } from "@/contexts/ProductCheckoutContext";

const softwareProducts = [
  {
    id: "travel-crm",
    title: "Brandex Travel CRM & Itinerary Platform",
    badge: "SaaS Subscription",
    category: "Travel Tech & CRM",
    pricing: {
      type: "subscription",
      regularPrice: "₹2,000/mo",
      discountPrice: "₹1,500",
      cadence: "/month",
      savings: "Save ₹500/mo • ₹50/day",
      offerLabel: "Launch Offer (25% OFF)",
      ctaText: "Get Travel CRM (₹1,500/mo)",
      buyUrl: "/contact?service=Travel%20CRM%20Standard"
    },
    heroImage: "/projects/travel-crm/travel-crm-pdf-builder-preview.webp",
    description: "All-in-one Travel CRM and Itinerary Automation Platform for travel agencies, tour operators, and destination management companies (DMCs). Auto-converts Word and PDF itineraries into structured, editable travel proposals with dynamic vector PDF generation.",
    keywords: [
      "Travel CRM software",
      "Travel agency CRM",
      "Tour operator itinerary software",
      "Automated travel itinerary generator",
      "Travel quotation management"
    ],
    highlights: [
      "AI & Document Parser: Turns raw Word/PDF itineraries into structured days automatically",
      "Dynamic Vector PDF Generation with agency white-labeling and banking QR codes",
      "Hotel & Activity Directory: Centralized database of destinations, rates, and inclusions",
      "Enquiry & Sales Pipeline: Capture leads from WhatsApp, email, and web with status tracking",
      "Zero setup fees, free data migration & dedicated onboarding support"
    ],
    productUrl: "/products/travel-crm",
    popular: true
  },
  {
    id: "invoice-builder",
    title: "Brandex Invoice Builder & Inventory Suite",
    badge: "Lifetime License (One-Time)",
    category: "Billing & Operations",
    pricing: {
      type: "lifetime",
      regularPrice: "₹8,000",
      discountPrice: "₹6,000",
      cadence: "Lifetime Access",
      savings: "Save ₹2,000 • Pay Once, Own Forever",
      offerLabel: "Launch Offer (25% OFF)",
      ctaText: "Get Lifetime License (₹6,000)",
      buyUrl: "/contact?service=Invoice%20Builder%20Lifetime"
    },
    heroImage: "/products/invoice-builder/brandex-invoice-builder-dashboard.webp",
    description: "Real-time invoicing, stock inventory synchronization, and revenue tracking software engineered for SMEs, agencies, freelancers, and growing retail businesses without recurring monthly subscription fees.",
    keywords: [
      "Invoice software India",
      "GST billing software",
      "Invoice builder with inventory",
      "Lifetime invoice software without subscription",
      "Small business billing system"
    ],
    highlights: [
      "Pay Once, Own Forever: Lifetime license with zero recurring monthly subscription costs",
      "Live Invoicing with Auto Tax & GST Calculations: Line-item discounts and dynamic UPI QR",
      "Inventory & SKU Stock Sync: Automatic stock decrement upon invoice generation",
      "12+ Professional PDF Templates: Clean Minimal, Corporate Blue, and Modern Dark styles",
      "Customer Directory & Payment Status: Instant Paid, Pending, and Overdue tracking"
    ],
    productUrl: "/products/invoice-builder",
    popular: false
  }
];

const upcomingProducts = [
  {
    title: "AI WhatsApp Lead Dispatcher & Triage Bot",
    category: "Autonomous Sales AI",
    status: "In Development",
    desc: "Autonomous Meta Cloud API webhook engine that qualifies incoming customer enquiries on WhatsApp, syncs leads to your CRM, and schedules meetings 24/7.",
    eta: "Q4 2026",
    tag: "Waitlist Open"
  },
  {
    title: "Brandex Zero-Trust Security Sentinel",
    category: "Cybersecurity & Compliance",
    status: "Beta Testing",
    desc: "Automated vulnerability scanner and DPDP compliance auditing engine designed for Indian SMEs and tech startups.",
    eta: "Q4 2026",
    tag: "Private Beta"
  }
];

export default function Products() {
  useScrollReveal();
  const { openBooking } = useCalBooking();
  const { openCheckout } = useProductCheckout();
  const [activeTab, setActiveTab] = useState<"all" | "subscription" | "lifetime">("all");

  const filteredProducts = softwareProducts.filter((p) => {
    if (activeTab === "all") return true;
    return p.pricing.type === activeTab;
  });

  return (
    <article className="min-h-screen bg-background text-foreground">
      {/* ── SEO Metadata & Rich Structured Data ── */}
      <SEOTags
        title="Software Products, SaaS Tools & Lifetime Licenses | Brandex"
        description="Explore ready-to-buy software products by Brandex: Travel CRM (₹1,500/mo) and Invoice Builder (₹6,000 Lifetime). Streamline operations with dedicated business software."
        keywords="Brandex software products, Travel CRM software, travel agency CRM, invoice software, GST billing software, lifetime invoice software, SaaS tools Bangalore, business automation software"
        canonicalUrl="https://www.brandex.co.in/products"
        type="website"
        image="https://www.brandex.co.in/og/services.png"
        schema={{
          "@type": "ItemList",
          "@id": "https://www.brandex.co.in/products#catalog",
          "name": "Brandex Commercial Software Products Catalog",
          "description": "Production software products, SaaS applications, and lifetime business tools built and sold by Brandex.",
          "itemListElement": softwareProducts.map((p, idx) => ({
            "@type": "ListItem",
            "position": idx + 1,
            "name": p.title,
            "description": p.description,
            "url": `https://www.brandex.co.in${p.productUrl}`
          }))
        }}
      />

      {/* ── Top Hero Section ── */}
      <header className="relative pt-4 sm:pt-6 pb-10 sm:pb-14 border-b border-border/40 bg-gradient-to-b from-primary/[0.03] via-background to-background overflow-hidden">
        <div className="absolute top-1/2 right-10 -translate-y-1/2 w-96 h-96 bg-accent/[0.04] rounded-full blur-[140px] pointer-events-none" />

        <div className="container mx-auto px-6 relative z-10">
          <Breadcrumb items={[{ label: "Software Products" }]} className="mb-5" />

          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
            <div className="max-w-3xl space-y-4">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-accent/10 border border-accent/20 text-accent text-xs font-bold tracking-wide uppercase">
                <Rocket size={13} className="text-accent" />
                Commercial Software Products &amp; Subscriptions
              </div>

              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground leading-[1.1]">
                Software Built to Run &amp; Scale Your Business
              </h1>

              <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed font-normal">
                Ready-to-deploy software products built by Brandex. Available via flexible monthly subscriptions or one-time lifetime licenses with zero recurring fees.
              </p>
            </div>

            {/* Quick Filter Tabs */}
            <div className="flex items-center gap-2 bg-card p-1.5 rounded-xl border border-border/70 shadow-sm shrink-0 self-start lg:self-end">
              <button
                onClick={() => setActiveTab("all")}
                className={`px-4 py-2 rounded-lg text-xs font-semibold transition-all ${activeTab === "all"
                    ? "bg-accent text-accent-foreground shadow-sm"
                    : "text-muted-foreground hover:text-foreground"
                  }`}
              >
                All Products ({softwareProducts.length})
              </button>
              <button
                onClick={() => setActiveTab("subscription")}
                className={`px-4 py-2 rounded-lg text-xs font-semibold transition-all ${activeTab === "subscription"
                    ? "bg-accent text-accent-foreground shadow-sm"
                    : "text-muted-foreground hover:text-foreground"
                  }`}
              >
                Monthly Subscriptions
              </button>
              <button
                onClick={() => setActiveTab("lifetime")}
                className={`px-4 py-2 rounded-lg text-xs font-semibold transition-all ${activeTab === "lifetime"
                    ? "bg-accent text-accent-foreground shadow-sm"
                    : "text-muted-foreground hover:text-foreground"
                  }`}
              >
                Lifetime Licenses
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* ── Main Products Grid (For Sale) ── */}
      <section className="py-14 lg:py-20 bg-background relative">
        <div className="container mx-auto px-6">
          <div className="space-y-16">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className="bg-card border border-border/70 rounded-3xl p-6 sm:p-10 lg:p-12 shadow-xl relative overflow-hidden transition-all duration-300 hover:border-accent/40"
              >
                {/* Popular Ribbon if applicable */}
                {product.popular && (
                  <div className="absolute top-0 right-0">
                    <span className="inline-block bg-accent text-accent-foreground font-bold text-[10px] uppercase tracking-widest px-4 py-1.5 rounded-bl-xl shadow-md">
                      Flagship Product
                    </span>
                  </div>
                )}

                <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
                  {/* Left Column: Product Details & Pricing */}
                  <div className="lg:col-span-6 space-y-6">
                    <div className="flex flex-wrap items-center gap-2.5">
                      <span className="text-xs font-bold text-accent uppercase tracking-wider px-3 py-1 bg-accent/10 rounded-full border border-accent/20">
                        {product.badge}
                      </span>
                      <span className="text-xs font-bold px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-500 border border-emerald-500/20">
                        {product.pricing.offerLabel}
                      </span>
                    </div>

                    <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground leading-tight">
                      <Link to={product.productUrl} className="hover:text-accent transition-colors">
                        {product.title}
                      </Link>
                    </h2>

                    <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                      {product.description}
                    </p>

                    {/* Pricing Box */}
                    <div className="p-5 rounded-2xl bg-secondary/40 border border-border/70 shadow-sm">
                      <div className="flex flex-wrap items-baseline gap-3">
                        <span className="text-lg sm:text-xl font-bold text-muted-foreground/60 line-through">
                          {product.pricing.regularPrice}
                        </span>
                        <span className="font-display text-3xl sm:text-4xl font-extrabold text-foreground">
                          {product.pricing.discountPrice}
                        </span>
                        <span className="text-accent font-semibold text-sm">
                          {product.pricing.cadence}
                        </span>
                      </div>
                      <p className="text-xs font-medium text-emerald-500 mt-1">
                        {product.pricing.savings}
                      </p>
                    </div>

                    {/* Key Highlights */}
                    <div className="space-y-2.5 pt-1">
                      <p className="text-xs font-bold uppercase tracking-wider text-foreground">
                        Key Features Included:
                      </p>
                      <ul className="space-y-2">
                        {product.highlights.map((h, i) => (
                          <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-foreground/85 leading-relaxed">
                            <CheckCircle2 size={16} className="text-emerald-500 shrink-0 mt-0.5" />
                            <span>{h}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* CTAs */}
                    <div className="flex flex-wrap items-center gap-3.5 pt-3">
                      <Button
                        onClick={() =>
                          openCheckout({
                            productId: product.id,
                            title: product.title,
                            price: product.id === "invoice-builder" ? 6000 : 1500,
                            regularPrice: product.id === "invoice-builder" ? 8000 : 2000,
                            cadence: product.pricing.cadence,
                            badge: product.pricing.offerLabel,
                            description: product.description,
                          })
                        }
                        size="lg"
                        className="bg-accent text-accent-foreground hover:bg-accent/90 shadow-lg shadow-accent/20 font-semibold text-sm px-7 h-12 cursor-pointer"
                      >
                        {product.pricing.ctaText} <ArrowRight size={15} className="ml-1.5" />
                      </Button>

                      <Button
                        asChild
                        size="lg"
                        className="border-2 border-border/80 bg-card text-foreground hover:bg-accent hover:text-white hover:border-accent text-sm font-semibold h-12 px-6 shadow-sm transition-all duration-200 cursor-pointer"
                      >
                        <Link to={product.productUrl}>
                          View Full Product Details
                        </Link>
                      </Button>

                      <button
                        onClick={() => openBooking()}
                        className="text-xs font-semibold text-muted-foreground hover:text-foreground flex items-center gap-1.5 underline underline-offset-4 py-2"
                      >
                        <CalendarDays size={14} className="text-accent" />
                        Book Live Product Demo
                      </button>
                    </div>
                  </div>

                  {/* Right Column: Live Mockup / Browser Preview */}
                  <div className="lg:col-span-6">
                    <Link
                      to={product.productUrl}
                      className="block group relative rounded-2xl overflow-hidden border border-border/80 shadow-2xl bg-card transition-all duration-300 hover:border-accent/40"
                    >
                      <div className="absolute top-0 left-0 right-0 h-7 bg-background/95 backdrop-blur border-b border-border/50 flex items-center px-3.5 gap-1.5 z-10">
                        <div className="w-2.5 h-2.5 rounded-full bg-destructive/60" />
                        <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/60" />
                        <div className="w-2.5 h-2.5 rounded-full bg-green-500/60" />
                        <span className="ml-2 text-[11px] font-mono text-muted-foreground">
                          app.brandex.co.in/{product.id}
                        </span>
                      </div>

                      <img
                        src={product.heroImage}
                        alt={`${product.title} Dashboard Interface`}
                        className="w-full h-auto object-cover pt-7 transition-transform duration-500 group-hover:scale-[1.02]"
                        loading="eager"
                      />

                      <div className="absolute inset-0 bg-primary/80 backdrop-blur-xs flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <span className="bg-accent text-accent-foreground px-5 py-2.5 rounded-full text-xs font-bold shadow-lg flex items-center gap-1.5">
                          Explore {product.title.split(" ")[1]} Features <ArrowRight size={13} />
                        </span>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Distinct Cross-Link: Case Studies & Custom Services ── */}
      <section className="py-14 bg-secondary/30 border-t border-border/60">
        <div className="container mx-auto px-6">
          <div className="bg-card border border-border/70 rounded-3xl p-8 sm:p-10 shadow-md flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-2 text-center md:text-left">
              <span className="text-[11px] font-bold text-accent uppercase tracking-widest">
                Looking for Bespoke Engineering?
              </span>
              <h3 className="font-display text-2xl sm:text-3xl font-bold text-foreground">
                Need Custom Software or Want to See Our Past Client Work?
              </h3>
              <p className="text-sm text-muted-foreground max-w-2xl">
                In addition to our software products, Brandex designs, builds, and maintains custom web architectures, automated enterprise portals, and mobile platforms for businesses worldwide.
              </p>
            </div>

            <div className="flex flex-wrap gap-3 shrink-0">
              <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 font-semibold shadow-md">
                <Link to="/case-studies">
                  Explore Client Case Studies <ArrowRight size={15} className="ml-1.5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-border hover:bg-secondary font-medium">
                <Link to="/services">View Services</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* ── Upcoming Software Suite (In Active Development) ── */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <p className="text-xs font-semibold uppercase tracking-widest text-accent mb-2.5">
              R&amp;D Pipeline
            </p>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-3">
              Upcoming Software &amp; Automation Tools
            </h2>
            <p className="text-sm text-muted-foreground leading-relaxed">
              New business software products currently undergoing beta testing and active engineering by the Brandex labs team.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {upcomingProducts.map((up) => (
              <div
                key={up.title}
                className="bg-card border border-border/70 rounded-2xl p-7 sm:p-8 flex flex-col justify-between shadow-sm hover:border-accent/30 transition-all"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-accent uppercase tracking-wider px-2.5 py-0.5 bg-accent/10 rounded">
                      {up.category}
                    </span>
                    <span className="text-[11px] font-semibold px-2.5 py-0.5 rounded-full bg-secondary text-muted-foreground border border-border">
                      {up.tag} • ETA {up.eta}
                    </span>
                  </div>

                  <h3 className="font-display font-bold text-xl text-foreground">
                    {up.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                    {up.desc}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-border/50 flex items-center justify-between">
                  <span className="text-xs font-semibold text-emerald-500 flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    In Active Development
                  </span>

                  <Button asChild size="sm" variant="outline" className="border-border hover:bg-secondary text-xs">
                    <Link to="/contact?service=Software%20Waitlist">
                      Join Early Access Waitlist
                    </Link>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Product FAQ ── */}
      <section className="py-16 bg-secondary/20 border-t border-border/60">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <p className="text-xs font-semibold uppercase tracking-widest text-accent mb-2">
              Frequently Asked Questions
            </p>
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-foreground">
              Purchasing, Licensing &amp; Customization
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-card p-6 rounded-2xl border border-border/70 space-y-2">
              <h4 className="font-bold text-base text-foreground">How does the lifetime license for Invoice Builder work?</h4>
              <p className="text-xs text-muted-foreground leading-relaxed">
                You make a single one-time payment of ₹6,000. You receive full lifetime access to generate unlimited invoices, manage inventory, and export PDFs with zero recurring monthly subscription charges.
              </p>
            </div>

            <div className="bg-card p-6 rounded-2xl border border-border/70 space-y-2">
              <h4 className="font-bold text-base text-foreground">Can Brandex customize these products for our specific business workflows?</h4>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Yes! Because both Travel CRM and Invoice Builder are developed in-house by Brandex engineers, we can customize fields, add unique payment gateways, integrate custom ERPs, and tailor templates to your exact requirements.
              </p>
            </div>

            <div className="bg-card p-6 rounded-2xl border border-border/70 space-y-2">
              <h4 className="font-bold text-base text-foreground">How do I get started with Travel CRM?</h4>
              <p className="text-xs text-muted-foreground leading-relaxed">
                You can start immediately for ₹1,500/month with zero setup fees. Our team assists with free itinerary file and hotel directory data migration to ensure your agency transitions seamlessly.
              </p>
            </div>

            <div className="bg-card p-6 rounded-2xl border border-border/70 space-y-2">
              <h4 className="font-bold text-base text-foreground">What kind of support is included?</h4>
              <p className="text-xs text-muted-foreground leading-relaxed">
                All software products come with dedicated onboarding, technical documentation, bug warranty, and email/WhatsApp support directly from our Bangalore engineering office.
              </p>
            </div>
          </div>
        </div>
      </section>
    </article>
  );
}
