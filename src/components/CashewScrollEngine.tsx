import React, { useEffect, useRef, useState } from 'react';
import { asset } from '../utils/assets';

interface StageData {
  id: number;
  label: string;
  botanical: string;
  scrollRange: [number, number];
  videoSrc: string;
  imgSrc: string;
  color: string;
  metric: string;
  desc: string;
}

const ANATOMY_STAGES: StageData[] = [
  {
    id: 1,
    label: 'Cashew Apple & Hanging Drupe',
    botanical: 'Hypocarpium & Exocarpium',
    scrollRange: [0, 0.22],
    videoSrc: asset('assets/cashew/anatomy_displayed.mp4'),
    imgSrc: asset('assets/cashew/cashew_nut_and_apple.jpg'),
    color: '#dc2626',
    metric: '100% ORGANIC • COASTAL ANDHRA',
    desc: 'The tree-ripened false fruit bearing the true raw cashew nut suspended at its bottom apex.',
  },
  {
    id: 2,
    label: 'Leathery Shell & Pericarp Split',
    botanical: 'Exocarpium Impermeabile',
    scrollRange: [0.22, 0.45],
    videoSrc: asset('assets/cashew/shell_split_kernel.mp4'),
    imgSrc: asset('assets/cashew/cashew_shell_splitting.jpg'),
    color: '#65a30d',
    metric: 'WAXY CUTICLE • MOISTURE LOCK',
    desc: 'The leathery outer shell splits cleanly along the natural longitudinal suture line.',
  },
  {
    id: 3,
    label: 'Protective Pericarp Matrix',
    botanical: 'Mesocarpium & Epicarpium',
    scrollRange: [0.45, 0.65],
    videoSrc: asset('assets/cashew/anatomy_displayed.mp4'),
    imgSrc: asset('assets/cashew/cashew_fruit_rotating.jpg'),
    color: '#ea580c',
    metric: 'NATURAL PERICARP • MOISTURE SHIELD',
    desc: 'Outer protective drupe layers providing natural hermetic insulation for the developing kernel inside.',
  },
  {
    id: 4,
    label: 'Twin Cotyledons (Grade W-180)',
    botanical: 'Semen Anacardii (King Wholes)',
    scrollRange: [0.65, 0.85],
    videoSrc: asset('assets/cashew/kernel_splitting.mp4'),
    imgSrc: asset('assets/cashew/cashew_kernel_split_halves.jpg'),
    color: '#d97706',
    metric: 'GRADE W-180 • <4.5% MOISTURE',
    desc: 'Pristine creamy ivory kernel splitting into twin jumbo cotyledons after 70°C Borma curing.',
  },
  {
    id: 5,
    label: 'Embryonic Axis & Macro Cellular',
    botanical: 'Axis Embryonalis & Lipids',
    scrollRange: [0.85, 1.0],
    videoSrc: asset('assets/cashew/microscopic_embryo.mp4'),
    imgSrc: asset('assets/cashew/cashew_kernel_embryo_macro.jpg'),
    color: '#b45309',
    metric: '46% OLEIC ACID • HERMETIC SEAL',
    desc: 'Microscopic view of the delicate germ axis surrounded by nutrient-dense cellular lipid stores.',
  },
];

const UNIQUE_BACKGROUND_VIDEOS = [
  { id: 'anatomy_displayed', src: asset('assets/cashew/anatomy_displayed.mp4') },
  { id: 'shell_split', src: asset('assets/cashew/shell_split_kernel.mp4') },
  { id: 'kernel_split', src: asset('assets/cashew/kernel_splitting.mp4') },
  { id: 'microscopic_embryo', src: asset('assets/cashew/microscopic_embryo.mp4') },
];

interface CashewScrollEngineProps {
  onOpenModal?: (tab: 'crosscut' | 'loupe' | 'video') => void;
}

export const CashewScrollEngine: React.FC<CashewScrollEngineProps> = () => {
  const [scrollFraction, setScrollFraction] = useState<number>(0);
  const [activeStageIdx, setActiveStageIdx] = useState<number>(0);
  const [mouseParallax, setMouseParallax] = useState<{ x: number; y: number }>({ x: 0, y: 0 });

  const videoRefs = useRef<{ [key: string]: HTMLVideoElement | null }>({});

  // 1. Continuous Window Scroll Listener
  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const scrollY = window.scrollY;
          const maxScroll = Math.max(
            1,
            document.documentElement.scrollHeight - window.innerHeight
          );
          const rawFraction = Math.min(1, Math.max(0, scrollY / maxScroll));
          setScrollFraction(rawFraction);

          const idx = ANATOMY_STAGES.findIndex(
            (stage) => rawFraction >= stage.scrollRange[0] && rawFraction <= stage.scrollRange[1]
          );
          if (idx !== -1) {
            setActiveStageIdx(idx);
          } else if (rawFraction > 0.85) {
            setActiveStageIdx(ANATOMY_STAGES.length - 1);
          }

          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // 2. Interactive Mouse Parallax (Interactive Tilt across Full Page)
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 20;
      const y = (e.clientY / window.innerHeight - 0.5) * 20;
      setMouseParallax({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const activeStage = ANATOMY_STAGES[activeStageIdx];

  return (
    <>
      {/* 1. SEAMLESS FULL-PAGE MULTI-VIDEO CROSSFADER (Covers 100% of the entire screen behind content) */}
      <div
        className="fixed inset-0 w-full h-full z-0 overflow-hidden select-none pointer-events-none transition-opacity duration-700 ease-out"
        style={{ opacity: 0.72 }}
        aria-hidden="true"
      >
        <div
          className="relative w-full h-full transition-transform duration-300 ease-out"
          style={{
            transform: `scale(1.06) translate3d(${mouseParallax.x}px, ${mouseParallax.y}px, 0)`,
          }}
        >
          {UNIQUE_BACKGROUND_VIDEOS.map((v) => {
            const isCurrent = activeStage.videoSrc === v.src;
            return (
              <video
                key={v.id}
                ref={(el) => {
                  videoRefs.current[v.src] = el;
                }}
                src={v.src}
                autoPlay
                loop
                muted
                playsInline
                className="absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out"
                style={{
                  opacity: isCurrent ? 1 : 0,
                  filter: 'contrast(1.08) saturate(1.15) brightness(1.02)',
                  maskImage:
                    'radial-gradient(ellipse at 50% 50%, rgba(0,0,0,1) 45%, rgba(0,0,0,0.85) 75%, rgba(0,0,0,0.3) 100%)',
                  WebkitMaskImage:
                    'radial-gradient(ellipse at 50% 50%, rgba(0,0,0,1) 45%, rgba(0,0,0,0.85) 75%, rgba(0,0,0,0.3) 100%)',
                }}
              />
            );
          })}
        </div>

        {/* Ambient Warm Golden & Porcelain Tint (Zero Blur, 100% Razor Sharp) */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#faf8f2]/30 via-transparent to-[#faf8f2]/55 pointer-events-none" />
      </div>

      {/* 2. Top Scroll Progress Line (Fine Gold Filament across entire window) */}
      <div className="fixed top-0 left-0 right-0 h-[2.5px] z-50 pointer-events-none bg-stone-200/50">
        <div
          className="h-full bg-gradient-to-r from-[#78350f] via-[#b45309] to-[#d97706] transition-all duration-100 ease-out"
          style={{ width: `${scrollFraction * 100}%` }}
        />
      </div>
    </>
  );
};
