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

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const offset = 100; // Offset for fixed header
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });

      if (isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    }
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
    <header className={`nav-fixed ${isScrolled ? 'py-2' : 'py-4'}`}>
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
          <motion.a 
            href="/"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="relative z-10 flex items-center gap-3 group"
            onClick={(e) => handleNavClick(e, 'hero')}
          >
            <div className="w-10 h-10 relative">
              <Image
                src="/logo.svg"
                alt="Namibia Self Drive Logo"
                fill
                className="transition-transform duration-300 group-hover:scale-110"
              />
            </div>
            <span className="text-primary text-xl tracking-tight font-light">
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
                onClick={(e) => handleNavClick(e, id)}
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
              onClick={(e) => handleNavClick(e, 'contact')}
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
              className="lg:hidden absolute top-full left-0 w-full bg-background/95 backdrop-blur-lg border-t border-primary/10 overflow-hidden"
            >
              <div className="content-wrapper py-6">
                <div className="flex flex-col gap-6">
                  {navItems.map(([number, label, id]) => (
                    <a 
                      key={label}
                      href={`#${id}`}
                      className="nav-link text-lg"
                      onClick={(e) => handleNavClick(e, id)}
                    >
                      <span className="nav-number">{number}</span>
                      <span className="nav-text">{label}</span>
                      <span className="nav-arrow">›</span>
                    </a>
                  ))}
                  <a 
                    href="#contact"
                    className="store-button mt-4 w-full justify-center"
                    onClick={(e) => handleNavClick(e, 'contact')}
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
      </div>

      {/* Bottom Border */}
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-primary/10" />
    </header>
  );
};
