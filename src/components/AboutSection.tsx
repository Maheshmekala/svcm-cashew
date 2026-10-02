import React from 'react';
import { motion } from 'framer-motion';
import { SVCMLogo } from './SVCMLogo';
import { asset } from '../utils/assets';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 sm:py-28 px-5 sm:px-8 md:px-12 w-full max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        {/* Left Column: Visual Showcase (6 cols) */}
        <div className="lg:col-span-6 relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative rounded-3xl overflow-hidden border border-stone-200/90 shadow-elevated bg-stone-900 group"
          >
            {/* Primary Image */}
            <div className="aspect-[4/3] sm:aspect-[16/11] overflow-hidden">
              <img
                src={asset('assets/cashew/cashew_nut_and_apple.jpg')}
                alt="Vetapalem Cashew Apple and Hanging Raw Nut Harvest"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </div>

            {/* Bottom Caption Overlay */}
            <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent p-6 text-white">
              <span className="font-mono text-[10px] uppercase tracking-widest text-amber-300 font-bold block mb-1">
                COASTAL ANDHRA TERROIR
              </span>
              <p className="text-xs sm:text-sm text-stone-200 font-medium">
                Fresh tree-ripened drupes harvested at peak maturity in the Vetapalem agro-climatic corridor.
              </p>
            </div>
          </motion.div>

          {/* Overlaid Inset Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="hidden sm:flex absolute -bottom-8 -right-6 rounded-2xl bg-white p-4 shadow-elevated border border-stone-200/90 items-center gap-3.5 max-w-xs"
          >
            <div className="w-14 h-14 rounded-xl overflow-hidden border border-stone-100 shrink-0">
              <img
                src={asset('assets/cashew/cashew_kernel_split_halves.jpg')}
                alt="Pristine Grade W-180 Ivory Cashew Meat"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <span className="font-mono text-[9px] uppercase tracking-wider text-[#C58A3A] font-bold block">
                FINISHED SPECIMEN
              </span>
              <h5 className="text-xs font-bold text-stone-900 leading-snug">
                Pristine Ivory Kernels
              </h5>
              <p className="text-[11px] text-stone-500 mt-0.5">
                Cured to &lt;4.5% moisture with zero scorch.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Right Column: Editorial Narrative (6 cols) */}
        <div className="lg:col-span-6 space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center gap-2 border border-stone-200 bg-white px-3.5 py-1.5 rounded-full shadow-subtle mb-3">
              <SVCMLogo size={18} />
              <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#8A5A35] font-bold">
                ABOUT SRI VENKATESWARA CASHEW
              </span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-[#1C1917] leading-tight">
              Rooted in India's Historic{' '}
              <span className="italic text-[#183C2C]">Cashew Capital.</span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="space-y-4 text-sm sm:text-base text-stone-700 leading-relaxed font-normal"
          >
            <p>
              Located in the Nayenipalli Industrial Area of Vetapalem (Prakasam District, Andhra Pradesh), Sri Venkateswara Cashew Manufacturers (SVCM) operates with an unwavering focus on raw nut outturn, strict hand grading, and thermal preservation.
            </p>
            <p>
              Under the leadership of proprietor <strong>V. Murali Krishna Murthy</strong>, we maintain complete operational accountability. Rather than brokering through third-party intermediaries, every batch is selected, steam-roast conditioned, 70°C Borma cured, and packed inside our own factory premises.
            </p>
          </motion.div>

          {/* Core Manufacturing Philosophies */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
            <div className="p-4 rounded-2xl bg-white border border-stone-200/90 shadow-subtle">
              <span className="font-mono text-[10px] uppercase tracking-wider text-[#183C2C] font-bold block mb-1">
                ORIGIN SELECTION
              </span>
              <h4 className="text-sm font-bold text-stone-900">
                Single-Estate Raw Intake
              </h4>
              <p className="text-xs text-stone-600 mt-1 leading-relaxed">
                Direct intake from proven coastal Andhra groves with thorough cutting tests for high kernel outturn.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-white border border-stone-200/90 shadow-subtle">
              <span className="font-mono text-[10px] uppercase tracking-wider text-[#C58A3A] font-bold block mb-1">
                THERMAL HERITAGE
              </span>
              <h4 className="text-sm font-bold text-stone-900">
                Precision Borma Curing
              </h4>
              <p className="text-xs text-stone-600 mt-1 leading-relaxed">
                Controlled 24–28 hour hot-air chamber dehydration loosening the testa skin without discoloring the kernel.
              </p>
            </div>
          </div>

          {/* Proprietor Quote */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="p-5 rounded-2xl bg-[#FAF8F2] border-l-4 border-[#C58A3A] border border-stone-200 text-stone-800 text-xs sm:text-sm italic leading-relaxed"
          >
            "A global buyer opening an SVCM container in Dubai, Rotterdam, or London expects identical crunch, ivory color, and moisture stability. We achieve that by managing every step ourselves."
            <div className="mt-2.5 not-italic font-mono text-[11px] font-bold text-stone-900 flex items-center justify-between">
              <span>— V. Murali Krishna Murthy, Proprietor</span>
              <span className="text-stone-500 font-normal">Vetapalem, India</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
