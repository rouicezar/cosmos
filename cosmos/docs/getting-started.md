# 星图课堂 · 项目启动指引

「星图课堂」是一个宇宙科普的沉浸式 Web 原型：以交互星图为入口，从地球俯冲到可观测宇宙，配合课程动画讲解、专题详情页与停不下来的冷知识流。本文档帮助你在本地把项目跑起来、看懂结构、并知道如何扩展内容。

---

## 目录

- [1. 项目简介](#1-项目简介)
- [2. 技术栈](#2-技术栈)
- [3. 环境要求](#3-环境要求)
- [4. 快速开始](#4-快速开始)
  - [4.1 安装依赖](#41-安装依赖)
  - [4.2 启动开发服务器](#42-启动开发服务器)
  - [4.3 生产构建](#43-生产构建)
  - [4.4 本地预览构建产物](#44-本地预览构建产物)
- [5. 可用脚本](#5-可用脚本)
- [6. 项目结构](#6-项目结构)
- [7. 路由地图](#7-路由地图)
- [8. 内容模型：如何新增内容](#8-内容模型如何新增内容)
  - [8.1 新增一个天体 / 课程 / 专题](#81-新增一个天体--课程--专题)
  - [8.2 新增探索任务](#82-新增探索任务)
  - [8.3 冷知识从哪来](#83-冷知识从哪来)
- [9. 站内动画讲解（“视频”）](#9-站内动画讲解视频)
- [10. 设计准则（重要）](#10-设计准则重要)
- [11. 常见问题与排查](#11-常见问题与排查)
- [12. 部署提示](#12-部署提示)
- [13. 相关文档](#13-相关文档)

---

## 1. 项目简介

- 定位：宇宙科普「星图课堂」沉浸式单页应用（多路由）。
- 目标：让人一进来就想一直探索下去——既有常规宇宙知识，也有科学严谨的冷知识。
- 形态：React + Vite 前端，无后端、无账号系统；内容以本地数据 + 本地视觉资产驱动。
- 位置：本子项目位于仓库的 `cosmos/` 目录，不影响根目录的数学站点。

## 2. 技术栈

| 技术 | 版本 | 用途 |
|---|---|---|
| React | 19 | UI |
| React Router | 7 | 多路由（首页 / 尺度旅程 / 详情 / 冷知识流） |
| Vite | 6 | 开发服务器与构建 |
| @phosphor-icons/react | 2 | 图标 |
| 原生 CSS | — | 单一全局样式表 `src/styles.css` |
| Canvas 2D | — | 课程动画讲解、星空层（无重型 3D 引擎） |

## 3. 环境要求

- **Node.js ≥ 20**（推荐 20 LTS 或更新；当前开发机使用 v25）。
- **npm ≥ 9**（随 Node 附带即可）。
- 现代浏览器（Chrome / Edge / Safari 新版本）。
- 说明：项目根目录的 `.npmrc` 把 npm 缓存指向项目内 `./.npm-cache`，并关闭了 `fund` / `audit` 提示——无需额外配置。

## 4. 快速开始

> 以下命令默认在 `cosmos/` 目录内执行。若在仓库根目录，可加 `--prefix cosmos`，例如 `npm --prefix cosmos run dev`。

### 4.1 安装依赖

```bash
cd cosmos
npm install
```

### 4.2 启动开发服务器

```bash
npm run dev
```

- 打开浏览器访问 **http://127.0.0.1:5173/**
- 支持热更新（HMR），保存代码即时刷新。

### 4.3 生产构建

```bash
npm run build
```

- 产物输出到 `dist/`（已在 `.gitignore` 中忽略）。
- 构建通过是基本的验收标准之一。

### 4.4 本地预览构建产物

```bash
npm run preview
```

- 默认访问 **http://127.0.0.1:4173/**，用于在本地验证生产构建效果。

## 5. 可用脚本

| 脚本 | 命令 | 说明 |
|---|---|---|
| 开发 | `npm run dev` | 启动 Vite 开发服务器（127.0.0.1:5173） |
| 构建 | `npm run build` | 生产构建到 `dist/` |
| 预览 | `npm run preview` | 预览生产构建（127.0.0.1:4173） |

## 6. 项目结构

```text
cosmos/
├─ index.html                 # 入口 HTML，挂载 #root
├─ vite.config.mjs            # Vite 配置（React 插件 + 预热）
├─ package.json               # 依赖与脚本
├─ .npmrc                     # 本地 npm 缓存 / 关闭 fund·audit
├─ AGENTS.md                  # 原型协作说明 + 体验设计准则（重要）
├─ design-qa.md               # 设计 QA 报告
├─ docs/                      # 需求 / 设计 / 开发 / 本启动指引
└─ src/
   ├─ main.jsx                # 路由表（应用入口）
   ├─ Layout.jsx              # 站点外壳：背景 + 星空 + 导航 + 随机漫游，跨路由不变
   ├─ styles.css              # 完整全局样式系统与响应式
   ├─ assets/                 # 本地视觉资产（行星 / 课程 / 任务图、深空背景）
   ├─ data/
   │  ├─ topics.js            # ★ 统一内容模型（单一真相来源）
   │  └─ missions.js          # 底部探索任务轨数据
   ├─ pages/
   │  ├─ Home.jsx             # 首页：交互星图（尺度轴 + 课程卡 + 任务轨）
   │  ├─ ScaleJourney.jsx     # /scale 尺度俯冲沉浸旅程
   │  ├─ TopicDetail.jsx      # /topic/:id 专题/课程详情（揭秘叙事）
   │  └─ ColdFeed.jsx         # /cold 冷知识沉浸流
   ├─ components/             # SiteHeader / Hero / InsightPanel / ScaleAtlas /
   │                          # LessonStack / MissionDock / Starfield /
   │                          # ExplainerPlayer / Modal / Reveal / CountUp
   └─ explainers/             # 三段课程的 Canvas 动画讲解
      ├─ index.js             # topic id → 动画模块映射
      ├─ blackHole.js
      ├─ starBirth.js
      └─ lightYear.js
```

## 7. 路由地图

路由定义在 [`src/main.jsx`](../src/main.jsx)，全部包裹在 `Layout` 外壳内：

| 路径 | 页面 | 说明 |
|---|---|---|
| `/` | `Home` | 首页交互星图 |
| `/scale` | `ScaleJourney` | 尺度俯冲旅程（首页“开始探索宇宙”进入） |
| `/topic/:id` | `TopicDetail` | 按 topic id 渲染专题/课程详情 |
| `/cold` | `ColdFeed` | 冷知识沉浸流 |

> 路由采用 BrowserRouter（History API）。开发与 `vite preview` 默认带 SPA 回退；静态部署时需要把未知路径回退到 `index.html`（见[第 12 节](#12-部署提示)）。

## 8. 内容模型：如何新增内容

**核心理念：`src/data/topics.js` 是全站内容的单一真相来源。** 首页星图、尺度旅程、详情页、冷知识流都从它派生——新增内容通常只需往数组里加一个对象。

### 8.1 新增一个天体 / 课程 / 专题

在 [`src/data/topics.js`](../src/data/topics.js) 的 `topics` 数组追加一个对象：

```js
{
  id: "neutron-star",          // 唯一 id，决定 /topic/:id 路由
  name: "中子星",
  category: "object",          // "scale" 尺度节点 | "lesson" 课程 | "object" 天体专题
  image: neutronStar,          // 顶部 import 的本地图片
  tagline: "一茶匙就有十亿吨重",   // 详情页副标题（也用作关联卡悬念钩子）
  // minutes: "10 分钟",        // 仅课程需要
  quickStats: [
    { label: "密度", value: "一茶匙约 10 亿吨" },
    { label: "直径", value: "约 20 km" },
  ],
  note: "一句富有画面感的尺度直觉。",
  sections: [
    { heading: "小标题（尽量用问题/悬念）", body: "可阅读的分段讲解。" },
  ],
  facts: ["公认且可核验的事实 1", "事实 2"],
  cold: ["切实存在但很多人不知道的冷知识（可多条）"],
  related: ["black-hole", "star-birth"],   // 关联 topic id
}
```

派生关系（自动生效，无需改动视图）：

- `category: "scale"` → 出现在首页尺度轴与 `/scale` 旅程。
- `category: "lesson"` → 出现在首页右侧课程卡。
- 任意 topic → 拥有 `/topic/<id>` 详情页，并出现在“随机漫游”池。
- 每条 `cold` → 自动进入 `/cold` 冷知识流。

字段约定与严谨性要求见 [`docs/development.md`](development.md)。所有数值须采用公认观测值。

### 8.2 新增探索任务

编辑 [`src/data/missions.js`](../src/data/missions.js)，每个任务：

```js
{ name: "任务名", status: MISSION_STATUS.LOCKED, image: missionImg,
  topicId: "对应专题 id", brief: "一句话看点" }
```

`status` 取 `MISSION_STATUS` 的 `DONE` / `ACTIVE` / `LOCKED`；`topicId` 决定“进入任务”跳转到哪个详情页。

### 8.3 冷知识从哪来

无需单独维护——`topics.js` 末尾的 `coldFacts` 选择器会把每个 topic 的 `cold` 数组摊平成卡片项，自动供 `/cold` 沉浸流使用。

## 9. 站内动画讲解（“视频”）

三段课程的“视频”是站内 Canvas 交互动画，而非真实视频文件：

- 模块位于 [`src/explainers/`](../src/explainers/)，每个导出 `duration`、`captions`、`draw(ctx, t, w, h)`。
- `draw` 为**纯函数式**（给定进度 `t∈[0,1]` 即可绘制），因此播放、暂停、重播、降低动效都稳定可控。
- [`src/explainers/index.js`](../src/explainers/index.js) 按 topic id 映射；新增课程动画时在此登记即可。
- [`ExplainerPlayer`](../src/components/ExplainerPlayer.jsx) 负责播放器壳（海报、播放/暂停/重播、进度、字幕）；详情页传 `autoPlay` 自动播放，首页课程卡点击播放键则用 [`Modal`](../src/components/Modal.jsx) 弹出。

## 10. 设计准则（重要）

这个网站**不是教科书**，最高目标是「无法自拔」。提交任何改动前，请先阅读 [`AGENTS.md`](../AGENTS.md) 的「体验准则」。核心几点：

- 内容要“揭秘”而非“讲授”：先抛好奇心钩子，再揭示。
- 减少阅读负担：短句、第二人称、有画面感；用交互/动画揭示信息。
- 永远给“下一个”：每页结尾留钩子，提供“随机漫游”等零决策入口。
- 制造敬畏与动量：动效、视差、数字滚动、随滚动展开的叙事。
- 科学严谨是前提，但严谨 ≠ 无趣。

## 11. 常见问题与排查

- **端口被占用**：`dev` 用 5173、`preview` 用 4173。占用时可临时改端口：`npm run dev -- --port 5180`。
- **直接访问 `/scale`、`/topic/xxx` 404**：开发与 `vite preview` 已带 SPA 回退；若是自建静态服务器报 404，需配置把未知路径回退到 `index.html`。
- **安装很慢或缓存异常**：缓存目录为项目内 `./.npm-cache`，可删除后重装：`rm -rf .npm-cache node_modules && npm install`。
- **页面动画不动**：若系统开启了「减少动态效果」（prefers-reduced-motion），星空与动画讲解会降级为静态帧，属预期行为。
- **图片为深色空圈**：行星图盘按 `--img-scale` 放大以填满裁切圆；新增行星类图片若盘面占比不同，可在 `styles.css` 为对应 `.scale-node.<id>` / `.journey-orb.<id>` 调整 `--img-scale`。

## 12. 部署提示

- 执行 `npm run build`，将 `dist/` 部署到任意静态托管（如 Nginx、Vercel、Netlify、GitHub Pages）。
- **必须配置 SPA 回退**：把所有未匹配到静态文件的请求重写到 `/index.html`，否则刷新子路由会 404。
  - Nginx：`try_files $uri /index.html;`
  - Netlify：`/*  /index.html  200`
  - Vercel：rewrites 指向 `/index.html`。
- 若部署在子路径下，需在 `vite.config.mjs` 设置 `base`。

## 13. 相关文档

- [需求文档](requirements.md)
- [设计文档](design.md)
- [开发说明](development.md)
- [设计 QA 报告](../design-qa.md)
- [协作说明与体验准则 AGENTS.md](../AGENTS.md)
