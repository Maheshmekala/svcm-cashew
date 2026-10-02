import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, Menu, X, ChevronRight } from 'lucide-react';
import { SVCMLogo } from './SVCMLogo';

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Provenance', href: '#metrics' },
    { name: 'Refinery', href: '#processing' },
    { name: 'Export Grades', href: '#export-grades' },
    { name: 'RFQ Desk', href: '#inquiry' },
    { name: 'FAQ', href: '#faq' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full border-b border-stone-200/80 bg-[#faf8f2]/90 backdrop-blur-md shadow-[0_2px_15px_rgba(0,0,0,0.03)]">
      <div className="mx-auto flex items-center justify-between px-5 sm:px-8 md:px-12 py-3.5">
        {/* Brand Identity & Official Logo */}
        <a href="#" className="flex items-center gap-3 group">
          <motion.div whileHover={{ scale: 1.08 }} transition={{ duration: 0.2 }}>
            <SVCMLogo size={36} className="drop-shadow-sm" />
          </motion.div>
          <div className="flex flex-col">
            <span className="text-[11px] sm:text-xs font-semibold tracking-wider text-[#b45309] uppercase font-mono">
              Sri Venkateswara
            </span>
            <span className="text-base sm:text-lg font-bold tracking-tight text-stone-900 leading-tight">
              CASHEW MANUFACTURERS
            </span>
            <span className="text-[9px] font-mono tracking-widest text-stone-500 uppercase hidden sm:inline">
              Quality Cashew Exporters & Importers • Vetapalem
            </span>
          </div>
        </a>

        {/* Center nav links (hidden below lg) */}
        <nav className="hidden lg:flex items-center gap-7">
          {navLinks.map((link) => (
            <motion.a
              key={link.name}
              href={link.href}
              whileHover={{ y: -1 }}
              className="text-xs font-medium uppercase tracking-wider text-stone-600 hover:text-[#b45309] transition-colors duration-200 relative group py-1"
            >
              <span>{link.name}</span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#d97706] group-hover:w-full transition-all duration-300 rounded-full" />
            </motion.a>
          ))}
        </nav>

        {/* Call & Consultation CTA right */}
        <div className="flex items-center gap-2.5 sm:gap-3">
          <motion.a
            href="tel:9246467237"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="hidden sm:flex items-center gap-2 rounded-xl border border-stone-200 bg-white/90 backdrop-blur-md px-3.5 py-2 text-xs text-stone-800 hover:bg-white hover:border-amber-300 transition-all duration-200 shadow-sm"
          >
            <Phone className="w-3.5 h-3.5 text-[#b45309]" />
            <span className="font-mono font-semibold">+91 9246467237</span>
          </motion.a>

          <motion.a
            href="#inquiry"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            className="rounded-xl border border-amber-600/30 bg-gradient-to-r from-[#d97706] to-[#b45309] hover:from-[#b45309] hover:to-[#92400e] px-4 py-2 text-xs sm:text-sm font-semibold text-white transition-all duration-200 shadow-md shadow-amber-600/20"
          >
            Export RFQ
          </motion.a>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-xl border border-stone-200 bg-white/80 text-stone-800 hover:bg-stone-100 transition-colors cursor-pointer"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer with Framer Motion */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="lg:hidden border-t border-stone-200 bg-[#faf8f2]/98 backdrop-blur-xl px-6 py-6 overflow-hidden shadow-2xl"
          >
            <div className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-between text-sm font-semibold text-stone-800 hover:text-[#b45309] py-2.5 border-b border-stone-100 transition-colors"
                >
                  <span>{link.name}</span>
                  <ChevronRight className="w-4 h-4 text-stone-400" />
                </a>
              ))}

              <div className="pt-3 flex flex-col gap-2.5">
                <a
                  href="tel:9246467237"
                  className="flex items-center justify-center gap-2 rounded-xl border border-stone-300 bg-white p-3 text-xs font-mono font-bold text-stone-900 shadow-sm"
                >
                  <Phone className="w-4 h-4 text-[#b45309]" />
                  <span>Call Desk: +91 9246467237</span>
                </a>
                <a
                  href="#inquiry"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-center gap-2 rounded-xl bg-[#d97706] text-white p-3 text-xs font-semibold shadow-md"
                >
                  <span>Request Export Quotation</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
