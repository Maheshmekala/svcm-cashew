import React from 'react';
import { motion } from 'framer-motion';
import { Package, ArrowRight, ShieldCheck } from 'lucide-react';
import { Reveal } from './Reveal';
import { SVCMLogo } from './SVCMLogo';

interface ExportGradesProps {
  onSelectGrade?: (grade: string) => void;
}

export const ExportGrades: React.FC<ExportGradesProps> = ({ onSelectGrade }) => {
  const grades = [
    {
      code: 'W-180',
      title: 'King of Cashews',
      tag: 'SUPER JUMBO EXPORT',
      count: '160 - 180 nuts / lb (350-395/kg)',
      moisture: 'Max 4.5%',
      broken: 'Max 5.0%',
      image: 'https://images.unsplash.com/photo-1509912760195-4f6cfd8cce2c?q=80&w=600',
      description: 'The largest, rarest, and most prized whole cashew kernel in the world. Unmatched visual grandeur and rich buttery mouthfeel for luxury retail and gifting.',
      packaging: '2 x 25 lbs Nitrogen-Flushed Tins / 50 lbs Flexi-Pouch',
      badgeColor: 'bg-amber-100 text-[#b45309] border-amber-300',
      popular: true,
    },
    {
      code: 'W-210',
      title: 'Jumbo Wholes',
      tag: 'PREMIUM COMMERCIAL',
      count: '200 - 210 nuts / lb (440-465/kg)',
      moisture: 'Max 4.5%',
      broken: 'Max 5.0%',
      image: 'https://images.unsplash.com/photo-1573555657105-47a0bb37c3ea?q=80&w=600',
      description: 'Colossal whole kernels with high uniform sizing. Popular across North America and Europe for premium roasted snack lines and confectionery.',
      packaging: '2 x 25 lbs Nitrogen-Flushed Tins / 50 lbs Flexi-Pouch',
      badgeColor: 'bg-stone-100 text-stone-800 border-stone-300',
      popular: false,
    },
    {
      code: 'W-240',
      title: 'Large Wholes',
      tag: 'SELECT EXPORT GRADE',
      count: '220 - 240 nuts / lb (485-530/kg)',
      moisture: 'Max 4.5%',
      broken: 'Max 5.0%',
      image: 'https://images.unsplash.com/photo-1726771517475-e7acdd34cd8a?q=80&w=600',
      description: 'Attractive large whole kernels balancing volume economics and visual presentation. Ideal for roasting, salting, and gourmet nut mixes.',
      packaging: '2 x 25 lbs Nitrogen-Flushed Tins / 50 lbs Flexi-Pouch',
      badgeColor: 'bg-stone-100 text-stone-800 border-stone-300',
      popular: false,
    },
    {
      code: 'W-320',
      title: 'Standard Export Wholes',
      tag: 'GLOBAL TRADE BENCHMARK',
      count: '300 - 320 nuts / lb (660-705/kg)',
      moisture: 'Max 5.0%',
      broken: 'Max 5.0%',
      image: 'https://images.unsplash.com/photo-1509912760195-4f6cfd8cce2c?q=80&w=600',
      description: 'The highest volume export grade across global commodity markets. Pristine ivory color, uniform curve, and crisp fracture.',
      packaging: '2 x 25 lbs Nitrogen-Flushed Tins / 50 lbs Flexi-Pouch',
      badgeColor: 'bg-stone-100 text-stone-800 border-stone-300',
      popular: false,
    },
  ];

  const handleInquire = (gradeCode: string) => {
    if (onSelectGrade) {
      onSelectGrade(gradeCode);
    }
    const el = document.getElementById('inquiry');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="export-grades" className="py-20 sm:py-28 px-5 sm:px-8 md:px-12 w-full max-w-7xl mx-auto">
      {/* Section Header with Official SVCM Logo */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-stone-200">
        <div>
          <Reveal delay={100}>
            <div className="flex items-center gap-3 mb-3">
              <SVCMLogo size={32} />
              <div className="flex flex-col">
                <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-[#b45309] font-bold">
                  SRI VENKATESWARA CASHEW MANUFACTURERS
                </span>
                <span className="text-xs text-stone-500 font-mono">
                  Official Trade Standard & Specifications
                </span>
              </div>
            </div>
          </Reveal>

          <Reveal delay={180}>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-stone-900">
              Export Grades Catalog.
            </h2>
          </Reveal>
        </div>

        <Reveal delay={250} className="max-w-md">
          <p className="text-sm sm:text-base text-stone-600 leading-relaxed">
            All kernels undergo mechanical size grading, optical color sorting, and 70°C Borma moisture equilibrium before hermetic vacuum nitrogen packing.
          </p>
        </Reveal>
      </div>

      {/* Grade Cards Grid (21st.dev Style with Framer Motion) */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
        {grades.map((g, idx) => (
          <Reveal key={g.code} delay={150 + idx * 100}>
            <motion.div
              whileHover={{ y: -8, transition: { duration: 0.25 } }}
              className={`rounded-2xl border bg-white/95 backdrop-blur-xl p-5 shadow-[0_8px_30px_rgba(0,0,0,0.04)] hover:shadow-[0_16px_40px_rgba(217,119,6,0.12)] transition-all duration-300 flex flex-col justify-between h-full group relative overflow-hidden ${
                g.popular ? 'border-amber-400 ring-2 ring-amber-400/20' : 'border-stone-200/90 hover:border-amber-400'
              }`}
            >
              {g.popular && (
                <div className="absolute top-0 right-0 bg-[#d97706] text-white text-[9px] font-mono font-bold uppercase tracking-widest px-3 py-1 rounded-bl-xl shadow-sm">
                  MOST PRIZED
                </div>
              )}

              <div>
                {/* Specimen Thumbnail */}
                <div className="relative rounded-xl overflow-hidden aspect-[4/3] mb-4 border border-stone-200 bg-stone-100">
                  <img
                    src={g.image}
                    alt={g.title}
                    className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute top-2.5 left-2.5">
                    <span className={`px-2.5 py-1 rounded-md text-[10px] font-mono font-bold border ${g.badgeColor}`}>
                      {g.tag}
                    </span>
                  </div>
                </div>

                {/* Grade Code & Title */}
                <div className="flex items-baseline justify-between mb-2">
                  <h3 className="text-2xl font-bold text-stone-900 group-hover:text-[#b45309] transition-colors">
                    {g.code}
                  </h3>
                  <span className="text-xs font-mono text-stone-500 font-medium">
                    {g.title}
                  </span>
                </div>

                <p className="text-xs text-stone-600 leading-relaxed mb-4">
                  {g.description}
                </p>

                {/* Technical Specifications */}
                <div className="space-y-1.5 py-3 border-y border-stone-100 font-mono text-[11px] text-stone-700">
                  <div className="flex justify-between">
                    <span className="text-stone-400">Nut Count:</span>
                    <span className="font-semibold text-stone-900">{g.count}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-stone-400">Moisture:</span>
                    <span className="font-semibold text-emerald-700">{g.moisture}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-stone-400">Broken Rate:</span>
                    <span className="font-semibold text-stone-900">{g.broken}</span>
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <div className="mt-5 pt-3">
                <motion.button
                  type="button"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => handleInquire(g.code)}
                  className={`w-full flex items-center justify-center gap-2 rounded-xl py-3 px-4 text-xs font-semibold transition-all duration-300 shadow-sm cursor-pointer ${
                    g.popular
                      ? 'bg-gradient-to-r from-[#d97706] to-[#b45309] text-white hover:from-[#b45309] hover:to-[#92400e]'
                      : 'bg-stone-900 hover:bg-[#d97706] text-white'
                  }`}
                >
                  <span>Select for RFQ</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </motion.button>
              </div>
            </motion.div>
          </Reveal>
        ))}
      </div>

      {/* Export Packaging Standards Card */}
      <Reveal delay={450}>
        <motion.div
          whileHover={{ y: -3 }}
          className="mt-12 rounded-2xl border border-stone-200/90 bg-white/95 p-6 sm:p-8 backdrop-blur-md shadow-sm flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <div className="flex items-start gap-4">
            <div className="p-3.5 rounded-2xl bg-amber-100/80 border border-amber-200 text-[#b45309] shrink-0 shadow-sm">
              <Package className="w-7 h-7" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h4 className="text-lg font-bold text-stone-900">
                  Export Packaging & Container Logistics
                </h4>
                <span className="px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 text-[10px] font-mono font-bold">
                  NITROGEN FLUSHED
                </span>
              </div>
              <p className="text-sm text-stone-600 mt-1 max-w-2xl leading-relaxed">
                Standard export consignments are packed in 2 x 25 lbs (11.34 kg) hermetically sealed tins with N2/CO2 inert gas injection, or 50 lbs (22.68 kg) multilayer aluminum vacuum barrier pouches in master export cartons. 1 x 20ft FCL container holds ~700 cartons (15.87 Metric Tons).
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <div className="flex items-center gap-2 font-mono text-xs text-stone-600 bg-stone-50 border border-stone-200 px-3.5 py-2.5 rounded-xl">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              <span>18-Month Gas Barrier</span>
            </div>
          </div>
        </motion.div>
      </Reveal>
    </section>
  );
};
