import React from 'react';
import { motion } from 'framer-motion';
import { Factory, Sparkles, Flame, CheckCircle, Box, Truck, ShieldCheck } from 'lucide-react';
import { SVCMLogo } from './SVCMLogo';
import { asset } from '../utils/assets';

export const ManufacturingProcess: React.FC = () => {
  const steps = [
    {
      step: '01',
      title: 'Raw Sourcing & Outturn Verification',
      subtitle: 'KOR 48–52 LBS BENCHMARK',
      desc: 'Selective intake from coastal Andhra plantations. Strict moisture assays and cutting tests establish the kernel outturn ratio before processing begins.',
      image: asset('assets/cashew/cashew_nut_and_apple.jpg'),
      badge: 'ORIGIN INTAKE',
      icon: Factory,
    },
    {
      step: '02',
      title: 'Steam Conditioning & Controlled Shelling',
      subtitle: 'ZERO-BREAKAGE DEHISCENCE',
      desc: 'Uniform low-pressure steam roasting loosens the woody pericarp shell without scorching the ivory kernel inside. Foot-pedal cutters gently split the shell.',
      image: asset('assets/cashew/cashew_shell_splitting.jpg'),
      badge: 'SHELL SEPARATION',
      icon: Sparkles,
    },
    {
      step: '03',
      title: '70°C Borma Hot-Air Dehydration',
      subtitle: 'VETAPALEM THERMAL HERITAGE',
      desc: 'Kernels are cured in specialized hot-air Borma chambers for 24–28 hours at strictly 70°C. This naturally detaches the papery testa skin and drops moisture below 4.5%.',
      image: asset('assets/cashew/cashew_apple_skin.jpg'),
      badge: 'THERMAL CURING',
      icon: Flame,
    },
    {
      step: '04',
      title: 'Peeling & Manual Testa Removal',
      subtitle: 'CLEAN IVORY KERNEL UNMASKING',
      desc: 'Trained artisans gently peel the loosened testa skin, preserving the fragile embryonic axis and revealing the natural creamy ivory kernel sheen.',
      image: asset('assets/cashew/cashew_kernel_split_halves.jpg'),
      badge: 'PEELING & CLEANING',
      icon: CheckCircle,
    },
    {
      step: '05',
      title: 'Precision Size & Count Grading',
      subtitle: 'W-180 KING TO W-320 STANDARD',
      desc: 'Graded according to the international whole kernel count per pound (160–180 for King Wholes down to 300–320 for Standard Wholes). Broken kernels are cleanly separated.',
      image: asset('assets/cashew/cashew_kernel_embryo_macro.jpg'),
      badge: 'CALIBRATION',
      icon: ShieldCheck,
    },
    {
      step: '06',
      title: 'Hermetic Nitrogen-Flush Packing',
      subtitle: '2 x 25 LBS FOOD-GRADE TINS',
      desc: 'Kernels are loaded into rectangular food-grade tins, subjected to full vacuum evacuation, and purged with 99.9% pure inert nitrogen before airtight hermetic seaming.',
      image: asset('assets/cashew/cashew_kernel_split_halves.jpg'),
      badge: 'NITROGEN SEAL',
      icon: Box,
    },
    {
      step: '07',
      title: 'Container Stuffing & Ocean Dispatch',
      subtitle: 'FOB / CIF WORLDWIDE DELIVERY',
      desc: 'Master cartons are palletized and containerized at the Nayenipalli plant, routed to Chennai or Vizag deepwater ports with full phytosanitary clearance.',
      image: asset('assets/cashew/cashew_nut_and_apple.jpg'),
      badge: 'PORT EXPEDITION',
      icon: Truck,
    },
  ];

  return (
    <section id="process" className="py-20 sm:py-28 px-5 sm:px-8 md:px-12 w-full max-w-7xl mx-auto border-t border-stone-200">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-stone-200">
        <div>
          <div className="inline-flex items-center gap-2 border border-stone-200 bg-white px-3.5 py-1.5 rounded-full shadow-subtle mb-3">
            <SVCMLogo size={18} />
            <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#8A5A35] font-bold">
              MANUFACTURING EXCELLENCE
            </span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-[#1C1917]">
            The 7-Step Vetapalem{' '}
            <span className="italic text-[#183C2C]">Manufacturing Process.</span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-stone-600 max-w-2xl">
            A precise synthesis of time-honored Indian thermal curing and strict international quality calibration.
          </p>
        </div>

        <div className="shrink-0 font-mono text-xs text-stone-500">
          Factory Location: <strong>Nayenipalli, Vetapalem</strong>
        </div>
      </div>

      {/* Timeline Process Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 pt-12">
        {steps.map((item, idx) => {
          const Icon = item.icon;
          return (
            <motion.div
              key={item.step}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: idx * 0.07 }}
              className="group p-5 rounded-3xl bg-white border border-stone-200/90 shadow-subtle hover:shadow-elevated hover:border-[#183C2C]/50 transition-all flex flex-col justify-between"
            >
              <div>
                {/* Header step counter & badge */}
                <div className="flex items-center justify-between pb-3.5 border-b border-stone-100">
                  <span className="font-mono text-xs font-bold text-white bg-[#183C2C] px-3 py-1 rounded-xl">
                    STAGE {item.step}
                  </span>
                  <span className="font-mono text-[9px] uppercase tracking-wider text-[#8A5A35] font-bold bg-amber-50 border border-amber-200 px-2 py-0.5 rounded-full">
                    {item.badge}
                  </span>
                </div>

                {/* Botanical Specimen Thumbnail */}
                <div className="my-4 aspect-[16/10] rounded-2xl overflow-hidden border border-stone-100 bg-stone-50 shadow-inner group-hover:border-amber-300 transition-colors">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                <span className="font-mono text-[10px] text-[#C58A3A] font-bold uppercase tracking-wider block">
                  {item.subtitle}
                </span>

                <h3 className="text-base font-bold text-stone-900 group-hover:text-[#183C2C] transition-colors leading-snug mt-1">
                  {item.title}
                </h3>

                <p className="mt-2 text-xs text-stone-600 leading-relaxed">
                  {item.desc}
                </p>
              </div>

              <div className="mt-5 pt-3.5 border-t border-stone-100 flex items-center justify-between text-xs font-mono text-stone-400">
                <span className="flex items-center gap-1.5 text-stone-500">
                  <Icon className="w-3.5 h-3.5 text-[#183C2C]" />
                  <span>Protocol {item.step}</span>
                </span>
                <span className="text-emerald-700 font-semibold">Active Control</span>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};
