import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, Phone, ArrowDown, CreditCard, X, MapPin, Mail } from 'lucide-react';
import { SVCMLogo } from './SVCMLogo';
import { asset } from '../utils/assets';

export const HeroSection: React.FC = () => {
  const [showCardModal, setShowCardModal] = useState(false);

  const handleScrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const navOffset = 80;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section id="hero" className="pt-28 sm:pt-36 lg:pt-40 pb-16 sm:pb-24 px-5 sm:px-8 md:px-12 w-full max-w-7xl mx-auto">
      {/* 1. Origin & Heritage Eyebrow */}
      <div className="flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2.5 border border-[#183C2C]/20 bg-[#FAF8F2]/90 backdrop-blur-md px-4 py-1.5 rounded-full shadow-subtle mb-6"
        >
          <SVCMLogo size={20} className="shrink-0" />
          <span className="font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.2em] text-[#183C2C] font-semibold">
            VETAPALEM, ANDHRA PRADESH • DIRECT FACTORY EXPORTER
          </span>
          <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse" />
        </motion.div>

        {/* 2. Bold Editorial Serif Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-7.5xl font-medium leading-[1.08] tracking-tight text-[#1C1917] max-w-5xl"
        >
          Premium Cashews.{' '}
          <span className="italic font-normal text-[#183C2C] block sm:inline">
            Crafted in India.
          </span>{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8A5A35] via-[#C58A3A] to-[#B0772C]">
            Trusted Worldwide.
          </span>
        </motion.h1>

        {/* 3. Supporting B2B Statement */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-6 max-w-2xl text-base sm:text-lg text-stone-700 leading-relaxed font-normal"
        >
          Sri Venkateswara Cashew Manufacturers (SVCM) provides single-origin raw cashew processing from the historic cashew capital of Vetapalem. We refine whole kernel grades from King W-180 to W-320 with closed-loop 70°C Borma moisture dehydration and vacuum nitrogen-flush export packing.
        </motion.p>

        {/* 4. Primary & Secondary B2B Conversion Actions */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-8 flex flex-wrap items-center justify-center gap-3 sm:gap-4"
        >
          {/* Primary CTA */}
          <motion.button
            type="button"
            whileHover={{ scale: 1.03, y: -1 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => handleScrollTo('contact')}
            className="flex items-center gap-2 rounded-xl bg-[#183C2C] hover:bg-[#0F2F22] text-white px-7 py-3.5 sm:py-4 text-xs sm:text-sm font-semibold transition-all duration-200 shadow-md shadow-forest-900/15 cursor-pointer"
          >
            <span>Request a Quote</span>
            <ChevronRight className="w-4 h-4 text-amber-300 stroke-[2.5]" />
          </motion.button>

          {/* Secondary CTA */}
          <motion.button
            type="button"
            whileHover={{ scale: 1.02, y: -1 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => handleScrollTo('products')}
            className="flex items-center gap-2 rounded-xl border border-stone-300 bg-white hover:bg-stone-50 px-6 py-3.5 sm:py-4 text-xs sm:text-sm font-semibold text-stone-800 transition-all shadow-subtle cursor-pointer"
          >
            <span>Explore Products</span>
            <ArrowDown className="w-3.5 h-3.5 text-stone-500" />
          </motion.button>

          {/* Direct Phone Dial */}
          <motion.a
            href="tel:9246467237"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="flex items-center gap-2 rounded-xl border border-stone-200 bg-stone-100/70 hover:bg-stone-100 px-5 py-3.5 sm:py-4 text-xs sm:text-sm font-medium text-stone-800 transition-colors"
          >
            <Phone className="w-4 h-4 text-[#C58A3A]" />
            <span className="font-mono text-xs">+91 9246467237</span>
          </motion.a>
        </motion.div>
      </div>

      {/* 5. Cinematic Visual Showcase: High-Definition Botanical Video & Specimen Cards */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.4 }}
        className="mt-12 sm:mt-16 rounded-3xl border border-stone-300/80 bg-stone-950 p-4 sm:p-5 shadow-2xl overflow-hidden relative group"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-center">
          {/* Main 16:9 Botanical Motion Player */}
          <div className="lg:col-span-8 relative aspect-[16/9] rounded-2xl overflow-hidden bg-black border border-stone-800 shadow-inner flex items-center justify-center">
            <video
              src={asset('assets/cashew/anatomy_displayed.mp4')}
              poster={asset('assets/cashew/cashew_fruit_rotating.jpg')}
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-contain"
            />

            <div className="absolute top-3 left-3 bg-black/75 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/20 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="font-mono text-[9px] sm:text-[10px] text-white font-bold tracking-wider">
                BOTANICAL DISSECTION • VETAPALEM PLANT
              </span>
            </div>

            <div className="absolute bottom-3 right-3 bg-black/70 backdrop-blur-md px-3 py-1 rounded-lg border border-white/10 text-stone-300 font-mono text-[10px]">
              Natural Pericarp to Cotyledon
            </div>
          </div>

          {/* Right Column: Specimen Stages */}
          <div className="lg:col-span-4 flex flex-col gap-3">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-4 flex items-center gap-3.5 hover:bg-white/10 transition-colors">
              <img
                src={asset('assets/cashew/cashew_nut_and_apple.jpg')}
                alt="Cashew Fruit and Hanging Raw Nut"
                className="w-16 h-16 rounded-xl object-cover border border-white/20 shrink-0"
              />
              <div>
                <span className="font-mono text-[9px] uppercase tracking-wider text-amber-400 font-bold block">
                  ORIGIN HARVEST
                </span>
                <h4 className="text-xs sm:text-sm font-bold text-white leading-snug">
                  Raw Cashew &amp; Hanging Drupe
                </h4>
                <p className="text-[11px] text-stone-400 mt-0.5">
                  Single-estate coastal Andhra plantations.
                </p>
              </div>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-4 flex items-center gap-3.5 hover:bg-white/10 transition-colors">
              <img
                src={asset('assets/cashew/cashew_kernel_split_halves.jpg')}
                alt="Grade W-180 Ivory Cashew Kernel"
                className="w-16 h-16 rounded-xl object-cover border border-white/20 shrink-0"
              />
              <div>
                <span className="font-mono text-[9px] uppercase tracking-wider text-amber-400 font-bold block">
                  FINISHED EXPORT WHOLE
                </span>
                <h4 className="text-xs sm:text-sm font-bold text-white leading-snug">
                  King Cotyledon Grade W-180
                </h4>
                <p className="text-[11px] text-stone-400 mt-0.5">
                  &lt;4.5% moisture with nitrogen lock.
                </p>
              </div>
            </div>

            <div className="rounded-2xl border border-white/10 bg-[#183C2C]/40 p-3.5 text-xs text-stone-300 flex items-center justify-between font-mono">
              <span className="text-stone-400">Packaging Format:</span>
              <span className="font-bold text-amber-300">2 x 25 lbs Vacuum Tins</span>
            </div>
          </div>
        </div>
      </motion.div>

      {/* 6. Spotlight Grid: Proprietor Exporter Profile & Factory Coordinates */}
      <div className="mt-12 sm:mt-16 grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        {/* Left Column (7 cols): Official Exporter Card with SVCM Logo & Visiting Card */}
        <div className="lg:col-span-7">
          <motion.div
            whileHover={{ y: -3, transition: { duration: 0.25 } }}
            className="rounded-3xl bg-white/95 p-6 sm:p-8 backdrop-blur-xl border border-stone-200 shadow-elevated transition-all flex flex-col justify-between h-full relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />

            <div>
              {/* Header: Official SVCM Logo + Proprietor Designation */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-stone-200/80 pb-5">
                <div className="flex items-center gap-3.5">
                  <SVCMLogo size={50} className="shrink-0" />
                  <div>
                    <span className="font-mono text-[9px] uppercase tracking-[0.18em] text-[#C58A3A] font-bold block">
                      OFFICIAL EXPORT DESK • PROPRIETOR
                    </span>
                    <h3 className="text-xl font-bold text-stone-900 leading-snug">
                      V. Murali Krishna Murthy
                    </h3>
                    <p className="text-xs text-stone-600 font-medium">
                      Sri Venkateswara Cashew Manufacturers
                    </p>
                  </div>
                </div>

                {/* View Visiting Card Button */}
                <motion.button
                  type="button"
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.96 }}
                  onClick={() => setShowCardModal(true)}
                  className="flex items-center gap-1.5 bg-amber-50 hover:bg-amber-100 border border-amber-200 px-3.5 py-2 rounded-xl text-xs font-mono text-[#8A5A35] font-semibold transition-all cursor-pointer shadow-subtle self-start sm:self-auto shrink-0"
                >
                  <CreditCard className="w-4 h-4 text-[#C58A3A]" />
                  <span>View Visiting Card</span>
                </motion.button>
              </div>

              {/* Direct Telecommunication Directory */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 py-5 text-xs text-stone-700 border-b border-stone-200/80">
                <div className="space-y-2 font-mono">
                  <a
                    href="tel:9246467237"
                    className="flex items-center gap-2 hover:text-[#C58A3A] transition-colors"
                  >
                    <Phone className="w-3.5 h-3.5 text-[#C58A3A] shrink-0" />
                    <span className="font-medium text-stone-900">Cell: 9246467237</span>
                  </a>
                  <a
                    href="tel:9246467406"
                    className="flex items-center gap-2 hover:text-[#C58A3A] transition-colors"
                  >
                    <Phone className="w-3.5 h-3.5 text-[#C58A3A] shrink-0" />
                    <span className="font-medium text-stone-900">Mobile: 9246467406</span>
                  </a>
                </div>

                <div className="space-y-2 font-mono">
                  <div className="flex items-center gap-2 text-stone-600">
                    <span className="w-3.5 text-center font-bold text-[#C58A3A]">☎</span>
                    <span>Off: 08594-246237 / 246897</span>
                  </div>

                  <a
                    href="mailto:venkateswaracashew@gmail.com"
                    className="flex items-center gap-2 hover:text-[#C58A3A] transition-colors truncate"
                  >
                    <Mail className="w-3.5 h-3.5 text-[#C58A3A] shrink-0" />
                    <span className="truncate text-stone-800">
                      venkateswaracashew@gmail.com
                    </span>
                  </a>
                </div>
              </div>

              {/* Physical Manufacturing Plant Address */}
              <div className="flex items-start gap-2 text-stone-700 text-xs py-4">
                <MapPin className="w-4 h-4 text-[#C58A3A] shrink-0 mt-0.5" />
                <span>
                  <strong>Plant Address:</strong> Nayenipalli Industrial Area, Sarvodaya Colony, Vetapalem - 523 187, Prakasam District, Andhra Pradesh, India.
                </span>
              </div>
            </div>

            {/* Direct Exporter Action */}
            <div className="flex items-center gap-3 pt-4 border-t border-stone-200/80">
              <motion.a
                href="tel:9246467237"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="flex-1 flex items-center justify-center gap-1.5 rounded-xl bg-[#1C1917] hover:bg-stone-800 text-white px-4 py-3 text-xs font-semibold transition-colors cursor-pointer text-center shadow-subtle"
              >
                <span>Call Exporter Directly</span>
                <ChevronRight className="h-3.5 w-3.5 stroke-[2.5]" />
              </motion.a>

              <motion.button
                type="button"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => handleScrollTo('contact')}
                className="rounded-xl border border-stone-300 bg-white hover:bg-stone-50 px-4 py-3 text-xs font-semibold text-stone-800 transition-colors text-center shadow-subtle cursor-pointer"
              >
                Request Quote
              </motion.button>
            </div>
          </motion.div>
        </div>

        {/* Right Column (5 cols): Commercial Consignment Capabilities */}
        <div className="lg:col-span-5">
          <div className="rounded-3xl bg-[#1C1917] text-stone-100 p-6 sm:p-8 shadow-xl flex flex-col justify-between h-full relative overflow-hidden border border-stone-800">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-stone-800">
                <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-amber-400 font-bold">
                  EXPORT LOGISTICS READINESS
                </span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-emerald-950 text-emerald-400 border border-emerald-800 font-semibold">
                  ACTIVE SUPPLY
                </span>
              </div>

              <h4 className="font-serif text-xl sm:text-2xl font-normal text-white mt-4 leading-snug">
                Single-Estate Processing &amp; Container Logistics
              </h4>

              <div className="mt-5 space-y-3 font-mono text-xs">
                <div className="p-3 rounded-xl bg-white/5 border border-white/10 flex items-center justify-between">
                  <span className="text-stone-400">Standard Container:</span>
                  <span className="font-bold text-amber-300">1 x 20ft FCL (~16 MT)</span>
                </div>
                <div className="p-3 rounded-xl bg-white/5 border border-white/10 flex items-center justify-between">
                  <span className="text-stone-400">Packaging Type:</span>
                  <span className="font-bold text-white">2 x 25 lbs Nitrogen Tins</span>
                </div>
                <div className="p-3 rounded-xl bg-white/5 border border-white/10 flex items-center justify-between">
                  <span className="text-stone-400">Moisture Standard:</span>
                  <span className="font-bold text-emerald-400">&lt; 4.5% Equilibrium</span>
                </div>
                <div className="p-3 rounded-xl bg-white/5 border border-white/10 flex items-center justify-between">
                  <span className="text-stone-400">Export Ports:</span>
                  <span className="font-bold text-stone-200">Chennai &amp; Vizag Ports</span>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-stone-800 flex items-center justify-between text-xs text-stone-400 font-mono">
              <span>FOB / CIF Quotations</span>
              <span className="text-amber-400 font-semibold">Fast Turnaround</span>
            </div>
          </div>
        </div>
      </div>

      {/* Visiting Card Modal Popup */}
      <AnimatePresence>
        {showCardModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-900/60 backdrop-blur-md"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 10 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 10 }}
              className="relative w-full max-w-lg rounded-3xl bg-white p-6 sm:p-8 shadow-2xl border border-stone-200 overflow-hidden"
            >
              <div className="flex items-center justify-between pb-4 border-b border-stone-200">
                <div className="flex items-center gap-2">
                  <SVCMLogo size={28} />
                  <span className="font-mono text-xs font-bold text-stone-900 uppercase">
                    Official Business Card • SVCM
                  </span>
                </div>
                <button
                  type="button"
                  onClick={() => setShowCardModal(false)}
                  className="rounded-full p-1.5 text-stone-500 hover:bg-stone-100 hover:text-stone-900 transition-colors cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="my-5 rounded-2xl overflow-hidden border border-stone-200 bg-stone-100 shadow-inner">
                <img
                  src={asset('visitingcard.jpg')}
                  alt="Sri Venkateswara Cashew Manufacturers Visiting Card"
                  className="w-full h-auto object-contain"
                />
              </div>

              <div className="space-y-2 text-xs text-stone-600 bg-amber-50/70 p-4 rounded-xl border border-amber-200/80">
                <p>
                  <strong>Proprietor:</strong> V. Murali Krishna Murthy
                </p>
                <p>
                  <strong>Plant:</strong> Nayenipalli Ind. Area, Sarvodaya Colony, Vetapalem - 523 187
                </p>
                <p>
                  <strong>Phones:</strong> Cell: 9246467237 | Mobile: 9246467406 | Office: 08594-246237 / 246897
                </p>
                <p>
                  <strong>Email:</strong> venkateswaracashew@gmail.com
                </p>
              </div>

              <div className="mt-5 flex justify-end">
                <button
                  type="button"
                  onClick={() => setShowCardModal(false)}
                  className="px-5 py-2.5 rounded-xl bg-stone-900 text-white text-xs font-semibold hover:bg-stone-800 transition-colors cursor-pointer"
                >
                  Close Card
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
