"use client";

import { motion } from "framer-motion";
import { GridBackground } from "./GridBackground";
import Image from "next/image";
import Link from "next/link";

const testimonials = [
  {
    id: 1,
    quote: "An unforgettable journey through Namibia's most breathtaking landscapes. Tjaart's expertise and attention to detail made our adventure truly exceptional.",
    author: "Sarah Mitchell",
    location: "United Kingdom",
    image: "/images/safarisuv.jpg",
    rating: 5,
    tripType: "Family Safari",
    date: "March 2024"
  },
  {
    id: 2,
    quote: "The vehicle was perfectly equipped, and the suggested route was amazing. Every detail was thought through, making our self-drive adventure seamless and memorable.",
    author: "Marcus Weber",
    location: "Germany",
    image: "/images/safarisuv.jpg",
    rating: 5,
    tripType: "Photography Tour",
    date: "February 2024"
  },
  {
    id: 3,
    quote: "The perfect blend of adventure and comfort. The 4x4 was top-notch, and the camping equipment made our wilderness experience absolutely incredible.",
    author: "Emma Thompson",
    location: "Australia",
    image: "/images/safarisuv.jpg",
    rating: 5,
    tripType: "Adventure Tour",
    date: "January 2024"
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

export function Testimonials() {
  return (
    <section className="grid-section py-24" id="testimonials">
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
                Client Stories
              </h2>
              <div className="w-24 h-[1px] bg-primary" />
            </div>
            <h1 className="mb-6">
              Adventures from Our <span className="text-primary">Travelers</span>
            </h1>
            <p className="text-xl text-primary/80 font-light leading-relaxed">
              Discover what makes our tours and services truly special through the experiences of our valued clients
            </p>
          </motion.div>

          {/* Testimonials Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                variants={itemVariants}
                className="group"
              >
                <div className="testimonial-card h-full">
                  <div className="flex flex-col h-full">
                    {/* Quote Icon */}
                    <div className="text-primary/20 mb-6">
                      <svg width="48" height="48" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179zm10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179z"/>
                      </svg>
                    </div>

                    {/* Rating */}
                    <div className="flex gap-1 mb-4">
                      {Array.from({ length: testimonial.rating }).map((_, i) => (
                        <svg
                          key={i}
                          className="w-5 h-5 text-primary"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>

                    {/* Trip Type & Date */}
                    <div className="flex items-center gap-4 mb-6">
                      <span className="px-3 py-1 bg-primary/5 rounded-full text-sm text-primary">
                        {testimonial.tripType}
                      </span>
                      <span className="text-sm text-primary/60">
                        {testimonial.date}
                      </span>
                    </div>

                    {/* Quote */}
                    <p className="text-primary/80 text-lg leading-relaxed mb-8 flex-grow">
                      "{testimonial.quote}"
                    </p>

                    {/* Image and Author */}
                    <div className="mt-auto pt-6 border-t border-primary/10">
                      <div className="flex items-center gap-4">
                        <div className="relative w-12 h-12 rounded-full overflow-hidden">
                          <Image
                            src={testimonial.image}
                            alt={`${testimonial.author}'s adventure`}
                            fill
                            sizes="48px"
                            style={{ objectFit: "cover" }}
                            className="next-image"
                          />
                        </div>
                        <div>
                          <div className="text-primary font-medium">
                            {testimonial.author}
                          </div>
                          <div className="text-sm text-primary/60">
                            {testimonial.location}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Trust Indicators */}
          <motion.div
            variants={itemVariants}
            className="mt-16 text-center"
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-medium text-primary mb-2">500+</div>
                <div className="text-primary/60">Happy Clients</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-medium text-primary mb-2">100%</div>
                <div className="text-primary/60">Satisfaction</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-medium text-primary mb-2">50+</div>
                <div className="text-primary/60">Custom Routes</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-medium text-primary mb-2">10+</div>
                <div className="text-primary/60">Years Experience</div>
              </div>
            </div>
          </motion.div>

          {/* Call to Action */}
          <motion.div
            variants={itemVariants}
            className="mt-16 text-center"
          >
            <Link 
              href="/contact"
              className="btn btn-primary inline-flex items-center gap-2 group"
            >
              <span>Start Your Adventure</span>
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
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
