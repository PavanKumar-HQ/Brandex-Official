import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  FileText,
  Package,
  TrendingUp,
  Users,
  LayoutTemplate,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Zap,
  Download,
  Receipt,
  Layers,
  Database,
  Calendar,
  IndianRupee,
  Sliders,
  ExternalLink,
  Code2,
  Lock,
  ChevronDown
} from "lucide-react";
import { Button } from "@/components/ui/button";
import SEOTags from "@/components/SEOTags";
import Breadcrumb from "@/components/Breadcrumb";
import CTABanner from "@/components/home/CTABanner";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useCalBooking } from "@/hooks/useCalBooking";
import { useProductCheckout } from "@/contexts/ProductCheckoutContext";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

// Mock Inventory Data for Interactive Demo
const sampleInventory = [
  { sku: "PRD-WEB-01", name: "Web Engineering Sprint", category: "Digital Services", stock: "Unlimited", price: "₹85,000", status: "Active" },
  { sku: "PRD-UIX-02", name: "UI/UX Design System", category: "Design", stock: "Unlimited", price: "₹35,000", status: "Active" },
  { sku: "PRD-SRV-03", name: "Cloud Server Deployment", category: "Infrastructure", stock: "14 units", price: "₹24,500", status: "In Stock" },
  { sku: "PRD-SEC-04", name: "Zero-Trust Security Audit", category: "Security", stock: "4 slots", price: "₹45,000", status: "Low Stock" },
  { sku: "PRD-AMC-05", name: "Annual Maintenance Retainer", category: "Support", stock: "Unlimited", price: "₹18,000/mo", status: "Active" }
];

export default function InvoiceBuilder() {
  useScrollReveal();
  const { openBooking } = useCalBooking();
  const { openCheckout } = useProductCheckout();
  const [activeTab, setActiveTab] = useState<"dashboard" | "editor" | "templates" | "inventory">("dashboard");

  // Structured Data (Product, SoftwareApplication, FAQPage) with full Google Merchant Listings & Rich Snippet compliance
  const productSchema = {
    "@type": "Product",
    "@id": "https://www.brandex.co.in/products/invoice-builder#product",
    "name": "Brandex Invoice Builder",
    "image": "https://www.brandex.co.in/products/invoice-builder/brandex-invoice-builder-dashboard.webp",
    "description": "Professional invoicing, real-time revenue tracking, and inventory management software with multiple templates. Launch Offer: ₹6,000 lifetime access (Regular ₹8,000).",
    "brand": {
      "@type": "Brand",
      "name": "Brandex"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "19",
      "bestRating": "5",
      "worstRating": "1"
    },
    "review": [
      {
        "@type": "Review",
        "author": {
          "@type": "Person",
          "name": "Sachin Ravi"
        },
        "datePublished": "2026-08-15",
        "reviewBody": "The invoicing software and real-time revenue dashboard helped streamline our billing cycles with crisp vector PDFs and zero subscription overhead.",
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5",
          "bestRating": "5"
        }
      },
      {
        "@type": "Review",
        "author": {
          "@type": "Person",
          "name": "Amar Narayan"
        },
        "datePublished": "2026-09-02",
        "reviewBody": "Fast, intuitive stock inventory sync and a lifetime license that completely eliminated our recurring SaaS subscription costs.",
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5",
          "bestRating": "5"
        }
      }
    ],
    "offers": {
      "@type": "Offer",
      "url": "https://www.brandex.co.in/products/invoice-builder",
      "priceCurrency": "INR",
      "price": "6000",
      "validFrom": "2024-01-01T00:00:00Z",
      "priceValidUntil": "2027-12-31",
      "availability": "https://schema.org/InStock",
      "itemCondition": "https://schema.org/NewCondition",
      "hasMerchantReturnPolicy": {
        "@type": "MerchantReturnPolicy",
        "applicableCountry": "IN",
        "returnPolicyCategory": "https://schema.org/MerchantReturnFiniteReturnWindow",
        "merchantReturnDays": 14,
        "returnMethod": "https://schema.org/ReturnByMail",
        "returnFees": "https://schema.org/FreeReturn",
        "url": "https://www.brandex.co.in/refund-policy"
      },
      "shippingDetails": {
        "@type": "OfferShippingDetails",
        "shippingRate": {
          "@type": "MonetaryAmount",
          "value": "0",
          "currency": "INR"
        },
        "deliveryTime": {
          "@type": "ShippingDeliveryTime",
          "handlingTime": {
            "@type": "QuantitativeValue",
            "minValue": 0,
            "maxValue": 0,
            "unitCode": "DAY"
          },
          "transitTime": {
            "@type": "QuantitativeValue",
            "minValue": 0,
            "maxValue": 0,
            "unitCode": "DAY"
          }
        },
        "shippingDestination": {
          "@type": "DefinedRegion",
          "addressCountry": "IN"
        }
      },
      "seller": {
        "@type": "Organization",
        "@id": "https://www.brandex.co.in/#organization",
        "name": "Brandex"
      }
    }
  };

  const softwareSchema = {
    "@type": "SoftwareApplication",
    "@id": "https://www.brandex.co.in/products/invoice-builder#software",
    "name": "Brandex Invoice Builder",
    "applicationCategory": "BusinessApplication",
    "operatingSystem": "Web Browser, Windows, macOS, Linux",
    "offers": {
      "@type": "Offer",
      "price": "6000",
      "priceCurrency": "INR"
    },
    "description": "Real-time invoicing, multiple templates, revenue tracking, customer management, and inventory software for small and medium businesses. ₹6,000 lifetime license."
  };

  const faqSchema = {
    "@type": "FAQPage",
    "@id": "https://www.brandex.co.in/products/invoice-builder#faq",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How much does the Brandex Invoice Builder cost?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The Brandex Invoice Builder has a regular price of ₹8,000, currently available at a special launch offer of ₹6,000 for a lifetime license (Save ₹2,000 / 25% OFF). This is a one-time payment with zero recurring monthly subscription fees, including all invoice templates, inventory management, customer directories, and revenue dashboards."
        }
      },
      {
        "@type": "Question",
        "name": "Is this a monthly subscription or a one-time purchase?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "It is a one-time payment of ₹6,000 for lifetime access (regular ₹8,000). There are zero recurring monthly or annual software subscription fees."
        }
      },
      {
        "@type": "Question",
        "name": "Can Brandex customize the software for my business?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. If your business requires specific tax rules, custom invoice designs, payment gateway integrations, or custom ERP sync, Brandex provides tailored custom development quoted separately based on your requirements."
        }
      },
      {
        "@type": "Question",
        "name": "Does the software include inventory management?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. You can manage products, track stock quantities, update unit pricing, and have inventory automatically reflect when invoices are generated."
        }
      },
      {
        "@type": "Question",
        "name": "What invoice formats can be generated?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The Invoice Builder generates clean, vector-grade printable PDFs with selectable typography, embedded bank payment details, and QR codes across multiple selectable layout templates."
        }
      }
    ]
  };

  return (
    <article className="min-h-screen bg-background text-foreground overflow-hidden">
      {/* ── SEO Metadata & Schema ── */}
      <SEOTags
        title="Invoice Software & Billing Tool — ₹6,000 Lifetime (Regular ₹8,000) | Brandex"
        description="Create professional invoices, manage inventory, track revenue and organize customers with Brandex Invoice Builder. Launch offer: ₹6,000 lifetime access (Regular ₹8,000) with zero subscriptions."
        keywords="invoice software, invoice builder, billing software, inventory and invoicing software, revenue tracking software, invoice generator with inventory, lifetime invoice software, invoice software India, billing software India"
        canonicalUrl="https://www.brandex.co.in/products/invoice-builder"
        type="website"
        image="https://www.brandex.co.in/products/invoice-builder/brandex-invoice-builder-dashboard.webp"
        schema={[productSchema, softwareSchema, faqSchema]}
      />

      {/* ── Top Hero Section ── */}
      <header className="relative pt-4 sm:pt-6 pb-10 sm:pb-14 border-b border-border/40 bg-gradient-to-b from-primary/[0.03] via-background to-background">
        <div className="container mx-auto px-6 relative z-10">
          <Breadcrumb
            items={[
              { label: "Software Products", href: "/products" },
              { label: "Invoice Builder" }
            ]}
            className="mb-6"
          />

          <div className="grid lg:grid-cols-12 gap-12 items-center">
            {/* Left Copy */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-accent/10 border border-accent/20 text-accent text-xs font-semibold tracking-wide uppercase">
                <Receipt size={13} className="text-accent" />
                Software Product • Invoicing &amp; Inventory Suite
              </div>

              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground leading-[1.12]">
                Invoice Software Built for Businesses That Want More Than Just Invoices
              </h1>

              <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-2xl font-normal">
                Create professional invoices in real time, manage inventory, track revenue, and organize your entire billing workflow from one unified system — without paying recurring monthly subscriptions.
              </p>

              {/* Pricing Callout Badge with Psychological Anchor */}
              <div className="p-4 sm:p-5 rounded-2xl bg-card border border-border/60 shadow-sm max-w-xl">
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs uppercase tracking-wider text-muted-foreground font-semibold">Standard Product License</span>
                      <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-500 border border-emerald-500/20">
                        Save ₹2,000 • 25% OFF
                      </span>
                    </div>
                    <div className="flex items-baseline gap-2.5 mt-1.5">
                      <span className="text-lg sm:text-xl font-bold text-muted-foreground/60 line-through">₹8,000</span>
                      <span className="font-display text-3xl sm:text-4xl font-extrabold text-foreground">₹6,000</span>
                      <span className="text-accent font-semibold text-sm">Lifetime Access</span>
                    </div>
                    <p className="text-xs text-muted-foreground mt-1">One-time payment • Pay once, own forever • Zero monthly fees</p>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-2.5 w-full sm:w-auto">
                    <Button
                      onClick={() =>
                        openCheckout({
                          productId: "invoice-builder",
                          title: "Brandex Invoice Builder & Inventory Suite",
                          price: 6000,
                          regularPrice: 8000,
                          cadence: "One-Time Lifetime License",
                          badge: "Launch Offer (25% OFF)",
                          description: "Unlimited invoices, inventory synchronization, 12+ templates, and customer directory with zero recurring fees.",
                        })
                      }
                      size="lg"
                      className="bg-accent text-accent-foreground hover:bg-accent/90 shadow-lg shadow-accent/20 font-semibold text-sm px-6 h-12 cursor-pointer"
                    >
                      Get Invoice Builder (₹6,000) <ArrowRight size={15} className="ml-1.5" />
                    </Button>
                  </div>
                </div>
              </div>

              {/* Trust Badges */}
              <div className="flex flex-wrap items-center gap-y-2 gap-x-6 pt-2 text-xs text-muted-foreground">
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 size={14} className="text-emerald-500" />
                  <span>Real-Time Invoicing</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 size={14} className="text-emerald-500" />
                  <span>Stock &amp; Inventory Sync</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 size={14} className="text-emerald-500" />
                  <span>12+ PDF Templates</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 size={14} className="text-emerald-500" />
                  <span>Customizable by Brandex</span>
                </div>
              </div>
            </div>

            {/* Right Hero Image Card */}
            <div className="lg:col-span-5">
              <div className="relative group rounded-2xl overflow-hidden border border-border/80 shadow-2xl bg-card">
                <img
                  src="/products/invoice-builder/brandex-invoice-builder-dashboard.webp"
                  alt="Brandex Invoice Builder dashboard showing real-time revenue analytics and invoice list"
                  width="800"
                  height="450"
                  className="w-full h-auto object-cover transform transition-transform duration-500 group-hover:scale-[1.02]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs text-foreground/80 font-medium">
                  <span className="bg-background/80 backdrop-blur-md px-3 py-1.5 rounded-lg border border-border/50">
                    Live Dashboard View
                  </span>
                  <span className="bg-accent/90 text-accent-foreground px-3 py-1.5 rounded-lg font-semibold">
                    ₹6,000 Lifetime
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* ── Interactive Screenshot & Feature Showcase ── */}
      <section className="py-16 lg:py-24 border-b border-border/40 bg-secondary/15">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent mb-2 block">
              Actual Product Architecture
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Explore the system built for daily business operations
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Brandex Invoice Builder combines fast invoice creation, inventory tracking, client directories, and revenue analytics into one integrated workspace.
            </p>
          </div>

          {/* Tab Navigation */}
          <div className="flex flex-wrap gap-2 mb-8 border-b border-border/60 pb-3">
            {[
              { id: "dashboard", label: "Revenue Dashboard", icon: TrendingUp },
              { id: "editor", label: "Real-Time Invoice Editor", icon: FileText },
              { id: "templates", label: "12+ Invoice Templates", icon: LayoutTemplate },
              { id: "inventory", label: "Inventory & Stock Sync", icon: Package },
            ].map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as any)}
                  className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 ${
                    isActive
                      ? "bg-accent text-accent-foreground shadow-md shadow-accent/15"
                      : "bg-card text-muted-foreground hover:text-foreground hover:bg-secondary/60 border border-border/40"
                  }`}
                >
                  <Icon size={16} />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>

          {/* Active Tab Showcase */}
          <div className="rounded-2xl border border-border/70 bg-card p-4 sm:p-6 shadow-xl">
            {activeTab === "dashboard" && (
              <div className="grid lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-7 rounded-xl overflow-hidden border border-border/60 shadow-md">
                  <img
                    src="/products/invoice-builder/brandex-invoice-builder-dashboard.webp"
                    alt="Brandex Invoice Builder analytics dashboard with monthly revenue and invoice status tracking"
                    width="800"
                    height="450"
                    className="w-full h-auto object-cover"
                  />
                </div>
                <div className="lg:col-span-5 space-y-4">
                  <span className="text-xs font-semibold uppercase tracking-wider text-accent">Revenue Tracking</span>
                  <h3 className="font-display text-2xl font-bold text-foreground">
                    Know exactly what is paid, pending, and overdue
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Eliminate guesswork from your business cashflow. Track monthly turnover, invoice payment status (Paid, Pending, Overdue), and total customer accounts from one clear dashboard.
                  </p>
                  <ul className="space-y-2.5 text-sm text-foreground/80 pt-2">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 size={16} className="text-accent shrink-0" />
                      <span>Monthly &amp; Annual Revenue Metrics</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 size={16} className="text-accent shrink-0" />
                      <span>Instant Paid vs Pending Invoice Status</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 size={16} className="text-accent shrink-0" />
                      <span>Filter Invoices by Date, Client, or Amount</span>
                    </li>
                  </ul>
                </div>
              </div>
            )}

            {activeTab === "editor" && (
              <div className="grid lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-7 rounded-xl overflow-hidden border border-border/60 shadow-md">
                  <img
                    src="/products/invoice-builder/brandex-invoice-builder-editor.webp"
                    alt="Real-time invoice editor with line item tax calculation and live PDF preview pane"
                    width="800"
                    height="450"
                    className="w-full h-auto object-cover"
                  />
                </div>
                <div className="lg:col-span-5 space-y-4">
                  <span className="text-xs font-semibold uppercase tracking-wider text-accent">Real-Time Billing</span>
                  <h3 className="font-display text-2xl font-bold text-foreground">
                    Build professional invoices in seconds with live preview
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Select a client from your directory, pick products or services with auto-filled rates, apply GST/tax rates, and watch the final vector PDF render in real time.
                  </p>
                  <ul className="space-y-2.5 text-sm text-foreground/80 pt-2">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 size={16} className="text-accent shrink-0" />
                      <span>Automated GST/Tax &amp; Discount Calculations</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 size={16} className="text-accent shrink-0" />
                      <span>Live PDF Preview as You Type</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 size={16} className="text-accent shrink-0" />
                      <span>Custom Banking Details &amp; Dynamic UPI QR Codes</span>
                    </li>
                  </ul>
                </div>
              </div>
            )}

            {activeTab === "templates" && (
              <div className="grid lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-7 rounded-xl overflow-hidden border border-border/60 shadow-md">
                  <img
                    src="/products/invoice-builder/brandex-invoice-builder-templates.webp"
                    alt="Multiple professional invoice templates available in Brandex Invoice Builder"
                    width="800"
                    height="450"
                    className="w-full h-auto object-cover"
                  />
                </div>
                <div className="lg:col-span-5 space-y-4">
                  <span className="text-xs font-semibold uppercase tracking-wider text-accent">Multiple Designs</span>
                  <h3 className="font-display text-2xl font-bold text-foreground">
                    Multiple invoice styles suited to every industry
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Switch between Clean Minimalist, Corporate Blue, Modern Dark Slate, or Classic Bordered templates with a single click — without re-entering invoice data.
                  </p>
                  <ul className="space-y-2.5 text-sm text-foreground/80 pt-2">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 size={16} className="text-accent shrink-0" />
                      <span>Vector-Grade PDF Typography &amp; Crisp Tables</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 size={16} className="text-accent shrink-0" />
                      <span>Brand Colors &amp; High-Resolution Logo Support</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 size={16} className="text-accent shrink-0" />
                      <span>Print-Ready &amp; Digital-Optimized Layouts</span>
                    </li>
                  </ul>
                </div>
              </div>
            )}

            {activeTab === "inventory" && (
              <div className="space-y-6">
                <div className="flex flex-wrap items-center justify-between gap-4 border-b border-border/50 pb-4">
                  <div>
                    <span className="text-xs font-semibold uppercase tracking-wider text-accent">Stock Management</span>
                    <h3 className="font-display text-xl font-bold text-foreground mt-0.5">
                      Connected Products &amp; Inventory Catalog
                    </h3>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs text-muted-foreground">Auto-syncs with invoice generation</span>
                  </div>
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full text-left text-sm border-collapse">
                    <thead>
                      <tr className="border-b border-border/60 bg-muted/40 text-xs uppercase tracking-wider text-muted-foreground">
                        <th className="py-3 px-4">SKU / Item ID</th>
                        <th className="py-3 px-4">Item / Service Name</th>
                        <th className="py-3 px-4">Category</th>
                        <th className="py-3 px-4">Stock Level</th>
                        <th className="py-3 px-4">Unit Rate</th>
                        <th className="py-3 px-4">Status</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-border/40 font-mono text-xs sm:text-sm">
                      {sampleInventory.map((item, idx) => (
                        <tr key={idx} className="hover:bg-muted/20 transition-colors font-sans">
                          <td className="py-3 px-4 font-mono text-xs text-muted-foreground">{item.sku}</td>
                          <td className="py-3 px-4 font-medium text-foreground">{item.name}</td>
                          <td className="py-3 px-4 text-muted-foreground">{item.category}</td>
                          <td className="py-3 px-4 font-semibold text-foreground">{item.stock}</td>
                          <td className="py-3 px-4 font-semibold text-foreground">{item.price}</td>
                          <td className="py-3 px-4">
                            <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium ${
                              item.status === "In Stock" || item.status === "Active"
                                ? "bg-emerald-500/10 text-emerald-500 border border-emerald-500/20"
                                : "bg-amber-500/10 text-amber-500 border border-amber-500/20"
                            }`}>
                              {item.status}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* ── Step-by-Step Workflow ── */}
      <section className="py-16 lg:py-24 border-b border-border/40">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent mb-2 block">
              Intuitive Workflow
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-4">
              How the billing workflow operates
            </h2>
            <p className="text-muted-foreground text-lg">
              Six simple stages designed to make billing fast, accurate, and organized.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              {
                step: "01",
                title: "Add Directory Data",
                desc: "Save your product catalogue, unit rates, tax preferences, and customer contact details once for permanent reuse.",
                icon: Database
              },
              {
                step: "02",
                title: "Create in Real Time",
                desc: "Select a customer and add line items. Subtotals, GST/taxes, and final amounts calculate automatically without manual math.",
                icon: Zap
              },
              {
                step: "03",
                title: "Customize & Style",
                desc: "Choose from 12+ invoice templates. Toggle business notes, bank payment details, and QR codes to match your brand.",
                icon: Sliders
              },
              {
                step: "04",
                title: "Generate Vector PDF",
                desc: "Export crisp, high-resolution vector PDF invoices ready for direct WhatsApp dispatch, email, or physical printouts.",
                icon: Download
              },
              {
                step: "05",
                title: "Track Revenue",
                desc: "Keep real-time records of paid, pending, and overdue transactions on your unified revenue dashboard.",
                icon: TrendingUp
              },
              {
                step: "06",
                title: "Manage Inventory",
                desc: "Keep stock quantities synchronized as items get billed, eliminating overselling and inventory confusion.",
                icon: Package
              }
            ].map((st) => {
              const Icon = st.icon;
              return (
                <div
                  key={st.step}
                  className="p-6 rounded-2xl bg-card border border-border/60 hover:border-accent/40 transition-all duration-300 hover:shadow-lg relative group"
                >
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono text-xs font-bold text-accent px-2.5 py-1 rounded-md bg-accent/10">
                      {st.step}
                    </span>
                    <Icon size={20} className="text-muted-foreground group-hover:text-accent transition-colors" />
                  </div>
                  <h3 className="font-display font-bold text-lg text-foreground mb-2">{st.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{st.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Product vs Custom Development (Clarity Section) ── */}
      <section className="py-16 lg:py-24 border-b border-border/40 bg-card/60">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent mb-2 block">
                Transparent Licensing &amp; Engineering
              </span>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-4">
                Ready to use standard product or tailored custom build
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                We believe in complete commercial transparency. Choose between the ready-to-use software license or engage Brandex for customized development.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 items-stretch">
              {/* Option 1: Standard Product */}
              <div className="p-8 rounded-2xl bg-background border-2 border-accent/40 shadow-xl flex flex-col justify-between relative">
                <div className="absolute top-4 right-4">
                  <span className="text-xs uppercase font-bold tracking-wider px-2.5 py-1 rounded bg-accent text-accent-foreground">
                    Standard License
                  </span>
                </div>

                <div>
                  <h3 className="font-display text-2xl font-bold text-foreground mb-1">
                    Standard Invoice Builder
                  </h3>
                  <div className="flex flex-wrap items-baseline gap-2.5 mb-2">
                    <span className="text-xl font-bold text-muted-foreground/60 line-through">₹8,000</span>
                    <span className="font-display text-4xl font-extrabold text-foreground">₹6,000</span>
                    <span className="text-sm font-semibold text-accent">Lifetime Access</span>
                  </div>
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-500 border border-emerald-500/20 text-xs font-semibold mb-4">
                    <span>Launch Offer • Save ₹2,000 (25% OFF)</span>
                  </div>
                  <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
                    Complete ready-made software suite with zero recurring subscription fees. Pay once, own it forever — ideal for startups, freelancers, agencies, and small businesses.
                  </p>

                  <ul className="space-y-3 text-sm text-foreground/90 border-t border-border/50 pt-6 mb-8">
                    <li className="flex items-center gap-2.5">
                      <CheckCircle2 size={16} className="text-emerald-500 shrink-0" />
                      <span><strong>Full Lifetime Product Access</strong> (No Subscriptions)</span>
                    </li>
                    <li className="flex items-center gap-2.5">
                      <CheckCircle2 size={16} className="text-emerald-500 shrink-0" />
                      <span><strong>Unlimited</strong> Invoices &amp; Quotations</span>
                    </li>
                    <li className="flex items-center gap-2.5">
                      <CheckCircle2 size={16} className="text-emerald-500 shrink-0" />
                      <span><strong>12+ PDF Templates</strong> (GST, UPI QR, Modern layouts)</span>
                    </li>
                    <li className="flex items-center gap-2.5">
                      <CheckCircle2 size={16} className="text-emerald-500 shrink-0" />
                      <span><strong>Inventory &amp; Stock Directory</strong> with automatic quantity sync</span>
                    </li>
                    <li className="flex items-center gap-2.5">
                      <CheckCircle2 size={16} className="text-emerald-500 shrink-0" />
                      <span><strong>Client &amp; Customer CRM Directory</strong></span>
                    </li>
                    <li className="flex items-center gap-2.5">
                      <CheckCircle2 size={16} className="text-emerald-500 shrink-0" />
                      <span><strong>Revenue &amp; Payment Dashboard</strong> (Paid vs Pending)</span>
                    </li>
                    <li className="flex items-center gap-2.5">
                      <CheckCircle2 size={16} className="text-emerald-500 shrink-0" />
                      <span><strong>Deployment &amp; Setup Documentation</strong> + Email Support</span>
                    </li>
                  </ul>
                </div>

                <Button
                  onClick={() =>
                    openCheckout({
                      productId: "invoice-builder",
                      title: "Brandex Invoice Builder & Inventory Suite",
                      price: 6000,
                      regularPrice: 8000,
                      cadence: "One-Time Lifetime License",
                      badge: "Launch Offer (25% OFF)",
                      description: "Unlimited invoices, inventory synchronization, 12+ templates, and customer directory with zero recurring fees.",
                    })
                  }
                  size="lg"
                  className="w-full bg-accent text-accent-foreground hover:bg-accent/90 font-semibold shadow-lg shadow-accent/20 cursor-pointer"
                >
                  Get Lifetime License (₹6,000) <ArrowRight size={15} className="ml-1.5" />
                </Button>
              </div>

              {/* Option 2: Custom Development */}
              <div className="p-8 rounded-2xl bg-card border border-border/60 shadow-md flex flex-col justify-between">
                <div>
                  <div className="text-xs uppercase font-bold tracking-wider text-muted-foreground mb-1">
                    Custom Engineering
                  </div>
                  <h3 className="font-display text-2xl font-bold text-foreground mb-2">
                    Need Something Custom?
                  </h3>
                  <div className="flex items-baseline gap-2 mb-4">
                    <span className="font-display text-2xl font-bold text-foreground">Custom Quote</span>
                    <span className="text-sm text-muted-foreground">Tailored Scope</span>
                  </div>
                  <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
                    Brandex can customize the Invoice Builder or architect bespoke billing workflows tailored specifically around your company's processes.
                  </p>

                  <ul className="space-y-3 text-sm text-foreground/80 border-t border-border/50 pt-6 mb-8">
                    <li className="flex items-center gap-2.5">
                      <CheckCircle2 size={16} className="text-accent shrink-0" />
                      <span>Custom Invoice Designs &amp; Watermarks</span>
                    </li>
                    <li className="flex items-center gap-2.5">
                      <CheckCircle2 size={16} className="text-accent shrink-0" />
                      <span>Payment Gateway Integration (Razorpay, Stripe)</span>
                    </li>
                    <li className="flex items-center gap-2.5">
                      <CheckCircle2 size={16} className="text-accent shrink-0" />
                      <span>Custom ERP &amp; Tally / Zoho Sync</span>
                    </li>
                    <li className="flex items-center gap-2.5">
                      <CheckCircle2 size={16} className="text-accent shrink-0" />
                      <span>Multi-Branch &amp; Role Permissions</span>
                    </li>
                    <li className="flex items-center gap-2.5">
                      <CheckCircle2 size={16} className="text-accent shrink-0" />
                      <span>Automated WhatsApp &amp; SMS Payment Reminders</span>
                    </li>
                    <li className="flex items-center gap-2.5">
                      <CheckCircle2 size={16} className="text-accent shrink-0" />
                      <span>Customer Self-Service Payment Portal</span>
                    </li>
                  </ul>
                </div>

                <Button asChild variant="outline" size="lg" className="w-full border-border hover:bg-secondary">
                  <Link to="/contact?service=Custom%20Invoice%20Development">
                    Discuss Custom Requirements
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Why Brandex Built It ── */}
      <section className="py-16 lg:py-20 border-b border-border/40">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="p-8 sm:p-12 rounded-3xl bg-secondary/30 border border-border/60">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent mb-3 block">
              Engineering Philosophy
            </span>
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-foreground mb-4">
              We built it because invoicing shouldn't require a bloated SaaS stack
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed text-base">
              <p>
                Most modern businesses only need a straightforward, dependable way to create invoices, track customer records, monitor stock quantities, and see their revenue cashflow.
              </p>
              <p>
                Instead of forcing businesses into endless $30/month recurring subscriptions that hold their data hostage, we engineered the Brandex Invoice Builder as a high-performance, single-purchase tool that gets the job done cleanly.
              </p>
              <p>
                And because Brandex is an engineering company, if your business ever outgrows the standard version, we can extend it with custom APIs, cloud databases, and automated pipelines.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Contextual Internal Links ── */}
      <section className="py-16 border-b border-border/40 bg-card/30">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mb-8">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent mb-2 block">
              Explore Related Solutions
            </span>
            <h2 className="font-display text-2xl font-bold text-foreground">
              Connected Services &amp; Enterprise Software
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <Link
              to="/services/software-development"
              className="p-6 rounded-2xl bg-card border border-border/60 hover:border-accent/40 transition-all hover:shadow-md group block"
            >
              <Code2 size={20} className="text-accent mb-3" />
              <h3 className="font-bold text-foreground text-base mb-1 group-hover:text-accent transition-colors">
                Custom Software
              </h3>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Bespoke enterprise ERPs, CRMs, and web applications built from scratch.
              </p>
            </Link>

            <Link
              to="/projects/travel-crm"
              className="p-6 rounded-2xl bg-card border border-border/60 hover:border-accent/40 transition-all hover:shadow-md group block"
            >
              <FileText size={20} className="text-accent mb-3" />
              <h3 className="font-bold text-foreground text-base mb-1 group-hover:text-accent transition-colors">
                Travel CRM Platform
              </h3>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Custom itinerary automation and tour operator operations CRM.
              </p>
            </Link>

            <Link
              to="/services/ai-automation"
              className="p-6 rounded-2xl bg-card border border-border/60 hover:border-accent/40 transition-all hover:shadow-md group block"
            >
              <Zap size={20} className="text-accent mb-3" />
              <h3 className="font-bold text-foreground text-base mb-1 group-hover:text-accent transition-colors">
                AI &amp; Automation
              </h3>
              <p className="text-xs text-muted-foreground leading-relaxed">
                WhatsApp billing bots, payment webhooks, and autonomous workflows.
              </p>
            </Link>

            <Link
              to="/projects"
              className="p-6 rounded-2xl bg-card border border-border/60 hover:border-accent/40 transition-all hover:shadow-md group block"
            >
              <Layers size={20} className="text-accent mb-3" />
              <h3 className="font-bold text-foreground text-base mb-1 group-hover:text-accent transition-colors">
                All Projects Hub
              </h3>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Explore custom web platforms and production case studies.
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* ── FAQ Section ── */}
      <section className="py-16 lg:py-24 border-b border-border/40">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="text-center mb-12">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent mb-2 block">
              Product Questions
            </span>
            <h2 className="font-display text-3xl font-bold text-foreground mb-3">
              Frequently Asked Questions
            </h2>
            <p className="text-muted-foreground">
              Clear facts about the Brandex Invoice Builder license and capabilities.
            </p>
          </div>

          <Accordion type="single" collapsible className="w-full space-y-4">
            <AccordionItem value="item-1" className="border border-border/60 rounded-xl px-6 bg-card">
              <AccordionTrigger className="text-left font-semibold text-foreground hover:no-underline">
                How much does the Invoice Builder cost?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed text-sm">
                The standard Brandex Invoice Builder license is ₹6,000 for lifetime access. There are no monthly recurring fees or hidden platform surcharges for standard use.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2" className="border border-border/60 rounded-xl px-6 bg-card">
              <AccordionTrigger className="text-left font-semibold text-foreground hover:no-underline">
                Is this a recurring subscription?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed text-sm">
                No. The ₹6,000 price grants lifetime access to the software. You own the software license and can generate unlimited invoices without recurring monthly costs.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3" className="border border-border/60 rounded-xl px-6 bg-card">
              <AccordionTrigger className="text-left font-semibold text-foreground hover:no-underline">
                What features are included in the ₹6,000 purchase?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed text-sm">
                You get the complete software suite: real-time invoice creator, 12+ selectable invoice templates, connected product and stock inventory manager, customer directory, revenue dashboard, vector PDF generation engine, and deployment setup guide.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4" className="border border-border/60 rounded-xl px-6 bg-card">
              <AccordionTrigger className="text-left font-semibold text-foreground hover:no-underline">
                Can Brandex add custom features or payment gateways?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed text-sm">
                Yes! Because Brandex is a full-stack custom software agency, we can build custom payment integrations (Razorpay, Stripe, UPI), automated WhatsApp payment notifications, custom invoice templates, or ERP synchronization. Custom development is scoped and quoted separately.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5" className="border border-border/60 rounded-xl px-6 bg-card">
              <AccordionTrigger className="text-left font-semibold text-foreground hover:no-underline">
                Does it support GST calculations and Indian business formats?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed text-sm">
                Yes. It includes native GST percentage breakdowns (CGST, SGST, IGST), customizable tax fields, customer GSTIN records, and bank account / UPI QR code display on generated invoices.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-6" className="border border-border/60 rounded-xl px-6 bg-card">
              <AccordionTrigger className="text-left font-semibold text-foreground hover:no-underline">
                How do I get started or purchase the software?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed text-sm">
                Click "Get Invoice Builder" to submit your order or request a live demo. Our Bangalore engineering team will provide the application package, access setup, and onboarding walkthrough.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* ── Final Conversion CTA ── */}
      <section className="py-20 bg-gradient-to-b from-card to-background relative overflow-hidden">
        <div className="container mx-auto px-6 text-center max-w-3xl relative z-10">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent mb-3 block">
            Start Today
          </span>
          <h2 className="font-display text-3xl sm:text-5xl font-bold text-foreground mb-6">
            Need a better way to handle invoices?
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-8">
            Get the complete Brandex Invoice Builder for <strong>₹6,000 lifetime access</strong>. Or, if your business requires specific custom workflows, tell us what you need and we'll customize it for you.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              asChild
              size="lg"
              className="bg-accent text-accent-foreground hover:bg-accent/90 shadow-xl shadow-accent/20 font-semibold px-8 h-12 w-full sm:w-auto"
            >
              <Link to="/contact?service=Invoice%20Builder%20Lifetime">
                Get Invoice Builder (₹6,000 Lifetime)
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-border hover:bg-secondary font-semibold px-8 h-12 w-full sm:w-auto"
            >
              <Link to="/contact?service=Custom%20Invoice%20Development">
                Request Customization
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </article>
  );
}
