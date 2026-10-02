import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, Phone, Mail, MapPin, CreditCard, X, ShieldCheck } from 'lucide-react';
import { Reveal } from './Reveal';
import { SVCMLogo } from './SVCMLogo';

export const SectionOne: React.FC = () => {
  const [showCardModal, setShowCardModal] = useState(false);

  const handleScrollToInquiry = () => {
    const el = document.getElementById('inquiry');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="supports-[height:100svh]:min-h-[100svh] min-h-screen flex flex-col justify-between pt-24 sm:pt-28 pb-12 md:pb-16 px-5 sm:px-8 md:px-12 w-full max-w-7xl mx-auto">
      {/* Top Banner Tag */}
      <div className="pt-2">
        <Reveal delay={100}>
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="inline-flex items-center gap-2.5 border border-stone-200/90 bg-white/90 px-3.5 py-1.5 rounded-full backdrop-blur-md shadow-sm"
          >
            <SVCMLogo size={20} />
            <span className="font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.16em] text-[#b45309] font-bold">
              SRI VENKATESWARA CASHEW MANUFACTURERS • VETAPALEM-523 187 (A.P.)
            </span>
          </motion.div>
        </Reveal>
      </div>

      {/* Main Hero 2-Column Split: Clean, zero-overlap layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-end pt-8 pb-4">
        {/* Left Column (7 cols): Brand Headline, Origin Story & Conversion CTAs */}
        <div className="lg:col-span-7 flex flex-col justify-end">
          <Reveal delay={200}>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-normal leading-[1.06] tracking-tight text-stone-900">
              Pure. Golden.
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#78350f] via-[#b45309] to-[#d97706] font-medium">
                Vetapalem Cashews.
              </span>
            </h1>
          </Reveal>

          <Reveal delay={300}>
            <p className="mt-4 max-w-xl text-sm sm:text-base text-stone-700 leading-relaxed font-normal">
              Direct from Andhra Pradesh's legendary cashew processing capital. We process, sort, and export single-estate organic cashews (Grade W-180 King to W-320) with closed-loop 70°C Borma moisture equilibrium and vacuum nitrogen-flush packing.
            </p>
          </Reveal>

          {/* Quick Specification Bullets */}
          <Reveal delay={380}>
            <div className="mt-5 flex flex-wrap gap-x-5 gap-y-2 font-mono text-[11px] text-stone-700">
              <span className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 animate-pulse" />
                <span>Grade W-180 King Wholes</span>
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-600" />
                <span>Moisture &lt; 4.5% Guaranteed</span>
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-stone-700" />
                <span>Nitrogen-Flushed 18-Mo Shelf Life</span>
              </span>
            </div>
          </Reveal>

          {/* Primary Action Buttons (21st.dev Style with Framer Motion) */}
          <Reveal delay={450}>
            <div className="mt-7 flex flex-wrap items-center gap-3">
              <motion.button
                type="button"
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.98 }}
                onClick={handleScrollToInquiry}
                className="flex items-center gap-2 rounded-xl bg-gradient-to-r from-[#d97706] to-[#b45309] hover:from-[#b45309] hover:to-[#92400e] px-6 py-3.5 text-xs sm:text-sm font-semibold text-white transition-all duration-300 shadow-[0_10px_25px_-5px_rgba(217,119,6,0.35)] cursor-pointer"
              >
                <span>Request Export RFQ</span>
                <ChevronRight className="w-4 h-4 stroke-[2.5]" />
              </motion.button>

              <motion.a
                href="tel:9246467237"
                whileHover={{ scale: 1.02, y: -1 }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center gap-2 rounded-xl border border-stone-300 bg-white/90 hover:bg-white px-5 py-3.5 text-xs sm:text-sm font-medium text-stone-800 transition-colors shadow-sm cursor-pointer"
              >
                <Phone className="w-4 h-4 text-[#b45309]" />
                <span>Call Exporter (+91 9246467237)</span>
              </motion.a>
            </div>
          </Reveal>
        </div>

        {/* Right Column (5 cols): Official Exporter Card with SVCM Logo & Visiting Card */}
        <div className="lg:col-span-5 flex flex-col justify-end">
          <Reveal delay={400}>
            <motion.div
              whileHover={{ y: -4, transition: { duration: 0.25 } }}
              className="rounded-2xl bg-white/95 p-5 sm:p-6 backdrop-blur-xl border border-stone-200/90 shadow-[0_12px_40px_rgba(0,0,0,0.06)] hover:shadow-[0_16px_45px_rgba(217,119,6,0.1)] transition-all duration-300 relative overflow-hidden"
            >
              {/* Header: Official SVCM Logo + Proprietor Designation */}
              <div className="flex items-start justify-between gap-3 border-b border-stone-200/80 pb-3.5">
                <div className="flex items-center gap-3">
                  <SVCMLogo size={44} className="shrink-0" />
                  <div>
                    <span className="font-mono text-[9px] uppercase tracking-[0.18em] text-[#b45309] font-bold block">
                      OFFICIAL EXPORT DESK • PROPRIETOR
                    </span>
                    <h3 className="text-lg font-bold text-stone-900 leading-snug">
                      V. Murali Krishna Murthy
                    </h3>
                    <p className="text-xs text-stone-500">
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
                  className="flex items-center gap-1.5 bg-amber-50 hover:bg-amber-100 border border-amber-200 px-2.5 py-1.5 rounded-lg text-[10px] font-mono text-[#b45309] hover:text-[#78350f] font-semibold transition-all cursor-pointer shadow-sm shrink-0"
                  title="View Original Visiting Card"
                >
                  <CreditCard className="w-3.5 h-3.5 text-[#b45309]" />
                  <span>Visiting Card</span>
                </motion.button>
              </div>

              {/* Direct Telecommunication Details */}
              <div className="flex flex-col gap-2 py-3.5 text-xs text-stone-700">
                <a
                  href="tel:9246467237"
                  className="flex items-center gap-2 hover:text-[#b45309] transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 text-[#b45309] shrink-0" />
                  <span className="font-mono font-medium text-stone-900">Cell: 9246467237</span>
                  <span className="text-stone-300">•</span>
                  <span className="font-mono font-medium text-stone-900">M: 9246467406</span>
                </a>

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

                <div className="flex items-start gap-2 text-stone-500 text-[11px] mt-0.5">
                  <MapPin className="w-3.5 h-3.5 text-[#b45309] shrink-0 mt-0.5" />
                  <span>
                    Nayenipalli Industrial Area, Sarvodaya Colony, Vetapalem-523187, Prakasam Dist (A.P.)
                  </span>
                </div>
              </div>

              {/* Card Footer Actions */}
              <div className="flex items-center gap-2 pt-3 border-t border-stone-200/80">
                <motion.a
                  href="tel:9246467237"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex-1 flex items-center justify-center gap-1.5 rounded-xl bg-stone-900 px-3.5 py-2.5 text-xs font-semibold text-white hover:bg-stone-800 transition-colors cursor-pointer text-center shadow-sm"
                >
                  <span>Call Exporter</span>
                  <ChevronRight className="h-3.5 w-3.5 stroke-[2.5]" />
                </motion.a>

                <motion.button
                  type="button"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={handleScrollToInquiry}
                  className="rounded-xl border border-stone-300 bg-white hover:bg-stone-50 px-3.5 py-2.5 text-xs font-medium text-stone-800 transition-colors text-center shadow-sm cursor-pointer"
                >
                  Order Inquiries
                </motion.button>
              </div>
            </motion.div>
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
