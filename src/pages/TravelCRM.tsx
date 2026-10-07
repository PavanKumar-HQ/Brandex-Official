import { useState } from "react";
import { Link } from "react-router-dom";
import {
  FileText,
  UploadCloud,
  CheckCircle2,
  ArrowRight,
  Zap,
  QrCode,
  MessageCircle,
  FolderSync,
  Compass,
  Building,
  Layers,
  Database,
  Search,
  DollarSign,
  Users,
  ShieldCheck,
  ChevronRight,
  FileSpreadsheet,
  FileCheck,
  Plane,
  Hotel,
  Calendar,
  ExternalLink,
  PhoneCall,
  Clock,
  Briefcase,
  HelpCircle,
  Workflow,
  Maximize2,
  Sliders,
  Check,
  Share2,
  CreditCard,
  Lock,
  Tag,
  Headphones
} from "lucide-react";
import { Button } from "@/components/ui/button";
import SEOTags from "@/components/SEOTags";
import Breadcrumb from "@/components/Breadcrumb";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useCalBooking } from "@/hooks/useCalBooking";
import { useProductCheckout } from "@/contexts/ProductCheckoutContext";
import { projects } from "@/data/projects";

// Real screenshots data
const crmScreenshots = [
  {
    id: "builder",
    title: "Trip Proposal Builder & AI Auto-Parser",
    subtitle: "Turn Word & PDF documents or custom notes into structured 4-step travel proposals.",
    image: "/projects/travel-crm/travel-crm-proposal-builder-ai-parser.webp",
    tag: "AI Parser Engine",
    caption: "Trip Proposal Builder with 4-step workflow (Basics & Cover, Day-by-Day, Stays & Hotels, Pricing & Terms) and AI Auto-Parser supporting Word and PDF document imports.",
    features: [
      "AI Magic Itinerary Auto-Parser supporting custom instructions",
      "Upload PDF/DOCX or build custom trips from scratch",
      "4-step modular workflow with automatic draft saving",
      "Dynamic destinations summary and high-impact cover photo selector"
    ]
  },
  {
    id: "pdf-preview",
    title: "Vector-Grade PDF Generator & Preview Suite",
    subtitle: "High-resolution editorial document compilation with vector graphics and interactive triggers.",
    image: "/projects/travel-crm/travel-crm-pdf-builder-preview.webp",
    tag: "Vector PDF Engine",
    caption: "Live Itinerary Preview showing custom branding (Frontier Travel & Hospitality), reference code #QT-2026-LK5D, investment calculation, and one-click 'Save as PDF (Vector)' & 'Copy WhatsApp' actions.",
    features: [
      "Selectable templates (Modern Explorer, Luxury Editorial, Classic)",
      "Instant 'Save as PDF (Vector)' with scalable text & graphics",
      "One-click 'Copy WhatsApp' formatted summary for quick client dispatch",
      "Dynamic pricing per person, group duration, and live itinerary links"
    ]
  },
  {
    id: "pipeline",
    title: "Sales Pipeline & Kanban Booking Stages",
    subtitle: "Drag and drop itineraries from Enquiry to Quoted, Negotiating, Confirmed, and Completed.",
    image: "/projects/travel-crm/travel-crm-sales-pipeline.webp",
    tag: "CRM & Sales Core",
    caption: "Kanban-style Sales Pipeline tracking active enquiries, dispatched quotations, negotiating deals, and confirmed client bookings with total value.",
    features: [
      "Visual Kanban workflow: Enquiry → Quoted → Negotiating → Confirmed → Completed",
      "Quick card overview with pax count, duration, destination tags, and quote value",
      "One-click itinerary editing and instant document access",
      "Cloud-synchronized status tracking with real-time updates"
    ]
  },
  {
    id: "settings",
    title: "Agency White-Labeling & Multi-Modal Engine",
    subtitle: "Custom agency credentials, proposal defaults, GSTIN tax identifiers, and logo branding.",
    image: "/projects/travel-crm/travel-crm-agency-settings-whitelabel.webp",
    tag: "White-Label System",
    caption: "Agency Settings & White-Labeling showing active cloud synchronization, unlimited manual itinerary creation, vector PDF exports, and Llama 3.2 Vision multi-modal parsing status.",
    features: [
      "Full agency white-labeling with custom logo, contact phone, and official domain",
      "Tax ID / GSTIN configuration for compliant proposal documentation",
      "Unlimited itinerary creation and high-resolution PDF proposal exports",
      "Multi-modal AI vision parser status and custom subdomain deployment ready"
    ]
  }
];

export default function TravelCRMPage() {
  useScrollReveal();
  const { openBooking } = useCalBooking();
  const { openCheckout } = useProductCheckout();
  const [pricingCycle, setPricingCycle] = useState<"monthly" | "annual">("monthly");
  const [selectedScreenshot, setSelectedScreenshot] = useState<string>("builder");
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);

  const activeScreen = crmScreenshots.find((s) => s.id === selectedScreenshot) || crmScreenshots[0];
  const otherProjects = projects.filter((p) => p.id !== "travel-crm").slice(0, 3);

  // Structured Data for Product, SoftwareApplication & FAQ with full Google Merchant Listings & Rich Snippet compliance
  const productSchema = {
    "@type": "Product",
    "@id": "https://www.brandex.co.in/products/travel-crm#product",
    "name": "Brandex Travel CRM & Itinerary Platform",
    "image": "https://www.brandex.co.in/projects/travel-crm/travel-crm-pdf-builder-preview.webp",
    "description": "All-in-one Travel CRM and Itinerary Automation Platform for travel agencies and tour operators. Launch Offer: ₹1,500/month (Regular ₹2,000/month).",
    "brand": {
      "@type": "Brand",
      "name": "Brandex"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "24",
      "bestRating": "5",
      "worstRating": "1"
    },
    "review": [
      {
        "@type": "Review",
        "author": {
          "@type": "Person",
          "name": "Chandan"
        },
        "datePublished": "2026-08-20",
        "reviewBody": "The travel CRM and itinerary auto-parser drastically cut down proposal compilation time for our tour group bookings.",
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5",
          "bestRating": "5"
        }
      }
    ],
    "offers": {
      "@type": "Offer",
      "url": "https://www.brandex.co.in/products/travel-crm",
      "priceCurrency": "INR",
      "price": "1500",
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
    "@id": "https://www.brandex.co.in/projects/travel-crm#software",
    "name": "Brandex Travel CRM & Itinerary Automation Platform",
    "applicationCategory": "BusinessApplication",
    "operatingSystem": "Web Browser, Cloud-Native",
    "description": "A custom Travel CRM built by Brandex for travel agencies and tour operators to manage clients, quotations, itineraries, travel directories, and automated PDF generation from Word and PDF files.",
    "url": "https://www.brandex.co.in/projects/travel-crm",
    "creator": {
      "@type": "Organization",
      "@id": "https://www.brandex.co.in/#organization",
      "name": "Brandex"
    },
    "featureList": [
      "Document-to-Itinerary Parsing for Word and PDF documents",
      "Interactive Day-by-Day Itinerary Builder",
      "Reusable Travel Directory for Hotels, Destinations, and Activities",
      "End-to-End Quotation and Lead Conversion Tracking",
      "Structured Vector-Grade PDF Generation with Dynamic QR Codes",
      "Clickable WhatsApp and Direct Communication Links in Trip Documents",
      "Unique Reference Number and Document Tracking",
      "Client 360 and Revenue Overview"
    ],
    "offers": {
      "@type": "Offer",
      "price": "1500",
      "priceCurrency": "INR",
      "priceValidUntil": "2027-12-31",
      "availability": "https://schema.org/InStock",
      "description": "Launch Offer: ₹1,500/month (Regular ₹2,000/month). Includes unlimited AI itinerary parsing, vector PDF exports, master travel directory, and full sales pipeline CRM with zero setup fees."
    }
  };

  const faqSchema = {
    "@type": "FAQPage",
    "@id": "https://www.brandex.co.in/projects/travel-crm#faq",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is this Travel CRM platform built by Brandex?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "This Travel CRM is a custom software platform engineered by Brandex for travel agencies, tour operators, and destination management companies (DMCs) to manage clients, quotations, itineraries, travel directories, and automated travel documents from one centralized system."
        }
      },
      {
        "@type": "Question",
        "name": "How does the ₹1,500/month launch pricing work?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The standard agency plan is regular ₹2,000/month, currently discounted to an early adopter launch price of ₹1,500/month (₹50/day) with zero setup fees. It includes unlimited AI document auto-parsing, vector PDF generation, master travel directory, and complete sales pipeline tracking with monthly billing and no long-term contracts."
        }
      },
      {
        "@type": "Question",
        "name": "What can the Travel CRM do?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The platform automates the entire travel agency workflow: parsing existing Word or PDF itineraries into structured editable trips, maintaining a centralized directory of hotels and activities, creating and sending branded quotations, managing client records, generating structured PDF documents, and embedding interactive WhatsApp links and dynamic QR codes."
        }
      },
      {
        "@type": "Question",
        "name": "Who is the Travel CRM designed for?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "It is built for travel agencies, outbound and inbound tour operators, destination management companies, luxury travel curators, and travel consultants looking to eliminate disconnected spreadsheets, manual Word templates, and unorganized WhatsApp communications."
        }
      },
      {
        "@type": "Question",
        "name": "How does the Document-to-Itinerary automation feature work?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Users can upload an existing itinerary file in Microsoft Word (.docx), PDF, or text format. The parsing engine extracts travel dates, destinations, hotel stays, day-by-day sightseeing activities, and pricing details into structured, editable fields inside the CRM, allowing staff to customize and generate polished PDF documents in minutes."
        }
      },
      {
        "@type": "Question",
        "name": "Are generated itinerary PDFs interactive?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. The generated PDFs maintain crisp vector and text hierarchy and include interactive clickable elements such as direct WhatsApp contact links, phone dials, map URLs, and dynamic QR codes that link directly to live digital itinerary updates."
        }
      }
    ]
  };

  return (
    <article className="min-h-screen bg-background text-foreground overflow-hidden">
      {/* ── SEO Metadata & Schema ── */}
      <SEOTags
        title="Travel CRM & Itinerary Software — ₹1,500/mo (Regular ₹2,000) | Brandex"
        description="All-in-one Travel CRM and Itinerary Automation Platform for travel agencies and tour operators. Launch Offer: ₹1,500/mo (Regular ₹2,000/mo) with zero setup fees and free file migration."
        keywords="Travel CRM, travel agency CRM, tour operator CRM, travel itinerary management software, travel quotation software, travel itinerary generator, travel agency automation software, travel quotation management, travel agency client management, automated itinerary PDF generator, travel business management software, custom travel CRM development, travel CRM development company"
        canonicalUrl="https://www.brandex.co.in/products/travel-crm"
        type="website"
        image="https://www.brandex.co.in/projects/travel-crm/travel-crm-pdf-builder-preview.webp"
        schema={[productSchema, softwareSchema, faqSchema]}
      />

      {/* ── Top Header & Breadcrumb ── */}
      <header className="relative pt-4 sm:pt-6 pb-10 sm:pb-14 border-b border-border/40 bg-gradient-to-b from-primary/[0.03] via-background to-background">
        <div className="container mx-auto px-6 relative z-10">
          <Breadcrumb
            items={[
              { label: "Software Products", href: "/products" },
              { label: "Travel CRM Platform" }
            ]}
            className="mb-6"
          />

          <div className="grid lg:grid-cols-12 gap-12 items-center">
            {/* Left Copy */}
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-accent/10 border border-accent/20 text-accent text-xs font-semibold tracking-wide uppercase">
                <Compass size={13} className="text-accent" />
                Software Product • Travel Operations &amp; Itinerary Suite
              </div>

              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground leading-[1.12]">
                A Complete Travel CRM &amp; Itinerary Software for Modern Agencies
              </h1>

              <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-2xl font-normal">
                Manage enquiries, quotations, clients, itineraries, travel directories, and trip documents from one unified system — while turning existing Word or PDF itineraries into polished, editable travel documents automatically.
              </p>

              {/* Pricing Callout Badge with Psychological Anchor */}
              <div className="p-4 sm:p-5 rounded-2xl bg-card border border-border/60 shadow-sm max-w-xl">
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs uppercase tracking-wider text-muted-foreground font-semibold">Standard Agency Plan</span>
                      <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-500 border border-emerald-500/20">
                        Save ₹500/mo • ₹50/day
                      </span>
                    </div>
                    <div className="flex items-baseline gap-2.5 mt-1.5">
                      <span className="text-lg sm:text-xl font-bold text-muted-foreground/60 line-through">₹2,000</span>
                      <span className="font-display text-3xl sm:text-4xl font-extrabold text-foreground">₹1,500</span>
                      <span className="text-accent font-semibold text-sm">/ month</span>
                    </div>
                    <p className="text-xs text-muted-foreground mt-1">Zero setup fees • Cancel anytime • Free file migration included</p>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-2.5 w-full sm:w-auto">
                    <Button
                      onClick={() =>
                        openCheckout({
                          productId: "travel-crm",
                          title: "Brandex Travel CRM & Itinerary Platform",
                          price: 1500,
                          regularPrice: 2000,
                          cadence: "Monthly Subscription (Zero Setup Fees)",
                          badge: "Launch Offer (25% OFF)",
                          description: "Unlimited AI itinerary parsing, vector PDF proposals, hotel directory, and lead pipeline CRM.",
                        })
                      }
                      size="lg"
                      className="bg-accent text-accent-foreground hover:bg-accent/90 shadow-lg shadow-accent/20 font-semibold text-sm px-6 h-12 cursor-pointer"
                    >
                      Get Travel CRM (₹1,500/mo) <ArrowRight size={15} className="ml-1.5" />
                    </Button>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-4 pt-1">
                <Button
                  onClick={() => openBooking()}
                  variant="outline"
                  size="lg"
                  className="border-border/70 hover:bg-secondary/70 px-6 py-5 text-sm font-semibold flex items-center gap-2"
                >
                  <Calendar size={15} /> Book Live Product Demo
                </Button>

                <Button
                  asChild
                  variant="ghost"
                  size="lg"
                  className="text-muted-foreground hover:text-foreground px-4 py-5 text-sm"
                >
                  <a href="#product-showcase">
                    View Live System Screens &darr;
                  </a>
                </Button>
              </div>

              {/* Quick Spec Highlights */}
              <div className="pt-4 grid grid-cols-2 sm:grid-cols-4 gap-4 border-t border-border/50 text-xs text-muted-foreground">
                <div>
                  <span className="block font-semibold text-foreground text-sm">Document Parsing</span>
                  <span>Word &amp; PDF Itineraries</span>
                </div>
                <div>
                  <span className="block font-semibold text-foreground text-sm">Document Output</span>
                  <span>Vector PDF + Dynamic QR</span>
                </div>
                <div>
                  <span className="block font-semibold text-foreground text-sm">Directory Hub</span>
                  <span>Hotels, Places &amp; Trips</span>
                </div>
                <div>
                  <span className="block font-semibold text-foreground text-sm">Sales Pipeline</span>
                  <span>Quote to Confirmed Trip</span>
                </div>
              </div>
            </div>

            {/* Right: Live Production CRM Preview Screen */}
            <div className="lg:col-span-6">
              <div className="bg-card border border-border/70 rounded-2xl p-3 shadow-2xl shadow-accent/5 backdrop-blur relative overflow-hidden group">
                <div className="absolute -top-16 -right-16 w-48 h-48 bg-accent/10 rounded-full blur-3xl pointer-events-none" />

                {/* Simulated CRM Window Header */}
                <div className="flex items-center justify-between pb-3 mb-3 border-b border-border/60 px-2">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-destructive/70" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
                    <div className="w-3 h-3 rounded-full bg-green-500/70" />
                    <span className="ml-2 text-xs font-mono text-muted-foreground">frontier-travel.crm.brandex.co.in</span>
                  </div>
                  <span className="text-[11px] px-2.5 py-0.5 rounded bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 font-medium">
                    Live Platform
                  </span>
                </div>

                {/* Hero Interactive Image Frame */}
                <div className="aspect-[16/10] bg-secondary rounded-xl overflow-hidden relative border border-border/50">
                  <img
                    src="/projects/travel-crm/travel-crm-pdf-builder-preview.webp"
                    alt="Brandex Travel CRM live itinerary builder and vector PDF generator interface"
                    className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.02]"
                    loading="eager"
                  />
                  <div className="absolute bottom-3 left-3 right-3 p-3 rounded-lg bg-background/90 backdrop-blur border border-border/60 text-xs flex items-center justify-between">
                    <div>
                      <p className="font-bold text-foreground">Frontier Travel CRM — Live Itinerary Studio</p>
                      <p className="text-[11px] text-muted-foreground">Vector PDF generation, WhatsApp triggers &amp; reference QT-2026-LK5D</p>
                    </div>
                    <a
                      href="#product-showcase"
                      className="px-2.5 py-1 bg-accent text-accent-foreground rounded text-[11px] font-semibold hover:bg-accent/90 transition-colors"
                    >
                      Explore Screens &darr;
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* ── Real Production Software Gallery & Deep-Dive ── */}
      <section className="py-20 lg:py-28" id="product-showcase">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-14 scroll-reveal">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/15 text-accent text-xs font-bold uppercase tracking-wider mb-3">
              <Layers size={13} /> Production System Walkthrough
            </div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Real Software Screenshots &amp; Core Interfaces
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Explore the actual interfaces engineered by Brandex for Frontier Travel &amp; Hospitality Solutions.
            </p>
          </div>

          {/* Interactive Screen Selector */}
          <div className="flex flex-wrap justify-center gap-2.5 mb-10 scroll-reveal">
            {crmScreenshots.map((screen) => (
              <button
                key={screen.id}
                onClick={() => setSelectedScreenshot(screen.id)}
                className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all flex items-center gap-2 ${
                  selectedScreenshot === screen.id
                    ? "bg-accent text-accent-foreground shadow-md shadow-accent/20 scale-[1.02]"
                    : "bg-card border border-border/70 text-muted-foreground hover:text-foreground hover:bg-secondary/60"
                }`}
              >
                <span>{screen.title}</span>
              </button>
            ))}
          </div>

          {/* Active Screen Display Card */}
          <div className="max-w-6xl mx-auto bg-card border border-border/80 rounded-3xl p-6 sm:p-8 shadow-2xl space-y-8 scroll-reveal">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-border/60 pb-6">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-accent mb-1 block">
                  {activeScreen.tag}
                </span>
                <h3 className="font-display text-2xl sm:text-3xl font-bold text-foreground">
                  {activeScreen.title}
                </h3>
                <p className="text-sm text-muted-foreground mt-1">
                  {activeScreen.subtitle}
                </p>
              </div>

              <button
                onClick={() => setLightboxImage(activeScreen.image)}
                className="inline-flex items-center gap-2 px-4 py-2 bg-secondary hover:bg-secondary/80 text-foreground rounded-xl text-xs font-semibold border border-border/60 transition-colors self-start md:self-auto"
              >
                <Maximize2 size={14} /> Fullscreen Zoom
              </button>
            </div>

            {/* High-Res Image with Browser Frame */}
            <div className="rounded-2xl border border-border/70 overflow-hidden bg-secondary/50 shadow-inner">
              <div className="bg-background/90 px-4 py-2.5 border-b border-border/60 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-destructive/70" />
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/70" />
                  <div className="w-2.5 h-2.5 rounded-full bg-green-500/70" />
                  <span className="ml-2 text-xs font-mono text-muted-foreground">
                    app.brandex.co.in/frontier-travel/{activeScreen.id}
                  </span>
                </div>
                <span className="text-[11px] text-muted-foreground font-mono">1920 &times; 1080 UI</span>
              </div>

              <div className="relative group cursor-pointer" onClick={() => setLightboxImage(activeScreen.image)}>
                <img
                  src={activeScreen.image}
                  alt={activeScreen.caption}
                  className="w-full h-auto object-cover max-h-[620px] object-top transition-transform duration-500 group-hover:scale-[1.01]"
                />
                <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="px-4 py-2 bg-background/90 backdrop-blur rounded-full text-xs font-bold shadow-lg flex items-center gap-2">
                    <Maximize2 size={14} /> Click to Enlarge Screenshot
                  </span>
                </div>
              </div>
            </div>

            {/* Feature Highlights for Current Screenshot */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-2">
              {activeScreen.features.map((f, i) => (
                <div key={i} className="p-4 bg-secondary/40 rounded-xl border border-border/50 text-xs flex items-start gap-2.5">
                  <CheckCircle2 size={15} className="text-accent shrink-0 mt-0.5" />
                  <span className="text-muted-foreground leading-relaxed font-medium">{f}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Problem vs Solution Section ── */}
      <section className="py-20 lg:py-28 bg-secondary/30">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-16 scroll-reveal">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent mb-3">
              Workflow Transformation
            </p>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-5">
              The Problem With Disconnected Travel Operations
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Travel businesses rarely suffer from a lack of demand. The real bottleneck is managing different pieces of the journey across fragmented documents, offline spreadsheets, and endless chat threads.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Before Card */}
            <div className="p-8 rounded-2xl bg-card border border-destructive/20 relative overflow-hidden scroll-reveal">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-destructive/10 text-destructive text-xs font-bold uppercase tracking-wider mb-6">
                Before: Fragmented Tools
              </div>

              <h3 className="font-display text-2xl font-bold text-foreground mb-4">
                Scattered Across 7 Different Apps
              </h3>

              <ul className="space-y-3.5 text-sm text-muted-foreground">
                <li className="flex items-start gap-3">
                  <span className="text-destructive font-bold text-base">✕</span>
                  <span><strong>Word &amp; PDF files:</strong> Itineraries manually typed from old templates, leading to broken formatting, wrong dates, and outdated hotel names.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-destructive font-bold text-base">✕</span>
                  <span><strong>Spreadsheet pricing:</strong> Manual formulas and rate lookups creating frequent pricing calculation mistakes.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-destructive font-bold text-base">✕</span>
                  <span><strong>WhatsApp &amp; inbox chaos:</strong> Quotations and client revision requests buried across team phone messages.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-destructive font-bold text-base">✕</span>
                  <span><strong>Zero central directory:</strong> Hotel phone numbers, descriptions, and inclusions repeatedly re-typed from memory.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-destructive font-bold text-base">✕</span>
                  <span><strong>Disconnected customer journey:</strong> No clear record connecting who enquired, which quote was sent, and what trip was confirmed.</span>
                </li>
              </ul>
            </div>

            {/* After Card */}
            <div className="p-8 rounded-2xl bg-card border border-accent/40 shadow-xl shadow-accent/5 relative overflow-hidden scroll-reveal">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/15 text-accent text-xs font-bold uppercase tracking-wider mb-6">
                After: Unified Travel CRM
              </div>

              <h3 className="font-display text-2xl font-bold text-foreground mb-4">
                One Seamless Operational Engine
              </h3>

              <div className="mb-6 p-4 rounded-xl bg-accent/5 border border-accent/20">
                <p className="text-xs uppercase tracking-wider font-bold text-accent mb-2">Connected Lifecycle</p>
                <p className="font-mono text-xs text-foreground font-semibold">
                  Enquiry → Client → Quotation → Lead → Itinerary → Documents → Revenue
                </p>
              </div>

              <ul className="space-y-3.5 text-sm text-muted-foreground">
                <li className="flex items-start gap-3">
                  <CheckCircle2 size={18} className="text-accent shrink-0 mt-0.5" />
                  <span><strong>Document-to-Itinerary parsing:</strong> Import existing Word/PDF itineraries and convert them into structured trips in seconds.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 size={18} className="text-accent shrink-0 mt-0.5" />
                  <span><strong>Reusable Travel Directory:</strong> Maintain your master knowledge base of hotels, activities, and destinations.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 size={18} className="text-accent shrink-0 mt-0.5" />
                  <span><strong>Vector PDF generation:</strong> Generate polished, branded PDFs with embedded dynamic QR codes and clickable links.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 size={18} className="text-accent shrink-0 mt-0.5" />
                  <span><strong>Sales &amp; revenue pipeline:</strong> Track quotations, converted leads, confirmed bookings, and revenue centrally.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── Core Feature 1: Document-to-Itinerary Automation ── */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6 scroll-reveal">
              <div className="inline-flex items-center gap-2 text-accent font-semibold text-xs uppercase tracking-widest">
                <FolderSync size={14} /> Core Differentiator
              </div>

              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
                Turn Old Word or PDF Itineraries into Structured Software Workflows
              </h2>

              <p className="text-muted-foreground text-lg leading-relaxed">
                Most travel businesses have hundreds of existing itineraries sitting in Microsoft Word (.docx) or PDF format. Rebuilding them one by one into a new software system is historically painful.
              </p>

              <p className="text-muted-foreground leading-relaxed">
                Brandex engineered a specialized <strong>Document-to-Itinerary parser</strong>. Users simply upload their existing Word or PDF itinerary files. The system reads and parses the document, extracts key travel dates, destinations, hotel stays, day-by-day sightseeing activities, and converts them into structured travel itineraries.
              </p>

              <div className="p-4 rounded-xl bg-secondary/60 border border-border/60">
                <p className="text-xs uppercase tracking-wider font-semibold text-muted-foreground mb-1">
                  The Automated Workflow
                </p>
                <p className="font-bold text-sm text-foreground">
                  Upload → Parse → Structure → Customize → Generate PDF
                </p>
              </div>

              <div className="space-y-2.5 pt-2">
                <div className="flex items-center gap-2.5 text-sm text-foreground">
                  <CheckCircle2 size={16} className="text-accent" />
                  <span>Eliminates hours of manual data entry from scratch</span>
                </div>
                <div className="flex items-center gap-2.5 text-sm text-foreground">
                  <CheckCircle2 size={16} className="text-accent" />
                  <span>Create custom agency templates instead of restricted predefined layouts</span>
                </div>
                <div className="flex items-center gap-2.5 text-sm text-foreground">
                  <CheckCircle2 size={16} className="text-accent" />
                  <span>Edit every parsed activity, flight component, and hotel before final export</span>
                </div>
              </div>
            </div>

            {/* Visual Workflow Infographic */}
            <div className="lg:col-span-6 scroll-reveal">
              <div className="bg-card border border-border/70 rounded-2xl p-6 shadow-xl space-y-4">
                <div className="flex items-center justify-between border-b border-border/50 pb-3">
                  <span className="text-xs font-mono font-semibold text-muted-foreground">PARSING ENGINE PIPELINE</span>
                  <span className="text-xs bg-accent/15 text-accent px-2.5 py-0.5 rounded font-medium">Automatic Extraction</span>
                </div>

                {/* Step 1: Upload */}
                <div className="p-4 rounded-xl bg-secondary/50 border border-border/50 flex items-start gap-4">
                  <div className="w-9 h-9 rounded-lg bg-blue-500/10 text-blue-500 flex items-center justify-center shrink-0">
                    <FileSpreadsheet size={18} />
                  </div>
                  <div>
                    <span className="text-xs uppercase font-bold text-blue-500">Step 01</span>
                    <h4 className="text-sm font-bold text-foreground">Upload Raw Itinerary Document</h4>
                    <p className="text-xs text-muted-foreground mt-0.5">Supports Microsoft Word (.docx), PDF, and structured text files.</p>
                  </div>
                </div>

                {/* Step 2: Parsing Engine */}
                <div className="p-4 rounded-xl bg-accent/10 border border-accent/30 flex items-start gap-4">
                  <div className="w-9 h-9 rounded-lg bg-accent text-accent-foreground flex items-center justify-center shrink-0">
                    <Workflow size={18} />
                  </div>
                  <div>
                    <span className="text-xs uppercase font-bold text-accent">Step 02</span>
                    <h4 className="text-sm font-bold text-foreground">Intelligent Content Extraction</h4>
                    <p className="text-xs text-muted-foreground mt-0.5">Discovers day divisions, hotel properties, destinations, transfers, and price components.</p>
                  </div>
                </div>

                {/* Step 3: Structured Itinerary */}
                <div className="p-4 rounded-xl bg-secondary/50 border border-border/50 flex items-start gap-4">
                  <div className="w-9 h-9 rounded-lg bg-emerald-500/10 text-emerald-500 flex items-center justify-center shrink-0">
                    <CheckCircle2 size={18} />
                  </div>
                  <div>
                    <span className="text-xs uppercase font-bold text-emerald-500">Step 03</span>
                    <h4 className="text-sm font-bold text-foreground">Modular, Editable Travel Itinerary</h4>
                    <p className="text-xs text-muted-foreground mt-0.5">Ready for live agency adjustments, custom theme application, and instant PDF rendering.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Core Feature 2: Customizable Itinerary Builder & Travel Directory ── */}
      <section className="py-20 lg:py-28 bg-secondary/30">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-16 scroll-reveal">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent mb-3">
              Operational Efficiency
            </p>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-5">
              Itinerary Builder &amp; Centralized Travel Directory
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Creating an itinerary feels like assembling a trip from building blocks rather than manually typing a document.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Card 1: Directory */}
            <div className="p-8 rounded-2xl bg-card border border-border/60 hover:border-accent/30 transition-all duration-300 flex flex-col scroll-reveal">
              <div className="w-12 h-12 rounded-xl bg-accent/10 text-accent flex items-center justify-center mb-6">
                <Database size={24} />
              </div>
              <h3 className="font-display text-xl font-bold text-foreground mb-3">
                Reusable Travel Directory
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed flex-1 mb-4">
                Maintain a centralized catalog of Hotels, Destinations, Places, Activities, Experiences, and Transport services. When designing an itinerary, staff select saved items in one click instead of typing the same hotel descriptions repeatedly.
              </p>
              <div className="pt-4 border-t border-border/50 text-xs font-semibold text-accent flex items-center gap-1.5">
                Build your reusable travel knowledge base
              </div>
            </div>

            {/* Card 2: Itinerary Builder */}
            <div className="p-8 rounded-2xl bg-card border border-border/60 hover:border-accent/30 transition-all duration-300 flex flex-col scroll-reveal">
              <div className="w-12 h-12 rounded-xl bg-accent/10 text-accent flex items-center justify-center mb-6">
                <Compass size={24} />
              </div>
              <h3 className="font-display text-xl font-bold text-foreground mb-3">
                Day-by-Day Trip Assembly
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed flex-1 mb-4">
                Add day-by-day sightseeing, assign hotel check-ins, include flight numbers or ground transfers, define meal inclusions, and calculate per-person and group pricing dynamically.
              </p>
              <div className="pt-4 border-t border-border/50 text-xs font-semibold text-accent flex items-center gap-1.5">
                Modular trip assembly with zero layout hassle
              </div>
            </div>

            {/* Card 3: Custom Templates */}
            <div className="p-8 rounded-2xl bg-card border border-border/60 hover:border-accent/30 transition-all duration-300 flex flex-col scroll-reveal">
              <div className="w-12 h-12 rounded-xl bg-accent/10 text-accent flex items-center justify-center mb-6">
                <Layers size={24} />
              </div>
              <h3 className="font-display text-xl font-bold text-foreground mb-3">
                Customizable Brand Templates
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed flex-1 mb-4">
                Agencies aren't locked into rigid, generic document designs. The system allows customized agency branding, color palettes, cover page styles, and document typography matching their luxury or adventure brand identity.
              </p>
              <div className="pt-4 border-t border-border/50 text-xs font-semibold text-accent flex items-center gap-1.5">
                Branded PDF layouts ready for high-ticket clients
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Core Feature 3: Quotations, CRM & Centralized Client 360 ── */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            {/* Visual CRM Board */}
            <div className="lg:col-span-6 order-2 lg:order-1 scroll-reveal">
              <div className="bg-card border border-border/70 rounded-2xl p-6 shadow-xl space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-border/50">
                  <div>
                    <h4 className="font-display text-base font-bold text-foreground">Sales Pipeline &amp; Quotations</h4>
                    <p className="text-xs text-muted-foreground">Active Travel Enquiries Lifecycle</p>
                  </div>
                  <span className="text-xs px-2.5 py-1 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 font-semibold rounded-full">
                    94.2% Delivery Rate
                  </span>
                </div>

                <div className="space-y-3 text-xs">
                  {/* Stage 1: Enquiry */}
                  <div className="p-3.5 bg-secondary/50 rounded-xl border border-border/50 flex items-center justify-between">
                    <div>
                      <span className="text-[10px] uppercase font-bold text-muted-foreground">Stage 01 • New Enquiry</span>
                      <p className="font-semibold text-foreground text-sm">Kashmir Tour Package • 2 Pax</p>
                      <p className="text-muted-foreground text-[11px]">Srinagar, Gulmarg, Sonmarg, Pahalgam • ₹55,000</p>
                    </div>
                    <span className="px-2 py-1 bg-blue-500/10 text-blue-500 font-medium rounded">Enquiry</span>
                  </div>

                  {/* Stage 2: Quotation Sent */}
                  <div className="p-3.5 bg-secondary/50 rounded-xl border border-border/50 flex items-center justify-between">
                    <div>
                      <span className="text-[10px] uppercase font-bold text-muted-foreground">Stage 02 • Quote Dispatched</span>
                      <p className="font-semibold text-foreground text-sm">Swiss &amp; Paris Honeymoon • 2 Pax</p>
                      <p className="text-muted-foreground text-[11px]">Ref: #TRV-8941 • ₹3,40,000</p>
                    </div>
                    <span className="px-2 py-1 bg-yellow-500/10 text-yellow-600 dark:text-yellow-400 font-medium rounded">Quote Sent</span>
                  </div>

                  {/* Stage 3: Confirmed Trip & Revenue */}
                  <div className="p-3.5 bg-accent/10 rounded-xl border border-accent/30 flex items-center justify-between">
                    <div>
                      <span className="text-[10px] uppercase font-bold text-accent">Stage 03 • Confirmed Booking</span>
                      <p className="font-semibold text-foreground text-sm">Exotic Sri Lanka Heritage, Nature &amp; Beach</p>
                      <p className="text-muted-foreground text-[11px]">Dambulla, Sigiriya, Kandy, Bentota • 5 Pax • ₹1,60,000</p>
                    </div>
                    <span className="px-2.5 py-1 bg-emerald-500 text-emerald-950 font-bold rounded">Confirmed</span>
                  </div>
                </div>

                <div className="pt-3 border-t border-border/50 grid grid-cols-2 gap-4 text-xs">
                  <div>
                    <span className="text-muted-foreground block text-[11px]">Client 360 Linked</span>
                    <strong className="text-foreground">Enquiries, Quotes &amp; Trips</strong>
                  </div>
                  <div>
                    <span className="text-muted-foreground block text-[11px]">Revenue Visibility</span>
                    <strong className="text-foreground">Pipeline &amp; Confirmed Trips</strong>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Text */}
            <div className="lg:col-span-6 order-1 lg:order-2 space-y-6 scroll-reveal">
              <div className="inline-flex items-center gap-2 text-accent font-semibold text-xs uppercase tracking-widest">
                <Users size={14} /> Complete Sales &amp; Client Record
              </div>

              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
                Connect Sales Activity with Actual Travel Operations
              </h2>

              <p className="text-muted-foreground text-lg leading-relaxed">
                This isn't merely a contact phonebook. The CRM connects sales conversations with live operational inventories and trip delivery.
              </p>

              <div className="space-y-4 text-sm text-muted-foreground">
                <div className="p-4 bg-card rounded-xl border border-border/60">
                  <h4 className="font-bold text-foreground mb-1">Central Client 360 Records</h4>
                  <p>Every client record centrally stores historical enquiries, past quotations, confirmed itineraries, issued documents, communication notes, and payments.</p>
                </div>

                <div className="p-4 bg-card rounded-xl border border-border/60">
                  <h4 className="font-bold text-foreground mb-1">Quotation to Lead Conversion</h4>
                  <p>Create quotations, track customer review statuses, convert approved quotes into active leads, and monitor confirmed business without re-entering passenger information.</p>
                </div>

                <div className="p-4 bg-card rounded-xl border border-border/60">
                  <h4 className="font-bold text-foreground mb-1">Revenue &amp; Business Visibility</h4>
                  <p>Track business performance, total booked revenue, active sales pipeline, and quote turnaround speeds from an executive dashboard.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Core Feature 4: Automated PDF Generation, Vector Structure & Dynamic QR Codes ── */}
      <section className="py-20 lg:py-28 bg-secondary/30">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-16 scroll-reveal">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent mb-3">
              Document Engineering
            </p>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-5">
              Automated, Interactive &amp; Vector-Grade PDF Generation
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              The output is a <strong>properly structured, vector-based PDF document</strong> with selectable text, sharp brand typography, and live digital interactivity — not a flattened screenshot or blurry image export.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Feature 1 */}
            <div className="p-6 rounded-2xl bg-card border border-border/60 hover:border-accent/30 transition-all duration-300 scroll-reveal">
              <div className="w-10 h-10 rounded-lg bg-accent/10 text-accent flex items-center justify-center mb-4">
                <FileText size={20} />
              </div>
              <h3 className="font-display font-bold text-lg text-foreground mb-2">Structured Vector Output</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Crisp text hierarchy, sharp company logos, professional table formatting, and clean margins engineered for digital viewing and physical high-resolution printing.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="p-6 rounded-2xl bg-card border border-border/60 hover:border-accent/30 transition-all duration-300 scroll-reveal">
              <div className="w-10 h-10 rounded-lg bg-accent/10 text-accent flex items-center justify-center mb-4">
                <QrCode size={20} />
              </div>
              <h3 className="font-display font-bold text-lg text-foreground mb-2">Dynamic QR Codes</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Automatically embed dynamic QR codes inside generated travel documents. Travelers scan the physical printout or PDF to view live trip updates or itineraries online.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="p-6 rounded-2xl bg-card border border-border/60 hover:border-accent/30 transition-all duration-300 scroll-reveal">
              <div className="w-10 h-10 rounded-lg bg-accent/10 text-accent flex items-center justify-center mb-4">
                <MessageCircle size={20} />
              </div>
              <h3 className="font-display font-bold text-lg text-foreground mb-2">Clickable Smart Links</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">
                PDF contact buttons open WhatsApp chats directly, phone numbers initiate quick calls, and hotel addresses open interactive navigation maps.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="p-6 rounded-2xl bg-card border border-border/60 hover:border-accent/30 transition-all duration-300 scroll-reveal">
              <div className="w-10 h-10 rounded-lg bg-accent/10 text-accent flex items-center justify-center mb-4">
                <ShieldCheck size={20} />
              </div>
              <h3 className="font-display font-bold text-lg text-foreground mb-2">Reference ID Tracking</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Every generated itinerary and quotation receives a unique tracking reference number (e.g., #TRV-8941, #QT-2026-LK5D) so staff can instantly retrieve trip documents.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── 7-Step Product Workflow Section ── */}
      <section className="py-20 lg:py-28" id="system-architecture">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-16 scroll-reveal">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent mb-3">
              Step-by-Step Architecture
            </p>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-5">
              The 7-Step Travel CRM Workflow
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              From raw client enquiry to confirmed booking and executive revenue tracking.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-7 gap-4">
            {[
              {
                num: "01",
                title: "Add or Import",
                desc: "Upload an existing Word/PDF itinerary or start fresh from scratch."
              },
              {
                num: "02",
                title: "Structure",
                desc: "The parser extracts and organizes destinations, dates, and hotel stays."
              },
              {
                num: "03",
                title: "Customize",
                desc: "Modify daily activities and apply your preferred agency template."
              },
              {
                num: "04",
                title: "Enrich",
                desc: "Pull hotels from the directory, add flights, pricing, and client details."
              },
              {
                num: "05",
                title: "Generate",
                desc: "Render the final structured, vector-grade travel document."
              },
              {
                num: "06",
                title: "Share",
                desc: "Deliver interactive PDFs with dynamic QR codes and WhatsApp triggers."
              },
              {
                num: "07",
                title: "Track",
                desc: "Track client interactions, conversions, and associated revenue in the CRM."
              }
            ].map((step) => (
              <div
                key={step.num}
                className="p-5 rounded-2xl bg-card border border-border/60 hover:border-accent/40 transition-all flex flex-col scroll-reveal"
              >
                <span className="text-xs font-mono font-bold text-accent mb-3">{step.num}</span>
                <h3 className="font-display font-bold text-sm text-foreground mb-2">{step.title}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed flex-1">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Technical Architecture (Restrained & Product-Focused) ── */}
      <section className="py-20 lg:py-24 bg-secondary/30">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-16 scroll-reveal">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent mb-3">
              Engineering Architecture
            </p>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Custom Software Product Architecture
            </h2>
            <p className="text-muted-foreground text-base leading-relaxed">
              Brandex approached this as a robust custom enterprise software platform designed for scalability, security, and sub-second performance.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <div className="p-6 bg-card border border-border/60 rounded-xl">
              <h3 className="font-bold text-foreground text-base mb-2">CRM &amp; Sales Engine</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Centralized client records, quotation status lifecycle, lead conversion tracking, and revenue overview.
              </p>
            </div>

            <div className="p-6 bg-card border border-border/60 rounded-xl">
              <h3 className="font-bold text-foreground text-base mb-2">Travel Operations &amp; Directory</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Relational catalog of hotels, destinations, activities, and reusable supplier data.
              </p>
            </div>

            <div className="p-6 bg-card border border-border/60 rounded-xl">
              <h3 className="font-bold text-foreground text-base mb-2">Document Parsing Engine</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Automated parsing of unstructured Word (.docx) and PDF itineraries into typed data schemas via multi-modal vision pipelines.
              </p>
            </div>

            <div className="p-6 bg-card border border-border/60 rounded-xl">
              <h3 className="font-bold text-foreground text-base mb-2">Vector PDF Engine</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">
                High-fidelity document compilation with selectable typography, dynamic QR codes, and embedded links.
              </p>
            </div>

            <div className="p-6 bg-card border border-border/60 rounded-xl">
              <h3 className="font-bold text-foreground text-base mb-2">Template System</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Reusable, customizable design themes allowing travel agencies to maintain unique brand identities.
              </p>
            </div>

            <div className="p-6 bg-card border border-border/60 rounded-xl">
              <h3 className="font-bold text-foreground text-base mb-2">Security &amp; Data Control</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Role-based access control (RBAC), client privacy protection, and encrypted data storage.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Psychological Pricing Section ── */}
      <section className="py-20 lg:py-28 relative overflow-hidden bg-gradient-to-b from-background via-secondary/20 to-background border-y border-border/60">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(var(--accent-rgb),0.07),transparent_50%)] pointer-events-none" />

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center space-y-4 mb-14 scroll-reveal">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-accent/10 border border-accent/25 text-accent text-xs font-bold uppercase tracking-wider">
              <Tag size={13} className="text-accent" />
              Simple, Transparent Investment
            </div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground tracking-tight">
              Predictable Pricing Built for Growing Travel Agencies
            </h2>
            <p className="text-muted-foreground text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
              No hidden setup surcharges. No per-quote fees. Transform your itinerary workflow for less than the cost of a daily cup of tea.
            </p>
          </div>

          <div className="grid lg:grid-cols-12 gap-8 max-w-5xl mx-auto items-stretch">
            {/* Primary Plan: Agency Growth (Psychological Anchor & Highlight) */}
            <div className="lg:col-span-7 bg-card border-2 border-accent/40 rounded-3xl p-8 sm:p-10 shadow-2xl relative flex flex-col justify-between scroll-reveal hover:border-accent/70 transition-all">
              {/* Highlight Badge */}
              <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-accent text-accent-foreground text-[11px] font-extrabold uppercase tracking-widest px-4 py-1 rounded-full shadow-lg flex items-center gap-1.5">
                <Zap size={13} className="fill-current" />
                Early Adopter Launch Offer • 25% Off Forever
              </div>

              <div>
                <div className="flex items-start justify-between gap-4 mb-6">
                  <div>
                    <h3 className="font-display text-2xl font-bold text-foreground">
                      Agency Growth Suite
                    </h3>
                    <p className="text-xs text-muted-foreground mt-1">
                      Complete all-in-one operating platform for travel agencies, outbound tour operators, and boutique curators.
                    </p>
                  </div>
                  <div className="p-3 bg-accent/10 rounded-2xl border border-accent/20 shrink-0">
                    <Plane size={24} className="text-accent" />
                  </div>
                </div>

                {/* Price Display with Psychological Strikethrough & Anchor */}
                <div className="p-5 bg-secondary/50 border border-border/80 rounded-2xl mb-6">
                  <div className="flex flex-wrap items-baseline gap-2 mb-2">
                    <span className="text-2xl font-bold text-muted-foreground/60 line-through">
                      ₹2,000
                    </span>
                    <span className="text-4xl sm:text-5xl font-extrabold text-foreground tracking-tight">
                      ₹1,500
                    </span>
                    <span className="text-sm font-semibold text-muted-foreground">
                      / month
                    </span>
                    <span className="ml-auto inline-flex items-center gap-1 px-2.5 py-1 text-xs font-bold bg-emerald-500/10 border border-emerald-500/25 text-emerald-400 rounded-full">
                      Save ₹500/mo
                    </span>
                  </div>

                  <div className="flex items-center gap-2 text-xs font-medium text-accent">
                    <Zap size={13} className="shrink-0" />
                    <span>Just <strong>₹50 / day</strong> — easily recovered on your very first booked itinerary.</span>
                  </div>
                </div>

                {/* Inclusions Checklist */}
                <div className="space-y-3 mb-8">
                  <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Everything Included:</p>
                  
                  <div className="grid sm:grid-cols-2 gap-2.5 text-xs text-foreground">
                    <div className="flex items-start gap-2">
                      <CheckCircle2 size={15} className="text-accent shrink-0 mt-0.5" />
                      <span><strong>Unlimited</strong> Itineraries &amp; Trips</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle2 size={15} className="text-accent shrink-0 mt-0.5" />
                      <span><strong>AI Document Auto-Parser</strong> (DOCX / PDF)</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle2 size={15} className="text-accent shrink-0 mt-0.5" />
                      <span><strong>Vector PDF Generator</strong> (All Templates)</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle2 size={15} className="text-accent shrink-0 mt-0.5" />
                      <span><strong>1-Click WhatsApp Summaries</strong></span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle2 size={15} className="text-accent shrink-0 mt-0.5" />
                      <span><strong>Master Travel Directory</strong> (Hotels &amp; Rates)</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle2 size={15} className="text-accent shrink-0 mt-0.5" />
                      <span><strong>Kanban Sales Pipeline</strong> &amp; Lead Tracking</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle2 size={15} className="text-accent shrink-0 mt-0.5" />
                      <span><strong>Dynamic QR Code</strong> Digital Itineraries</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle2 size={15} className="text-accent shrink-0 mt-0.5" />
                      <span><strong>White-Label Branding</strong> (Logo &amp; GSTIN)</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle2 size={15} className="text-accent shrink-0 mt-0.5" />
                      <span><strong>Free Migration</strong> of Existing Word/PDF Files</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle2 size={15} className="text-accent shrink-0 mt-0.5" />
                      <span><strong>Monthly Billing</strong> • Cancel Anytime</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* CTAs */}
              <div className="space-y-3 pt-2">
                <Button asChild size="lg" className="w-full bg-accent text-accent-foreground hover:bg-accent/90 py-6 text-base font-bold shadow-lg shadow-accent/20">
                  <Link to="/contact?service=Custom%20Software">
                    Get Started at ₹1,500/mo <ArrowRight size={17} className="ml-2" />
                  </Link>
                </Button>

                <div className="grid grid-cols-2 gap-2">
                  <Button
                    onClick={() => openBooking()}
                    variant="outline"
                    size="sm"
                    className="w-full text-xs font-semibold border-border/80 hover:bg-secondary flex items-center justify-center gap-1.5"
                    aria-label="Book a 15-minute live demo"
                  >
                    <Calendar size={13} />
                    Book Live Demo
                  </Button>

                  <a
                    href="https://wa.me/919480944727?text=Hi%20Brandex%20team,%20I%20am%20interested%20in%20the%20Travel%20CRM%20launch%20offer%20(₹1,500/month).%20Please%20share%20details."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-1.5 px-3 py-2 text-xs font-semibold rounded-lg bg-emerald-500/10 border border-emerald-500/25 text-emerald-400 hover:bg-emerald-500/20 transition-all text-center"
                  >
                    <MessageCircle size={13} />
                    WhatsApp Inquiry
                  </a>
                </div>
              </div>
            </div>

            {/* Secondary Plan: Enterprise & Custom Multi-DMC */}
            <div className="lg:col-span-5 bg-card/60 border border-border/70 rounded-3xl p-8 sm:p-10 shadow-lg flex flex-col justify-between scroll-reveal">
              <div>
                <div className="mb-6">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-accent px-2.5 py-1 bg-accent/10 rounded-full border border-accent/20 inline-block mb-3">
                    Multi-Branch &amp; Custom Workflows
                  </span>
                  <h3 className="font-display text-2xl font-bold text-foreground">
                    Enterprise &amp; DMC Network
                  </h3>
                  <p className="text-xs text-muted-foreground mt-1">
                    For multi-destination tour operators, large travel franchises, and DMCs requiring bespoke infrastructure.
                  </p>
                </div>

                <div className="p-5 bg-secondary/30 border border-border/60 rounded-2xl mb-6">
                  <div className="text-2xl sm:text-3xl font-bold text-foreground">
                    Custom Architecture
                  </div>
                  <p className="text-xs text-muted-foreground mt-1">
                    Tailored engineering, dedicated private cloud, and customized integrations.
                  </p>
                </div>

                <div className="space-y-3 mb-8">
                  <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Enterprise Features:</p>
                  
                  <div className="space-y-2.5 text-xs text-muted-foreground">
                    <div className="flex items-start gap-2">
                      <Check size={14} className="text-accent shrink-0 mt-0.5" />
                      <span>Dedicated Cloud VPC / On-Premise Deployment</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <Check size={14} className="text-accent shrink-0 mt-0.5" />
                      <span>Multi-Branch &amp; Franchise Role Permissions (RBAC)</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <Check size={14} className="text-accent shrink-0 mt-0.5" />
                      <span>Custom GDS, Flights &amp; Hotel API Integrations</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <Check size={14} className="text-accent shrink-0 mt-0.5" />
                      <span>Custom B2B Sub-Agent Booking Portals</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <Check size={14} className="text-accent shrink-0 mt-0.5" />
                      <span>Dedicated SLA &amp; Direct WhatsApp Engineering Support</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <Check size={14} className="text-accent shrink-0 mt-0.5" />
                      <span>Full Source Code IP Transfer Options Available</span>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <Button asChild variant="outline" size="lg" className="w-full border-border/80 hover:bg-secondary font-bold text-sm py-6">
                  <Link to="/contact?service=Custom%20Software">
                    Discuss Enterprise Solution <ArrowRight size={15} className="ml-2" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>

          {/* Trust, Guarantees & Risk-Reversals */}
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto scroll-reveal">
            <div className="p-4 bg-card border border-border/60 rounded-2xl flex items-center gap-3">
              <div className="p-2.5 bg-accent/10 rounded-xl text-accent shrink-0">
                <ShieldCheck size={20} />
              </div>
              <div>
                <h4 className="font-bold text-xs text-foreground">Zero Risk Onboarding</h4>
                <p className="text-[11px] text-muted-foreground">14-day setup with guided onboarding</p>
              </div>
            </div>

            <div className="p-4 bg-card border border-border/60 rounded-2xl flex items-center gap-3">
              <div className="p-2.5 bg-accent/10 rounded-xl text-accent shrink-0">
                <UploadCloud size={20} />
              </div>
              <div>
                <h4 className="font-bold text-xs text-foreground">Free File Migration</h4>
                <p className="text-[11px] text-muted-foreground">We import your Word/PDF files</p>
              </div>
            </div>

            <div className="p-4 bg-card border border-border/60 rounded-2xl flex items-center gap-3">
              <div className="p-2.5 bg-accent/10 rounded-xl text-accent shrink-0">
                <CreditCard size={20} />
              </div>
              <div>
                <h4 className="font-bold text-xs text-foreground">No Lock-in Contracts</h4>
                <p className="text-[11px] text-muted-foreground">Simple monthly billing • Cancel anytime</p>
              </div>
            </div>

            <div className="p-4 bg-card border border-border/60 rounded-2xl flex items-center gap-3">
              <div className="p-2.5 bg-accent/10 rounded-xl text-accent shrink-0">
                <Database size={20} />
              </div>
              <div>
                <h4 className="font-bold text-xs text-foreground">100% Data Portability</h4>
                <p className="text-[11px] text-muted-foreground">Export your clients &amp; quotes anytime</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Case Study Section (Factual & Honest) ── */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto bg-card border border-border/70 rounded-3xl p-8 sm:p-12 shadow-xl scroll-reveal">
            <div className="mb-10 text-center">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-accent block mb-2">Case Study Deep Dive</span>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground">
                How Brandex Built a Custom Travel Operations Platform
              </h2>
            </div>

            <div className="space-y-10">
              {/* Challenge */}
              <div className="border-l-2 border-accent pl-6">
                <h3 className="font-display text-xl font-bold text-foreground mb-2">The Challenge</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  The travel business was operating with disjointed tools: client leads arrived via WhatsApp, itineraries were drafted manually in Microsoft Word, rates were calculated on Excel spreadsheets, and final itineraries were exported as static PDFs that could not be easily revised. When clients requested adjustments, staff had to manually re-edit multiple documents, leading to version confusion and administrative friction.
                </p>
              </div>

              {/* Approach */}
              <div className="border-l-2 border-accent pl-6">
                <h3 className="font-display text-xl font-bold text-foreground mb-2">The Approach</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Brandex studied the real daily operational patterns of travel consultants, quotation desk agents, and tour managers. Rather than forcing the agency into a generic CRM that lacked travel-specific concepts, we engineered a dedicated platform connecting customer relationships with structured travel operations, a master directory of properties, and automated document generation.
                </p>
              </div>

              {/* Solution */}
              <div className="border-l-2 border-accent pl-6">
                <h3 className="font-display text-xl font-bold text-foreground mb-2">The Solution</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  A custom Travel CRM combining client management, quotation workflows, day-by-day itinerary builders, reusable travel directories, document parsing (Word/PDF to itinerary), and automated PDF generation featuring dynamic QR codes and clickable WhatsApp communication links.
                </p>
              </div>

              {/* Result */}
              <div className="border-l-2 border-accent pl-6">
                <h3 className="font-display text-xl font-bold text-foreground mb-2">The Result</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  A unified operational pipeline where travel consultants move effortlessly from enquiry to quotation to itinerary to confirmed booking without repeatedly rebuilding information across different tools.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Built by Brandex Attribution & Capabilities ── */}
      <section className="py-16 lg:py-20 bg-primary/5 border-y border-border/50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center space-y-6 scroll-reveal">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-accent">Software Engineering Partner</span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground">
              Built by Brandex
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              Custom software for businesses that have outgrown spreadsheets, manual Word templates, and disconnected tools.
            </p>

            <div className="flex flex-wrap justify-center gap-2.5 pt-2">
              {[
                "Custom CRMs",
                "Business Automation",
                "Web Applications",
                "Internal Tools",
                "Customer Portals",
                "AI-Powered Workflows",
                "Document Automation",
                "ERP Systems"
              ].map((cap) => (
                <span
                  key={cap}
                  className="px-3.5 py-1.5 rounded-full bg-card border border-border/60 text-xs font-semibold text-foreground"
                >
                  {cap}
                </span>
              ))}
            </div>

            <div className="pt-6">
              <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 px-8 py-6 text-base font-semibold">
                <Link to="/contact">
                  Have a workflow like this? Let's build it. <ArrowRight size={17} className="ml-2" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* ── Transparent Pricing & Subscription Section ── */}
      <section id="pricing" className="py-20 lg:py-28 border-t border-border/40 bg-secondary/20">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="text-center max-w-3xl mx-auto mb-14 scroll-reveal">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent mb-2 block">
              Transparent Pricing • Zero Setup Fees
            </span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Simple, Predictable Agency Pricing
            </h2>
            <p className="text-muted-foreground text-base sm:text-lg leading-relaxed">
              Choose the monthly agency subscription or opt for an annual license with 2 months free. No hidden setup charges, cancel anytime.
            </p>

            {/* Monthly / Annual Toggle */}
            <div className="flex items-center justify-center gap-3 mt-8">
              <span className={`text-xs font-semibold ${pricingCycle === "monthly" ? "text-foreground" : "text-muted-foreground"}`}>
                Monthly Billing
              </span>
              <button
                type="button"
                onClick={() => setPricingCycle(pricingCycle === "monthly" ? "annual" : "monthly")}
                className="w-12 h-6 rounded-full bg-secondary border border-border/80 p-0.5 relative transition-colors cursor-pointer"
              >
                <div
                  className={`w-5 h-5 rounded-full bg-accent transition-transform duration-200 ${
                    pricingCycle === "annual" ? "translate-x-6" : "translate-x-0"
                  }`}
                />
              </button>
              <span className={`text-xs font-semibold flex items-center gap-1.5 ${pricingCycle === "annual" ? "text-foreground" : "text-muted-foreground"}`}>
                Annual Billing <span className="text-[10px] font-bold text-emerald-500 px-2 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/20">2 Months Free</span>
              </span>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Standard Agency Plan */}
            <div className="p-8 sm:p-10 rounded-3xl bg-card border-2 border-accent/40 shadow-2xl relative flex flex-col justify-between">
              <div className="absolute top-0 right-0">
                <span className="inline-block bg-accent text-accent-foreground font-bold text-[10px] uppercase tracking-widest px-4 py-1.5 rounded-bl-2xl rounded-tr-3xl shadow-md">
                  Most Popular
                </span>
              </div>

              <div>
                <div className="text-xs uppercase font-bold tracking-wider text-accent mb-1">
                  Ready-to-Deploy SaaS
                </div>
                <h3 className="font-display text-2xl sm:text-3xl font-bold text-foreground mb-2">
                  Standard Travel CRM
                </h3>
                
                <div className="flex flex-wrap items-baseline gap-2.5 mb-2">
                  <span className="text-xl font-bold text-muted-foreground/60 line-through">
                    {pricingCycle === "monthly" ? "₹2,000" : "₹24,000"}
                  </span>
                  <span className="font-display text-4xl font-extrabold text-foreground">
                    {pricingCycle === "monthly" ? "₹1,500" : "₹15,000"}
                  </span>
                  <span className="text-sm font-semibold text-accent">
                    {pricingCycle === "monthly" ? "/ month" : "/ year"}
                  </span>
                </div>

                <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-500 border border-emerald-500/20 text-xs font-semibold mb-6">
                  <span>
                    {pricingCycle === "monthly"
                      ? "Launch Offer • Save ₹500/mo (₹50/day)"
                      : "Save ₹9,000/yr • 2 Months Free"}
                  </span>
                </div>

                <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
                  Complete ready-made travel agency software with live itinerary auto-parsing, vector proposal generation, and sales CRM pipeline.
                </p>

                <ul className="space-y-3 text-sm text-foreground/90 border-t border-border/50 pt-6 mb-8">
                  <li className="flex items-center gap-2.5">
                    <CheckCircle2 size={16} className="text-emerald-500 shrink-0" />
                    <span><strong>Unlimited AI Itinerary Auto-Parsing</strong> (Word &amp; PDF)</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <CheckCircle2 size={16} className="text-emerald-500 shrink-0" />
                    <span><strong>High-Resolution Vector PDF Generator</strong> with Dynamic QR</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <CheckCircle2 size={16} className="text-emerald-500 shrink-0" />
                    <span><strong>Master Hotel &amp; Sightseeing Directory</strong></span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <CheckCircle2 size={16} className="text-emerald-500 shrink-0" />
                    <span><strong>Kanban Sales Pipeline CRM</strong> (Enquiry to Confirmation)</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <CheckCircle2 size={16} className="text-emerald-500 shrink-0" />
                    <span><strong>Full Agency White-Labeling</strong> (Logo, GSTIN, Branding)</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <CheckCircle2 size={16} className="text-emerald-500 shrink-0" />
                    <span><strong>Zero Setup Fees</strong> + Free Itinerary File Migration</span>
                  </li>
                </ul>
              </div>

              <Button
                onClick={() =>
                  openCheckout({
                    productId: "travel-crm",
                    title: `Brandex Travel CRM (${pricingCycle === "monthly" ? "Monthly Plan" : "Annual License"})`,
                    price: pricingCycle === "monthly" ? 1500 : 15000,
                    regularPrice: pricingCycle === "monthly" ? 2000 : 24000,
                    cadence: pricingCycle === "monthly" ? "Monthly Subscription" : "Annual Subscription (2 Months Free)",
                    badge: pricingCycle === "monthly" ? "Launch Offer (25% OFF)" : "Annual Pass (Save ₹9,000)",
                    description: "Auto-converts Word/PDF itineraries, dynamic vector PDF generation, hotel directory, and lead pipeline CRM.",
                  })
                }
                size="lg"
                className="w-full bg-accent text-accent-foreground hover:bg-accent/90 font-bold shadow-lg shadow-accent/20 cursor-pointer h-12"
              >
                {pricingCycle === "monthly" ? "Subscribe Now (₹1,500/mo)" : "Get Annual Pass (₹15,000/yr)"} <ArrowRight size={15} className="ml-1.5" />
              </Button>
            </div>

            {/* Custom Engineering Plan */}
            <div className="p-8 sm:p-10 rounded-3xl bg-card border border-border/70 shadow-md flex flex-col justify-between">
              <div>
                <div className="text-xs uppercase font-bold tracking-wider text-muted-foreground mb-1">
                  Custom Engineering
                </div>
                <h3 className="font-display text-2xl sm:text-3xl font-bold text-foreground mb-2">
                  Enterprise Travel Portal
                </h3>
                <div className="flex items-baseline gap-2 mb-4">
                  <span className="font-display text-2xl font-bold text-foreground">Custom Architecture</span>
                  <span className="text-sm text-muted-foreground">Tailored Scope</span>
                </div>
                <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
                  For large tour operators needing Amadeus / Sabre / Galileo GDS flight APIs, B2B sub-agent booking portals, or multi-branch accounting sync.
                </p>

                <ul className="space-y-3 text-sm text-foreground/80 border-t border-border/50 pt-6 mb-8">
                  <li className="flex items-center gap-2.5">
                    <CheckCircle2 size={16} className="text-accent shrink-0" />
                    <span>Live GDS Flight &amp; Hotel API Integrations</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <CheckCircle2 size={16} className="text-accent shrink-0" />
                    <span>B2B Sub-Agent Markup &amp; Commission Portals</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <CheckCircle2 size={16} className="text-accent shrink-0" />
                    <span>Payment Gateway Integration (Razorpay, Stripe)</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <CheckCircle2 size={16} className="text-accent shrink-0" />
                    <span>Automated WhatsApp Bot Payment Reminders</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <CheckCircle2 size={16} className="text-accent shrink-0" />
                    <span>Dedicated Cloud Cluster &amp; 99.9% SLA Guarantee</span>
                  </li>
                </ul>
              </div>

              <Button asChild variant="outline" size="lg" className="w-full border-border hover:bg-secondary h-12 font-semibold">
                <Link to="/contact?service=Custom%20Travel%20CRM%20Development">
                  Request Custom Scope &amp; Architecture RFP
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* ── AI Search & AEO Q&A Section (Clean Semantic Architecture) ── */}
      <section className="py-20 lg:py-24">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="text-center mb-14 scroll-reveal">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent mb-2 block">
              Knowledge &amp; FAQ
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground">
              Frequently Asked Questions
            </h2>
            <p className="text-muted-foreground text-sm mt-2">
              Clear, factual answers regarding the Travel CRM and Brandex custom software development capabilities.
            </p>
          </div>

          <div className="space-y-6 scroll-reveal">
            <div className="p-6 bg-card border border-border/60 rounded-2xl">
              <h3 className="font-bold text-foreground text-base mb-2">
                What is this Travel CRM?
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                This Travel CRM is a custom software platform engineered by Brandex for travel agencies, tour operators, and destination management companies (DMCs) to manage clients, quotations, itineraries, travel data, and automated travel documents from one centralized system.
              </p>
            </div>

            <div className="p-6 bg-card border border-border/60 rounded-2xl">
              <h3 className="font-bold text-foreground text-base mb-2">
                How much does the Travel CRM cost and what is included?
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                The standard agency suite is regular ₹2,000/month, currently discounted to an early adopter launch offer of <strong>₹1,500/month (₹50/day)</strong> with zero setup fees. It includes unlimited AI document auto-parsing from Word and PDF files, vector PDF proposal generation, master travel directory, and complete sales pipeline management with monthly billing, cancel anytime flexibility, and free onboarding migration assistance.
              </p>
            </div>

            <div className="p-6 bg-card border border-border/60 rounded-2xl">
              <h3 className="font-bold text-foreground text-base mb-2">
                What can the Travel CRM do?
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                It manages clients and quotations, converts quotations into leads, maintains travel directories of hotels and activities, creates and customizes day-by-day itineraries, imports information from existing Word or PDF documents, generates professional vector PDFs, and includes interactive elements such as direct WhatsApp links and dynamic QR codes.
              </p>
            </div>

            <div className="p-6 bg-card border border-border/60 rounded-2xl">
              <h3 className="font-bold text-foreground text-base mb-2">
                Who is it for?
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                It is designed for travel agencies, tour operators, destination management companies, luxury travel curators, and travel businesses that need a centralized system for managing their sales and itinerary workflows without relying on disconnected documents.
              </p>
            </div>

            <div className="p-6 bg-card border border-border/60 rounded-2xl">
              <h3 className="font-bold text-foreground text-base mb-2">
                Can the system handle custom itinerary templates?
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Yes. Travel businesses can define and customize their own PDF itinerary templates, color palettes, cover styles, and branding standards rather than being restricted to rigid pre-built layouts.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Related Services & Related Projects ── */}
      <section className="py-20 bg-secondary/30 border-t border-border/50">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Related Services */}
            <div className="space-y-6 scroll-reveal">
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-accent mb-1">Expertise Applied</p>
                <h3 className="font-display text-2xl font-bold text-foreground">Related Services</h3>
              </div>

              <div className="space-y-3">
                <Link
                  to="/services/software-development"
                  className="p-5 bg-card border border-border/60 rounded-xl hover:border-accent/40 flex items-center justify-between group transition-all"
                >
                  <div>
                    <h4 className="font-bold text-sm text-foreground group-hover:text-accent transition-colors">
                      Custom Software Development
                    </h4>
                    <p className="text-xs text-muted-foreground mt-0.5">
                      Bespoke web applications, APIs, and scalable enterprise architectures.
                    </p>
                  </div>
                  <ChevronRight size={16} className="text-muted-foreground group-hover:text-accent group-hover:translate-x-1 transition-all" />
                </Link>

                <Link
                  to="/services/ai-automation"
                  className="p-5 bg-card border border-border/60 rounded-xl hover:border-accent/40 flex items-center justify-between group transition-all"
                >
                  <div>
                    <h4 className="font-bold text-sm text-foreground group-hover:text-accent transition-colors">
                      AI &amp; Workflow Automation
                    </h4>
                    <p className="text-xs text-muted-foreground mt-0.5">
                      Automated document parsing, smart agents, and workflow integrations.
                    </p>
                  </div>
                  <ChevronRight size={16} className="text-muted-foreground group-hover:text-accent group-hover:translate-x-1 transition-all" />
                </Link>

                <Link
                  to="/services/website-development"
                  className="p-5 bg-card border border-border/60 rounded-xl hover:border-accent/40 flex items-center justify-between group transition-all"
                >
                  <div>
                    <h4 className="font-bold text-sm text-foreground group-hover:text-accent transition-colors">
                      Website &amp; Web App Development
                    </h4>
                    <p className="text-xs text-muted-foreground mt-0.5">
                      High-performance platforms built with React, Next.js, and TypeScript.
                    </p>
                  </div>
                  <ChevronRight size={16} className="text-muted-foreground group-hover:text-accent group-hover:translate-x-1 transition-all" />
                </Link>
              </div>
            </div>

            {/* Related Projects */}
            <div className="space-y-6 scroll-reveal">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-widest text-accent mb-1">Portfolio</p>
                  <h3 className="font-display text-2xl font-bold text-foreground">More Projects</h3>
                </div>
                <Link to="/projects" className="text-xs text-accent font-semibold hover:underline flex items-center gap-1">
                  View All Projects <ArrowRight size={13} />
                </Link>
              </div>

              <div className="space-y-3">
                {otherProjects.map((proj) => (
                  <Link
                    key={proj.id}
                    to={proj.url?.startsWith("/projects") ? proj.url : `/case-studies/${proj.id}`}
                    className="p-5 bg-card border border-border/60 rounded-xl hover:border-accent/40 flex items-center justify-between group transition-all"
                  >
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-[10px] uppercase font-bold text-accent px-2 py-0.5 bg-accent/10 rounded">
                          {proj.category}
                        </span>
                        <h4 className="font-bold text-sm text-foreground group-hover:text-accent transition-colors">
                          {proj.title}
                        </h4>
                      </div>
                      <p className="text-xs text-muted-foreground line-clamp-1">
                        {proj.description}
                      </p>
                    </div>
                    <ChevronRight size={16} className="text-muted-foreground group-hover:text-accent group-hover:translate-x-1 transition-all shrink-0 ml-3" />
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Final Conversion CTA ── */}
      <section className="py-20 lg:py-28 bg-gradient-to-b from-card to-background border-t border-border/50 text-center">
        <div className="container mx-auto px-6 max-w-3xl space-y-6 scroll-reveal">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent mb-2 block">
            Get Started Today
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
            Ready to upgrade your travel agency workflow?
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed">
            Get the standard Brandex Travel CRM for <strong>₹1,500/month (Regular ₹2,000/mo)</strong> with free onboarding migration. Or, if your agency requires custom GDS integrations and sub-agent portals, let's architect a custom solution.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Button
              onClick={() =>
                openCheckout({
                  productId: "travel-crm",
                  title: "Brandex Travel CRM & Itinerary Platform",
                  price: 1500,
                  regularPrice: 2000,
                  cadence: "Monthly Subscription (Zero Setup Fees)",
                  badge: "Launch Offer (25% OFF)",
                  description: "Auto-converts Word/PDF itineraries, dynamic vector PDF generation, hotel directory, and lead pipeline CRM.",
                })
              }
              size="lg"
              className="bg-accent text-accent-foreground hover:bg-accent/90 px-8 py-6 text-base font-semibold shadow-xl shadow-accent/20 w-full sm:w-auto cursor-pointer"
            >
              Get Travel CRM (₹1,500/mo) <ArrowRight size={17} className="ml-2" />
            </Button>

            <Button
              onClick={() => openBooking()}
              variant="outline"
              size="lg"
              className="border-border/70 hover:bg-secondary px-7 py-6 text-base w-full sm:w-auto font-semibold flex items-center justify-center gap-2"
            >
              <Calendar size={16} /> Book Live Demo
            </Button>
          </div>
        </div>
      </section>

      {/* ── Lightbox Modal ── */}
      {lightboxImage && (
        <div
          className="fixed inset-0 z-50 bg-background/95 backdrop-blur-md flex items-center justify-center p-4 sm:p-8"
          onClick={() => setLightboxImage(null)}
        >
          <div className="relative max-w-6xl max-h-[90vh] bg-card border border-border rounded-2xl overflow-hidden shadow-2xl p-2" onClick={(e) => e.stopPropagation()}>
            <div className="flex justify-between items-center p-3 border-b border-border/50">
              <span className="text-xs font-mono text-muted-foreground">High-Resolution UI Inspector</span>
              <button
                onClick={() => setLightboxImage(null)}
                className="px-3 py-1 bg-accent text-accent-foreground text-xs font-bold rounded-lg hover:bg-accent/90"
              >
                Close &times;
              </button>
            </div>
            <div className="p-2 overflow-auto max-h-[80vh]">
              <img
                src={lightboxImage}
                alt="Brandex Travel CRM full resolution interface preview"
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      )}
    </article>
  );
}
