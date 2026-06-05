import { InsightPanel } from "./InsightPanel.jsx";

export function Hero({ currentNode, currentMissionName, onStart }) {
  return (
    <div className="hero-copy">
      <p className="section-kicker">宇宙尺度 · 交互星图</p>
      <h1>在星图里<br />读懂宇宙</h1>
      <p className="hero-subtitle">
        把抽象的光年、引力和恒星演化，变成可以探索的画面。
      </p>
      <div className="hero-actions">
        <button type="button" onClick={onStart}>开始探索宇宙</button>
        <span>当前任务：{currentMissionName}</span>
      </div>
      <InsightPanel node={currentNode} />
    </div>
  );
}
