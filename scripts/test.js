const fs = require("fs");
const path = require("path");
const vm = require("vm");

const root = path.resolve(__dirname, "..");
const requiredFiles = ["index.html", "styles.css", "app.js", "docs/requirements.md", "docs/design.md", "docs/development.md"];

for (const file of requiredFiles) {
  const fullPath = path.join(root, file);
  if (!fs.existsSync(fullPath)) {
    throw new Error(`Missing required file: ${file}`);
  }
}

const html = fs.readFileSync(path.join(root, "index.html"), "utf8");
if (!html.includes('href="styles.css"') || !html.includes('src="app.js"')) {
  throw new Error("index.html must reference styles.css and app.js");
}

const appSource = fs.readFileSync(path.join(root, "app.js"), "utf8");
const sandbox = {
  document: {
    querySelector() {
      return {
        addEventListener() {},
        innerHTML: "",
        textContent: "",
        style: {}
      };
    },
    querySelectorAll() {
      return [];
    }
  }
};

vm.createContext(sandbox);
vm.runInContext(`${appSource}
globalThis.__topics = topics;
globalThis.__visualLabels = visualLabels;`, sandbox);

const topics = sandbox.__topics;
const visualLabels = sandbox.__visualLabels;

if (!Array.isArray(topics) || topics.length < 30) {
  throw new Error("Expected at least 30 topics across grades 1-5");
}

for (const grade of [1, 2, 3, 4, 5]) {
  const count = topics.filter((topic) => topic.grade === grade).length;
  if (count < 5) {
    throw new Error(`Grade ${grade} must include at least 5 topics`);
  }
}

const requiredFields = ["id", "grade", "unit", "title", "domain", "visual", "summary", "prompt"];
for (const topic of topics) {
  for (const field of requiredFields) {
    if (!topic[field]) {
      throw new Error(`Topic ${topic.id || "unknown"} missing field: ${field}`);
    }
  }
  if (!visualLabels[topic.visual]) {
    throw new Error(`Topic ${topic.id} uses unknown visual type: ${topic.visual}`);
  }
}

const rendererNames = Object.keys(visualLabels).map((visual) => {
  return `render${visual.split("-").map((part) => part[0].toUpperCase() + part.slice(1)).join("")}`;
});

for (const name of rendererNames) {
  if (!appSource.includes(`function ${name}(`)) {
    throw new Error(`Missing renderer function: ${name}`);
  }
}

console.log(`Passed: ${topics.length} topics, ${Object.keys(visualLabels).length} visual renderers.`);
