import { useScrollReveal } from "@/hooks/useScrollReveal";
import SEOTags from "@/components/SEOTags";
import Breadcrumb from "@/components/Breadcrumb";
import { FileText, ShieldCheck, Scale, CheckCircle2, AlertCircle, HelpCircle } from "lucide-react";

export default function TermsAndConditionsPage() {
  useScrollReveal();

  const canonicalUrl = "https://www.brandex.co.in/terms-and-conditions";

  return (
    <>
      <SEOTags 
        title="Terms & Conditions of Service & Software Engagement | Brandex"
        description="Official Master Terms of Service, Commercial Software Licensing Agreements, IP Assignment and Client Engagements for Brandex."
        keywords="terms and conditions, software development agreement, SaaS licensing terms, intellectual property assignment, Brandex terms, Bangalore jurisdiction"
        canonicalUrl={canonicalUrl}
        image="https://www.brandex.co.in/og/terms.png"
        schema={[
          {
            "@type": "WebPage",
            "@id": `${canonicalUrl}#webpage`,
            "name": "Terms & Conditions of Service — Brandex",
            "url": canonicalUrl,
            "description": "Brandex terms of service and commercial software engagement agreement.",
            "isPartOf": { "@id": "https://www.brandex.co.in/#website" }
          }
        ]}
      />

      <section className="pt-4 sm:pt-6 pb-12 sm:pb-16 lg:pb-20 bg-background relative">
        <div className="container mx-auto px-6">
          <Breadcrumb
            items={[
              { label: "Legal", href: "/privacy-policy" },
              { label: "Terms & Conditions" },
            ]}
            className="mb-8"
          />

          {/* Header */}
          <div className="max-w-4xl mb-12 scroll-reveal">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/20 text-accent text-xs font-semibold tracking-wider uppercase mb-4">
              <Scale size={13} /> Master Service &amp; Licensing Agreement
            </div>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-4 leading-[1.15]">
              Terms &amp; Conditions <span className="text-gradient">of Service</span>
            </h1>
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
              Effective Date: <strong>April 1, 2026</strong> | Last Revised: <strong>October 1, 2026</strong>
            </p>
          </div>

          <div className="max-w-4xl space-y-12 scroll-reveal scroll-reveal-delay-1 text-muted-foreground leading-relaxed">
            {/* Agreement Preamble */}
            <div className="p-6 rounded-2xl bg-card border-2 border-border/80 space-y-4 shadow-sm">
              <h2 className="font-display text-2xl font-bold text-foreground flex items-center gap-2.5">
                <FileText size={20} className="text-accent" /> 1. Binding Agreement &amp; Definitions
              </h2>
              <p>
                These Master Terms &amp; Conditions of Service ("Terms") constitute a legally binding contract between <strong className="text-foreground">Brandex</strong> ("Brandex", "Company", "we", "us", or "our"), headquartered at #121, 13th Main M.C. Layout, Vijaynagar, Bangalore - 560040, India, and the entity or individual ("Client", "Licensee", "User", or "you") accessing our websites (<a href="https://www.brandex.co.in" className="text-accent hover:underline">brandex.co.in</a>), purchasing software products, or retaining custom engineering services.
              </p>
              <p>
                By commissioning a project, purchasing a software license, subscribing to a SaaS platform, or browsing this site, you acknowledge that you have read, understood, and agreed to be bound by these Terms and our Privacy Policy.
              </p>
            </div>

            {/* Scope of Services & Engagements */}
            <div className="space-y-4">
              <h2 className="font-display text-2xl font-bold text-foreground flex items-center gap-2.5">
                <ShieldCheck size={20} className="text-accent" /> 2. Scope of Services &amp; Engagements
              </h2>
              <p>
                Brandex delivers digital and technological solutions across three principal categories:
              </p>
              <div className="space-y-3 pt-1">
                <div className="p-4 rounded-xl bg-secondary/50 border border-border/70">
                  <h3 className="font-display font-bold text-foreground text-sm mb-1">A. Custom Software &amp; Engineering Engagements</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    Custom web application development, cloud infrastructure setup, AI workflow integration, UI/UX design, database engineering, and cybersecurity services executed pursuant to a mutually executed Statement of Work (SOW) or project quotation.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-secondary/50 border border-border/70">
                  <h3 className="font-display font-bold text-foreground text-sm mb-1">B. Commercial Off-the-Shelf (COTS) Software Licenses &amp; SaaS</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    Proprietary business applications developed by Brandex, including the <strong>Brandex Travel CRM &amp; Itinerary Platform</strong> (offered on a monthly/annual SaaS subscription) and the <strong>Brandex Invoice Builder &amp; Inventory Suite</strong> (offered as a perpetual lifetime software license).
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-secondary/50 border border-border/70">
                  <h3 className="font-display font-bold text-foreground text-sm mb-1">C. Physical &amp; Digital Infrastructure Solutions</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    IT office networking, biometric access control systems, CCTV security installations, and workspace infrastructure rollouts within Bangalore and Karnataka.
                  </p>
                </div>
              </div>
            </div>

            {/* Commercial Software Licensing Terms */}
            <div className="space-y-4">
              <h2 className="font-display text-2xl font-bold text-foreground flex items-center gap-2.5">
                <CheckCircle2 size={20} className="text-accent" /> 3. Commercial Software Terms (Products Store)
              </h2>
              <ul className="list-disc pl-6 space-y-2 text-sm">
                <li><strong className="text-foreground">Lifetime License Model (Invoice Builder):</strong> Grants the purchasing organization a non-exclusive, perpetual, non-transferable license to use the software for internal business operations. Includes minor bug fixes and core feature updates as published by Brandex. Does not grant rights to redistribute or resell the underlying source code.</li>
                <li><strong className="text-foreground">SaaS Subscription Model (Travel CRM):</strong> Grants active subscribers access to cloud-hosted infrastructure on a month-to-month or annual recurring basis. Service access is contingent upon continuous, timely settlement of subscription invoices.</li>
                <li><strong className="text-foreground">Service Level Agreement (SLA):</strong> Brandex aims for 99.9% uptime for cloud-hosted SaaS offerings, excluding scheduled maintenance windows notified in advance.</li>
              </ul>
            </div>

            {/* Intellectual Property Rights */}
            <div className="space-y-4">
              <h2 className="font-display text-2xl font-bold text-foreground flex items-center gap-2.5">
                <Scale size={20} className="text-accent" /> 4. Intellectual Property Rights &amp; Ownership
              </h2>
              <div className="space-y-2.5 text-sm">
                <p>
                  <strong className="text-foreground">Custom Client Deliverables:</strong> Upon full and final settlement of all invoiced milestone fees, Brandex assigns to the Client all right, title, and interest in the bespoke frontend code, custom database schemas, graphic designs, and unique brand assets specifically created for the Client.
                </p>
                <p>
                  <strong className="text-foreground">Brandex Core Frameworks &amp; Tooling:</strong> Brandex retains full intellectual property ownership of its pre-existing libraries, modular UI components, deployment toolchains, algorithms, and proprietary software products (including Travel CRM and Invoice Builder).
                </p>
                <p>
                  <strong className="text-foreground">Client Materials:</strong> The Client retains all ownership of any logos, proprietary text, databases, or third-party assets provided to Brandex for project execution.
                </p>
              </div>
            </div>

            {/* Invoicing, Milestones & Payment Terms */}
            <div className="space-y-4">
              <h2 className="font-display text-2xl font-bold text-foreground flex items-center gap-2.5">
                <FileText size={20} className="text-accent" /> 5. Invoicing, Milestones &amp; Payment Terms
              </h2>
              <ol className="list-decimal pl-6 space-y-2 text-sm">
                <li><strong className="text-foreground">Milestone Billing:</strong> Custom engineering projects are structured in phased milestones (e.g., Discovery &amp; UI Design, Core Engineering &amp; Alpha, Final QA &amp; Production Deployment). Milestone sign-offs trigger corresponding disbursements.</li>
                <li><strong className="text-foreground">Payment Window:</strong> Invoices are payable within seven (7) business days of issuance via official bank transfer (NEFT/RTGS/IMPS), UPI, or authorized online payment gateways.</li>
                <li><strong className="text-foreground">Taxes &amp; GST:</strong> All fees quoted are subject to statutory Goods &amp; Services Tax (GST) at applicable rates in India. Tax invoices are provided with verifiable HSN/SAC codes.</li>
                <li><strong className="text-foreground">Late Payments:</strong> Overdue balances exceeding 14 calendar days may result in a temporary suspension of staging server access and milestone deployments until settled.</li>
              </ol>
            </div>

            {/* Client Responsibilities & Scope Changes */}
            <div className="space-y-4">
              <h2 className="font-display text-2xl font-bold text-foreground flex items-center gap-2.5">
                <AlertCircle size={20} className="text-accent" /> 6. Client Responsibilities &amp; Change Requests
              </h2>
              <p className="text-sm">
                Project delivery timelines are dependent on timely feedback, domain access, API keys, and asset approvals from the Client. Material additions to project functionality beyond the agreed Statement of Work will be documented as formal Change Requests with separate timeline and cost impact estimates before engineering begins.
              </p>
            </div>

            {/* Warranties, Support & Limitation of Liability */}
            <div className="space-y-4">
              <h2 className="font-display text-2xl font-bold text-foreground flex items-center gap-2.5">
                <ShieldCheck size={20} className="text-accent" /> 7. Warranty, Post-Launch Support &amp; Limitation of Liability
              </h2>
              <div className="space-y-2.5 text-sm">
                <p>
                  <strong className="text-foreground">Warranty Period:</strong> Brandex provides a complimentary 30-day post-launch warranty on all custom web and software deployments to resolve bugs or functional discrepancies directly related to the agreed specification.
                </p>
                <p>
                  <strong className="text-foreground">Limitation of Liability:</strong> To the maximum extent permitted by applicable Indian law, Brandex's total aggregate liability arising out of any contract or engagement shall not exceed the total fees actually paid by the Client to Brandex under the specific Statement of Work during the three (3) months preceding the claim.
                </p>
              </div>
            </div>

            {/* Governing Law & Dispute Resolution */}
            <div className="p-6 rounded-2xl bg-secondary/40 border-2 border-border/80 space-y-4">
              <h2 className="font-display text-xl font-bold text-foreground flex items-center gap-2">
                <Scale size={18} className="text-accent" /> 8. Governing Law &amp; Exclusive Jurisdiction
              </h2>
              <p className="text-sm">
                These Terms and any dispute, controversy, or claim arising out of or related to our services or software shall be governed by, and construed in accordance with, the laws of the Republic of India.
              </p>
              <p className="text-sm">
                The parties agree to attempt amicable dispute resolution through good-faith executive mediation. In the event mediation fails, the courts having jurisdiction over <strong className="text-foreground">Bangalore, Karnataka, India</strong> shall have exclusive jurisdiction to settle any disputes.
              </p>
            </div>

            {/* Inquiries */}
            <div className="pt-4 border-t border-border flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <p className="text-sm text-muted-foreground">
                Questions about our Master Terms of Service?
              </p>
              <a
                href="mailto:team@brandex.co.in"
                className="inline-flex items-center gap-2 text-sm font-bold text-accent hover:underline"
              >
                <HelpCircle size={15} /> Contact Legal Counsel: team@brandex.co.in
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
