import React from 'react';
import { Phone, Mail, MapPin, ShieldCheck, ArrowUp } from 'lucide-react';
import { SVCMLogo } from './SVCMLogo';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-stone-200 bg-[#FAF8F2] pt-20 pb-14 px-5 sm:px-8 md:px-12 w-full text-stone-700">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-16 border-b border-stone-200">
          {/* Column 1: Brand & Identity (4 cols) */}
          <div className="space-y-4 lg:col-span-4">
            <div className="flex items-center gap-3">
              <SVCMLogo size={46} />
              <div>
                <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#8A5A35] font-bold block">
                  SRI VENKATESWARA
                </span>
                <span className="text-base font-bold text-[#1C1917] leading-tight block">
                  CASHEW MANUFACTURERS
                </span>
              </div>
            </div>
            <p className="text-xs text-stone-600 leading-relaxed max-w-sm">
              Single-origin coastal Andhra cashew processing and international export from Vetapalem — India&apos;s historic capital of thermal Borma dehydration and ivory kernel grading.
            </p>
            <div className="flex items-center gap-2 text-[11px] font-mono text-emerald-800 bg-emerald-50 border border-emerald-200/80 px-3 py-1.5 rounded-xl w-fit">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              <span>Direct Factory Accountability • No Intermediaries</span>
            </div>
          </div>

          {/* Column 2: Manufacturing Plant Address (3 cols) */}
          <div className="space-y-3 lg:col-span-3">
            <span className="font-mono text-[10px] uppercase tracking-widest text-[#8A5A35] font-bold block">
              FACTORY &amp; PLANT OFFICE
            </span>
            <div className="space-y-2 text-xs text-stone-600">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#C58A3A] shrink-0 mt-0.5" />
                <span className="leading-relaxed">
                  Nayenipalli Industrial Area, Sarvodaya Colony, Vetapalem - 523 187, Prakasam District, Andhra Pradesh, India.
                </span>
              </div>
              <div className="pt-2 border-t border-stone-200/80">
                <span className="font-mono text-[10px] text-stone-400 uppercase tracking-wider block">
                  PROPRIETOR &amp; COMMERCIAL HEAD
                </span>
                <span className="font-bold text-stone-900 text-xs mt-0.5 block">
                  V. Murali Krishna Murthy
                </span>
              </div>
            </div>
          </div>

          {/* Column 3: Contact Directory (3 cols) */}
          <div className="space-y-3 lg:col-span-3">
            <span className="font-mono text-[10px] uppercase tracking-widest text-[#8A5A35] font-bold block">
              TELECOMMUNICATION DIRECTORY
            </span>
            <div className="space-y-2 font-mono text-xs">
              <a
                href="tel:9246467237"
                className="flex items-center gap-2 text-stone-800 hover:text-[#183C2C] transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-[#8A5A35]" />
                <span>Cell: +91 9246467237</span>
              </a>

              <a
                href="tel:9246467406"
                className="flex items-center gap-2 text-stone-800 hover:text-[#183C2C] transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-[#8A5A35]" />
                <span>Mobile: +91 9246467406</span>
              </a>

              <div className="flex items-center gap-2 text-stone-600">
                <span className="w-3.5 text-center font-bold text-[#8A5A35]">☎</span>
                <span>Off: 08594-246237 / 246897</span>
              </div>

              <a
                href="mailto:venkateswaracashew@gmail.com"
                className="flex items-center gap-2 text-stone-800 hover:text-[#183C2C] transition-colors truncate"
              >
                <Mail className="w-3.5 h-3.5 text-[#8A5A35] shrink-0" />
                <span className="truncate">venkateswaracashew@gmail.com</span>
              </a>
            </div>
          </div>

          {/* Column 4: Quick Navigation (2 cols) */}
          <div className="space-y-3 lg:col-span-2">
            <span className="font-mono text-[10px] uppercase tracking-widest text-[#8A5A35] font-bold block">
              NAVIGATION
            </span>
            <ul className="space-y-2 text-xs font-mono">
              <li>
                <a href="#about" className="hover:text-[#183C2C] transition-colors">
                  About Factory
                </a>
              </li>
              <li>
                <a href="#products" className="hover:text-[#183C2C] transition-colors">
                  Product Grades
                </a>
              </li>
              <li>
                <a href="#process" className="hover:text-[#183C2C] transition-colors">
                  7-Stage Process
                </a>
              </li>
              <li>
                <a href="#anatomy" className="hover:text-[#183C2C] transition-colors">
                  Cashew Anatomy
                </a>
              </li>
              <li>
                <a href="#logistics" className="hover:text-[#183C2C] transition-colors">
                  Export Logistics
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-[#183C2C] transition-colors font-bold text-[#183C2C]">
                  RFQ Desk →
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Legal & Back to Top Row */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-500 font-mono">
          <p>© {new Date().getFullYear()} Sri Venkateswara Cashew Manufacturers. All Rights Reserved.</p>
          <div className="flex items-center gap-4">
            <span>Vetapalem, Andhra Pradesh - 523 187, India</span>
            <button
              type="button"
              onClick={scrollToTop}
              className="flex items-center gap-1 text-stone-700 hover:text-stone-900 transition-colors cursor-pointer"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
