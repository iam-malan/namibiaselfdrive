"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export function Hero() {
  return (
    <div className="relative grid grid-cols-12 min-h-screen bg-[#F5F5F0]">
      {/* Left Content */}
      <div className="col-span-6 flex flex-col justify-center pl-24">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-8"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="w-24 h-[2px] bg-[#4A5D23]" />
              <h2 className="text-xl text-[#4A5D23] font-medium">
                EXPLORE NAMIBIA
              </h2>
            </div>
            <h1 className="text-6xl font-bold text-[#4A5D23] mb-4">
              YOUR JOURNEY<br />YOUR WAY
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg text-[#4A5D23]/80 max-w-xl mb-8"
          >
            Experience the breathtaking landscapes and rich culture of Namibia with our premium 4x4 vehicles and expertly guided tours. Your adventure begins here.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex gap-6"
          >
            <button className="px-8 py-3 bg-[#4A5D23] text-white rounded-full hover:bg-[#3A4D13] transition-colors">
              View Our Fleet
            </button>
            <button className="px-8 py-3 border-2 border-[#4A5D23] text-[#4A5D23] rounded-full hover:bg-[#4A5D23] hover:text-white transition-colors">
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
            <div key={i} className="w-[1px] h-full bg-[#4A5D23]/10" />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="relative h-full"
        >
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-[#4A5D23]/20 rounded-3xl overflow-hidden">
            <Image
              src="/models/alto.jpg" // We'll need a proper hero image
              alt="Namibia Adventure Vehicle"
              fill
              style={{ objectFit: "cover" }}
              className="mix-blend-multiply"
            />
          </div>
        </motion.div>

        {/* Vertical Line */}
        <motion.div
          initial={{ height: 0 }}
          animate={{ height: "100%" }}
          transition={{ duration: 1, delay: 0.2 }}
          className="absolute left-1/2 top-0 w-[2px] bg-[#4A5D23]"
        />
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
      >
        <div className="text-[#4A5D23] text-sm mb-2">Scroll to discover</div>
        <motion.div
          animate={{
            y: [0, 10, 0]
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            repeatType: "reverse"
          }}
          className="w-6 h-6"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="#4A5D23"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </motion.div>
      </motion.div>
    </div>
  );
}
