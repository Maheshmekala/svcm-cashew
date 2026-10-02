import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Eye } from 'lucide-react';
import { SVCMLogo } from './SVCMLogo';
import { ProductModal, ProductGrade } from './ProductModal';
import { asset } from '../utils/assets';

interface ProductGradesProps {
  onSelectGrade?: (grade: string) => void;
}

export const ProductGrades: React.FC<ProductGradesProps> = ({ onSelectGrade }) => {
  const [selectedProduct, setSelectedProduct] = useState<ProductGrade | null>(null);

  const products: ProductGrade[] = [
    {
      code: 'W-180',
      name: 'King of Cashews',
      categoryTag: 'SUPER JUMBO EXPORT',
      count: '160 - 180 nuts / lb (350 - 395 / kg)',
      moisture: 'Max 4.5% Equilibrium',
      broken: 'Max 5.0% Tolerance',
      image: asset('assets/cashew/cashew_kernel_split_halves.jpg'),
      description: 'The largest, rarest, and most prized whole cashew kernel in international trade. Striking visual scale, pristine ivory color, and dense buttery mouthfeel.',
      applications: 'Ultra-luxury retail packs, festive corporate gifting, bespoke royal confectionery, and high-end culinary showcases.',
      packaging: '2 x 25 lbs (11.34 kg) hermetic nitrogen-flushed tins in 50 lbs corrugated master carton.',
      highlight: true,
    },
    {
      code: 'W-210',
      name: 'Jumbo Wholes',
      categoryTag: 'COLOSSAL COMMERCIAL',
      count: '200 - 210 nuts / lb (440 - 465 / kg)',
      moisture: 'Max 4.5% Equilibrium',
      broken: 'Max 5.0% Tolerance',
      image: 'https://images.unsplash.com/photo-1509912760195-4f6cfd8cce2c?q=80&w=600',
      description: 'Generous colossal whole kernels with uniform shape and ivory finish. Favored across Europe and North America for premium roasted lines.',
      applications: 'Gourmet salted snacking, artisanal chocolate bars, luxury hotel hospitality, and high-tier supermarket mixes.',
      packaging: '2 x 25 lbs (11.34 kg) hermetic nitrogen-flushed tins in 50 lbs master carton.',
      highlight: false,
    },
    {
      code: 'W-240',
      name: 'Large Wholes',
      categoryTag: 'SELECT EXPORT GRADE',
      count: '220 - 240 nuts / lb (485 - 530 / kg)',
      moisture: 'Max 4.5% Equilibrium',
      broken: 'Max 5.0% Tolerance',
      image: 'https://images.unsplash.com/photo-1573555657105-47a0bb37c3ea?q=80&w=600',
      description: 'Attractive large whole kernels balancing volume economics and visual prestige. Clean curve and signature crisp fracture.',
      applications: 'Dry-roasted snack mixes, flavored and spiced cashews, premium bakery decoration, and private-label retail.',
      packaging: '2 x 25 lbs (11.34 kg) hermetic nitrogen-flushed tins in 50 lbs master carton.',
      highlight: false,
    },
    {
      code: 'W-320',
      name: 'Standard Export Wholes',
      categoryTag: 'GLOBAL TRADE BENCHMARK',
      count: '300 - 320 nuts / lb (660 - 705 / kg)',
      moisture: 'Max 5.0% Equilibrium',
      broken: 'Max 5.0% Tolerance',
      image: 'https://images.unsplash.com/photo-1726771517475-e7acdd34cd8a?q=80&w=600',
      description: 'The highest volume export grade across global commodity markets. Pristine ivory color, uniform curve, and dependable crunch.',
      applications: 'Everyday premium retail packs, supermarket private labels, airline snacks, and large-scale confectionery.',
      packaging: '2 x 25 lbs (11.34 kg) hermetic nitrogen-flushed tins in 50 lbs master carton.',
      highlight: false,
    },
    {
      code: 'White Splits (JH)',
      name: 'Twin Split Cotyledons',
      categoryTag: 'CONFECTIONERY GRADE',
      count: 'Halved kernels along suture',
      moisture: 'Max 5.0% Equilibrium',
      broken: 'Clean halved cotyledons',
      image: asset('assets/cashew/cashew_kernel_split_halves.jpg'),
      description: 'Naturally separated ivory halves showing the smooth interior cotyledon surface. Retains full flavor and crunch at competitive bulk pricing.',
      applications: 'Artisanal Indian sweets (Kaju Katli), European pastries, cashew butter, nut milks, and culinary sauces.',
      packaging: '2 x 25 lbs (11.34 kg) hermetic nitrogen-flushed tins in 50 lbs master carton.',
      highlight: false,
    },
    {
      code: 'Large White Pieces (LWP)',
      name: 'Broken Wholes & Pieces',
      categoryTag: 'INDUSTRIAL INGREDIENT',
      count: 'Clean fractured kernel pieces',
      moisture: 'Max 5.0% Equilibrium',
      broken: 'Clean pieces (no meal)',
      image: asset('assets/cashew/cashew_kernel_embryo_macro.jpg'),
      description: 'Precision-sieved kernel pieces free from shell fragments or scorched meat. Ideal for commercial food processors requiring uniform chunk sizing.',
      applications: 'Granola bars, breakfast cereals, ice cream inclusions, trail mixes, and commercial bakery doughs.',
      packaging: '2 x 25 lbs (11.34 kg) hermetic nitrogen-flushed tins in 50 lbs master carton.',
      highlight: false,
    },
  ];

  const handleEnquire = (code: string) => {
    if (onSelectGrade) {
      onSelectGrade(code);
    }
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
    <section id="products" className="py-20 sm:py-28 px-5 sm:px-8 md:px-12 w-full max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-stone-200">
        <div>
          <div className="inline-flex items-center gap-2 border border-stone-200 bg-white px-3.5 py-1.5 rounded-full shadow-subtle mb-3">
            <SVCMLogo size={18} />
            <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#8A5A35] font-bold">
              OFFICIAL EXPORT SPECIFICATIONS
            </span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-[#1C1917]">
            Product Grades &amp;{' '}
            <span className="italic text-[#183C2C]">Export Specifications.</span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-stone-600 max-w-2xl">
            Graded strictly in accordance with international cashew standards. Every consignment is packed in 2 x 25 lbs vacuum nitrogen-flushed tins for 18-month moisture stability.
          </p>
        </div>

        <div className="shrink-0 flex items-center gap-2">
          <span className="font-mono text-xs text-stone-500">
            Standard: <strong>CEPC / APEDA Guidelines</strong>
          </span>
        </div>
      </div>

      {/* Product Cards Grid: 3-column on desktop */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 pt-12">
        {products.map((product, idx) => (
          <motion.div
            key={product.code}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: idx * 0.08 }}
            className={`group rounded-3xl border transition-all duration-300 flex flex-col justify-between overflow-hidden bg-white ${
              product.highlight
                ? 'border-[#C58A3A] shadow-elevated ring-1 ring-amber-400/30'
                : 'border-stone-200/90 shadow-subtle hover:border-[#183C2C]/50 hover:shadow-elevated'
            }`}
          >
            <div>
              {/* Product Image with Zoom Hover */}
              <div className="relative aspect-[16/10] overflow-hidden bg-stone-100 border-b border-stone-100">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />

                {/* Grade Badge */}
                <div className="absolute top-3 left-3 bg-[#1C1917]/90 backdrop-blur-md px-3 py-1 rounded-full text-white font-mono text-xs font-bold shadow-md">
                  {product.code}
                </div>

                {/* Quick View Button on Image */}
                <button
                  type="button"
                  onClick={() => setSelectedProduct(product)}
                  className="absolute top-3 right-3 bg-white/90 hover:bg-white text-stone-800 p-2 rounded-full shadow-md transition-all cursor-pointer"
                  title="Quick View Technical Specifications"
                  aria-label={`View specs for ${product.code}`}
                >
                  <Eye className="w-4 h-4 text-stone-700" />
                </button>

                {product.highlight && (
                  <div className="absolute bottom-3 left-3 bg-amber-500/90 text-white font-mono text-[9px] font-bold px-2.5 py-0.5 rounded-full uppercase tracking-wider shadow-sm">
                    MOST PRIZED GRADE
                  </div>
                )}
              </div>

              {/* Product Info */}
              <div className="p-6">
                <div className="flex items-center justify-between gap-2 mb-1.5">
                  <span className="font-mono text-[10px] uppercase tracking-wider text-[#8A5A35] font-bold">
                    {product.categoryTag}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-stone-900 group-hover:text-[#183C2C] transition-colors leading-snug">
                  {product.name}
                </h3>

                <p className="mt-2.5 text-xs text-stone-600 leading-relaxed line-clamp-3">
                  {product.description}
                </p>

                {/* Key Spec Grid */}
                <div className="mt-4 pt-4 border-t border-stone-100 space-y-1.5 font-mono text-[11px]">
                  <div className="flex items-center justify-between text-stone-600">
                    <span className="text-stone-400">Nut Count:</span>
                    <span className="font-semibold text-stone-900 truncate max-w-[170px] text-right">
                      {product.count}
                    </span>
                  </div>
                  <div className="flex items-center justify-between text-stone-600">
                    <span className="text-stone-400">Moisture:</span>
                    <span className="font-semibold text-emerald-700">{product.moisture}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Card Action Footer */}
            <div className="p-6 pt-0 flex items-center gap-2.5">
              <button
                type="button"
                onClick={() => setSelectedProduct(product)}
                className="flex-1 py-2.5 px-3 rounded-xl border border-stone-200 text-stone-700 hover:bg-stone-50 font-mono text-xs font-semibold transition-colors cursor-pointer text-center"
              >
                Specifications
              </button>

              <button
                type="button"
                onClick={() => handleEnquire(product.code)}
                className="flex-1 flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-[#183C2C] hover:bg-[#0F2F22] text-white font-mono text-xs font-semibold transition-colors cursor-pointer text-center shadow-sm"
              >
                <span>Enquire</span>
                <ArrowRight className="w-3.5 h-3.5 text-amber-300" />
              </button>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Quick View Specification Modal */}
      <ProductModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
        onEnquire={handleEnquire}
      />
    </section>
  );
};
