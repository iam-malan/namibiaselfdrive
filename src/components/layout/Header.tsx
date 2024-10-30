"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (!element) return;

    const headerOffset = parseInt(getComputedStyle(document.documentElement)
      .getPropertyValue('--header-height')
      .replace('px', ''));

    const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
    const offsetPosition = elementPosition - headerOffset;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth"
    });

    // Close mobile menu if open
    if (isMobileMenuOpen) {
      setIsMobileMenuOpen(false);
    }
  };

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    scrollToSection(id);
  };

  const navItems = [
    ['01', 'ABOUT', 'about'],
    ['02', 'VEHICLES', 'vehicles'],
    ['03', 'FEATURES', 'features'],
    ['04', 'TOURS', 'tours'],
    ['05', 'TESTIMONIALS', 'testimonials'],
    ['06', 'CONTACT', 'contact']
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md shadow-sm transition-all duration-300 ${
        isScrolled ? 'py-2' : 'py-3'
      }`}
      style={{ height: 'var(--header-height)' }}
    >
      <nav className="content-wrapper h-full flex items-center justify-between">
        <motion.a 
          href="#hero"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="relative z-10 flex items-center gap-2 md:gap-3 group"
          onClick={(e) => handleClick(e, 'hero')}
        >
          <div className="w-8 h-8 md:w-10 md:h-10 relative">
            <Image
              src="/logo.svg"
              alt="Namibia Self Drive Logo"
              fill
              className="transition-transform duration-300 group-hover:scale-110"
            />
          </div>
          <span className="text-primary text-lg md:text-xl tracking-tight font-light">
            Namibia Self Drive
          </span>
        </motion.a>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-10">
          {navItems.map(([number, label, id], index) => (
            <motion.a 
              key={label}
              href={`#${id}`}
              className="nav-link"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              onClick={(e) => handleClick(e, id)}
            >
              <span className="nav-number">{number}</span>
              <span className="nav-text">{label}</span>
              <span className="nav-arrow">›</span>
            </motion.a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="lg:hidden relative z-10 p-2"
          aria-label="Toggle mobile menu"
        >
          <div className="w-6 h-6 flex flex-col justify-center gap-1.5">
            <motion.span
              animate={isMobileMenuOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
              className="w-full h-0.5 bg-primary block transition-transform"
            />
            <motion.span
              animate={isMobileMenuOpen ? { opacity: 0 } : { opacity: 1 }}
              className="w-full h-0.5 bg-primary block"
            />
            <motion.span
              animate={isMobileMenuOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
              className="w-full h-0.5 bg-primary block transition-transform"
            />
          </div>
        </button>

        {/* Book Now Button */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="hidden lg:block"
        >
          <a 
            href="#contact"
            className="store-button group"
            onClick={(e) => handleClick(e, 'contact')}
          >
            <span className="store-button-text">BOOK NOW</span>
            <span className="store-button-arrow group-hover:translate-x-0.5">
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

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden fixed top-[var(--header-height)] left-0 w-full bg-background/95 backdrop-blur-lg border-t border-primary/10 overflow-hidden z-50"
          >
            <div className="content-wrapper py-4">
              <div className="flex flex-col gap-4">
                {navItems.map(([number, label, id]) => (
                  <a 
                    key={label}
                    href={`#${id}`}
                    className="nav-link text-base"
                    onClick={(e) => handleClick(e, id)}
                  >
                    <span className="nav-number">{number}</span>
                    <span className="nav-text">{label}</span>
                    <span className="nav-arrow">›</span>
                  </a>
                ))}
                <a 
                  href="#contact"
                  className="store-button mt-2 w-full justify-center"
                  onClick={(e) => handleClick(e, 'contact')}
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
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Bottom Border */}
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-primary/10" />
    </header>
  );
};
