import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";
import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";

export default function WhatsAppWidget() {
  const { pathname } = useLocation();
  const phone = "919480944727";
  const message = encodeURIComponent("Hi Brandex! I'd like to discuss a project.");
  const whatsappUrl = `https://wa.me/${phone}?text=${message}`;

  const isCommunityRoute = pathname.startsWith("/community");

  return (
    <div
      className={`fixed z-40 transition-all duration-300 right-[calc(1rem+env(safe-area-inset-right,0px))] sm:right-6 ${
        isCommunityRoute
          ? "bottom-[calc(4.75rem+env(safe-area-inset-bottom,0px))] md:bottom-6"
          : "bottom-[calc(1.25rem+env(safe-area-inset-bottom,0px))] md:bottom-6"
      }`}
    >
      <motion.a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 bg-[#25D366] text-white rounded-full shadow-[0_4px_20px_rgba(37,211,102,0.45)] hover:shadow-[0_6px_28px_rgba(37,211,102,0.7)] active:scale-95 transition-all duration-300 relative group touch-friendly overflow-visible"
        whileHover={{ scale: 1.06 }}
        whileTap={{ scale: 0.95 }}
        aria-label="Chat on WhatsApp"
      >
        <WhatsAppIcon size={28} className="text-white drop-shadow-sm sm:hidden" />
        <WhatsAppIcon size={32} className="text-white drop-shadow-sm hidden sm:block" />

        {/* Contained pulse effect - zero viewport overflow */}
        <span
          className="absolute inset-0 rounded-full bg-[#25D366] animate-pulse -z-10 pointer-events-none opacity-40 blur-xs"
          style={{ animationDuration: "2.4s" }}
        />

        {/* Tooltip (desktop only) */}
        <span className="hidden md:inline-block absolute right-16 px-3.5 py-1.5 rounded-xl bg-card/95 backdrop-blur-sm border border-border text-xs font-semibold text-foreground opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap shadow-xl">
          Chat on WhatsApp
        </span>
      </motion.a>
    </div>
  );
}
