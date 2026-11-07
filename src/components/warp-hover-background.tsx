'use client';

import { useEffect, useRef } from 'react';

export function WarpHoverBackground({ active }: { active: boolean }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!active) return;
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext('2d');
    if (!canvas || !ctx) return;

    let width = 0;
    let height = 0;
    let frame = 0;
    let previous = 0;
    let elapsed = 0;
    const motion = window.matchMedia('(prefers-reduced-motion: reduce)');
    const mix = (a: number, b: number, t: number) => Math.round(a + (b - a) * t);
    const logo = new Path2D([
      'M341.87 122.39A175.4 175.4 0 0 0 224.76 7.21c21.37 68.74 71.94 110.54 117.11 115.18',
      'm345.73 136.78-.61-2.66C276.82 131.98 208.24 86.83 189.65.61q-7.28-.61-14.72-.62c-12.08 0-23.87 1.22-35.26 3.55 26.94 83.98 123.11 131.57 206.06 133.23z',
      'M348.13 149.95c-118.71-.69-218.72-60.46-249.67-132.4a176 176 0 0 0-53.29 40.03c66.49 57.59 183.26 94.65 303.33 95q-.17-1.32-.37-2.63',
      'M349.68 165.77c-101.84-.05-244.09-15.45-332.26-67.13a174 174 0 0 0-15.43 49.35c97.11 17.89 226.18 20.16 347.78 20.17q-.05-1.19-.09-2.39zM224.85 342.76a175.4 175.4 0 0 0 116.93-114.88c-45.08 4.68-95.52 46.36-116.93 114.88',
      'm345.05 216.13.62-2.66c-82.86 1.68-178.88 49.18-205.93 132.98a176 176 0 0 0 49.96 2.91c18.67-86.02 87.15-131.08 155.35-133.24z',
      'm348.09 200.31.37-2.63c-119.98.35-236.66 37.37-303.16 94.88a176 176 0 0 0 53.26 39.93C129.61 260.66 229.52 201 348.1 200.31z',
      'M349.77 182.11c-121.58 0-250.62 2.28-347.73 20.16a174 174 0 0 0 15.48 49.3c88.17-51.63 230.33-67.02 332.14-67.07q.06-1.19.11-2.38z'
    ].map(path => { const shape = new Path2D(path); return shape; }).reduce((combined, path) => {
      combined.addPath(path);
      return combined;
    }, new Path2D()));
    const hash = (x: number, y: number) => {
      const value = Math.sin(x * 127.1 + y * 311.7) * 43758.5453;
      return value - Math.floor(value);
    };

    function draw(time = 0) {
      if (!ctx) return;
      ctx.clearRect(0, 0, width, height);
      // Cycle only the ribbon colors; keep the canvas background transparent.
      const dark = (1 - Math.cos(time * Math.PI / 2)) / 2;
      const artWidth = width;
      const artHeight = height;
      const left = 0;
      const top = 0;
      ctx.save();
      // Enlarge and crop the supplied mark into a full-width ribbon backdrop.
      ctx.translate(-width * 0.12, -height * 0.3);
      ctx.scale(width * 1.24 / 350, height * 1.6 / 350);
      ctx.clip(logo);
      const ratio = Math.min(window.devicePixelRatio || 1, 2);
      ctx.setTransform(ratio, 0, 0, ratio, 0, 0);

      // A fixed typographic grid reveals curved, tapering ribbons flowing right.
      const step = 6;
      for (let y = top; y < top + artHeight; y += step) {
        for (let x = left; x < left + artWidth; x += step) {
          const u = (x - left) / artWidth;
          const v = (y - top) / artHeight - 0.5;
          const band = Math.floor(v * 12);
          const ix = Math.floor((x - left) / step);
          const iy = Math.floor((y - top) / step);
          const noise = hash(ix, iy);
          const pulse = 0.5 + 0.5 * Math.sin(u * 17 + band * 1.3);
          const opacity = (0.22 + noise * 0.5 + pulse * 0.28);
          const warmth = (0.5 + 0.5 * Math.sin(time * 1.6 + u * 8 + band * 0.65)) ** 3;
          const accent = warmth * (noise > 0.65 ? 1 : 0.15);
          const ink = mix(37, 225, dark);
          const red = mix(ink, 239, accent);
          const green = mix(ink, 99, accent);
          const blue = mix(ink, 50, accent);
          ctx.strokeStyle = `rgba(${red}, ${green}, ${blue}, ${opacity})`;
          ctx.fillStyle = ctx.strokeStyle;
          ctx.lineWidth = 0.65;
          const size = step * (0.28 + noise * 0.24);
          const symbol = Math.floor(noise * 5);
          ctx.beginPath();
          if (symbol === 0) {
            ctx.arc(x, y, size * 0.5, 0, Math.PI * 2);
            ctx.stroke();
          } else if (symbol === 1) {
            ctx.moveTo(x - size / 2, y);
            ctx.lineTo(x + size / 2, y);
            ctx.moveTo(x, y - size / 2);
            ctx.lineTo(x, y + size / 2);
            ctx.stroke();
          } else if (symbol === 2) {
            ctx.strokeRect(x - size / 2, y - size / 2, size, size);
          } else {
            ctx.fillRect(x - size / 2, y - size / 2, size * 0.6, size);
          }
        }
      }
      ctx.restore();
    }

    function tick(time: number) {
      if (!previous) previous = time;
      if (time - previous >= 40) {
        elapsed += Math.min(time - previous, 100) / 1000;
        previous = time;
        draw(elapsed);
      }
      frame = requestAnimationFrame(tick);
    }
    function start() {
      cancelAnimationFrame(frame);
      previous = 0;
      if (document.hidden) return;
      draw(motion.matches ? 0 : elapsed);
      if (!motion.matches) frame = requestAnimationFrame(tick);
    }

    const observer = new ResizeObserver(() => {
      const rect = canvas.getBoundingClientRect();
      width = rect.width;
      height = rect.height;
      const ratio = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.round(width * ratio);
      canvas.height = Math.round(height * ratio);
      ctx.setTransform(ratio, 0, 0, ratio, 0, 0);
      start();
    });
    observer.observe(canvas);
    motion.addEventListener('change', start);
    document.addEventListener('visibilitychange', start);
    return () => {
      cancelAnimationFrame(frame);
      observer.disconnect();
      motion.removeEventListener('change', start);
      document.removeEventListener('visibilitychange', start);
    };
  }, [active]);

  return <canvas ref={canvasRef} className="warp-hover-background" data-active={active} aria-hidden="true" />;
}
