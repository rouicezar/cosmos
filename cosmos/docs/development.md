# 宇宙科普站点开发说明

## 技术栈

- React 19
- React Router 7（多路由：首页 / 详情页 / 冷知识流）
- Vite 6
- CSS Modules-free global stylesheet
- 本地视觉资产
- 轻量 canvas 星空层（无重型 3D 引擎）

## 文件结构

- `src/main.jsx`：路由表（`/` 首页、`/topic/:id` 专题详情、`/cold` 冷知识流）。
- `src/Layout.jsx`：站点外壳（背景 + 星空 + 导航）在所有路由间保持不变。
- `src/data/topics.js`：**统一内容模型（单一真相来源）**，首页星图、详情页、冷知识流全部从这里派生。
- `src/data/missions.js`：底部探索任务轨数据。
- `src/pages/`：`Home.jsx`（交互星图）、`TopicDetail.jsx`（专题详情）、`ColdFeed.jsx`（冷知识流）。
- `src/components/`：`SiteHeader`、`Hero`、`InsightPanel`、`ScaleAtlas`（参数化椭圆轨道）、`LessonStack`、`MissionDock`、`Starfield`、`ExplainerPlayer`（动画讲解播放器）、`Modal`。
- `src/explainers/`：三段课程的「视频」内容——站内 Canvas 交互动画（`blackHole`/`starBirth`/`lightYear`）。每个模块导出 `duration`、`captions`、`draw(ctx, t, w, h)`，`draw` 为纯函数式（给定进度即可绘制），便于播放/暂停/重播；`index.js` 按 topic id 映射。
- `src/styles.css`：完整视觉系统和响应式。
- `src/assets/cosmic-story-atlas-reference.png`：Product Design 方案 2 视觉参考图。
- `docs/`：需求、设计、开发文档。
- `design-qa.md`：设计 QA 报告。

## 内容模型字段约定（科普严谨性）

`topics.js` 中每个 topic：`category`（scale/lesson/object）、`quickStats`、`sections`、`facts`、`cold`（冷知识，可多条）、`related`。
所有数值均采用公认观测值，冷知识必须科学严谨。新增内容只需向 `topics` 数组追加对象，三处视图自动联动。

## 开发阶段

1. Product Design brief 确认。
2. 用户选择方案 2。
3. 创建 `cosmos/` Vite 原型。
4. 补齐工程文档。
5. 实现交互页面。
6. 运行构建测试。
7. 浏览器验证与设计 QA。
8. 提交。

## 测试

- `npm run build`
- 本地浏览器打开 Vite dev server。
- 验证尺度节点、课程卡、任务轨和搜索交互。
