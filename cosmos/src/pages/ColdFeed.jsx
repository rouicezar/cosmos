import { Link } from "react-router-dom";
import { ArrowLeft, ArrowUpRight, Sparkle } from "@phosphor-icons/react";
import { coldFacts } from "../data/topics.js";

// 冷知识流：把全站冷知识摊平成可浏览的卡片，每条都能点回对应专题。
export function ColdFeed() {
  return (
    <section className="cold-feed">
      <Link className="back-link" to="/"><ArrowLeft weight="bold" />返回星图</Link>

      <header className="cold-feed-head">
        <span className="section-kicker">意料之外 · 切实存在</span>
        <h1>宇宙冷知识</h1>
        <p>这些事实都来自公认的科学观测，却很少被讲起。挑一条，开始今天的探索。</p>
      </header>

      <div className="cold-grid">
        {coldFacts.map((item) => (
          <Link key={item.id} className="cold-feed-card" to={`/topic/${item.topicId}`}>
            <span className="cold-feed-thumb">
              <img src={item.image} alt="" loading="lazy" decoding="async" />
            </span>
            <span className="cold-feed-text">
              <span className="cold-badge"><Sparkle weight="fill" />{item.topicName}</span>
              <p>{item.text}</p>
            </span>
            <ArrowUpRight className="cold-feed-go" weight="bold" />
          </Link>
        ))}
      </div>
    </section>
  );
}
