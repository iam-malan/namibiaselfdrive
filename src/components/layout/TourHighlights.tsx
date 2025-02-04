"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { GridBackground } from "./GridBackground";

const highlights = [
  {
    id: 1,
    title: "Sossusvlei",
    description: "Marvel at the iconic red dunes and stark white salt pans.",
    image: "/images/safarisuv.jpg" // Replace with actual image
  },
  {
    id: 2,
    title: "Etosha National Park",
    description: "Experience the thrill of wildlife sightings on vast salt plains.",
    image: "/images/safarisuv.jpg" // Replace with actual image
  },
  {
    id: 3,
    title: "Skeleton Coast",
    description: "Uncover the mysterious beauty of Namibia's Atlantic coastline.",
    image: "/images/safarisuv.jpg" // Replace with actual image
  }
];

export function TourHighlights() {
  return (
    <section className="grid-section">
      <GridBackground />
      
      <div className="content-wrapper py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-24 h-[1px] bg-[#4A5D23]" />
            <h2 className="text-lg tracking-wider text-[#4A5D23] font-light uppercase">
              Popular Tour Highlights
            </h2>
            <div className="w-24 h-[1px] bg-[#4A5D23]" />
          </div>
          <h1 className="mb-6">
            Discover Namibia&apos;s Wonders
          </h1>
          <p className="text-lg text-[#4A5D23]/80 max-w-2xl mx-auto">
            Embark on a journey through Namibia&apos;s most breathtaking destinations,
            each offering unique experiences and unforgettable memories.
          </p>
        </motion.div>

        <div className="grid grid-cols-3 gap-8">
          {highlights.map((highlight, index) => (
            <motion.div
              key={highlight.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="group cursor-pointer"
            >
              <div className="grid-block bg-white h-[500px]">
                <div className="relative h-full">
                  <Image
                    src={highlight.image}
                    alt={highlight.title}
                    fill
                    style={{ objectFit: "cover" }}
                    className="transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#4A5D23]/90 to-transparent" />
                  
                  <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                    <h3 className="text-2xl mb-4">
                      {highlight.title}
                    </h3>
                    <p className="text-white/90">
                      {highlight.description}
                    </p>
                    <div className="mt-6 flex items-center gap-2 text-sm uppercase tracking-wider">
                      <span>Explore Location</span>
                      <span className="w-5 h-5 rounded-full border border-white flex items-center justify-center">
                        →
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
