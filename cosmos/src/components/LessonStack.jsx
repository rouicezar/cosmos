import { useState } from "react";
import { Link } from "react-router-dom";
import { Play } from "@phosphor-icons/react";
import { getExplainer } from "../explainers/index.js";
import { Modal } from "./Modal.jsx";
import { ExplainerPlayer } from "./ExplainerPlayer.jsx";

// 右侧课程卡组：卡片跳转课程详情；播放按钮直接弹出动画讲解模态（不跳页）。
export function LessonStack({ lessons }) {
  const [active, setActive] = useState(null);

  return (
    <aside className="lesson-stack" aria-label="宇宙课程">
      {lessons.map((lesson) => (
        <Link key={lesson.id} className={`lesson-card ${lesson.accent}`} to={`/topic/${lesson.id}`}>
          <span className="lesson-art">
            <img src={lesson.image} alt="" loading="lazy" decoding="async" />
          </span>
          <span className="lesson-text">
            <strong>{lesson.name}</strong>
            <small>{lesson.minutes}</small>
            <em>{lesson.note}</em>
          </span>
          <button
            className="play-indicator"
            type="button"
            aria-label={`播放讲解：${lesson.name}`}
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              setActive(lesson);
            }}
          >
            <Play weight="fill" />
          </button>
        </Link>
      ))}

      {active && getExplainer(active.id) && (
        <Modal title={active.name} onClose={() => setActive(null)}>
          <div className="modal-video">
            <ExplainerPlayer
              explainer={getExplainer(active.id)}
              poster={active.image}
              label={`${active.name} · ${active.minutes}`}
            />
          </div>
        </Modal>
      )}
    </aside>
  );
}
