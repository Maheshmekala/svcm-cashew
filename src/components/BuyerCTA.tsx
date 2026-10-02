import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, Phone, MessageSquare, CheckCircle2, FileText } from 'lucide-react';
import { SVCMLogo } from './SVCMLogo';

export const BuyerCTA: React.FC = () => {
  const handleScrollToContact = () => {
    const el = document.getElementById('contact');
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
    <section className="py-16 sm:py-24 px-5 sm:px-8 md:px-12 w-full max-w-7xl mx-auto">
      <div className="rounded-3xl bg-[#183C2C] text-stone-100 p-8 sm:p-12 md:p-16 shadow-2xl relative overflow-hidden border border-[#0F2F22]">
        {/* Ambient Warm Golden Glow */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#C58A3A]/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-black/30 rounded-full blur-2xl pointer-events-none" />

        <div className="relative z-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-10">
          <div className="space-y-4 max-w-2xl">
            <div className="inline-flex items-center gap-2 border border-white/20 bg-white/10 backdrop-blur-md px-3.5 py-1.5 rounded-full text-xs font-mono font-semibold text-amber-300">
              <SVCMLogo size={18} />
              <span className="uppercase tracking-widest text-[10px]">
                DIRECT EXPORT SUPPLY CONTRACTS
              </span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-white leading-tight">
              Looking for a reliable cashew{' '}
              <span className="italic text-amber-300 block sm:inline">
                supply partner?
              </span>
            </h2>

            <p className="text-sm sm:text-base text-stone-300 leading-relaxed font-normal">
              Talk directly with proprietor V. Murali Krishna Murthy about your grade, volume, packaging specifications, and container shipment schedules from Vetapalem.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-4 text-xs font-mono text-stone-300">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Spot &amp; Forward Contracts</span>
              </span>
              <span className="text-stone-500">•</span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>1 x 20ft / 40ft FCL Allocations</span>
              </span>
              <span className="text-stone-500">•</span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>FOB / CIF Quotations</span>
              </span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row lg:flex-col gap-3.5 shrink-0 w-full lg:w-auto">
            <motion.button
              type="button"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              onClick={handleScrollToContact}
              className="flex items-center justify-center gap-2 rounded-xl bg-[#C58A3A] hover:bg-[#B0772C] text-stone-950 font-semibold px-7 py-4 text-xs sm:text-sm shadow-xl transition-all cursor-pointer"
            >
              <FileText className="w-4 h-4 stroke-[2.5]" />
              <span>Request a Quote</span>
              <ChevronRight className="w-4 h-4 stroke-[2.5]" />
            </motion.button>

            <motion.a
              href="tel:9246467237"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="flex items-center justify-center gap-2 rounded-xl border border-white/20 bg-white/10 hover:bg-white/15 text-white font-medium px-6 py-3.5 text-xs sm:text-sm transition-colors cursor-pointer"
            >
              <Phone className="w-4 h-4 text-amber-300" />
              <span>Call: +91 9246467237</span>
            </motion.a>

            <motion.a
              href="https://wa.me/919246467237"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="flex items-center justify-center gap-2 rounded-xl bg-[#16a34a] hover:bg-[#15803d] text-white font-medium px-6 py-3.5 text-xs sm:text-sm transition-colors shadow-md cursor-pointer"
            >
              <MessageSquare className="w-4 h-4 fill-white" />
              <span>WhatsApp Direct Desk</span>
            </motion.a>
          </div>
        </div>
      </div>
    </section>
  );
};
