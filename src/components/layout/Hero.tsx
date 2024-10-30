"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export function Hero() {
  return (
    <div className="hero-section relative grid grid-cols-12">
      {/* Left Content */}
      <div className="col-span-6 flex flex-col justify-center pl-24 relative z-10">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-12"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-24 h-[1px] bg-[#4A5D23]" />
              <h2 className="text-lg tracking-wider text-[#4A5D23] font-light uppercase">
                Explore Namibia
              </h2>
            </div>
            <h1 className="mb-4">
              Your Journey<br />Your Way
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg text-[#4A5D23]/80 max-w-xl mb-12 leading-relaxed font-light"
          >
            Experience the breathtaking landscapes and rich culture of Namibia with our premium 4x4 vehicles and expertly guided tours. Your adventure begins here.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex gap-6"
          >
            <button className="btn btn-primary">
              View Our Fleet
            </button>
            <button className="btn btn-outline">
              Explore Tours
            </button>
          </motion.div>
        </div>
      </div>

      {/* Right Content */}
      <div className="col-span-6 relative">
        <div className="absolute inset-0 grid grid-cols-12 gap-4">
          {/* Grid Lines */}
          {Array.from({ length: 13 }).map((_, i) => (
            <div key={i} className="w-[1px] h-full bg-[#4A5D23]/5" />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="relative h-full"
        >
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[90%] aspect-[16/10]">
            <div className="absolute inset-0 rounded-3xl overflow-hidden shadow-2xl">
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-tr from-[#4A5D23]/30 to-transparent z-10" />
              
              {/* Image */}
              <Image
                src="/images/safarisuv.jpg"
                alt="Safari SUV in Namibia"
                fill
                style={{ objectFit: "cover" }}
                className="transition-transform duration-700 hover:scale-105"
                priority
              />

              {/* Bottom Gradient */}
              <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-[#4A5D23]/20 to-transparent z-10" />
            </div>
          </div>
        </motion.div>

        {/* Vertical Line */}
        <motion.div
          initial={{ height: 0 }}
          animate={{ height: "100%" }}
          transition={{ duration: 1, delay: 0.2 }}
          className="absolute left-1/2 top-0 w-[1px] bg-[#4A5D23]/20"
        />
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        className="scroll-indicator"
      >
        <div className="glass px-6 py-3 rounded-full flex flex-col items-center">
          <div className="text-[#4A5D23] text-sm uppercase tracking-wider font-light mb-2">
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
              stroke="#4A5D23"
              strokeWidth={1.5}
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
