import React, { useEffect, useRef, useState } from 'react';
import { SVCMLogo } from './SVCMLogo';

// Real high-resolution botanical photography sources
const REAL_IMAGES = {
  apple: 'https://upload.wikimedia.org/wikipedia/commons/3/38/Cashew_fruit.jpg',
  rawNut: 'https://upload.wikimedia.org/wikipedia/commons/6/68/Young_cashew_nuts.jpg',
  whiteKernel: 'https://images.unsplash.com/photo-1509912760195-4f6cfd8cce2c?q=80&w=1200',
  roasted: 'https://images.unsplash.com/photo-1726771517475-e7acdd34cd8a?q=80&w=1200',
  macro: 'https://images.unsplash.com/photo-1573555657105-47a0bb37c3ea?q=80&w=1200',
};

interface LayerCallout {
  name: string;
  botanical: string;
  stageName: string;
  progressRange: [number, number];
  color: string;
  metric: string;
  description: string;
}

const ANATOMY_LAYERS: LayerCallout[] = [
  {
    name: 'The Cashew Apple & Raw Drupe',
    botanical: 'Hypocarpium & Exocarpium',
    stageName: '01 / TREE HARVEST',
    progressRange: [0, 0.22],
    color: '#dc2626',
    metric: '100% ORGANIC • 5X VITAMIN C',
    description: 'The luscious scarlet false fruit with the young raw cashew nut hanging at its base.',
  },
  {
    name: 'Leathery Shell & Epicarp',
    botanical: 'Exocarpium Impermeabile',
    stageName: '02 / EXTERNAL SHIELD',
    progressRange: [0.22, 0.45],
    color: '#4d7c0f',
    metric: 'WAXY CUTICLE • MOISTURE LOCK',
    description: 'Resilient greenish-grey leathery outer skin protecting the seed against tropical rains.',
  },
  {
    name: 'CNSL Honeycomb Mesocarp',
    botanical: 'Mesocarpium Alveolare',
    stageName: '03 / CHEMICAL DEFENSE',
    progressRange: [0.45, 0.68],
    color: '#ea580c',
    metric: '70% ANACARDIC ACID • ZERO-WASTE',
    description: 'Spongy alveolar matrix saturated with caustic Cashew Nut Shell Liquid, refined for brake linings.',
  },
  {
    name: 'Testa Pellicle & Endocarp',
    botanical: 'Spermodermium & Endocarpium',
    stageName: '04 / THERMAL PEEL',
    progressRange: [0.68, 0.85],
    color: '#b91c1c',
    metric: 'BORMA 70°C • TANNIN REMOVAL',
    description: 'Paper-thin cinnamon skin flaking away in ribbons under controlled hot-air dehydration.',
  },
  {
    name: 'King Cotyledon W-180',
    botanical: 'Semen Anacardii (Grade W-180)',
    stageName: '05 / CULINARY JEWEL',
    progressRange: [0.85, 1.0],
    color: '#d97706',
    metric: '46% OLEIC ACID • JUMBO CRISP',
    description: 'Twin creamy ivory cotyledons splitting into golden roasted halves with fleur de sel.',
  },
];

interface CashewScrollMotionProps {
  onOpenModal?: (tab: 'crosscut' | 'loupe') => void;
}

export const CashewScrollMotion: React.FC<CashewScrollMotionProps> = ({ onOpenModal }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const [activeLayerIndex, setActiveLayerIndex] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const [isCrossSection, setIsCrossSection] = useState(false);
  const [isLoupeActive, setIsLoupeActive] = useState(false);

  // References for render loop & image elements
  const targetProgressRef = useRef(0);
  const smoothedProgressRef = useRef(0);
  const mouseRef = useRef({ x: 0, y: 0, targetX: 0, targetY: 0, rawX: 0, rawY: 0 });
  const timeRef = useRef(0);
  const loadedImagesRef = useRef<{ [key: string]: HTMLImageElement }>({});

  // 1. Preload real high-resolution botanical photography
  useEffect(() => {
    let loadedCount = 0;
    const total = Object.keys(REAL_IMAGES).length;

    Object.entries(REAL_IMAGES).forEach(([key, url]) => {
      const img = new Image();
      img.crossOrigin = 'anonymous';
      img.src = url;
      img.onload = () => {
        loadedImagesRef.current[key] = img;
        loadedCount++;
        if (loadedCount >= total) {
          setImagesLoaded(true);
        }
      };
      img.onerror = () => {
        loadedCount++;
        if (loadedCount >= total) {
          setImagesLoaded(true);
        }
      };
    });
  }, []);

  // 2. Scroll listener
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const scrollHeight = document.documentElement.scrollHeight;
      const innerHeight = window.innerHeight;
      const maxScroll = scrollHeight - innerHeight;
      const progress = maxScroll > 0 ? Math.max(0, Math.min(1, scrollY / maxScroll)) : 0;
      targetProgressRef.current = progress;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    // Mouse parallax tracking
    const handleMouseMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      mouseRef.current.rawX = e.clientX;
      mouseRef.current.rawY = e.clientY;
      mouseRef.current.targetX = (e.clientX / innerWidth - 0.5) * 2;
      mouseRef.current.targetY = (e.clientY / innerHeight - 0.5) * 2;
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  // 3. Main photographic Canvas rendering loop
  useEffect(() => {
    let animId: number;

    // Organic particles (CNSL golden droplets & sea salt crystals)
    const droplets = Array.from({ length: 45 }).map(() => ({
      x: (Math.random() - 0.5) * 700,
      y: (Math.random() - 0.5) * 700,
      r: Math.random() * 3 + 1,
      speedY: Math.random() * 0.5 + 0.3,
      speedX: (Math.random() - 0.5) * 0.3,
      opacity: Math.random() * 0.6 + 0.3,
      color: Math.random() > 0.4 ? '#d97706' : '#c2410c',
    }));

    const render = () => {
      timeRef.current += 0.016;
      const t = timeRef.current;

      // Smooth progress with lerp (or lock to 0.55 if cross section is toggled)
      smoothedProgressRef.current +=
        (targetProgressRef.current - smoothedProgressRef.current) * 0.085;
      const progress = isCrossSection ? 0.55 : smoothedProgressRef.current;
      setScrollProgress(Math.round(progress * 100));

      // Calculate active anatomy layer
      const activeIdx = ANATOMY_LAYERS.findIndex(
        (l) => progress >= l.progressRange[0] && progress <= l.progressRange[1]
      );
      if (activeIdx !== -1) {
        setActiveLayerIndex(activeIdx);
      }

      // Smooth mouse coordinates
      mouseRef.current.x += (mouseRef.current.targetX - mouseRef.current.x) * 0.06;
      mouseRef.current.y += (mouseRef.current.targetY - mouseRef.current.y) * 0.06;

      const canvas = canvasRef.current;
      if (!canvas) {
        animId = requestAnimationFrame(render);
        return;
      }

      const ctx = canvas.getContext('2d');
      if (!ctx) {
        animId = requestAnimationFrame(render);
        return;
      }

      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const w = canvas.clientWidth;
      const h = canvas.clientHeight;

      if (canvas.width !== w * dpr || canvas.height !== h * dpr) {
        canvas.width = w * dpr;
        canvas.height = h * dpr;
      }

      ctx.save();
      ctx.scale(dpr, dpr);
      ctx.clearRect(0, 0, w, h);

      const cx = w * 0.5;
      const cy = h * 0.5;

      // Luminous studio radial lighting on warm cream ground
      const bgGrad = ctx.createRadialGradient(
        cx + mouseRef.current.x * 60,
        cy + mouseRef.current.y * 40 - 40,
        60,
        cx,
        cy,
        Math.max(w, h) * 0.75
      );

      if (progress < 0.25) {
        bgGrad.addColorStop(0, 'rgba(254, 243, 199, 0.45)');
        bgGrad.addColorStop(0.45, 'rgba(245, 235, 220, 0.35)');
        bgGrad.addColorStop(1, '#faf8f2');
      } else if (progress < 0.65) {
        bgGrad.addColorStop(0, 'rgba(255, 237, 213, 0.5)');
        bgGrad.addColorStop(0.45, 'rgba(247, 240, 230, 0.35)');
        bgGrad.addColorStop(1, '#faf8f2');
      } else {
        bgGrad.addColorStop(0, 'rgba(254, 240, 138, 0.45)');
        bgGrad.addColorStop(0.45, 'rgba(245, 238, 225, 0.3)');
        bgGrad.addColorStop(1, '#faf8f2');
      }

      ctx.fillStyle = bgGrad;
      ctx.fillRect(0, 0, w, h);

      // =========================================================================
      // STAGE 1: REAL CASHEW APPLE & NUT (0.0 to 0.32) — FILLS THE FRAME
      // =========================================================================
      const appleAlpha = Math.max(0, 1 - progress / 0.32);
      if (appleAlpha > 0.01 && loadedImagesRef.current.apple) {
        ctx.save();
        ctx.globalAlpha = appleAlpha;

        const img = loadedImagesRef.current.apple;
        const fillScale = Math.max(w / img.width, h / img.height) * (1.02 + (1 - progress) * 0.08);
        const drawW = img.width * fillScale;
        const drawH = img.height * fillScale;
        const appleY = -progress * 280;

        // Render full real photograph filling the canvas frame
        ctx.drawImage(img, cx - drawW * 0.5, cy - drawH * 0.5 + appleY, drawW, drawH);

        // Soft radial feather gradient at edges to dissolve organically into #faf8f2
        const featherGrad = ctx.createRadialGradient(
          cx,
          cy + appleY * 0.5,
          Math.min(w, h) * 0.28,
          cx,
          cy + appleY * 0.5,
          Math.max(w, h) * 0.72
        );
        featherGrad.addColorStop(0, 'rgba(250, 248, 242, 0)');
        featherGrad.addColorStop(0.55, 'rgba(250, 248, 242, 0.42)');
        featherGrad.addColorStop(1, 'rgba(250, 248, 242, 0.95)');
        ctx.fillStyle = featherGrad;
        ctx.fillRect(0, 0, w, h);

        ctx.restore();
      }

      // Render floating CNSL & golden salt particles
      droplets.forEach((d) => {
        d.y -= d.speedY;
        d.x += Math.sin(t + d.y * 0.02) * 0.3;
        if (d.y < -h * 0.5) d.y = h * 0.5;

        const pX = cx + d.x + mouseRef.current.x * 20;
        const pY = cy + d.y + mouseRef.current.y * 15;

        ctx.beginPath();
        ctx.arc(pX, pY, d.r, 0, Math.PI * 2);
        ctx.fillStyle = d.color;
        ctx.globalAlpha = d.opacity * (0.3 + progress * 0.7);
        ctx.shadowColor = d.color;
        ctx.shadowBlur = 6;
        ctx.fill();
        ctx.shadowBlur = 0;
        ctx.globalAlpha = 1;
      });

      // =========================================================================
      // ORGANIC 3D CAMERA STAGE (Stages 2, 3, 4, 5)
      // =========================================================================
      ctx.save();
      const camX = cx + mouseRef.current.x * 35;
      const camY = cy + mouseRef.current.y * 25;
      ctx.translate(camX, camY);

      // 3D perspective rotation
      const rotY = progress * 1.6 + mouseRef.current.x * 0.2;
      const rotX = mouseRef.current.y * 0.12;
      const scale = 1.02 + Math.sin(progress * Math.PI) * 0.12;

      ctx.rotate(rotX + rotY * 0.04);
      ctx.scale(scale, scale);

      // Dynamic ground shadow on light porcelain floor
      ctx.save();
      ctx.translate(0, 230);
      ctx.scale(1, 0.22);
      ctx.beginPath();
      ctx.arc(0, 0, 260, 0, Math.PI * 2);
      ctx.fillStyle = 'rgba(70, 50, 30, 0.14)';
      ctx.filter = 'blur(28px)';
      ctx.fill();
      ctx.restore();

      // =========================================================================
      // STAGE 2: REAL RAW NUT IN SHELL (0.15 to 0.65)
      // =========================================================================
      const shellAlpha =
        progress < 0.2
          ? progress / 0.2
          : progress < 0.5
          ? 1
          : Math.max(0, 1 - (progress - 0.5) / 0.18);

      if (shellAlpha > 0.01) {
        const shellSplit = Math.max(0, (progress - 0.28) / 0.3); // Cleavage factor

        ctx.save();
        ctx.globalAlpha = shellAlpha;

        // Left shell half
        ctx.save();
        ctx.translate(-shellSplit * 130, shellSplit * 20);
        ctx.rotate(-shellSplit * 0.35);
        drawRealisticShellHalf(ctx, loadedImagesRef.current.rawNut, true);
        ctx.restore();

        // Right shell half
        ctx.save();
        ctx.translate(shellSplit * 130, shellSplit * 20);
        ctx.rotate(shellSplit * 0.35);
        drawRealisticShellHalf(ctx, loadedImagesRef.current.rawNut, false);
        ctx.restore();

        ctx.restore();
      }

      // =========================================================================
      // STAGE 3: REAL CNSL HONEYCOMB MESOCARP & CROSSCUT (0.28 to 0.78)
      // =========================================================================
      const cnslAlpha =
        progress > 0.28 && progress < 0.78
          ? progress < 0.45
            ? (progress - 0.28) / 0.17
            : Math.max(0, 1 - (progress - 0.62) / 0.16)
          : isCrossSection ? 1 : 0;

      if (cnslAlpha > 0.01) {
        ctx.save();
        ctx.globalAlpha = cnslAlpha;

        // Clip to kidney cross-section
        ctx.save();
        drawCashewKidneyPath(ctx, 120, 160);
        ctx.clip();

        // Real Photographic Raw Nut / Shell background blend
        if (loadedImagesRef.current.rawNut) {
          ctx.drawImage(loadedImagesRef.current.rawNut, -140, -130, 280, 260);
          ctx.fillStyle = 'rgba(70, 25, 8, 0.55)';
          ctx.fill();
        }

        // Deep amber honeycomb base
        const cnslGrad = ctx.createRadialGradient(0, 0, 20, 0, 0, 130);
        cnslGrad.addColorStop(0, '#5a1904');
        cnslGrad.addColorStop(0.7, '#8e300b');
        cnslGrad.addColorStop(1, '#3b1002');
        ctx.fillStyle = cnslGrad;
        ctx.fill();

        // Microscopic porous alveoli with viscous liquid sheen (CNSL fluid chambers)
        ctx.strokeStyle = 'rgba(255, 140, 40, 0.75)';
        ctx.lineWidth = 1.6;
        for (let x = -85; x < 85; x += 18) {
          for (let y = -85; y < 85; y += 18) {
            ctx.beginPath();
            ctx.arc(x + ((y % 36 === 0) ? 9 : 0), y, 6.5, 0, Math.PI * 2);
            ctx.fillStyle = 'rgba(226, 75, 15, 0.95)';
            ctx.shadowColor = '#ff6b2b';
            ctx.shadowBlur = 8;
            ctx.fill();
            ctx.stroke();
          }
        }

        // Inner kernel cavity inside crosscut
        ctx.save();
        ctx.beginPath();
        ctx.ellipse(15, 0, 45, 65, 0.2, 0, Math.PI * 2);
        ctx.fillStyle = '#fffef7';
        ctx.shadowColor = 'rgba(226, 160, 72, 0.4)';
        ctx.shadowBlur = 10;
        ctx.fill();
        ctx.restore();

        ctx.restore();

        // Cross-section perimeter line (Woody Endocarp boundary)
        drawCashewKidneyPath(ctx, 120, 160);
        ctx.strokeStyle = '#c8531b';
        ctx.lineWidth = 2.5;
        ctx.shadowColor = 'rgba(200, 83, 27, 0.5)';
        ctx.shadowBlur = 14;
        ctx.stroke();

        // If Cross-Section is explicitly toggled, draw scientific callout labels on canvas
        if (isCrossSection) {
          drawCrosscutCallout(ctx, -110, -50, '1. EXOCARP (LEATHERY SKIN)');
          drawCrosscutCallout(ctx, 100, -20, '2. CNSL ALVEOLAR MESOCARP');
          drawCrosscutCallout(ctx, -115, 60, '3. ENDOCARP (WOODY SHELL)');
          drawCrosscutCallout(ctx, 90, 75, '4. IVORY W-180 KERNEL');
        }

        ctx.restore();
      }

      // =========================================================================
      // STAGE 4: REAL TESTA PELLICLE PEELING (0.50 to 0.85)
      // =========================================================================
      const testaAlpha =
        progress > 0.48 && progress < 0.88
          ? progress < 0.65
            ? (progress - 0.48) / 0.17
            : Math.max(0, 1 - (progress - 0.72) / 0.16)
          : 0;

      if (testaAlpha > 0.01) {
        ctx.save();
        ctx.globalAlpha = testaAlpha;

        drawCashewKidneyPath(ctx, 114, 154);
        const testaGrad = ctx.createRadialGradient(-10, -20, 15, 0, 0, 115);
        testaGrad.addColorStop(0, '#a64a32');
        testaGrad.addColorStop(0.65, '#7a311e');
        testaGrad.addColorStop(1, '#4e1b0f');
        ctx.fillStyle = testaGrad;
        ctx.shadowColor = 'rgba(166, 74, 50, 0.4)';
        ctx.shadowBlur = 14;
        ctx.fill();

        // 3D Curling Testa peeling ribbon
        if (progress > 0.58) {
          const peelAngle = (progress - 0.58) * 4;
          ctx.beginPath();
          ctx.moveTo(35, -30);
          ctx.bezierCurveTo(70 + Math.sin(peelAngle) * 20, -55, 95, -10, 60, 25);
          ctx.fillStyle = '#6b2616';
          ctx.fill();
          ctx.strokeStyle = '#b8543d';
          ctx.lineWidth = 2;
          ctx.stroke();
        }

        ctx.restore();
      }

      // =========================================================================
      // STAGE 5: REAL IVORY & GOLDEN ROASTED COTYLEDONS (0.65 to 1.0)
      // =========================================================================
      const kernelAlpha = Math.max(0, (progress - 0.58) / 0.42);
      if (kernelAlpha > 0.01) {
        const roastProgress = Math.max(0, (progress - 0.78) / 0.22);
        const splitOffset = Math.max(0, (progress - 0.82) / 0.18) * 45;

        ctx.save();
        ctx.globalAlpha = kernelAlpha;

        // Left Cotyledon
        ctx.save();
        ctx.translate(-splitOffset, -splitOffset * 0.3);
        ctx.rotate(-splitOffset * 0.003);
        drawRealisticCotyledon(
          ctx,
          loadedImagesRef.current.whiteKernel,
          loadedImagesRef.current.roasted,
          roastProgress,
          true
        );
        ctx.restore();

        // Right Cotyledon
        ctx.save();
        ctx.translate(splitOffset, splitOffset * 0.3);
        ctx.rotate(splitOffset * 0.003);
        drawRealisticCotyledon(
          ctx,
          loadedImagesRef.current.whiteKernel,
          loadedImagesRef.current.roasted,
          roastProgress,
          false
        );
        ctx.restore();

        // Embryo Plumule at notch
        if (roastProgress < 0.6) {
          ctx.beginPath();
          ctx.ellipse(-14, -28, 11, 5.5, -Math.PI / 4, 0, Math.PI * 2);
          ctx.fillStyle = '#65a30d';
          ctx.shadowColor = 'rgba(101, 163, 13, 0.4)';
          ctx.shadowBlur = 12;
          ctx.fill();
        }

        ctx.restore();
      }

      // Restore camera matrix
      ctx.restore();

      // =========================================================================
      // INTERACTIVE MACRO LOUPE (Real High-Resolution Photographic Magnifier)
      // =========================================================================
      if (isLoupeActive) {
        const mx = mouseRef.current.rawX;
        const my = mouseRef.current.rawY;
        const loupeR = 85;

        ctx.save();
        ctx.beginPath();
        ctx.arc(mx, my, loupeR, 0, Math.PI * 2);
        ctx.clip();

        // Draw Real Macro Photography texture if loaded, blended with 3.5x canvas zoom
        if (loadedImagesRef.current.macro) {
          ctx.drawImage(loadedImagesRef.current.macro, mx - loupeR * 1.5, my - loupeR * 1.5, loupeR * 3, loupeR * 3);
          ctx.fillStyle = 'rgba(255, 255, 255, 0.15)';
          ctx.fill();
        } else {
          ctx.drawImage(
            canvas,
            (mx - loupeR / 3.5) * dpr,
            (my - loupeR / 3.5) * dpr,
            (loupeR * 2 / 3.5) * dpr,
            (loupeR * 2 / 3.5) * dpr,
            mx - loupeR,
            my - loupeR,
            loupeR * 2,
            loupeR * 2
          );
        }

        // Crosshairs & precision measurement ticks
        ctx.strokeStyle = 'rgba(217, 119, 6, 0.4)';
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(mx - loupeR, my);
        ctx.lineTo(mx + loupeR, my);
        ctx.moveTo(mx, my - loupeR);
        ctx.lineTo(mx, my + loupeR);
        ctx.stroke();

        ctx.restore();

        // Dual Metallic Precision Loupe Rings
        ctx.beginPath();
        ctx.arc(mx, my, loupeR, 0, Math.PI * 2);
        ctx.strokeStyle = '#d97706';
        ctx.lineWidth = 3.5;
        ctx.shadowColor = 'rgba(217, 119, 6, 0.35)';
        ctx.shadowBlur = 14;
        ctx.stroke();

        ctx.beginPath();
        ctx.arc(mx, my, loupeR - 4, 0, Math.PI * 2);
        ctx.strokeStyle = '#ffffff';
        ctx.lineWidth = 1;
        ctx.stroke();

        // Loupe HUD pill badge above lens
        ctx.save();
        ctx.fillStyle = '#1c1917';
        ctx.roundRect(mx - 75, my - loupeR - 26, 150, 22, 6);
        ctx.fill();
        ctx.fillStyle = '#facc15';
        ctx.font = 'bold 9px monospace';
        ctx.textAlign = 'center';
        ctx.fillText('3.5x MACRO CELLULAR LOUPE', mx, my - loupeR - 12);
        ctx.restore();
      }

      animId = requestAnimationFrame(render);
    };

    animId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animId);
    };
  }, [imagesLoaded, isCrossSection, isLoupeActive]);

  // Jump smoothly to a specific anatomical layer
  const jumpToLayer = (progressTarget: number) => {
    const scrollHeight = document.documentElement.scrollHeight;
    const innerHeight = window.innerHeight;
    const targetScrollY = progressTarget * (scrollHeight - innerHeight);
    window.scrollTo({ top: targetScrollY, behavior: 'smooth' });
  };

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-0 overflow-hidden pointer-events-none bg-[#faf8f2]"
      aria-hidden="true"
    >
      {/* 1. Main Canvas Viewport */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />

      {/* 2. Top-Right Real-time Scientific HUD (Fixed: Only shows when scrolled past hero, eliminating all text overlap) */}
      <div
        className={`absolute top-24 right-5 sm:right-8 md:right-12 z-20 pointer-events-auto hidden sm:flex flex-col items-end gap-1.5 transition-all duration-500 ${
          scrollProgress > 5
            ? 'opacity-100 translate-y-0'
            : 'opacity-0 -translate-y-4 pointer-events-none'
        }`}
      >
        <div className="flex items-center gap-2 border border-stone-200/90 bg-white/95 backdrop-blur-md px-3.5 py-1.5 rounded-full shadow-lg">
          <SVCMLogo size={18} />
          <span
            className="h-2 w-2 rounded-full animate-ping"
            style={{ backgroundColor: ANATOMY_LAYERS[activeLayerIndex].color }}
          />
          <span className="font-mono text-[10px] uppercase tracking-[0.15em] text-stone-800 font-bold">
            {ANATOMY_LAYERS[activeLayerIndex].stageName} • {scrollProgress}% DEPTH
          </span>
        </div>

        <div
          className="font-mono text-xs uppercase tracking-[0.14em] font-extrabold drop-shadow-sm"
          style={{ color: ANATOMY_LAYERS[activeLayerIndex].color }}
        >
          {ANATOMY_LAYERS[activeLayerIndex].name}
        </div>

        <div className="font-mono text-[10px] text-stone-600 max-w-xs text-right leading-tight">
          {ANATOMY_LAYERS[activeLayerIndex].botanical} —{' '}
          <span className="text-[#b45309] font-semibold">{ANATOMY_LAYERS[activeLayerIndex].metric}</span>
        </div>
      </div>

      {/* 3. Bottom Interactive Layer Peeler Navigation Dock with SVCM Logo */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30 pointer-events-auto flex items-center gap-1.5 sm:gap-2 border border-stone-200/90 bg-white/95 backdrop-blur-xl px-3 py-2 rounded-full shadow-[0_8px_30px_rgba(0,0,0,0.08)] max-w-[95vw] overflow-x-auto">
        {/* SVCM Logo in Dock */}
        <div className="flex items-center gap-1.5 pr-2 border-r border-stone-200 shrink-0">
          <SVCMLogo size={22} />
          <span className="font-mono text-[10px] font-bold text-stone-800 tracking-wider hidden sm:inline">
            SVCM
          </span>
        </div>

        {ANATOMY_LAYERS.map((layer, idx) => {
          const isActive = idx === activeLayerIndex;
          return (
            <button
              key={layer.name}
              type="button"
              onClick={() => jumpToLayer(layer.progressRange[0] + 0.05)}
              className={`px-3 py-1.5 rounded-full text-xs font-mono transition-all duration-300 flex items-center gap-1.5 whitespace-nowrap cursor-pointer ${
                isActive
                  ? 'bg-stone-900 text-white font-semibold shadow-md'
                  : 'text-stone-600 hover:text-stone-900 hover:bg-stone-100'
              }`}
            >
              <span
                className="w-1.5 h-1.5 rounded-full"
                style={{ backgroundColor: isActive ? '#ffffff' : layer.color }}
              />
              <span>{layer.name.split(' ')[0]}</span>
            </button>
          );
        })}

        {/* Cross Section Toggle */}
        <button
          type="button"
          onClick={() => {
            setIsCrossSection(!isCrossSection);
            if (!isCrossSection && onOpenModal) {
              onOpenModal('crosscut');
            }
          }}
          className={`ml-2 px-3 py-1.5 rounded-full text-xs font-mono border transition-all duration-300 cursor-pointer whitespace-nowrap ${
            isCrossSection
              ? 'border-amber-600 bg-amber-100 text-amber-900 font-bold'
              : 'border-stone-300 text-stone-600 hover:text-stone-900 hover:bg-stone-100'
          }`}
          title="Toggle Cross-Section View & Details"
        >
          ⚡ {isCrossSection ? 'CROSS CUT ON' : 'CROSS CUT'}
        </button>

        {/* Loupe Toggle button */}
        <button
          type="button"
          onClick={() => {
            setIsLoupeActive(!isLoupeActive);
            if (!isLoupeActive && onOpenModal) {
              onOpenModal('loupe');
            }
          }}
          className={`ml-1 px-3 py-1.5 rounded-full text-xs font-mono border transition-all duration-300 cursor-pointer whitespace-nowrap ${
            isLoupeActive
              ? 'border-amber-600 bg-amber-100 text-amber-900 font-bold'
              : 'border-stone-300 text-stone-600 hover:text-stone-900 hover:bg-stone-100'
          }`}
          title="Toggle Macro Loupe Magnifier"
        >
          🔍 {isLoupeActive ? 'LOUPE ON' : 'LOUPE'}
        </button>
      </div>

      {/* 4. Left Scroll Depth Track */}
      <div className="absolute left-5 sm:left-8 top-1/2 -translate-y-1/2 hidden lg:flex flex-col items-center gap-3 z-20">
        <div className="h-32 w-[1px] bg-stone-300 relative overflow-hidden">
          <div
            className="w-full bg-[#d97706] absolute top-0 transition-all duration-150"
            style={{ height: `${scrollProgress}%` }}
          />
        </div>
        <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-stone-400 rotate-90 origin-left translate-y-6">
          DECONSTRUCT
        </span>
      </div>

      {/* 5. Soft Luminous Vignette Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#faf8f2]/70 via-transparent to-[#faf8f2]/30 pointer-events-none" />
    </div>
  );
};

/* =========================================================================
   ORGANIC GEOMETRIC & PHOTOGRAPHIC PATH HELPERS
   ========================================================================= */

function drawCashewKidneyPath(ctx: CanvasRenderingContext2D, w: number, h: number) {
  ctx.beginPath();
  ctx.moveTo(0, -h * 0.45);
  ctx.bezierCurveTo(w * 0.7, -h * 0.45, w * 0.9, -h * 0.05, w * 0.65, h * 0.35);
  ctx.bezierCurveTo(w * 0.45, h * 0.65, -w * 0.15, h * 0.7, -w * 0.5, h * 0.45);
  ctx.bezierCurveTo(-w * 0.85, h * 0.2, -w * 0.8, -h * 0.15, -w * 0.4, -h * 0.4);
  ctx.bezierCurveTo(-w * 0.15, -h * 0.25, -w * 0.05, -h * 0.35, 0, -h * 0.45);
  ctx.closePath();
}

function drawCrosscutCallout(
  ctx: CanvasRenderingContext2D,
  x: number,
  y: number,
  text: string
) {
  ctx.save();
  ctx.beginPath();
  ctx.arc(x, y, 4, 0, Math.PI * 2);
  ctx.fillStyle = '#facc15';
  ctx.fill();

  ctx.fillStyle = '#1c1917';
  ctx.font = 'bold 9px monospace';
  ctx.fillText(text, x + 8, y + 3);
  ctx.restore();
}

function drawRealisticShellHalf(
  ctx: CanvasRenderingContext2D,
  rawNutImg: HTMLImageElement | undefined,
  isLeft: boolean
) {
  const w = 120;
  const h = 160;

  ctx.save();
  ctx.beginPath();
  if (isLeft) {
    ctx.moveTo(0, -h * 0.45);
    ctx.bezierCurveTo(-w * 0.15, -h * 0.25, -w * 0.05, -h * 0.35, -w * 0.4, -h * 0.4);
    ctx.bezierCurveTo(-w * 0.85, h * 0.2, -w * 0.8, -h * 0.15, -w * 0.5, h * 0.45);
    ctx.lineTo(0, h * 0.55);
    ctx.closePath();
  } else {
    ctx.moveTo(0, -h * 0.45);
    ctx.bezierCurveTo(w * 0.7, -h * 0.45, w * 0.9, -h * 0.05, w * 0.65, h * 0.35);
    ctx.bezierCurveTo(w * 0.45, h * 0.65, 0, h * 0.65, 0, h * 0.55);
    ctx.closePath();
  }
  ctx.clip();

  // If real photograph is loaded, texture it
  if (rawNutImg) {
    ctx.drawImage(rawNutImg, -140, -130, 280, 260);
    ctx.fillStyle = 'rgba(25, 30, 20, 0.25)';
    ctx.fill();
  } else {
    const g = ctx.createRadialGradient(-15, -25, 20, 0, 0, 110);
    g.addColorStop(0, '#758064');
    g.addColorStop(0.65, '#525b45');
    g.addColorStop(1, '#333b2a');
    ctx.fillStyle = g;
    ctx.fill();
  }

  ctx.restore();

  // Highlight shell perimeter
  ctx.strokeStyle = 'rgba(60, 70, 45, 0.25)';
  ctx.lineWidth = 1.5;
  ctx.stroke();
}

function drawRealisticCotyledon(
  ctx: CanvasRenderingContext2D,
  whiteImg: HTMLImageElement | undefined,
  roastedImg: HTMLImageElement | undefined,
  roastProgress: number,
  isLeft: boolean
) {
  const w = 110;
  const h = 150;

  ctx.save();
  ctx.beginPath();
  ctx.moveTo(0, -h * 0.42);
  if (isLeft) {
    ctx.bezierCurveTo(-w * 0.35, -h * 0.35, -w * 0.7, 0, -w * 0.45, h * 0.4);
    ctx.bezierCurveTo(-w * 0.2, h * 0.6, 0, h * 0.55, 0, h * 0.45);
    ctx.lineTo(0, -h * 0.42);
  } else {
    ctx.bezierCurveTo(w * 0.65, -h * 0.4, w * 0.8, 0, w * 0.55, h * 0.35);
    ctx.bezierCurveTo(w * 0.35, h * 0.55, 0, h * 0.55, 0, h * 0.45);
    ctx.lineTo(0, -h * 0.42);
  }
  ctx.closePath();
  ctx.clip();

  // If real photography loaded, blend raw ivory vs golden roasted
  if (whiteImg && roastedImg) {
    ctx.drawImage(whiteImg, -130, -120, 260, 240);
    if (roastProgress > 0.05) {
      ctx.globalAlpha = roastProgress;
      ctx.drawImage(roastedImg, -130, -120, 260, 240);
      ctx.globalAlpha = 1;
    }
  } else {
    const g = ctx.createRadialGradient(-10, -20, 10, 0, 0, 95);
    if (roastProgress < 0.5) {
      g.addColorStop(0, '#fffef7');
      g.addColorStop(0.5, '#f7f0df');
      g.addColorStop(1, '#e8dcbf');
    } else {
      g.addColorStop(0, '#fffbf0');
      g.addColorStop(0.4, '#f5deab');
      g.addColorStop(0.85, '#d99a43');
      g.addColorStop(1, '#a66a1e');
    }
    ctx.fillStyle = g;
    ctx.fill();
  }

  ctx.restore();

  // Cotyledon outer contour with soft subsurface scattering glow
  ctx.strokeStyle = roastProgress > 0.5 ? 'rgba(180, 83, 9, 0.35)' : 'rgba(160, 140, 110, 0.25)';
  ctx.lineWidth = 1.6;
  ctx.stroke();
}
