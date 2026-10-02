import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, ZoomIn, Film, Play, Pause, Image as ImageIcon, CheckCircle2 } from 'lucide-react';
import { Reveal } from './Reveal';
import { SVCMLogo } from './SVCMLogo';
import { asset } from '../utils/assets';

const BOTANICAL_VIDEOS = [
  {
    id: 'anatomy_displayed',
    title: 'Anatomy of a Cashew Displayed',
    subtitle: '3D CONCENTRIC LAYER DISSECTION',
    src: asset('assets/cashew/anatomy_displayed.mp4'),
    badge: '3D ANATOMY',
    poster: asset('assets/cashew/cashew_fruit_rotating.jpg'),
    duration: '0:04',
    desc: 'Cinematic 3D animation presenting the concentric anatomy of the cashew drupe, separating the leathery epicarp, caustic alveolar mesocarp, and dual cotyledons.',
    metric: '5 ANATOMICAL LAYERS',
  },
  {
    id: 'shell_split',
    title: 'Shell Halves Splitting Apart',
    subtitle: 'PERICARP DEHISCENCE & MATRIX',
    src: asset('assets/cashew/shell_split_kernel.mp4'),
    badge: 'SHELL CRACKING',
    poster: asset('assets/cashew/cashew_shell_splitting.jpg'),
    duration: '0:05',
    desc: 'Slow-motion mechanical deconstruction along the natural suture line, showing the honeycombed mesocarp chambers holding caustic CNSL fluid.',
    metric: 'ZERO-BREAKAGE CRACK',
  },
  {
    id: 'kernel_split',
    title: 'Cashew Kernel Splitting in Half',
    subtitle: 'TWIN JUMBO COTYLEDONS',
    src: asset('assets/cashew/kernel_splitting.mp4'),
    badge: 'COTYLEDON SEPARATION',
    poster: asset('assets/cashew/cashew_kernel_split_halves.jpg'),
    duration: '0:05',
    desc: 'The pristine ivory seed opening to reveal the delicate internal embryonic axis and smooth ivory cotyledon surfaces.',
    metric: 'GRADE W-180 KING WHOLE',
  },
  {
    id: 'microscopic',
    title: 'Microscopic View of Kernel Embryo',
    subtitle: 'HIGH-MAGNIFICATION CELLULAR SCAN',
    src: asset('assets/cashew/microscopic_embryo.mp4'),
    badge: 'CELLULAR MACRO',
    poster: asset('assets/cashew/cashew_kernel_embryo_macro.jpg'),
    duration: '0:05',
    desc: 'Microscopic electron scanning of the embryonic shoot and oil-rich oleic lipid cells that give Vetapalem cashews their signature crunch.',
    metric: '46% OLEIC ACID STORE',
  },
];

const BOTANICAL_SPECIMENS = [
  {
    id: 1,
    title: 'Cashew Apple & Hanging Drupe',
    botanical: 'Hypocarpium & Exocarpium',
    phase: 'STAGE 01',
    src: asset('assets/cashew/cashew_nut_and_apple.jpg'),
    badge: 'TREE HARVEST',
    color: '#dc2626',
    metric: '100% ORGANIC • COASTAL ANDHRA',
    desc: 'Luscious scarlet false fruit bearing the true raw cashew nut suspended at its bottom apex.',
  },
  {
    id: 2,
    title: 'Leathery Shell & Pericarp Suture',
    botanical: 'Exocarpium Impermeabile',
    phase: 'STAGE 02',
    src: asset('assets/cashew/cashew_shell_splitting.jpg'),
    badge: 'OUTER PERICARP',
    color: '#65a30d',
    metric: 'WAXY CUTICLE • MOISTURE LOCK',
    desc: 'Greenish-grey leathery protective shield splitting cleanly along the natural longitudinal line.',
  },
  {
    id: 3,
    title: 'Botanical Drupe & Protective Coat',
    botanical: 'Pericarpium & Mesocarpium',
    phase: 'STAGE 03',
    src: asset('assets/cashew/cashew_fruit_rotating.jpg'),
    badge: 'PERICARP SHIELD',
    color: '#ea580c',
    metric: 'NATURAL HERMETIC CUTICLE',
    desc: 'Outer protective drupe layers providing natural hermetic insulation for the developing seed inside.',
  },
  {
    id: 4,
    title: 'Twin Cotyledons (Grade W-180)',
    botanical: 'Semen Anacardii (King Wholes)',
    phase: 'STAGE 04',
    src: asset('assets/cashew/cashew_kernel_split_halves.jpg'),
    badge: 'GRADE W-180',
    color: '#d97706',
    metric: '160-180 COUNT/LB • JUMBO CRISP',
    desc: 'Pristine twin creamy ivory whole cotyledons cured with Vetapalem 70°C Borma dehydration.',
  },
  {
    id: 5,
    title: 'Embryo Axis & Cellular Lipids',
    botanical: 'Axis Embryonalis & Oleic Cells',
    phase: 'STAGE 05',
    src: asset('assets/cashew/cashew_kernel_embryo_macro.jpg'),
    badge: 'MICRO EMBRYO',
    color: '#b45309',
    metric: '46% OLEIC ACID • HERMETIC SEAL',
    desc: 'High-definition macro microphotography of the delicate germ axis and nutrient lipid stores.',
  },
];

interface AnatomyStudioProps {
  onOpenModal?: (tab: 'crosscut' | 'loupe' | 'video') => void;
}

export const AnatomyStudio: React.FC<AnatomyStudioProps> = ({ onOpenModal }) => {
  const [activeTab, setActiveTab] = useState<'video' | 'specimen'>('video');
  const [activeVideoIdx, setActiveVideoIdx] = useState<number>(0);
  const [activeSpecimenIdx, setActiveSpecimenIdx] = useState<number>(0);
  const [isVideoPlaying, setIsVideoPlaying] = useState<boolean>(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleVideoToggle = () => {
    if (!videoRef.current) return;
    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsVideoPlaying(true);
    } else {
      videoRef.current.pause();
      setIsVideoPlaying(false);
    }
  };

  const currentVideo = BOTANICAL_VIDEOS[activeVideoIdx];
  const currentSpecimen = BOTANICAL_SPECIMENS[activeSpecimenIdx];

  return (
    <section id="anatomy-studio" className="py-20 sm:py-28 px-5 sm:px-8 md:px-12 w-full max-w-7xl mx-auto">
      {/* Studio Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-10 border-b border-stone-200">
        <div>
          <Reveal delay={80}>
            <div className="inline-flex items-center gap-2 border border-stone-200 bg-white/90 px-3.5 py-1.5 rounded-full shadow-sm mb-3">
              <SVCMLogo size={18} />
              <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-[#b45309] font-bold">
                INTERACTIVE CASHEW ANATOMY STUDIO
              </span>
            </div>
          </Reveal>

          <Reveal delay={160}>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-stone-900">
              High-Definition Cashew{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#78350f] via-[#b45309] to-[#d97706]">
                Motion &amp; Visuals.
              </span>
            </h2>
          </Reveal>
        </div>

        {/* View Switchers: Motion Cinema vs Photographic Specimen */}
        <Reveal delay={240}>
          <div className="flex flex-wrap items-center gap-2.5">
            <div className="bg-stone-100 p-1 rounded-2xl border border-stone-200 flex items-center gap-1">
              <button
                type="button"
                onClick={() => setActiveTab('video')}
                className={`flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-mono font-bold transition-all cursor-pointer ${
                  activeTab === 'video'
                    ? 'bg-[#d97706] text-white shadow-sm'
                    : 'text-stone-600 hover:text-stone-900'
                }`}
              >
                <Film className="w-3.5 h-3.5" />
                <span>Motion Cinema ({BOTANICAL_VIDEOS.length})</span>
              </button>

              <button
                type="button"
                onClick={() => setActiveTab('specimen')}
                className={`flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-mono font-bold transition-all cursor-pointer ${
                  activeTab === 'specimen'
                    ? 'bg-stone-900 text-white shadow-sm'
                    : 'text-stone-600 hover:text-stone-900'
                }`}
              >
                <ImageIcon className="w-3.5 h-3.5" />
                <span>Specimens ({BOTANICAL_SPECIMENS.length})</span>
              </button>
            </div>

            <motion.button
              type="button"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => onOpenModal && onOpenModal('crosscut')}
              className="flex items-center gap-1.5 rounded-xl border border-stone-300 bg-white hover:bg-stone-50 px-3.5 py-2 text-xs font-mono font-semibold text-stone-800 transition-all cursor-pointer shadow-sm"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#b45309]" />
              <span>Crosscut</span>
            </motion.button>

            <motion.button
              type="button"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => onOpenModal && onOpenModal('loupe')}
              className="flex items-center gap-1.5 rounded-xl border border-stone-300 bg-white hover:bg-stone-50 px-3.5 py-2 text-xs font-mono font-semibold text-stone-800 transition-all cursor-pointer shadow-sm"
            >
              <ZoomIn className="w-3.5 h-3.5 text-[#b45309]" />
              <span>3.5x Loupe</span>
            </motion.button>
          </div>
        </Reveal>
      </div>

      {/* VIEWPORT SECTION: FULLY VISIBLE & CRYSTAL CLEAR */}
      <div className="mt-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Left 8 Cols: Main High-Definition Display Viewport */}
        <div className="lg:col-span-8">
          <div className="relative w-full aspect-[16/10] sm:aspect-[16/9] rounded-3xl overflow-hidden border border-stone-300/90 bg-stone-950 shadow-2xl flex items-center justify-center group">
            {activeTab === 'video' ? (
              /* High-Definition Video Player */
              <div className="w-full h-full relative flex items-center justify-center">
                <video
                  ref={videoRef}
                  key={currentVideo.src}
                  src={currentVideo.src}
                  poster={currentVideo.poster}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-contain"
                />

                {/* Video Play/Pause Overlay Indicator */}
                <div className="absolute bottom-5 inset-x-5 flex items-center justify-between bg-black/85 backdrop-blur-md px-5 py-3.5 rounded-2xl border border-white/20 text-white shadow-xl">
                  <div className="flex items-center gap-3">
                    <button
                      type="button"
                      onClick={handleVideoToggle}
                      className="h-10 w-10 rounded-full bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-stone-950 flex items-center justify-center transition-transform hover:scale-105 cursor-pointer shadow-lg shrink-0"
                    >
                      {isVideoPlaying ? (
                        <Pause className="w-4 h-4 fill-stone-950" />
                      ) : (
                        <Play className="w-4 h-4 fill-stone-950 ml-0.5" />
                      )}
                    </button>

                    <div>
                      <h4 className="text-xs sm:text-sm font-bold text-white leading-tight">
                        {currentVideo.title}
                      </h4>
                      <span className="text-[10px] text-amber-400 font-mono font-semibold">
                        {currentVideo.metric} • HIGH DEFINITION
                      </span>
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={() => onOpenModal && onOpenModal('video')}
                    className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/10 hover:bg-white/20 text-xs font-mono font-semibold text-stone-200 transition-colors cursor-pointer"
                  >
                    <ZoomIn className="w-3.5 h-3.5 text-amber-400" />
                    <span>Fullscreen</span>
                  </button>
                </div>
              </div>
            ) : (
              /* Crystal-Clear Real Photographic Specimen */
              <div className="w-full h-full relative flex items-center justify-center bg-stone-950">
                <img
                  key={currentSpecimen.src}
                  src={currentSpecimen.src}
                  alt={currentSpecimen.title}
                  className="w-full h-full object-contain"
                />

                {/* Floating Specimen Info Pill */}
                <div className="absolute top-4 left-4 z-10 flex items-center gap-2 bg-stone-900/90 text-white border border-white/20 py-1.5 px-3.5 rounded-full shadow-md backdrop-blur-md">
                  <span
                    className="w-2.5 h-2.5 rounded-full"
                    style={{ backgroundColor: currentSpecimen.color }}
                  />
                  <span className="font-mono text-[10px] font-bold uppercase tracking-wider">
                    {currentSpecimen.phase} • SPECIMEN
                  </span>
                </div>

                <div className="absolute bottom-5 inset-x-5 flex items-center justify-between bg-black/85 backdrop-blur-md px-5 py-3.5 rounded-2xl border border-white/20 text-white shadow-xl">
                  <div>
                    <h4 className="text-xs sm:text-sm font-bold text-white leading-tight">
                      {currentSpecimen.title}
                    </h4>
                    <span className="text-[10px] text-amber-400 font-mono font-semibold">
                      {currentSpecimen.metric}
                    </span>
                  </div>

                  <button
                    type="button"
                    onClick={() => onOpenModal && onOpenModal('crosscut')}
                    className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/10 hover:bg-white/20 text-xs font-mono font-semibold text-stone-200 transition-colors cursor-pointer"
                  >
                    <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                    <span>Inspect Layer</span>
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Right 4 Cols: Interactive Selector Cards (Always Visible) */}
        <div className="lg:col-span-4 flex flex-col gap-3">
          <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-stone-500 font-bold mb-1 block">
            {activeTab === 'video'
              ? 'SELECT ANATOMY MOTION'
              : 'SELECT BOTANICAL SPECIMEN'}
          </span>

          {activeTab === 'video'
            ? BOTANICAL_VIDEOS.map((v, idx) => {
                const isSelected = activeVideoIdx === idx;
                return (
                  <button
                    key={v.id}
                    type="button"
                    onClick={() => {
                      setActiveVideoIdx(idx);
                      setIsVideoPlaying(true);
                    }}
                    className={`p-3.5 rounded-2xl border text-left transition-all duration-200 cursor-pointer flex items-center gap-3.5 ${
                      isSelected
                        ? 'bg-white border-amber-500 shadow-md ring-2 ring-amber-400/20'
                        : 'bg-white/80 border-stone-200/90 hover:bg-white hover:border-stone-300'
                    }`}
                  >
                    <div className="relative w-14 h-14 rounded-xl overflow-hidden bg-stone-900 border border-stone-200 shrink-0 shadow-inner">
                      <img
                        src={v.poster}
                        alt={v.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                        <Play className="w-4 h-4 fill-white text-white drop-shadow" />
                      </div>
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between">
                        <span className="font-mono text-[9px] uppercase tracking-wider text-[#b45309] font-bold">
                          {v.badge}
                        </span>
                        <span className="font-mono text-[10px] text-stone-400">
                          {v.duration}
                        </span>
                      </div>

                      <h4 className="text-xs sm:text-sm font-bold text-stone-900 leading-snug mt-0.5 truncate">
                        {v.title}
                      </h4>

                      <p className="text-[11px] text-stone-600 line-clamp-1 mt-0.5">
                        {v.desc}
                      </p>
                    </div>
                  </button>
                );
              })
            : BOTANICAL_SPECIMENS.map((s, idx) => {
                const isSelected = activeSpecimenIdx === idx;
                return (
                  <button
                    key={s.id}
                    type="button"
                    onClick={() => setActiveSpecimenIdx(idx)}
                    className={`p-3.5 rounded-2xl border text-left transition-all duration-200 cursor-pointer flex items-center gap-3.5 ${
                      isSelected
                        ? 'bg-white border-amber-500 shadow-md ring-2 ring-amber-400/20'
                        : 'bg-white/80 border-stone-200/90 hover:bg-white hover:border-stone-300'
                    }`}
                  >
                    <div className="w-14 h-14 rounded-xl overflow-hidden bg-stone-900 border border-stone-200 shrink-0 shadow-inner">
                      <img
                        src={s.src}
                        alt={s.title}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between">
                        <span
                          className="font-mono text-[9px] uppercase tracking-wider font-bold"
                          style={{ color: s.color }}
                        >
                          {s.phase}
                        </span>
                        {isSelected && (
                          <span className="text-[10px] font-mono text-[#b45309] font-bold flex items-center gap-1">
                            <CheckCircle2 className="w-3 h-3 text-[#b45309]" />
                            <span>VIEWING</span>
                          </span>
                        )}
                      </div>

                      <h4 className="text-xs sm:text-sm font-bold text-stone-900 leading-snug mt-0.5 truncate">
                        {s.title}
                      </h4>

                      <p className="text-[11px] text-stone-600 line-clamp-1 mt-0.5">
                        {s.desc}
                      </p>
                    </div>
                  </button>
                );
              })}
        </div>
      </div>
    </section>
  );
};
