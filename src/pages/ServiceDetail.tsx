import { useParams, Link } from "react-router-dom";
import { useEffect } from "react";
import { ArrowLeft, CheckCircle2, ArrowRight, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import CTABanner from "@/components/home/CTABanner";
import SEOTags from "@/components/SEOTags";
import Breadcrumb from "@/components/Breadcrumb";
import { servicesData } from "@/data/servicesData";
import { projects } from "@/data/projects";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { useScrollReveal } from "@/hooks/useScrollReveal";

// Map service slugs to relevant case study categories
const serviceToCaseStudyMap: Record<string, string[]> = {
  "software-development": ["Application", "Automation"],
  "website-development": ["Web"],
  "ai-automation": ["Automation", "Application"],
  "cybersecurity": ["Application"],
};

// High-CTR search intent metadata per service slug
const serviceSEOMap: Record<string, { title: string; description: string; keywords: string }> = {
  "software-development": {
    title: "Custom Software Development Company | Brandex Bangalore",
    description: "Bespoke custom software development company in Bangalore. We engineer custom CRMs, enterprise ERPs, cloud SaaS applications, and automated workflows with 100% IP ownership.",
    keywords: "custom software development company, software development bangalore, custom CRM development, ERP development, enterprise software solutions, SaaS development"
  },
  "website-development": {
    title: "High-Performance Website Development Services | Brandex",
    description: "Custom website development company in Bangalore. We build high-speed corporate websites, headless e-commerce platforms, and web portals optimized for SEO and conversion.",
    keywords: "website development services, web development company bangalore, high-performance websites, corporate website design, e-commerce development, technical SEO"
  },
  "ai-automation": {
    title: "AI & Workflow Automation Services | Custom Agents & LLMs | Brandex",
    description: "Custom AI agent development, workflow automation pipelines, WhatsApp automation, and LLM integrations in Bangalore to eliminate manual tasks and scale operations.",
    keywords: "AI automation services, workflow automation, custom AI agents, WhatsApp business automation, LLM integration, business process automation bangalore"
  },
  "cybersecurity": {
    title: "Cybersecurity Services & Zero-Trust Architecture | Brandex",
    description: "Enterprise cybersecurity services in Bangalore: penetration testing, vulnerability assessments, zero-trust network access, and cloud infrastructure hardening.",
    keywords: "cybersecurity services bangalore, penetration testing, vulnerability assessment, zero-trust architecture, cloud security, security audit"
  }
};

export default function ServiceDetail() {
  const { slug } = useParams();
  const service = servicesData.find((s) => s.slug === slug);
  useScrollReveal();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!service) {
    return (
      <>
        <SEOTags 
          title="Service Not Found | Brandex"
          description="The requested service could not be found."
          noindex={true}
        />
        <div className="min-h-screen flex items-center justify-center text-center">
          <div>
            <h1 className="text-2xl font-bold mb-4">Service Not Found</h1>
            <Button asChild>
              <Link to="/services">View All Services</Link>
            </Button>
          </div>
        </div>
      </>
    );
  }

  const seoMeta = serviceSEOMap[slug || ""] || {
    title: `${service.title} Services in Bangalore | Brandex`,
    description: service.description,
    keywords: `${service.title.toLowerCase()}, business solutions, brandex, tech company bangalore`
  };

  // Get related case studies based on service type
  const relatedCategories = serviceToCaseStudyMap[slug || ""] || [];
  const relatedProjects = projects
    .filter(p => relatedCategories.includes(p.category))
    .slice(0, 3);

  // Generate Service & FAQ Schema
  const serviceSchema = {
    "@type": "Service",
    "@id": `https://www.brandex.co.in/services/${slug}#service`,
    "name": service.title,
    "description": seoMeta.description,
    "provider": { "@id": "https://www.brandex.co.in/#organization" },
    "areaServed": [
      { "@type": "City", "name": "Bangalore" },
      { "@type": "State", "name": "Karnataka" },
      { "@type": "Country", "name": "India" }
    ]
  };

  const faqSchema = service.faqs.length > 0 ? {
    "@type": "FAQPage",
    "@id": `https://www.brandex.co.in/services/${slug}#faq`,
    "mainEntity": service.faqs.map(faq => ({
      "@type": "Question",
      "name": faq.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.a
      }
    }))
  } : null;

  const schemas = faqSchema ? [serviceSchema, faqSchema] : [serviceSchema];

  return (
    <article className="min-h-screen bg-background">
      <SEOTags 
        title={seoMeta.title}
        description={seoMeta.description}
        keywords={seoMeta.keywords}
        canonicalUrl={`https://www.brandex.co.in/services/${slug}`}
        schema={schemas}
        image={`https://www.brandex.co.in/og/${slug}.png`}
      />

      {/* Hero Section */}
      <header className="relative pt-4 sm:pt-6 pb-10 sm:pb-14 overflow-hidden bg-primary/5">
        <div className="container mx-auto px-6 relative z-10">
          <Breadcrumb
            items={[
              { label: "Services", href: "/services" },
              { label: service.title }
            ]}
            className="mb-6"
          />
          
          <div className="max-w-3xl">
            <h1 className="font-display text-4xl lg:text-6xl font-bold text-foreground mb-4 leading-tight">
              {service.title}
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground mb-8 leading-relaxed">
              {service.tagline}
            </p>
            <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 font-bold shadow-md">
              <Link to="/contact">Get a Free Consultation <ArrowRight size={16} className="ml-2" /></Link>
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <section className="pt-8 pb-16">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-3 gap-12">
            
            {/* Left Content */}
            <div className="lg:col-span-2 space-y-16">
              
              {/* Overview */}
              <div className="scroll-reveal">
                <h2 className="text-3xl font-bold mb-6">Overview</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </div>

              {/* Features/Benefits */}
              <div className="scroll-reveal">
                <h2 className="text-3xl font-bold mb-8">What We Offer</h2>
                <div className="grid sm:grid-cols-2 gap-6">
                  {service.features.map((feature, i) => (
                    <div key={i} className="p-6 bg-secondary/50 rounded-xl border border-border/50">
                      <h3 className="font-bold text-lg mb-2">{feature.title}</h3>
                      <p className="text-muted-foreground text-sm">{feature.description}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* FAQs */}
              {service.faqs.length > 0 && (
                <div className="scroll-reveal">
                  <h2 className="text-3xl font-bold mb-8">Frequently Asked Questions</h2>
                  <Accordion type="single" collapsible className="w-full">
                    {service.faqs.map((faq, i) => (
                      <AccordionItem key={i} value={`faq-${i}`}>
                        <AccordionTrigger className="text-left font-medium">{faq.q}</AccordionTrigger>
                        <AccordionContent className="text-muted-foreground leading-relaxed">
                          {faq.a}
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <div className="space-y-8 scroll-reveal">
              {/* Process */}
              <div className="p-8 bg-card border border-border/60 rounded-2xl">
                <h3 className="font-bold text-xl mb-6">Our Process</h3>
                <ul className="space-y-4">
                  {service.process.map((step, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="text-accent flex-shrink-0 mt-0.5" size={20} />
                      <span className="text-muted-foreground text-sm font-medium">{step}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              {/* Industries */}
              <div className="p-8 bg-primary/5 rounded-2xl">
                <h3 className="font-bold text-xl mb-6">Industries Served</h3>
                <div className="flex flex-wrap gap-2">
                  {service.industriesServed.map((industry, i) => (
                    <span key={i} className="px-3 py-1 bg-background rounded-full text-xs font-semibold text-foreground border border-border/50">
                      {industry}
                    </span>
                  ))}
                </div>
              </div>

              {/* Quick Links */}
              <div className="p-8 bg-card border border-border/60 rounded-2xl">
                <h3 className="font-bold text-xl mb-6">Explore More</h3>
                <ul className="space-y-3">
                  <li>
                    <Link to="/services" className="text-sm text-muted-foreground hover:text-accent transition-colors flex items-center gap-2">
                      <ArrowRight size={14} /> All Services
                    </Link>
                  </li>
                  <li>
                    <Link to="/projects" className="text-sm text-muted-foreground hover:text-accent transition-colors flex items-center gap-2">
                      <ArrowRight size={14} /> Projects Hub
                    </Link>
                  </li>
                  <li>
                    <Link to="/projects/travel-crm" className="text-sm text-muted-foreground hover:text-accent transition-colors flex items-center gap-2">
                      <ArrowRight size={14} /> Travel CRM Platform
                    </Link>
                  </li>
                  <li>
                    <Link to="/case-studies" className="text-sm text-muted-foreground hover:text-accent transition-colors flex items-center gap-2">
                      <ArrowRight size={14} /> Case Studies
                    </Link>
                  </li>
                  <li>
                    <Link to="/industries" className="text-sm text-muted-foreground hover:text-accent transition-colors flex items-center gap-2">
                      <ArrowRight size={14} /> Industries We Serve
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Related Case Studies */}
      {relatedProjects.length > 0 && (
        <section className="py-16 bg-secondary/30">
          <div className="container mx-auto px-6">
            <div className="flex items-center justify-between mb-10">
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-accent mb-2">Related Work</p>
                <h2 className="font-display text-2xl lg:text-3xl font-bold text-foreground">
                  See {service.title} in action
                </h2>
              </div>
              <Link to="/case-studies" className="hidden sm:flex items-center text-accent font-medium hover:underline underline-offset-4 group text-sm">
                All Case Studies <ArrowRight size={14} className="ml-1.5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedProjects.map((project) => {
                const targetUrl = project.id === "travel-crm" ? "/projects/travel-crm" : `/case-studies/${project.id}`;
                return (
                  <Link
                    key={project.id}
                    to={targetUrl}
                    className="group block p-6 bg-card border border-border/60 rounded-2xl hover:border-accent/30 hover:shadow-lg transition-all duration-300"
                  >
                    <span className="text-xs font-semibold uppercase tracking-wider text-accent">{project.category}</span>
                    <h3 className="font-display font-bold text-lg text-foreground mt-2 mb-3 group-hover:text-accent transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-4 line-clamp-3">{project.description}</p>
                    <div className="flex flex-wrap gap-1.5">
                      {project.tech.slice(0, 3).map((t) => (
                        <span key={t} className="px-2 py-0.5 bg-secondary rounded text-xs font-medium text-muted-foreground">{t}</span>
                      ))}
                    </div>
                  </Link>
                );
              })}
            </div>
            <div className="sm:hidden mt-6 text-center">
              <Link to="/projects" className="inline-flex items-center text-accent font-medium hover:underline underline-offset-4 group text-sm">
                All Projects &amp; Case Studies <ArrowRight size={14} className="ml-1.5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </section>
      )}

      <CTABanner />
    </article>
  );
}
