"use client";

import { useEffect, useRef } from "react";

const DENSITY = 1 / 6500;

export function Starfield() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx) return;

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    let stars: Array<{ x: number; y: number; z: number; phase: number; speed: number }> = [];
    let width = 0;
    let height = 0;
    let animationFrameId = 0;

    const resize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      stars = Array.from({ length: Math.round(width * height * DENSITY) }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        z: Math.random() ** 2,
        phase: Math.random() * Math.PI * 2,
        speed: 0.3 + 0.9 * Math.random(),
      }));
    };

    const draw = (t: number) => {
      ctx.clearRect(0, 0, width, height);
      const reduced = prefersReducedMotion.matches;
      for (const s of stars) {
        const y = reduced ? s.y : (s.y + 0.0018 * t * (0.3 + s.z)) % height;
        const twinkle = reduced ? 1 : 0.7 + 0.3 * Math.sin(0.0009 * t * s.speed + s.phase);
        ctx.beginPath();
        ctx.arc(s.x, y, 0.3 + 0.9 * s.z, 0, 2 * Math.PI);
        ctx.fillStyle = `rgba(214, 228, 245, ${((0.12 + 0.55 * s.z) * twinkle).toFixed(3)})`;
        ctx.fill();
      }
    };

    const loop = (t: number) => {
      draw(t);
      animationFrameId = requestAnimationFrame(loop);
    };

    const start = () => {
      cancelAnimationFrame(animationFrameId);
      if (prefersReducedMotion.matches) {
        draw(0);
      } else {
        animationFrameId = requestAnimationFrame(loop);
      }
    };

    const handleResize = () => {
      resize();
      if (prefersReducedMotion.matches) draw(0);
    };

    resize();
    start();

    window.addEventListener("resize", handleResize);
    prefersReducedMotion.addEventListener("change", start);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", handleResize);
      prefersReducedMotion.removeEventListener("change", start);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-0"
    />
  );
}
