"use client";

import { motion } from "framer-motion";
import { GridBackground } from "./GridBackground";

const testimonials = [
  {
    id: 1,
    quote: "Tjaart took us to places we'd only seen in magazines. The whole trip felt like a dream come true!",
    author: "Sarah",
    location: "USA",
    rating: 5
  },
  {
    id: 2,
    quote: "An unforgettable journey through Namibia's most beautiful landscapes. The expertise and personal touch made all the difference.",
    author: "Marcus",
    location: "Germany",
    rating: 5
  },
  {
    id: 3,
    quote: "The perfect blend of adventure and comfort. Highly recommended for anyone wanting to experience Namibia's true beauty.",
    author: "Emma",
    location: "UK",
    rating: 5
  }
];

export function Testimonials() {
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
              What Our Clients Say
            </h2>
            <div className="w-24 h-[1px] bg-[#4A5D23]" />
          </div>
          <h1 className="mb-6">
            Stories from Our Travelers
          </h1>
        </motion.div>

        <div className="grid grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <div className="grid-block bg-white p-8">
                <div className="flex flex-col h-full">
                  {/* Quote Icon */}
                  <div className="text-[#4A5D23]/20 mb-6">
                    <svg width="48" height="48" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179zm10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179z"/>
                    </svg>
                  </div>

                  {/* Stars */}
                  <div className="flex gap-1 mb-4">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <svg
                        key={i}
                        className="w-5 h-5 text-[#4A5D23]"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>

                  {/* Quote */}
                  <p className="text-[#4A5D23]/80 text-lg leading-relaxed mb-8 flex-grow">
                    "{testimonial.quote}"
                  </p>

                  {/* Author */}
                  <div className="mt-auto">
                    <div className="text-[#4A5D23] font-medium">
                      {testimonial.author}
                    </div>
                    <div className="text-sm text-[#4A5D23]/60">
                      {testimonial.location}
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
