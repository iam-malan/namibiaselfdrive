"use client";

import { useEffect, useRef } from "react";
import { Features } from "@/components/layout/Features";
import { Footer } from "@/components/layout/Footer";
import { GridBackground } from "@/components/layout/GridBackground";
import { Header } from "@/components/layout/Header";
import { Hero } from "@/components/layout/Hero";
import { ModelsGrid } from "@/components/layout/ModelsGrid";
import { ScrollProgressLine } from "@/components/layout/ScrollProgressLine";

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const initScroll = async () => {
      try {
        const LocomotiveScroll = (await import("locomotive-scroll")).default;
        
        if (!containerRef.current) return;

        const scroll = new LocomotiveScroll({
          el: containerRef.current,
          smooth: true,
          smoothMobile: true,
          multiplier: 1,
          lerp: 0.1,
          class: "is-revealed",
        });

        scroll.on("scroll", (args: any) => {
          if (typeof args.scroll?.y === 'number') {
            document.documentElement.style.setProperty(
              "--scroll-progress",
              args.scroll.y.toString()
            );
          }
        });

        return () => {
          scroll.destroy();
        };
      } catch (error) {
        console.error("Failed to initialize scroll:", error);
      }
    };

    initScroll();
  }, []);

  return (
    <main className="relative min-h-screen bg-[#F5F5F0]">
      <GridBackground />
      <Header />
      <ScrollProgressLine />
      <div 
        ref={containerRef}
        data-scroll-container 
        className="relative w-full"
      >
        {/* Hero Section */}
        <div data-scroll-section>
          <Hero />
        </div>
        
        {/* About Section */}
        <div data-scroll-section className="py-12">
          <div className="max-w-[1400px] mx-auto px-8">
            <div className="max-w-3xl">
              <h2 className="text-3xl font-bold text-[#4A5D23] mb-6">Our Story</h2>
              <p className="text-lg text-[#4A5D23] mb-6">
                Established in 2010 by Tjaart Smuts, Namibia Self Drive was born out of a passion for adventure and a love for the natural beauty of Namibia. With over a decade of experience in tourism, Tjaart has dedicated himself to providing exceptional services that allow travelers to experience Namibia in the most authentic way possible.
              </p>
              <h3 className="text-2xl font-bold text-[#4A5D23] mb-4">Our Mission</h3>
              <p className="text-lg text-[#4A5D23]">
                To offer personalized and unforgettable travel experiences that showcase the true essence of Namibia, while ensuring comfort, safety, and flexibility for our guests.
              </p>
            </div>
          </div>
        </div>
        
        {/* Vehicle Rentals Section */}
        <div data-scroll-section className="py-12">
          <ModelsGrid />
        </div>
        
        {/* Features Section */}
        <div data-scroll-section className="py-12">
          <Features />
        </div>
        
        {/* Tours Section */}
        <div data-scroll-section className="py-12">
          <div className="max-w-[1400px] mx-auto px-8">
            <h2 className="text-3xl font-bold text-[#4A5D23] mb-8">Guided Tours</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white/50 backdrop-blur-sm p-8 rounded-lg">
                <h3 className="text-2xl font-bold text-[#4A5D23] mb-4">Desert Dunes Experience</h3>
                <p className="text-[#4A5D23]">Explore the iconic Sossusvlei and Deadvlei</p>
              </div>
              <div className="bg-white/50 backdrop-blur-sm p-8 rounded-lg">
                <h3 className="text-2xl font-bold text-[#4A5D23] mb-4">Wildlife Safari</h3>
                <p className="text-[#4A5D23]">Discover the Big Five in Etosha National Park</p>
              </div>
              <div className="bg-white/50 backdrop-blur-sm p-8 rounded-lg">
                <h3 className="text-2xl font-bold text-[#4A5D23] mb-4">Cultural Heritage Tour</h3>
                <p className="text-[#4A5D23]">Engage with Himba and San communities</p>
              </div>
              <div className="bg-white/50 backdrop-blur-sm p-8 rounded-lg">
                <h3 className="text-2xl font-bold text-[#4A5D23] mb-4">Coastal Escape</h3>
                <p className="text-[#4A5D23]">Enjoy the scenic beauty of Swakopmund and Walvis Bay</p>
              </div>
            </div>
          </div>
        </div>

        {/* Testimonials Section */}
        <div data-scroll-section className="py-12">
          <div className="max-w-[1400px] mx-auto px-8">
            <h2 className="text-3xl font-bold text-[#4A5D23] mb-8">What Our Clients Say</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white/50 backdrop-blur-sm p-8 rounded-lg">
                <p className="text-[#4A5D23] italic mb-4">"An unforgettable journey! Tjaart's expertise made all the difference."</p>
                <p className="text-[#4A5D23] font-bold">— Sarah L., United Kingdom</p>
              </div>
              <div className="bg-white/50 backdrop-blur-sm p-8 rounded-lg">
                <p className="text-[#4A5D23] italic mb-4">"The perfect blend of adventure and comfort. Highly recommended!"</p>
                <p className="text-[#4A5D23] font-bold">— Markus H., Germany</p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div data-scroll-section className="py-12">
          <div className="max-w-[1400px] mx-auto px-8">
            <h2 className="text-3xl font-bold text-[#4A5D23] mb-8">Contact Us</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-bold text-[#4A5D23] mb-6">Get in Touch</h3>
                <div className="space-y-4 text-[#4A5D23]">
                  <p>Email: info@namibiaselfdrive.com</p>
                  <p>Phone: +264 81 234 5678</p>
                  <p>Address: 456 Explorer Avenue, Windhoek, Namibia</p>
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-[#4A5D23] mb-6">Follow Us</h3>
                <div className="space-y-4 text-[#4A5D23]">
                  <p>Facebook: Namibia Self Drive</p>
                  <p>Instagram: @namibiaselfdrive</p>
                  <p>Twitter: @namselfdrive</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </main>
  );
}
