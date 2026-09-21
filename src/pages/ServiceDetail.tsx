import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { ArrowLeft, ArrowRight, CheckCircle2, HelpCircle, ChevronDown, Sparkles, Layers, ShieldCheck, ExternalLink, BookOpen } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { getServiceById, servicesData } from "@/data/services";
import { projects } from "@/data/projects";
import { blogPosts } from "@/data/blogPosts";
import SEOHead from "@/components/SEOHead";
import { SITE_CONFIG, getCanonicalUrl } from "@/config/site";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export default function ServiceDetail() {
  const { slug } = useParams<{ slug: string }>();
  const service = getServiceById(slug || "");
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!service) {
    return (
      <div className="min-h-[70vh] flex items-center justify-center text-center bg-[#f8fafd] px-6 py-24">
        <div className="liquid-glass-card rounded-3xl p-10 max-w-md mx-auto border border-slate-200">
          <h1 className="text-2xl font-bold mb-3 text-slate-900">Service Not Found</h1>
          <p className="text-sm text-slate-600 mb-6">
            The service you requested does not exist or has been updated.
          </p>
          <Button asChild variant="brand" className="rounded-xl">
            <Link to="/services">Explore All Services</Link>
          </Button>
        </div>
      </div>
    );
  }

  // Find related projects and blogs
  const relatedProjects = projects.filter((p) => service.relatedProjectIds.includes(p.id));
  const relatedBlogs = blogPosts.filter((b) => service.relatedBlogIds.includes(b.id)).slice(0, 3);
  const otherServices = servicesData.filter((s) => s.id !== service.id).slice(0, 3);

  // Multi-entity JSON-LD Schema
  const serviceSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": `${getCanonicalUrl(`/services/${service.id}`)}#service`,
        "name": service.title,
        "serviceType": service.shortTitle,
        "description": service.description,
        "provider": {
          "@type": "Organization",
          "@id": `${SITE_CONFIG.url}/#organization`,
          "name": SITE_CONFIG.name,
          "url": SITE_CONFIG.url,
          "logo": `${SITE_CONFIG.url}/main_logo.png`,
          "telephone": SITE_CONFIG.contact.phone,
          "email": SITE_CONFIG.contact.email,
        },
        "areaServed": {
          "@type": "Country",
          "name": "India",
        },
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": `${service.shortTitle} Deliverables`,
          "itemListElement": service.deliverables.map((item, index) => ({
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": item,
            },
            "position": index + 1,
          })),
        },
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${getCanonicalUrl(`/services/${service.id}`)}#breadcrumb`,
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": `${SITE_CONFIG.url}/`,
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Services",
            "item": `${SITE_CONFIG.url}/services`,
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": service.shortTitle,
            "item": getCanonicalUrl(`/services/${service.id}`),
          },
        ],
      },
      {
        "@type": "FAQPage",
        "@id": `${getCanonicalUrl(`/services/${service.id}`)}#faq`,
        "mainEntity": service.faqs.map((faq) => ({
          "@type": "Question",
          "name": faq.question,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": faq.answer,
          },
        })),
      },
    ],
  };

  return (
    <>
      <SEOHead
        title={`${service.title} – Brandex Digital`}
        description={service.metaDescription}
        canonicalUrl={`/services/${service.id}`}
        keywords={`${service.shortTitle}, Brandex services, software engineering, Bangalore, ${service.deliverables.slice(0, 3).join(", ")}`}
        schema={serviceSchema}
      />

      <main className="min-h-screen bg-[#f8fafd] text-slate-800">
        {/* Breadcrumb Navigation */}
        <nav aria-label="Breadcrumb" className="bg-white border-b border-slate-100 py-3.5 px-6 sm:px-10 lg:px-16">
          <div className="max-w-6xl mx-auto flex items-center gap-2 text-xs text-slate-500 font-medium">
            <Link to="/" className="hover:text-[#4f47e6] transition-colors">Home</Link>
            <span>/</span>
            <Link to="/services" className="hover:text-[#4f47e6] transition-colors">Services</Link>
            <span>/</span>
            <span className="text-slate-900 font-semibold">{service.shortTitle}</span>
          </div>
        </nav>

        {/* Hero Section */}
        <header className="py-16 sm:py-20 lg:py-24 bg-white border-b border-slate-200/80 relative overflow-hidden">
          <div className="absolute inset-0 bg-grid opacity-30 pointer-events-none" />
          <div className="max-w-6xl mx-auto px-6 relative z-10">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 text-xs font-semibold text-slate-600 hover:text-[#4f47e6] transition-colors bg-white px-3.5 py-1.5 rounded-full border border-slate-200 shadow-2xs mb-6 cursor-pointer"
            >
              <ArrowLeft className="w-3.5 h-3.5" /> Back to All Services
            </Link>

            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-bold tracking-wider text-[#4f47e6] bg-indigo-50 border border-indigo-100 uppercase mb-4">
                <span className="w-1.5 h-1.5 rounded-full bg-[#4f47e6] animate-pulse" />
                Service Architecture
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.15] mb-4">
                {service.title}
              </h1>
              <p className="text-lg sm:text-xl font-medium text-[#4f47e6] mb-5">
                {service.tagline}
              </p>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal mb-8">
                {service.description}
              </p>

              <div className="flex flex-wrap items-center gap-3">
                <Button asChild variant="brand" size="lg" className="rounded-xl shadow-sm">
                  <Link to="/contact">Schedule Technical Diagnostic</Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="rounded-xl bg-white border-slate-300">
                  <a href="#deliverables">View Deliverables</a>
                </Button>
              </div>
            </div>
          </div>
        </header>

        <div className="max-w-6xl mx-auto px-6 py-16 sm:py-20 space-y-20">
          {/* Target Audience & Problems Solved Grid */}
          <section aria-labelledby="audience-and-problems" className="space-y-12">
            <div className="grid md:grid-cols-12 gap-8 items-start">
              {/* Who It's For */}
              <div className="md:col-span-5 bg-white rounded-3xl p-7 sm:p-8 border border-slate-200/90 shadow-2xs space-y-6">
                <div className="space-y-2">
                  <span className="text-xs font-mono font-bold text-[#4f47e6] uppercase tracking-wider">
                    Target Profile
                  </span>
                  <h2 className="text-2xl font-bold text-slate-900 tracking-tight">
                    Who This Service Is For
                  </h2>
                </div>
                <ul className="space-y-3.5">
                  {service.targetAudience.map((aud, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-slate-600">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
                      <span>{aud}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Problems Solved */}
              <div className="md:col-span-7 bg-white rounded-3xl p-7 sm:p-8 border border-slate-200/90 shadow-2xs space-y-6">
                <div className="space-y-2">
                  <span className="text-xs font-mono font-bold text-[#4f47e6] uppercase tracking-wider">
                    Operational Impact
                  </span>
                  <h2 className="text-2xl font-bold text-slate-900 tracking-tight">
                    Key Problems We Solve
                  </h2>
                </div>
                <div className="space-y-4">
                  {service.problemsSolved.map((item, idx) => (
                    <div key={idx} className="p-4 rounded-2xl bg-slate-50 border border-slate-150 space-y-1.5">
                      <h3 className="text-xs sm:text-sm font-bold text-rose-900 flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-rose-500 shrink-0" />
                        {item.problem}
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-600 pl-3.5 leading-relaxed">
                        <strong className="text-slate-800 font-semibold">Brandex Solution: </strong>
                        {item.solution}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* 4-Step Engineering Process */}
          <section aria-labelledby="engineering-process" className="space-y-8">
            <div className="text-center max-w-2xl mx-auto space-y-2">
              <span className="text-xs font-mono font-bold text-[#4f47e6] uppercase tracking-wider">
                Execution Methodology
              </span>
              <h2 id="engineering-process" className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                Our 4-Step Engineering Process
              </h2>
              <p className="text-xs sm:text-sm text-slate-600">
                Transparent milestones with direct founder accountability and sub-second SLAs.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {service.process.map((step) => (
                <div key={step.step} className="bg-white rounded-3xl p-6 border border-slate-200/90 shadow-2xs flex flex-col justify-between space-y-4">
                  <div className="space-y-3">
                    <span className="inline-block text-2xl font-mono font-extrabold text-[#4f47e6]">
                      {step.step}
                    </span>
                    <h3 className="text-base font-bold text-slate-900 leading-snug">
                      {step.title}
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed font-normal">
                      {step.detail}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Concrete Deliverables */}
          <section id="deliverables" aria-labelledby="deliverables-heading" className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200/90 shadow-2xs space-y-8">
            <div className="max-w-2xl space-y-2">
              <span className="text-xs font-mono font-bold text-[#4f47e6] uppercase tracking-wider">
                What You Receive
              </span>
              <h2 id="deliverables-heading" className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                Concrete Tangible Deliverables
              </h2>
              <p className="text-xs sm:text-sm text-slate-600">
                Every deliverable comes with 100% IP handover, zero vendor lock-in, and full architectural documentation.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              {service.deliverables.map((del, idx) => (
                <div key={idx} className="flex items-start gap-3 p-4 rounded-2xl bg-[#f8fafd] border border-slate-100">
                  <ShieldCheck className="w-5 h-5 text-[#4f47e6] mt-0.5 shrink-0" />
                  <span className="text-xs sm:text-sm font-medium text-slate-800 leading-relaxed">
                    {del}
                  </span>
                </div>
              ))}
            </div>
          </section>

          {/* Related Case Studies */}
          {relatedProjects.length > 0 && (
            <section aria-labelledby="related-case-studies" className="space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3">
                <div>
                  <span className="text-xs font-mono font-bold text-[#4f47e6] uppercase tracking-wider">
                    Verified Outcomes
                  </span>
                  <h2 id="related-case-studies" className="text-2xl font-bold text-slate-900 tracking-tight">
                    Case Studies in this Domain
                  </h2>
                </div>
                <Link to="/case-studies" className="text-xs font-bold text-[#4f47e6] hover:underline inline-flex items-center gap-1">
                  All Case Studies <ArrowRight size={13} />
                </Link>
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {relatedProjects.map((p) => (
                  <Link
                    key={p.id}
                    to={`/case-studies/${p.id}`}
                    className="bg-white rounded-3xl p-6 border border-slate-200/90 shadow-2xs hover:shadow-md hover:border-[#4f47e6] transition-all group flex flex-col justify-between"
                  >
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <Badge variant="secondary" className="text-[11px] font-mono">
                          {p.category}
                        </Badge>
                        <span className="text-xs text-emerald-600 font-bold">{p.result}</span>
                      </div>
                      <h3 className="text-lg font-bold text-slate-900 group-hover:text-[#4f47e6] transition-colors">
                        {p.title}
                      </h3>
                      <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">
                        {p.description}
                      </p>
                    </div>
                    <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-[#4f47e6]">
                      <span>Read Case Study</span>
                      <ArrowRight size={13} className="transition-transform group-hover:translate-x-1" />
                    </div>
                  </Link>
                ))}
              </div>
            </section>
          )}

          {/* Related Blog / Architectural Guides */}
          {relatedBlogs.length > 0 && (
            <section aria-labelledby="related-insights" className="space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3">
                <div>
                  <span className="text-xs font-mono font-bold text-[#4f47e6] uppercase tracking-wider">
                    Technical Editorial
                  </span>
                  <h2 id="related-insights" className="text-2xl font-bold text-slate-900 tracking-tight">
                    Architectural Guides & Insights
                  </h2>
                </div>
                <Link to="/blog" className="text-xs font-bold text-[#4f47e6] hover:underline inline-flex items-center gap-1">
                  All Articles <ArrowRight size={13} />
                </Link>
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {relatedBlogs.map((b) => (
                  <Link
                    key={b.id}
                    to={`/blog/${b.id}`}
                    className="bg-white rounded-3xl p-6 border border-slate-200/90 shadow-2xs hover:shadow-md hover:border-[#4f47e6] transition-all group flex flex-col justify-between"
                  >
                    <div className="space-y-3">
                      <div className="flex items-center justify-between text-[11px] text-slate-500 font-mono">
                        <span className="font-bold text-[#4f47e6]">{b.category}</span>
                        <span>{b.readTime}</span>
                      </div>
                      <h3 className="text-base font-bold text-slate-900 group-hover:text-[#4f47e6] transition-colors line-clamp-2">
                        {b.title}
                      </h3>
                      <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">
                        {b.excerpt}
                      </p>
                    </div>
                    <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-[#4f47e6]">
                      <span>Read Engineering Note</span>
                      <ArrowRight size={13} className="transition-transform group-hover:translate-x-1" />
                    </div>
                  </Link>
                ))}
              </div>
            </section>
          )}

          {/* Genuine Visible FAQs */}
          <section aria-labelledby="faq-heading" className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200/90 shadow-2xs space-y-8">
            <div className="max-w-2xl space-y-2">
              <span className="text-xs font-mono font-bold text-[#4f47e6] uppercase tracking-wider">
                Common Inquiries
              </span>
              <h2 id="faq-heading" className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                Frequently Asked Questions
              </h2>
              <p className="text-xs sm:text-sm text-slate-600">
                Direct answers to common technical and engagement questions about this service.
              </p>
            </div>

            <div className="space-y-3">
              {service.faqs.map((faq, idx) => {
                const isOpen = openFaq === idx;
                return (
                  <div
                    key={idx}
                    className="border border-slate-200 rounded-2xl overflow-hidden transition-colors"
                  >
                    <button
                      type="button"
                      onClick={() => setOpenFaq(isOpen ? null : idx)}
                      className="w-full text-left p-5 flex items-center justify-between gap-4 font-bold text-sm sm:text-base text-slate-900 hover:text-[#4f47e6] transition-colors"
                      aria-expanded={isOpen}
                    >
                      <span>{faq.question}</span>
                      <ChevronDown
                        className={`w-4 h-4 text-slate-400 transition-transform duration-200 shrink-0 ${
                          isOpen ? "rotate-180 text-[#4f47e6]" : ""
                        }`}
                      />
                    </button>
                    {isOpen && (
                      <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 font-normal">
                        {faq.answer}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </section>

          {/* Other Services Navigation */}
          <section aria-labelledby="other-services" className="space-y-6">
            <h2 id="other-services" className="text-xl font-bold text-slate-900 tracking-tight">
              Explore Related Services
            </h2>
            <div className="grid sm:grid-cols-3 gap-6">
              {otherServices.map((s) => (
                <Link
                  key={s.id}
                  to={`/services/${s.id}`}
                  className="p-5 rounded-2xl bg-white border border-slate-200 shadow-2xs hover:border-[#4f47e6] transition-all group"
                >
                  <h3 className="text-sm font-bold text-slate-900 group-hover:text-[#4f47e6] transition-colors mb-1">
                    {s.title}
                  </h3>
                  <p className="text-xs text-slate-500 line-clamp-2 leading-relaxed">
                    {s.tagline}
                  </p>
                </Link>
              ))}
            </div>
          </section>

          {/* Bottom Diagnostic CTA */}
          <section className="rounded-3xl p-8 sm:p-12 bg-gradient-to-br from-[#070e1e] to-[#0f1e37] text-white text-center space-y-6 shadow-xl">
            <div className="max-w-2xl mx-auto space-y-3">
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#818cf8]">
                Ready to Accelerate?
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-white">
                Engineer Your Custom Solution with Brandex
              </h2>
              <p className="text-xs sm:text-sm text-slate-300 max-w-xl mx-auto leading-relaxed">
                Work directly with founding systems architects. Fixed sprint deliverables, zero platform tax, and 100% source code ownership.
              </p>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
              <Button asChild variant="brand" size="lg" className="rounded-xl shadow-lg shadow-indigo-900/50">
                <Link to="/contact">Schedule Diagnostic Call</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="rounded-xl bg-slate-800/80 text-white border-slate-700 hover:bg-slate-700">
                <Link to="/case-studies">Explore Our Case Studies</Link>
              </Button>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}
