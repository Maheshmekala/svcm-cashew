import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, Phone, Mail, MapPin, CreditCard, X, ShieldCheck, Sparkles, CheckCircle2, ArrowDown } from 'lucide-react';
import { Reveal } from './Reveal';
import { SVCMLogo } from './SVCMLogo';
import { asset } from '../utils/assets';

export const HeroSection: React.FC = () => {
  const [showCardModal, setShowCardModal] = useState(false);

  const handleScrollToProcessing = () => {
    const el = document.getElementById('processing');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleScrollToInquiry = () => {
    const el = document.getElementById('inquiry');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="pt-28 sm:pt-36 pb-16 sm:pb-24 px-5 sm:px-8 md:px-12 w-full max-w-7xl mx-auto">
      {/* 1. Luminous Origin Tag Badge */}
      <div className="flex flex-col items-center text-center">
        <Reveal delay={80}>
          <motion.div
            whileHover={{ scale: 1.03 }}
            className="inline-flex items-center gap-2.5 border border-amber-300/80 bg-amber-50/90 backdrop-blur-md px-4 py-1.5 rounded-full shadow-sm mb-6"
          >
            <SVCMLogo size={20} />
            <span className="font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.18em] text-[#b45309] font-bold">
              ESTD. VETAPALEM, ANDHRA PRADESH • QUALITY EXPORTERS & IMPORTERS
            </span>
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          </motion.div>
        </Reveal>

        {/* 2. Bold Editorial Headline */}
        <Reveal delay={160}>
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-normal leading-[1.04] tracking-tight text-stone-900 max-w-5xl">
            The World's Most Prized Cashews,{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#78350f] via-[#b45309] to-[#d97706] font-medium">
              Grown, Refined &amp; Exported.
            </span>
          </h1>
        </Reveal>

        {/* 3. Value Proposition Copy */}
        <Reveal delay={240}>
          <p className="mt-6 max-w-2xl text-base sm:text-lg text-stone-700 leading-relaxed font-normal">
            Direct from India's legendary cashew capital. We process, sort, and export single-estate organic whole cashews (Grade W-180 King to W-320) with closed-loop 70°C Borma moisture equilibrium and vacuum nitrogen-flush packing.
          </p>
        </Reveal>

        {/* 4. High-Converting Call to Action Buttons */}
        <Reveal delay={320}>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3 sm:gap-4">
            <motion.button
              type="button"
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.98 }}
              onClick={handleScrollToInquiry}
              className="flex items-center gap-2 rounded-xl bg-gradient-to-r from-[#d97706] to-[#b45309] hover:from-[#b45309] hover:to-[#92400e] px-7 py-4 text-xs sm:text-sm font-semibold text-white transition-all duration-300 shadow-[0_10px_25px_-5px_rgba(217,119,6,0.35)] cursor-pointer"
            >
              <span>Request Export RFQ</span>
              <ChevronRight className="w-4 h-4 stroke-[2.5]" />
            </motion.button>

            <motion.button
              type="button"
              whileHover={{ scale: 1.03, y: -1 }}
              whileTap={{ scale: 0.98 }}
              onClick={handleScrollToProcessing}
              className="flex items-center gap-2 rounded-xl border border-stone-300 bg-white/95 hover:bg-white hover:border-amber-400 px-6 py-4 text-xs sm:text-sm font-medium text-stone-800 transition-all shadow-sm cursor-pointer"
            >
              <Sparkles className="w-4 h-4 text-[#b45309]" />
              <span>Explore Refinery Process</span>
              <ArrowDown className="w-3.5 h-3.5 text-stone-400" />
            </motion.button>

            <motion.a
              href="tel:9246467237"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="flex items-center gap-2 rounded-xl border border-stone-200 bg-stone-50 hover:bg-stone-100 px-5 py-4 text-xs sm:text-sm font-medium text-stone-700 transition-colors cursor-pointer"
            >
              <Phone className="w-4 h-4 text-[#b45309]" />
              <span>+91 9246467237</span>
            </motion.a>
          </div>
        </Reveal>

        {/* 5. Trust Chip Strip */}
        <Reveal delay={400}>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2.5 font-mono text-[11px] text-stone-700 bg-white/80 border border-stone-200/80 px-5 py-2.5 rounded-full shadow-sm">
            <span className="flex items-center gap-1.5 font-semibold text-stone-900">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
              <span>Grade W-180 King Wholes</span>
            </span>
            <span className="text-stone-300">•</span>
            <span className="flex items-center gap-1.5 font-semibold text-stone-900">
              <CheckCircle2 className="w-3.5 h-3.5 text-amber-600" />
              <span>Moisture &lt; 4.5% Equilibrium</span>
            </span>
            <span className="text-stone-300">•</span>
            <span className="flex items-center gap-1.5 font-semibold text-stone-900">
              <CheckCircle2 className="w-3.5 h-3.5 text-stone-700" />
              <span>18-Month Nitrogen Shelf Life</span>
            </span>
            <span className="text-stone-300">•</span>
            <span className="flex items-center gap-1.5 font-semibold text-[#b45309]">
              <ShieldCheck className="w-3.5 h-3.5 text-[#b45309]" />
              <span>APEDA Registered Exporter</span>
            </span>
          </div>
        </Reveal>
      </div>

      {/* 6. Live Botanical Motion & Anatomy Showcase */}
      <Reveal delay={450}>
        <div className="mt-12 rounded-3xl border border-stone-300/80 bg-stone-950 p-4 sm:p-5 shadow-2xl overflow-hidden relative group">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-center">
            {/* Left 8 Cols: Video Player */}
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

              <div className="absolute top-3 left-3 bg-black/75 backdrop-blur-md px-3 py-1 rounded-full border border-white/20 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="font-mono text-[9px] text-white font-bold tracking-wider">
                  BOTANICAL ANATOMY • VETAPALEM
                </span>
              </div>
            </div>

            {/* Right 4 Cols: Anatomical Specimen Cards */}
            <div className="lg:col-span-4 flex flex-col gap-3">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4 flex items-center gap-3.5 hover:bg-white/10 transition-colors">
                <img
                  src={asset('assets/cashew/cashew_nut_and_apple.jpg')}
                  alt="Cashew Fruit and Nut"
                  className="w-16 h-16 rounded-xl object-cover border border-white/20 shrink-0"
                />
                <div>
                  <span className="font-mono text-[9px] uppercase tracking-wider text-amber-400 font-bold block">
                    STAGE 01 • TREE HARVEST
                  </span>
                  <h4 className="text-xs sm:text-sm font-bold text-white leading-snug">
                    Cashew Apple &amp; Hanging Drupe
                  </h4>
                  <p className="text-[11px] text-stone-400 mt-0.5">
                    100% organic coastal Andhra origin.
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
                    STAGE 04 • EXPORT WHOLE
                  </span>
                  <h4 className="text-xs sm:text-sm font-bold text-white leading-snug">
                    King Cotyledon Grade W-180
                  </h4>
                  <p className="text-[11px] text-stone-400 mt-0.5">
                    &lt;4.5% moisture with nitrogen lock.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Reveal>

      {/* 7. Spotlight Grid: Proprietor Exporter Profile & Factory Coordinates */}
      <div className="mt-14 grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        {/* Left Column (7 cols): Official Exporter Card with SVCM Logo & Visiting Card */}
        <div className="lg:col-span-7">
          <Reveal delay={350} className="h-full">
            <motion.div
              whileHover={{ y: -4, transition: { duration: 0.25 } }}
              className="rounded-3xl bg-white/95 p-6 sm:p-8 backdrop-blur-xl border border-stone-200/90 shadow-[0_16px_50px_rgba(0,0,0,0.06)] hover:shadow-[0_20px_60px_rgba(217,119,6,0.12)] transition-all duration-300 flex flex-col justify-between h-full relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />

              <div>
                {/* Header: Official SVCM Logo + Proprietor Designation */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-stone-200/80 pb-5">
                  <div className="flex items-center gap-3.5">
                    <SVCMLogo size={52} className="shrink-0" />
                    <div>
                      <span className="font-mono text-[9px] uppercase tracking-[0.18em] text-[#b45309] font-bold block">
                        OFFICIAL EXPORT DESK • PROPRIETOR
                      </span>
                      <h3 className="text-xl font-bold text-stone-900 leading-snug">
                        V. Murali Krishna Murthy
                      </h3>
                      <p className="text-xs text-stone-500 font-medium">
                        Sri Venkateswara Cashew Manufacturers
                      </p>
                    </div>
                  </div>

                  {/* View Visiting Card Button */}
                  <motion.button
                    type="button"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setShowCardModal(true)}
                    className="flex items-center gap-1.5 bg-amber-50 hover:bg-amber-100 border border-amber-200 px-3 py-2 rounded-xl text-xs font-mono text-[#b45309] hover:text-[#78350f] font-semibold transition-all cursor-pointer shadow-sm self-start sm:self-auto shrink-0"
                    title="View Original Visiting Card"
                  >
                    <CreditCard className="w-4 h-4 text-[#b45309]" />
                    <span>View Visiting Card</span>
                  </motion.button>
                </div>

                {/* Direct Telecommunication Details */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 py-5 text-xs text-stone-700 border-b border-stone-200/80">
                  <div className="space-y-2">
                    <a
                      href="tel:9246467237"
                      className="flex items-center gap-2 hover:text-[#b45309] transition-colors"
                    >
                      <Phone className="w-3.5 h-3.5 text-[#b45309] shrink-0" />
                      <span className="font-mono font-medium text-stone-900">Cell: 9246467237</span>
                    </a>
                    <a
                      href="tel:9246467406"
                      className="flex items-center gap-2 hover:text-[#b45309] transition-colors"
                    >
                      <Phone className="w-3.5 h-3.5 text-[#b45309] shrink-0" />
                      <span className="font-mono font-medium text-stone-900">Mobile: 9246467406</span>
                    </a>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-stone-600">
                      <span className="w-3.5 text-center font-mono text-[10px] text-[#b45309] font-bold">☎</span>
                      <span className="font-mono text-[11px]">Off: 08594-246237 / 246897</span>
                    </div>

                    <a
                      href="mailto:venkateswaracashew@gmail.com"
                      className="flex items-center gap-2 hover:text-[#b45309] transition-colors truncate"
                    >
                      <Mail className="w-3.5 h-3.5 text-[#b45309] shrink-0" />
                      <span className="font-mono text-[11px] truncate text-stone-700">
                        venkateswaracashew@gmail.com
                      </span>
                    </a>
                  </div>
                </div>

                {/* Plant Physical Address */}
                <div className="flex items-start gap-2 text-stone-600 text-xs py-4">
                  <MapPin className="w-4 h-4 text-[#b45309] shrink-0 mt-0.5" />
                  <span>
                    <strong>Plant Address:</strong> Nayenipalli Industrial Area, Sarvodaya Colony, Vetapalem - 523 187, Prakasam District, Andhra Pradesh, India.
                  </span>
                </div>
              </div>

              {/* Card Footer Actions */}
              <div className="flex items-center gap-3 pt-4 border-t border-stone-200/80">
                <motion.a
                  href="tel:9246467237"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex-1 flex items-center justify-center gap-1.5 rounded-xl bg-stone-900 px-4 py-3 text-xs font-semibold text-white hover:bg-stone-800 transition-colors cursor-pointer text-center shadow-sm"
                >
                  <span>Call Exporter Directly</span>
                  <ChevronRight className="h-3.5 w-3.5 stroke-[2.5]" />
                </motion.a>

                <motion.button
                  type="button"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={handleScrollToInquiry}
                  className="rounded-xl border border-stone-300 bg-white hover:bg-stone-50 px-4 py-3 text-xs font-semibold text-stone-800 transition-colors text-center shadow-sm cursor-pointer"
                >
                  Request Quote
                </motion.button>
              </div>
            </motion.div>
          </Reveal>
        </div>

        {/* Right Column (5 cols): Commercial Consignment Capabilities */}
        <div className="lg:col-span-5">
          <Reveal delay={450} className="h-full">
            <div className="rounded-3xl bg-stone-900 text-stone-100 p-6 sm:p-8 shadow-xl flex flex-col justify-between h-full relative overflow-hidden border border-stone-800">
              <div>
                <div className="flex items-center justify-between pb-4 border-b border-stone-800">
                  <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-amber-400 font-bold">
                    EXPORT DISPATCH READINESS
                  </span>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-emerald-950 text-emerald-400 border border-emerald-800 font-semibold">
                    ACTIVE HARVEST
                  </span>
                </div>

                <h4 className="text-xl sm:text-2xl font-bold text-white mt-4 leading-tight">
                  Single-Estate Processing &amp; Container Logistics
                </h4>

                <div className="mt-5 space-y-3.5 font-mono text-xs">
                  <div className="p-3 rounded-xl bg-white/5 border border-white/10 flex items-center justify-between">
                    <span className="text-stone-400">Standard Container:</span>
                    <span className="font-bold text-amber-300">1 x 20ft FCL (~16 MT)</span>
                  </div>
                  <div className="p-3 rounded-xl bg-white/5 border border-white/10 flex items-center justify-between">
                    <span className="text-stone-400">Packaging Type:</span>
                    <span className="font-bold text-white">2 x 25 lbs Nitrogen Tins</span>
                  </div>
                  <div className="p-3 rounded-xl bg-white/5 border border-white/10 flex items-center justify-between">
                    <span className="text-stone-400">Moisture Guarantee:</span>
                    <span className="font-bold text-emerald-400">&lt; 4.5% Equilibrium</span>
                  </div>
                  <div className="p-3 rounded-xl bg-white/5 border border-white/10 flex items-center justify-between">
                    <span className="text-stone-400">Deepwater Ports:</span>
                    <span className="font-bold text-stone-200">Chennai &amp; Vizag Ports</span>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-stone-800 flex items-center justify-between text-xs text-stone-400 font-mono">
                <span>FOB / CIF Quotations</span>
                <span className="text-amber-400 font-semibold">Ready in 2-4 Hours</span>
              </div>
            </div>
          </Reveal>
        </div>
      </div>

      {/* Visiting Card Modal Popup (Animated with AnimatePresence) */}
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
              transition={{ duration: 0.25 }}
              className="relative max-w-lg w-full bg-[#faf8f2] border border-stone-200 rounded-3xl p-6 shadow-2xl"
            >
              <button
                type="button"
                onClick={() => setShowCardModal(false)}
                className="absolute top-4 right-4 p-1.5 rounded-full bg-stone-200/80 hover:bg-stone-300 text-stone-700 transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-3 mb-4">
                <SVCMLogo size={32} />
                <div>
                  <span className="font-mono text-[10px] text-[#b45309] uppercase tracking-wider font-semibold block">
                    Official Business Card
                  </span>
                  <h4 className="text-lg font-bold text-stone-900 leading-tight">
                    Sri Venkateswara Cashew Manufacturers
                  </h4>
                </div>
              </div>

              <div className="rounded-2xl overflow-hidden border border-stone-200 shadow-md bg-white p-1.5">
                <img
                  src="/visitingcard.jpg"
                  alt="Sri Venkateswara Cashew Manufacturers Visiting Card"
                  className="w-full h-auto object-contain rounded-xl"
                />
              </div>

              <div className="mt-4 pt-3 border-t border-stone-200 flex justify-between items-center text-xs text-stone-500 font-mono">
                <div className="flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  <span>Vetapalem, Prakasam District, Andhra Pradesh</span>
                </div>
                <button
                  type="button"
                  onClick={() => setShowCardModal(false)}
                  className="text-stone-900 font-semibold hover:underline cursor-pointer"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
