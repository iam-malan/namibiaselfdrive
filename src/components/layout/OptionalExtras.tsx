'use client';

import { motion } from 'framer-motion';

interface ExtraItem {
  name: string;
  price: string;
  image?: string;
}

interface OptionalExtrasProps {
  extras: ExtraItem[];
}

export const OptionalExtras = ({ extras }: OptionalExtrasProps) => {
  return (
    <section className="py-24">
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
              Optional Equipment
            </h2>
            <div className="w-24 h-[1px] bg-primary" />
          </div>
          <h1 className="mb-6">
            Enhanced <span className="text-primary">Experience</span>
          </h1>
          <p className="text-xl text-primary/80 font-light leading-relaxed max-w-3xl mx-auto">
            Customize your journey with our range of additional equipment and amenities
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {extras.map((extra, index) => (
            <motion.div
              key={extra.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="feature-card h-full flex flex-col">
                {extra.image && (
                  <div className="mb-4 rounded-lg overflow-hidden">
                    <img
                      src={extra.image}
                      alt={extra.name}
                      className="w-full h-48 object-cover"
                    />
                  </div>
                )}
                <div className="flex-grow">
                  <h3 className="text-xl text-primary mb-2">{extra.name}</h3>
                  <p className="text-primary/60">{extra.price}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
