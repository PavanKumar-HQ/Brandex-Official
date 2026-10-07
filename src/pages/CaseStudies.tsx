import { useState } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import {
  ShoppingCart, TrendingUp, Calendar, Clock, CreditCard,
  BarChart3, Activity, Wifi, Zap, Smartphone, BookOpen,
  Settings, Link2, Bell, Award, Play, ExternalLink
} from "lucide-react";

const categories = ["All", "Web", "Automation", "Application", "Mobile"];

import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import SEOTags from "@/components/SEOTags";
import Breadcrumb from "@/components/Breadcrumb";
import { projects } from "@/data/projects";
import { LivePreview } from "@/components/ui/LivePreview";



export default function CaseStudiesPage() {
  useScrollReveal();
  const [filter, setFilter] = useState("All");
  const filtered = filter === "All" ? projects : projects.filter((p) => p.category === filter);

  return (
    <>
      <SEOTags 
        title="Client Case Studies & Engineering Results | Brandex"
        description="Read verified client case studies and technical outcomes delivered by Brandex across custom software, e-commerce, web applications, and digital platforms."
        keywords="software case studies, web development case studies, client results, digital transformation portfolio, custom CRM case studies"
        canonicalUrl="https://www.brandex.co.in/case-studies"
        type="website"
        image="https://www.brandex.co.in/og/case-studies.png"
        schema={{
          "@type": "CollectionPage",
          "@id": "https://www.brandex.co.in/case-studies#webpage",
          "name": "Case Studies & Client Results — Brandex",
          "description": "Real projects, measurable outcomes, and digital transformations delivered by Brandex across 22+ industries.",
          "url": "https://www.brandex.co.in/case-studies",
          "isPartOf": { "@id": "https://www.brandex.co.in/#website" },
          "about": { "@id": "https://www.brandex.co.in/#organization" },
          "mainEntity": {
            "@type": "ItemList",
            "name": "Brandex Case Studies",
            "itemListElement": projects.map((p, index) => ({
              "@type": "ListItem",
              "position": index + 1,
              "name": p.title,
              "description": p.description,
              "url": `https://www.brandex.co.in/case-studies/${p.id}`
            }))
          }
        }}
      />
      <section className="pt-4 sm:pt-6 pb-10 sm:pb-14 border-b border-border/40 bg-gradient-to-b from-primary/[0.03] to-background">
      <div className="container mx-auto px-6">
        <Breadcrumb items={[{ label: "Case Studies" }]} className="mb-5" />
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10">
          <div className="max-w-3xl scroll-reveal">
            <span className="text-xs font-bold uppercase tracking-widest text-accent mb-3 block">Client Case Studies &amp; Outcomes</span>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-4 leading-[1.1]">
              Engineering Results That Speak for Themselves
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed">
              Explore bespoke digital architectures, e-commerce systems, learning platforms, and automation workflows delivered by Brandex.
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-card border border-border/80 shadow-sm space-y-2 shrink-0 max-w-sm">
            <span className="text-[10px] font-bold text-accent uppercase tracking-wider block">Looking to Buy Software?</span>
            <p className="text-xs text-muted-foreground">Check out our ready-to-buy software products like Travel CRM and Invoice Builder.</p>
            <Link to="/products" className="inline-flex items-center text-xs font-bold text-foreground hover:text-accent gap-1 pt-1">
              Explore Software Products <ExternalLink size={12} />
            </Link>
          </div>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap gap-2 mb-10 scroll-reveal">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4 py-2 rounded-full text-xs font-semibold transition-all ${
                filter === cat
                  ? "bg-accent text-accent-foreground shadow-sm"
                  : "bg-card border border-border/70 text-muted-foreground hover:text-foreground"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map((project) => {
            const isProduct = project.id === "travel-crm" || project.id === "invoice-builder";
            const targetUrl =
              project.id === "travel-crm"
                ? "/products/travel-crm"
                : project.id === "invoice-builder"
                ? "/products/invoice-builder"
                : `/case-studies/${project.id}`;

            return (
              <div
                key={project.title}
                className="group bg-card border border-border/70 rounded-2xl overflow-hidden hover:shadow-2xl hover:border-accent/40 transition-all duration-300 flex flex-col"
              >
                <div className="aspect-[16/10] bg-secondary relative overflow-hidden border-b border-border/50">
                  <div className="absolute inset-0 bg-accent/5 group-hover:bg-accent/0 transition-colors duration-500 z-10" />
                  
                  {project.id === "travel-crm" ? (
                    <div className="absolute inset-0 w-full h-full relative group-hover:scale-105 transition-transform duration-700 ease-out">
                      <div className="absolute top-0 left-0 right-0 h-6 bg-background/90 backdrop-blur border-b border-border/50 flex items-center px-3 gap-1.5 z-10">
                        <div className="w-2 h-2 rounded-full bg-destructive/60" />
                        <div className="w-2 h-2 rounded-full bg-yellow-500/60" />
                        <div className="w-2 h-2 rounded-full bg-green-500/60" />
                        <span className="ml-2 text-[10px] font-mono text-muted-foreground">app.brandex.co.in/travel-crm</span>
                      </div>
                      <img
                        src="/projects/travel-crm/travel-crm-pdf-builder-preview.webp"
                        alt="Brandex Travel CRM live itinerary builder"
                        className="w-full h-full object-cover object-top pt-6"
                        loading="lazy"
                      />
                    </div>
                  ) : project.id === "invoice-builder" ? (
                    <div className="absolute inset-0 w-full h-full relative group-hover:scale-105 transition-transform duration-700 ease-out">
                      <div className="absolute top-0 left-0 right-0 h-6 bg-background/90 backdrop-blur border-b border-border/50 flex items-center px-3 gap-1.5 z-10">
                        <div className="w-2 h-2 rounded-full bg-destructive/60" />
                        <div className="w-2 h-2 rounded-full bg-yellow-500/60" />
                        <div className="w-2 h-2 rounded-full bg-green-500/60" />
                        <span className="ml-2 text-[10px] font-mono text-muted-foreground">app.brandex.co.in/invoice-builder</span>
                      </div>
                      <img
                        src="/products/invoice-builder/brandex-invoice-builder-dashboard.webp"
                        alt="Brandex Invoice Builder software dashboard"
                        className="w-full h-full object-cover object-top pt-6"
                        loading="lazy"
                      />
                    </div>
                  ) : project.url && project.url.startsWith("http") ? (
                    <div className="absolute inset-0 w-full h-full relative group-hover:scale-105 transition-transform duration-700 ease-out">
                      {/* Browser Chrome Overlay */}
                      <div className="absolute top-0 left-0 right-0 h-6 bg-background/90 backdrop-blur border-b border-border/50 flex items-center px-3 gap-1.5 z-10">
                        <div className="w-2 h-2 rounded-full bg-destructive/60" />
                        <div className="w-2 h-2 rounded-full bg-yellow-500/60" />
                        <div className="w-2 h-2 rounded-full bg-green-500/60" />
                        <span className="ml-2 text-[10px] font-mono text-muted-foreground truncate">
                          {project.url.replace("https://", "").replace("http://", "")}
                        </span>
                      </div>
                      <img
                        src={`https://s.wordpress.com/mshots/v1/${encodeURIComponent(project.url)}?w=800`}
                        alt={`Preview of ${project.title}`}
                        className="w-full h-full object-cover object-top pt-6"
                        loading="lazy"
                      />
                    </div>
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center text-muted-foreground bg-secondary">
                      {project.logo ? (
                        <img src={project.logo} alt={`${project.title} logo`} className="max-w-[120px] max-h-16 object-contain" />
                      ) : (
                        "Bespoke System"
                      )}
                    </div>
                  )}

                  <div className="absolute inset-0 bg-primary/90 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-6 text-center z-20">
                    <span className="text-primary-foreground font-display text-2xl font-bold mb-2">{project.result}</span>
                    <span className="text-primary-foreground/70 text-xs line-clamp-2 max-w-xs">{project.challenge}</span>
                    <Link to={targetUrl} className="mt-4 px-5 py-2 bg-accent text-accent-foreground rounded-full text-xs font-bold flex items-center gap-1.5 hover:bg-accent/90 transition-colors shadow-md">
                      {isProduct ? "View Product & Pricing" : "View Case Study"} <Link2 size={13} />
                    </Link>
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="text-[10px] font-bold text-accent uppercase tracking-widest px-2.5 py-0.5 bg-accent/10 rounded">
                      {project.category}
                    </span>
                    {project.duration && (
                      <span className="text-[10px] text-muted-foreground font-medium">{project.duration}</span>
                    )}
                  </div>
                  <h3 className="font-display font-bold text-lg text-foreground mb-2 group-hover:text-accent transition-colors">{project.title}</h3>
                  <p className="text-xs text-muted-foreground mb-4 flex-1 line-clamp-3 leading-relaxed">{project.description}</p>
                  <div className="flex flex-wrap gap-1.5 pt-3 border-t border-border/50">
                    {project.tech.map((t) => (
                      <span key={t} className="text-[10px] px-2 py-0.5 rounded bg-secondary text-muted-foreground font-medium">{t}</span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
    </>
  );
}
