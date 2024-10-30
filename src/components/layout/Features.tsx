"use client";

import { motion } from "framer-motion";

const features = [
  {
    id: 1,
    icon: (
      <svg
        className="w-12 h-12"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"
        />
      </svg>
    ),
    title: "Unlimited Mileage",
    description:
      "Explore Namibia without restrictions. All our rentals come with unlimited mileage.",
  },
  {
    id: 2,
    icon: (
      <svg
        className="w-12 h-12"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
        />
      </svg>
    ),
    title: "Comprehensive Insurance",
    description:
      "Travel with peace of mind with our full coverage insurance plans.",
  },
  {
    id: 3,
    icon: (
      <svg
        className="w-12 h-12"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
        />
      </svg>
    ),
    title: "24/7 Support",
    description:
      "Round-the-clock roadside assistance and support throughout your journey.",
  },
  {
    id: 4,
    icon: (
      <svg
        className="w-12 h-12"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
    title: "Flexible Options",
    description:
      "Customizable pickup locations and vehicle setups to suit your needs.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.215, 0.610, 0.355, 1.000],
    },
  },
};

export function Features() {
  return (
    <section className="story-section relative">
      {/* Grid Background */}
      <div className="absolute inset-0 grid grid-cols-12 gap-4 pointer-events-none">
        {Array.from({ length: 13 }).map((_, i) => (
          <div key={i} className="w-[1px] h-full bg-[#4A5D23]/5" />
        ))}
      </div>

      <div className="content-wrapper relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={containerVariants}
        >
          <motion.div
            variants={itemVariants}
            className="max-w-2xl mx-auto text-center mb-8"
          >
            <div className="flex items-center justify-center gap-4 mb-3">
              <div className="w-24 h-[1px] bg-[#4A5D23]" />
              <h2 className="text-lg tracking-wider text-[#4A5D23] font-light uppercase">
                Why Choose Us
              </h2>
              <div className="w-24 h-[1px] bg-[#4A5D23]" />
            </div>
            <h1 className="mb-3">
              Experience the Difference
            </h1>
            <p className="text-lg text-[#4A5D23]/80 font-light leading-relaxed">
              Discover what makes Namibia Self Drive your ideal adventure partner
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {features.map((feature) => (
              <motion.div
                key={feature.id}
                variants={itemVariants}
                className="group relative"
              >
                <div className="relative p-6 glass rounded-3xl shadow-soft transition-all duration-300 group-hover:shadow-lg group-hover:-translate-y-1">
                  <div className="inline-flex items-center justify-center w-16 h-16 mb-4 text-[#4A5D23] opacity-80 group-hover:opacity-100 transition-opacity">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-light text-[#4A5D23] mb-2 tracking-tight">
                    {feature.title}
                  </h3>
                  <p className="text-[#4A5D23]/70 font-light leading-relaxed">
                    {feature.description}
                  </p>
                  <div className="absolute inset-0 border border-[#4A5D23]/10 group-hover:border-[#4A5D23]/30 rounded-3xl transition-colors duration-300" />
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            variants={itemVariants}
            className="mt-8 text-center"
          >
            <button className="btn btn-primary inline-flex items-center gap-3 group">
              <span>View Our Vehicle Fleet</span>
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
        </motion.div>
      </div>
    </section>
  );
}
