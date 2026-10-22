import { NavLink } from "react-router-dom";
import { motion, useReducedMotion } from "framer-motion";
import { useApp } from "../context/AppContext";

const ITEMS = [
  { to: "/", key: "home", end: true },
  { to: "/discovery", key: "work" },
  { to: "/contact", key: "contact" },
];

export default function BottomNav() {
  const { t } = useApp();
  const reduce = useReducedMotion();
  return (
    <nav className="pf-nav" aria-label="Primary">
      {ITEMS.map((item) => (
        <NavLink
          key={item.key}
          to={item.to}
          end={item.end}
          className={({ isActive }) => (isActive ? "is-active" : "")}
        >
          {({ isActive }) => (
            <>
              {isActive && (
                <motion.span
                  layoutId="pf-nav-pill"
                  className="pf-nav-pill"
                  transition={reduce ? { duration: 0 } : { duration: 0.4, ease: [0.2, 0.7, 0.2, 1] }}
                />
              )}
              <span className="pf-nav-label">{t.nav[item.key].toLowerCase()}</span>
            </>
          )}
        </NavLink>
      ))}
    </nav>
  );
}
