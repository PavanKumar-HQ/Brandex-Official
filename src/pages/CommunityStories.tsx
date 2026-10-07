import { useState } from "react";
import { Link } from "react-router-dom";
import { BookOpen, ArrowRight, User, Clock, CheckCircle2, Terminal } from "lucide-react";
import { Button } from "@/components/ui/button";
import SEOTags from "@/components/SEOTags";
import Breadcrumb from "@/components/Breadcrumb";
import { useScrollReveal } from "@/hooks/useScrollReveal";

interface BuilderStory {
  slug: string;
  title: string;
  tagline: string;
  author: string;
  role: string;
  category: string;
  readTime: string;
  publishedDate: string;
  summary: string;
  takeaways: string[];
}

const storiesList: BuilderStory[] = [
  {
    slug: "travel-crm-engineering",
    title: "Engineering a Real-Time Travel CRM & Document Automation Suite",
    tagline: "How we replaced disconnected Word docs and spreadsheets with an automated itinerary generator.",
    author: "Brandex Product Engineering",
    role: "Core Team",
    category: "Architecture & Systems",
    readTime: "6 min read",
    publishedDate: "September 2026",
    summary: "Travel agencies process hundreds of custom trip itineraries monthly using fragmented manual tools. In this teardown, we share the technical choices behind building a full-stack CRM with unified itinerary parsing, dynamic QR codes, and vectorized PDF generation.",
    takeaways: [
      "Why client-side vector PDF generation beats server-rendered screenshots",
      "Designing a unified travel directory database for destinations & hotels",
      "How automated itinerary parsing cuts quotation turnaround by 80%",
    ],
  },
  {
    slug: "zero-bloat-invoicing",
    title: "The Zero-Bloat Philosophy: Shipping Invoicing Software That Loads in 200ms",
    tagline: "Why small businesses reject bloated SaaS subscriptions and how to build hyper-lean tools.",
    author: "Brandex Software Studio",
    role: "Product Design",
    category: "Frontend Performance",
    readTime: "4 min read",
    publishedDate: "October 2026",
    summary: "Most modern invoicing software forces users into heavy recurring subscriptions with hundreds of features they never use. We engineered a fast, single-purchase tool focusing on three things: instant invoice generation, live inventory subtraction, and zero load-time lag.",
    takeaways: [
      "Sub-200ms DOM interactive benchmarks with zero external bloated libraries",
      "Designing offline-first local state management that syncs seamlessly",
      "The business economics of lifetime utility software vs subscription fatigue",
    ],
  },
  {
    slug: "gamified-edtech-platform",
    title: "Architecting a Gamified Quiz Web App for 10,000+ Concurrent Students",
    tagline: "Building with Astro, animated SVG assets, and edge caching for real-time engagement.",
    author: "Frontend Engineering Guild",
    role: "Web Infrastructure",
    category: "Scale & UX",
    readTime: "5 min read",
    publishedDate: "August 2026",
    summary: "When building the web platform for Qshala Quiz League, the primary requirement was zero-latency quiz interactions and engaging visual identity that calls users back dynamically.",
    takeaways: [
      "Optimizing Astro islands architecture for minimal client-side JavaScript",
      "Crafting SVG micro-animations that consume zero GPU memory",
      "Handling sudden traffic surges during nationwide live school quiz competitions",
    ],
  },
];

export default function CommunityStoriesPage() {
  useScrollReveal();

  return (
    <>
      <SEOTags
        title="Builder Stories & Technical Teardowns | Brandex Community"
        description="Read technical breakdowns, product engineering case studies, and architecture teardowns written by builders in the Brandex ecosystem."
        keywords="brandex builder stories, software engineering case studies, system design teardowns, indie hacker stories, full-stack development articles"
        image="https://www.brandex.co.in/og/community-stories.png"
        canonicalUrl="https://www.brandex.co.in/community/stories"
        schema={{
          "@type": "CollectionPage",
          "@id": "https://www.brandex.co.in/community/stories#collection",
          "name": "Brandex Builder Stories",
          "description": "Technical case studies and breakdowns from the Brandex Community.",
          "isPartOf": { "@id": "https://www.brandex.co.in/#website" }
        }}
      />

      <section className="pt-4 sm:pt-6 pb-12 sm:pb-16 lg:pb-20 relative overflow-hidden bg-background">
        <div className="container mx-auto px-6 relative z-10">
          <Breadcrumb
            items={[
              { label: "Community", href: "/community" },
              { label: "Builder Stories" },
            ]}
            className="mb-6"
          />

          <div className="max-w-3xl space-y-4 mb-14">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-accent/10 border border-accent/20 text-accent text-xs font-semibold tracking-wide uppercase">
              <BookOpen size={13} className="text-accent" />
              Builder Knowledge Base
            </div>

            <h1 className="font-display text-4xl sm:text-5xl font-bold tracking-tight text-foreground">
              Builder Stories &amp; <span className="text-gradient">System Teardowns</span>
            </h1>

            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
              Real engineering decisions, post-mortems, and technical architectures behind products built within the Brandex ecosystem.
            </p>
          </div>

          <div className="space-y-8">
            {storiesList.map((story) => (
              <article
                key={story.slug}
                className="bg-card border border-border/70 rounded-3xl p-6 sm:p-10 shadow-sm hover:border-accent/40 transition-all space-y-6"
              >
                <div className="flex flex-wrap items-center justify-between gap-2 text-xs text-muted-foreground pb-4 border-b border-border/50">
                  <span className="font-bold text-accent px-2.5 py-0.5 bg-accent/10 rounded-full">
                    {story.category}
                  </span>
                  <div className="flex items-center gap-3">
                    <span>{story.publishedDate}</span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <Clock size={12} /> {story.readTime}
                    </span>
                  </div>
                </div>

                <div className="space-y-3">
                  <h2 className="font-display text-2xl sm:text-3xl font-bold text-foreground hover:text-accent transition-colors">
                    {story.title}
                  </h2>
                  <p className="text-base text-accent font-medium">
                    {story.tagline}
                  </p>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {story.summary}
                  </p>
                </div>

                <div className="bg-secondary/40 p-5 rounded-2xl border border-border/60 space-y-2.5">
                  <p className="text-xs font-bold uppercase tracking-wider text-foreground">
                    Key Technical Takeaways
                  </p>
                  <ul className="space-y-1.5">
                    {story.takeaways.map((t, i) => (
                      <li key={i} className="flex items-center gap-2 text-xs text-muted-foreground">
                        <CheckCircle2 size={13} className="text-accent shrink-0" />
                        <span>{t}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex items-center justify-between pt-2">
                  <span className="text-xs text-muted-foreground">
                    Written by <strong className="text-foreground">{story.author}</strong> ({story.role})
                  </span>
                  <Button asChild size="sm" variant="outline" className="border-border">
                    <Link to="/contact">
                      Discuss This Architecture <ArrowRight size={13} className="ml-1.5" />
                    </Link>
                  </Button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
