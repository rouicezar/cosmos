// 中央宇宙尺度轴：所有节点沿同一条参数化椭圆弧分布，
// 行星圆心在数学上精确落在轨道曲线上（科普站点的严谨要求）。

// 椭圆参数，坐标系为 0–100 的百分比（与 SVG viewBox 一致，故节点必落在描边上）。
const ARC = { cx: 18, cy: 50, rx: 40, ry: 46 };
// 五个节点的角度（度）：从顶部俯冲、经右侧最远点、再扫到左下。
const ANGLES = [-68, -34, 0, 34, 68];

function pointAt(deg) {
  const r = (deg * Math.PI) / 180;
  return {
    x: ARC.cx + ARC.rx * Math.cos(r),
    y: ARC.cy + ARC.ry * Math.sin(r),
  };
}

// 轨道描边：沿同一椭圆从首节点画弧到末节点。
const start = pointAt(ANGLES[0]);
const end = pointAt(ANGLES[ANGLES.length - 1]);
const orbitPath = `M ${start.x} ${start.y} A ${ARC.rx} ${ARC.ry} 0 0 1 ${end.x} ${end.y}`;

export function ScaleAtlas({ nodes, activeNode, onSelect }) {
  return (
    <section className="scale-atlas" aria-label="宇宙尺度">
      <svg className="orbit-svg" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
        <path className="orbit-track" d={orbitPath} />
        <path className="orbit-glow" d={orbitPath} />
      </svg>
      {nodes.map((node, index) => {
        const point = pointAt(ANGLES[index] ?? 0);
        return (
          <button
            key={node.id}
            className={`scale-node ${node.id} ${activeNode === node.id ? "is-active" : ""}`}
            type="button"
            style={{ left: `${point.x}%`, top: `${point.y}%` }}
            onClick={() => onSelect(node.id)}
            aria-pressed={activeNode === node.id}
          >
            <span className="planet-thumb">
              <img src={node.image} alt="" loading="lazy" decoding="async" />
            </span>
            <span className="node-copy">
              <strong>{node.name}</strong>
              <small>{node.label}</small>
            </span>
          </button>
        );
      })}
    </section>
  );
}
