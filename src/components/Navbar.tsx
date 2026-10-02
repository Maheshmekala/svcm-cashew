import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, Menu, X, ChevronRight, FileText } from 'lucide-react';
import { SVCMLogo } from './SVCMLogo';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  const navLinks = [
    { name: 'Home', href: '#hero', id: 'hero' },
    { name: 'About', href: '#about', id: 'about' },
    { name: 'Products', href: '#products', id: 'products' },
    { name: 'Quality', href: '#quality', id: 'quality' },
    { name: 'Process', href: '#process', id: 'process' },
    { name: 'Anatomy', href: '#anatomy', id: 'anatomy' },
    { name: 'Global Reach', href: '#global-reach', id: 'global-reach' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ];

  // Detect scroll position to toggle navbar background
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);

      // Simple active section detection
      const scrollPosition = window.scrollY + 200;
      for (let i = navLinks.length - 1; i >= 0; i--) {
        const el = document.getElementById(navLinks[i].id);
        if (el && el.offsetTop <= scrollPosition) {
          setActiveSection(navLinks[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      const navOffset = 76;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300 ${
        isScrolled
          ? 'bg-[#FAF8F2]/95 backdrop-blur-md border-b border-stone-200/90 shadow-[0_4px_20px_rgba(0,0,0,0.04)] py-3'
          : 'bg-transparent border-b border-stone-300/40 py-4'
      }`}
    >
      <div className="mx-auto flex items-center justify-between px-5 sm:px-8 md:px-12 max-w-7xl">
        {/* Brand Identity & Official Logo */}
        <a
          href="#hero"
          onClick={(e) => handleScrollTo(e, '#hero')}
          className="flex items-center gap-3.5 group focus:outline-none"
        >
          <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.2 }}>
            <SVCMLogo size={38} className="drop-shadow-sm shrink-0" />
          </motion.div>
          <div className="flex flex-col">
            <span className="text-[10px] sm:text-[11px] font-semibold tracking-wider text-[#C58A3A] uppercase font-mono">
              Sri Venkateswara
            </span>
            <span className="text-sm sm:text-base md:text-lg font-bold tracking-tight text-[#1C1917] leading-none mt-0.5">
              CASHEW MANUFACTURERS
            </span>
            <span className="text-[9px] font-mono tracking-widest text-stone-500 uppercase hidden md:inline mt-0.5">
              Vetapalem, Andhra Pradesh • Export House
            </span>
          </div>
        </a>

        {/* Center Desktop Navigation */}
        <nav className="hidden xl:flex items-center gap-6" aria-label="Main Navigation">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleScrollTo(e, link.href)}
                className={`text-xs font-medium tracking-wide transition-all duration-200 relative py-1 ${
                  isActive
                    ? 'text-[#183C2C] font-semibold'
                    : 'text-stone-600 hover:text-[#C58A3A]'
                }`}
              >
                <span>{link.name}</span>
                {isActive && (
                  <motion.span
                    layoutId="activeNavIndicator"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#C58A3A] rounded-full"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </a>
            );
          })}
        </nav>

        {/* Action Buttons & Mobile Toggle */}
        <div className="flex items-center gap-2.5 sm:gap-3">
          {/* Quick Phone Call */}
          <motion.a
            href="tel:9246467237"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="hidden sm:flex items-center gap-2 rounded-xl border border-stone-200 bg-white/80 hover:bg-white px-3.5 py-2 text-xs text-stone-800 transition-all shadow-sm"
            title="Direct factory call to proprietor V. Murali Krishna Murthy"
          >
            <Phone className="w-3.5 h-3.5 text-[#C58A3A]" />
            <span className="font-mono font-medium text-[11px]">+91 9246467237</span>
          </motion.a>

          {/* Primary RFQ CTA Button */}
          <motion.a
            href="#contact"
            onClick={(e) => handleScrollTo(e, '#contact')}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            className="flex items-center gap-1.5 rounded-xl bg-[#183C2C] hover:bg-[#0F2F22] text-white px-4 py-2 sm:px-5 sm:py-2.5 text-xs sm:text-sm font-semibold transition-all duration-200 shadow-md shadow-forest-900/10 cursor-pointer"
          >
            <FileText className="w-3.5 h-3.5 text-amber-300" />
            <span>Request a Quote</span>
          </motion.a>

          {/* Mobile Menu Hamburger Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="xl:hidden p-2 rounded-xl border border-stone-200 bg-white/90 text-stone-800 hover:bg-stone-100 transition-colors cursor-pointer"
            aria-label={mobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            className="xl:hidden border-t border-stone-200 bg-[#FAF8F2] px-6 py-6 shadow-2xl overflow-hidden"
          >
            <div className="flex flex-col gap-1 max-w-md mx-auto">
              <span className="font-mono text-[10px] tracking-widest uppercase text-stone-400 font-bold mb-2">
                NAVIGATION
              </span>
              {navLinks.map((link) => {
                const isActive = activeSection === link.id;
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => handleScrollTo(e, link.href)}
                    className={`flex items-center justify-between text-sm py-3 px-3 rounded-lg transition-colors ${
                      isActive
                        ? 'bg-stone-200/60 font-semibold text-[#183C2C]'
                        : 'text-stone-700 hover:bg-stone-100 hover:text-stone-900'
                    }`}
                  >
                    <span>{link.name}</span>
                    <ChevronRight className="w-4 h-4 text-stone-400" />
                  </a>
                );
              })}

              <div className="pt-4 mt-2 border-t border-stone-200 flex flex-col gap-2.5">
                <a
                  href="tel:9246467237"
                  className="flex items-center justify-center gap-2 rounded-xl border border-stone-300 bg-white p-3 text-xs font-mono font-bold text-stone-900 shadow-sm"
                >
                  <Phone className="w-4 h-4 text-[#C58A3A]" />
                  <span>Call Desk: +91 9246467237</span>
                </a>
                <a
                  href="#contact"
                  onClick={(e) => handleScrollTo(e, '#contact')}
                  className="flex items-center justify-center gap-2 rounded-xl bg-[#183C2C] text-white p-3 text-xs font-semibold shadow-md"
                >
                  <FileText className="w-4 h-4 text-amber-300" />
                  <span>Request a Commercial Quote</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
