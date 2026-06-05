// 恒星如何诞生 —— 分子云坍缩到核聚变点燃的交互式动画讲解。

const particles = Array.from({ length: 260 }, () => {
  const hueRoll = Math.random();
  return {
    a: Math.random() * Math.PI * 2,
    d: 0.18 + Math.random() * 0.78,
    s: Math.random() * 1.6 + 0.5,
    spin: (Math.random() - 0.5) * 0.6,
    // 星云配色：偏violet / 偏cyan / 偏暖红
    color: hueRoll < 0.4 ? [150, 130, 255] : hueRoll < 0.7 ? [120, 200, 255] : [255, 150, 120],
  };
});

export const captions = [
  { at: 0.0, text: "一切始于一团寒冷的分子云" },
  { at: 0.3, text: "引力让气体向中心坍缩" },
  { at: 0.6, text: "核心越来越热、越来越密" },
  { at: 0.8, text: "点燃核聚变——一颗恒星诞生" },
];

export const duration = 16;

function easeInExpo(p) {
  return p <= 0 ? 0 : Math.pow(2, 10 * (p - 1));
}

export function draw(ctx, t, w, h) {
  const cx = w / 2;
  const cy = h / 2;
  const min = Math.min(w, h);

  ctx.fillStyle = "#04050e";
  ctx.fillRect(0, 0, w, h);

  // 坍缩进度：0→0.78 阶段把粒子拉向中心。
  const collapse = easeInExpo(Math.min(1, t / 0.78));
  const ignite = Math.max(0, (t - 0.72) / 0.28); // 点燃强度
  const rot = t * Math.PI * 1.6;

  ctx.globalCompositeOperation = "lighter";
  for (const p of particles) {
    const d = (p.d * min * 0.5) * (1 - 0.92 * collapse);
    const a = p.a + p.spin * rot + collapse * 1.4;
    const x = cx + Math.cos(a) * d;
    const y = cy + Math.sin(a) * d;
    const fade = 1 - 0.6 * ignite;
    ctx.beginPath();
    ctx.arc(x, y, p.s * (1 + collapse * 0.6), 0, Math.PI * 2);
    ctx.fillStyle = `rgba(${p.color[0]},${p.color[1]},${p.color[2]},${0.45 * fade})`;
    ctx.fill();
  }
  ctx.globalCompositeOperation = "source-over";

  // 核心：随坍缩增亮，点燃后爆发为明亮恒星 + 光芒。
  const coreR = min * (0.02 + 0.06 * collapse + 0.05 * ignite);
  const flash = ignite * (0.8 + 0.2 * Math.sin(t * 40));
  const core = ctx.createRadialGradient(cx, cy, 0, cx, cy, coreR * 6);
  core.addColorStop(0, `rgba(255,255,245,${0.5 + 0.5 * collapse})`);
  core.addColorStop(0.3, `rgba(255,${210 - ignite * 30},${150 + ignite * 60},${0.5 + 0.5 * ignite})`);
  core.addColorStop(1, "rgba(255,170,90,0)");
  ctx.fillStyle = core;
  ctx.beginPath();
  ctx.arc(cx, cy, coreR * 6, 0, Math.PI * 2);
  ctx.fill();

  ctx.beginPath();
  ctx.arc(cx, cy, coreR, 0, Math.PI * 2);
  ctx.fillStyle = `rgba(255,255,250,${0.7 + 0.3 * collapse})`;
  ctx.fill();

  // 点燃后的星芒
  if (ignite > 0) {
    ctx.save();
    ctx.translate(cx, cy);
    ctx.strokeStyle = `rgba(255,235,200,${0.5 * flash})`;
    ctx.lineWidth = 2;
    for (let i = 0; i < 6; i++) {
      const a = (i / 6) * Math.PI * 2 + t;
      const len = coreR * (4 + 8 * flash);
      ctx.beginPath();
      ctx.moveTo(0, 0);
      ctx.lineTo(Math.cos(a) * len, Math.sin(a) * len);
      ctx.stroke();
    }
    ctx.restore();
  }
}
