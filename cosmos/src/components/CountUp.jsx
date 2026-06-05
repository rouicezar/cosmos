import { useEffect, useRef, useState } from "react";

// 匹配字符串里的第一个数字（含千分位逗号与小数）。
const NUM = /\d[\d,]*(\.\d+)?/;

const reduceMotion =
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

// 数字滚动：滚动到视口时把数值从 0 跳动到目标，让关键量级"活"起来。
// 非数字字符串原样显示；尊重 prefers-reduced-motion。
export function CountUp({ value, duration = 900 }) {
  const text = String(value);
  const match = text.match(NUM);
  const ref = useRef(null);
  const fired = useRef(false);
  const [display, setDisplay] = useState(match && !reduceMotion ? text.replace(NUM, "0") : text);

  useEffect(() => {
    if (!match || reduceMotion) return;
    const el = ref.current;
    const decimals = (match[0].split(".")[1] || "").length;
    const target = parseFloat(match[0].replace(/,/g, ""));
    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || fired.current) return;
        fired.current = true;
        const start = performance.now();
        const tick = (now) => {
          const p = Math.min(1, (now - start) / duration);
          const eased = 1 - Math.pow(1 - p, 3);
          const n = target * eased;
          const formatted = n.toLocaleString("en-US", {
            minimumFractionDigits: decimals,
            maximumFractionDigits: decimals,
          });
          setDisplay(text.replace(NUM, formatted));
          if (p < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
      },
      { threshold: 0.6 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [text, match, duration]);

  return <span ref={ref}>{display}</span>;
}
