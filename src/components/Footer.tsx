import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, Clock, ExternalLink } from "lucide-react";

const footerLinks = [
  {
    title: "Ecosystem",
    links: [
      { label: "Community Hub", href: "/community" },
      { label: "Community Events", href: "/events" },
      { label: "Builder Stories", href: "/stories" },
      { label: "Education & Workshops", href: "/education/workshops" },
      { label: "Campus Ambassadors", href: "/education/campus-ambassador" },
    ],
  },
  {
    title: "Services",
    links: [
      { label: "Custom Software", href: "/services/software-development" },
      { label: "Website Development", href: "/services/website-development" },
      { label: "AI & Automation", href: "/services/ai-automation" },
      { label: "Cybersecurity", href: "/services/cybersecurity" },
      { label: "All Services", href: "/services" },
    ],
  },
  {
    title: "Software Products",
    links: [
      { label: "Travel CRM Platform", href: "/products/travel-crm" },
      { label: "Invoice Builder", href: "/products/invoice-builder" },
      { label: "The Man Wanders Globe", href: "/case-studies/the-man-wanders-globe" },
      { label: "Srushti Publications", href: "/case-studies/srushti-publications" },
      { label: "All Projects & Case Studies", href: "/projects" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About Us", href: "/about" },
      { label: "Pavan Kumar S (CEO)", href: "/team/pavan-kumar" },
      { label: "Sathvik Nagesh (CTO)", href: "/team/sathvik-nagesh" },
      { label: "Careers & Openings", href: "/careers" },
      { label: "Blog & Articles", href: "/blog" },
      { label: "Contact & Bookings", href: "/contact" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-[#111d36] text-slate-300 relative overflow-hidden border-t border-slate-800">
      <div className="absolute inset-0 bg-gradient-to-t from-transparent to-white/[0.02]" />

      <div className="container mx-auto px-6 pt-12 pb-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 mb-8 items-start">

          {/* Brand & Contact Info */}
          <div className="lg:col-span-4 space-y-4">
            <Link to="/" className="inline-flex items-center gap-2.5 group" aria-label="Brandex Home">
              <img src="/brandex-logo.webp" alt="Brandex" width="160" height="40" className="h-9 w-auto brightness-0 invert transition-transform duration-300 group-hover:scale-105" />
            </Link>
            <p className="text-sm text-primary-foreground/70 leading-relaxed max-w-sm">
              An ecosystem for builders, businesses, and institutions. High-performance software engineering, enterprise automation, and hands-on technology education.
            </p>

            <div className="space-y-3 pt-3 border-t border-primary-foreground/10 max-w-sm">
              <a href="tel:+919480944727" className="flex items-center gap-3 text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors group">
                <div className="w-8 h-8 rounded-lg bg-primary-foreground/5 flex items-center justify-center group-hover:bg-primary-foreground/10 transition-colors shrink-0">
                  <Phone size={14} />
                </div>
                <span>+91 94809 44727</span>
              </a>
              <a href="mailto:team@brandex.co.in" className="flex items-center gap-3 text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors group">
                <div className="w-8 h-8 rounded-lg bg-primary-foreground/5 flex items-center justify-center group-hover:bg-primary-foreground/10 transition-colors shrink-0">
                  <Mail size={14} />
                </div>
                <span>team@brandex.co.in</span>
              </a>
              <div className="flex items-start gap-3 text-sm text-primary-foreground/80">
                <div className="w-8 h-8 rounded-lg bg-primary-foreground/5 flex items-center justify-center shrink-0 mt-0.5">
                  <MapPin size={14} />
                </div>
                <span>#121, 13th Main M.C. Layout, Vijaynagar, Bangalore - 560040</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-primary-foreground/70">
                <div className="w-8 h-8 rounded-lg bg-primary-foreground/5 flex items-center justify-center shrink-0">
                  <Clock size={14} />
                </div>
                <span>Mon - Sat, 9:30 AM - 6:30 PM</span>
              </div>
            </div>
          </div>

          {/* Links Columns */}
          <div className="lg:col-span-8 grid grid-cols-2 md:grid-cols-4 gap-8">
            {footerLinks.map((group) => (
              <div key={group.title}>
                <p className="font-display font-semibold text-xs mb-4 uppercase tracking-[0.15em] text-primary-foreground/60">
                  {group.title}
                </p>
                <ul className="space-y-2.5">
                  {group.links.map((link) => (
                    <li key={link.label}>
                      <Link to={link.href} className="text-sm text-primary-foreground/75 hover:text-white hover:translate-x-0.5 inline-block transition-all duration-200">
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

        </div>

        {/* Pre-divider Bar: CONNECT & FOLLOW Heading on Top of Logos */}
        <div className="pt-4 pb-6 flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4">
          <div className="text-xs text-slate-400 font-medium self-start sm:self-center">
            Technology Architecture, Enterprise Systems &amp; Digital Innovation
          </div>
          
          <div className="flex flex-col items-start sm:items-end gap-2">
            <span className="text-[11px] font-mono font-bold tracking-[0.18em] text-slate-300 uppercase">
              CONNECT &amp; FOLLOW
            </span>
            <div className="flex items-center gap-2.5">
              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/company/brandex-lab"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-10 h-10 rounded-xl bg-[#1c2638] hover:bg-[#0A66C2] text-white flex items-center justify-center transition-all duration-200 hover:scale-105 active:scale-95 shadow-xs"
              >
                <svg className="w-4 h-4 fill-white" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>

              {/* Twitter / X */}
              <a
                href="https://x.com/brandexlabs"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter / X"
                className="w-10 h-10 rounded-xl bg-[#1c2638] hover:bg-black text-white flex items-center justify-center transition-all duration-200 hover:scale-105 active:scale-95 shadow-xs"
              >
                <svg className="w-3.5 h-3.5 fill-white" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>

              {/* Instagram */}
              <a
                href="https://www.instagram.com/brandexlabs/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-10 h-10 rounded-xl bg-[#1c2638] hover:bg-gradient-to-tr hover:from-[#fd5949] hover:via-[#d6249f] hover:to-[#285AEB] text-white flex items-center justify-center transition-all duration-200 hover:scale-105 active:scale-95 shadow-xs"
              >
                <svg className="w-4 h-4 fill-white" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
              </a>

              {/* Discord (Uniform Dark Box, Colors to Discord Purple on Hover) */}
              <a
                href="https://discord.gg/brandex"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Discord Community"
                className="w-10 h-10 rounded-xl bg-[#1c2638] hover:bg-[#5865F2] text-white flex items-center justify-center transition-all duration-200 hover:scale-105 active:scale-95 shadow-xs group"
              >
                <svg className="w-5 h-5 fill-white transition-transform group-hover:scale-105" viewBox="0 0 24 24">
                  <path d="M20.317 4.37a19.791 19.791 0 00-4.885-1.515.074.074 0 00-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 00-5.487 0 12.64 12.64 0 00-.617-1.25.077.077 0 00-.079-.037A19.736 19.736 0 003.677 4.37a.07.07 0 00-.032.027C.533 9.046-.32 13.58 1.334 17.361a.1.1 0 00.073.052 23.46 23.46 0 0 0 5.856 2.87.087.087 0 0 0 .093-.032c.241-.355.45-.733.623-1.127a.083.083 0 00-.044-.112 17.58 17.58 0 0 1-2.528-1.218.082.082 0 0 1-.008-.135c.168-.124.336-.255.5-.386a.08.08 0 0 1 .085-.011c3.856 1.764 8.016 1.764 11.838 0a.08.08 0 0 1 .085.01c.164.13.332.262.5.387a.082.082 0 0 1-.008.135 17.618 17.618 0 0 1-2.528 1.218.083.083 0 0 0-.044.113c.174.394.383.772.624 1.127a.087.087 0 0 0 .093.032 23.447 23.447 0 0 0 5.855-2.87.1.1 0 0 0 .074-.052c1.479-3.486.637-7.06-1.353-10.366a.07.07 0 0 0-.032-.027zM8.02 15.332c-1.185 0-2.158-1.087-2.158-2.422 0-1.334.955-2.422 2.158-2.422 1.212 0 2.176 1.096 2.158 2.422 0 1.335-.955 2.422-2.158 2.422zm7.96 0c-1.185 0-2.158-1.087-2.158-2.422 0-1.334.955-2.422 2.158-2.422 1.212 0 2.176 1.096 2.158 2.422 0 1.335-.955 2.422-2.158 2.422z" />
                </svg>
              </a>

              {/* WhatsApp */}
              <a
                href="https://wa.me/919480944727"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp Community"
                className="w-10 h-10 rounded-xl bg-[#1c2638] hover:bg-[#25D366] text-white flex items-center justify-center transition-all duration-200 hover:scale-105 active:scale-95 shadow-xs"
              >
                <svg className="w-4 h-4 fill-white" viewBox="0 0 24 24">
                  <path d="M12.004 2c-5.518 0-9.986 4.477-9.986 9.996 0 1.764.459 3.49 1.33 5.01L2 22l5.121-1.343a9.92 9.92 0 004.883 1.282c5.518 0 9.986-4.47 9.986-9.996C21.99 6.477 17.522 2 12.004 2zm0 1.636c4.615 0 8.354 3.74 8.354 8.36 0 4.62-3.739 8.36-8.354 8.36a8.3 8.3 0 01-4.25-1.164l-.305-.18-3.155.827.842-3.076-.198-.314a8.27 8.27 0 01-1.284-4.453c0-4.62 3.739-8.36 8.35-8.36zm-3.6 3.6c-.198-.004-.396.072-.536.216-.18.18-.684.67-.684 1.638s.707 1.9.806 2.034c.1.135 1.39 2.1 3.375 2.973.47.202.837.324 1.125.418.473.15 1.25.129 1.593.08.38-.058 1.17-.482 1.336-.945.167-.464.167-.86.117-.945-.049-.085-.18-.135-.38-.234-.197-.1-1.17-.577-1.35-.644-.18-.067-.315-.1-.446.1-.13.198-.513.644-.626.774-.113.13-.225.148-.423.05-.198-.1-.837-.307-1.593-.984-.589-.525-.987-1.176-1.103-1.373-.117-.198-.013-.306.086-.405.09-.09.198-.234.297-.347.1-.113.13-.198.198-.33.067-.135.032-.25-.018-.35-.05-.1-.446-1.077-.613-1.474-.16-.39-.324-.336-.446-.341z" />
                </svg>
              </a>

              {/* GitHub */}
              <a
                href="https://github.com/brandex"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="w-10 h-10 rounded-xl bg-[#1c2638] hover:bg-[#24292e] text-white flex items-center justify-center transition-all duration-200 hover:scale-105 active:scale-95 shadow-xs"
              >
                <svg className="w-4 h-4 fill-white" viewBox="0 0 24 24">
                  <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.579.688.481C19.137 20.164 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Legal (Clearance from floating WhatsApp widget) */}
        <div className="pt-8 border-t border-primary-foreground/[0.08] flex flex-col md:flex-row justify-between items-start md:items-center gap-6 pr-20 md:pr-24 lg:pr-0">
          <div>
            <p className="text-xs text-primary-foreground/50 text-left">
              © {new Date().getFullYear()} Brandex. All Rights Reserved. Built for Business.
              <span className="block sm:inline sm:ml-2 mt-1 sm:mt-0">GSTIN: 29OGNPS8060K1Z5</span>
            </p>

            <div className="flex items-center gap-6 mt-2.5">
              <Link to="/privacy-policy" className="text-xs text-primary-foreground/50 hover:text-primary-foreground transition-colors">Privacy Policy</Link>
              <Link to="/terms-and-conditions" className="text-xs text-primary-foreground/50 hover:text-primary-foreground transition-colors">Terms &amp; Conditions</Link>
              <Link to="/refund-policy" className="text-xs text-primary-foreground/50 hover:text-primary-foreground transition-colors">Refund Policy</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
