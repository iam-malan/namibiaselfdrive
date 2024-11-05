'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export const OptionalExtras = () => {
  return (
    <section className="py-24">
      <div className="content-wrapper">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-24 h-[1px] bg-primary" />
            <h2 className="text-lg tracking-wider text-primary font-light uppercase">
              Optional Equipment
            </h2>
            <div className="w-24 h-[1px] bg-primary" />
          </div>
          <h1 className="mb-6">
            Enhanced <span className="text-primary">Experience</span>
          </h1>
          <p className="text-xl text-primary/80 font-light leading-relaxed max-w-3xl mx-auto mb-8">
            Customize your journey with our range of additional equipment and amenities
          </p>
          <Link 
            href="/optional-equipment"
            className="inline-block px-8 py-3 bg-primary text-background rounded-full hover:bg-primary/90 transition-colors"
          >
            View Optional Equipment
          </Link>
        </motion.div>
      </div>
    </section>
  );
};
