// 黑洞为什么看不见 —— 引力透镜 + 事件视界的交互式动画讲解。
// draw(ctx, t, w, h)：t 为 0–1 的播放进度，纯函数式绘制，便于暂停/重播。

// 背景星点（模块级一次性生成，保证每帧位置一致）。
const stars = Array.from({ length: 140 }, () => ({
  a: Math.random() * Math.PI * 2,
  d: 0.12 + Math.random() * 0.9, // 相对最短边的归一化距离
  s: Math.random() * 1.2 + 0.3,
  tw: Math.random() * Math.PI * 2,
}));

export const captions = [
  { at: 0.0, text: "光线从四面八方射向黑洞" },
  { at: 0.3, text: "靠近时，强大的引力把光线弯曲" },
  { at: 0.58, text: "越过事件视界，光再也无法逃离" },
  { at: 0.82, text: "于是黑洞呈现为一片绝对的黑" },
];

export const duration = 16;

export function draw(ctx, t, w, h) {
  const cx = w / 2;
  const cy = h / 2;
  const min = Math.min(w, h);
  const R = min * 0.13; // 事件视界半径
  const lens = R * R * 1.7; // 透镜强度

  ctx.fillStyle = "#03040c";
  ctx.fillRect(0, 0, w, h);

  // 引力透镜下的背景星点：沿半径方向向外位移，靠近黑洞处堆积成环。
  for (const star of stars) {
    const baseD = star.d * min * 0.62;
    const appD = baseD + lens / baseD; // 视位置被推向外侧
    const x = cx + Math.cos(star.a) * appD;
    const y = cy + Math.sin(star.a) * appD;
    const alpha = (0.5 + 0.5 * Math.sin(star.tw + t * 6)) * Math.min(1, baseD / (min * 0.4));
    ctx.beginPath();
    ctx.arc(x, y, star.s, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(220,232,255,${alpha})`;
    ctx.fill();
  }

  // 吸积盘：倾斜椭圆环，亮带随时间转动。
  ctx.save();
  ctx.translate(cx, cy);
  ctx.rotate(-0.32);
  ctx.scale(1, 0.32);
  const spin = t * Math.PI * 2;
  for (let i = 0; i < 220; i++) {
    const ang = (i / 220) * Math.PI * 2;
    const rr = R * 2.5;
    const glow = 0.5 + 0.5 * Math.sin(ang * 2 - spin * 2);
    ctx.beginPath();
    ctx.arc(0, 0, rr, ang, ang + 0.05);
    ctx.strokeStyle = `rgba(255,${150 + glow * 80},${60 + glow * 40},${0.18 + glow * 0.5})`;
    ctx.lineWidth = R * 0.9;
    ctx.stroke();
  }
  ctx.restore();

  // 光子环：事件视界外的明亮细环。
  ctx.beginPath();
  ctx.arc(cx, cy, R * 1.5, 0, Math.PI * 2);
  ctx.strokeStyle = "rgba(255,196,128,0.85)";
  ctx.lineWidth = 2;
  ctx.shadowColor = "rgba(255,180,110,0.9)";
  ctx.shadowBlur = 18;
  ctx.stroke();
  ctx.shadowBlur = 0;

  // 入射光线：从画面边缘射向黑洞并被弯曲，进度越大越被吞噬。
  const beams = 5;
  const swallow = Math.min(1, Math.max(0, (t - 0.45) / 0.35)); // 0.45 后逐渐被吞
  for (let i = 0; i < beams; i++) {
    const a0 = (i / beams) * Math.PI * 2 + 0.4;
    const startR = min * 0.75;
    const reach = R * 1.5 + (startR - R * 1.5) * swallow; // 终点随吞噬向内
    ctx.beginPath();
    const steps = 36;
    for (let s = 0; s <= steps; s++) {
      const p = s / steps;
      const rr = startR + (reach - startR) * p;
      const bend = (1 - rr / startR) * 0.9; // 越近弯得越多
      const a = a0 + bend;
      const x = cx + Math.cos(a) * rr;
      const y = cy + Math.sin(a) * rr;
      if (s === 0) ctx.moveTo(x, y);
      else ctx.lineTo(x, y);
    }
    const phase = (t * 2 + i / beams) % 1;
    ctx.strokeStyle = `rgba(150,210,255,${0.12 + 0.35 * (1 - swallow)})`;
    ctx.lineWidth = 1.4;
    ctx.stroke();
    // 沿光线流动的光点
    void phase;
  }

  // 事件视界：纯黑圆盘 + 暗边。
  const grad = ctx.createRadialGradient(cx, cy, R * 0.6, cx, cy, R * 1.04);
  grad.addColorStop(0, "#000000");
  grad.addColorStop(0.85, "#000000");
  grad.addColorStop(1, "rgba(0,0,0,0.2)");
  ctx.beginPath();
  ctx.arc(cx, cy, R * 1.04, 0, Math.PI * 2);
  ctx.fillStyle = grad;
  ctx.fill();
}
