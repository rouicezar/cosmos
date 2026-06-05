import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { topicsByCategory } from "../data/topics.js";
import { missions, MISSION_STATUS } from "../data/missions.js";
import { Hero } from "../components/Hero.jsx";
import { ScaleAtlas } from "../components/ScaleAtlas.jsx";
import { LessonStack } from "../components/LessonStack.jsx";
import { MissionDock } from "../components/MissionDock.jsx";

const scaleNodes = topicsByCategory("scale");
const lessons = topicsByCategory("lesson");

const DEFAULT_NODE = "solar";
const DEFAULT_MISSION = missions.findIndex((m) => m.status === MISSION_STATUS.ACTIVE);

// 首页：交互式星图（尺度轴 + 课程卡 + 任务轨）。
export function Home() {
  const navigate = useNavigate();
  const [activeNode, setActiveNode] = useState(DEFAULT_NODE);
  const [activeMission, setActiveMission] = useState(DEFAULT_MISSION);

  const currentNode = useMemo(
    () => scaleNodes.find((node) => node.id === activeNode) ?? scaleNodes[0],
    [activeNode],
  );

  return (
    <>
      <section className="hero-grid" id="top">
        <Hero
          currentNode={currentNode}
          currentMissionName={missions[activeMission].name}
          onStart={() => navigate("/scale")}
        />
        <ScaleAtlas nodes={scaleNodes} activeNode={activeNode} onSelect={setActiveNode} />
        <LessonStack lessons={lessons} />
      </section>

      <MissionDock missions={missions} activeMission={activeMission} onSelect={setActiveMission} />
    </>
  );
}
