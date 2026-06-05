import { useEffect, useMemo, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight, CaretUp, Sparkle } from "@phosphor-icons/react";
import { coldFacts } from "../data/topics.js";

// Fisher–Yates 洗牌：每次进入顺序都不同，制造"下一条会是什么"的变量奖励。
function shuffle(list) {
  const a = [...list];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

// 冷知识沉浸流：全屏、一条一条、滚动吸附的"宇宙版 Reels"，让人一直上滑看下去。
export function ColdFeed() {
  const items = useMemo(() => shuffle(coldFacts), []);
  const [active, setActive] = useState(0);
  const scrollerRef = useRef(null);

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
    root.querySelectorAll(".reel").forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [items]);

  return (
    <section className="cold-reels-page">
      <div className="reels-topbar">
        <Link className="back-link" to="/"><ArrowLeft weight="bold" />返回星图</Link>
        <span className="reels-counter">
          <Sparkle weight="fill" />
          {active + 1} <i>/ {items.length}</i>
        </span>
      </div>

      <div className="cold-reels" ref={scrollerRef}>
        {items.map((item, i) => (
          <article key={item.id} className={`reel ${active === i ? "is-active" : ""}`} data-index={i}>
            <img className="reel-bg" src={item.image} alt="" loading={i < 2 ? "eager" : "lazy"} />
            <div className="reel-veil" />
            <div className="reel-body">
              <span className="reel-badge"><Sparkle weight="fill" />{item.topicName}</span>
              <p className="reel-fact">{item.text}</p>
              <Link className="reel-deep" to={`/topic/${item.topicId}`}>
                深入了解 {item.topicName}
                <ArrowRight weight="bold" />
              </Link>
            </div>
            {i < items.length - 1 && (
              <span className="reel-hint" aria-hidden="true">
                <CaretUp weight="bold" />
                上滑，下一条
              </span>
            )}
          </article>
        ))}
      </div>
    </section>
  );
}
