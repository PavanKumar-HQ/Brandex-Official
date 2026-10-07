import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import {
  ExternalLink,
  Search,
  Rocket,
  ArrowRight,
  Layers,
  CheckCircle2,
  Workflow,
  Globe,
  Compass,
  FileCheck,
  Tag,
  CreditCard,
  Briefcase
} from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import SEOTags from "@/components/SEOTags";
import Breadcrumb from "@/components/Breadcrumb";
import { projects } from "@/data/projects";

const categories = [
  "All Projects & Products",
  "Software Products (For Sale)",
  "Case Studies (Client Work)"
];

export default function ProjectsPage() {
  useScrollReveal();
  const [activeCategory, setActiveCategory] = useState("All Projects & Products");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      const isProduct = project.id === "travel-crm" || project.id === "invoice-builder" || project.category.toLowerCase().includes("product");
      const matchesCategory =
        activeCategory === "All Projects & Products" ||
        (activeCategory === "Software Products (For Sale)" && isProduct) ||
        (activeCategory === "Case Studies (Client Work)" && !isProduct);
      
      const matchesSearch =
        searchQuery === "" ||
        project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.tech.some((t) =>
          t.toLowerCase().includes(searchQuery.toLowerCase())
        );
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  const featuredProduct = projects.find((p) => p.id === "travel-crm");

  return (
    <article className="min-h-screen bg-background text-foreground">
      {/* ── SEO Metadata & Schema ── */}
      <SEOTags
        title="Software Products, CRMs & Case Studies | Brandex"
        description="Explore ready-to-buy software products (Travel CRM, Invoice Builder) and bespoke enterprise case studies built by Brandex in Bangalore."
        keywords="Brandex software products, Travel CRM software, Invoice builder, custom CRM development, web application portfolio, business automation projects"
        canonicalUrl="https://www.brandex.co.in/projects"
        schema={{
          "@type": "CollectionPage",
          "@id": "https://www.brandex.co.in/projects#webpage",
          "name": "Brandex Projects & Software Products",
          "description": "Comprehensive catalog of commercial software products and custom client engineering case studies by Brandex.",
          "url": "https://www.brandex.co.in/projects",
          "mainEntity": {
            "@type": "ItemList",
            "itemListElement": projects.map((p, idx) => ({
              "@type": "ListItem",
              "position": idx + 1,
              "name": p.title,
              "description": p.description,
              "url": `https://www.brandex.co.in/projects/${p.id}`
            }))
          }
        }}
      />

      {/* ── Hero Section ── */}
      <header className="relative pt-4 sm:pt-6 pb-10 sm:pb-14 border-b border-border/40 bg-gradient-to-b from-primary/[0.03] to-background">
        <div className="container mx-auto px-6 relative z-10">
          <Breadcrumb items={[{ label: "Projects & Products" }]} className="mb-5" />

          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <div className="max-w-3xl space-y-4">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-accent/10 border border-accent/20 text-accent text-xs font-bold tracking-wide uppercase">
                <Layers size={13} className="text-accent" />
                Software Products &amp; Client Case Studies
              </div>

              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-[1.1]">
                Software Products &amp; Engineering Track Record
              </h1>

              <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed font-normal">
                Discover our ready-to-buy commercial software suites alongside bespoke web and digital platforms engineered for clients worldwide.
              </p>
            </div>

            {/* Quick Link to Dedicated Store */}
            <div className="shrink-0 self-start lg:self-end">
              <Button asChild className="bg-accent text-accent-foreground hover:bg-accent/90 shadow-md font-semibold">
                <Link to="/products">
                  <Rocket size={14} className="mr-1.5" /> View Products Store
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* ── Flagship Commercial Product Showcase: Travel CRM ── */}
      {featuredProduct && (
        <section className="py-12 lg:py-16 bg-secondary/30 border-b border-border/50">
          <div className="container mx-auto px-6">
            <div className="bg-card border border-border/70 rounded-3xl p-6 sm:p-10 lg:p-12 shadow-xl relative overflow-hidden scroll-reveal">
              <div className="absolute top-0 right-0 w-80 h-80 bg-accent/10 rounded-full blur-3xl pointer-events-none" />

              <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center relative z-10">
                <div className="lg:col-span-7 space-y-4">
                  <div className="flex flex-wrap items-center gap-2.5">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-accent/15 text-accent text-xs font-bold uppercase tracking-wider">
                      <Rocket size={13} /> Software Product For Sale
                    </span>
                    <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-500 border border-emerald-500/20">
                      Launch Offer: ₹1,500/mo (Reg. ₹2,000)
                    </span>
                  </div>

                  <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground">
                    {featuredProduct.title}
                  </h2>

                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                    {featuredProduct.description}
                  </p>

                  <div className="flex flex-wrap gap-2 pt-2">
                    {featuredProduct.tech.map((t) => (
                      <span
                        key={t}
                        className="px-2.5 py-1 bg-secondary text-foreground text-xs rounded-md font-medium"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="pt-4 flex flex-wrap gap-3">
                    <Button asChild className="bg-accent text-accent-foreground hover:bg-accent/90 shadow-md">
                      <Link to="/products/travel-crm">
                        View Travel CRM &amp; Pricing (₹1,500/mo) <ArrowRight size={15} className="ml-1.5" />
                      </Link>
                    </Button>
                    <Button asChild variant="outline" className="border-border hover:bg-secondary">
                      <Link to="/products/invoice-builder">
                        Explore Invoice Builder (₹6,000 Lifetime)
                      </Link>
                    </Button>
                  </div>
                </div>

                <div className="lg:col-span-5 bg-secondary/50 p-6 rounded-2xl border border-border/60 text-xs space-y-3.5">
                  <p className="font-bold text-foreground text-sm border-b border-border/50 pb-2 flex items-center justify-between">
                    <span>Key Capabilities Included</span>
                    <span className="text-accent text-xs font-semibold">Zero Setup Fees</span>
                  </p>
                  <ul className="space-y-2.5 text-muted-foreground">
                    <li className="flex items-center gap-2.5">
                      <CheckCircle2 size={15} className="text-emerald-500 shrink-0" />
                      <span>Word &amp; PDF Itinerary Auto-Parsing</span>
                    </li>
                    <li className="flex items-center gap-2.5">
                      <CheckCircle2 size={15} className="text-emerald-500 shrink-0" />
                      <span>Reusable Hotel &amp; Sightseeing Directory</span>
                    </li>
                    <li className="flex items-center gap-2.5">
                      <CheckCircle2 size={15} className="text-emerald-500 shrink-0" />
                      <span>Vector PDF Proposals with Dynamic Payment QR</span>
                    </li>
                    <li className="flex items-center gap-2.5">
                      <CheckCircle2 size={15} className="text-emerald-500 shrink-0" />
                      <span>Agency Sales CRM Pipeline &amp; Follow-up Alerts</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ── Filterable Projects & Products Grid ── */}
      <section className="py-14 lg:py-20">
        <div className="container mx-auto px-6">
          {/* Controls: Search & Segmented Tabs */}
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between mb-12 scroll-reveal">
            <div className="flex flex-wrap gap-2 w-full md:w-auto bg-card p-1.5 rounded-2xl border border-border/70 shadow-sm">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                    activeCategory === cat
                      ? "bg-accent text-accent-foreground shadow-sm"
                      : "text-muted-foreground hover:text-foreground hover:bg-secondary/60"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            <div className="relative w-full md:w-72">
              <Search
                size={16}
                className="absolute left-3.5 top-1/2 -translate-y-1/2 text-muted-foreground"
              />
              <Input
                type="text"
                placeholder="Search products, client work, tech..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-9 h-10 bg-card border-border/70 text-xs rounded-xl"
              />
            </div>
          </div>

          {/* Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => {
              const isProduct = project.id === "travel-crm" || project.id === "invoice-builder";
              const detailUrl =
                isProduct
                  ? `/products/${project.id}`
                  : `/case-studies/${project.id}`;

              return (
                <Link
                  key={project.id}
                  to={detailUrl}
                  className="group bg-card border border-border/70 rounded-2xl overflow-hidden hover:border-accent/40 hover:shadow-2xl transition-all duration-300 flex flex-col scroll-reveal cursor-pointer"
                >
                  {/* Card Header & Preview */}
                  <div className="aspect-[16/10] bg-secondary relative overflow-hidden border-b border-border/50">
                    {project.id === "travel-crm" ? (
                      <div className="w-full h-full relative group-hover:scale-105 transition-transform duration-500 ease-out">
                        <div className="absolute top-0 left-0 right-0 h-6 bg-background/90 backdrop-blur border-b border-border/50 flex items-center px-3 gap-1.5 z-10">
                          <div className="w-2 h-2 rounded-full bg-destructive/60" />
                          <div className="w-2 h-2 rounded-full bg-yellow-500/60" />
                          <div className="w-2 h-2 rounded-full bg-green-500/60" />
                          <span className="ml-2 text-[10px] font-mono text-muted-foreground">app.brandex.co.in/travel-crm</span>
                        </div>
                        <img
                          src="/projects/travel-crm/travel-crm-pdf-builder-preview.webp"
                          alt="Brandex Travel CRM live itinerary builder preview"
                          className="w-full h-full object-cover object-top pt-6"
                          loading="lazy"
                        />
                      </div>
                    ) : project.id === "invoice-builder" ? (
                      <div className="w-full h-full relative group-hover:scale-105 transition-transform duration-500 ease-out">
                        <div className="absolute top-0 left-0 right-0 h-6 bg-background/90 backdrop-blur border-b border-border/50 flex items-center px-3 gap-1.5 z-10">
                          <div className="w-2 h-2 rounded-full bg-destructive/60" />
                          <div className="w-2 h-2 rounded-full bg-yellow-500/60" />
                          <div className="w-2 h-2 rounded-full bg-green-500/60" />
                          <span className="ml-2 text-[10px] font-mono text-muted-foreground">app.brandex.co.in/invoice-builder</span>
                        </div>
                        <img
                          src="/products/invoice-builder/brandex-invoice-builder-dashboard.webp"
                          alt="Brandex Invoice Builder software dashboard preview"
                          className="w-full h-full object-cover object-top pt-6"
                          loading="lazy"
                        />
                      </div>
                    ) : (
                      <div className="w-full h-full relative group-hover:scale-105 transition-transform duration-500 ease-out bg-gradient-to-br from-secondary via-background to-secondary/80 flex flex-col">
                        <div className="h-6 bg-background/90 backdrop-blur border-b border-border/50 flex items-center px-3 gap-1.5 z-10">
                          <div className="w-2 h-2 rounded-full bg-destructive/60" />
                          <div className="w-2 h-2 rounded-full bg-yellow-500/60" />
                          <div className="w-2 h-2 rounded-full bg-green-500/60" />
                          <span className="ml-2 text-[10px] font-mono text-muted-foreground truncate">
                            {project.url?.replace("https://", "").replace("http://", "") || `${project.id}.brandex.co.in`}
                          </span>
                        </div>
                        <div className="flex-1 flex flex-col items-center justify-center p-6 text-center">
                          {project.logo ? (
                            <div className="w-20 h-20 rounded-2xl bg-card border border-border/80 shadow-md flex items-center justify-center p-3 mb-2 group-hover:border-accent/40 transition-colors">
                              <img
                                src={project.logo}
                                alt={`${project.title} logo`}
                                className="max-w-full max-h-full object-contain"
                              />
                            </div>
                          ) : (
                            <div className="w-16 h-16 rounded-2xl bg-accent/10 border border-accent/20 flex items-center justify-center text-accent mb-2">
                              <Globe size={28} />
                            </div>
                          )}
                          <p className="font-display font-bold text-sm text-foreground">{project.title}</p>
                          <p className="text-[11px] text-muted-foreground mt-0.5">{project.result}</p>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Body Content */}
                  <div className="p-6 flex-1 flex flex-col">
                    <div className="flex items-center justify-between mb-2">
                      <span className={`text-[10px] font-bold uppercase tracking-widest px-2.5 py-0.5 rounded ${
                        isProduct ? "bg-accent/15 text-accent border border-accent/20" : "bg-secondary text-muted-foreground"
                      }`}>
                        {isProduct ? "Software Product" : project.category}
                      </span>
                      {project.id === "travel-crm" ? (
                        <span className="text-[11px] font-bold text-emerald-500 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                          <span className="line-through text-muted-foreground mr-1">₹2,000</span> ₹1,500/mo
                        </span>
                      ) : project.id === "invoice-builder" ? (
                        <span className="text-[11px] font-bold text-emerald-500 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                          <span className="line-through text-muted-foreground mr-1">₹8,000</span> ₹6,000 Lifetime
                        </span>
                      ) : project.duration ? (
                        <span className="text-[11px] text-muted-foreground">
                          {project.duration}
                        </span>
                      ) : null}
                    </div>

                    <h3 className="font-display font-bold text-lg text-foreground mb-2 group-hover:text-accent transition-colors">
                      {project.title}
                    </h3>

                    <p className="text-xs text-muted-foreground leading-relaxed line-clamp-3 mb-4 flex-1">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-1.5 mb-5">
                      {project.tech.slice(0, 3).map((t) => (
                        <span
                          key={t}
                          className="text-[10px] px-2 py-0.5 rounded bg-secondary text-muted-foreground font-medium"
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                    <div className="pt-3 border-t border-border/50 flex items-center justify-between">
                      <span
                        className="text-xs font-bold text-foreground group-hover:text-accent flex items-center gap-1 transition-colors"
                      >
                        {isProduct ? "View Product & Pricing" : "Explore Case Study"} <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
                      </span>

                      {project.url && project.url.startsWith("http") && (
                        <span
                          onClick={(e) => {
                            e.preventDefault();
                            e.stopPropagation();
                            window.open(project.url, "_blank", "noopener,noreferrer");
                          }}
                          className="text-[11px] text-muted-foreground hover:text-foreground flex items-center gap-1 hover:underline cursor-pointer z-20"
                        >
                          Live Site <ExternalLink size={11} />
                        </span>
                      )}
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-16 bg-card border border-border/60 rounded-2xl">
              <p className="text-muted-foreground text-sm">
                No projects matched your search criteria.
              </p>
              <button
                onClick={() => {
                  setActiveCategory("All Projects & Products");
                  setSearchQuery("");
                }}
                className="mt-3 text-xs text-accent font-semibold hover:underline"
              >
                Clear all filters
              </button>
            </div>
          )}
        </div>
      </section>
    </article>
  );
}
