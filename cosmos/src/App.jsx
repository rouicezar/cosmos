import { useMemo, useState } from "react";
import {
  CheckCircle,
  LockKey,
  MagnifyingGlass,
  Play,
  RocketLaunch,
  Spiral,
  UserCircle,
} from "@phosphor-icons/react";
import cosmicBackground from "./assets/cosmic-background.png";
import planetEarth from "./assets/planet-earth.png";
import planetMoon from "./assets/planet-moon.png";
import planetSolar from "./assets/planet-solar.png";
import planetGalaxy from "./assets/planet-galaxy.png";
import planetObservable from "./assets/planet-observable.png";
import lessonBlackHole from "./assets/lesson-black-hole.png";
import lessonStarBirth from "./assets/lesson-star-birth.png";
import lessonLightYear from "./assets/lesson-light-year.png";
import missionEarth from "./assets/mission-earth.png";
import missionMoon from "./assets/mission-moon.png";
import missionSolar from "./assets/mission-solar.png";
import missionGalaxy from "./assets/mission-galaxy.png";
import missionObservable from "./assets/mission-observable.png";
import missionNebula from "./assets/mission-nebula.png";
import missionBlackHole from "./assets/mission-black-hole.png";
import missionFuture from "./assets/mission-future.png";

const scaleNodes = [
  {
    id: "earth",
    name: "地球",
    label: "直径 12,742 km",
    image: planetEarth,
    distance: "1 个地球直径",
    time: "光绕地球约 0.13 秒",
    note: "所有宇宙尺度的理解，都从脚下这颗行星开始。",
  },
  {
    id: "moon",
    name: "月球",
    label: "距离地球 384,400 km",
    image: planetMoon,
    distance: "约 30 个地球直径",
    time: "光到月球约 1.28 秒",
    note: "月球看起来很近，但已经远到可以容纳 30 个地球。",
  },
  {
    id: "solar",
    name: "太阳系",
    label: "直径约 2 光年",
    image: planetSolar,
    distance: "行星在太阳引力下排成轨道",
    time: "阳光到地球约 8 分钟",
    note: "太阳系不是平面图，而是一个巨大的引力剧场。",
  },
  {
    id: "galaxy",
    name: "银河系",
    label: "直径约 10 万光年",
    image: planetGalaxy,
    distance: "约有千亿颗恒星",
    time: "横穿银河需要十万年光程",
    note: "我们看到的星空，只是银河系里很小的一片邻域。",
  },
  {
    id: "observable",
    name: "可观测宇宙",
    label: "直径约 930 亿光年",
    image: planetObservable,
    distance: "包含数以万亿计星系",
    time: "最古老光线来自宇宙早期",
    note: "可观测宇宙的边界，是光到达我们的极限。",
  },
];

const lessons = [
  {
    id: "black-hole",
    title: "黑洞为什么看不见",
    minutes: "9 分钟",
    body: "事件视界、光线逃逸与引力透镜，揭开“看不见”的真相。",
    accent: "black-hole",
    image: lessonBlackHole,
  },
  {
    id: "star-birth",
    title: "恒星如何诞生",
    minutes: "12 分钟",
    body: "从星云坍缩到核聚变点燃，见证一颗恒星的诞生之旅。",
    accent: "nebula",
    image: lessonStarBirth,
  },
  {
    id: "light-year",
    title: "光年到底有多远",
    minutes: "8 分钟",
    body: "用日常生活的尺度，理解宇宙惊人的距离。",
    accent: "milky",
    image: lessonLightYear,
  },
];

const missions = [
  ["地球家园", "已完成", missionEarth],
  ["月球之谜", "已完成", missionMoon],
  ["太阳系漫游", "进行中", missionSolar],
  ["银河系探秘", "未解锁", missionGalaxy],
  ["宇宙大尺度", "未解锁", missionObservable],
  ["暗物质之谜", "未解锁", missionNebula],
  ["黑洞边界", "未解锁", missionBlackHole],
  ["宇宙的未来", "未解锁", missionFuture],
];

export function App() {
  const [activeNode, setActiveNode] = useState("solar");
  const [activeLesson, setActiveLesson] = useState("black-hole");
  const [activeMission, setActiveMission] = useState(2);
  const [searchOpen, setSearchOpen] = useState(false);

  const currentNode = useMemo(
    () => scaleNodes.find((node) => node.id === activeNode) ?? scaleNodes[0],
    [activeNode],
  );
  const currentLesson = useMemo(
    () => lessons.find((lesson) => lesson.id === activeLesson) ?? lessons[0],
    [activeLesson],
  );

  return (
    <main className="cosmos-shell">
      <img className="cosmos-reference-bg" src={cosmicBackground} alt="" aria-hidden="true" />
      <div className="cosmos-veil" />
      <header className="site-header">
        <a className="brand" href="#top" aria-label="星图课堂首页">
          <span className="brand-mark"><Spiral weight="duotone" /></span>
          <span>星图课堂</span>
        </a>
        <nav className="nav-links" aria-label="主导航">
          {["宇宙尺度", "恒星一生", "黑洞边界", "星系地图", "探索任务"].map((item) => (
            <a key={item} href={`#${item}`}>{item}</a>
          ))}
        </nav>
        <div className={`search-control ${searchOpen ? "is-open" : ""}`}>
          {searchOpen && <input autoFocus placeholder="搜索光年、黑洞、银河..." />}
          <button type="button" onClick={() => setSearchOpen((open) => !open)} aria-label="搜索">
            <MagnifyingGlass weight="light" />
          </button>
          <button className="profile-button" type="button" aria-label="学习档案">
            <UserCircle weight="light" />
          </button>
        </div>
      </header>

      <section className="hero-grid" id="top">
        <div className="hero-copy">
          <p className="section-kicker">宇宙尺度 · 交互星图</p>
          <h1>在星图里<br />读懂宇宙</h1>
          <p className="hero-subtitle">
            把抽象的光年、引力和恒星演化，变成可以探索的画面。
          </p>
          <div className="hero-actions">
            <button type="button" onClick={() => setActiveMission(2)}>开始探索宇宙</button>
            <span>当前任务：{missions[activeMission][0]}</span>
          </div>
        </div>

        <section className="scale-atlas" aria-label="宇宙尺度">
          <div className="orbit-thread" />
          <div className="orbit-arc arc-a" />
          <div className="orbit-arc arc-b" />
          {scaleNodes.map((node, index) => (
            <button
              key={node.id}
              className={`scale-node ${node.id} ${activeNode === node.id ? "is-active" : ""}`}
              type="button"
              style={{ "--i": index }}
              onClick={() => setActiveNode(node.id)}
              aria-pressed={activeNode === node.id}
            >
              <span className="planet-thumb">
                <img src={node.image} alt="" />
              </span>
              <span className="node-copy">
                <strong>{node.name}</strong>
                <small>{node.label}</small>
              </span>
            </button>
          ))}
        </section>

        <aside className="lesson-stack" aria-label="宇宙课程">
          {lessons.map((lesson) => (
            <button
              key={lesson.id}
              className={`lesson-card ${lesson.accent} ${activeLesson === lesson.id ? "is-active" : ""}`}
              type="button"
              onClick={() => setActiveLesson(lesson.id)}
              aria-pressed={activeLesson === lesson.id}
            >
              <span className="lesson-art">
                <img src={lesson.image} alt="" />
              </span>
              <span className="lesson-text">
                <strong>{lesson.title}</strong>
                <small>{lesson.minutes}</small>
                <em>{lesson.body}</em>
              </span>
              <span className="play-indicator"><Play weight="fill" /></span>
            </button>
          ))}
        </aside>
      </section>

      <section className="mission-dock" aria-label="探索任务">
        <div className="mission-summary">
          <span>探索任务</span>
          <RocketLaunch className="mission-icon" weight="duotone" />
          <strong>第 {activeMission + 1} 站 / 共 8 站</strong>
          <div className="dock-progress">
            <span style={{ width: `${((activeMission + 1) / missions.length) * 100}%` }} />
          </div>
        </div>
        <div className="mission-list">
          {missions.map(([name, status, image], index) => (
            <button
              key={name}
              className={`mission-card ${activeMission === index ? "is-active" : ""}`}
              type="button"
              onClick={() => setActiveMission(index)}
            >
              <span className="mission-number">{index + 1}</span>
              <img src={image} alt="" />
              <strong>{name}</strong>
              <small className={`mission-status ${status === "已完成" ? "done" : status === "进行中" ? "active" : "locked"}`}>
                {status}
                {status === "已完成" && <CheckCircle weight="fill" />}
                {status === "未解锁" && <LockKey weight="duotone" />}
              </small>
              {status === "进行中" && (
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

      <aside className="insight-panel">
        <span>当前观测</span>
        <strong>{currentNode.name}</strong>
        <p>{currentNode.distance}</p>
        <p>{currentNode.time}</p>
        <em>{currentNode.note}</em>
        <small>正在学习：{currentLesson.title}</small>
      </aside>
    </main>
  );
}
