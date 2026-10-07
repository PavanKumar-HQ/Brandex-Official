import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function PageLoader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check if the visitor is a bot/crawler
    const isBot = /bot|crawler|spider|crawling|headlesschrome|chrome-lighthouse/i.test(
      navigator.userAgent
    );

    if (isBot) {
      // Instantly remove loader for bots
      setLoading(false);
    } else {
      // 400ms is enough for a pleasant animation but short enough that
      // SEO crawlers (which timeout at ~1s) can still find internal links.
      const timer = setTimeout(() => setLoading(false), 400);
      return () => clearTimeout(timer);
    }
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-background"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.5, ease: "easeInOut" } }}
        >
          <div className="flex flex-col items-center gap-6">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <img src="/brandex-logo.webp" alt="Brandex" width="160" height="40" className="h-10 sm:h-12 w-auto object-contain dark:brightness-0 dark:invert" />
            </motion.div>
            <div className="w-48 h-[2px] bg-border rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-accent rounded-full"
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 1.4, ease: "easeInOut", delay: 0.3 }}
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
