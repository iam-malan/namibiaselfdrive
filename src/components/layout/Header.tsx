"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="nav-fixed">
      <div className="relative">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 40L40 0M20 40L40 20M0 20L20 0' stroke='%234A5D23' stroke-width='1' fill='none' stroke-opacity='0.1'/%3E%3C/svg%3E")`,
            backgroundSize: '40px 40px'
          }} />
        </div>

        {/* Content */}
        <nav className="content-wrapper flex items-center justify-between h-16">
          <div className="flex items-center gap-16">
            <a 
              href="/" 
              className="text-[#4A5D23] text-xl tracking-tight hover:text-[#3A4D13] transition-colors"
            >
              Namibia Self Drive
            </a>
            <div className="flex items-center gap-10">
              {[
                ['01', 'COMPANY', '#company'],
                ['02', 'VEHICLES', '#vehicles'],
                ['03', 'RESOURCES', '#resources'],
                ['04', 'COMMUNITY', '#community'],
                ['05', 'CONTACT', '#contact']
              ].map(([number, label, href]) => (
                <a 
                  key={label}
                  href={href} 
                  className="nav-link"
                >
                  <span className="nav-number">{number}</span>
                  <span className="nav-text">{label}</span>
                  <span className="nav-arrow">›</span>
                </a>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <a 
              href="#book"
              className="store-button"
            >
              <span className="store-button-text">BOOK NOW</span>
              <span className="store-button-arrow">
                <svg 
                  width="14" 
                  height="14" 
                  viewBox="0 0 14 14" 
                  fill="none" 
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path 
                    d="M1 7H13M13 7L7 1M13 7L7 13" 
                    stroke="currentColor" 
                    strokeWidth="1.5" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </a>
          </motion.div>
        </nav>
      </div>

      {/* Bottom Border */}
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-[#4A5D23]/10" />
    </header>
  );
};
