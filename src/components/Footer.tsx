import { Link } from "react-router-dom";
import { SITE_CONFIG } from "@/config/site";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  ArrowUpRight,
  ArrowUp,
  Instagram,
  Twitter,
  Linkedin,
  Github,
  Youtube,
  MessageSquare,
} from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#070e1e] text-slate-400 pt-16 pb-12 relative overflow-hidden border-t border-slate-800">
      <div className="w-full max-w-[1600px] mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        
        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 pb-14 border-b border-slate-800/80">
          
          {/* Left Column: Brand & Direct Contact Details (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Brand Logo & Name */}
            <Link to="/" className="inline-flex items-center gap-3 group">
              <img
                src="/brandex-logo.webp"
                alt="Brandex"
                width="144"
                height="36"
                className="h-8 sm:h-9 w-auto object-contain transition-transform group-hover:scale-105 filter brightness-0 invert"
              />
            </Link>

            <p className="text-sm text-slate-400 leading-relaxed max-w-md font-normal">
              End-to-end Technology, Digital Transformation, Business Solutions & Infrastructure Company. Built for Business.
            </p>

            <div className="pt-2 space-y-3.5 text-xs sm:text-sm">
              <div className="flex items-center gap-3 text-slate-300">
                <div className="w-8 h-8 rounded-lg bg-slate-800/80 border border-slate-700/60 flex items-center justify-center text-[#818cf8] shrink-0">
                  <Phone size={14} />
                </div>
                <a href={`tel:${SITE_CONFIG.contact.phone.replace(/[^0-9+]/g, "")}`} className="hover:text-white transition-colors font-medium">
                  {SITE_CONFIG.contact.phone}
                </a>
              </div>

              <div className="flex items-center gap-3 text-slate-300">
                <div className="w-8 h-8 rounded-lg bg-slate-800/80 border border-slate-700/60 flex items-center justify-center text-[#818cf8] shrink-0">
                  <Mail size={14} />
                </div>
                <a href={`mailto:${SITE_CONFIG.contact.email}`} className="hover:text-white transition-colors font-medium">
                  {SITE_CONFIG.contact.email}
                </a>
              </div>

              <div className="flex items-start gap-3 text-slate-300">
                <div className="w-8 h-8 rounded-lg bg-slate-800/80 border border-slate-700/60 flex items-center justify-center text-[#818cf8] shrink-0 mt-0.5">
                  <MapPin size={14} />
                </div>
                <span className="font-medium text-slate-300 leading-snug">
                  {SITE_CONFIG.address.street}, {SITE_CONFIG.address.city} - {SITE_CONFIG.address.postalCode}
                </span>
              </div>

              <div className="flex items-center gap-3 text-slate-300">
                <div className="w-8 h-8 rounded-lg bg-slate-800/80 border border-slate-700/60 flex items-center justify-center text-[#818cf8] shrink-0">
                  <Clock size={14} />
                </div>
                <span className="font-medium text-slate-400">
                  Mon - Fri, 9:00 AM - 6:00 PM IST
                </span>
              </div>
            </div>

            {/* Social Channels with Authentic Brand Icons & Glow Effects */}
            <div className="pt-2">
              <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-slate-300 block mb-2.5">
                Connect & Follow
              </span>
              <div className="flex flex-wrap items-center gap-2.5">
                <a
                  href={SITE_CONFIG.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="w-10 h-10 rounded-xl bg-slate-800/90 border border-slate-700/80 text-white hover:bg-[#0A66C2] hover:border-[#0A66C2] transition-all duration-300 hover:scale-110 active:scale-95 flex items-center justify-center shadow-xs group"
                >
                  <svg className="w-4 h-4 transition-transform group-hover:scale-105" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </a>

                <a
                  href={SITE_CONFIG.social.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Twitter / X"
                  className="w-10 h-10 rounded-xl bg-slate-800/90 border border-slate-700/80 text-white hover:bg-black hover:border-slate-600 transition-all duration-300 hover:scale-110 active:scale-95 flex items-center justify-center shadow-xs group"
                >
                  <svg className="w-3.5 h-3.5 transition-transform group-hover:scale-105" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </a>

                <a
                  href={SITE_CONFIG.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="w-10 h-10 rounded-xl bg-slate-800/90 border border-slate-700/80 text-white hover:bg-gradient-to-tr hover:from-[#fd5949] hover:via-[#d6249f] hover:to-[#285AEB] hover:border-transparent transition-all duration-300 hover:scale-110 active:scale-95 flex items-center justify-center shadow-xs group"
                >
                  <svg className="w-4 h-4 transition-transform group-hover:scale-105" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                  </svg>
                </a>

                <a
                  href={SITE_CONFIG.social.discord}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Discord Community"
                  className="w-10 h-10 rounded-xl bg-slate-800/90 border border-slate-700/80 text-white hover:bg-[#5865F2] hover:border-[#5865F2] transition-all duration-300 hover:scale-110 active:scale-95 flex items-center justify-center shadow-xs group"
                >
                  <svg className="w-4 h-4 transition-transform group-hover:scale-105" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.317 4.37a19.791 19.791 0 00-4.885-1.515.074.074 0 00-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 00-5.487 0 12.64 12.64 0 00-.617-1.25.077.077 0 00-.079-.037A19.736 19.736 0 003.677 4.37a.07.07 0 00-.032.027C.533 9.046-.32 13.58 1.334 17.361a.1.1 0 00.073.052 23.46 23.46 0 0 0 5.856 2.87.087.087 0 0 0 .093-.032c.241-.355.45-.733.623-1.127a.083.083 0 00-.044-.112 17.58 17.58 0 0 1-2.528-1.218.082.082 0 0 1-.008-.135c.168-.124.336-.255.5-.386a.08.08 0 0 1 .085-.011c3.856 1.764 8.016 1.764 11.838 0a.08.08 0 0 1 .085.01c.164.13.332.262.5.387a.082.082 0 0 1-.008.135 17.618 17.618 0 0 1-2.528 1.218.083.083 0 0 0-.044.113c.174.394.383.772.624 1.127a.087.087 0 0 0 .093.032 23.447 23.447 0 0 0 5.855-2.87.1.1 0 0 0 .074-.052c1.479-3.486.637-7.06-1.353-10.366a.07.07 0 0 0-.032-.027zM8.02 15.332c-1.185 0-2.158-1.087-2.158-2.422 0-1.334.955-2.422 2.158-2.422 1.212 0 2.176 1.096 2.158 2.422 0 1.335-.955 2.422-2.158 2.422zm7.96 0c-1.185 0-2.158-1.087-2.158-2.422 0-1.334.955-2.422 2.158-2.422 1.212 0 2.176 1.096 2.158 2.422 0 1.335-.955 2.422-2.158 2.422z" />
                  </svg>
                </a>

                <a
                  href={SITE_CONFIG.social.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="WhatsApp Community"
                  className="w-10 h-10 rounded-xl bg-slate-800/90 border border-slate-700/80 text-white hover:bg-[#25D366] hover:border-[#25D366] transition-all duration-300 hover:scale-110 active:scale-95 flex items-center justify-center shadow-xs group"
                >
                  <svg className="w-4 h-4 transition-transform group-hover:scale-105" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.004 2c-5.518 0-9.986 4.477-9.986 9.996 0 1.764.459 3.49 1.33 5.01L2 22l5.121-1.343a9.92 9.92 0 004.883 1.282c5.518 0 9.986-4.47 9.986-9.996C21.99 6.477 17.522 2 12.004 2zm0 1.636c4.615 0 8.354 3.74 8.354 8.36 0 4.62-3.739 8.36-8.354 8.36a8.3 8.3 0 01-4.25-1.164l-.305-.18-3.155.827.842-3.076-.198-.314a8.27 8.27 0 01-1.284-4.453c0-4.62 3.739-8.36 8.35-8.36zm-3.6 3.6c-.198-.004-.396.072-.536.216-.18.18-.684.67-.684 1.638s.707 1.9.806 2.034c.1.135 1.39 2.1 3.375 2.973.47.202.837.324 1.125.418.473.15 1.25.129 1.593.08.38-.058 1.17-.482 1.336-.945.167-.464.167-.86.117-.945-.049-.085-.18-.135-.38-.234-.197-.1-1.17-.577-1.35-.644-.18-.067-.315-.1-.446.1-.13.198-.513.644-.626.774-.113.13-.225.148-.423.05-.198-.1-.837-.307-1.593-.984-.589-.525-.987-1.176-1.103-1.373-.117-.198-.013-.306.086-.405.09-.09.198-.234.297-.347.1-.113.13-.198.198-.33.067-.135.032-.25-.018-.35-.05-.1-.446-1.077-.613-1.474-.16-.39-.324-.336-.446-.341z" />
                  </svg>
                </a>

                <a
                  href={SITE_CONFIG.social.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="w-10 h-10 rounded-xl bg-slate-800/90 border border-slate-700/80 text-white hover:bg-[#24292e] hover:border-slate-600 transition-all duration-300 hover:scale-110 active:scale-95 flex items-center justify-center shadow-xs group"
                >
                  <svg className="w-4 h-4 transition-transform group-hover:scale-105" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.579.688.481C19.137 20.164 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
                  </svg>
                </a>
              </div>
            </div>

          </div>

          {/* Right Columns (7 cols) */}
          <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-5 gap-8">
            
            {/* COMPANY */}
            <div>
              <h4 className="font-mono text-xs font-bold uppercase tracking-[0.16em] text-white mb-4">
                Company
              </h4>
              <ul className="space-y-2.5 text-xs sm:text-sm">
                <li><Link to="/about" className="hover:text-white transition-colors font-medium">About</Link></li>
                <li><Link to="/pavan-kumar" className="hover:text-white transition-colors font-medium">Pavan Kumar (Architect)</Link></li>
                <li><Link to="/sathvik" className="hover:text-white transition-colors font-medium">Sathvik (Product Design)</Link></li>
                <li><Link to="/case-studies" className="hover:text-white transition-colors font-medium">Case Studies</Link></li>
                <li><Link to="/blog" className="hover:text-white transition-colors font-medium">Blog</Link></li>
                <li><Link to="/contact" className="hover:text-white transition-colors font-medium">Contact</Link></li>
              </ul>
            </div>

            {/* SERVICES */}
            <div>
              <h4 className="font-mono text-xs font-bold uppercase tracking-[0.16em] text-white mb-4">
                Services
              </h4>
              <ul className="space-y-2.5 text-xs sm:text-sm">
                <li><Link to="/services/web-engineering" className="hover:text-white transition-colors font-medium">Web Engineering</Link></li>
                <li><Link to="/services/custom-crm-erp" className="hover:text-white transition-colors font-medium">Custom CRM & ERP</Link></li>
                <li><Link to="/services/ai-workflow-automation" className="hover:text-white transition-colors font-medium">AI & Automation</Link></li>
                <li><Link to="/services/mobile-app-development" className="hover:text-white transition-colors font-medium">Mobile Applications</Link></li>
                <li><Link to="/services/cloud-devops-infrastructure" className="hover:text-white transition-colors font-medium">Cloud & DevOps</Link></li>
                <li><Link to="/services/api-database-systems" className="hover:text-white transition-colors font-medium">API & Databases</Link></li>
                <li><Link to="/services" className="hover:text-[#4f47e6] text-[#818cf8] transition-colors font-semibold">All Services →</Link></li>
              </ul>
            </div>

            {/* INDUSTRIES */}
            <div>
              <h4 className="font-mono text-xs font-bold uppercase tracking-[0.16em] text-white mb-4">
                Industries
              </h4>
              <ul className="space-y-2.5 text-xs sm:text-sm">
                <li><Link to="/case-studies" className="hover:text-white transition-colors font-medium">Startups & MSMEs</Link></li>
                <li><Link to="/case-studies" className="hover:text-white transition-colors font-medium">Retail & Restaurants</Link></li>
                <li><Link to="/case-studies" className="hover:text-white transition-colors font-medium">Healthcare</Link></li>
                <li><Link to="/case-studies" className="hover:text-white transition-colors font-medium">Education & EdTech</Link></li>
                <li><Link to="/case-studies" className="hover:text-white transition-colors font-medium">Algorithmic FinTech</Link></li>
              </ul>
            </div>

            {/* RESOURCES & COMMUNITY */}
            <div>
              <h4 className="font-mono text-xs font-bold uppercase tracking-[0.16em] text-white mb-4">
                Community
              </h4>
              <ul className="space-y-2.5 text-xs sm:text-sm">
                <li><Link to="/community" className="hover:text-white transition-colors font-medium">Community Hub</Link></li>
                <li><Link to="/community/projects" className="hover:text-white transition-colors font-medium">Open Source Projects</Link></li>
                <li><Link to="/community/events" className="hover:text-white transition-colors font-medium">Events & Sprints</Link></li>
                <li><Link to="/community/training" className="hover:text-white transition-colors font-medium">Training Programs</Link></li>
                <li><Link to="/community/stories" className="hover:text-white transition-colors font-medium">Builder Stories</Link></li>
                <li><Link to="/community/careers" className="hover:text-white transition-colors font-medium">Careers & Roles</Link></li>
                <li><Link to="/community/status" className="hover:text-white transition-colors font-medium">Application Status</Link></li>
              </ul>
            </div>

            {/* EDUCATION & PORTALS */}
            <div>
              <h4 className="font-mono text-xs font-bold uppercase tracking-[0.16em] text-white mb-4">
                Education & Media
              </h4>
              <ul className="space-y-2.5 text-xs sm:text-sm">
                <li><Link to="/education" className="hover:text-white transition-colors font-medium">Digital Learning</Link></li>
                <li><Link to="/education/explore" className="hover:text-white transition-colors font-medium">Curriculum Explorer</Link></li>
                <li><Link to="/education/classroom" className="hover:text-white transition-colors font-medium">Classroom Player</Link></li>
                <li><Link to="/education/login" className="hover:text-white transition-colors font-medium">Educator Portal</Link></li>
                <li><Link to="/education/admin" className="hover:text-white transition-colors font-medium">Admin Dashboard</Link></li>
                <li><Link to="/media" className="hover:text-white transition-colors font-medium">Media Vault & Gallery</Link></li>
                <li><Link to="/search" className="hover:text-white transition-colors font-medium">Global Search</Link></li>
              </ul>
            </div>

          </div>

        </div>

        {/* Bottom Bar matching Reference */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-normal text-slate-400">
          <div>
            <p>© 2026 Brandex. All Rights Reserved. Built for Business.</p>
            <p className="font-mono text-[11px] text-slate-400 mt-1">
              GSTIN: 29OGNPS8060K1Z5
            </p>
          </div>

          <div className="flex items-center gap-6 text-slate-400">
            <Link to="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <span>&bull;</span>
            <Link to="/terms-and-conditions" className="hover:text-white transition-colors">Terms & Conditions</Link>
            <span>&bull;</span>
            <Link to="/contact-us" className="hover:text-white transition-colors">Merchant Details</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
