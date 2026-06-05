# 宇宙科普站点开发说明

## 技术栈

- React 19
- Vite 6
- CSS Modules-free global stylesheet
- 本地视觉资产

## 文件结构

- `src/App.jsx`：页面结构、交互状态、数据。
- `src/styles.css`：完整视觉系统和响应式。
- `src/assets/cosmic-story-atlas-reference.png`：Product Design 方案 2 视觉参考图。
- `docs/requirements.md`：需求文档。
- `docs/design.md`：设计文档。
- `docs/development.md`：开发说明。
- `design-qa.md`：设计 QA 报告。

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
