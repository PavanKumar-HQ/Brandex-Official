import { Link } from "react-router-dom";
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
              <div className="w-9 h-9 rounded-xl bg-[#4f47e6] flex items-center justify-center p-2 shadow-sm group-hover:scale-105 transition-transform">
                <img
                  src="/logo_nobg.png"
                  alt="Brandex"
                  className="h-full w-full object-contain filter brightness-0 invert"
                />
              </div>
              <span className="font-display text-2xl font-extrabold tracking-tight text-white">
                Brandex<span className="text-[#4f47e6]">.</span>
              </span>
            </Link>

            <p className="text-sm text-slate-400 leading-relaxed max-w-md font-normal">
              End-to-end Technology, Digital Transformation, Business Solutions & Infrastructure Company. Built for Business.
            </p>

            <div className="pt-2 space-y-3.5 text-xs sm:text-sm">
              <div className="flex items-center gap-3 text-slate-300">
                <div className="w-8 h-8 rounded-lg bg-slate-800/80 border border-slate-700/60 flex items-center justify-center text-[#818cf8] shrink-0">
                  <Phone size={14} />
                </div>
                <a href="tel:+919480944727" className="hover:text-white transition-colors font-medium">
                  +91 94809 44727 / +91 99015 14757
                </a>
              </div>

              <div className="flex items-center gap-3 text-slate-300">
                <div className="w-8 h-8 rounded-lg bg-slate-800/80 border border-slate-700/60 flex items-center justify-center text-[#818cf8] shrink-0">
                  <Mail size={14} />
                </div>
                <a href="mailto:brandexhq@gmail.com" className="hover:text-white transition-colors font-medium">
                  brandexhq@gmail.com
                </a>
              </div>

              <div className="flex items-start gap-3 text-slate-300">
                <div className="w-8 h-8 rounded-lg bg-slate-800/80 border border-slate-700/60 flex items-center justify-center text-[#818cf8] shrink-0 mt-0.5">
                  <MapPin size={14} />
                </div>
                <span className="font-medium text-slate-300 leading-snug">
                  #121, 13th Main M.C. Layout, Vijaynagar, Bangalore - 560040
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
              <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-slate-500 block mb-2.5">
                Connect & Follow
              </span>
              <div className="flex flex-wrap items-center gap-2.5">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="w-9 h-9 rounded-xl bg-slate-850 border border-slate-750/80 text-slate-400 hover:text-white hover:bg-gradient-to-tr hover:from-[#fd5949] hover:via-[#d6249f] hover:to-[#285AEB] hover:border-transparent transition-all duration-300 hover:scale-110 active:scale-95 flex items-center justify-center shadow-2xs group"
                >
                  <Instagram size={16} className="transition-transform group-hover:scale-105" />
                </a>

                <a
                  href="https://x.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Twitter / X"
                  className="w-9 h-9 rounded-xl bg-slate-850 border border-slate-750/80 text-slate-400 hover:text-white hover:bg-black hover:border-slate-700 transition-all duration-300 hover:scale-110 active:scale-95 flex items-center justify-center shadow-2xs group"
                >
                  <Twitter size={15} className="transition-transform group-hover:scale-105" />
                </a>

                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="w-9 h-9 rounded-xl bg-slate-850 border border-slate-750/80 text-slate-400 hover:text-white hover:bg-[#0A66C2] hover:border-[#0A66C2] transition-all duration-300 hover:scale-110 active:scale-95 flex items-center justify-center shadow-2xs group"
                >
                  <Linkedin size={15} className="transition-transform group-hover:scale-105" />
                </a>

                <a
                  href="https://github.com/PavanKumar-HQ"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="w-9 h-9 rounded-xl bg-slate-850 border border-slate-750/80 text-slate-400 hover:text-white hover:bg-[#24292e] hover:border-slate-600 transition-all duration-300 hover:scale-110 active:scale-95 flex items-center justify-center shadow-2xs group"
                >
                  <Github size={16} className="transition-transform group-hover:scale-105" />
                </a>

                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="YouTube"
                  className="w-9 h-9 rounded-xl bg-slate-850 border border-slate-750/80 text-slate-400 hover:text-white hover:bg-[#FF0000] hover:border-[#FF0000] transition-all duration-300 hover:scale-110 active:scale-95 flex items-center justify-center shadow-2xs group"
                >
                  <Youtube size={16} className="transition-transform group-hover:scale-105" />
                </a>

                <a
                  href="https://discord.gg/6MVYPzBn9g"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Discord Community"
                  className="w-9 h-9 rounded-xl bg-slate-850 border border-slate-750/80 text-slate-400 hover:text-white hover:bg-[#5865F2] hover:border-[#5865F2] transition-all duration-300 hover:scale-110 active:scale-95 flex items-center justify-center shadow-2xs group"
                >
                  <MessageSquare size={15} className="transition-transform group-hover:scale-105" />
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
                <li><Link to="/services" className="hover:text-white transition-colors font-medium">Software Development</Link></li>
                <li><Link to="/services" className="hover:text-white transition-colors font-medium">Website Engineering</Link></li>
                <li><Link to="/services" className="hover:text-white transition-colors font-medium">AI & Automation</Link></li>
                <li><Link to="/services" className="hover:text-white transition-colors font-medium">Cloud Infrastructure</Link></li>
                <li><Link to="/services" className="hover:text-white transition-colors font-medium">UI / UX Systems</Link></li>
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
