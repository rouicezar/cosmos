const grades = [1, 2, 3, 4, 5];

const visualLabels = {
  "number-blocks": "数量块",
  "ten-frame": "十格框",
  "number-line": "数轴",
  groups: "分组阵列",
  clock: "钟表",
  ruler: "尺子刻度",
  angle: "角度实验",
  fraction: "分数条",
  decimal: "小数格",
  "area-grid": "方格面积",
  "shape-sort": "图形分类",
  "bar-chart": "条形统计图",
  "volume-cubes": "体积方块",
  balance: "天平",
  optimization: "策略排序"
};

const topics = [
  { id: "g1-1", grade: 1, unit: "一年级上", title: "5以内数的认识", domain: "数与代数", visual: "number-blocks", summary: "用一个个数量块看见数是由多少个一组成的。", prompt: "数一数亮起来的方块，看看数量怎样变多或变少。" },
  { id: "g1-2", grade: 1, unit: "一年级上", title: "5以内加减法", domain: "数与代数", visual: "ten-frame", summary: "把方块放进十格框，合起来是加法，拿走就是减法。", prompt: "调节数量，观察格子从空到满的变化。" },
  { id: "g1-3", grade: 1, unit: "一年级上", title: "6-10的认识", domain: "数与代数", visual: "ten-frame", summary: "十格框能帮助孩子看见 10 的结构。", prompt: "先看满了几个，再看还差几个到 10。" },
  { id: "g1-4", grade: 1, unit: "一年级上", title: "认识钟表", domain: "图形与测量", visual: "clock", summary: "钟面把一天里的时间变成可以观察的圆。", prompt: "转动分针，看看时针怎样慢慢移动。" },
  { id: "g1-5", grade: 1, unit: "一年级下", title: "20以内退位减法", domain: "数与代数", visual: "number-line", summary: "在数轴上向左跳，能看见减法是往小的方向移动。", prompt: "移动标记，观察数轴上退了几步。" },
  { id: "g1-6", grade: 1, unit: "一年级下", title: "认识图形", domain: "图形与几何", visual: "shape-sort", summary: "不同图形有不同边、角和曲直特征。", prompt: "比较圆、三角形、正方形和菱形的样子。" },

  { id: "g2-1", grade: 2, unit: "二年级上", title: "长度单位", domain: "图形与测量", visual: "ruler", summary: "统一刻度让长度可以被比较和记录。", prompt: "看刻度从 0 开始，理解几个小格就是几厘米。" },
  { id: "g2-2", grade: 2, unit: "二年级上", title: "100以内加减法", domain: "数与代数", visual: "number-line", summary: "大一些的加减法可以拆成在数轴上的连续移动。", prompt: "调节数值，看看标记向右或向左走。" },
  { id: "g2-3", grade: 2, unit: "二年级上", title: "角的初步认识", domain: "图形与几何", visual: "angle", summary: "角的大小看两条边张开的程度，不看边画得多长。", prompt: "拖动角度，观察张口变大时角也变大。" },
  { id: "g2-4", grade: 2, unit: "二年级上", title: "表内乘法", domain: "数与代数", visual: "groups", summary: "乘法是几个相同数量的组相加。", prompt: "改变每组数量和组数，看总数怎样变化。" },
  { id: "g2-5", grade: 2, unit: "二年级上", title: "观察物体", domain: "图形与几何", visual: "volume-cubes", summary: "从不同方向看同一组方块，看到的形状可能不同。", prompt: "看小方块的层叠，想象正面、侧面和上面。" },
  { id: "g2-6", grade: 2, unit: "二年级下", title: "数据收集整理", domain: "统计与概率", visual: "bar-chart", summary: "条形越高，表示数量越多。", prompt: "比较每一列的高度，找出最多和最少。" },
  { id: "g2-7", grade: 2, unit: "二年级下", title: "有余数的除法", domain: "数与代数", visual: "groups", summary: "平均分以后剩下不够再分一组的，就是余数。", prompt: "改变总数，观察每组分完以后剩下几个。" },

  { id: "g3-1", grade: 3, unit: "三年级上", title: "时、分、秒", domain: "图形与测量", visual: "clock", summary: "秒、分、时都可以在同一个钟面上观察。", prompt: "转动时间，看看 60 分怎样变成 1 小时。" },
  { id: "g3-2", grade: 3, unit: "三年级上", title: "测量", domain: "图形与测量", visual: "ruler", summary: "毫米、厘米、分米、米帮助描述不同长度。", prompt: "看一段长度跨过多少个刻度。" },
  { id: "g3-3", grade: 3, unit: "三年级上", title: "倍的认识", domain: "数与代数", visual: "groups", summary: "几倍就是有几个同样多。", prompt: "改变组数，观察 3 个 4 和 4 个 3 的关系。" },
  { id: "g3-4", grade: 3, unit: "三年级上", title: "长方形和正方形", domain: "图形与几何", visual: "area-grid", summary: "边长、周长和面积都可以放到方格纸上看。", prompt: "调节长和宽，观察格子总数和边界长度。" },
  { id: "g3-5", grade: 3, unit: "三年级上", title: "分数的初步认识", domain: "数与代数", visual: "fraction", summary: "把一个整体平均分，取其中几份就是分数。", prompt: "改变平均分的份数，观察每一份变大还是变小。" },
  { id: "g3-6", grade: 3, unit: "三年级下", title: "面积", domain: "图形与几何", visual: "area-grid", summary: "面积表示一个平面图形占了多少个单位方格。", prompt: "数一数涂色方格，理解长乘宽。" },
  { id: "g3-7", grade: 3, unit: "三年级下", title: "小数的初步认识", domain: "数与代数", visual: "decimal", summary: "十分之几可以写成一位小数。", prompt: "看 10 格中涂了几格，就知道是 0 点几。" },

  { id: "g4-1", grade: 4, unit: "四年级上", title: "大数的认识", domain: "数与代数", visual: "number-blocks", summary: "大数可以按位级分组，先看有多少个万和亿。", prompt: "把数量分层观察，理解位值。" },
  { id: "g4-2", grade: 4, unit: "四年级上", title: "公顷和平方千米", domain: "图形与测量", visual: "area-grid", summary: "大面积单位可以用更大的方格来想象。", prompt: "看方格组合，比较平方米、公顷和平方千米。" },
  { id: "g4-3", grade: 4, unit: "四年级上", title: "角的度量", domain: "图形与几何", visual: "angle", summary: "量角器把半圆平均分成 180 份来测量角。", prompt: "改变角度，观察锐角、直角、钝角的分界。" },
  { id: "g4-4", grade: 4, unit: "四年级上", title: "三位数乘两位数", domain: "数与代数", visual: "area-grid", summary: "乘法可以看成一个长方形阵列的面积。", prompt: "调节长和宽，观察部分积如何合起来。" },
  { id: "g4-5", grade: 4, unit: "四年级上", title: "平行四边形和梯形", domain: "图形与几何", visual: "shape-sort", summary: "平行关系决定了四边形的分类。", prompt: "观察哪些边互相平行，判断图形名称。" },
  { id: "g4-6", grade: 4, unit: "四年级上", title: "条形统计图", domain: "统计与概率", visual: "bar-chart", summary: "统计图把数据变成高度，方便比较。", prompt: "找最高的条，解释它代表的数据。" },
  { id: "g4-7", grade: 4, unit: "四年级下", title: "四则运算", domain: "数与代数", visual: "balance", summary: "运算顺序像天平上的步骤，要先处理更紧的关系。", prompt: "观察左右两边怎样保持相等。" },

  { id: "g5-1", grade: 5, unit: "五年级上", title: "小数乘法", domain: "数与代数", visual: "decimal", summary: "小数乘法可以从十分格和百分格的缩放理解。", prompt: "调整涂色格，观察 0.1 的几个倍数。" },
  { id: "g5-2", grade: 5, unit: "五年级上", title: "位置", domain: "图形与几何", visual: "number-line", summary: "位置可以用有顺序的数对来描述。", prompt: "看横向和纵向的移动，理解坐标定位。" },
  { id: "g5-3", grade: 5, unit: "五年级上", title: "多边形面积", domain: "图形与几何", visual: "area-grid", summary: "割补能把复杂图形转化成熟悉的长方形。", prompt: "观察长和宽变化，理解面积公式来源。" },
  { id: "g5-4", grade: 5, unit: "五年级上", title: "可能性", domain: "统计与概率", visual: "bar-chart", summary: "出现机会越大，在统计图中可以表现为更高的数量。", prompt: "比较不同颜色的数量，判断哪个更可能抽到。" },
  { id: "g5-5", grade: 5, unit: "五年级下", title: "长方体和正方体", domain: "图形与几何", visual: "volume-cubes", summary: "长方体由一层层单位小方块堆成。", prompt: "改变长、宽、高，观察体积怎样增加。" },
  { id: "g5-6", grade: 5, unit: "五年级下", title: "分数的意义和性质", domain: "数与代数", visual: "fraction", summary: "分子和分母同时变化时，分数大小可能保持不变。", prompt: "比较 1/2、2/4、3/6 的涂色长度。" },
  { id: "g5-7", grade: 5, unit: "五年级下", title: "折线统计与优化", domain: "统计与概率", visual: "optimization", summary: "按步骤比较方案，可以找到更省时间的安排。", prompt: "重排任务顺序，观察总等待时间。" }
];

const state = {
  grade: 1,
  topicId: "g1-1",
  search: "",
  value: 6,
  secondValue: 3
};

const els = {
  gradeButtons: document.querySelector("#gradeButtons"),
  gradeCount: document.querySelector("#gradeCount"),
  progressFill: document.querySelector("#progressFill"),
  progressText: document.querySelector("#progressText"),
  topicUnit: document.querySelector("#topicUnit"),
  topicTitle: document.querySelector("#topicTitle"),
  topicDomain: document.querySelector("#topicDomain"),
  visualStage: document.querySelector("#visualStage"),
  topicStrip: document.querySelector("#topicStrip"),
  visualName: document.querySelector("#visualName"),
  topicSummary: document.querySelector("#topicSummary"),
  lookPrompt: document.querySelector("#lookPrompt"),
  playPrompt: document.querySelector("#playPrompt"),
  thinkPrompt: document.querySelector("#thinkPrompt"),
  controls: document.querySelector("#controls"),
  prevTopic: document.querySelector("#prevTopic"),
  nextTopic: document.querySelector("#nextTopic"),
  searchInput: document.querySelector("#searchInput")
};

function gradeTopics() {
  const query = state.search.trim();
  return topics.filter((topic) => {
    const sameGrade = topic.grade === state.grade;
    const matches = !query || `${topic.title}${topic.unit}${topic.domain}`.includes(query);
    return sameGrade && matches;
  });
}

function activeTopic() {
  return topics.find((topic) => topic.id === state.topicId) || gradeTopics()[0] || topics[0];
}

function setGrade(grade) {
  state.grade = grade;
  state.topicId = topics.find((topic) => topic.grade === grade)?.id || topics[0].id;
  state.value = 6;
  state.secondValue = 3;
  render();
}

function setTopic(topicId) {
  state.topicId = topicId;
  state.value = 6;
  state.secondValue = 3;
  render();
}

function render() {
  const current = activeTopic();
  state.topicId = current.id;
  renderGrades();
  renderTopic(current);
  renderControls(current);
  renderTopics();
}

function renderGrades() {
  els.gradeButtons.innerHTML = grades.map((grade) => {
    const count = topics.filter((topic) => topic.grade === grade).length;
    return `<button class="grade-button" type="button" aria-pressed="${state.grade === grade}" data-grade="${grade}">
      <strong>${grade} 年级</strong><span>${count} 个</span>
    </button>`;
  }).join("");

  document.querySelectorAll("[data-grade]").forEach((button) => {
    button.addEventListener("click", () => setGrade(Number(button.dataset.grade)));
  });
}

function renderTopic(topic) {
  els.topicUnit.textContent = topic.unit;
  els.topicTitle.textContent = topic.title;
  els.topicDomain.textContent = topic.domain;
  els.visualName.textContent = visualLabels[topic.visual];
  els.topicSummary.textContent = topic.summary;
  els.lookPrompt.textContent = topic.prompt;
  els.playPrompt.textContent = "移动下面的滑杆，观察图形怎样跟着变化。";
  els.thinkPrompt.textContent = "用自己的话说一说：图形变化说明了什么数学关系？";
  els.visualStage.innerHTML = renderVisual(topic.visual);
}

function renderTopics() {
  const list = gradeTopics();
  const currentIndex = Math.max(0, list.findIndex((topic) => topic.id === state.topicId));
  els.gradeCount.textContent = `${list.length} 个实验`;
  els.progressText.textContent = `${currentIndex + 1} / ${Math.max(list.length, 1)}`;
  els.progressFill.style.width = `${((currentIndex + 1) / Math.max(list.length, 1)) * 100}%`;
  els.topicStrip.innerHTML = list.map((topic) => {
    return `<button class="topic-button" type="button" aria-pressed="${topic.id === state.topicId}" data-topic="${topic.id}">${topic.title}</button>`;
  }).join("");

  document.querySelectorAll("[data-topic]").forEach((button) => {
    button.addEventListener("click", () => setTopic(button.dataset.topic));
  });
}

function renderControls(topic) {
  const labels = controlLabels(topic.visual);
  els.controls.innerHTML = `
    <div class="control-row">
      <label for="mainRange"><span>${labels.main}</span><strong>${state.value}</strong></label>
      <input id="mainRange" type="range" min="${labels.min}" max="${labels.max}" value="${state.value}">
    </div>
    <div class="control-row">
      <label for="secondRange"><span>${labels.second}</span><strong>${state.secondValue}</strong></label>
      <input id="secondRange" type="range" min="1" max="10" value="${state.secondValue}">
    </div>
  `;

  document.querySelector("#mainRange").addEventListener("input", (event) => {
    state.value = Number(event.target.value);
    renderTopic(activeTopic());
    renderControls(activeTopic());
  });
  document.querySelector("#secondRange").addEventListener("input", (event) => {
    state.secondValue = Number(event.target.value);
    renderTopic(activeTopic());
    renderControls(activeTopic());
  });
}

function controlLabels(visual) {
  const defaults = { main: "数量", second: "组数", min: 1, max: 12 };
  const map = {
    clock: { main: "小时", second: "分钟", min: 1, max: 12 },
    angle: { main: "角度", second: "参考线", min: 10, max: 170 },
    fraction: { main: "平均分", second: "涂色份数", min: 2, max: 10 },
    decimal: { main: "十分格", second: "比较值", min: 0, max: 10 },
    "area-grid": { main: "长", second: "宽", min: 1, max: 10 },
    "volume-cubes": { main: "长", second: "高", min: 1, max: 9 },
    ruler: { main: "长度", second: "单位倍数", min: 1, max: 10 },
    "bar-chart": { main: "第一组", second: "第二组", min: 1, max: 10 },
    optimization: { main: "任务 A", second: "任务 B", min: 1, max: 10 }
  };
  return map[visual] || defaults;
}

function renderVisual(visual) {
  const renderers = {
    "number-blocks": renderNumberBlocks,
    "ten-frame": renderTenFrame,
    "number-line": renderNumberLine,
    groups: renderGroups,
    clock: renderClock,
    ruler: renderRuler,
    angle: renderAngle,
    fraction: renderFraction,
    decimal: renderDecimal,
    "area-grid": renderAreaGrid,
    "shape-sort": renderShapeSort,
    "bar-chart": renderBarChart,
    "volume-cubes": renderVolumeCubes,
    balance: renderBalance,
    optimization: renderOptimization
  };

  return `<div class="visual-card">
    <div class="demo-title">${visualLabels[visual]}</div>
    ${renderers[visual]()}
  </div>`;
}

function renderNumberBlocks() {
  return `<div class="blocks">${Array.from({ length: state.value }, (_, i) => `<div class="math-block">${i + 1}</div>`).join("")}</div>
    <div class="formula">${state.value} 个一合起来是 ${state.value}</div>`;
}

function renderTenFrame() {
  return `<div class="ten-frame">${Array.from({ length: 10 }, (_, i) => `<div class="ten-cell ${i < state.value ? "filled" : ""}">${i + 1}</div>`).join("")}</div>
    <div class="formula">${state.value} + ${10 - state.value} = 10</div>`;
}

function renderNumberLine() {
  const value = Math.min(state.value * 5, 60);
  return `<div class="number-line">
    ${Array.from({ length: 7 }, (_, i) => `<span class="tick" style="left:${i * 16.66}%">${i * 10}</span>`).join("")}
    <span class="marker" style="left:${(value / 60) * 100}%"></span>
  </div>
  <div class="formula">现在在 ${value} 的位置</div>`;
}

function renderGroups() {
  const groups = Math.max(1, state.secondValue);
  const perGroup = Math.max(1, state.value);
  return `<div class="groups">${Array.from({ length: groups }, () => `<div class="group">${Array.from({ length: perGroup }, () => `<span class="math-block">1</span>`).join("")}</div>`).join("")}</div>
    <div class="formula">${groups} 组 × 每组 ${perGroup} 个 = ${groups * perGroup}</div>`;
}

function renderClock() {
  const hour = state.value % 12;
  const minute = state.secondValue * 5;
  const hourDeg = hour * 30 + minute * 0.5;
  const minuteDeg = minute * 6;
  return `<div class="clock">
    <div class="hand hour" style="transform: rotate(${hourDeg}deg)"></div>
    <div class="hand minute" style="transform: rotate(${minuteDeg}deg)"></div>
    <div class="clock-center"></div>
  </div>
  <div class="formula">${state.value} 时 ${minute} 分</div>`;
}

function renderRuler() {
  return `<div class="ruler">${Array.from({ length: 11 }, (_, i) => `<div class="ruler-tick">${i}</div>`).join("")}</div>
    <div class="formula">从 0 到 ${state.value}，长度是 ${state.value} 厘米</div>`;
}

function renderAngle() {
  const angle = state.value;
  return `<div class="angle-demo">
    <div class="angle-arc"></div>
    <div class="ray"></div>
    <div class="ray" style="transform: rotate(-${angle}deg)"></div>
  </div>
  <div class="formula">${angle}° 是${angle < 90 ? "锐角" : angle === 90 ? "直角" : "钝角"}</div>`;
}

function renderFraction() {
  const denominator = Math.max(2, state.value);
  const numerator = Math.min(state.secondValue, denominator);
  return `<div class="fraction-bar" style="grid-template-columns: repeat(${denominator}, 1fr)">
    ${Array.from({ length: denominator }, (_, i) => `<div class="fraction-piece" style="background:${i < numerator ? "var(--coral)" : "var(--blue-soft)"}">${i < numerator ? "1" : ""}</div>`).join("")}
  </div>
  <div class="formula">涂色部分是 ${numerator}/${denominator}</div>`;
}

function renderDecimal() {
  const filled = Math.min(10, state.value);
  return `<div class="decimal-line">${Array.from({ length: 10 }, (_, i) => `<div class="decimal-cell ${i < filled ? "filled" : ""}"></div>`).join("")}</div>
  <div class="formula">${filled} 个 0.1 = ${(filled / 10).toFixed(1)}</div>`;
}

function renderAreaGrid() {
  const cols = Math.max(1, state.value);
  const rows = Math.max(1, state.secondValue);
  return `<div class="area-grid" style="grid-template-columns: repeat(${cols}, 34px)">
    ${Array.from({ length: cols * rows }, () => `<div class="area-cell"></div>`).join("")}
  </div>
  <div class="formula">${cols} × ${rows} = ${cols * rows} 个单位方格</div>`;
}

function renderShapeSort() {
  return `<div class="shape-row">
    <div class="shape circle"></div>
    <div class="shape"></div>
    <div class="shape triangle"></div>
    <div class="shape diamond"></div>
  </div>
  <div class="formula">看边、角、曲直来分类</div>`;
}

function renderBarChart() {
  const a = state.value;
  const b = state.secondValue;
  const c = Math.max(1, Math.round((a + b) / 2));
  return `<div class="bar-chart">
    ${[["A", a], ["B", b], ["C", c]].map(([label, value]) => `<div class="bar" style="height:${value * 22}px">${label}<br>${value}</div>`).join("")}
  </div>
  <div class="formula">条越高，数量越多</div>`;
}

function renderVolumeCubes() {
  const length = Math.max(1, state.value);
  const height = Math.max(1, state.secondValue);
  const total = Math.min(length * height, 48);
  return `<div class="cube-grid">${Array.from({ length: total }, (_, i) => `<div class="unit-cube">${i + 1}</div>`).join("")}</div>
  <div class="formula">小方块数量表示体积：${length} × ${height}</div>`;
}

function renderBalance() {
  return `<div class="balance-row">
    <div class="pan">${Array.from({ length: state.value }, () => `<span class="math-block">1</span>`).join("")}</div>
    <strong>=</strong>
    <div class="pan">${Array.from({ length: state.secondValue }, () => `<span class="math-block">?</span>`).join("")}</div>
  </div>
  <div class="formula">等号两边要一样重</div>`;
}

function renderOptimization() {
  const a = state.value;
  const b = state.secondValue;
  const c = Math.max(1, 11 - Math.min(a, b));
  const total = a + b + c;
  return `<div class="opt-row">
    <div class="opt-card">洗杯<br>${a} 分</div>
    <div class="opt-card">烧水<br>${b} 分</div>
    <div class="opt-card">泡茶<br>${c} 分</div>
  </div>
  <div class="formula">合理安排后大约 ${total} 分钟</div>`;
}

els.prevTopic.addEventListener("click", () => {
  const list = gradeTopics();
  const index = list.findIndex((topic) => topic.id === state.topicId);
  setTopic(list[(index - 1 + list.length) % list.length].id);
});

els.nextTopic.addEventListener("click", () => {
  const list = gradeTopics();
  const index = list.findIndex((topic) => topic.id === state.topicId);
  setTopic(list[(index + 1) % list.length].id);
});

els.searchInput.addEventListener("input", (event) => {
  state.search = event.target.value;
  const first = gradeTopics()[0];
  if (first) state.topicId = first.id;
  render();
});

render();
