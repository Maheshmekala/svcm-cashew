import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, Sparkles, ZoomIn, Factory, Flame, Box } from 'lucide-react';
import { Reveal } from './Reveal';
import { SVCMLogo } from './SVCMLogo';
import { asset } from '../utils/assets';

interface ProcessingJourneyProps {
  onOpenModal?: (tab: 'crosscut' | 'loupe' | 'video') => void;
}

export const ProcessingJourney: React.FC<ProcessingJourneyProps> = ({ onOpenModal }) => {
  const steps = [
    {
      num: '01',
      icon: Factory,
      title: 'Raw Nut Sourcing & Outturn Verification',
      subtitle: 'KOR 48–52 LBS BENCHMARK',
      desc: 'Selected from certified organic coastal Andhra plantations and high-outturn single estates. Each lot undergoes moisture and cutting tests before intake.',
      metric: '52 LBS KOR',
      tag: 'ORIGIN AUDIT',
      image: asset('assets/cashew/cashew_nut_and_apple.jpg'),
    },
    {
      num: '02',
      icon: Sparkles,
      title: 'Steam Conditioning & Controlled Shelling',
      subtitle: 'ZERO-BREAKAGE CASHEW SHELLING',
      desc: 'Even steam roasting loosens the woody endocarp without scorching the seed. Precision foot-pedal mechanical cutters ensure intact whole cotyledons.',
      metric: '98.5% WHOLES',
      tag: 'MECHANICAL CUT',
      image: asset('assets/cashew/cashew_shell_splitting.jpg'),
    },
    {
      num: '03',
      icon: Flame,
      title: '70°C Borma Hot-Air Dehydration',
      subtitle: 'VETAPALEM THERMAL HERITAGE',
      desc: 'Chamber curing for 24-28 hours at strictly 70°C. Loosens the tannin-rich testa skin naturally and drops core moisture to safe export levels.',
      metric: '< 4.5% MOISTURE',
      tag: 'BORMA EQUILIBRIUM',
      image: asset('assets/cashew/cashew_apple_skin.jpg'),
    },
    {
      num: '04',
      icon: Box,
      title: 'Optoelectronic Grading & Nitrogen Tins',
      subtitle: 'HERMETIC VACUUM GAS-FLUSH',
      desc: 'Laser sorting by kernel count per pound (W-180 to W-320). Packed in 2 x 25 lbs food-grade rectangular tins with nitrogen purge for 18-month shelf stability.',
      metric: '18-MO SHELF LIFE',
      tag: 'NITROGEN SEAL',
      image: asset('assets/cashew/cashew_kernel_split_halves.jpg'),
    },
  ];

  const handleScrollToInquiry = () => {
    const el = document.getElementById('inquiry');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="processing" className="py-20 sm:py-28 px-5 sm:px-8 md:px-12 w-full max-w-7xl mx-auto">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-10 border-b border-stone-200">
        <div>
          <Reveal delay={80}>
            <div className="inline-flex items-center gap-2 border border-stone-200 bg-white/90 px-3.5 py-1.5 rounded-full shadow-sm mb-3">
              <SVCMLogo size={18} />
              <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-[#b45309] font-bold">
                PRECISION REFINERY PIPELINE
              </span>
            </div>
          </Reveal>

          <Reveal delay={160}>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-stone-900">
              The Vetapalem 4-Pillar{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#78350f] via-[#b45309] to-[#d97706]">
                Processing Standard.
              </span>
            </h2>
          </Reveal>
        </div>

        <Reveal delay={240}>
          <div className="flex items-center gap-3">
            <motion.button
              type="button"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => onOpenModal && onOpenModal('crosscut')}
              className="flex items-center gap-2 rounded-xl border border-stone-300 bg-white hover:bg-stone-50 text-stone-800 px-4 py-2.5 text-xs font-mono font-semibold transition-all cursor-pointer shadow-sm"
            >
              <Sparkles className="w-4 h-4 text-[#b45309]" />
              <span>Crosscut Anatomy</span>
            </motion.button>

            <motion.button
              type="button"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => onOpenModal && onOpenModal('loupe')}
              className="flex items-center gap-2 rounded-xl border border-stone-300 bg-white hover:bg-stone-50 text-stone-800 px-4 py-2.5 text-xs font-mono font-semibold transition-all cursor-pointer shadow-sm"
            >
              <ZoomIn className="w-4 h-4 text-[#b45309]" />
              <span>Macro Loupe</span>
            </motion.button>
          </div>
        </Reveal>
      </div>

      {/* 4-Pillar Grid with Botanical Specimen Photography */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 pt-10">
        {steps.map((step, idx) => {
          return (
            <Reveal key={step.num} delay={100 + idx * 80}>
              <motion.div
                whileHover={{ y: -6, transition: { duration: 0.25 } }}
                className="group relative h-full rounded-3xl border border-stone-200/90 bg-white/95 p-5 sm:p-6 backdrop-blur-xl shadow-[0_4px_25px_rgba(0,0,0,0.03)] hover:shadow-[0_16px_35px_rgba(217,119,6,0.12)] hover:border-amber-400/80 transition-all duration-300 flex flex-col justify-between overflow-hidden"
              >
                <div>
                  <div className="flex items-center justify-between pb-4 border-b border-stone-100">
                    <span className="font-mono text-xs font-black text-white bg-stone-900 px-3 py-1 rounded-xl">
                      {step.num}
                    </span>
                    <span className="font-mono text-[9px] uppercase tracking-wider text-[#b45309] font-bold bg-amber-50 border border-amber-200/70 px-2 py-0.5 rounded-full">
                      {step.tag}
                    </span>
                  </div>

                  {/* Botanical Specimen Photography */}
                  <div className="my-4 aspect-[16/10] rounded-2xl overflow-hidden border border-stone-200 bg-stone-950 shadow-inner group-hover:border-amber-300 transition-colors">
                    <img
                      src={step.image}
                      alt={step.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>

                  <span className="font-mono text-[10px] text-stone-500 font-bold uppercase tracking-wider block">
                    {step.subtitle}
                  </span>

                  <h3 className="text-base sm:text-lg font-bold text-stone-900 leading-snug mt-1">
                    {step.title}
                  </h3>

                  <p className="mt-2.5 text-xs text-stone-600 leading-relaxed">
                    {step.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-stone-100 flex items-center justify-between font-mono text-xs">
                  <span className="text-stone-500 font-medium">Standard:</span>
                  <span className="font-bold text-stone-900 group-hover:text-[#b45309] transition-colors">
                    {step.metric}
                  </span>
                </div>
              </motion.div>
            </Reveal>
          );
        })}
      </div>

      {/* Bottom Dispatch CTA Banner */}
      <Reveal delay={450}>
        <div className="mt-12 rounded-3xl bg-stone-900 text-stone-100 p-8 sm:p-10 shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-8 border border-stone-800 relative overflow-hidden">
          <div className="space-y-2 text-center lg:text-left">
            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-amber-400 font-bold block">
              EXPORT CONTAINER ALLOCATION
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold text-white">
              Ready to Lock Your Next Consignment?
            </h3>
            <p className="text-sm text-stone-400 max-w-xl">
              Get direct factory pricing from proprietor V. Murali Krishna Murthy. We furnish complete export documentation and handle container stuffing at Nayenipalli plant.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 shrink-0">
            <motion.button
              type="button"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.98 }}
              onClick={handleScrollToInquiry}
              className="flex items-center gap-2 rounded-xl bg-gradient-to-r from-[#d97706] to-[#b45309] px-7 py-4 text-xs sm:text-sm font-semibold text-white shadow-lg cursor-pointer"
            >
              <span>Submit Export RFQ</span>
              <ChevronRight className="w-4 h-4 stroke-[2.5]" />
            </motion.button>

            <motion.a
              href="tel:9246467237"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="flex items-center gap-2 rounded-xl border border-stone-700 bg-stone-800 hover:bg-stone-700 px-6 py-4 text-xs sm:text-sm font-medium text-stone-200 transition-colors cursor-pointer"
            >
              <span>Call: +91 9246467237</span>
            </motion.a>
          </div>
        </div>
      </Reveal>
    </section>
  );
};
