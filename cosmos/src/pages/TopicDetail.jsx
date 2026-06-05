import { Link, useParams } from "react-router-dom";
import { ArrowLeft, ArrowRight, Sparkle } from "@phosphor-icons/react";
import { getTopic } from "../data/topics.js";
import { getExplainer } from "../explainers/index.js";
import { ExplainerPlayer } from "../components/ExplainerPlayer.jsx";
import { Reveal } from "../components/Reveal.jsx";
import { CountUp } from "../components/CountUp.jsx";

const CATEGORY_LABEL = {
  scale: "宇宙尺度",
  lesson: "宇宙课程",
  object: "天体专题",
};

export function TopicDetail() {
  const { id } = useParams();
  const topic = getTopic(id);

  if (!topic) {
    return (
      <section className="detail-shell detail-missing">
        <h1>找不到这个天体</h1>
        <Link className="back-link" to="/"><ArrowLeft weight="bold" />返回星图</Link>
      </section>
    );
  }

  const related = (topic.related ?? []).map(getTopic).filter(Boolean);
  const explainer = getExplainer(topic.id);

  return (
    <article className="detail-shell">
      <Link className="back-link" to="/"><ArrowLeft weight="bold" />返回星图</Link>

      <header className={`detail-hero ${explainer ? "has-video" : ""}`}>
        {explainer ? (
          <div className="detail-video">
            <ExplainerPlayer
              explainer={explainer}
              poster={topic.image}
              label={`${topic.name}${topic.minutes ? ` · ${topic.minutes}` : ""}`}
              autoPlay
            />
          </div>
        ) : (
          <figure className="detail-figure">
            <img src={topic.image} alt={topic.name} />
          </figure>
        )}
        <div className="detail-head-copy">
          <span className="detail-category">
            {CATEGORY_LABEL[topic.category]}
            {topic.minutes && <em> · {topic.minutes}</em>}
          </span>
          <h1>{topic.name}</h1>
          <p className="detail-tagline">{topic.tagline}</p>
          <dl className="detail-stats">
            {topic.quickStats.map((stat) => (
              <div key={stat.label}>
                <dt>{stat.label}</dt>
                <dd><CountUp value={stat.value} /></dd>
              </div>
            ))}
          </dl>
        </div>
      </header>

      <div className="detail-body">
        <div className="detail-sections">
          {topic.sections.map((section, i) => (
            <Reveal as="section" key={section.heading} className="detail-section" delay={i * 60}>
              <h2>{section.heading}</h2>
              <p>{section.body}</p>
            </Reveal>
          ))}

          <Reveal as="section" className="detail-section detail-facts">
            <h2>关键事实</h2>
            <ul>
              {topic.facts.map((fact) => (
                <li key={fact}>{fact}</li>
              ))}
            </ul>
          </Reveal>
        </div>

        <Reveal as="aside" className="detail-cold-rail">
          <h2><Sparkle weight="fill" />冷知识</h2>
          {topic.cold.map((text) => (
            <p key={text} className="cold-card">{text}</p>
          ))}
        </Reveal>
      </div>

      {related.length > 0 && (
        <Reveal as="footer" className="detail-related">
          <span>顺着好奇心，继续探索</span>
          <div className="related-grid">
            {related.map((item) => (
              <Link key={item.id} className="related-card" to={`/topic/${item.id}`}>
                <img src={item.image} alt="" loading="lazy" />
                <span className="related-text">
                  <strong>{item.name}</strong>
                  <small>{item.tagline}</small>
                </span>
                <ArrowRight weight="bold" />
              </Link>
            ))}
          </div>
        </Reveal>
      )}
    </article>
  );
}
