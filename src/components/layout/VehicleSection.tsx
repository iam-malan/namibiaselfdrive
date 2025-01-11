'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';

interface VehicleFeature {
  name: string;
  items: string[];
}

interface InsuranceOption {
  name: string;
  dailyRate: string;
  deposit: string;
  glassCover: string;
  tyresCover: string;
}

interface RentalPeriod {
  duration: string;
  decToMar: string;
  aprToNov: string;
  julToOct: string;
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
  insuranceOptions: InsuranceOption[];
  rentalPeriods: RentalPeriod[];
}

interface VehicleSectionProps {
  title: string;
  subtitle: string;
  vehicles: VehicleProps[];
}

const VehicleDropdown = ({ vehicle, isCampingSection }: { vehicle: VehicleProps; isCampingSection: boolean }) => {
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
            <div className="space-y-8">
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

              {/* Camping Equipment Button for camping vehicles */}
              {isCampingSection && (
                <div className="flex justify-center">
                  <Link 
                    href="/camping-equipment"
                    className="btn btn-primary group"
                  >
                    <span>Camping Equipment Included</span>
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
                </div>
              )}

              {/* Rental Rates & Insurance Section */}
              <div className="pt-8 border-t border-primary/10">
                <div className="text-center mb-8">
                  <div className="flex items-center justify-center gap-4 mb-4">
                    <div className="w-16 h-[1px] bg-primary/30" />
                    <h4 className="text-lg tracking-wider text-primary font-light uppercase">
                      Rental Rates & Insurance
                    </h4>
                    <div className="w-16 h-[1px] bg-primary/30" />
                  </div>
                  <h2 className="text-[2.5rem] text-primary mb-2">Transparent <span className="text-[#606C38]">Pricing</span></h2>
                  <p className="text-primary/70 font-light">
                    Clear and competitive rates with flexible insurance options
                  </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {/* Rental Rates */}
                  <div className="feature-card bg-white/50">
                    <h5 className="text-lg text-primary mb-4">Standard Rates 2025</h5>
                    <div className="overflow-x-auto">
                      <table className="w-full">
                        <thead>
                          <tr className="border-b border-primary/20">
                            <th className="py-3 px-4 text-left text-primary">Duration</th>
                            <th className="py-3 px-4 text-right text-primary">Dec24 to Mar25</th>
                            <th className="py-3 px-4 text-right text-primary">Apr/May/Jun/Nov</th>
                            <th className="py-3 px-4 text-right text-primary">Jul to Oct</th>
                          </tr>
                        </thead>
                        <tbody>
                          {vehicle.rentalPeriods.map((period, index) => (
                            <tr
                              key={index}
                              className="border-b border-primary/10 last:border-0"
                            >
                              <td className="py-3 px-4 text-primary/80">{period.duration}</td>
                              <td className="py-3 px-4 text-right text-primary/80 whitespace-nowrap">N$ {period.decToMar}</td>
                              <td className="py-3 px-4 text-right text-primary/80 whitespace-nowrap">N$ {period.aprToNov}</td>
                              <td className="py-3 px-4 text-right text-primary/80 whitespace-nowrap">N$ {period.julToOct}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>

                  {/* Insurance Options */}
                  <div className="feature-card bg-white/50">
                    <h5 className="text-lg text-primary mb-4">Insurance Options</h5>
                    <div className="overflow-x-auto -mx-4 sm:mx-0">
                      <table className="w-full text-sm sm:text-base">
                        <thead>
                          <tr className="border-b border-primary/20">
                            <th className="py-3 px-1 sm:px-2 text-left text-primary">Option</th>
                            <th className="py-3 px-1 sm:px-2 text-right text-primary">Rate</th>
                            <th className="py-3 px-1 sm:px-2 text-right text-primary">Deposit</th>
                            <th className="py-3 px-1 sm:px-2 text-center text-primary">Glass</th>
                            <th className="py-3 px-1 sm:px-2 text-center text-primary">Tyres</th>
                          </tr>
                        </thead>
                        <tbody>
                          {vehicle.insuranceOptions.map((option, index) => (
                            <tr
                              key={index}
                              className="border-b border-primary/10 last:border-0"
                            >
                              <td className="py-3 px-1 sm:px-2 text-primary/80">{option.name}</td>
                              <td className="py-3 px-1 sm:px-2 text-right text-primary/80">{option.dailyRate}</td>
                              <td className="py-3 px-1 sm:px-2 text-right text-primary/80">{option.deposit}</td>
                              <td className="py-3 px-1 sm:px-2 text-center text-primary/80">{option.glassCover}</td>
                              <td className="py-3 px-1 sm:px-2 text-center text-primary/80">{option.tyresCover}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export const VehicleSection = ({ title, subtitle, vehicles }: VehicleSectionProps) => {
  const isCampingSection = title.toLowerCase().includes('camping');

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
              <VehicleDropdown vehicle={vehicle} isCampingSection={isCampingSection} />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};
