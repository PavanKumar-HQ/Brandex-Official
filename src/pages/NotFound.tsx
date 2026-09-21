import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Cpu, Home, ArrowLeft, Layers, BookOpen, FileCode, Mail } from "lucide-react";
import SEOHead from "@/components/SEOHead";

export default function NotFound() {
  return (
    <>
      <SEOHead
        title="404 — Page Not Found | Brandex"
        description="The requested page could not be found. Explore Brandex digital engineering services, case studies, or technical blog."
        noindex={true}
      />
      <div className="min-h-screen relative flex items-center justify-center overflow-hidden bg-background py-16">
        {/* Abstract Background Elements */}
        <div className="absolute inset-0 bg-grid animate-grid-fade opacity-30 pointer-events-none" />
        <div className="absolute w-[500px] h-[500px] bg-accent/10 rounded-full blur-[100px] -top-20 -right-20 pointer-events-none animate-pulse-subtle" />
        <div className="absolute w-[400px] h-[400px] bg-accent/5 rounded-full blur-[80px] -bottom-20 -left-20 pointer-events-none" style={{ animationDelay: '2s' }} />

        <div className="relative z-10 text-center px-6 max-w-2xl mx-auto flex flex-col items-center">
          {/* Glitch 404 */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, type: 'spring' }}
            className="relative inline-block mb-6"
          >
            <div className="absolute inset-0 bg-accent/20 blur-2xl rounded-full" />
            <h1 className="relative font-display text-[7rem] md:text-[10rem] font-bold leading-none tracking-tighter text-foreground">
              404
            </h1>
            <Cpu className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 md:w-20 md:h-20 text-background opacity-50 pointer-events-none" />
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-2xl md:text-3xl font-display font-semibold text-foreground mb-3"
          >
            Page Not Found
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-muted-foreground text-sm sm:text-base mb-8 max-w-md mx-auto"
          >
            The link you followed may be broken or the page may have been moved. Try one of the core sections below:
          </motion.p>

          {/* Quick Recovery Navigation Links */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.35 }}
            className="grid grid-cols-2 sm:grid-cols-4 gap-3 w-full max-w-lg mb-8"
          >
            <Link
              to="/services"
              className="p-3 rounded-xl bg-card border border-border text-xs font-semibold text-foreground hover:text-[#4f47e6] hover:border-[#4f47e6] transition-all flex flex-col items-center gap-1.5"
            >
              <Layers size={16} />
              <span>Services</span>
            </Link>
            <Link
              to="/case-studies"
              className="p-3 rounded-xl bg-card border border-border text-xs font-semibold text-foreground hover:text-[#4f47e6] hover:border-[#4f47e6] transition-all flex flex-col items-center gap-1.5"
            >
              <FileCode size={16} />
              <span>Case Studies</span>
            </Link>
            <Link
              to="/blog"
              className="p-3 rounded-xl bg-card border border-border text-xs font-semibold text-foreground hover:text-[#4f47e6] hover:border-[#4f47e6] transition-all flex flex-col items-center gap-1.5"
            >
              <BookOpen size={16} />
              <span>Blog</span>
            </Link>
            <Link
              to="/contact"
              className="p-3 rounded-xl bg-card border border-border text-xs font-semibold text-foreground hover:text-[#4f47e6] hover:border-[#4f47e6] transition-all flex flex-col items-center gap-1.5"
            >
              <Mail size={16} />
              <span>Contact</span>
            </Link>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-3 items-center justify-center w-full sm:w-auto"
          >
            <Link 
              to="/" 
              className="flex items-center gap-2 bg-accent text-accent-foreground px-5 py-2.5 rounded-xl font-medium shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all text-xs w-full sm:w-auto justify-center"
            >
              <Home size={15} /> Return Home
            </Link>
            <button 
              onClick={() => window.history.back()}
              className="flex items-center gap-2 bg-card border border-border px-5 py-2.5 rounded-xl font-medium text-foreground hover:bg-secondary transition-all text-xs w-full sm:w-auto justify-center cursor-pointer"
            >
              <ArrowLeft size={15} /> Go Back
            </button>
          </motion.div>
        </div>
      </div>
    </>
  );
}
