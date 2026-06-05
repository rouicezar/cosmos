import { useEffect, useRef } from "react";

// 深空星空层：在背景图之上叠加一层轻量 canvas 星点，缓慢漂移并闪烁，
// 为静态首屏补上“活着的宇宙”动效。尊重 prefers-reduced-motion。
const STAR_DENSITY = 1 / 7000; // 每平方像素的星点数量
const MAX_STARS = 320;

export function Starfield() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    let stars = [];
    let width = 0;
    let height = 0;
    let frame = 0;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    function seed() {
      const count = Math.min(MAX_STARS, Math.round(width * height * STAR_DENSITY));
      stars = Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        r: Math.random() * 1.3 + 0.3,
        // 闪烁相位与速度，让星点错落明灭
        phase: Math.random() * Math.PI * 2,
        twinkle: Math.random() * 0.9 + 0.3,
        drift: Math.random() * 0.04 + 0.01,
        hue: Math.random() < 0.18 ? 38 : Math.random() < 0.5 ? 205 : 0, // 偏金 / 偏冰蓝 / 纯白
      }));
    }

    function resize() {
      width = canvas.clientWidth;
      height = canvas.clientHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      seed();
    }

    function draw(t) {
      ctx.clearRect(0, 0, width, height);
      for (const s of stars) {
        const alpha = 0.45 + 0.55 * Math.sin(s.phase + t * 0.0016 * s.twinkle);
        const color =
          s.hue === 38
            ? `rgba(255, 222, 170, ${alpha})`
            : s.hue === 205
              ? `rgba(180, 224, 255, ${alpha})`
              : `rgba(255, 255, 255, ${alpha})`;
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
        ctx.fillStyle = color;
        ctx.fill();
        // 向上缓慢漂移，越界后从底部回收
        s.y -= s.drift;
        if (s.y < -2) s.y = height + 2;
      }
    }

    resize();
    window.addEventListener("resize", resize);

    if (reduceMotion) {
      draw(0); // 静态绘制一帧
    } else {
      const loop = (t) => {
        draw(t);
        frame = requestAnimationFrame(loop);
      };
      frame = requestAnimationFrame(loop);
    }

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(frame);
    };
  }, []);

  return <canvas ref={canvasRef} className="cosmos-starfield" aria-hidden="true" />;
}
