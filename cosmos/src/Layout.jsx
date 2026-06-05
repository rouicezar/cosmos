import { useEffect, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import cosmicBackground from "./assets/cosmic-background.png";
import { Starfield } from "./components/Starfield.jsx";
import { SiteHeader } from "./components/SiteHeader.jsx";

// 站点外壳：深空背景、星空层、导航在所有路由间保持不变。
export function Layout() {
  const [searchOpen, setSearchOpen] = useState(false);
  const { pathname } = useLocation();

  // 路由切换时回到顶部，避免详情页停在上一页的滚动位置。
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="cosmos-shell">
      <img className="cosmos-reference-bg" src={cosmicBackground} alt="" aria-hidden="true" />
      <Starfield />
      <div className="cosmos-veil" />
      <SiteHeader searchOpen={searchOpen} onToggleSearch={() => setSearchOpen((open) => !open)} />
      <Outlet />
    </div>
  );
}
