import { Link, NavLink } from "react-router-dom";
import { MagnifyingGlass, Spiral, UserCircle } from "@phosphor-icons/react";

const navItems = [
  { label: "宇宙尺度", to: "/" },
  { label: "宇宙课程", to: "/topic/black-hole" },
  { label: "天体专题", to: "/topic/nebula" },
  { label: "冷知识", to: "/cold" },
];

export function SiteHeader({ searchOpen, onToggleSearch }) {
  return (
    <header className="site-header">
      <Link className="brand" to="/" aria-label="星图课堂首页">
        <span className="brand-mark"><Spiral weight="duotone" /></span>
        <span>星图课堂</span>
      </Link>
      <nav className="nav-links" aria-label="主导航">
        {navItems.map((item) => (
          <NavLink
            key={item.label}
            to={item.to}
            end={item.to === "/"}
            className={({ isActive }) => (isActive ? "is-active" : "")}
          >
            {item.label}
          </NavLink>
        ))}
      </nav>
      <div className={`search-control ${searchOpen ? "is-open" : ""}`}>
        {searchOpen && (
          <input autoFocus placeholder="搜索光年、黑洞、银河..." aria-label="搜索宇宙主题" />
        )}
        <button type="button" onClick={onToggleSearch} aria-label="搜索">
          <MagnifyingGlass weight="light" />
        </button>
        <button className="profile-button" type="button" aria-label="学习档案">
          <UserCircle weight="light" />
        </button>
      </div>
    </header>
  );
}
