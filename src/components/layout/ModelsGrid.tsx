"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { GridBackground } from "./GridBackground";

const models = [
  {
    id: 1,
    type: "Premium 4x4",
    name: "Toyota Hilux Double Cab",
    description: "Fully equipped double cab with camping gear and rooftop tents, perfect for family adventures.",
    features: [
      "4-5 People",
      "Rooftop Tent",
      "Camping Ready",
      "4x4 Capability"
    ],
    specs: {
      engine: "2.8L Turbo Diesel",
      transmission: "Automatic",
      fuel: "Diesel",
      consumption: "9.5L/100km"
    },
    equipment: [
      "GPS Navigation",
      "Camping Equipment",
      "Recovery Kit",
      "Dual Battery System"
    ],
    image: "/images/hilus.jpg",
    price: "From N$1,500/day"
  },
  {
    id: 2,
    type: "Luxury SUV",
    name: "Land Cruiser Prado VX",
    description: "Premium SUV combining luxury comfort with exceptional off-road capabilities.",
    features: [
      "5-7 People",
      "Premium Interior",
      "All-terrain",
      "Extra Storage"
    ],
    specs: {
      engine: "3.0L V6 Diesel",
      transmission: "Automatic",
      fuel: "Diesel",
      consumption: "10.2L/100km"
    },
    equipment: [
      "Leather Interior",
      "360° Camera",
      "Satellite Phone",
      "Refrigerator"
    ],
    image: "/images/prado.jpg",
    price: "From N$2,200/day"
  }
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
      duration: 0.6,
      ease: [0.215, 0.610, 0.355, 1.000],
    },
  },
};

export function ModelsGrid() {
  return (
    <section className="grid-section py-24" id="vehicles">
      <GridBackground />
      
      <div className="content-wrapper">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          {/* Section Header */}
          <motion.div
            variants={itemVariants}
            className="max-w-2xl mx-auto text-center mb-16"
          >
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="w-24 h-[1px] bg-primary" />
              <h2 className="text-lg tracking-wider text-primary font-light uppercase">
                Our Fleet
              </h2>
              <div className="w-24 h-[1px] bg-primary" />
            </div>
            <h1 className="mb-6">
              Choose Your Perfect <span className="text-primary">Vehicle</span>
            </h1>
            <p className="text-xl text-primary/80 font-light leading-relaxed">
              Explore our range of premium 4x4 vehicles, each carefully selected and equipped for your Namibian adventure
            </p>
          </motion.div>

          {/* Vehicles Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {models.map((model) => (
              <motion.div
                key={model.id}
                variants={itemVariants}
                className="group"
              >
                <div className="grid-block bg-white/90 backdrop-blur-sm">
                  <div className="grid-block-content">
                    {/* Vehicle Header */}
                    <div>
                      <div className="text-sm text-primary/60 uppercase tracking-wider mb-2">
                        {model.type}
                      </div>
                      <h3 className="text-2xl text-primary mb-4">
                        {model.name}
                      </h3>
                      <p className="text-primary/70 mb-6 leading-relaxed">
                        {model.description}
                      </p>
                    </div>

                    {/* Vehicle Image */}
                    <div className="relative w-full h-72 rounded-2xl overflow-hidden mb-8">
                      <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent z-10" />
                      <Image
                        src={model.image}
                        alt={model.name}
                        fill
                        priority
                        quality={75}
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        style={{ objectFit: "cover" }}
                        className="transition-transform duration-700 group-hover:scale-105"
                      />
                    </div>

                    {/* Features */}
                    <div className="mb-8">
                      <h4 className="text-lg text-primary mb-4">Key Features</h4>
                      <div className="flex flex-wrap gap-3">
                        {model.features.map((feature, index) => (
                          <span
                            key={index}
                            className="px-4 py-2 bg-primary/5 rounded-full text-sm text-primary"
                          >
                            {feature}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Specifications */}
                    <div className="mb-8">
                      <h4 className="text-lg text-primary mb-4">Specifications</h4>
                      <div className="grid grid-cols-2 gap-4">
                        {Object.entries(model.specs).map(([key, value]) => (
                          <div key={key} className="flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-primary/20" />
                            <span className="text-primary/70 capitalize">{key}:</span>
                            <span className="text-primary">{value}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Equipment */}
                    <div className="mb-8">
                      <h4 className="text-lg text-primary mb-4">Included Equipment</h4>
                      <div className="grid grid-cols-2 gap-3">
                        {model.equipment.map((item, index) => (
                          <div key={index} className="flex items-center gap-2">
                            <svg className="w-5 h-5 text-primary/60" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            <span className="text-primary/70">{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Price and CTA */}
                    <div className="flex items-center justify-between mt-auto pt-6 border-t border-primary/10">
                      <div>
                        <div className="text-sm text-primary/60 uppercase tracking-wider">
                          Starting Price
                        </div>
                        <div className="text-xl text-primary font-medium">
                          {model.price}
                        </div>
                      </div>
                      <a 
                        href={`#book-${model.id}`}
                        className="btn btn-primary"
                      >
                        Book Now
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Section Footer */}
          <motion.div
            variants={itemVariants}
            className="mt-16 text-center"
          >
            <p className="text-primary/70 mb-8">
              All vehicles come fully equipped with camping gear, GPS navigation, and 24/7 support.
            </p>
            <a 
              href="#contact"
              className="btn btn-outline inline-flex items-center gap-2 group"
            >
              <span>Need Help Choosing?</span>
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
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
