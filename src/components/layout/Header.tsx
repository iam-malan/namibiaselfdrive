"use client";

import { useEffect, useState } from "react";

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="relative">
        {/* Background with hash pattern */}
        <div className="absolute inset-0 bg-[#F5F5F0] opacity-95">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 40L40 0M20 40L40 20M0 20L20 0' stroke='%234A5D23' stroke-width='1' fill='none' stroke-opacity='0.1'/%3E%3C/svg%3E")`,
            backgroundSize: '40px 40px'
          }} />
        </div>

        {/* Border */}
        <div className="absolute inset-0 border-b-2 border-[#4A5D23]/20" />

        {/* Content */}
        <nav className="relative max-w-[1400px] mx-auto px-8 py-6 flex items-center justify-between">
          <div className="flex items-center gap-12">
            <a href="/" className="text-[#4A5D23] text-xl font-medium">
              Namibia Self Drive
            </a>
            <div className="flex items-center gap-8">
              <a href="#about" className="text-[#4A5D23] hover:text-[#3A4D13] transition-colors">
                <span className="text-sm opacity-50 mr-1">01</span> ABOUT
              </a>
              <a href="#vehicles" className="text-[#4A5D23] hover:text-[#3A4D13] transition-colors">
                <span className="text-sm opacity-50 mr-1">02</span> VEHICLES
              </a>
              <a href="#tours" className="text-[#4A5D23] hover:text-[#3A4D13] transition-colors">
                <span className="text-sm opacity-50 mr-1">03</span> TOURS
              </a>
              <a href="#testimonials" className="text-[#4A5D23] hover:text-[#3A4D13] transition-colors">
                <span className="text-sm opacity-50 mr-1">04</span> TESTIMONIALS
              </a>
              <a href="#contact" className="text-[#4A5D23] hover:text-[#3A4D13] transition-colors">
                <span className="text-sm opacity-50 mr-1">05</span> CONTACT
              </a>
            </div>
          </div>
          <div>
            <a 
              href="#book"
              className="bg-[#4A5D23] text-white px-6 py-2 rounded-full hover:bg-[#3A4D13] transition-colors flex items-center gap-2"
            >
              BOOK NOW
              <span className="text-lg">→</span>
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
};
