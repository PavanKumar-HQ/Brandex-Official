import { useScrollReveal } from "@/hooks/useScrollReveal";
import SEOTags from "@/components/SEOTags";
import Breadcrumb from "@/components/Breadcrumb";
import { Shield, Lock, Eye, Server, RefreshCw, FileText, Mail, Phone, MapPin } from "lucide-react";

export default function PrivacyPolicyPage() {
  useScrollReveal();

  const canonicalUrl = "https://www.brandex.co.in/privacy-policy";

  return (
    <>
      <SEOTags 
        title="Privacy Policy & Data Governance | Brandex"
        description="Comprehensive privacy policy, data governance framework, and security practices of Brandex. Compliant with Digital Personal Data Protection (DPDP) standards."
        keywords="privacy policy, data governance, security compliance, client confidentiality, Brandex privacy, DPDP India, software data isolation"
        canonicalUrl={canonicalUrl}
        image="https://www.brandex.co.in/og/privacy.png"
        schema={[
          {
            "@type": "WebPage",
            "@id": `${canonicalUrl}#webpage`,
            "name": "Privacy Policy — Brandex",
            "url": canonicalUrl,
            "description": "Brandex data privacy policy and confidentiality governance for software clients and product users.",
            "isPartOf": { "@id": "https://www.brandex.co.in/#website" }
          }
        ]}
      />

      <section className="pt-4 sm:pt-6 pb-12 sm:pb-16 lg:pb-20 bg-background relative">
        <div className="container mx-auto px-6">
          <Breadcrumb
            items={[
              { label: "Legal", href: "/terms-and-conditions" },
              { label: "Privacy Policy" },
            ]}
            className="mb-8"
          />

          {/* Header */}
          <div className="max-w-4xl mb-12 scroll-reveal">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/20 text-accent text-xs font-semibold tracking-wider uppercase mb-4">
              <Shield size={13} /> Legal &amp; Data Protection
            </div>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-4 leading-[1.15]">
              Privacy Policy &amp; <span className="text-gradient">Data Governance</span>
            </h1>
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
              Effective Date: <strong>April 1, 2026</strong> | Last Revised: <strong>October 1, 2026</strong>
            </p>
          </div>

          <div className="max-w-4xl space-y-12 scroll-reveal scroll-reveal-delay-1 text-muted-foreground leading-relaxed">
            {/* Overview & Scope */}
            <div className="p-6 rounded-2xl bg-card border-2 border-border/80 space-y-4 shadow-sm">
              <h2 className="font-display text-2xl font-bold text-foreground flex items-center gap-2.5">
                <Lock size={20} className="text-accent" /> 1. Overview &amp; Scope
              </h2>
              <p>
                This Privacy Policy governs the collection, processing, storage, and transfer of personal and commercial data by <strong className="text-foreground">Brandex</strong> ("Brandex", "we", "us", or "our"), headquartered at #121, 13th Main M.C. Layout, Vijaynagar, Bangalore - 560040, Karnataka, India.
              </p>
              <p>
                This policy applies unconditionally across all Brandex digital properties, including our primary website (<a href="https://www.brandex.co.in" className="text-accent hover:underline">brandex.co.in</a>), our commercial software products (<strong className="text-foreground">Brandex Travel CRM &amp; Itinerary Platform</strong>, <strong className="text-foreground">Brandex Invoice Builder &amp; Inventory Suite</strong>), custom client software engagements, APIs, and client support channels.
              </p>
            </div>

            {/* Information We Collect */}
            <div className="space-y-4">
              <h2 className="font-display text-2xl font-bold text-foreground flex items-center gap-2.5">
                <Eye size={20} className="text-accent" /> 2. Information We Collect
              </h2>
              <p>
                We adhere to strict data minimization principles. We only collect information necessary to deliver high-performance technology services and software operations:
              </p>
              <div className="grid sm:grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-xl bg-secondary/50 border border-border/70 space-y-2">
                  <h3 className="font-display font-bold text-foreground text-sm">Direct Personal &amp; Contact Data</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    Name, corporate email address, contact phone number, company name, billing address, and direct communications submitted via consultation forms or Cal.com scheduling.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-secondary/50 border border-border/70 space-y-2">
                  <h3 className="font-display font-bold text-foreground text-sm">Transactional &amp; Financial Information</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    Payment identifiers, GST numbers, and transaction tokens processed via PCI-DSS compliant gateways (e.g., Razorpay/Stripe). Brandex does not store raw credit/debit card numbers.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-secondary/50 border border-border/70 space-y-2">
                  <h3 className="font-display font-bold text-foreground text-sm">Product Tenant &amp; Operational Data</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    Invoices, customer catalogs, inventory line items, itinerary documents, and quotation data uploaded or generated within Brandex SaaS tools (Travel CRM, Invoice Builder).
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-secondary/50 border border-border/70 space-y-2">
                  <h3 className="font-display font-bold text-foreground text-sm">Telemetry, Logs &amp; Technical Headers</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    IP address, browser user-agent, operating system, page response latency, Core Web Vitals telemetry, and anonymized referral paths for security and error debugging.
                  </p>
                </div>
              </div>
            </div>

            {/* Tenant Isolation & Software Data Confidentiality */}
            <div className="space-y-4">
              <h2 className="font-display text-2xl font-bold text-foreground flex items-center gap-2.5">
                <Server size={20} className="text-accent" /> 3. Tenant Isolation &amp; Zero Monetization
              </h2>
              <p>
                <strong className="text-foreground">Brandex operates on a strict zero-monetization policy regarding client data.</strong> We do not sell, rent, monetize, or broker any personal or business data to third-party data brokers, advertising networks, or AI model training aggregators.
              </p>
              <ul className="list-disc pl-6 space-y-2 text-sm">
                <li><strong className="text-foreground">Tenant Privacy:</strong> Customer data stored within Brandex software applications (e.g., client itineraries, customer phone numbers, invoices) is strictly isolated using cryptographic partition keys and row-level security (RLS).</li>
                <li><strong className="text-foreground">Codebase Confidentiality:</strong> Custom software source code, proprietary algorithms, database schemas, and API keys created during client engagements are safeguarded under strict bilateral Non-Disclosure Agreements (NDAs).</li>
              </ul>
            </div>

            {/* Legal Basis for Processing */}
            <div className="space-y-4">
              <h2 className="font-display text-2xl font-bold text-foreground flex items-center gap-2.5">
                <FileText size={20} className="text-accent" /> 4. Legal Grounds for Processing (DPDP Act 2023 &amp; Global Standards)
              </h2>
              <p>
                We process your personal data under the following legitimate grounds recognized by the Digital Personal Data Protection (DPDP) Act 2023 of India and international privacy regulations:
              </p>
              <ol className="list-decimal pl-6 space-y-2 text-sm">
                <li><strong className="text-foreground">Contractual Performance:</strong> To fulfill software development contracts, deliver lifetime product licenses, process subscription billing, and provide technical support.</li>
                <li><strong className="text-foreground">Legitimate Business Interests:</strong> To detect security threats, prevent distributed denial-of-service (DDoS) attacks, debug software exceptions, and maintain system uptime.</li>
                <li><strong className="text-foreground">Legal &amp; Regulatory Compliance:</strong> To maintain statutory financial records, tax invoices, and comply with lawful requests from Indian judicial authorities.</li>
                <li><strong className="text-foreground">Explicit Consent:</strong> Where you have opted in to receive technical newsletters or community hackathon invitations.</li>
              </ol>
            </div>

            {/* Security Architecture */}
            <div className="space-y-4">
              <h2 className="font-display text-2xl font-bold text-foreground flex items-center gap-2.5">
                <Shield size={20} className="text-accent" /> 5. Security Safeguards &amp; Encryption
              </h2>
              <p>
                Brandex implements defense-in-depth security measures to protect data against unauthorized disclosure, alteration, or compromise:
              </p>
              <div className="space-y-2.5 text-sm">
                <div className="p-3.5 rounded-xl bg-card border border-border flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 mt-2 flex-shrink-0" />
                  <p><strong className="text-foreground">Encryption in Transit &amp; At Rest:</strong> All web traffic is strictly enforced over TLS 1.3 with HSTS. Stored databases and file attachments use AES-256 encryption.</p>
                </div>
                <div className="p-3.5 rounded-xl bg-card border border-border flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 mt-2 flex-shrink-0" />
                  <p><strong className="text-foreground">Principle of Least Privilege (PoLP):</strong> Internal access to production infrastructure is restricted to authorized engineering personnel using multi-factor hardware keys.</p>
                </div>
                <div className="p-3.5 rounded-xl bg-card border border-border flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 mt-2 flex-shrink-0" />
                  <p><strong className="text-foreground">Regular Vulnerability Assessments:</strong> Automated CI/CD static application security testing (SAST) and routine penetration testing of our APIs.</p>
                </div>
              </div>
            </div>

            {/* Cookies & Tracking */}
            <div className="space-y-4">
              <h2 className="font-display text-2xl font-bold text-foreground flex items-center gap-2.5">
                <RefreshCw size={20} className="text-accent" /> 6. Cookies &amp; Local Storage
              </h2>
              <p>
                We use strictly necessary cookies and local storage tokens to preserve your UI theme preference (dark/light mode), active session tokens, and prevent CSRF attacks. You can manage or disable cookie preferences directly in your web browser settings.
              </p>
            </div>

            {/* User Rights */}
            <div className="space-y-4">
              <h2 className="font-display text-2xl font-bold text-foreground flex items-center gap-2.5">
                <Lock size={20} className="text-accent" /> 7. Your Legal Rights
              </h2>
              <p>
                As a data principal, you have the right to request access to your personal data, rectify inaccuracies, request permanent erasure ("right to be forgotten"), withdraw consent, or request a portable copy of your account data.
              </p>
              <p>
                To exercise any of these rights, email our Data Protection Desk at <a href="mailto:team@brandex.co.in" className="text-accent font-semibold hover:underline">team@brandex.co.in</a>. Requests are processed within 15 business days.
              </p>
            </div>

            {/* Grievance Officer & Contact */}
            <div className="p-6 rounded-2xl bg-secondary/40 border-2 border-border/80 space-y-4">
              <h2 className="font-display text-xl font-bold text-foreground">
                8. Grievance Officer &amp; Legal Notices
              </h2>
              <p className="text-sm">
                For grievances, regulatory notices, or inquiries regarding our privacy practices, contact:
              </p>
              <div className="space-y-2 text-sm text-foreground">
                <p className="font-bold">Brandex Data Privacy &amp; Compliance Cell</p>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <MapPin size={15} className="text-accent flex-shrink-0" />
                  <span>#121, 13th Main M.C. Layout, Vijaynagar, Bangalore - 560040, Karnataka, India</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Mail size={15} className="text-accent flex-shrink-0" />
                  <span>team@brandex.co.in / sathvik@brandex.co.in</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Phone size={15} className="text-accent flex-shrink-0" />
                  <span>+91 94809 44727</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
