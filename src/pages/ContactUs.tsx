import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Mail, Phone, MapPin, Building2, Clock, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const contactDetails = [
  {
    icon: Building2,
    label: "Merchant Legal Entity Name",
    content: <span className="text-foreground font-semibold text-base sm:text-lg">SHIVANNA SRI HARSHA</span>,
  },
  {
    icon: MapPin,
    label: "Registered Address",
    content: (
      <p className="text-foreground text-sm sm:text-base leading-relaxed">
        #546, 4th C Main,<br />
        Peenya Small Industries,<br />
        Karnataka, PIN: 560058
      </p>
    ),
  },
  {
    icon: MapPin,
    label: "Operational Address",
    content: (
      <p className="text-foreground text-sm sm:text-base leading-relaxed">
        #546, 4th C Main,<br />
        Peenya Small Industries,<br />
        Karnataka, PIN: 560058
      </p>
    ),
  },
  {
    icon: Phone,
    label: "Telephone No",
    content: (
      <a href="tel:6362537714" className="text-foreground hover:text-accent transition-colors font-medium text-sm sm:text-base">
        6362537714
      </a>
    ),
  },
  {
    icon: Mail,
    label: "E-Mail ID",
    content: (
      <a href="mailto:sriharsha7905@gmail.com" className="text-foreground hover:text-accent transition-colors font-medium text-sm sm:text-base break-all">
        sriharsha7905@gmail.com
      </a>
    ),
  },
];

export default function ContactUsPage() {
  useScrollReveal();

  return (
    <section className="pt-24 pb-16 lg:pt-28 lg:pb-20">
      <div className="container mx-auto px-4 sm:px-6">

        {/* Back link */}
        <div className="mb-6">
          <Link
            to="/"
            className="liquid-glass-pill inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold text-slate-700 hover:text-[#4f47e6] transition-colors"
          >
            <ArrowLeft size={13} /> Back to Home
          </Link>
        </div>

        {/* Header */}
        <div className="max-w-3xl mb-10 sm:mb-16 scroll-reveal">
          <p className="text-xs sm:text-sm font-medium uppercase tracking-widest text-accent mb-3 sm:mb-4">
            Legal Information
          </p>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-4 sm:mb-6">
            Contact Us
          </h1>
          <p className="text-xs sm:text-sm text-muted-foreground">
            Last updated on <time dateTime="2026-04-08">08-04-2026 08:39:28</time>
          </p>
        </div>

        {/* Card */}
        <div className="w-full max-w-2xl scroll-reveal scroll-reveal-delay-1">
          <div className="rounded-2xl border border-border bg-secondary/30 p-5 sm:p-8 lg:p-10 space-y-6 sm:space-y-8">

            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
              You may contact us using the information below:
            </p>

            {/* Detail rows */}
            {contactDetails.map(({ icon: Icon, label, content }) => (
              <div key={label} className="flex gap-3 sm:gap-4">
                <div className="mt-0.5 flex-shrink-0 w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-accent/10 flex items-center justify-center">
                  <Icon size={16} className="text-accent sm:hidden" />
                  <Icon size={18} className="text-accent hidden sm:block" />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-[10px] sm:text-xs font-medium uppercase tracking-widest text-muted-foreground mb-1">
                    {label}
                  </p>
                  {content}
                </div>
              </div>
            ))}

            {/* Response note */}
            <div className="pt-4 border-t border-border flex gap-3 items-start">
              <Clock size={15} className="text-muted-foreground mt-0.5 flex-shrink-0" />
              <p className="text-xs sm:text-sm text-muted-foreground">
                We aim to respond to all inquiries within{" "}
                <strong className="text-foreground">24–48 business hours</strong>.
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
