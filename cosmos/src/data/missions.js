import missionEarth from "../assets/mission-earth.png";
import missionMoon from "../assets/mission-moon.png";
import missionSolar from "../assets/mission-solar.png";
import missionGalaxy from "../assets/mission-galaxy.png";
import missionObservable from "../assets/mission-observable.png";
import missionNebula from "../assets/mission-nebula.png";
import missionBlackHole from "../assets/mission-black-hole.png";
import missionFuture from "../assets/mission-future.png";

// 任务状态常量，避免散落的中文字符串字面量。
export const MISSION_STATUS = {
  DONE: "已完成",
  ACTIVE: "进行中",
  LOCKED: "未解锁",
};

// 底部探索任务轨：8 站旅程。
// 每一站都是真实可探索的目的地：brief 是一句话看点，topicId 指向对应专题详情。
export const missions = [
  { name: "地球家园", status: MISSION_STATUS.DONE, image: missionEarth, topicId: "earth", brief: "认识我们唯一的家，理解一切尺度的起点。" },
  { name: "月球之谜", status: MISSION_STATUS.DONE, image: missionMoon, topicId: "moon", brief: "潮汐锁定，以及一颗正在悄悄远离的卫星。" },
  { name: "太阳系漫游", status: MISSION_STATUS.ACTIVE, image: missionSolar, topicId: "solar", brief: "在引力剧场里漫游，太阳占了 99.86% 的质量。" },
  { name: "银河系探秘", status: MISSION_STATUS.LOCKED, image: missionGalaxy, topicId: "galaxy", brief: "走进千亿恒星的棒旋之城，我们住在郊区。" },
  { name: "宇宙大尺度", status: MISSION_STATUS.LOCKED, image: missionObservable, topicId: "observable", brief: "抵达光所能及的边界——可观测宇宙。" },
  { name: "暗物质之谜", status: MISSION_STATUS.LOCKED, image: missionNebula, topicId: "dark-matter", brief: "看不见，却撑起整个宇宙的引力骨架。" },
  { name: "黑洞边界", status: MISSION_STATUS.LOCKED, image: missionBlackHole, topicId: "black-hole", brief: "越过事件视界，连光也无法回头。" },
  { name: "宇宙的未来", status: MISSION_STATUS.LOCKED, image: missionFuture, topicId: "cosmic-future", brief: "加速膨胀，会把万物带向何方？" },
];
