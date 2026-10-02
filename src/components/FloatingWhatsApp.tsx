import React from 'react';
import { MessageSquare, Phone } from 'lucide-react';
import { SVCMLogo } from './SVCMLogo';

export const FloatingWhatsApp: React.FC = () => {
  const whatsappUrl =
    'https://wa.me/919246467237?text=' +
    encodeURIComponent(
      'Hello Murali Krishna garu, I am interested in placing a Cashew Export / Wholesale inquiry with Sri Venkateswara Cashew Manufacturers.'
    );

  return (
    <aside aria-label="Quick Export Inquiries" className="fixed bottom-6 right-5 sm:right-8 z-40 flex items-center gap-2 group">
      {/* Expanded Pill on Hover */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2.5 rounded-full bg-white/95 border border-stone-200/90 py-2 px-3.5 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 backdrop-blur-md"
        title="Chat on WhatsApp with V. Murali Krishna Murthy"
      >
        <SVCMLogo size={22} className="shrink-0" />

        <div className="flex flex-col text-left">
          <div className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="font-mono text-[10px] font-bold text-[#b45309] uppercase tracking-wider">
              EXPORT ORDERS LIVE
            </span>
          </div>
          <span className="text-xs font-bold text-stone-900 leading-tight">
            Chat with Murali Krishna
          </span>
        </div>

        <div className="h-8 w-8 rounded-full bg-[#16a34a] text-white flex items-center justify-center shrink-0 shadow-md">
          <MessageSquare className="w-4 h-4 fill-white" />
        </div>
      </a>

      {/* Quick Direct Call Button */}
      <a
        href="tel:9246467237"
        className="h-10 w-10 rounded-full bg-stone-900 hover:bg-[#d97706] text-white flex items-center justify-center shadow-xl hover:scale-110 transition-all duration-300"
        title="Call +91 9246467237"
      >
        <Phone className="w-4 h-4" />
      </a>
    </aside>
  );
};
