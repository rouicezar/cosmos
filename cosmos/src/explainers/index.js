import * as blackHole from "./blackHole.js";
import * as starBirth from "./starBirth.js";
import * as lightYear from "./lightYear.js";

// 课程 topic id → 站内交互动画讲解模块。
const explainers = {
  "black-hole": blackHole,
  "star-birth": starBirth,
  "light-year": lightYear,
};

export const getExplainer = (id) => explainers[id] ?? null;
