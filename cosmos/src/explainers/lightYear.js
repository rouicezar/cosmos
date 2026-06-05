// 光年到底有多远 —— 一束光依次飞过月球、太阳、比邻星的尺度动画讲解。

const milestones = [
  { p: 0.0, name: "地球", time: "出发", color: "#7bd5ff" },
  { p: 0.3, name: "月球", time: "1.3 秒", color: "#cfd6e6" },
  { p: 0.6, name: "太阳", time: "8 分钟", color: "#ffb86c" },
  { p: 1.0, name: "比邻星", time: "4.24 年", color: "#ffe08a" },
];

export const captions = [
  { at: 0.0, text: "光速：每秒约 30 万公里" },
  { at: 0.3, text: "到月球，只要 1.3 秒" },
  { at: 0.58, text: "到太阳，要走 8 分钟" },
  { at: 0.8, text: "到最近的恒星，需要 4.24 年" },
];

export const duration = 14;

export function draw(ctx, t, w, h) {
  const y = h * 0.52;
  const x0 = w * 0.1;
  const x1 = w * 0.9;
  const span = x1 - x0;

  ctx.fillStyle = "#04060f";
  ctx.fillRect(0, 0, w, h);

  // 轨道线
  ctx.beginPath();
  ctx.moveTo(x0, y);
  ctx.lineTo(x1, y);
  ctx.strokeStyle = "rgba(255,255,255,0.14)";
  ctx.lineWidth = 1;
  ctx.stroke();

  const pulse = t; // 光脉冲沿轨道前进的归一化位置
  const px = x0 + span * pulse;

  // 里程碑节点
  for (const m of milestones) {
    const mx = x0 + span * m.p;
    const reached = pulse >= m.p - 0.001;
    ctx.beginPath();
    ctx.arc(mx, y, reached ? 7 : 5, 0, Math.PI * 2);
    ctx.fillStyle = reached ? m.color : "rgba(255,255,255,0.3)";
    if (reached) {
      ctx.shadowColor = m.color;
      ctx.shadowBlur = 16;
    }
    ctx.fill();
    ctx.shadowBlur = 0;

    ctx.fillStyle = reached ? "rgba(248,240,223,0.96)" : "rgba(248,240,223,0.45)";
    ctx.font = `600 ${Math.round(h * 0.05)}px "PingFang SC", sans-serif`;
    ctx.textAlign = "center";
    ctx.fillText(m.name, mx, y - 22);
    ctx.fillStyle = reached ? m.color : "rgba(255,255,255,0.3)";
    ctx.font = `${Math.round(h * 0.04)}px "Avenir Next", "PingFang SC", sans-serif`;
    ctx.fillText(m.time, mx, y + 34);
  }

  // 光脉冲拖尾
  const trail = ctx.createLinearGradient(px - span * 0.12, 0, px, 0);
  trail.addColorStop(0, "rgba(255,255,255,0)");
  trail.addColorStop(1, "rgba(255,255,255,0.9)");
  ctx.strokeStyle = trail;
  ctx.lineWidth = 2.5;
  ctx.beginPath();
  ctx.moveTo(Math.max(x0, px - span * 0.12), y);
  ctx.lineTo(px, y);
  ctx.stroke();

  // 光脉冲头
  ctx.beginPath();
  ctx.arc(px, y, 4.5, 0, Math.PI * 2);
  ctx.fillStyle = "#ffffff";
  ctx.shadowColor = "rgba(255,255,255,0.95)";
  ctx.shadowBlur = 20;
  ctx.fill();
  ctx.shadowBlur = 0;
}
