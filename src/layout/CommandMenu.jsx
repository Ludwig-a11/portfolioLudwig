/* eslint-disable react/prop-types */
import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useApp } from "../context/AppContext";
import { links } from "../data/site";
import portrait from "../assets/portfolio_pc2.jpg";

const ITEMS = [
  { to: "/", key: "home" },
  { to: "/discovery", key: "work" },
  { to: "/contact", key: "contact" },
];

const EN_NAMES = { home: "home", work: "work", contact: "contact" };

export function Fab({ onOpen }) {
  const { pathname } = useLocation();
  const current = ITEMS.find((i) => i.to === pathname)?.key || "home";
  return (
    <button type="button" className="pf-fab" onClick={onOpen} aria-label="Open menu" aria-haspopup="dialog">
      <span>&gt;_</span> {EN_NAMES[current]}
    </button>
  );
}

export default function CommandMenu({ open, onClose }) {
  const { t, lang, setLang, theme, toggleTheme } = useApp();
  const { pathname } = useLocation();
  const reduce = useReducedMotion();

  useEffect(() => {
    if (!open) return undefined;
    const onKey = (e) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="pf-cmd"
          role="dialog"
          aria-modal="true"
          aria-label="Menu"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="pf-cmd-top">
            <span><b>$</b> nav --open</span>
            <button type="button" onClick={onClose} aria-label="Close menu">✕</button>
          </div>

          <nav className="pf-cmd-links">
            {ITEMS.map((item, i) => {
              const active = pathname === item.to;
              return (
                <motion.div
                  key={item.key}
                  initial={reduce ? false : { opacity: 0, x: -28 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.06 * i, ease: [0.2, 0.7, 0.2, 1] }}
                >
                  <Link to={item.to} className={active ? "is-active" : ""} onClick={onClose}>
                    <i>0{i + 1}</i> {t.nav[item.key].toLowerCase()}
                    {active && <span className="pf-cursor">_</span>}
                  </Link>
                </motion.div>
              );
            })}
          </nav>

          <div className="pf-cmd-bottom">
            <div className="pf-cmd-who">
              <img src={portrait} alt={t.name} />
              <div>
                <span><i>name:</i> {t.name}</span>
                <span><i>role:</i> {t.role}</span>
                <span className="pf-whoami-status">
                  <i>status:</i> <span className="pf-dot" /> <em>online</em>
                </span>
              </div>
            </div>
            <div className="pf-cmd-row">
              <div className="pf-cmd-links2">
                <a href={links.linkedin} target="_blank" rel="noreferrer">LinkedIn ↗</a>
                <a href={links.github} target="_blank" rel="noreferrer">GitHub ↗</a>
              </div>
              <div className="pf-cmd-ctrl">
                <button type="button" onClick={() => setLang(lang === "en" ? "es" : "en")} aria-label="Language">
                  {lang === "en" ? "EN" : "ES"}
                </button>
                <button type="button" onClick={toggleTheme} aria-label="Theme">
                  {theme === "dark" ? "☀" : "☾"}
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
