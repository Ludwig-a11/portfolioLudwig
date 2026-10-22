import { useState } from "react";
import { Link } from "react-router-dom";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useApp } from "../context/AppContext";
import portrait from "../assets/portfolio_pc2.jpg";

const EASE = [0.2, 0.7, 0.2, 1];

function Whoami() {
  const { t } = useApp();
  const reduce = useReducedMotion();
  return (
    <motion.div
      className="pf-whoami"
      initial={reduce ? false : { opacity: 0, scale: 0.94 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={reduce ? { opacity: 0 } : { opacity: 0, scale: 0.94 }}
      transition={{ duration: 0.26, ease: EASE }}
    >
      <div className="pf-whoami-bar">
        <b>$</b> whoami
      </div>
      <div className="pf-whoami-body">
        <img src={portrait} alt={t.name} />
        <div className="pf-whoami-kv">
          <span><i>name:</i> {t.name}</span>
          <span><i>role:</i> {t.role}</span>
          <span><i>loc:</i> {t.location}</span>
          <span className="pf-whoami-status">
            <i>status:</i>
            <span className="pf-dot" />
            <em>online</em>
          </span>
        </div>
      </div>
    </motion.div>
  );
}

export default function Header() {
  const { t, lang, setLang, theme, toggleTheme } = useApp();
  const [whoOpen, setWhoOpen] = useState(false);

  return (
    <header className="pf-header">
      <div
        className="pf-brand"
        onMouseEnter={() => setWhoOpen(true)}
        onMouseLeave={() => setWhoOpen(false)}
      >
        <Link
          to="/"
          className="pf-brand-link"
          onClick={(e) => {
            // touch / compact: tapping the name toggles whoami instead of navigating
            if (window.matchMedia("(hover: none), (max-width: 1099px)").matches) {
              e.preventDefault();
              setWhoOpen((v) => !v);
            }
          }}
        >
          luis.martinez<span className="pf-cursor">_</span>
        </Link>
        <AnimatePresence>{whoOpen && <Whoami />}</AnimatePresence>
      </div>

      <div className="pf-controls">
        <span className="pf-available">
          <span className="pf-dot" />
          {t.available}
        </span>
        <div className="pf-lang" role="group" aria-label="Language">
          {["en", "es"].map((l) => (
            <button
              key={l}
              type="button"
              className={lang === l ? "is-active" : ""}
              aria-pressed={lang === l}
              onClick={() => setLang(l)}
            >
              {l.toUpperCase()}
            </button>
          ))}
        </div>
        <button
          type="button"
          className="pf-theme"
          onClick={toggleTheme}
          aria-label={theme === "dark" ? "Switch to light theme" : "Switch to dark theme"}
          title={theme === "dark" ? "Light" : "Dark"}
        >
          {theme === "dark" ? "☀" : "☾"}
        </button>
      </div>
    </header>
  );
}
