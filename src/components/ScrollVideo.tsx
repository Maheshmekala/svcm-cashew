import React, { useEffect, useRef, useState } from 'react';

const VIDEO_URL =
  'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260729_102822_0e6c87e8-c141-4744-bf32-ad30db296371.mp4';

export const ScrollVideo: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const [hasDecodedFrame, setHasDecodedFrame] = useState(false);
  const [isCacheReady, setIsCacheReady] = useState(false);

  // References for render loop
  const smoothedProgressRef = useRef(0);
  const targetProgressRef = useRef(0);
  const framesRef = useRef<(ImageBitmap | HTMLCanvasElement)[]>([]);
  const isCacheReadyRef = useRef(false);

  // 1. Scroll listener to calculate progress
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

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // 2. Offscreen frame extraction
  useEffect(() => {
    let isCancelled = false;

    const extractFrames = async () => {
      const offscreenVideo = document.createElement('video');
      offscreenVideo.crossOrigin = 'anonymous';
      offscreenVideo.muted = true;
      offscreenVideo.playsInline = true;
      offscreenVideo.preload = 'auto';
      offscreenVideo.src = VIDEO_URL;

      await new Promise<void>((resolve) => {
        const onLoadedMeta = () => {
          offscreenVideo.removeEventListener('loadedmetadata', onLoadedMeta);
          resolve();
        };
        if (offscreenVideo.readyState >= 1) {
          resolve();
        } else {
          offscreenVideo.addEventListener('loadedmetadata', onLoadedMeta);
        }
      });

      if (isCancelled) return;

      const duration = offscreenVideo.duration || 5;
      const targetCount = Math.min(90, Math.max(24, Math.floor(duration * 12)));

      const nativeW = offscreenVideo.videoWidth || 1920;
      const nativeH = offscreenVideo.videoHeight || 1080;
      const maxW = 960;
      const scale = Math.min(1, maxW / nativeW);
      const targetW = Math.round(nativeW * scale);
      const targetH = Math.round(nativeH * scale);

      const offCanvas = document.createElement('canvas');
      offCanvas.width = targetW;
      offCanvas.height = targetH;
      const offCtx = offCanvas.getContext('2d');
      if (!offCtx) return;

      const extracted: (ImageBitmap | HTMLCanvasElement)[] = [];

      for (let i = 0; i < targetCount; i++) {
        if (isCancelled) return;

        const time = (i / (targetCount - 1)) * Math.max(0.01, duration - 0.05);
        offscreenVideo.currentTime = time;

        await new Promise<void>((resolve) => {
          const onSeeked = () => {
            offscreenVideo.removeEventListener('seeked', onSeeked);
            resolve();
          };
          offscreenVideo.addEventListener('seeked', onSeeked);
        });

        if (isCancelled) return;

        offCtx.drawImage(offscreenVideo, 0, 0, targetW, targetH);

        try {
          if ('createImageBitmap' in window) {
            const bitmap = await createImageBitmap(offCanvas);
            extracted.push(bitmap);
          } else {
            const copyCanvas = document.createElement('canvas');
            copyCanvas.width = targetW;
            copyCanvas.height = targetH;
            const copyCtx = copyCanvas.getContext('2d');
            copyCtx?.drawImage(offCanvas, 0, 0);
            extracted.push(copyCanvas);
          }
        } catch {
          // If createImageBitmap fails due to CORS on local or browser security, fall back
          const copyCanvas = document.createElement('canvas');
          copyCanvas.width = targetW;
          copyCanvas.height = targetH;
          const copyCtx = copyCanvas.getContext('2d');
          copyCtx?.drawImage(offCanvas, 0, 0);
          extracted.push(copyCanvas);
        }
      }

      if (!isCancelled && extracted.length >= 10) {
        framesRef.current = extracted;
        isCacheReadyRef.current = true;
        setIsCacheReady(true);
      }
    };

    // Wait until visible video has loadeddata + 300ms yield before starting extraction
    const timer = setTimeout(() => {
      extractFrames().catch((err) => {
        console.warn('Frame cache extraction skipped, falling back to video seek:', err);
      });
    }, 400);

    return () => {
      isCancelled = true;
      clearTimeout(timer);
    };
  }, []);

  // 3. Render loop with smoothed progress
  useEffect(() => {
    let animId: number;

    const render = () => {
      // Lerp smooth: smoothed += (target - smoothed) * 0.12
      smoothedProgressRef.current +=
        (targetProgressRef.current - smoothedProgressRef.current) * 0.12;
      const smoothed = smoothedProgressRef.current;

      const canvas = canvasRef.current;
      const video = videoRef.current;

      if (isCacheReadyRef.current && canvas && framesRef.current.length > 0) {
        const ctx = canvas.getContext('2d');
        if (ctx) {
          const dpr = Math.min(window.devicePixelRatio || 1, 2);
          const w = canvas.clientWidth;
          const h = canvas.clientHeight;

          if (canvas.width !== w * dpr || canvas.height !== h * dpr) {
            canvas.width = w * dpr;
            canvas.height = h * dpr;
          }

          ctx.save();
          ctx.scale(dpr, dpr);

          const frameIndex = Math.min(
            framesRef.current.length - 1,
            Math.max(0, Math.floor(smoothed * (framesRef.current.length - 1)))
          );
          const frame = framesRef.current[frameIndex];

          const frameW = frame instanceof ImageBitmap ? frame.width : frame.width;
          const frameH = frame instanceof ImageBitmap ? frame.height : frame.height;

          // Object-cover math
          const frameAspect = frameW / frameH;
          const canvasAspect = w / h;
          let drawW: number;
          let drawH: number;
          let drawX: number;
          let drawY: number;

          if (canvasAspect > frameAspect) {
            drawW = w;
            drawH = w / frameAspect;
            drawX = 0;
            drawY = (h - drawH) / 2;
          } else {
            drawH = h;
            drawW = h * frameAspect;
            drawX = (w - drawW) / 2;
            drawY = 0;
          }

          ctx.clearRect(0, 0, w, h);
          ctx.drawImage(frame, drawX, drawY, drawW, drawH);
          ctx.restore();
        }
      } else if (video && video.duration) {
        // Fallback: seek visible video to smoothed * (duration - 0.05) if delta > 0.04s
        const targetTime = smoothed * (video.duration - 0.05);
        if (Math.abs(video.currentTime - targetTime) > 0.04) {
          video.currentTime = targetTime;
        }
      }

      animId = requestAnimationFrame(render);
    };

    animId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animId);
    };
  }, []);

  const handleVideoLoadedData = () => {
    setHasDecodedFrame(true);
    if (videoRef.current) {
      videoRef.current.currentTime = 0.001;
    }
  };

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-0 overflow-hidden pointer-events-none bg-[#0a0a0a]"
      aria-hidden="true"
    >
      {/* 1. Poster image (bottom) */}
      <div
        className={`absolute inset-0 bg-[#0a0a0a] transition-opacity duration-500 ${
          hasDecodedFrame || isCacheReady ? 'opacity-0' : 'opacity-100'
        }`}
      >
        <div className="w-full h-full bg-gradient-to-b from-[#101418] via-[#0d0f12] to-[#0a0a0a] flex items-center justify-center">
          <div className="w-64 h-64 rounded-full bg-white/5 blur-3xl" />
        </div>
      </div>

      {/* 2. Video fallback (middle) */}
      <video
        ref={videoRef}
        src={VIDEO_URL}
        muted
        playsInline
        preload="auto"
        crossOrigin="anonymous"
        onLoadedData={handleVideoLoadedData}
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
          hasDecodedFrame && !isCacheReady ? 'opacity-100' : 'opacity-0'
        }`}
      />

      {/* 3. Canvas with frame cache (top) */}
      <canvas
        ref={canvasRef}
        className={`absolute inset-0 w-full h-full transition-opacity duration-500 ${
          isCacheReady ? 'opacity-100' : 'opacity-0'
        }`}
      />

      {/* Soft atmospheric overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/60 via-transparent to-[#0a0a0a]/40" />
    </div>
  );
};
