import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Award, Factory, PackageCheck, Flame, Anchor } from 'lucide-react';

export const TrustBar: React.FC = () => {
  const trustItems = [
    {
      icon: Factory,
      title: 'Single-Origin Plant',
      desc: 'Nayenipalli Industrial Area, Vetapalem',
    },
    {
      icon: Flame,
      title: '70°C Borma Equilibrium',
      desc: '<4.5% Moisture content guarantee',
    },
    {
      icon: PackageCheck,
      title: 'Hermetic Nitrogen Tins',
      desc: '2 x 25 lbs export-standard packaging',
    },
    {
      icon: Anchor,
      title: 'Deepwater Port Access',
      desc: 'Seamless dispatch via Chennai & Vizag ports',
    },
    {
      icon: ShieldCheck,
      title: 'Direct Manufacturer',
      desc: 'Proprietor accountability on every consignment',
    },
    {
      icon: Award,
      title: 'Export Compliance',
      desc: 'Phytosanitary & origin documentation ready',
    },
  ];

  return (
    <section className="border-y border-stone-200/80 bg-white/70 backdrop-blur-md py-8 px-5 sm:px-8 md:px-12 w-full">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 sm:gap-8">
          {trustItems.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className="flex flex-col items-start gap-2 group"
              >
                <div className="h-9 w-9 rounded-xl bg-[#FAF8F2] border border-stone-200 flex items-center justify-center text-[#183C2C] group-hover:bg-[#183C2C] group-hover:text-amber-300 transition-colors shadow-subtle">
                  <Icon className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-stone-900 leading-snug">
                    {item.title}
                  </h4>
                  <p className="text-[11px] text-stone-500 mt-0.5 leading-tight">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
