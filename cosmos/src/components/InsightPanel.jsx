import { Link } from "react-router-dom";
import { ArrowRight, Sparkle } from "@phosphor-icons/react";

// 随当前尺度节点联动的数据洞察面板：量级速读 + 严谨事实 + 一条冷知识 + 深入链接。
export function InsightPanel({ node }) {
  return (
    <aside className="insight-panel">
      <span className="insight-eyebrow">当前观测</span>
      <strong className="insight-title">{node.name}</strong>

      <dl className="insight-stats">
        {node.quickStats.map((stat) => (
          <div key={stat.label}>
            <dt>{stat.label}</dt>
            <dd>{stat.value}</dd>
          </div>
        ))}
      </dl>

      <ul className="insight-facts">
        {node.facts.map((fact) => (
          <li key={fact}>{fact}</li>
        ))}
      </ul>

      <p className="insight-cold">
        <span className="cold-badge"><Sparkle weight="fill" />冷知识</span>
        {node.cold[0]}
      </p>

      <Link className="insight-more" to={`/topic/${node.id}`}>
        深入了解 {node.name}
        <ArrowRight weight="bold" />
      </Link>
    </aside>
  );
}
