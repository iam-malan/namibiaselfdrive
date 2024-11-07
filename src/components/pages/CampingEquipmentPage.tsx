'use client';

import { motion } from 'framer-motion';

export const CampingEquipmentPage = () => {
  return (
    <div className="py-24">
      <div className="content-wrapper">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-24 h-[1px] bg-primary" />
            <h2 className="text-lg tracking-wider text-primary font-light uppercase">
              Camping Equipment
            </h2>
            <div className="w-24 h-[1px] bg-primary" />
          </div>
          <h1 className="text-4xl lg:text-5xl font-light mb-6">
            Included <span className="text-primary">Equipment</span>
          </h1>
          <p className="text-xl text-primary/80 font-light leading-relaxed max-w-3xl mx-auto">
            All the essential camping equipment you need for your adventure
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="feature-card p-8"
          >
            <h3 className="text-2xl text-primary mb-6">Camping Equipment</h3>
            <ul className="space-y-3">
              {[
                "1 X Rooftop Tents",
                "Bedsheet & Mattress Included",
                "Fly Sheet Stays",
                "Gas Bottle",
                "1-2 X Chairs",
                "1x Table",
                "Extension Cable For Fridge"
              ].map((item, index) => (
                <li key={index} className="flex items-center gap-3 text-primary/80">
                  <svg
                    className="w-5 h-5 text-primary/60 flex-shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="feature-card p-8"
          >
            <h3 className="text-2xl text-primary mb-6">Kitchen Box</h3>
            <ul className="space-y-3">
              {[
                "Cutlery Bag (Knives, Forks, Spoons)",
                "2 X Cooking Pots",
                "1 X Frying Pan",
                "Kettle",
                "Dinner Plates",
                "Side Plates",
                "Bowls",
                "Drinking Glasses",
                "Wine Glasses",
                "Coffee Mugs",
                "Cooker Top",
                "Barbeque/Braai Grid",
                "Barbeque/Braai Tongs",
                "Cutting Board",
                "Light"
              ].map((item, index) => (
                <li key={index} className="flex items-center gap-3 text-primary/80">
                  <svg
                    className="w-5 h-5 text-primary/60 flex-shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </div>
  );
};
