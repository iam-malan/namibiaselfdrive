"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { GridBackground } from "./GridBackground";

const tours = [
  {
    id: 1,
    title: "The Classic Namibia Safari",
    duration: "7 Days",
    highlights: ["Etosha National Park", "Sossusvlei Dunes", "Swakopmund"],
    description: "Our week-long tour covers Namibia's most iconic locations. Ideal for first-time visitors, this tour combines wildlife viewing, cultural sites, and stunning landscapes.",
    image: "/images/safarisuv.jpg" // Replace with actual image
  },
  {
    id: 2,
    title: "Namibia Desert & Dune Experience",
    duration: "5 Days",
    highlights: ["Namib Desert", "Deadvlei", "Dune 45"],
    description: "This immersive desert tour takes you through Namibia's most dramatic landscapes, where towering dunes meet endless skies. Perfect for photographers and nature lovers.",
    image: "/images/safarisuv.jpg" // Replace with actual image
  },
  {
    id: 3,
    title: "Cultural & Coastal Adventure",
    duration: "10 Days",
    highlights: ["Himba villages", "Skeleton Coast", "Spitzkoppe"],
    description: "Experience the rich culture and wild beauty of Namibia, from visiting indigenous Himba communities to exploring Namibia's rugged coastlines.",
    image: "/images/safarisuv.jpg" // Replace with actual image
  }
];

export function PopularTours() {
  return (
    <section className="grid-section bg-white">
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
              Popular Tours
            </h2>
            <div className="w-24 h-[1px] bg-[#4A5D23]" />
          </div>
          <h1 className="mb-6">
            Your Namibian Adventure, Fully Customized
          </h1>
          <p className="text-lg text-[#4A5D23]/80 max-w-2xl mx-auto">
            Choose from curated routes or let us create a tour that&apos;s uniquely yours.
            From breathtaking landscapes to cultural encounters, we&apos;ll guide you on a
            journey that reflects your sense of adventure.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-8">
          {tours.map((tour, index) => (
            <motion.div
              key={tour.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <div className="grid-block bg-white">
                <div className="grid grid-cols-2 h-full">
                  <div className="relative">
                    <Image
                      src={tour.image}
                      alt={tour.title}
                      fill
                      style={{ objectFit: "cover" }}
                      className="transition-transform duration-700 hover:scale-105"
                    />
                  </div>
                  <div className="p-12 flex flex-col justify-between">
                    <div>
                      <div className="text-sm text-[#4A5D23]/60 uppercase tracking-wider mb-2">
                        {tour.duration}
                      </div>
                      <h3 className="text-2xl text-[#4A5D23] mb-4">
                        {tour.title}
                      </h3>
                      <p className="text-[#4A5D23]/80 mb-6">
                        {tour.description}
                      </p>
                      <div className="flex flex-wrap gap-3 mb-8">
                        {tour.highlights.map((highlight, i) => (
                          <span
                            key={i}
                            className="px-4 py-1 bg-[#4A5D23]/5 rounded-full text-sm text-[#4A5D23]"
                          >
                            {highlight}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <a 
                      href={`#tour-${tour.id}`}
                      className="store-button inline-flex"
                    >
                      <span className="store-button-text">View Tour Details</span>
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
              </div>
            </motion.div>
          ))}
        </div>

        {/* Custom Tour CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 text-center"
        >
          <h3 className="text-2xl text-[#4A5D23] mb-4">
            Have a Unique Journey in Mind?
          </h3>
          <p className="text-[#4A5D23]/80 mb-8">
            Let us create a custom tour tailored to your interests and preferences.
          </p>
          <a 
            href="#custom-tour"
            className="btn btn-primary inline-flex items-center gap-3"
          >
            <span>Design Your Tour</span>
            <svg 
              width="14" 
              height="14" 
              viewBox="0 0 14 14" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
              className="transform transition-transform group-hover:translate-x-1"
            >
              <path 
                d="M1 7H13M13 7L7 1M13 7L7 13" 
                stroke="currentColor" 
                strokeWidth="1.5" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
