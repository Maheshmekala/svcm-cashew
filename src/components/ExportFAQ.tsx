import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus, Phone, MessageSquare } from 'lucide-react';
import { Reveal } from './Reveal';
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
      'We accommodate both trial consignments and commercial FCL orders. For trial orders, our MOQ is 500 kg to 2 Metric Tonnes (LCL air/sea freight). For commercial export programs, our standard consignments are 1 x 20ft FCL container (~16 Metric Tonnes / 700 standard 2x25lb cartons) or 1 x 40ft FCL container (~26 Metric Tonnes).',
  },
  {
    category: 'QUALITY & MOISTURE',
    question: 'How does the Vetapalem 70°C Borma process prevent rancidity during sea transit?',
    answer:
      'Vetapalem is world-renowned for its precision Borma drying ovens. We dehydrate the kernel cotyledons under strict hot-air equilibrium at 70°C for 24-28 hours. This cleanly detaches the tannin-rich testa skin and reduces internal moisture strictly below 4.5%. Combined with nitrogen-flush packing, it guarantees an 18-month shelf life without rancidity or microbial growth.',
  },
  {
    category: 'PACKAGING STANDARDS',
    question: 'What export packaging configurations do you offer?',
    answer:
      'Our primary export standard is 2 x 25 lbs (11.34 kg) hermetically sealed, nitrogen-flushed rectangular tin containers packed in heavy-duty 5-ply corrugated master cartons (total 50 lbs / 22.68 kg net per carton). We also provide 1 x 50 lbs multi-layer vacuum barrier flexi-pouches with gas-flush barrier for automated retail repacking lines.',
  },
  {
    category: 'LOGISTICS & PORTS',
    question: 'Which sea ports do you dispatch from and what Incoterms do you support?',
    answer:
      'Our plant in Vetapalem, Prakasam District (Andhra Pradesh) is strategically linked to two major deepwater container ports: Chennai Port (approx. 330 km) and Visakhapatnam Port. We regularly quote FOB (Free on Board) Indian ports, as well as CIF (Cost, Insurance & Freight) to key destinations including Jebel Ali (Dubai), Rotterdam, Hamburg, Felixstowe, New York/New Jersey, and Los Angeles.',
  },
  {
    category: 'INSPECTION & TESTING',
    question: 'Can we mandate third-party quality inspection prior to container stuffing?',
    answer:
      'Yes, absolutely. We welcome independent pre-shipment inspections by SGS, Intertek, or TUV. Inspectors can audit kernel count per pound, moisture percentage, breakage tolerances, aflatoxin assays, and witness container stuffing and lead sealing at our Nayenipalli factory premises.',
  },
  {
    category: 'DIRECT CONTRACTING',
    question: 'How quickly can we receive a proforma invoice or commercial quotation?',
    answer:
      'You can submit your specifications through our online RFQ calculator or message proprietor V. Murali Krishna Murthy directly on WhatsApp (+91 9246467237). Formal proforma invoices with current market spot pricing and container shipping schedules are typically issued within 2 to 4 business hours.',
  },
];

export const ExportFAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-16 sm:py-20 px-5 sm:px-8 md:px-12 w-full max-w-7xl mx-auto">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-10 border-b border-stone-200">
        <div>
          <Reveal delay={80}>
            <div className="inline-flex items-center gap-2 border border-stone-200 bg-white/90 px-3.5 py-1.5 rounded-full shadow-sm mb-3">
              <SVCMLogo size={18} />
              <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-[#b45309] font-bold">
                COMMERCIAL INQUIRIES & EXPORT PROTOCOLS
              </span>
            </div>
          </Reveal>
          <Reveal delay={160}>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-stone-900">
              Frequently Asked{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#78350f] via-[#b45309] to-[#d97706]">
                Questions.
              </span>
            </h2>
          </Reveal>
        </div>

        <Reveal delay={240}>
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
              className="flex items-center gap-2 rounded-xl border border-stone-300 bg-white hover:bg-stone-50 text-stone-800 px-4 py-2.5 text-xs font-semibold shadow-sm transition-all"
            >
              <Phone className="w-4 h-4 text-[#b45309]" />
              <span>+91 9246467237</span>
            </a>
          </div>
        </Reveal>
      </div>

      {/* Accordion List (21st.dev Style with Framer Motion AnimatePresence) */}
      <div className="mt-8 space-y-4 max-w-4xl mx-auto">
        {FAQS.map((faq, idx) => {
          const isOpen = openIndex === idx;
          return (
            <Reveal key={faq.question} delay={100 + idx * 50}>
              <div
                className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                  isOpen
                    ? 'border-amber-400/90 bg-white shadow-[0_8px_30px_rgba(217,119,6,0.08)]'
                    : 'border-stone-200/90 bg-white/80 hover:bg-white hover:border-stone-300'
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggle(idx)}
                  className="w-full p-5 sm:p-6 text-left flex items-start justify-between gap-4 cursor-pointer"
                >
                  <div className="space-y-1.5 flex-1">
                    <span className="font-mono text-[9px] uppercase tracking-[0.18em] text-[#b45309] font-bold block">
                      {faq.category}
                    </span>
                    <h3 className="text-base sm:text-lg font-bold text-stone-900 leading-snug">
                      {faq.question}
                    </h3>
                  </div>

                  <div
                    className={`h-8 w-8 rounded-full flex items-center justify-center shrink-0 transition-colors ${
                      isOpen ? 'bg-stone-900 text-white' : 'bg-stone-100 text-stone-600'
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
            </Reveal>
          );
        })}
      </div>
    </section>
  );
};
