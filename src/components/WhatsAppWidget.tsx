import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";
import { motion } from "framer-motion";

export default function WhatsAppWidget() {
  const phone = "919480944727";
  const message = encodeURIComponent("Hi Brandex! I'd like to discuss a project.");
  const whatsappUrl = `https://wa.me/${phone}?text=${message}`;

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <motion.a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center w-14 h-14 bg-[#25D366] text-white rounded-full shadow-[0_4px_20px_rgba(37,211,102,0.45)] hover:shadow-[0_6px_28px_rgba(37,211,102,0.7)] hover:scale-105 active:scale-95 transition-all duration-300 relative group"
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        aria-label="Chat on WhatsApp"
      >
        <WhatsAppIcon size={32} className="text-white drop-shadow-sm" />
        
        {/* Subtle glowing pulse ring */}
        <span className="absolute -inset-1 rounded-full bg-[#25D366]/30 animate-ping -z-10 pointer-events-none" style={{ animationDuration: "2.5s" }} />
        
        {/* Tooltip */}
        <span className="absolute right-16 px-3.5 py-1.5 rounded-xl bg-card/95 backdrop-blur-sm border border-border text-xs font-semibold text-foreground opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap shadow-xl">
          Chat on WhatsApp
        </span>
      </motion.a>
    </div>
  );
}

