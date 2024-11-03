'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface VehicleFeature {
  name: string;
  items: string[];
}

interface VehicleProps {
  name: string;
  dailyRate: string;
  description: string;
  specifications: string[];
  features: string[];
  campingEquipment?: string[];
  optionalExtras?: { name: string; price: string }[];
  rentalIncludes: string[];
  image?: string;
}

interface VehicleSectionProps {
  title: string;
  subtitle: string;
  vehicles: VehicleProps[];
}

const VehicleDropdown = ({ vehicle }: { vehicle: VehicleProps }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="feature-card overflow-hidden">
      <div className="flex flex-col md:flex-row gap-6 p-6">
        {vehicle.image && (
          <div className="relative w-full md:w-1/3 min-h-[200px] rounded-xl overflow-hidden bg-gray-50">
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/30 to-transparent z-10" />
            <div className="relative w-full h-full flex items-center justify-center">
              <img
                src={vehicle.image}
                alt={vehicle.name}
                className="max-w-full max-h-full object-contain"
              />
            </div>
          </div>
        )}
        <div className="flex-1">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="w-full flex justify-between items-center text-left"
          >
            <div>
              <h3 className="text-2xl text-primary mb-2">{vehicle.name}</h3>
              <p className="text-primary/60">{vehicle.dailyRate}</p>
            </div>
            <svg
              className={`w-6 h-6 text-primary/60 transform transition-transform ${
                isOpen ? 'rotate-180' : ''
              }`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="px-6 pb-6"
          >
            <div className="space-y-6">
              <div>
                <p className="text-primary/80 leading-relaxed">{vehicle.description}</p>
              </div>

              <div>
                <h4 className="text-lg text-primary mb-3">Specifications</h4>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  {vehicle.specifications.map((spec, index) => (
                    <li key={index} className="flex items-center gap-2 text-primary/70">
                      <svg className="w-5 h-5 text-primary/60" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {spec}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="text-lg text-primary mb-3">Features</h4>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  {vehicle.features.map((feature, index) => (
                    <li key={index} className="flex items-center gap-2 text-primary/70">
                      <svg className="w-5 h-5 text-primary/60" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              {vehicle.campingEquipment && (
                <div>
                  <h4 className="text-lg text-primary mb-3">Camping Equipment Included</h4>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {vehicle.campingEquipment.map((item, index) => (
                      <li key={index} className="flex items-center gap-2 text-primary/70">
                        <svg className="w-5 h-5 text-primary/60" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {vehicle.optionalExtras && (
                <div>
                  <h4 className="text-lg text-primary mb-3">Optional Extras for Hire</h4>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {vehicle.optionalExtras.map((extra, index) => (
                      <li key={index} className="flex items-center gap-2 text-primary/70">
                        <svg className="w-5 h-5 text-primary/60" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        {extra.name} - {extra.price}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <div>
                <h4 className="text-lg text-primary mb-3">Daily Rental Fee Includes</h4>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  {vehicle.rentalIncludes.map((item, index) => (
                    <li key={index} className="flex items-center gap-2 text-primary/70">
                      <svg className="w-5 h-5 text-primary/60" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export const VehicleSection = ({ title, subtitle, vehicles }: VehicleSectionProps) => {
  return (
    <div className="py-24">
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
              {title}
            </h2>
            <div className="w-24 h-[1px] bg-primary" />
          </div>
          <p className="text-xl text-primary/80 font-light leading-relaxed max-w-3xl mx-auto">
            {subtitle}
          </p>
        </motion.div>

        <div className="space-y-6">
          {vehicles.map((vehicle, index) => (
            <motion.div
              key={vehicle.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <VehicleDropdown vehicle={vehicle} />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};
