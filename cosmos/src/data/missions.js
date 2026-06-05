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

// 底部探索任务轨：8 站旅程，状态决定徽标与高亮。
export const missions = [
  { name: "地球家园", status: MISSION_STATUS.DONE, image: missionEarth },
  { name: "月球之谜", status: MISSION_STATUS.DONE, image: missionMoon },
  { name: "太阳系漫游", status: MISSION_STATUS.ACTIVE, image: missionSolar },
  { name: "银河系探秘", status: MISSION_STATUS.LOCKED, image: missionGalaxy },
  { name: "宇宙大尺度", status: MISSION_STATUS.LOCKED, image: missionObservable },
  { name: "暗物质之谜", status: MISSION_STATUS.LOCKED, image: missionNebula },
  { name: "黑洞边界", status: MISSION_STATUS.LOCKED, image: missionBlackHole },
  { name: "宇宙的未来", status: MISSION_STATUS.LOCKED, image: missionFuture },
];
