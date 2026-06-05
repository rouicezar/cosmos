import { useEffect, useState } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { Shuffle } from "@phosphor-icons/react";
import cosmicBackground from "./assets/cosmic-background.png";
import { topics } from "./data/topics.js";
import { Starfield } from "./components/Starfield.jsx";
import { SiteHeader } from "./components/SiteHeader.jsx";

// 站点外壳：深空背景、星空层、导航在所有路由间保持不变。
export function Layout() {
  const [searchOpen, setSearchOpen] = useState(false);
  const { pathname } = useLocation();
  const navigate = useNavigate();

  // 路由切换时回到顶部，避免详情页停在上一页的滚动位置。
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  // 随机漫游：零决策地跳到一个未必预期的天体，制造"再来一个"的变量奖励。
  function roam() {
    const pool = topics.filter((t) => `/topic/${t.id}` !== pathname);
    const next = pool[Math.floor(Math.random() * pool.length)] ?? topics[0];
    navigate(`/topic/${next.id}`);
  }

  return (
    <div className="cosmos-shell">
      <img className="cosmos-reference-bg" src={cosmicBackground} alt="" aria-hidden="true" />
      <Starfield />
      <div className="cosmos-veil" />
      <SiteHeader searchOpen={searchOpen} onToggleSearch={() => setSearchOpen((open) => !open)} />
      <Outlet />

      <button className="roam-fab" type="button" onClick={roam}>
        <Shuffle weight="bold" />
        随机漫游
      </button>
    </div>
  );
}
