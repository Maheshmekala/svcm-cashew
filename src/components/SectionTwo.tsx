import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, MapPin, ZoomIn, Sparkles } from 'lucide-react';
import { Reveal } from './Reveal';
import { SVCMLogo } from './SVCMLogo';

interface SectionTwoProps {
  onOpenModal?: (tab: 'crosscut' | 'loupe') => void;
}

export const SectionTwo: React.FC<SectionTwoProps> = ({ onOpenModal }) => {
  const capabilities = [
    {
      num: '01',
      title: 'The CNSL Honeycomb Matrix',
      body: 'Alveolar mesocarp housing cardanol and anacardic acid, recovered with closed-loop eco technology for high-grade industrial resins.',
      img: 'https://upload.wikimedia.org/wikipedia/commons/3/38/Cashew_fruit.jpg',
      tag: 'CNSL BYPRODUCT',
      scrollTarget: 0.55,
      modalTab: 'crosscut' as const,
    },
    {
      num: '02',
      title: 'Vetapalem Borma Dehydration',
      body: 'Controlled 70°C chamber drying cleanly releases the tannin-dense testa pellicle without scorching, locking in 4.5% export moisture.',
      img: 'https://upload.wikimedia.org/wikipedia/commons/6/68/Young_cashew_nuts.jpg',
      tag: '70°C BORMA PEEL',
      scrollTarget: 0.72,
      modalTab: 'crosscut' as const,
    },
    {
      num: '03',
      title: 'Export Wholes (W-180 to W-320)',
      body: 'Pristine creamy ivory cotyledons sorted by world export standards (W-180 King, W-210, W-240, W-320) and nitrogen-flush packed.',
      img: 'https://images.unsplash.com/photo-1509912760195-4f6cfd8cce2c?q=80&w=400',
      tag: 'GRADE W-180 JUMBO',
      scrollTarget: 0.95,
      modalTab: 'loupe' as const,
    },
  ];

  const handleRowClick = (target: number) => {
    const scrollHeight = document.documentElement.scrollHeight;
    const innerHeight = window.innerHeight;
    window.scrollTo({ top: target * (scrollHeight - innerHeight), behavior: 'smooth' });
  };

  const handleScrollToInquiry = () => {
    const el = document.getElementById('inquiry');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="supports-[height:100svh]:min-h-[100svh] min-h-screen flex flex-col justify-between pt-24 sm:pt-28 pb-12 md:pb-16 px-5 sm:px-8 md:px-12 w-full max-w-7xl mx-auto">
      {/* Top row */}
      <div className="flex flex-col gap-6 sm:flex-row justify-between sm:items-start pt-4">
        {/* Left badge with SVCM Logo */}
        <Reveal delay={120}>
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="inline-flex items-center gap-2.5 border border-stone-200/90 bg-white/85 px-3.5 py-1.5 rounded-full backdrop-blur-md shadow-sm"
          >
            <SVCMLogo size={20} />
            <span className="font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.16em] text-[#b45309] font-bold">
              VETAPALEM PROCESSING HERITAGE • CLOSED-LOOP FACILITY
            </span>
          </motion.div>
        </Reveal>

        {/* Right copy */}
        <Reveal delay={220} className="max-w-md sm:text-right">
          <p className="text-base sm:text-lg leading-relaxed text-stone-700">
            Decades of artisanal grading and precision thermal drying make <span className="text-[#b45309] font-semibold">Sri Venkateswara Cashew Manufacturers</span> a trusted export partner across global markets.
          </p>
        </Reveal>
      </div>

      {/* Bottom area */}
      <div className="flex-1 flex flex-col justify-end gap-12 md:flex-row md:items-end md:justify-between md:gap-16 pt-12">
        {/* Left column */}
        <div className="max-w-xl">
          <Reveal delay={180}>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-normal leading-[1.06] tracking-tight text-stone-900">
              The Anatomy of
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#78350f] via-[#b45309] to-[#d97706] font-medium">
                Vetapalem Gold.
              </span>
            </h2>
          </Reveal>

          <Reveal delay={320}>
            <p className="mt-5 max-w-md text-sm sm:text-base text-stone-600 leading-relaxed">
              From container-scale Raw Cashew Nut (RCN) imports to precision mechanical shelling and vacuum-sealed nitrogen packing, our closed-loop facility delivers 100% whole kernel integrity.
            </p>
          </Reveal>

          {/* CTAs & Modal Triggers (Framer Motion 21st.dev style) */}
          <Reveal delay={420}>
            <div className="mt-8 flex flex-wrap gap-3">
              <motion.button
                type="button"
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.98 }}
                onClick={handleScrollToInquiry}
                className="flex items-center gap-2 rounded-xl bg-gradient-to-r from-[#d97706] to-[#b45309] px-6 py-3.5 text-xs sm:text-sm font-semibold text-white hover:from-[#b45309] hover:to-[#92400e] transition-all duration-300 shadow-[0_10px_25px_-5px_rgba(217,119,6,0.35)] cursor-pointer"
              >
                <span>Request Export RFQ</span>
                <ChevronRight className="w-4 h-4 stroke-[2.5]" />
              </motion.button>

              {onOpenModal && (
                <>
                  <motion.button
                    type="button"
                    whileHover={{ scale: 1.03, y: -1 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => onOpenModal('crosscut')}
                    className="flex items-center gap-2 rounded-xl border border-stone-300 bg-white/90 backdrop-blur-md px-4 py-3.5 text-xs sm:text-sm font-medium text-stone-800 hover:bg-white hover:border-amber-400 transition-all duration-300 cursor-pointer shadow-sm"
                  >
                    <Sparkles className="w-4 h-4 text-[#b45309]" />
                    <span>⚡ Crosscut Inspector</span>
                  </motion.button>

                  <motion.button
                    type="button"
                    whileHover={{ scale: 1.03, y: -1 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => onOpenModal('loupe')}
                    className="flex items-center gap-2 rounded-xl border border-stone-300 bg-white/90 backdrop-blur-md px-4 py-3.5 text-xs sm:text-sm font-medium text-stone-800 hover:bg-white hover:border-amber-400 transition-all duration-300 cursor-pointer shadow-sm"
                  >
                    <ZoomIn className="w-4 h-4 text-[#b45309]" />
                    <span>🔍 3.5x Macro Loupe</span>
                  </motion.button>
                </>
              )}
            </div>
          </Reveal>
        </div>

        {/* Right — frosted capability panel */}
        <div className="w-full max-w-md rounded-2xl border border-stone-200/90 bg-white/95 backdrop-blur-md px-5 sm:px-6 shadow-[0_12px_40px_rgba(0,0,0,0.06)]">
          {/* Card Header with SVCM Logo */}
          <div className="py-4 border-b border-stone-200/80 flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <SVCMLogo size={26} />
              <span className="font-mono text-[10px] uppercase tracking-wider text-stone-700 font-bold">
                SVCM Processing Standards
              </span>
            </div>
            <span className="font-mono text-[9px] text-[#b45309] font-bold uppercase bg-amber-50 px-2 py-0.5 rounded-full border border-amber-200">
              Zero Waste
            </span>
          </div>

          {capabilities.map((item, idx) => (
            <Reveal
              key={item.num}
              delay={300 + idx * 110}
              className={`flex items-start gap-4 py-5 group cursor-pointer ${
                idx !== capabilities.length - 1 ? 'border-b border-stone-200/70' : ''
              }`}
            >
              {/* Thumbnail with zoom effect */}
              <div
                onClick={() => handleRowClick(item.scrollTarget)}
                className="relative h-14 w-14 rounded-lg overflow-hidden shrink-0 border border-stone-200 bg-stone-100 shadow-sm group-hover:border-[#d97706] transition-colors duration-300"
              >
                <img
                  src={item.img}
                  alt={item.title}
                  className="h-full w-full object-cover group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                />
                <span className="absolute bottom-0 inset-x-0 bg-stone-900/85 text-[8px] font-mono text-center text-amber-300 py-0.5 uppercase tracking-wider font-semibold">
                  {item.tag}
                </span>
              </div>

              {/* Content */}
              <div
                className="flex-1"
                onClick={() => handleRowClick(item.scrollTarget)}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-[11px] tracking-[0.15em] text-[#b45309] font-bold">
                      {item.num}
                    </span>
                    <h3 className="text-base sm:text-lg font-semibold text-stone-900 group-hover:text-[#b45309] transition-colors duration-300">
                      {item.title}
                    </h3>
                  </div>
                  <ChevronRight className="h-4 w-4 text-stone-400 group-hover:translate-x-1 group-hover:text-[#b45309] transition-all duration-300 shrink-0" />
                </div>
                <p className="mt-1 text-sm leading-relaxed text-stone-600">
                  {item.body}
                </p>
              </div>
            </Reveal>
          ))}

          {/* Plant address footer row inside card */}
          <div className="py-4 border-t border-stone-200/80 flex items-start gap-2 text-[11px] text-stone-500 font-mono">
            <MapPin className="w-3.5 h-3.5 text-[#b45309] shrink-0 mt-0.5" />
            <span>Nayenipalli Industrial Area, Sarvodaya Colony, Vetapalem-523187, A.P.</span>
          </div>
        </div>
      </div>
    </section>
  );
};
