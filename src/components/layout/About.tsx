"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { GridBackground } from "./GridBackground";

export function About() {
  return (
    <section className="grid-section bg-white">
      <GridBackground />
      
      <div className="content-wrapper">
        <div className="grid grid-cols-2 gap-16 py-24">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col justify-center"
          >
            <div className="mb-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-24 h-[1px] bg-[#4A5D23]" />
                <h2 className="text-lg tracking-wider text-[#4A5D23] font-light uppercase">
                  About Us
                </h2>
              </div>
              <h1 className="mb-8">
                Your Journey Begins Here
              </h1>
              <p className="text-lg text-[#4A5D23]/80 leading-relaxed mb-6">
                Namibia Self Drive was founded by Tjaart Smuts, a lifelong explorer and seasoned guide, 
                dedicated to bringing the magic of Namibia to travelers worldwide.
              </p>
              <p className="text-lg text-[#4A5D23]/80 leading-relaxed">
                Our mission is simple: to provide an authentic, customized experience of Namibia, 
                whether through a guided tour or a self-driven adventure. With our wide range of 
                reliable rental vehicles and personalized tours, Namibia is yours to discover, your way.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-6 mt-8">
              {[
                { number: "20+", label: "Years Experience" },
                { number: "1000+", label: "Happy Travelers" },
                { number: "100%", label: "Satisfaction" }
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-3xl font-light text-[#4A5D23] mb-2">
                    {stat.number}
                  </div>
                  <div className="text-sm text-[#4A5D23]/60 uppercase tracking-wider">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Content */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative h-[600px] rounded-3xl overflow-hidden shadow-soft">
              <Image
                src="/images/safarisuv.jpg"
                alt="Tjaart Smuts"
                fill
                style={{ objectFit: "cover" }}
                className="transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#4A5D23]/50 to-transparent" />
              
              {/* Founder Info Box */}
              <div className="absolute bottom-8 left-8 right-8 bg-white/90 backdrop-blur-sm p-6 rounded-2xl">
                <div className="text-sm text-[#4A5D23]/60 uppercase tracking-wider mb-2">
                  Your Guide
                </div>
                <h3 className="text-xl text-[#4A5D23] mb-2">
                  Tjaart Smuts
                </h3>
                <p className="text-[#4A5D23]/80">
                  Raised amidst Namibia's natural wonders, Tjaart brings a wealth of knowledge 
                  and a personal passion to every tour he leads.
                </p>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -bottom-4 -right-4 w-48 h-48 border-2 border-[#4A5D23]/20 rounded-3xl" />
            <div className="absolute -top-4 -left-4 w-48 h-48 border-2 border-[#4A5D23]/20 rounded-3xl" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
