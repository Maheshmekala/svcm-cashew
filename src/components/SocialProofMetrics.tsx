import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Globe2, CheckCircle2 } from 'lucide-react';
import { Reveal } from './Reveal';
import { SVCMLogo } from './SVCMLogo';

export const SocialProofMetrics: React.FC = () => {
  const metrics = [
    {
      value: '50+',
      unit: 'Years',
      label: 'Vetapalem Processing Heritage',
      desc: 'Generations of artisanal sorting and thermal Borma dehydration expertise.',
      highlight: 'ESTABLISHED ORIGIN',
    },
    {
      value: 'W-180',
      unit: 'King Wholes',
      label: 'Ultra-Jumbo Single Estate Grade',
      desc: '160-180 count per pound. The rarest and largest cashew kernel in world trade.',
      highlight: 'SUPER JUMBO EXPORT',
    },
    {
      value: '< 4.5%',
      unit: 'Moisture',
      label: 'Zero-Rancidity Equilibrium',
      desc: 'Controlled 70°C chamber drying locks in 18-month freshness in nitrogen pack.',
      highlight: 'LAB TESTED GUARANTEE',
    },
    {
      value: '100%',
      unit: 'Whole Kernel',
      label: 'Closed-Loop Facility',
      desc: 'Zero-waste processing recovering high-grade cardanol CNSL industrial bio-liquid.',
      highlight: 'SUSTAINABLE BYPRODUCT',
    },
  ];

  const credentials = [
    { name: 'APEDA Registered', desc: 'Govt. of India Agricultural & Processed Food Export' },
    { name: 'FSSAI Certified', desc: 'Central Food Safety & Quality Management System' },
    { name: 'SGS / TUV Inspection', desc: 'Pre-shipment third-party container seal verification' },
    { name: 'Chennai & Vizag Ports', desc: 'Direct FOB / CIF container ocean freight dispatch' },
  ];

  return (
    <section className="py-16 sm:py-20 px-5 sm:px-8 md:px-12 w-full max-w-7xl mx-auto">
      {/* Top Banner Tag */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-10 border-b border-stone-200">
        <div>
          <Reveal delay={80}>
            <div className="inline-flex items-center gap-2 border border-stone-200 bg-white/90 px-3.5 py-1.5 rounded-full shadow-sm mb-3">
              <SVCMLogo size={18} />
              <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-[#b45309] font-bold">
                COMMERCIAL EXPORT PROVENANCE
              </span>
            </div>
          </Reveal>
          <Reveal delay={160}>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-stone-900">
              Engineered for Global{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#78350f] via-[#b45309] to-[#d97706]">
                Wholesale Buyers.
              </span>
            </h2>
          </Reveal>
        </div>

        <Reveal delay={240}>
          <p className="max-w-md text-sm sm:text-base text-stone-600 leading-relaxed">
            From single-container spot purchases to multi-year FCL volume contracts, our Vetapalem facility guarantees moisture control, zero infestation, and unbroken kernel counts.
          </p>
        </Reveal>
      </div>

      {/* 4 Interactive Metric Cards (21st.dev Style with Framer Motion) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-10">
        {metrics.map((m, idx) => (
          <Reveal key={m.label} delay={120 + idx * 80}>
            <motion.div
              whileHover={{ y: -6, transition: { duration: 0.25 } }}
              className="group relative h-full rounded-2xl border border-stone-200/90 bg-white/95 p-6 backdrop-blur-xl shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_12px_30px_rgba(217,119,6,0.12)] hover:border-amber-400/80 transition-all duration-300 flex flex-col justify-between overflow-hidden"
            >
              {/* Subtle radial amber gradient glow on hover */}
              <div className="absolute -top-16 -right-16 w-32 h-32 rounded-full bg-amber-500/5 group-hover:bg-amber-500/15 blur-2xl transition-all duration-500 pointer-events-none" />

              <div>
                <span className="inline-block font-mono text-[9px] uppercase tracking-[0.18em] text-[#b45309] font-bold bg-amber-50 border border-amber-200/70 px-2.5 py-0.5 rounded-full mb-4">
                  {m.highlight}
                </span>

                <div className="flex items-baseline gap-2">
                  <span className="text-4xl sm:text-5xl font-black tracking-tight text-stone-900 group-hover:text-[#b45309] transition-colors">
                    {m.value}
                  </span>
                  <span className="font-mono text-xs font-semibold text-stone-500 uppercase tracking-wider">
                    {m.unit}
                  </span>
                </div>

                <h3 className="mt-3 text-base font-bold text-stone-800 leading-snug">
                  {m.label}
                </h3>

                <p className="mt-2 text-xs text-stone-600 leading-relaxed">
                  {m.desc}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-stone-100 flex items-center justify-between text-[11px] font-mono text-stone-400 group-hover:text-stone-700 transition-colors">
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Standard Verified</span>
                </span>
                <span className="text-[#b45309] font-bold">0{idx + 1}</span>
              </div>
            </motion.div>
          </Reveal>
        ))}
      </div>

      {/* Accreditations & Ocean Freight Dispatch Bar */}
      <Reveal delay={400}>
        <div className="mt-10 rounded-2xl border border-stone-200/80 bg-stone-900 text-stone-100 p-6 sm:p-8 shadow-xl flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="h-12 w-12 rounded-xl bg-amber-500/20 border border-amber-500/40 flex items-center justify-center shrink-0">
              <Globe2 className="w-6 h-6 text-amber-400" />
            </div>
            <div>
              <span className="font-mono text-[10px] text-amber-400 uppercase tracking-[0.18em] font-bold block">
                GLOBAL EXPORT ACCREDITATION
              </span>
              <h4 className="text-lg sm:text-xl font-bold text-white leading-snug">
                Exporting Certified Premium Cashews Worldwide
              </h4>
              <p className="text-xs text-stone-400 mt-0.5">
                Full documentation provided: Certificate of Origin, Phytosanitary, Fumigation & SGS Quality Seal.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 w-full lg:w-auto">
            {credentials.map((c) => (
              <div
                key={c.name}
                className="bg-white/5 border border-white/10 rounded-xl p-3 text-left backdrop-blur-sm"
              >
                <div className="flex items-center gap-1.5 text-xs font-bold text-amber-300 font-mono">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span className="truncate">{c.name}</span>
                </div>
                <p className="text-[10px] text-stone-400 leading-tight mt-1 truncate">
                  {c.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
};
