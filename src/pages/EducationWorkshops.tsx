import { useState } from "react";
import { Link } from "react-router-dom";
import {
  GraduationCap,
  Bot,
  Shield,
  CreditCard,
  Code2,
  Lightbulb,
  CheckCircle2,
  ArrowRight,
  BookOpen,
  Calendar,
  Clock,
  Users,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import SEOTags from "@/components/SEOTags";
import Breadcrumb from "@/components/Breadcrumb";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const detailedWorkshops = [
  {
    title: "Applied AI & Prompt Engineering for Students",
    audience: "Undergraduate & Postgraduate Students",
    duration: "1 Day (6 Hours)",
    icon: Bot,
    category: "AI & Productivity",
    overview: "A hands-on coding and reasoning workshop showing students how to leverage generative models, design structured prompts, build RAG pipelines, and integrate AI into academic research and real projects.",
    outcomes: [
      "Understand tokenization, context windows, and model parameters",
      "Design zero-shot, few-shot, and chain-of-thought system prompts",
      "Build a document-Q&A assistant using lightweight Python scripts",
      "Responsible AI ethics, copyright compliance, and academic integrity",
    ],
  },
  {
    title: "Practical Cybersecurity & Online Safety Fundamentals",
    audience: "High School & College Students",
    duration: "Half Day (4 Hours)",
    icon: Shield,
    category: "Security Concepts",
    overview: "Interactive demonstrations of common cyber attack vectors, credential theft, social engineering, and practical defense strategies to safeguard personal and organizational data.",
    outcomes: [
      "Identifying phishing, smishing, and malicious payloads",
      "Password hygiene, password managers, and hardware 2FA keys",
      "Network sniffing overview on open Wi-Fi and VPN mitigation",
      "Basics of ethical hacking concepts and legal bug bounty frameworks",
    ],
  },
  {
    title: "Full-Stack Web Engineering from Scratch",
    audience: "CS / IT / Engineering Students",
    duration: "2 Days (12 Hours)",
    icon: Code2,
    category: "Software Development",
    overview: "Build, style, and deploy a complete full-stack web application with React, TypeScript, TailwindCSS, and Node.js backend endpoints.",
    outcomes: [
      "Component-driven architecture and state management",
      "RESTful API design and database CRUD operations",
      "Git workflow, merge conflicts, and GitHub pull requests",
      "Continuous deployment to Vercel/Netlify with custom domains",
    ],
  },
];

export default function EducationWorkshopsPage() {
  useScrollReveal();

  return (
    <>
      <SEOTags
        title="Technology Workshops for Schools & Colleges | Brandex Education"
        description="Explore in-depth curriculums for practical technology workshops across AI, cybersecurity, full-stack software development, and digital skills."
        keywords="tech workshops colleges bangalore, practical student workshops, AI workshop curriculum, cybersecurity school training"
        image="https://www.brandex.co.in/og/workshops.png"
        canonicalUrl="https://www.brandex.co.in/education/workshops"
        schema={{
          "@type": "Course",
          "@id": "https://www.brandex.co.in/education/workshops#courses",
          "name": "Brandex Technology Workshops for Institutions",
          "description": "Practical hands-on technical curriculums for student communities.",
          "provider": { "@id": "https://www.brandex.co.in/#organization" }
        }}
      />

      <section className="pt-4 sm:pt-6 pb-12 sm:pb-16 lg:pb-20 relative overflow-hidden bg-background">
        <div className="container mx-auto px-6 relative z-10">
          <Breadcrumb
            items={[
              { label: "Education", href: "/education" },
              { label: "Workshops" },
            ]}
            className="mb-6"
          />

          <div className="max-w-3xl space-y-4 mb-14">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-accent/10 border border-accent/20 text-accent text-xs font-semibold tracking-wide uppercase">
              <BookOpen size={13} className="text-accent" />
              Workshop Catalog
            </div>

            <h1 className="font-display text-4xl sm:text-5xl font-bold tracking-tight text-foreground">
              Institutional Workshop <span className="text-gradient">Curriculums</span>
            </h1>

            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
              Detailed outlines and learning outcomes for hands-on technical sessions conducted by Brandex engineers.
            </p>
          </div>

          <div className="space-y-8">
            {detailedWorkshops.map((w) => {
              const Icon = w.icon;
              return (
                <div
                  key={w.title}
                  className="bg-card border border-border/70 rounded-3xl p-6 sm:p-10 shadow-sm hover:border-accent/40 transition-all space-y-6"
                >
                  <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-border/50">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center text-accent">
                        <Icon size={20} />
                      </div>
                      <div>
                        <span className="text-xs font-bold text-accent uppercase tracking-wider">
                          {w.category}
                        </span>
                        <p className="text-xs text-muted-foreground">{w.audience}</p>
                      </div>
                    </div>
                    <span className="text-xs font-semibold bg-secondary px-3 py-1 rounded-full text-foreground flex items-center gap-1.5">
                      <Clock size={12} /> {w.duration}
                    </span>
                  </div>

                  <div className="space-y-2">
                    <h2 className="font-display text-2xl font-bold text-foreground">
                      {w.title}
                    </h2>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {w.overview}
                    </p>
                  </div>

                  <div className="bg-secondary/30 p-5 rounded-2xl border border-border/60 space-y-3">
                    <p className="text-xs font-bold uppercase tracking-wider text-foreground">
                      What Students Learn &amp; Build
                    </p>
                    <div className="grid sm:grid-cols-2 gap-2">
                      {w.outcomes.map((o, i) => (
                        <div key={i} className="flex items-start gap-2 text-xs text-muted-foreground">
                          <CheckCircle2 size={13} className="text-emerald-500 shrink-0 mt-0.5" />
                          <span>{o}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-2 flex flex-wrap items-center justify-between gap-4">
                    <Button asChild className="bg-accent text-accent-foreground hover:bg-accent/90">
                      <Link to="/education#inquiry">
                        Book This Workshop for Your Campus <ArrowRight size={14} className="ml-1.5" />
                      </Link>
                    </Button>
                    <span className="text-xs text-muted-foreground">
                      Available in-person across Karnataka and online nationwide
                    </span>
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
