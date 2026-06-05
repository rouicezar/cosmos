import { Link } from "react-router-dom";
import { Play } from "@phosphor-icons/react";

// 右侧课程卡组：每张卡跳转到对应课程详情页。
export function LessonStack({ lessons }) {
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
          <span className="play-indicator"><Play weight="fill" /></span>
        </Link>
      ))}
    </aside>
  );
}
