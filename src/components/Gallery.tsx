import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ZoomIn, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { SVCMLogo } from './SVCMLogo';
import { asset } from '../utils/assets';

interface GalleryItem {
  id: number;
  title: string;
  category: string;
  src: string;
  caption: string;
  aspect: string;
}

export const Gallery: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);
  const [activeFilter, setActiveFilter] = useState<string>('all');

  const galleryItems: GalleryItem[] = [
    {
      id: 1,
      title: 'Hanging Drupe & Tree-Ripened Apple',
      category: 'harvest',
      src: asset('assets/cashew/cashew_nut_and_apple.jpg'),
      caption: 'Single-estate organic cashew apple with hanging raw nut harvested at peak maturity in coastal Andhra Pradesh.',
      aspect: 'aspect-[4/3]',
    },
    {
      id: 2,
      title: 'Pristine Grade W-180 Ivory Cotyledons',
      category: 'finished',
      src: asset('assets/cashew/cashew_kernel_split_halves.jpg'),
      caption: 'Twin jumbo cotyledons split cleanly along the natural longitudinal axis, cured to <4.5% moisture with zero scorch.',
      aspect: 'aspect-square',
    },
    {
      id: 3,
      title: 'Pericarp Shell Dehiscence',
      category: 'processing',
      src: asset('assets/cashew/cashew_shell_splitting.jpg'),
      caption: 'Mechanical fracture along the ventral suture after uniform steam conditioning, leaving the kernel intact.',
      aspect: 'aspect-[4/3]',
    },
    {
      id: 4,
      title: 'Embryonic Axis & Oleic Cellular Macro',
      category: 'finished',
      src: asset('assets/cashew/cashew_kernel_embryo_macro.jpg'),
      caption: 'High-magnification botanical capture of the delicate kernel germ surrounded by dense oleic lipid cells.',
      aspect: 'aspect-square',
    },
    {
      id: 5,
      title: 'Cashew Drupe Outer Cuticle',
      category: 'harvest',
      src: asset('assets/cashew/cashew_fruit_rotating.jpg'),
      caption: 'Smooth wax-coated pericarp providing natural hermetic insulation against tropical humidity.',
      aspect: 'aspect-[4/3]',
    },
    {
      id: 6,
      title: 'Honeycomb Alveolar Tissue',
      category: 'processing',
      src: asset('assets/cashew/cashew_apple_skin.jpg'),
      caption: 'Spongy mesocarp chambers that protect the inner seed during development.',
      aspect: 'aspect-square',
    },
    {
      id: 7,
      title: 'Complete Botanical Diagram Layout',
      category: 'botanical',
      src: asset('assets/cashew/cashew_anatomy_diagram.jpg'),
      caption: 'Cellular dissection and architectural schematic of the five concentric layers of Anacardium Occidentale.',
      aspect: 'aspect-[16/10]',
    },
    {
      id: 8,
      title: 'Official Plant Visiting Card & Credentials',
      category: 'factory',
      src: asset('visitingcard.jpg'),
      caption: 'Official business card of Sri Venkateswara Cashew Manufacturers, Nayenipalli Industrial Area, Vetapalem.',
      aspect: 'aspect-[16/10]',
    },
  ];

  // Keyboard navigation for Lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!selectedImage) return;
      if (e.key === 'Escape') setSelectedImage(null);
      if (e.key === 'ArrowRight') {
        const currentIndex = galleryItems.findIndex((item) => item.id === selectedImage.id);
        const nextIndex = (currentIndex + 1) % galleryItems.length;
        setSelectedImage(galleryItems[nextIndex]);
      }
      if (e.key === 'ArrowLeft') {
        const currentIndex = galleryItems.findIndex((item) => item.id === selectedImage.id);
        const prevIndex = (currentIndex - 1 + galleryItems.length) % galleryItems.length;
        setSelectedImage(galleryItems[prevIndex]);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedImage]);

  const filteredItems =
    activeFilter === 'all'
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeFilter);

  return (
    <section id="gallery" className="py-20 sm:py-28 px-5 sm:px-8 md:px-12 w-full max-w-7xl mx-auto border-t border-stone-200">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-10 border-b border-stone-200">
        <div>
          <div className="inline-flex items-center gap-2 border border-stone-200 bg-white px-3.5 py-1.5 rounded-full shadow-subtle mb-3">
            <SVCMLogo size={18} />
            <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#8A5A35] font-bold">
              PHOTOGRAPHIC ARCHIVE
            </span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-[#1C1917]">
            Specimen &amp;{' '}
            <span className="italic text-[#183C2C]">Processing Gallery.</span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-stone-600 max-w-2xl">
            Authentic photography capturing the single-origin cashew journey from tree harvest in coastal Andhra to calibrated export whole cotyledons.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center gap-2">
          {[
            { id: 'all', label: 'All Media' },
            { id: 'harvest', label: 'Harvest' },
            { id: 'processing', label: 'Processing' },
            { id: 'finished', label: 'Export Kernels' },
            { id: 'botanical', label: 'Diagrams' },
          ].map((tab) => (
            <button
              key={tab.id}
              type="button"
              onClick={() => setActiveFilter(tab.id)}
              className={`px-3 py-1.5 rounded-xl font-mono text-xs transition-all cursor-pointer ${
                activeFilter === tab.id
                  ? 'bg-[#183C2C] text-white font-bold shadow-subtle'
                  : 'bg-white border border-stone-200 text-stone-600 hover:bg-stone-50'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Editorial Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 pt-10">
        {filteredItems.map((item, idx) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: idx * 0.05 }}
            onClick={() => setSelectedImage(item)}
            className="group relative rounded-3xl overflow-hidden border border-stone-200/90 bg-stone-900 shadow-subtle hover:shadow-elevated hover:border-[#183C2C] transition-all cursor-pointer"
          >
            <div className={`${item.aspect} w-full overflow-hidden`}>
              <img
                src={item.src}
                alt={item.title}
                loading="lazy"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>

            {/* Hover Caption Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-5 flex flex-col justify-end text-white">
              <span className="font-mono text-[9px] uppercase tracking-wider text-amber-300 font-bold block mb-1">
                {item.category.toUpperCase()}
              </span>
              <h4 className="text-xs sm:text-sm font-bold leading-snug">
                {item.title}
              </h4>
              <p className="text-[11px] text-stone-300 mt-1 line-clamp-2">
                {item.caption}
              </p>
              <div className="mt-3 flex items-center gap-1.5 text-[10px] font-mono text-amber-300 font-bold">
                <ZoomIn className="w-3.5 h-3.5" />
                <span>Click to Expand</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8 bg-stone-950/85 backdrop-blur-md"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-4xl rounded-3xl bg-stone-900 border border-stone-700 overflow-hidden shadow-2xl text-white flex flex-col max-h-[92vh]"
            >
              {/* Modal Top Bar */}
              <div className="flex items-center justify-between p-4 px-6 border-b border-stone-800 bg-black/40">
                <div className="flex items-center gap-2">
                  <SVCMLogo size={22} />
                  <span className="font-mono text-xs font-bold text-amber-300 uppercase">
                    SVCM Specimen Archive
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <span className="font-mono text-xs text-stone-400 hidden sm:inline">
                    Use Left / Right Arrows
                  </span>
                  <button
                    type="button"
                    onClick={() => setSelectedImage(null)}
                    className="p-1.5 rounded-full hover:bg-white/10 text-stone-300 hover:text-white transition-colors cursor-pointer"
                    aria-label="Close Lightbox"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Main Expanded Image */}
              <div className="relative flex-1 bg-black flex items-center justify-center p-4 overflow-hidden min-h-[300px] sm:min-h-[460px]">
                <img
                  src={selectedImage.src}
                  alt={selectedImage.title}
                  className="max-h-[60vh] max-w-full object-contain rounded-xl"
                />

                {/* Left / Right Nav Buttons */}
                <button
                  type="button"
                  onClick={() => {
                    const currentIndex = galleryItems.findIndex((item) => item.id === selectedImage.id);
                    const prevIndex = (currentIndex - 1 + galleryItems.length) % galleryItems.length;
                    setSelectedImage(galleryItems[prevIndex]);
                  }}
                  className="absolute left-4 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-black/60 hover:bg-black/90 text-white border border-white/20 transition-all cursor-pointer"
                  aria-label="Previous Image"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>

                <button
                  type="button"
                  onClick={() => {
                    const currentIndex = galleryItems.findIndex((item) => item.id === selectedImage.id);
                    const nextIndex = (currentIndex + 1) % galleryItems.length;
                    setSelectedImage(galleryItems[nextIndex]);
                  }}
                  className="absolute right-4 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-black/60 hover:bg-black/90 text-white border border-white/20 transition-all cursor-pointer"
                  aria-label="Next Image"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>

              {/* Modal Bottom Caption Bar */}
              <div className="p-5 px-6 bg-stone-900 border-t border-stone-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs">
                <div>
                  <h4 className="text-sm font-bold text-white">{selectedImage.title}</h4>
                  <p className="text-stone-400 mt-0.5 max-w-xl">{selectedImage.caption}</p>
                </div>
                <span className="font-mono text-[10px] text-amber-300 font-bold px-2.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 uppercase tracking-wider shrink-0">
                  {selectedImage.category}
                </span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
