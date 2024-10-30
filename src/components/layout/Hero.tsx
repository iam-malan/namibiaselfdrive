"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export function Hero() {
  return (
    <div className="hero-section relative grid grid-cols-12 min-h-[90vh]">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[#4A5D23]/5 bg-opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 60L60 0M30 60L60 30M0 30L30 0' stroke='%234A5D23' stroke-width='1' fill='none' stroke-opacity='0.1'/%3E%3C/svg%3E")`,
          backgroundSize: '60px 60px'
        }} />
      </div>

      {/* Left Content */}
      <div className="col-span-12 lg:col-span-6 flex flex-col justify-center px-4 lg:pl-24 relative z-10">
        <div className="relative max-w-2xl mx-auto lg:mx-0">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-12"
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="w-24 h-[1px] bg-primary" />
              <h2 className="text-lg tracking-wider text-primary font-light uppercase">
                Discover Namibia
              </h2>
            </div>
            <h1 className="mb-6">
              Your Journey,<br />
              <span className="text-primary">Your Adventure</span>
            </h1>
            <p className="text-xl text-primary/80 max-w-xl leading-relaxed font-light">
              Experience the breathtaking landscapes and rich culture of Namibia with our premium 4x4 vehicles and expertly curated tours.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-6 mb-12"
          >
            <button className="btn btn-primary group">
              <span>View Our Fleet</span>
              <svg
                className="w-5 h-5 transform transition-transform group-hover:translate-x-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </button>
            <button className="btn btn-outline group">
              <span>Explore Tours</span>
              <svg
                className="w-5 h-5 transform transition-transform group-hover:translate-x-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex items-center gap-8"
          >
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-primary/80">Premium Vehicles</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-primary/80">Expert Guides</span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Right Content */}
      <div className="col-span-12 lg:col-span-6 relative min-h-[50vh] lg:min-h-[90vh] mt-12 lg:mt-0">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="relative h-full"
        >
          <div className="absolute inset-0 lg:inset-x-12">
            <div className="relative h-full rounded-3xl overflow-hidden shadow-2xl">
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/40 to-transparent z-10" />
              
              {/* Image */}
              <div className="relative w-full h-full">
                <Image
                  src="/images/safarisuv.jpg"
                  alt="Safari SUV in Namibia"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  style={{ objectFit: "cover" }}
                  className="next-image"
                  priority
                />
              </div>

              {/* Bottom Gradient */}
              <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-primary/30 to-transparent z-10" />
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        className="scroll-indicator"
      >
        <div className="glass px-6 py-3 rounded-full flex flex-col items-center">
          <div className="text-primary text-sm uppercase tracking-wider font-light mb-2">
            Scroll to discover
          </div>
          <motion.div
            animate={{
              y: [0, 8, 0]
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut"
            }}
            className="w-5 h-5"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1.5}
              className="text-primary"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
