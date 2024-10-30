"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const models = [
  {
    id: 1,
    name: "Toyota Hilux 4x4",
    description: "Double cab with camping gear and rooftop tents",
    image: "/models/alto.jpg", // We'll need proper vehicle images
    category: "4x4 Vehicle",
    specs: ["4-5 people", "Camping Ready", "Off-road Capable"],
  },
  {
    id: 2,
    name: "Land Cruiser Prado",
    description: "Luxury SUV perfect for long-distance comfort",
    image: "/models/alto.jpg", // We'll need proper vehicle images
    category: "Luxury 4x4",
    specs: ["5-7 people", "Premium Interior", "All-terrain"],
  },
  {
    id: 3,
    name: "Nissan X-Trail",
    description: "Ideal SUV for families and small groups",
    image: "/models/alto.jpg", // We'll need proper vehicle images
    category: "SUV",
    specs: ["5 people", "Comfortable", "Versatile"],
  },
  {
    id: 4,
    name: "Toyota Fortuner",
    description: "Versatile 4x4 for city and rugged landscapes",
    image: "/models/alto.jpg", // We'll need proper vehicle images
    category: "4x4 SUV",
    specs: ["7 people", "Reliable", "Adventure Ready"],
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

export function ModelsGrid() {
  return (
    <section className="relative py-24 bg-[#F5F5F0]">
      <div className="container mx-auto px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="max-w-2xl mx-auto text-center mb-16"
        >
          <motion.div variants={itemVariants} className="flex items-center justify-center gap-4 mb-4">
            <div className="w-24 h-[2px] bg-[#4A5D23]" />
            <h2 className="text-xl text-[#4A5D23] font-medium">
              OUR FLEET
            </h2>
            <div className="w-24 h-[2px] bg-[#4A5D23]" />
          </motion.div>
          <motion.h3 
            variants={itemVariants}
            className="text-4xl font-bold mb-4 text-[#4A5D23]"
          >
            Choose Your Adventure Vehicle
          </motion.h3>
          <motion.p 
            variants={itemVariants}
            className="text-[#4A5D23]/80"
          >
            Explore our range of well-maintained vehicles suitable for any Namibian adventure
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8"
        >
          {models.map((model) => (
            <motion.div
              key={model.id}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className="group relative bg-white rounded-3xl overflow-hidden shadow-xl"
            >
              <div className="relative h-64 overflow-hidden bg-[#4A5D23]/20">
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors z-10" />
                <Image
                  src={model.image}
                  alt={model.name}
                  fill
                  style={{ objectFit: "cover" }}
                  className="transform group-hover:scale-110 transition-transform duration-500 mix-blend-multiply"
                />
              </div>
              <div className="relative p-8">
                <span className="text-sm text-[#4A5D23] font-medium">
                  {model.category}
                </span>
                <h3 className="text-2xl font-bold text-[#4A5D23] mt-2">
                  {model.name}
                </h3>
                <p className="text-[#4A5D23]/80 mt-2">
                  {model.description}
                </p>
                <div className="mt-4 flex gap-4">
                  {model.specs.map((spec, index) => (
                    <div 
                      key={index} 
                      className="px-3 py-1 bg-[#4A5D23]/10 rounded-full text-sm text-[#4A5D23]"
                    >
                      {spec}
                    </div>
                  ))}
                </div>
                <Link
                  href={`/vehicles/${model.id}`}
                  className="mt-6 inline-flex items-center text-[#4A5D23] font-medium hover:text-[#3A4D13] transition-colors"
                >
                  View Details
                  <svg
                    className="ml-2 w-4 h-4"
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
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="mt-16 text-center"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center justify-center px-8 py-3 text-lg font-medium text-white bg-[#4A5D23] rounded-full hover:bg-[#3A4D13] transition-colors"
          >
            Book Your Vehicle
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
      </div>
    </section>
  );
}
