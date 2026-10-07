import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Cpu, Home, ArrowLeft } from "lucide-react";
import SEOTags from "@/components/SEOTags";

export default function NotFound() {
  return (
    <>
      <SEOTags 
        title="Page Not Found | Brandex"
        description="The page you are looking for does not exist."
        image="https://www.brandex.co.in/og/404.png"
        noindex={true}
      />
      <div className="min-h-screen relative flex items-center justify-center overflow-hidden bg-background">
      {/* Abstract Background Elements */}
      <div className="absolute inset-0 bg-grid animate-grid-fade opacity-30 pointer-events-none" />
      <div className="absolute w-[500px] h-[500px] bg-accent/10 rounded-full blur-[100px] -top-20 -right-20 pointer-events-none animate-pulse-subtle" />
      <div className="absolute w-[400px] h-[400px] bg-accent/5 rounded-full blur-[80px] -bottom-20 -left-20 pointer-events-none" style={{ animationDelay: '2s' }} />

      <div className="relative z-10 text-center px-6 max-w-2xl mx-auto flex flex-col items-center">
        {/* Playful Glitch 404 */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, type: 'spring' }}
          className="relative flex flex-col items-center justify-center mb-8"
        >
          <div className="absolute inset-0 bg-accent/20 blur-2xl rounded-full" />
          <Cpu className="w-16 h-16 md:w-20 md:h-20 text-accent mb-4 relative z-10" />
          <h1 className="relative font-display text-[6rem] md:text-[10rem] font-bold leading-none tracking-tighter text-foreground">
            404
          </h1>
        </motion.div>

        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-2xl md:text-3xl font-display font-semibold text-foreground mb-4"
        >
          Oops! You've drifted into the digital void.
        </motion.h2>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-muted-foreground text-lg mb-10 max-w-md mx-auto"
        >
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 items-center justify-center"
        >
          <Link 
            to="/" 
            className="flex items-center gap-2 bg-accent text-accent-foreground px-6 py-3 rounded-lg font-medium shadow-lg hover:shadow-accent/25 hover:-translate-y-0.5 transition-all w-full sm:w-auto justify-center"
          >
            <Home size={18} /> Return Home
          </Link>
          <button 
            onClick={() => window.history.back()}
            className="flex items-center gap-2 bg-card border border-border px-6 py-3 rounded-lg font-medium text-foreground hover:bg-secondary transition-all w-full sm:w-auto justify-center"
          >
            <ArrowLeft size={18} /> Go Back
          </button>
        </motion.div>
      </div>
    </div>
    </>
  );
}
