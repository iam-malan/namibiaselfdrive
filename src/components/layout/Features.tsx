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
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

export function Features() {
  return (
    <section className="relative py-24 bg-[#F5F5F0]">
      {/* Grid Background */}
      <div className="absolute inset-0 grid grid-cols-12 gap-4 pointer-events-none">
        {Array.from({ length: 13 }).map((_, i) => (
          <div key={i} className="w-[1px] h-full bg-[#4A5D23]/5" />
        ))}
      </div>

      <div className="container mx-auto px-8 relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="max-w-7xl mx-auto"
        >
          <motion.div
            variants={itemVariants}
            className="max-w-2xl mx-auto text-center mb-16"
          >
            <div className="flex items-center justify-center gap-4 mb-4">
              <div className="w-24 h-[2px] bg-[#4A5D23]" />
              <h2 className="text-xl text-[#4A5D23] font-medium">
                WHY CHOOSE US
              </h2>
              <div className="w-24 h-[2px] bg-[#4A5D23]" />
            </div>
            <h3 className="text-4xl font-bold mb-4 text-[#4A5D23]">
              Experience the Difference
            </h3>
            <p className="text-[#4A5D23]/80">
              Discover what makes Namibia Self Drive your ideal adventure partner
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature) => (
              <motion.div
                key={feature.id}
                variants={itemVariants}
                whileHover={{ y: -10 }}
                className="relative p-8 bg-white rounded-3xl border border-[#4A5D23]/10 shadow-lg"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 mb-6 text-[#4A5D23]">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-[#4A5D23] mb-4">
                  {feature.title}
                </h3>
                <p className="text-[#4A5D23]/80">{feature.description}</p>
                <div className="absolute inset-0 border-2 border-transparent hover:border-[#4A5D23] rounded-3xl transition-colors duration-300" />
              </motion.div>
            ))}
          </div>

          <motion.div
            variants={itemVariants}
            className="mt-16 text-center"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center justify-center px-8 py-3 text-lg font-medium text-white bg-[#4A5D23] rounded-full hover:bg-[#3A4D13] transition-colors"
            >
              View Our Vehicle Fleet
              <svg
                className="w-5 h-5 ml-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
