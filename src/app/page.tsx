"use client";

import { Header } from '@/components/layout/Header';
import { Hero } from '@/components/layout/Hero';
import { Features } from '@/components/layout/Features';
import { ModelsGrid } from '@/components/layout/ModelsGrid';
import { Footer } from '@/components/layout/Footer';
import { ScrollProgressLine } from '@/components/layout/ScrollProgressLine';
import { Testimonials } from '@/components/layout/Testimonials';
import { motion } from 'framer-motion';

const tours = [
  {
    title: "Desert Dunes Experience",
    description: "Explore the iconic Sossusvlei and Deadvlei, witnessing the world's highest sand dunes.",
    duration: "3-4 Days",
    highlights: ["Sunrise at Dune 45", "Visit to Dead Vlei", "Sesriem Canyon"]
  },
  {
    title: "Wildlife Safari",
    description: "Discover the diverse wildlife in Etosha National Park, one of Africa's great game reserves.",
    duration: "4-5 Days",
    highlights: ["Big Five Viewing", "Night Game Drives", "Waterhole Visits"]
  },
  {
    title: "Cultural Heritage Tour",
    description: "Immerse yourself in the rich cultural heritage of Namibia's indigenous communities.",
    duration: "5-6 Days",
    highlights: ["Himba Village Visit", "San Bushmen Experience", "Traditional Crafts"]
  },
  {
    title: "Coastal Escape",
    description: "Experience the unique blend of desert and ocean along Namibia's Skeleton Coast.",
    duration: "3-4 Days",
    highlights: ["Walvis Bay Cruise", "Sandwich Harbor", "Desert Adventure"]
  }
];

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <Header />
      <ScrollProgressLine />
      
      {/* Hero Section */}
      <section id="hero" className="pt-0">
        <Hero />
      </section>
      
      {/* About Section */}
      <section className="py-24" id="about">
        <div className="content-wrapper">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-16"
          >
            <div>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-24 h-[1px] bg-primary" />
                <h2 className="text-lg tracking-wider text-primary font-light uppercase">
                  Our Story
                </h2>
              </div>
              <h1 className="mb-6">
                A Decade of <span className="text-primary">Excellence</span>
              </h1>
              <p className="text-lg text-primary/80 leading-relaxed mb-8">
                Established in 2010 by Tjaart Smuts, Namibia Self Drive was born out of a passion for adventure and a love for the natural beauty of Namibia. With over a decade of experience in tourism, Tjaart has dedicated himself to providing exceptional services that allow travelers to experience Namibia in the most authentic way possible.
              </p>
              <div className="grid grid-cols-2 gap-8 mb-8">
                <div>
                  <div className="text-3xl font-medium text-primary mb-2">10+</div>
                  <div className="text-primary/60">Years Experience</div>
                </div>
                <div>
                  <div className="text-3xl font-medium text-primary mb-2">5000+</div>
                  <div className="text-primary/60">Happy Travelers</div>
                </div>
              </div>
              <a href="#contact" className="btn btn-primary group">
                <span>Learn More</span>
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
            <div className="relative">
              <div className="relative h-full rounded-3xl overflow-hidden shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/30 to-transparent z-10" />
                <motion.img
                  initial={{ scale: 1.2 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.5 }}
                  src="/images/safarisuv.jpg"
                  alt="Namibia Landscape"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>
      
      {/* Vehicle Rentals Section */}
      <section id="vehicles">
        <ModelsGrid />
      </section>
      
      {/* Features Section */}
      <section id="features">
        <Features />
      </section>
      
      {/* Tours Section */}
      <section className="py-24" id="tours">
        <div className="content-wrapper">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="w-24 h-[1px] bg-primary" />
              <h2 className="text-lg tracking-wider text-primary font-light uppercase">
                Guided Tours
              </h2>
              <div className="w-24 h-[1px] bg-primary" />
            </div>
            <h1 className="mb-6">
              Curated <span className="text-primary">Experiences</span>
            </h1>
            <p className="text-xl text-primary/80 font-light leading-relaxed max-w-3xl mx-auto">
              Discover Namibia's most breathtaking destinations through our carefully crafted tour packages
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {tours.map((tour, index) => (
              <motion.div
                key={tour.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <div className="feature-card h-full">
                  <h3 className="text-2xl text-primary mb-4">{tour.title}</h3>
                  <p className="text-primary/70 mb-6">{tour.description}</p>
                  <div className="flex items-center gap-4 mb-6">
                    <svg className="w-5 h-5 text-primary/60" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-primary/60">{tour.duration}</span>
                  </div>
                  <div className="space-y-3">
                    {tour.highlights.map((highlight) => (
                      <div key={highlight} className="flex items-center gap-3">
                        <svg className="w-5 h-5 text-primary/60" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-primary/70">{highlight}</span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-8">
                    <a href="#contact" className="btn btn-outline group inline-flex">
                      <span>View Details</span>
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
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials">
        <Testimonials />
      </section>

      {/* Contact Section */}
      <section className="py-24" id="contact">
        <div className="content-wrapper">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="w-24 h-[1px] bg-primary" />
              <h2 className="text-lg tracking-wider text-primary font-light uppercase">
                Contact Us
              </h2>
              <div className="w-24 h-[1px] bg-primary" />
            </div>
            <h1 className="mb-6">
              Start Your <span className="text-primary">Adventure</span>
            </h1>
            <p className="text-xl text-primary/80 font-light leading-relaxed max-w-3xl mx-auto">
              Get in touch with us to plan your perfect Namibian journey
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl text-primary mb-4">Contact Information</h3>
                <div className="space-y-4">
                  <p className="flex items-center gap-3">
                    <svg className="w-5 h-5 text-primary/60" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <span className="text-primary/80">+264 61 234 5678</span>
                  </p>
                  <p className="flex items-center gap-3">
                    <svg className="w-5 h-5 text-primary/60" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <span className="text-primary/80">info@namibiaselfdrive.com</span>
                  </p>
                  <p className="flex items-center gap-3">
                    <svg className="w-5 h-5 text-primary/60" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span className="text-primary/80">123 Safari Street, Windhoek, Namibia</span>
                  </p>
                </div>
              </div>

              <div>
                <h3 className="text-2xl text-primary mb-4">Office Hours</h3>
                <div className="space-y-2 text-primary/80">
                  <p>Monday - Friday: 8:00 AM - 6:00 PM</p>
                  <p>Saturday: 9:00 AM - 2:00 PM</p>
                  <p>Sunday: Closed</p>
                </div>
              </div>
            </div>

            <div className="feature-card">
              <h3 className="text-2xl text-primary mb-6">Send Us a Message</h3>
              <form className="space-y-6">
                <div className="space-y-2">
                  <label className="text-primary/80 block">Name</label>
                  <input type="text" className="w-full px-4 py-2 rounded-lg border border-primary/20 bg-white/50 focus:outline-none focus:border-primary" />
                </div>
                <div className="space-y-2">
                  <label className="text-primary/80 block">Email</label>
                  <input type="email" className="w-full px-4 py-2 rounded-lg border border-primary/20 bg-white/50 focus:outline-none focus:border-primary" />
                </div>
                <div className="space-y-2">
                  <label className="text-primary/80 block">Message</label>
                  <textarea className="w-full px-4 py-2 rounded-lg border border-primary/20 bg-white/50 focus:outline-none focus:border-primary h-32"></textarea>
                </div>
                <button type="submit" className="btn btn-primary w-full">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
