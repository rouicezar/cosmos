import { CheckCircle, LockKey, RocketLaunch } from "@phosphor-icons/react";
import { MISSION_STATUS } from "../data/missions.js";

function statusClass(status) {
  if (status === MISSION_STATUS.DONE) return "done";
  if (status === MISSION_STATUS.ACTIVE) return "active";
  return "locked";
}

// 底部探索任务轨：点击切换当前任务站，顶部进度联动。
export function MissionDock({ missions, activeMission, onSelect }) {
  const progress = ((activeMission + 1) / missions.length) * 100;

  return (
    <section className="mission-dock" aria-label="探索任务">
      <div className="mission-summary">
        <span>探索任务</span>
        <RocketLaunch className="mission-icon" weight="duotone" />
        <strong>第 {activeMission + 1} 站 / 共 {missions.length} 站</strong>
        <div className="dock-progress">
          <span style={{ width: `${progress}%` }} />
        </div>
      </div>
      <div className="mission-list">
        {missions.map((mission, index) => (
          <button
            key={mission.name}
            className={`mission-card ${activeMission === index ? "is-active" : ""}`}
            type="button"
            onClick={() => onSelect(index)}
          >
            <span className="mission-number">{index + 1}</span>
            <img src={mission.image} alt="" loading="lazy" decoding="async" />
            <strong>{mission.name}</strong>
            <small className={`mission-status ${statusClass(mission.status)}`}>
              {mission.status}
              {mission.status === MISSION_STATUS.DONE && <CheckCircle weight="fill" />}
              {mission.status === MISSION_STATUS.LOCKED && <LockKey weight="duotone" />}
            </small>
            {mission.status === MISSION_STATUS.ACTIVE && (
              <span className="mission-dots" aria-hidden="true">
                <i />
                <i />
                <i />
              </span>
            )}
          </button>
        ))}
      </div>
    </section>
  );
}
