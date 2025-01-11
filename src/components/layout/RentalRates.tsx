'use client';

import { motion } from 'framer-motion';

interface RentalPeriod {
  duration: string;
  decToMar: string;
  aprToNov: string;
  julToOct: string;
}

interface InsuranceOption {
  name: string;
  dailyRate: string;
  deposit: string;
  glassCover: string;
  tyresCover: string;
}

interface RentalRatesProps {
  periods: RentalPeriod[];
  insuranceOptions: InsuranceOption[];
}

export const RentalRates = ({ periods, insuranceOptions }: RentalRatesProps) => {
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
              Rental Rates & Insurance
            </h2>
            <div className="w-24 h-[1px] bg-primary" />
          </div>
          <h1 className="mb-6">
            Transparent <span className="text-primary">Pricing</span>
          </h1>
          <p className="text-xl text-primary/80 font-light leading-relaxed max-w-3xl mx-auto">
            Clear and competitive rates with flexible insurance options
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="feature-card">
              <h3 className="text-2xl text-primary mb-6">Standard Rates 2025</h3>
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
                    {periods.map((period, index) => (
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
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="feature-card">
              <h3 className="text-2xl text-primary mb-6">Insurance Options</h3>
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
                    {insuranceOptions.map((option, index) => (
                      <tr
                        key={option.name}
                        className="border-b border-primary/10 last:border-0"
                      >
                        <td className="py-3 px-1 sm:px-2 text-primary/80">{option.name}</td>
                        <td className="py-3 px-1 sm:px-2 text-right text-primary/80 whitespace-nowrap">
                          {option.dailyRate}
                        </td>
                        <td className="py-3 px-1 sm:px-2 text-right text-primary/80 whitespace-nowrap">
                          {option.deposit}
                        </td>
                        <td className="py-3 px-1 sm:px-2 text-center text-primary/80">
                          {option.glassCover}
                        </td>
                        <td className="py-3 px-1 sm:px-2 text-center text-primary/80">
                          {option.tyresCover}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
