import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus, Phone, MessageSquare } from 'lucide-react';
import { SVCMLogo } from './SVCMLogo';

interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

const FAQS: FAQItem[] = [
  {
    category: 'CONSIGNMENT & MOQ',
    question: 'What is the Minimum Order Quantity (MOQ) for export orders?',
    answer:
      'We accommodate both trial consignments and full commercial container allocations. For trial evaluation, our MOQ is 500 kg to 2 Metric Tonnes. For standard sea freight programs, commercial consignments are 1 x 20ft FCL container (~16 Metric Tonnes / 700 cartons of 2x25 lbs) or 1 x 40ft FCL container (~26 Metric Tonnes / 1150 cartons).',
  },
  {
    category: 'QUALITY & MOISTURE',
    question: 'How does the Vetapalem 70°C Borma process prevent rancidity during sea transit?',
    answer:
      'Vetapalem is world-renowned for its precision Borma drying ovens. We dehydrate raw cashew kernels under continuous hot-air equilibrium at 70°C for 24 to 28 hours. This gently loosens the tannin-rich testa skin while stabilizing core moisture strictly below 4.5%. Combined with nitrogen-flush packing, it guarantees an 18-month shelf life without rancidity or moisture absorption during oceanic transit.',
  },
  {
    category: 'PACKAGING STANDARDS',
    question: 'What export packaging configurations do you supply?',
    answer:
      'Our primary export standard is 2 x 25 lbs (11.34 kg) hermetically sealed, nitrogen-flushed rectangular tin containers packed in heavy-duty 5-ply corrugated export master cartons (50 lbs / 22.68 kg net per carton). We also provide 1 x 50 lbs multi-layer vacuum barrier flexi-pouches designed for automated institutional repacking facilities.',
  },
  {
    category: 'LOGISTICS & PORTS',
    question: 'Which sea ports do you dispatch from and what Incoterms do you support?',
    answer:
      'Our factory in Vetapalem, Prakasam District (Andhra Pradesh) is strategically linked to two major deepwater container ports: Chennai Port (approx. 330 km) and Visakhapatnam Port. We regularly quote FOB (Free on Board) Indian ports, as well as CIF (Cost, Insurance & Freight) to key global ports including Jebel Ali (Dubai), Rotterdam, Hamburg, Felixstowe, New York/New Jersey, and Singapore.',
  },
  {
    category: 'INSPECTION & TESTING',
    question: 'Can buyers mandate third-party quality inspection prior to container stuffing?',
    answer:
      'Yes, absolutely. We welcome independent pre-shipment inspections by internationally accredited agencies such as SGS, Intertek, or TUV. Inspectors can audit kernel count per pound, moisture percentages, breakage tolerances, and witness container stuffing and high-security lead sealing directly at our Nayenipalli factory premises.',
  },
  {
    category: 'COMMERCIAL CONTRACTING',
    question: 'How quickly can we receive a proforma invoice or commercial quotation?',
    answer:
      'Submit your specifications through our RFQ desk or reach proprietor V. Murali Krishna Murthy directly on WhatsApp (+91 9246467237). Formal proforma invoices with current market spot pricing and container shipping schedules are issued within 2 to 4 business hours.',
  },
];

export const ExportFAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-20 sm:py-28 px-5 sm:px-8 md:px-12 w-full max-w-7xl mx-auto border-t border-stone-200">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-10 border-b border-stone-200">
        <div>
          <div className="inline-flex items-center gap-2 border border-stone-200 bg-white px-3.5 py-1.5 rounded-full shadow-subtle mb-3">
            <SVCMLogo size={18} />
            <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#8A5A35] font-bold">
              COMMERCIAL INQUIRIES &amp; PROTOCOLS
            </span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-[#1C1917]">
            Frequently Asked{' '}
            <span className="italic text-[#183C2C]">Questions.</span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-stone-600 max-w-2xl">
            Clear, unambiguous answers on export packaging standards, sea freight logistics, MOQs, and third-party inspection protocols.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <a
            href="https://wa.me/919246467237"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-xl bg-[#16a34a] hover:bg-[#15803d] text-white px-4 py-2.5 text-xs font-semibold shadow-md transition-all cursor-pointer"
          >
            <MessageSquare className="w-4 h-4 fill-white" />
            <span>Ask on WhatsApp</span>
          </a>
          <a
            href="tel:9246467237"
            className="flex items-center gap-2 rounded-xl border border-stone-300 bg-white hover:bg-stone-50 text-stone-800 px-4 py-2.5 text-xs font-semibold shadow-subtle transition-all"
          >
            <Phone className="w-4 h-4 text-[#8A5A35]" />
            <span>+91 9246467237</span>
          </a>
        </div>
      </div>

      {/* Accordion List */}
      <div className="mt-10 space-y-4 max-w-4xl mx-auto">
        {FAQS.map((faq, idx) => {
          const isOpen = openIndex === idx;
          return (
            <div
              key={faq.question}
              className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                isOpen
                  ? 'border-amber-400 bg-white shadow-elevated'
                  : 'border-stone-200/90 bg-white/90 hover:bg-white hover:border-stone-300'
              }`}
            >
              <button
                type="button"
                onClick={() => toggle(idx)}
                className="w-full p-5 sm:p-6 text-left flex items-start justify-between gap-4 cursor-pointer"
              >
                <div className="space-y-1.5 flex-1">
                  <span className="font-mono text-[9px] uppercase tracking-[0.18em] text-[#8A5A35] font-bold block">
                    {faq.category}
                  </span>
                  <h3 className="text-base sm:text-lg font-bold text-stone-900 leading-snug">
                    {faq.question}
                  </h3>
                </div>

                <div
                  className={`h-8 w-8 rounded-full flex items-center justify-center shrink-0 transition-colors ${
                    isOpen ? 'bg-[#183C2C] text-amber-300' : 'bg-stone-100 text-stone-600'
                  }`}
                >
                  {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                </div>
              </button>

              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    key="content"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <div className="px-5 sm:px-6 pb-6 pt-1 text-sm sm:text-base text-stone-600 leading-relaxed border-t border-stone-100 mt-1">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </section>
  );
};
