import planetEarth from "../assets/planet-earth.png";
import planetMoon from "../assets/planet-moon.png";
import planetSolar from "../assets/planet-solar.png";
import planetGalaxy from "../assets/planet-galaxy.png";
import planetObservable from "../assets/planet-observable.png";
import lessonBlackHole from "../assets/lesson-black-hole.png";
import lessonStarBirth from "../assets/lesson-star-birth.png";
import lessonLightYear from "../assets/lesson-light-year.png";
import missionNebula from "../assets/mission-nebula.png";

// 站点统一内容模型（单一真相来源）。
// 首页星图、详情页、冷知识流全部从这里派生。
//
// 字段约定（科普严谨性要求，数值均采用公认观测值）：
// - category : "scale" 尺度节点 | "lesson" 课程 | "object" 天体专题
// - label    : 尺度节点在星图上的副标题
// - accent   : 课程卡配色 key
// - minutes  : 课程阅读/观看时长
// - tagline  : 详情页副标题
// - quickStats: [{ label, value }] 一眼可读的量级
// - sections : [{ heading, body }] 可阅读的分段讲解
// - facts    : 公认且可核验的事实
// - cold     : 切实存在但很多人不知道的冷知识（可多条）
// - related  : 关联 topic id
export const topics = [
  {
    id: "earth",
    name: "地球",
    category: "scale",
    label: "直径 12,742 km",
    image: planetEarth,
    tagline: "所有宇宙尺度的起点",
    quickStats: [
      { label: "尺度", value: "1 个地球直径" },
      { label: "光行时间", value: "光绕赤道一圈约 0.13 秒" },
    ],
    note: "所有宇宙尺度的理解，都从脚下这颗行星开始。",
    sections: [
      {
        heading: "我们站立的这颗水球",
        body: "地球赤道周长约 40,075 km，表面约 71% 被海洋覆盖。它并不是正球：因为自转产生的离心力，赤道半径比极半径长约 21 km，更像一个略微压扁的椭球。",
      },
      {
        heading: "一天其实不是 24 小时",
        body: "地球相对遥远恒星自转一圈是 23 小时 56 分 4 秒（恒星日）。我们习惯的 24 小时是“太阳日”，因为地球在自转的同时也绕着太阳公转，需要多转一点才能让太阳回到正上方。",
      },
    ],
    facts: [
      "赤道周长约 40,075 km，光每秒能绕它约 7.5 圈。",
      "一个恒星日是 23 小时 56 分 4 秒，并不是整 24 小时。",
    ],
    cold: [
      "受潮汐摩擦影响，地球自转正在变慢，一天的长度每过一世纪约增加 1.7 毫秒——恐龙时代的一天还不到 23 小时。",
      "地球内核是一个温度接近太阳表面的固态铁球，却因为承受着极高压强而保持固态。",
    ],
    related: ["moon", "solar"],
  },
  {
    id: "moon",
    name: "月球",
    category: "scale",
    label: "距离地球 384,400 km",
    image: planetMoon,
    tagline: "地球唯一的天然卫星",
    quickStats: [
      { label: "尺度", value: "约 30 个地球直径" },
      { label: "光行时间", value: "光到月球约 1.28 秒" },
    ],
    note: "月球看起来很近，但已经远到可以容纳 30 个地球。",
    sections: [
      {
        heading: "永远只看到同一面",
        body: "月球被地球潮汐锁定：自转一圈的时间恰好等于绕地球公转一圈，于是它始终以同一面朝向我们。人类直到 1959 年苏联“月球 3 号”探测器才第一次拍到月球背面。",
      },
      {
        heading: "正在悄悄远离",
        body: "月球与地球之间的潮汐作用，会把地球自转的能量缓慢转移给月球轨道，结果是月球每年都离我们更远一点。这个速度小到肉眼无法察觉，却能被精密激光测距持续记录。",
      },
    ],
    facts: [
      "月球被潮汐锁定，始终以同一面朝向地球。",
      "它的直径约为地球的 1/4，是太阳系中相对母星最大的卫星之一。",
    ],
    cold: [
      "月球正以每年约 3.8 cm 的速度远离地球，这是用阿波罗任务留在月面的激光反射镜实测出来的。",
      "由于没有大气，阿波罗宇航员留下的脚印在没有外力扰动的情况下可以保存数百万年。",
    ],
    related: ["earth", "solar"],
  },
  {
    id: "solar",
    name: "太阳系",
    category: "scale",
    label: "直径约 2 光年",
    image: planetSolar,
    tagline: "一座巨大的引力剧场",
    quickStats: [
      { label: "尺度", value: "行星在太阳引力下排成轨道" },
      { label: "光行时间", value: "阳光到地球约 8 分 20 秒" },
    ],
    note: "太阳系不是平面图，而是一个巨大的引力剧场。",
    sections: [
      {
        heading: "太阳几乎就是太阳系",
        body: "太阳占据了整个太阳系约 99.86% 的质量，剩下不到 0.14% 才分给八大行星、卫星、小行星和彗星。所有这些天体，本质上都在围绕这团巨大的等离子体起舞。",
      },
      {
        heading: "边界比你想的远得多",
        body: "阳光到地球只要 8 分钟，到海王星却要约 4 小时。而真正标志太阳影响力边界的奥尔特云，可能延伸到一光年之外——旅行者一号飞了 40 多年，也只是刚刚离开太阳风的势力范围。",
      },
    ],
    facts: [
      "太阳占据了整个太阳系约 99.86% 的质量。",
      "阳光到海王星要走约 4 小时，到地球只要 8 分钟。",
    ],
    cold: [
      "太阳系绕银河系中心转一圈要约 2.3 亿年，称为一个“银河年”——上一次回到现在的位置时，地球上还是恐龙的时代。",
      "旅行者一号在 2012 年穿越日球层顶、进入星际空间，是迄今离地球最远的人造物体。",
    ],
    related: ["galaxy", "earth"],
  },
  {
    id: "galaxy",
    name: "银河系",
    category: "scale",
    label: "直径约 10 万光年",
    image: planetGalaxy,
    tagline: "我们所在的恒星之城",
    quickStats: [
      { label: "尺度", value: "约有千亿颗恒星" },
      { label: "光行时间", value: "横穿银河需要十万年光程" },
    ],
    note: "我们看到的星空，只是银河系里很小的一片邻域。",
    sections: [
      {
        heading: "我们住在郊区",
        body: "银河系是一个棒旋星系，直径约 10 万光年，包含一千亿到数千亿颗恒星。太阳并不在中心，而是位于一条名为“猎户臂”的旋臂上，距离银河系中心约 2.6 万光年。",
      },
      {
        heading: "一场已注定的碰撞",
        body: "银河系正和邻居仙女座星系以约每秒 110 km 的速度互相靠近。大约 40 亿年后两者将开始合并，最终融为一个更大的椭圆星系。不过恒星之间空隙巨大，真正相撞的概率极低。",
      },
    ],
    facts: [
      "太阳位于猎户臂上，距离银河系中心约 2.6 万光年。",
      "银河系正与仙女座星系靠近，约 40 亿年后将开始合并。",
    ],
    cold: [
      "银河系中心潜伏着一个质量约 400 万倍太阳的超大质量黑洞——人马座 A*，2022 年人类第一次拍到了它的影像。",
      "夜空中那条朦胧的“银河”，其实是我们从星系内部侧看自己所在的恒星盘。",
    ],
    related: ["observable", "solar", "black-hole"],
  },
  {
    id: "observable",
    name: "可观测宇宙",
    category: "scale",
    label: "直径约 930 亿光年",
    image: planetObservable,
    tagline: "光所能抵达的极限",
    quickStats: [
      { label: "尺度", value: "包含约 2 万亿个星系" },
      { label: "光行时间", value: "最古老的光来自宇宙早期" },
    ],
    note: "可观测宇宙的边界，是光到达我们的极限。",
    sections: [
      {
        heading: "比年龄更大的尺度",
        body: "宇宙年龄约 138 亿年，可观测宇宙的直径却有约 930 亿光年。看似矛盾，其实是因为空间本身在膨胀：早期发出的光一路飞来，它原本所在的位置已经被宇宙膨胀拉得更远。",
      },
      {
        heading: "可观测，不等于全部",
        body: "“可观测”只是指光有时间抵达我们的那一部分宇宙。在这个边界之外，几乎可以肯定还有更广阔、甚至可能无限大的空间，只是它们的光永远追不上不断膨胀的距离。",
      },
    ],
    facts: [
      "宇宙年龄约 138 亿年，可观测直径却有约 930 亿光年。",
      "之所以比“年龄 × 光速”大得多，是因为空间本身一直在膨胀。",
    ],
    cold: [
      "我们能看到的最远的光是宇宙微波背景——那是大爆炸约 38 万年后宇宙第一次变透明时放出的余晖，至今仍均匀地洒满整个天空。",
      "老式电视没有信号时的雪花噪点里，有一小部分正是来自这片宇宙微波背景辐射。",
    ],
    related: ["galaxy"],
  },
  {
    id: "black-hole",
    name: "黑洞为什么看不见",
    category: "lesson",
    accent: "black-hole",
    minutes: "9 分钟",
    image: lessonBlackHole,
    tagline: "事件视界之内，连光也无法逃离",
    quickStats: [
      { label: "关键边界", value: "事件视界" },
      { label: "逃逸条件", value: "需要超过光速" },
    ],
    note: "事件视界、光线逃逸与引力透镜，揭开“看不见”的真相。",
    sections: [
      {
        heading: "看不见，是因为光出不来",
        body: "黑洞之所以“黑”，不是因为它吸光，而是因为在它的事件视界以内，逃逸所需的速度超过了光速。任何越过这条边界的东西——包括光——都无法再返回，于是它对外界呈现为一片绝对的黑。",
      },
      {
        heading: "我们怎么“看到”看不见的东西",
        body: "虽然黑洞本身不发光，但它周围被吸积的高温气体会发出强烈辐射，强大的引力还会像透镜一样弯曲背景光线。2019 年，事件视界望远镜正是拍下了这圈发光气体环绕黑洞阴影的画面。",
      },
    ],
    facts: [
      "黑洞的“黑”源于事件视界内逃逸速度超过光速。",
      "2019 年人类拍到首张黑洞照片（M87 星系中心）。",
    ],
    cold: [
      "黑洞并不会“吸”走一切——如果太阳突然变成同质量黑洞，地球的轨道几乎不会改变，只是会失去阳光。",
      "黑洞会通过霍金辐射极其缓慢地蒸发，质量越小蒸发越快，但恒星级黑洞蒸发完所需的时间远超宇宙现有年龄。",
    ],
    related: ["galaxy", "star-birth"],
  },
  {
    id: "star-birth",
    name: "恒星如何诞生",
    category: "lesson",
    accent: "nebula",
    minutes: "12 分钟",
    image: lessonStarBirth,
    tagline: "从一团冷云到点燃核聚变",
    quickStats: [
      { label: "起点", value: "分子云坍缩" },
      { label: "点燃条件", value: "核心约 1000 万度" },
    ],
    note: "从星云坍缩到核聚变点燃，见证一颗恒星的诞生之旅。",
    sections: [
      {
        heading: "引力让冷云塌缩",
        body: "恒星诞生于巨大而寒冷的分子云。当某一区域密度足够高，引力开始压倒气体压力，云团向中心坍缩，物质越聚越密、越聚越热，逐渐形成一个旋转的原恒星。",
      },
      {
        heading: "核聚变点亮新星",
        body: "当核心温度升到约 1000 万度，氢开始聚变成氦，释放出巨大能量。向外的辐射压终于顶住了向内的引力，恒星进入稳定的主序阶段——一颗新的恒星正式“点亮”。",
      },
    ],
    facts: [
      "恒星诞生于寒冷致密的分子云坍缩。",
      "核心温度达到约 1000 万度时，氢核聚变被点燃。",
    ],
    cold: [
      "构成你身体的碳、氧、铁等元素，几乎都是在早期恒星内部聚变、并在它们死亡时抛洒到宇宙中的——我们真的是“星尘”。",
      "质量越大的恒星寿命越短：最重的恒星只能燃烧几百万年，而最小的红矮星可以稳定燃烧上万亿年。",
    ],
    related: ["black-hole", "nebula"],
  },
  {
    id: "light-year",
    name: "光年到底有多远",
    category: "lesson",
    accent: "milky",
    minutes: "8 分钟",
    image: lessonLightYear,
    tagline: "用时间丈量空间",
    quickStats: [
      { label: "定义", value: "光走一年的距离" },
      { label: "约合", value: "9.46 万亿 km" },
    ],
    note: "用日常生活的尺度，理解宇宙惊人的距离。",
    sections: [
      {
        heading: "光年是距离，不是时间",
        body: "尽管名字里有“年”，光年衡量的其实是距离：光在真空中一年走过的路程，约 9.46 万亿公里。用它来量宇宙，是因为公里这个单位实在太小了。",
      },
      {
        heading: "望远镜就是时光机",
        body: "因为光速有限，我们看到的一切都是过去：太阳是 8 分钟前的，比邻星是 4 年前的，而某些遥远星系的光，是它们在地球还没诞生时就出发的。望向深空，就是回望宇宙的历史。",
      },
    ],
    facts: [
      "1 光年约等于 9.46 万亿公里。",
      "离太阳最近的恒星比邻星约 4.24 光年。",
    ],
    cold: [
      "我们永远只能看到天体的“过去”——夜空中有些星星，其实在我们看到它的光时，本体可能早已不复存在。",
      "即便以光速飞行，横穿银河系也要约 10 万年，这正是星际旅行的根本难题。",
    ],
    related: ["observable", "solar"],
  },
  {
    id: "nebula",
    name: "星云",
    category: "object",
    image: missionNebula,
    tagline: "恒星的摇篮与归宿",
    quickStats: [
      { label: "成分", value: "气体与尘埃" },
      { label: "角色", value: "恒星诞生与死亡之地" },
    ],
    note: "宇宙中最绚丽的结构，往往既是终点也是起点。",
    sections: [
      {
        heading: "既是墓地，也是产房",
        body: "星云是星际空间中由气体和尘埃组成的云团。有的星云是恒星死亡后抛出的外壳（行星状星云、超新星遗迹），有的则是孕育新恒星的温床——物质在这里聚集、坍缩，开启下一代恒星的生命。",
      },
      {
        heading: "比看上去稀薄得多",
        body: "星云在照片里浓墨重彩，实际却极度稀薄：其密度远低于地球实验室能造出的最好真空。它们之所以壮观，是因为尺度横跨数光年，加上长时间曝光累积了微弱的光。",
      },
    ],
    facts: [
      "星云由气体（主要是氢）和尘埃组成。",
      "行星状星云其实与行星无关，只是早期望远镜里形似圆盘而得名。",
    ],
    cold: [
      "著名的“创生之柱”高达数光年，但因为距离我们约 6500 光年，我们今天看到的其实是它几千年前的样子。",
      "星云的密度极低，所谓“穿越星云”几乎感觉不到任何物质——它远比地球上的实验室真空更空。",
    ],
    related: ["star-birth", "galaxy"],
  },
];

// —— 派生选择器 ——
export const getTopic = (id) => topics.find((t) => t.id === id);
export const topicsByCategory = (category) => topics.filter((t) => t.category === category);

// 冷知识流：把所有 topic 的冷知识摊平成可浏览的卡片项。
export const coldFacts = topics.flatMap((topic) =>
  topic.cold.map((text, index) => ({
    id: `${topic.id}-${index}`,
    topicId: topic.id,
    topicName: topic.name,
    image: topic.image,
    text,
  })),
);
