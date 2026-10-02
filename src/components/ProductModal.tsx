import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, FileText, Phone } from 'lucide-react';
import { SVCMLogo } from './SVCMLogo';

export interface ProductGrade {
  code: string;
  name: string;
  categoryTag: string;
  count: string;
  moisture: string;
  broken: string;
  image: string;
  description: string;
  applications: string;
  packaging: string;
  highlight?: boolean;
}

interface ProductModalProps {
  product: ProductGrade | null;
  onClose: () => void;
  onEnquire: (code: string) => void;
}

export const ProductModal: React.FC<ProductModalProps> = ({ product, onClose, onEnquire }) => {
  if (!product) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-stone-900/60 backdrop-blur-md">
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 12 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.96, y: 12 }}
          transition={{ duration: 0.25, ease: 'easeOut' }}
          className="relative w-full max-w-2xl rounded-3xl bg-white p-6 sm:p-8 shadow-2xl border border-stone-200 overflow-hidden max-h-[90vh] overflow-y-auto"
        >
          {/* Header */}
          <div className="flex items-center justify-between pb-4 border-b border-stone-200">
            <div className="flex items-center gap-2.5">
              <SVCMLogo size={26} />
              <div>
                <span className="font-mono text-[9px] uppercase tracking-widest text-[#C58A3A] font-bold block">
                  TECHNICAL SPECIFICATION • SVCM
                </span>
                <h3 className="text-lg font-bold text-stone-900 leading-tight">
                  {product.code} — {product.name}
                </h3>
              </div>
            </div>

            <button
              type="button"
              onClick={onClose}
              className="rounded-full p-2 text-stone-500 hover:bg-stone-100 hover:text-stone-900 transition-colors cursor-pointer"
              aria-label="Close Specification Modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Product Media & Details */}
          <div className="my-6 grid grid-cols-1 sm:grid-cols-12 gap-6 items-center">
            <div className="sm:col-span-5 rounded-2xl overflow-hidden border border-stone-200 aspect-square bg-stone-50 shadow-inner">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="sm:col-span-7 space-y-3">
              <div className="inline-block px-2.5 py-1 rounded-full bg-amber-50 border border-amber-200 font-mono text-[10px] font-bold text-[#8A5A35]">
                {product.categoryTag}
              </div>

              <p className="text-xs sm:text-sm text-stone-700 leading-relaxed">
                {product.description}
              </p>

              <div className="pt-2 border-t border-stone-100 space-y-1.5 font-mono text-xs">
                <div className="flex justify-between py-1 border-b border-stone-100">
                  <span className="text-stone-500">Kernel Count:</span>
                  <span className="font-bold text-stone-900">{product.count}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-stone-100">
                  <span className="text-stone-500">Max Moisture:</span>
                  <span className="font-bold text-emerald-700">{product.moisture}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-stone-100">
                  <span className="text-stone-500">Defects/Broken:</span>
                  <span className="font-bold text-stone-900">{product.broken}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Application & Export Packaging Standards */}
          <div className="space-y-3 p-4 rounded-2xl bg-[#FAF8F2] border border-stone-200 text-xs">
            <div>
              <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-stone-500 block mb-1">
                RECOMMENDED APPLICATIONS:
              </span>
              <p className="text-stone-800 leading-relaxed">{product.applications}</p>
            </div>
            <div className="pt-2 border-t border-stone-200/60">
              <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-stone-500 block mb-1">
                EXPORT PACKAGING FORMAT:
              </span>
              <p className="text-stone-800 font-mono">{product.packaging}</p>
            </div>
          </div>

          {/* Modal Action Footer */}
          <div className="mt-6 flex flex-col sm:flex-row items-center justify-between gap-3 pt-4 border-t border-stone-200">
            <a
              href="tel:9246467237"
              className="flex items-center gap-1.5 text-xs font-mono text-stone-600 hover:text-stone-900"
            >
              <Phone className="w-3.5 h-3.5 text-[#C58A3A]" />
              <span>Direct Call: +91 9246467237</span>
            </a>

            <div className="flex items-center gap-2.5 w-full sm:w-auto">
              <button
                type="button"
                onClick={onClose}
                className="flex-1 sm:flex-initial px-4 py-2.5 rounded-xl border border-stone-300 text-stone-700 text-xs font-semibold hover:bg-stone-50 transition-colors cursor-pointer"
              >
                Close
              </button>

              <button
                type="button"
                onClick={() => {
                  onEnquire(product.code);
                  onClose();
                }}
                className="flex-1 sm:flex-initial flex items-center justify-center gap-1.5 px-5 py-2.5 rounded-xl bg-[#183C2C] hover:bg-[#0F2F22] text-white text-xs font-semibold shadow-md transition-colors cursor-pointer"
              >
                <FileText className="w-3.5 h-3.5 text-amber-300" />
                <span>Enquire About {product.code}</span>
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
