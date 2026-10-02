import React, { useState } from 'react';
import { X, ZoomIn, Eye, Sparkles, Play, Pause, Film } from 'lucide-react';
import { SVCMLogo } from './SVCMLogo';
import { asset } from '../utils/assets';

interface CrosscutLoupeModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialTab?: 'crosscut' | 'loupe' | 'video';
}

const VIDEOS = [
  {
    id: 'anatomy',
    title: 'Anatomy of a Cashew Displayed',
    desc: '3D botanical deconstruction showing all five concentric layers from epicarp to embryo.',
    src: asset('assets/cashew/anatomy_displayed.mp4'),
    badge: '3D DECONSTRUCTION',
  },
  {
    id: 'shell',
    title: 'Shell Halves Splitting Apart',
    desc: 'Pericarp cracking along the natural suture line, revealing the honeycombed mesocarp.',
    src: asset('assets/cashew/shell_split_kernel.mp4'),
    badge: 'MECHANICAL CRACK',
  },
  {
    id: 'kernel',
    title: 'Cashew Kernel Splitting into Halves',
    desc: 'Twin cotyledons separating along the longitudinal axis, showing pristine ivory meat.',
    src: asset('assets/cashew/kernel_splitting.mp4'),
    badge: 'COTYLEDON SPLIT',
  },
  {
    id: 'micro',
    title: 'Microscopic View of Kernel Embryo',
    desc: 'High-magnification botanical capture of the embryonic rootlet and cellular lipid stores.',
    src: asset('assets/cashew/microscopic_embryo.mp4'),
    badge: 'CELLULAR MACRO',
  },
];

export const CrosscutLoupeModal: React.FC<CrosscutLoupeModalProps> = ({
  isOpen,
  onClose,
  initialTab = 'crosscut',
}) => {
  const [activeTab, setActiveTab] = useState<'crosscut' | 'loupe' | 'video'>(initialTab);
  const [zoomLevel, setZoomLevel] = useState<number>(3.5);
  const [selectedPin, setSelectedPin] = useState<number>(1);
  const [activeVideoIndex, setActiveVideoIndex] = useState<number>(0);
  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const videoRef = React.useRef<HTMLVideoElement>(null);

  if (!isOpen) return null;

  const pins = [
    {
      id: 1,
      title: 'Exocarpium Impermeabile (Outer Epicarp)',
      x: '22%',
      y: '30%',
      desc: '1.2mm leathery greenish-grey protective shield with waxy cuticle preventing tropical humidity penetration.',
      metric: 'WAXY CUTICLE • MOISTURE SEAL',
    },
    {
      id: 2,
      title: 'Mesocarpium Alveolare (CNSL Matrix)',
      x: '38%',
      y: '48%',
      desc: 'Porous honeycomb matrix housing toxic, viscous Cashew Nut Shell Liquid (70% Anacardic Acid & Cardanol). Recovered for green friction polymers.',
      metric: '70% ANACARDIC ACID • ZERO WASTE',
    },
    {
      id: 3,
      title: 'Endocarpium Ligneum (Woody Inner Shell)',
      x: '52%',
      y: '36%',
      desc: 'Hard, stony lignified endocarp providing structural fortress around the seed cavity during thermal conditioning.',
      metric: 'LIGNIFIED BARRIER',
    },
    {
      id: 4,
      title: 'Testa Pellicle (Spermodermium)',
      x: '64%',
      y: '58%',
      desc: 'Thin cinnamon-colored paper pellicle rich in polyphenolic tannins, cleanly detached via Vetapalem 70°C Borma dehydration.',
      metric: '70°C BORMA PEEL • 0% TANNIN',
    },
    {
      id: 5,
      title: 'Semen Anacardii (King Cotyledon W-180)',
      x: '76%',
      y: '44%',
      desc: 'Twin creamy ivory whole cotyledons containing 46% heart-healthy oleic acid, zero cholesterol, and rich natural crunch.',
      metric: 'GRADE W-180 KING • 4.5% MOISTURE',
    },
  ];

  const handleVideoToggle = () => {
    if (!videoRef.current) return;
    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsPlaying(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-stone-900/75 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-4xl max-h-[92vh] overflow-y-auto bg-[#faf8f2] border border-stone-200 rounded-3xl p-5 sm:p-8 shadow-2xl">
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-stone-200/80 hover:bg-stone-300 text-stone-700 transition-colors cursor-pointer z-10"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="flex items-center gap-3.5 mb-6 pb-4 border-b border-stone-200">
          <SVCMLogo size={38} />
          <div>
            <span className="font-mono text-[10px] text-[#b45309] uppercase tracking-[0.16em] font-bold block">
              BOTANICAL LABORATORY SPECIMEN
            </span>
            <h3 className="text-xl sm:text-2xl font-bold text-stone-900">
              Cashew Anatomy &amp; Motion Inspection
            </h3>
          </div>
        </div>

        {/* Tab Switcher */}
        <div className="flex flex-wrap gap-2 mb-6">
          <button
            type="button"
            onClick={() => setActiveTab('crosscut')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-mono font-semibold flex items-center gap-2 transition-all cursor-pointer ${
              activeTab === 'crosscut'
                ? 'bg-stone-900 text-white shadow-md'
                : 'bg-white text-stone-600 border border-stone-200 hover:bg-stone-100'
            }`}
          >
            <span>⚡ Crosscut Anatomy</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('loupe')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-mono font-semibold flex items-center gap-2 transition-all cursor-pointer ${
              activeTab === 'loupe'
                ? 'bg-[#d97706] text-white shadow-md'
                : 'bg-white text-stone-600 border border-stone-200 hover:bg-stone-100'
            }`}
          >
            <ZoomIn className="w-4 h-4" />
            <span>🔍 3.5x Macro Loupe</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('video')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-mono font-semibold flex items-center gap-2 transition-all cursor-pointer ${
              activeTab === 'video'
                ? 'bg-[#b45309] text-white shadow-md'
                : 'bg-white text-stone-600 border border-stone-200 hover:bg-stone-100'
            }`}
          >
            <Film className="w-4 h-4" />
            <span>🎥 Botanical Cinema ({VIDEOS.length} Videos)</span>
          </button>
        </div>

        {/* TAB 1: CROSSCUT ANATOMY */}
        {activeTab === 'crosscut' && (
          <div className="space-y-6">
            <div className="relative rounded-2xl overflow-hidden border border-stone-200 bg-stone-950 aspect-[16/9] shadow-inner flex items-center justify-center group">
              {/* Botanical Cross-Section Specimen */}
              <img
                src={asset('assets/cashew/cashew_anatomy_diagram.jpg')}
                alt="Cashew Nut Anatomical Cross-Section Diagram"
                className="w-full h-full object-contain opacity-95 group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30 pointer-events-none" />

              {/* Interactive Anatomical Pins */}
              {pins.map((pin) => (
                <button
                  key={pin.id}
                  type="button"
                  onClick={() => setSelectedPin(pin.id)}
                  style={{ top: pin.y, left: pin.x }}
                  className={`absolute -translate-x-1/2 -translate-y-1/2 h-8 w-8 rounded-full flex items-center justify-center font-mono text-xs font-bold transition-all duration-300 shadow-xl cursor-pointer ${
                    selectedPin === pin.id
                      ? 'bg-[#facc15] text-black scale-125 ring-4 ring-amber-400/50 z-20'
                      : 'bg-white/95 text-stone-900 hover:scale-110 z-10'
                  }`}
                  title={pin.title}
                >
                  {pin.id}
                </button>
              ))}

              {/* Bottom Specimen Overlay Banner */}
              <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between bg-black/80 backdrop-blur-md px-4 py-2.5 rounded-xl border border-white/15 text-white">
                <div className="flex items-center gap-2">
                  <Eye className="w-4 h-4 text-[#facc15]" />
                  <span className="text-xs font-mono">
                    Click pin numbers (1-5) to inspect anatomical tissue layers
                  </span>
                </div>
                <span className="hidden sm:inline font-mono text-[10px] text-amber-300 uppercase tracking-widest">
                  Authentic Specimen • SVCM Vetapalem
                </span>
              </div>
            </div>

            {/* Selected Pin Detail Card */}
            {pins.find((p) => p.id === selectedPin) && (
              <div className="rounded-2xl border border-stone-200 bg-white p-5 shadow-sm flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="h-6 w-6 rounded-full bg-[#d97706] text-white flex items-center justify-center font-mono text-xs font-bold">
                      {selectedPin}
                    </span>
                    <h4 className="text-base font-bold text-stone-900">
                      {pins.find((p) => p.id === selectedPin)?.title}
                    </h4>
                  </div>
                  <p className="text-sm text-stone-600 leading-relaxed max-w-xl">
                    {pins.find((p) => p.id === selectedPin)?.desc}
                  </p>
                </div>
                <div className="shrink-0 px-3.5 py-2 rounded-xl bg-amber-50 border border-amber-200 font-mono text-[11px] font-bold text-[#b45309]">
                  {pins.find((p) => p.id === selectedPin)?.metric}
                </div>
              </div>
            )}

            {/* Anatomical Diagram Preview */}
            <div className="rounded-2xl border border-stone-200 bg-white p-4">
              <span className="font-mono text-[10px] uppercase tracking-wider text-stone-500 font-bold block mb-2">
                COMPLETE CELLULAR DIAGRAM SCHEMATIC
              </span>
              <img
                src={asset('assets/cashew/cashew_anatomy_diagram.jpg')}
                alt="Cashew Anatomy Diagram Layout"
                className="w-full h-auto rounded-xl border border-stone-100 object-contain max-h-72 mx-auto"
              />
            </div>
          </div>
        )}

        {/* TAB 2: MACRO LOUPE INSPECTION */}
        {activeTab === 'loupe' && (
          <div className="space-y-6">
            {/* Loupe Controls */}
            <div className="flex items-center justify-between bg-white border border-stone-200 rounded-2xl p-4 shadow-sm">
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-[#b45309]" />
                <span className="text-xs sm:text-sm font-semibold text-stone-900">
                  Cellular Surface &amp; Embryo Magnifier
                </span>
              </div>
              <div className="flex items-center gap-1.5 font-mono text-xs">
                {[2.0, 3.5, 5.0].map((level) => (
                  <button
                    key={level}
                    type="button"
                    onClick={() => setZoomLevel(level)}
                    className={`px-3 py-1.5 rounded-lg transition-all cursor-pointer ${
                      zoomLevel === level
                        ? 'bg-stone-900 text-white font-bold'
                        : 'bg-stone-100 text-stone-700 hover:bg-stone-200'
                    }`}
                  >
                    {level}x
                  </button>
                ))}
              </div>
            </div>

            {/* Split Dual Specimen Viewer */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {/* Specimen A: Split Cotyledons */}
              <div className="relative rounded-2xl overflow-hidden border border-stone-200 bg-stone-950 shadow-md">
                <div className="absolute top-3 left-3 z-10 bg-white/90 backdrop-blur-md border border-stone-200 px-3 py-1 rounded-full text-[10px] font-mono font-bold text-stone-800">
                  SPECIMEN A: W-180 SPLIT COTYLEDONS ({zoomLevel}x)
                </div>
                <div className="overflow-hidden aspect-square flex items-center justify-center p-3">
                  <img
                    src={asset('assets/cashew/cashew_kernel_split_halves.jpg')}
                    alt="Cashew Kernel Split Halves"
                    style={{ transform: `scale(${zoomLevel / 2})` }}
                    className="w-full h-full object-contain rounded-xl transition-transform duration-500"
                  />
                </div>
                <div className="p-4 bg-white border-t border-stone-200 text-xs text-stone-600">
                  <span className="font-semibold text-stone-900">Twin Cotyledon Cavity:</span> Pristine ivory kernel split cleanly, revealing natural embryonic channel and zero tannin residue.
                </div>
              </div>

              {/* Specimen B: Kernel Embryo Macro Shot */}
              <div className="relative rounded-2xl overflow-hidden border border-stone-200 bg-stone-950 shadow-md">
                <div className="absolute top-3 left-3 z-10 bg-white/90 backdrop-blur-md border border-stone-200 px-3 py-1 rounded-full text-[10px] font-mono font-bold text-[#b45309]">
                  SPECIMEN B: BOTANICAL EMBRYO SHOT ({zoomLevel}x)
                </div>
                <div className="overflow-hidden aspect-square flex items-center justify-center p-3">
                  <img
                    src={asset('assets/cashew/cashew_kernel_embryo_macro.jpg')}
                    alt="Cashew Kernel Embryo Macro"
                    style={{ transform: `scale(${zoomLevel / 2})` }}
                    className="w-full h-full object-contain rounded-xl transition-transform duration-500"
                  />
                </div>
                <div className="p-4 bg-white border-t border-stone-200 text-xs text-stone-600">
                  <span className="font-semibold text-stone-900">Embryonic Axis:</span> High-definition microphotography of the delicate kernel germ surrounded by dense oleic lipid cells.
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 3: CINEMATIC BOTANICAL VIDEO PLAYER */}
        {activeTab === 'video' && (
          <div className="space-y-6">
            {/* Main Video Viewport */}
            <div className="relative rounded-2xl overflow-hidden border border-stone-300 bg-black aspect-[16/9] shadow-2xl flex items-center justify-center group">
              <video
                ref={videoRef}
                key={VIDEOS[activeVideoIndex].src}
                src={VIDEOS[activeVideoIndex].src}
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-contain"
              />

              {/* In-Video Overlay Bar */}
              <div className="absolute bottom-4 inset-x-4 flex items-center justify-between bg-black/75 backdrop-blur-md px-4 py-3 rounded-2xl border border-white/15 text-white">
                <div className="flex items-center gap-3">
                  <button
                    type="button"
                    onClick={handleVideoToggle}
                    className="h-9 w-9 rounded-full bg-amber-500 hover:bg-amber-400 text-black flex items-center justify-center transition-transform hover:scale-105 cursor-pointer shadow-md"
                  >
                    {isPlaying ? <Pause className="w-4 h-4 fill-black" /> : <Play className="w-4 h-4 fill-black ml-0.5" />}
                  </button>
                  <div>
                    <h4 className="text-xs sm:text-sm font-bold text-white">
                      {VIDEOS[activeVideoIndex].title}
                    </h4>
                    <span className="text-[10px] text-stone-400 font-mono">
                      {VIDEOS[activeVideoIndex].badge} • HIGH DEFINITION
                    </span>
                  </div>
                </div>

                <span className="font-mono text-[10px] text-amber-400 font-bold hidden sm:inline">
                  VIDEO 0{activeVideoIndex + 1} OF 0{VIDEOS.length}
                </span>
              </div>
            </div>

            {/* Video Selector Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {VIDEOS.map((v, idx) => (
                <button
                  key={v.id}
                  type="button"
                  onClick={() => {
                    setActiveVideoIndex(idx);
                    setIsPlaying(true);
                  }}
                  className={`p-3.5 rounded-2xl border text-left transition-all cursor-pointer flex items-start gap-3 ${
                    activeVideoIndex === idx
                      ? 'bg-white border-amber-400 shadow-md ring-2 ring-amber-400/20'
                      : 'bg-white/80 border-stone-200 hover:bg-white hover:border-stone-300'
                  }`}
                >
                  <div
                    className={`w-7 h-7 rounded-xl flex items-center justify-center font-mono text-xs font-bold shrink-0 ${
                      activeVideoIndex === idx ? 'bg-stone-900 text-white' : 'bg-stone-100 text-stone-600'
                    }`}
                  >
                    0{idx + 1}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-[9px] uppercase tracking-wider text-[#b45309] font-bold">
                        {v.badge}
                      </span>
                    </div>
                    <h5 className="text-xs font-bold text-stone-900 leading-snug mt-0.5 truncate">
                      {v.title}
                    </h5>
                    <p className="text-[11px] text-stone-600 mt-1 line-clamp-1">
                      {v.desc}
                    </p>
                  </div>
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
