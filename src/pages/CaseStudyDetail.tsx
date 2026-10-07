import { useParams, Link, Navigate } from "react-router-dom";
import { useEffect } from "react";
import { ArrowLeft, ExternalLink, CheckCircle2 } from "lucide-react";
import { projects } from "@/data/projects";
import SEOTags from "@/components/SEOTags";
import Breadcrumb from "@/components/Breadcrumb";

export default function CaseStudyDetail() {
  const { id } = useParams();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (id === "travel-crm") {
    return <Navigate to="/projects/travel-crm" replace />;
  }

  const project = projects.find((p) => p.id === id);

  if (!project) {
    return (
      <>
        <SEOTags
          title="Case Study Not Found | Brandex"
          description="The requested case study could not be found."
          noindex={true}
        />
        <div className="min-h-screen flex items-center justify-center text-center">
          <div>
            <h2 className="text-2xl font-bold mb-2">Project Not Found</h2>
            <Link to="/case-studies" className="text-accent hover:underline">Return to Case Studies</Link>
          </div>
        </div>
      </>
    );
  }

  return (
    <article className="min-h-screen bg-background">
      <SEOTags
        title={`${project.title} Case Study & Engineering Review | Brandex`}
        description={project.description}
        keywords={`${project.category.toLowerCase()}, case study, software development portfolio, brandex, digital solutions`}
        canonicalUrl={`https://www.brandex.co.in/case-studies/${project.id}`}
        image="https://www.brandex.co.in/og/case-studies.png"
        type="article"
        schema={{
          "@type": "Article",
          "@id": `https://www.brandex.co.in/case-studies/${project.id}#article`,
          "headline": `${project.title} Case Study`,
          "description": project.description,
          "image": "https://www.brandex.co.in/og/case-studies.png",
          "datePublished": "2024-01-01",
          "dateModified": "2026-09-08",
          "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": `https://www.brandex.co.in/case-studies/${project.id}`
          },
          "about": {
            "@type": "Organization",
            "name": project.title,
            "description": project.description
          },
          "author": {
            "@type": "Organization",
            "@id": "https://www.brandex.co.in/#organization",
            "name": "Brandex"
          },
          "publisher": {
            "@type": "Organization",
            "name": "Brandex",
            "logo": {
              "@type": "ImageObject",
              "url": "https://www.brandex.co.in/main_logo.webp"
            }
          }
        }}
      />
      {/* Hero Section */}
      <header className="relative pt-10 pb-14 lg:pt-14 lg:pb-18 overflow-hidden bg-gradient-to-b from-primary/[0.04] via-card/50 to-background border-b border-border/40">
        <div className="container mx-auto px-6 relative z-10">
          <Breadcrumb
            items={[{ label: "Case Studies", href: "/case-studies" }, { label: project.title }]}
            className="mb-8"
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            {/* Left Col: Case Study Intro */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/20 text-accent text-xs font-bold tracking-wider uppercase">
                <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                {project.category} Case Study
              </div>

              <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-foreground leading-[1.15] tracking-tight">
                {project.title}
              </h1>

              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-2xl">
                {project.description}
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-4">
                {project.url && (
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-6 py-3 rounded-xl font-bold shadow-lg hover:shadow-accent/25 hover:-translate-y-0.5 transition-all text-sm"
                  >
                    Visit Live Site <ExternalLink size={16} />
                  </a>
                )}
                <Link
                  to="/case-studies"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-xl font-medium border border-border/80 bg-card hover:bg-secondary text-foreground text-sm transition-all"
                >
                  <ArrowLeft size={16} /> All Case Studies
                </Link>
              </div>
            </div>

            {/* Right Col: Client Logo & Partner Showcase Card */}
            <div className="lg:col-span-5">
              <div className="relative rounded-3xl p-1 bg-gradient-to-b from-accent/30 via-border/50 to-border/30 border border-border/80 shadow-2xl shadow-accent/[0.04]">
                <div className="bg-card rounded-[22px] p-6 sm:p-8 space-y-6 border border-border/60">
                  <div className="flex items-center justify-between pb-4 border-b border-border/60">
                    <span className="text-[11px] font-bold uppercase tracking-widest text-muted-foreground flex items-center gap-1.5">
                      <CheckCircle2 size={13} className="text-accent" /> Verified Client Partner
                    </span>
                    <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-accent/10 text-accent border border-accent/20">
                      {project.duration || "Production"}
                    </span>
                  </div>

                  {/* Client Logo Display */}
                  <div className="p-6 rounded-2xl bg-gradient-to-br from-secondary/80 via-background to-secondary/50 border border-border/80 flex items-center justify-center min-h-[140px] group shadow-inner">
                    {project.logo ? (
                      <img
                        src={project.logo}
                        alt={`${project.title} official logo`}
                        className="max-h-20 sm:max-h-24 max-w-[220px] w-auto object-contain transition-transform duration-300 group-hover:scale-105 filter drop-shadow-sm"
                      />
                    ) : (
                      <div className="text-center space-y-2">
                        <span className="font-display font-extrabold text-2xl text-foreground">
                          {project.title}
                        </span>
                        <p className="text-xs text-muted-foreground">{project.category}</p>
                      </div>
                    )}
                  </div>

                  {/* Key Outcome Highlight */}
                  <div className="p-4 rounded-xl bg-accent/5 border border-accent/15 space-y-1">
                    <span className="text-[11px] font-bold uppercase text-accent tracking-wider">
                      Delivered Outcome
                    </span>
                    <p className="text-sm font-bold text-foreground">
                      {project.result}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Overview Grid */}
      <section className="py-16 border-y border-border/50 bg-card">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <p className="text-sm text-muted-foreground mb-1">Industry</p>
              <p className="font-semibold text-foreground">{project.category}</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground mb-1">Timeline</p>
              <p className="font-semibold text-foreground">{project.duration || "Ongoing"}</p>
            </div>
            <div className="col-span-2">
              <p className="text-sm text-muted-foreground mb-1">Services</p>
              <div className="flex flex-wrap gap-2 mt-2">
                {project.services?.map(s => <span key={s} className="text-xs font-medium px-2.5 py-1 rounded bg-secondary text-foreground">{s}</span>)}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Deep Dive Content */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-16">

            <div className="lg:col-span-8 space-y-16">
              {/* Problem/Challenge */}
              <div>
                <h3 className="font-display text-2xl font-bold mb-4">The Challenge</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {project.challenge} Before our intervention, the existing systems or lack thereof were creating bottlenecks and preventing scalable growth.
                </p>
              </div>

              {/* Solution */}
              <div>
                <h3 className="font-display text-2xl font-bold mb-4">The Solution</h3>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  We architected a bespoke {project.category.toLowerCase()} solution prioritizing speed, scale, and user experience.
                  Leveraging a modern tech stack, we built out a robust foundation that solved the immediate pain points while laying the groundwork for future expansion.
                </p>
                <div className="grid sm:grid-cols-2 gap-4 mt-8">
                  {project.features?.map((feature, i) => (
                    <div key={i} className="flex items-start gap-3 bg-secondary/50 p-4 rounded-xl border border-border/50">
                      <CheckCircle2 size={20} className="text-accent shrink-0 mt-0.5" />
                      <p className="text-sm font-medium text-foreground">{feature}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Deep Dive: Approach */}
              <div>
                <h3 className="font-display text-2xl font-bold mb-4">Our Approach: Wireframes to Production</h3>
                <div className="relative pl-6 space-y-8 before:absolute before:inset-y-0 before:left-[11px] before:w-px before:bg-border">
                  <div className="relative">
                    <div className="absolute -left-[30px] w-5 h-5 rounded-full bg-background border-2 border-accent flex items-center justify-center">
                      <div className="w-2 h-2 rounded-full bg-accent" />
                    </div>
                    <h4 className="text-lg font-bold mb-2">Discovery & Wireframing</h4>
                    <p className="text-muted-foreground text-sm leading-relaxed">We mapped out the user journeys and core functionality requirements, rapid-prototyping the interfaces to validate the UX assumptions early.</p>
                  </div>
                  <div className="relative">
                    <div className="absolute -left-[30px] w-5 h-5 rounded-full bg-background border-2 border-accent flex items-center justify-center">
                      <div className="w-2 h-2 rounded-full bg-accent" />
                    </div>
                    <h4 className="text-lg font-bold mb-2">Development & Integration</h4>
                    <p className="text-muted-foreground text-sm leading-relaxed">Iterative build cycles using {project.tech.slice(0, 2).join(" and ")} allowed us to move fast while maintaining strict performance constraints.</p>
                  </div>
                  <div className="relative">
                    <div className="absolute -left-[30px] w-5 h-5 rounded-full bg-background border-2 border-accent flex items-center justify-center">
                      <div className="w-2 h-2 rounded-full bg-accent" />
                    </div>
                    <h4 className="text-lg font-bold mb-2">Launch & Scale</h4>
                    <p className="text-muted-foreground text-sm leading-relaxed">Post-launch, we monitored analytics deeply to ensure 99.9% uptime and zero-friction transitions for users.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-4">
              <div className="sticky top-32 bg-card border border-border/60 rounded-2xl p-6 shadow-xl shadow-accent/5">
                <h4 className="font-display font-bold text-lg mb-4 text-foreground/90 border-b border-border/50 pb-4">Technology Stack</h4>
                <div className="flex flex-col gap-3">
                  {project.tech.map((t) => (
                    <div key={t} className="flex justify-between items-center bg-secondary/70 rounded-lg px-4 py-3 border border-border/40">
                      <span className="text-sm font-semibold">{t}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-8 pt-8 border-t border-border/50 text-center">
                  <h4 className="font-display font-bold text-2xl text-accent mb-2">{project.result}</h4>
                  <p className="text-xs text-muted-foreground uppercase tracking-widest font-semibold">Primary Outcome</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Next Step CTA */}
      <section className="py-20 bg-accent text-accent-foreground text-center">
        <div className="container mx-auto px-6 max-w-2xl">
          <h2 className="font-display text-3xl font-bold mb-6">Ready for similar results?</h2>
          <Link to="/contact" className="inline-flex items-center gap-2 bg-background text-foreground px-8 py-4 rounded-xl font-bold shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all">
            Start Your Project <ArrowLeft className="rotate-180" size={18} />
          </Link>
        </div>
      </section>
    </article>
  );
}
