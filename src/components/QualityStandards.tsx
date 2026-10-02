import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, CheckCircle2 } from 'lucide-react';
import { SVCMLogo } from './SVCMLogo';

export const QualityStandards: React.FC = () => {
  const standards = [
    {
      title: 'APEDA Export Regulatory Compliance',
      body: 'Processed and packed in strict alignment with guidelines from the Agricultural and Processed Food Products Export Development Authority (Ministry of Commerce & Industry, Government of India).',
      tag: 'EXPORT REGULATION',
    },
    {
      title: 'Mandatory Phytosanitary Certification',
      body: 'Official Plant Quarantine and Phytosanitary Certificate issued by Indian authorities accompanying every ocean and air consignment for seamless port clearance.',
      tag: 'CUSTOMS DOCUMENTATION',
    },
    {
      title: 'Official Certificate of Origin',
      body: 'Authorized Chamber of Commerce documentation confirming single-origin Indian cashew harvesting and processing for tariff and import duty optimization.',
      tag: 'ORIGIN VERIFICATION',
    },
    {
      title: 'Third-Party Inspection Readiness',
      body: 'Complete openness to pre-shipment inspections by independent agencies including SGS, Intertek, or buyer-appointed inspectors witnessing container stuffing.',
      tag: 'PRE-SHIPMENT AUDIT',
    },
  ];

  return (
    <section id="standards" className="py-20 sm:py-28 px-5 sm:px-8 md:px-12 w-full max-w-7xl mx-auto border-t border-stone-200">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Column: Heading and Context (5 cols) */}
        <div className="lg:col-span-5 space-y-5">
          <div className="inline-flex items-center gap-2 border border-stone-200 bg-white px-3.5 py-1.5 rounded-full shadow-subtle">
            <SVCMLogo size={18} />
            <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#8A5A35] font-bold">
              REGULATORY &amp; EXPORT COMPLIANCE
            </span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-[#1C1917] leading-tight">
            Export Standards &amp;{' '}
            <span className="italic text-[#183C2C]">Regulatory Assurances.</span>
          </h2>

          <p className="text-sm sm:text-base text-stone-700 leading-relaxed">
            International food import standards demand complete transparency and flawless documentation. We provide verified export credentials on every consignment dispatched from our Vetapalem factory.
          </p>

          <div className="p-4 rounded-2xl bg-amber-50/70 border border-amber-200 text-xs text-stone-700 flex items-start gap-3">
            <ShieldCheck className="w-5 h-5 text-[#8A5A35] shrink-0 mt-0.5" />
            <p>
              <strong>Third-Party Witness:</strong> Buyers are welcome to appoint independent surveyors (SGS / Intertek) to test moisture, count per pound, and witness container lead-sealing.
            </p>
          </div>
        </div>

        {/* Right Column: 4 Compliance Cards (7 cols) */}
        <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-5">
          {standards.map((item, idx) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: idx * 0.08 }}
              className="p-6 rounded-3xl bg-white border border-stone-200/90 shadow-subtle hover:shadow-elevated transition-all flex flex-col justify-between"
            >
              <div>
                <span className="font-mono text-[9px] uppercase tracking-wider text-[#C58A3A] font-bold bg-amber-50 border border-amber-200 px-2 py-0.5 rounded-full inline-block mb-3">
                  {item.tag}
                </span>

                <h3 className="text-base font-bold text-stone-900 leading-snug">
                  {item.title}
                </h3>

                <p className="mt-2 text-xs text-stone-600 leading-relaxed">
                  {item.body}
                </p>
              </div>

              <div className="mt-5 pt-3 border-t border-stone-100 flex items-center gap-1.5 text-xs font-mono text-emerald-800 font-semibold">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                <span>Consignment Ready</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
