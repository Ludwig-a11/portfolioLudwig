import { NavLink } from "react-router-dom";
import { useApp } from "../context/AppContext";

const ITEMS = [
  { to: "/", key: "home", end: true },
  { to: "/discovery", key: "work" },
  { to: "/contact", key: "contact" },
];

export default function BottomNav() {
  const { t } = useApp();
  return (
    <nav className="pf-nav" aria-label="Primary">
      {ITEMS.map((item) => (
        <NavLink
          key={item.key}
          to={item.to}
          end={item.end}
          className={({ isActive }) => (isActive ? "is-active" : "")}
        >
          {t.nav[item.key]}
        </NavLink>
      ))}
    </nav>
  );
}
