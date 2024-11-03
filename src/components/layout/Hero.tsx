'use client';

import { motion } from 'framer-motion';

export const Hero = () => {
  return (
    <div className="min-h-screen relative flex items-center">
      <div className="content-wrapper grid grid-cols-1 lg:grid-cols-2 gap-12 py-24">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col justify-center"
        >
          <h2 className="text-lg tracking-wider text-primary/80 uppercase mb-4">
            DISCOVER NAMIBIA
          </h2>
          <h1 className="text-5xl lg:text-6xl font-light mb-6">
            Your Journey,
            <br />
            <span className="text-primary">Your Adventure</span>
          </h1>
          <p className="text-xl text-primary/80 leading-relaxed mb-8 max-w-lg">
            Experience the breathtaking landscapes and rich culture of Namibia
            with our premium 4x4 vehicles and expertly curated tours.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="#vehicles"
              className="btn btn-primary group"
            >
              <span>VIEW OUR FLEET</span>
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
            </a>
            <a
              href="#tours"
              className="btn btn-outline group"
            >
              <span>EXPLORE TOURS</span>
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
            </a>
          </div>
          <div className="flex items-center gap-8 mt-12">
            <div className="flex items-center gap-2">
              <svg
                className="w-6 h-6 text-primary/60"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <span className="text-primary/80">Premium Vehicles</span>
            </div>
            <div className="flex items-center gap-2">
              <svg
                className="w-6 h-6 text-primary/60"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <span className="text-primary/80">Expert Guides</span>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="relative h-full rounded-3xl overflow-hidden shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/30 to-transparent z-10" />
            <motion.img
              initial={{ scale: 1.2 }}
              animate={{ scale: 1 }}
              transition={{ duration: 1.5 }}
              src="/images/flux landy.png"
              alt="Land Rover in Namibian landscape"
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-12 left-1/2 -translate-x-1/2">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-sm text-primary/60 uppercase tracking-wider">
            SCROLL TO DISCOVER
          </span>
          <svg
            className="w-6 h-6 text-primary/60 animate-bounce"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </motion.div>
      </div>
    </div>
  );
};
