"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const footerLinks = {
  services: [
    { name: "Vehicle Rentals", href: "/vehicles" },
    { name: "Guided Tours", href: "/tours" },
    { name: "Travel Insurance", href: "/insurance" },
    { name: "Route Planning", href: "/planning" },
  ],
  explore: [
    { name: "About Us", href: "/about" },
    { name: "Travel Tips", href: "/tips" },
    { name: "FAQs", href: "/faqs" },
    { name: "Contact", href: "/contact" },
  ],
  destinations: [
    { name: "Sossusvlei", href: "/destinations/sossusvlei" },
    { name: "Etosha", href: "/destinations/etosha" },
    { name: "Swakopmund", href: "/destinations/swakopmund" },
    { name: "Damaraland", href: "/destinations/damaraland" },
  ],
  social: [
    { name: "Facebook", href: "https://facebook.com/namibiaselfdrive" },
    { name: "Instagram", href: "https://instagram.com/namibiaselfdrive" },
    { name: "Twitter", href: "https://twitter.com/namselfdrive" },
  ],
};

export function Footer() {
  return (
    <footer className="bg-[#F5F5F0] text-[#4A5D23]">
      {/* Grid Background */}
      <div className="absolute inset-0 grid grid-cols-12 gap-4 pointer-events-none">
        {Array.from({ length: 13 }).map((_, i) => (
          <div key={i} className="w-[1px] h-full bg-[#4A5D23]/5" />
        ))}
      </div>

      <div className="container mx-auto px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Logo and Description */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-block mb-6">
              <div className="flex items-center gap-2">
                <Image
                  src="/logo.svg"
                  alt="Namibia Self Drive Logo"
                  width={48}
                  height={48}
                  className="h-12 w-auto"
                />
                <span className="text-xl font-medium text-[#4A5D23]">
                  Namibia Self Drive
                </span>
              </div>
            </Link>
            <p className="text-[#4A5D23]/80 mb-6 max-w-sm">
              Experience the beauty of Namibia at your own pace. We provide premium vehicle rentals and guided tours for unforgettable adventures.
            </p>
            <div className="flex gap-4">
              {footerLinks.social.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="w-10 h-10 rounded-full bg-[#4A5D23]/10 flex items-center justify-center text-[#4A5D23] hover:bg-[#4A5D23] hover:text-white transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="sr-only">{link.name}</span>
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 22c-5.523 0-10-4.477-10-10S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).slice(0, 3).map(([category, links]) => (
            <div key={category}>
              <h3 className="text-lg font-semibold uppercase mb-4">
                {category}
              </h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-[#4A5D23]/80 hover:text-[#4A5D23] transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 pt-8 border-t border-[#4A5D23]/10">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-[#4A5D23]/60">
              © {new Date().getFullYear()} Namibia Self Drive. All rights reserved.
            </div>
            <div className="flex space-x-6">
              <Link href="/privacy" className="text-sm text-[#4A5D23]/60 hover:text-[#4A5D23]">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-sm text-[#4A5D23]/60 hover:text-[#4A5D23]">
                Terms of Service
              </Link>
              <Link href="/sitemap" className="text-sm text-[#4A5D23]/60 hover:text-[#4A5D23]">
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
