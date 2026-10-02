import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Flame, Scale, Sparkles, Box, CheckCircle } from 'lucide-react';
import { SVCMLogo } from './SVCMLogo';

export const QualitySection: React.FC = () => {
  const steps = [
    {
      num: '01',
      title: 'Raw Nut Intake & Cutting Assay',
      desc: 'Rigorous sample cracking and moisture testing. Only high-outturn lots meeting KOR 48–52 lbs benchmarks enter our processing floor.',
      icon: Scale,
      metric: 'KOR 48–52 LBS',
    },
    {
      num: '02',
      title: 'Uniform Steam Conditioning',
      desc: 'Precision steam roasting softens the leathery outer shell while leaving the delicate ivory cotyledon completely unscorched.',
      icon: Sparkles,
      metric: 'ZERO-SCORCH STEAM',
    },
    {
      num: '03',
      title: '70°C Borma Dehydration',
      desc: 'The hallmark of Vetapalem craftsmanship. 24–28 hours of hot-air equilibrium detaches the testa skin and establishes <4.5% moisture lock.',
      icon: Flame,
      metric: '< 4.5% MOISTURE',
    },
    {
      num: '04',
      title: 'Dual-Stage Grading Verification',
      desc: 'Mechanical sizing combined with experienced hand-table sorting. Kernels are classified strictly by count per pound (W-180 to W-320).',
      icon: CheckCircle,
      metric: 'ZERO OFF-GRADE TOLERANCE',
    },
    {
      num: '05',
      title: 'Hermetic Nitrogen Packaging',
      desc: 'Filled in 2 x 25 lbs rectangular food-grade tins and purged with inert nitrogen gas to arrest oxidation during long-distance ocean voyages.',
      icon: Box,
      metric: '18-MONTH SHELF LIFE',
    },
    {
      num: '06',
      title: 'Pre-Shipment Container Clearance',
      desc: 'Final container inspection, phytosanitary clearance, and lead sealing at our Nayenipalli factory ready for customs export.',
      icon: ShieldCheck,
      metric: 'APEDA / PHYTOSANITARY READY',
    },
  ];

  return (
    <section id="quality" className="py-20 sm:py-28 px-5 sm:px-8 md:px-12 w-full max-w-7xl mx-auto border-t border-stone-200">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 border border-stone-200 bg-white px-3.5 py-1.5 rounded-full shadow-subtle mb-3">
          <SVCMLogo size={18} />
          <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#8A5A35] font-bold">
            THE SVCM QUALITY PROMISE
          </span>
        </div>

        <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-[#1C1917] leading-tight">
          Quality isn’t a final inspection.{' '}
          <span className="italic text-[#183C2C] block sm:inline">
            It is built into every step.
          </span>
        </h2>
        <p className="mt-4 text-sm sm:text-base text-stone-600 leading-relaxed">
          From the moment raw nuts arrive at our Vetapalem intake gate to the final container seal, our six-pillar quality journey prevents defects before they occur.
        </p>
      </div>

      {/* 6-Stage Visual Quality Journey Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {steps.map((step, idx) => {
          const Icon = step.icon;
          return (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: idx * 0.08 }}
              className="group p-6 sm:p-7 rounded-3xl bg-white border border-stone-200/90 shadow-subtle hover:shadow-elevated hover:border-[#183C2C]/50 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between pb-4 border-b border-stone-100">
                  <span className="font-mono text-xs font-bold text-white bg-[#1C1917] px-3 py-1 rounded-xl">
                    {step.num}
                  </span>
                  <span className="font-mono text-[9px] uppercase tracking-wider text-[#C58A3A] font-bold bg-amber-50 border border-amber-200 px-2 py-0.5 rounded-full">
                    {step.metric}
                  </span>
                </div>

                <div className="my-5 h-12 w-12 rounded-2xl bg-[#FAF8F2] border border-stone-200 flex items-center justify-center text-[#183C2C] group-hover:bg-[#183C2C] group-hover:text-amber-300 transition-colors shadow-subtle">
                  <Icon className="w-6 h-6" />
                </div>

                <h3 className="text-base sm:text-lg font-bold text-stone-900 group-hover:text-[#183C2C] transition-colors leading-snug">
                  {step.title}
                </h3>

                <p className="mt-2 text-xs sm:text-sm text-stone-600 leading-relaxed">
                  {step.desc}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-stone-100 flex items-center justify-between text-xs font-mono text-stone-400 group-hover:text-stone-700 transition-colors">
                <span>Stage Protocol</span>
                <span className="font-bold text-[#8A5A35]">Verified</span>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};
