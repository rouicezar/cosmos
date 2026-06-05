import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight, CaretDown } from "@phosphor-icons/react";
import { topicsByCategory } from "../data/topics.js";
import { CountUp } from "../components/CountUp.jsx";

const scales = topicsByCategory("scale");

// 尺度俯冲：滚动吸附的电影级旅程，一屏一个尺度，从地球一路放大到可观测宇宙。
export function ScaleJourney() {
  const [active, setActive] = useState(0);
  const scrollerRef = useRef(null);
  const slideRefs = useRef([]);

  useEffect(() => {
    const root = scrollerRef.current;
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) setActive(Number(e.target.dataset.index));
        }
      },
      { root, threshold: 0.6 },
    );
    root.querySelectorAll(".journey-slide").forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  const go = (i) => slideRefs.current[i]?.scrollIntoView({ behavior: "smooth" });

  return (
    <section className="journey-page">
      <div className="journey-topbar">
        <Link className="back-link" to="/"><ArrowLeft weight="bold" />返回星图</Link>
        <span className="journey-title">尺度俯冲 · 从地球到可观测宇宙</span>
      </div>

      <nav className="journey-ruler" aria-label="尺度导航">
        {scales.map((s, i) => (
          <button
            key={s.id}
            type="button"
            className={active === i ? "is-active" : ""}
            onClick={() => go(i)}
          >
            <i />
            <span>{s.name}</span>
          </button>
        ))}
      </nav>

      <div className="journey-scroller" ref={scrollerRef}>
        {scales.map((s, i) => (
          <section
            key={s.id}
            className={`journey-slide ${active === i ? "is-active" : ""}`}
            data-index={i}
            ref={(el) => (slideRefs.current[i] = el)}
          >
            <div
              className={`journey-orb ${s.id}`}
              style={{ "--orb": `clamp(180px, ${30 + i * 7}vh, 76vh)` }}
            >
              <img src={s.image} alt={s.name} loading={i < 2 ? "eager" : "lazy"} />
            </div>
            <div className="journey-copy">
              <span className="journey-index">
                {String(i + 1).padStart(2, "0")} <i>/ {String(scales.length).padStart(2, "0")}</i>
              </span>
              <h2>{s.name}</h2>
              <p className="journey-label"><CountUp value={s.label} /></p>
              <dl className="journey-stats">
                {s.quickStats.map((st) => (
                  <div key={st.label}>
                    <dt>{st.label}</dt>
                    <dd><CountUp value={st.value} /></dd>
                  </div>
                ))}
              </dl>
              <p className="journey-note">{s.note}</p>
              <Link className="reel-deep" to={`/topic/${s.id}`}>
                深入了解 {s.name}
                <ArrowRight weight="bold" />
              </Link>
            </div>
            {i < scales.length - 1 && (
              <span className="journey-cue" aria-hidden="true">
                <CaretDown weight="bold" />
                继续放大
              </span>
            )}
          </section>
        ))}
      </div>
    </section>
  );
}
