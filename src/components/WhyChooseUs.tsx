import React from 'react';
import { motion } from 'framer-motion';
import { UserCheck, MapPin, Flame, Box, ShieldCheck, Clock } from 'lucide-react';
import { SVCMLogo } from './SVCMLogo';

export const WhyChooseUs: React.FC = () => {
  const benefits = [
    {
      icon: UserCheck,
      title: 'Direct Manufacturer Accountability',
      desc: 'Communicate directly with proprietor V. Murali Krishna Murthy. Zero broker layers ensure transparent factory spot pricing and single-point responsibility.',
    },
    {
      icon: MapPin,
      title: 'Single-Origin Coastal Terroir',
      desc: 'Sourced from high-outturn coastal Andhra groves around Vetapalem (KOR 48–52 lbs benchmark), delivering natural ivory color and dense crunch.',
    },
    {
      icon: Flame,
      title: 'Precision 70°C Borma Curing',
      desc: '24 to 28 hours of continuous hot-air equilibrium detaches the testa skin naturally while locking core moisture strictly under 4.5%.',
    },
    {
      icon: Box,
      title: 'Hermetic Nitrogen-Flush Packing',
      desc: 'Packed in 2 x 25 lbs rectangular food-grade tins purged with high-purity nitrogen, guaranteeing an 18-month shelf life without rancidity.',
    },
    {
      icon: ShieldCheck,
      title: 'Strict Calibration & Broken Control',
      desc: 'Rigorous manual and mechanical sizing guarantees count-per-pound conformity across W-180 King to W-320 with maximum 5% broken tolerance.',
    },
    {
      icon: Clock,
      title: 'Rapid Proforma Turnaround',
      desc: 'Receive formal FOB Indian port or CIF destination port quotations with container sailing schedules within 2 to 4 business hours.',
    },
  ];

  return (
    <section id="why-us" className="py-20 sm:py-28 px-5 sm:px-8 md:px-12 w-full max-w-7xl mx-auto border-t border-stone-200">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 border border-stone-200 bg-white px-3.5 py-1.5 rounded-full shadow-subtle mb-3">
          <SVCMLogo size={18} />
          <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#8A5A35] font-bold">
            COMMERCIAL ADVANTAGES
          </span>
        </div>

        <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-[#1C1917] leading-tight">
          Why International Buyers{' '}
          <span className="italic text-[#183C2C]">Partner with SVCM.</span>
        </h2>
        <p className="mt-4 text-sm sm:text-base text-stone-600 leading-relaxed">
          Serious B2B buyers require reliable supply, transparent communication, and uncompromised processing standards. Here is what sets our Vetapalem factory apart.
        </p>
      </div>

      {/* 6 Value Propositions Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {benefits.map((benefit, idx) => {
          const Icon = benefit.icon;
          return (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: idx * 0.08 }}
              className="p-7 rounded-3xl bg-white border border-stone-200/90 shadow-subtle hover:shadow-elevated hover:border-[#183C2C]/50 transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="h-12 w-12 rounded-2xl bg-[#FAF8F2] border border-stone-200 flex items-center justify-center text-[#183C2C] group-hover:bg-[#183C2C] group-hover:text-amber-300 transition-colors shadow-subtle mb-5">
                  <Icon className="w-6 h-6" />
                </div>

                <h3 className="text-base sm:text-lg font-bold text-stone-900 group-hover:text-[#183C2C] transition-colors leading-snug">
                  {benefit.title}
                </h3>

                <p className="mt-2.5 text-xs sm:text-sm text-stone-600 leading-relaxed">
                  {benefit.desc}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-stone-100 flex items-center justify-between text-xs font-mono text-stone-400">
                <span>Core Pillar</span>
                <span className="font-semibold text-emerald-700">Guaranteed</span>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};
