'use client';

import { motion } from 'framer-motion';

interface RentalPeriod {
  season: string;
  rate: string;
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
              <h3 className="text-2xl text-primary mb-6">Rental Rates by Season</h3>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-primary/20">
                      <th className="py-4 px-4 text-left text-primary">Season</th>
                      <th className="py-4 px-4 text-right text-primary">Daily Rate</th>
                    </tr>
                  </thead>
                  <tbody>
                    {periods.map((period, index) => (
                      <tr
                        key={period.season}
                        className="border-b border-primary/10 last:border-0"
                      >
                        <td className="py-4 px-4 text-primary/80">{period.season}</td>
                        <td className="py-4 px-4 text-right text-primary/80">
                          {period.rate}
                        </td>
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
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-primary/20">
                      <th className="py-4 px-2 text-left text-primary">Option</th>
                      <th className="py-4 px-2 text-right text-primary">Daily Rate</th>
                      <th className="py-4 px-2 text-right text-primary">Deposit</th>
                      <th className="py-4 px-2 text-center text-primary">Glass</th>
                      <th className="py-4 px-2 text-center text-primary">Tyres</th>
                    </tr>
                  </thead>
                  <tbody>
                    {insuranceOptions.map((option, index) => (
                      <tr
                        key={option.name}
                        className="border-b border-primary/10 last:border-0"
                      >
                        <td className="py-4 px-2 text-primary/80">{option.name}</td>
                        <td className="py-4 px-2 text-right text-primary/80">
                          {option.dailyRate}
                        </td>
                        <td className="py-4 px-2 text-right text-primary/80">
                          {option.deposit}
                        </td>
                        <td className="py-4 px-2 text-center text-primary/80">
                          {option.glassCover}
                        </td>
                        <td className="py-4 px-2 text-center text-primary/80">
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
