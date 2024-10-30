"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { GridBackground } from "./GridBackground";

const models = [
  {
    id: 1,
    type: "4x4 Vehicle",
    name: "Toyota Hilux 4x4",
    description: "Double cab with camping gear and rooftop tents",
    features: ["4-5 people", "Camping Ready", "Off-road Capable"],
    image: "/images/safarisuv.jpg"
  },
  {
    id: 2,
    type: "Luxury 4x4",
    name: "Land Cruiser Prado",
    description: "Luxury SUV perfect for long-distance comfort",
    features: ["5-7 people", "Premium Interior", "All-terrain"],
    image: "/images/safarisuv.jpg"
  }
];

export function ModelsGrid() {
  return (
    <section className="grid-section">
      <GridBackground />
      
      <div className="content-wrapper">
        <div className="grid grid-cols-2 gap-8 py-16">
          {models.map((model) => (
            <motion.div
              key={model.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="grid-block"
            >
              <div className="grid-block-content">
                <div>
                  <div className="text-sm text-[#4A5D23]/60 uppercase tracking-wider mb-2">
                    {model.type}
                  </div>
                  <h3 className="text-2xl text-[#4A5D23] mb-2">
                    {model.name}
                  </h3>
                  <p className="text-[#4A5D23]/70 mb-6">
                    {model.description}
                  </p>
                  <div className="flex gap-4 mb-8">
                    {model.features.map((feature, index) => (
                      <span
                        key={index}
                        className="px-4 py-1 bg-[#4A5D23]/5 rounded-full text-sm text-[#4A5D23]"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="relative h-64 rounded-2xl overflow-hidden">
                  <Image
                    src={model.image}
                    alt={model.name}
                    fill
                    style={{ objectFit: "cover" }}
                    className="transition-transform duration-700 hover:scale-105"
                  />
                </div>

                <div className="mt-8">
                  <a 
                    href={`#vehicle-${model.id}`}
                    className="store-button inline-flex"
                  >
                    <span className="store-button-text">View Details</span>
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
          ))}
        </div>
      </div>
    </section>
  );
}
