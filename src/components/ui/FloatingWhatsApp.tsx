import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X } from "lucide-react";

export function FloatingWhatsApp() {
  const [hovered, setHovered] = useState(false);

  const handleClick = () => {
    const message = encodeURIComponent("Hi Brandex Team, I'd like to discuss an engineering project / systems architecture.");
    window.open(`https://wa.me/919480944727?text=${message}`, "_blank");
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3">
      {/* Tooltip Pill */}
      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0, x: 10, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="liquid-glass-pill px-3.5 py-1.5 rounded-full text-xs font-semibold text-slate-800 hidden sm:flex items-center gap-2 shadow-sm pointer-events-none"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>Chat with Engineering Team</span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Button */}
      <motion.button
        onClick={handleClick}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        whileHover={{ scale: 1.06 }}
        whileTap={{ scale: 0.95 }}
        className="liquid-glass relative w-13 h-13 rounded-2xl flex items-center justify-center text-emerald-600 bg-white/90 hover:bg-white hover:text-emerald-500 border border-slate-200/90 shadow-md cursor-pointer transition-all duration-200"
        aria-label="Contact via WhatsApp"
      >
        {/* Pulsing online badge */}
        <span className="absolute -top-1 -right-1 flex h-3.5 w-3.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
          <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-emerald-500 border-2 border-white" />
        </span>

        {/* WhatsApp Icon */}
        <svg
          className="w-6 h-6 fill-current"
          viewBox="0 0 24 24"
        >
          <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.598 2.664-.699c.99.54 1.776.814 2.796.815 3.183 0 5.769-2.587 5.77-5.766.001-3.182-2.585-5.771-5.77-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.312.045-.632.062-1.921-.476-1.503-.628-2.464-2.15-2.54-2.25-.074-.1-6.17-8.213.627-1.139.37-.47.81-.59 1.08-.59.27 0 .405.006.585.045.18.039.423.01.657.57.243.585.828 2.025.9 2.17.072.144.12.315.024.505-.095.19-.144.31-.288.475-.144.165-.302.368-.432.495-.144.143-.294.298-.126.585.168.288.75 1.239 1.611 2.007 1.107.989 2.039 1.296 2.327 1.44.288.144.456.12.624-.072.168-.192.72-.84.912-1.128.192-.288.384-.24.648-.144.264.096 1.68.792 1.968.936.288.144.48.216.552.336.072.12.072.696-.072 1.101z" />
          <path d="M12 2C6.477 2 2 6.477 2 12c0 1.89.525 3.66 1.438 5.168L2.05 22l4.98-1.306A9.957 9.957 0 0012 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm0 18.2c-1.63 0-3.14-.49-4.406-1.332l-.316-.21-2.955.775.789-2.88-.23-.367A8.163 8.163 0 013.8 12c0-4.52 3.68-8.2 8.2-8.2s8.2 3.68 8.2 8.2-3.68 8.2-8.2 8.2z" />
        </svg>
      </motion.button>
    </div>
  );
}
