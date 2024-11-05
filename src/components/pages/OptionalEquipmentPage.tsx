'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

interface ExtraItem {
  name: string;
  price: string;
  image?: string;
}

interface OptionalEquipmentPageProps {
  extras: ExtraItem[];
}

export const OptionalEquipmentPage = ({ extras }: OptionalEquipmentPageProps) => {
  return (
    <div className="min-h-screen bg-background">
      <div className="content-wrapper py-32">
        <Link 
          href="/" 
          className="inline-block mb-12 text-primary hover:text-primary/80 transition-colors"
        >
          ← Back to Home
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
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
          <p className="text-xl text-primary/80 font-light leading-relaxed max-w-3xl mx-auto">
            Choose from our carefully selected range of additional equipment to enhance your journey
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {extras.map((extra, index) => (
            <motion.div
              key={extra.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-primary/10 hover:border-primary/20 transition-colors"
            >
              {extra.image && (
                <div className="mb-4 rounded-lg overflow-hidden">
                  <img
                    src={extra.image}
                    alt={extra.name}
                    className="w-full h-48 object-cover"
                  />
                </div>
              )}
              <h3 className="text-xl text-primary mb-3">{extra.name}</h3>
              <p className="text-primary/60 font-light">{extra.price}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};
