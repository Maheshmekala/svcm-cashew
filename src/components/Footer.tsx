import React from 'react';
import { Phone, Mail, MapPin, ExternalLink, ShieldCheck } from 'lucide-react';
import { SVCMLogo } from './SVCMLogo';

export const Footer: React.FC = () => {
  return (
    <footer id="contact" className="border-t border-stone-200 bg-[#faf8f2] pt-16 pb-12 px-5 sm:px-8 md:px-12 w-full text-stone-700">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-stone-200">
          {/* Column 1: Brand & Logo */}
          <div className="space-y-4 lg:col-span-1">
            <div className="flex items-center gap-3">
              <SVCMLogo size={42} />
              <div>
                <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-[#b45309] font-bold block">
                  SRI VENKATESWARA
                </span>
                <span className="text-base font-bold text-stone-900 leading-tight block">
                  CASHEW MANUFACTURERS
                </span>
              </div>
            </div>
            <p className="text-xs text-stone-600 leading-relaxed">
              Decades of artisan grading and thermal Borma dehydration in Vetapalem, Andhra Pradesh — India's legendary cashew export processing hub.
            </p>
            <div className="flex items-center gap-2 text-[11px] font-mono text-emerald-800">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              <span>100% Whole Kernel Guarantee</span>
            </div>
          </div>

          {/* Column 2: Management & Factory Coordinates */}
          <div className="space-y-3">
            <span className="font-mono text-[11px] uppercase tracking-wider text-stone-900 font-bold block">
              Factory & Plant Office
            </span>
            <div className="space-y-2 text-xs text-stone-600">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#b45309] shrink-0 mt-0.5" />
                <span>
                  Nayenipalli Industrial Area, Sarvodaya Colony, Vetapalem - 523 187, Prakasam Dist (A.P.), India
                </span>
              </div>
              <div className="pt-2 border-t border-stone-200/80">
                <span className="font-semibold text-stone-900 block">Proprietor & Exporter:</span>
                <span>V. Murali Krishna Murthy</span>
              </div>
            </div>
          </div>

          {/* Column 3: Telecommunications */}
          <div className="space-y-3">
            <span className="font-mono text-[11px] uppercase tracking-wider text-stone-900 font-bold block">
              Contact Directory
            </span>
            <div className="space-y-2 font-mono text-xs">
              <a
                href="tel:9246467237"
                className="flex items-center gap-2 text-stone-800 hover:text-[#b45309] transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-[#b45309]" />
                <span>Cell: +91 9246467237</span>
              </a>

              <a
                href="tel:9246467406"
                className="flex items-center gap-2 text-stone-800 hover:text-[#b45309] transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-[#b45309]" />
                <span>Cell: +91 9246467406</span>
              </a>

              <div className="flex items-center gap-2 text-stone-600">
                <span className="w-3.5 text-center font-bold text-[#b45309]">☎</span>
                <span>Off: 08594-246237 / 246897</span>
              </div>

              <a
                href="mailto:venkateswaracashew@gmail.com"
                className="flex items-center gap-2 text-stone-800 hover:text-[#b45309] transition-colors truncate"
              >
                <Mail className="w-3.5 h-3.5 text-[#b45309] shrink-0" />
                <span className="truncate">venkateswaracashew@gmail.com</span>
              </a>
            </div>
          </div>

          {/* Column 4: Export Quick Links */}
          <div className="space-y-3">
            <span className="font-mono text-[11px] uppercase tracking-wider text-stone-900 font-bold block">
              Export Programs
            </span>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#export-grades" className="hover:text-[#b45309] transition-colors flex items-center gap-1.5">
                  <span>King Jumbo (Grade W-180)</span>
                  <ExternalLink className="w-3 h-3 text-stone-400" />
                </a>
              </li>
              <li>
                <a href="#export-grades" className="hover:text-[#b45309] transition-colors flex items-center gap-1.5">
                  <span>Jumbo Wholes (W-210 & W-240)</span>
                  <ExternalLink className="w-3 h-3 text-stone-400" />
                </a>
              </li>
              <li>
                <a href="#export-grades" className="hover:text-[#b45309] transition-colors flex items-center gap-1.5">
                  <span>Standard Export (Grade W-320)</span>
                  <ExternalLink className="w-3 h-3 text-stone-400" />
                </a>
              </li>
              <li>
                <a href="#inquiry" className="hover:text-[#b45309] transition-colors flex items-center gap-1.5 font-semibold text-stone-900">
                  <span>Instant Export RFQ Desk</span>
                  <ExternalLink className="w-3 h-3 text-[#b45309]" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Legal Row */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-500 font-mono">
          <p>© {new Date().getFullYear()} Sri Venkateswara Cashew Manufacturers. All Rights Reserved.</p>
          <p>Vetapalem, Prakasam District, Andhra Pradesh - 523 187, India.</p>
        </div>
      </div>
    </footer>
  );
};
