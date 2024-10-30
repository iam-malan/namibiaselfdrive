"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export function ScrollProgressLine() {
  const [isVisible, setIsVisible] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      
      const scrollPercentage = Math.min(scrollTop / (documentHeight - windowHeight), 1);
      setProgress(scrollPercentage);
      setIsVisible(scrollTop > 100);
    };

    // Initial check
    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <>
      {/* Progress Line */}
      <div className="fixed top-0 left-0 right-0 h-[2px] bg-primary/20 z-[1000] pointer-events-none">
        <motion.div
          className="absolute top-0 left-0 h-full bg-primary origin-left"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: progress }}
          transition={{ duration: 0.1 }}
        />
      </div>

      {/* Scroll to Top Button */}
      <motion.button
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.8 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="fixed bottom-8 right-8 z-[1000] p-3 rounded-full bg-primary text-white shadow-lg hover:shadow-xl transition-shadow duration-300 group"
      >
        <svg
          className="w-6 h-6 transform transition-transform duration-300 group-hover:-translate-y-1"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 10l7-7m0 0l7 7m-7-7v18"
          />
        </svg>
        <span className="sr-only">Scroll to top</span>
      </motion.button>

      {/* Progress Indicator */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        className="fixed bottom-8 left-8 z-[1000]"
      >
        <div className="bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg border border-primary/10 text-primary text-sm flex items-center gap-2">
          <svg
            className="w-4 h-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
          <span>
            {Math.round(progress * 100)}% viewed
          </span>
        </div>
      </motion.div>
    </>
  );
}
