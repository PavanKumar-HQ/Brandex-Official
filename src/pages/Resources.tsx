import { useScrollReveal } from "@/hooks/useScrollReveal";
import { BookOpen, Download, Video, HelpCircle, Brain, Lightbulb, ArrowRight, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import CTABanner from "@/components/home/CTABanner";
import SEOTags from "@/components/SEOTags";

const resourceCategories = [
  {
    icon: BookOpen,
    title: "Blog",
    description: "In-depth articles on technology, digital transformation, business growth, and industry trends.",
    href: "/blog",
    count: "Latest Articles",
    color: "hsl(230 60% 55%)",
  },
  {
    icon: Lightbulb,
    title: "Business Guides",
    description: "Practical guides to help businesses understand software, automation, cybersecurity, and IT infrastructure.",
    href: "/blog",
    count: "Free Guides",
    color: "hsl(45 90% 50%)",
  },
  {
    icon: Brain,
    title: "AI Resources",
    description: "Understand how AI, automation, and machine learning can transform your business operations.",
    href: "/blog",
    count: "AI Insights",
    color: "hsl(270 55% 55%)",
  },
  {
    icon: HelpCircle,
    title: "FAQs",
    description: "Answers to the most common questions about our services, pricing, processes, and timelines.",
    href: "/faq",
    count: "30+ Questions",
    color: "hsl(160 50% 45%)",
  },
  {
    icon: Download,
    title: "Downloads",
    description: "Free templates, checklists, and guides for business digitization, office setup, and technology planning.",
    href: "/contact",
    count: "Free Downloads",
    color: "hsl(200 65% 50%)",
  },
  {
    icon: Video,
    title: "Case Studies",
    description: "Real projects, real results. See how we've helped businesses achieve measurable growth and transformation.",
    href: "/case-studies",
    count: "View All",
    color: "hsl(340 60% 52%)",
  },
];

const featuredTopics = [
  { title: "How to Choose the Right ERP for Your Business", category: "Business Software", readTime: "5 min" },
  { title: "Why Every SME Needs a Cybersecurity Audit in 2025", category: "Cybersecurity", readTime: "4 min" },
  { title: "AI Chatbots vs Human Support: What's Right for You?", category: "AI & Automation", readTime: "6 min" },
  { title: "The Complete Office Setup Checklist for New Businesses", category: "Infrastructure", readTime: "8 min" },
  { title: "How Solar Panels Can Cut Your Office Electricity Bill by 40%", category: "Solar & Energy", readTime: "5 min" },
  { title: "Branding vs Marketing: What You Need First", category: "Branding", readTime: "4 min" },
];

export default function ResourcesPage() {
  useScrollReveal();

  return (
    <>
      <SEOTags 
        title="Resources Hub | Guides, Case Studies & Tech Insights | Brandex"
        description="Access technical guides, business growth insights, engineering playbooks, and case studies from the Brandex team in Bangalore."
        keywords="brandex resources, technology guides, business growth playbooks, software engineering insights, case studies"
        canonicalUrl="https://www.brandex.co.in/resources"
        image="https://www.brandex.co.in/og/resources.png"
      />
      {/* Hero */}
      <section className="pt-4 sm:pt-6 pb-12 sm:pb-16 lg:pb-20 relative overflow-hidden bg-background">
        <div className="absolute inset-0 bg-grid opacity-20 pointer-events-none" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl scroll-reveal">
            <p className="text-sm font-medium uppercase tracking-widest text-accent mb-4">Resources</p>
            <h1 className="font-display text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Knowledge that{" "}
              <span className="text-gradient">grows your business</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Free guides, articles, FAQs, and case studies to help you make smarter business and technology decisions.
            </p>
          </div>
        </div>
      </section>

      {/* Resource Categories */}
      <section className="py-12">
        <div className="container mx-auto px-6">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {resourceCategories.map((res, i) => {
              const Icon = res.icon;
              return (
                <motion.div
                  key={res.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.45, delay: i * 0.07 }}
                >
                  <Link
                    to={res.href}
                    className="group flex flex-col p-7 bg-card border border-border/60 rounded-2xl hover:border-accent/20 hover:shadow-lg hover:shadow-black/5 transition-all duration-300 h-full"
                  >
                    <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-110" style={{ background: `${res.color}18` }}>
                      <Icon size={22} style={{ color: res.color }} />
                    </div>
                    <div className="flex items-center justify-between mb-2">
                      <h2 className="font-display font-bold text-xl text-foreground">{res.title}</h2>
                      <ExternalLink size={15} className="text-muted-foreground/40 group-hover:text-accent transition-colors" />
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-5 flex-1">{res.description}</p>
                    <span className="text-sm font-semibold text-accent flex items-center gap-1.5 group-hover:gap-2.5 transition-all">
                      {res.count} <ArrowRight size={14} />
                    </span>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured Articles */}
      <section className="py-20 lg:py-24 bg-secondary/40">
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between mb-10">
            <div className="scroll-reveal">
              <p className="text-sm font-medium uppercase tracking-widest text-accent mb-2">Insights</p>
              <h2 className="font-display text-3xl lg:text-4xl font-bold text-foreground">Featured Topics</h2>
            </div>
            <Button asChild variant="outline" size="sm" className="hidden sm:flex">
              <Link to="/blog">View All Articles <ArrowRight size={14} className="ml-1.5" /></Link>
            </Button>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {featuredTopics.map((topic, i) => (
              <motion.div
                key={topic.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.45, delay: i * 0.06 }}
              >
                <Link
                  to="/blog"
                  className="group flex flex-col p-6 bg-card border border-border/60 rounded-xl hover:border-accent/20 hover:shadow-md transition-all duration-200 h-full"
                >
                  <span className="text-[11px] font-semibold uppercase tracking-widest text-accent mb-3 px-2 py-0.5 bg-accent/10 rounded-full w-fit">
                    {topic.category}
                  </span>
                  <h3 className="font-display font-semibold text-base text-foreground leading-snug mb-3 flex-1 group-hover:text-accent transition-colors">
                    {topic.title}
                  </h3>
                  <p className="text-xs text-muted-foreground">{topic.readTime} read</p>
                </Link>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-8 sm:hidden">
            <Button asChild variant="outline">
              <Link to="/blog">View All Articles</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Newsletter / CTA */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto text-center scroll-reveal">
            <h2 className="font-display text-2xl lg:text-3xl font-bold text-foreground mb-4">
              Have a specific question?
            </h2>
            <p className="text-muted-foreground mb-8">
              Our team is happy to answer questions about technology, pricing, timelines, or anything about your business. Reach out anytime.
            </p>
            <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
              <Link to="/contact">Ask Us Anything <ArrowRight size={16} className="ml-2" /></Link>
            </Button>
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
