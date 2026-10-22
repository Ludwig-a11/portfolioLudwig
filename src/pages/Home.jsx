/* eslint-disable react/prop-types */
import { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion, useReducedMotion } from "framer-motion";
import { useApp } from "../context/AppContext";
import useProjects from "../hooks/useProjects";
import useMagnetic from "../hooks/useMagnetic";
import useScramble from "../hooks/useScramble";
import useIsTouch from "../hooks/useIsTouch";
import useScrollFocus from "../hooks/useScrollFocus";
import { agentLog, skills } from "../data/site";
import Reveal from "../components/motion/Reveal";
import useOpenProject from "../hooks/useOpenProject";
import "./home.css";

function MagLink({ to, className, children }) {
  const mag = useMagnetic(0.18);
  return (
    <Link to={to} className={className} {...mag}>
      {children}
    </Link>
  );
}

function RoleTag() {
  const { t } = useApp();
  const reduce = useReducedMotion();
  const [i, setI] = useState(0);
  useEffect(() => {
    if (reduce) return undefined;
    const id = setInterval(() => setI((v) => v + 1), 2800);
    return () => clearInterval(id);
  }, [reduce]);
  return (
    <Reveal kind="fade" as="span" className="home-role">
      <span className="pf-dot" />
      {t.roles[i % t.roles.length]}
    </Reveal>
  );
}

function Console() {
  const reduce = useReducedMotion();
  const [step, setStep] = useState(reduce ? agentLog.length : 0);

  useEffect(() => {
    if (reduce) return undefined;
    const id = setInterval(() => setStep((v) => (v + 1) % (agentLog.length + 4)), 900);
    return () => clearInterval(id);
  }, [reduce]);

  const lines = agentLog.slice(0, Math.min(step, agentLog.length));
  const running = step < agentLog.length;

  return (
    <Reveal kind="scale" delay={250} className="pf-console">
      <div className="pf-console-bar">
        <div className="pf-console-dots"><span /><span /><span /></div>
        <span className="pf-console-title">kivo → chloe · live run</span>
        <span className="pf-console-rec">● REC</span>
      </div>
      <div className="pf-console-body">
        {lines.map((l, i) => (
          <motion.div
            key={`${i}-${l.t}`}
            className="pf-log"
            initial={reduce ? false : { opacity: 0, x: -28 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, ease: [0.2, 0.7, 0.2, 1] }}
          >
            <span className="pf-log-k">{l.k}</span>
            <span className={`pf-log-t is-${l.k}`}>{l.t}</span>
          </motion.div>
        ))}
        {running && <span className="pf-caret">▍</span>}
      </div>
    </Reveal>
  );
}

function Marquee() {
  const items = skills.flatMap((g) => g.items);
  const all = [...items, ...items];
  return (
    <div className="home-marquee" aria-hidden="true">
      <div className="home-marquee-track">
        {all.map((s, i) => (
          <span key={`${s}-${i}`}>{s}</span>
        ))}
      </div>
    </div>
  );
}

function ProjectRow({ project, active, isTouch, onOpen }) {
  const { shown, run, reset } = useScramble(project.title);
  const [hovered, setHovered] = useState(false);
  const reduce = useReducedMotion();
  const on = isTouch ? active : hovered;

  // Same scramble for both triggers: hover (desktop) or scroll focus (touch).
  useEffect(() => {
    if (on) run();
    else reset();
  }, [on, run, reset]);

  return (
    <Reveal
      kind="up"
      data-row={project.slug}
      className={`home-row${on ? " is-on" : ""}${reduce ? " is-instant" : ""}`}
      // touch taps fire synthetic mouse events that would leave rows stuck open
      onMouseEnter={isTouch ? undefined : () => setHovered(true)}
      onMouseLeave={isTouch ? undefined : () => setHovered(false)}
      onClick={() => onOpen(project.slug)}
    >
      <button
        type="button"
        className="home-row-main"
        aria-label={project.title}
        onFocus={isTouch ? undefined : () => setHovered(true)}
        onBlur={isTouch ? undefined : () => setHovered(false)}
      >
        <span className="home-row-n">{project.n}</span>
        <span className="home-row-title">{shown}</span>
        <span className="home-row-tag">{project.tag}</span>
        <span className="home-row-arrow">↗</span>
      </button>
      <div className="home-row-more">
        <div className="home-row-more-clip">
          <div className="home-row-more-in">
            <span><span className="home-row-gt">&gt;</span> {project.desc}</span>
            <span className="pf-chips">
              {project.stack.slice(0, 3).map((s) => (
                <span key={s}>{s}</span>
              ))}
            </span>
          </div>
        </div>
      </div>
    </Reveal>
  );
}

export default function Home() {
  const { t } = useApp();
  const projects = useProjects();
  const { open } = useOpenProject();
  const navigate = useNavigate();
  const isTouch = useIsTouch();
  const listRef = useRef(null);
  const active = useScrollFocus(listRef, { enabled: isTouch });

  return (
    <>
      <section className="home-hero">
        <div>
          <RoleTag />
          <Reveal kind="blur" as="h1" delay={100} className="home-h1">
            {t.headlineA} <span>{t.headlineB}</span>
          </Reveal>
          <Reveal kind="up" delay={350} className="home-ctas">
            <MagLink to="/discovery" className="pf-btn pf-btn-acc">{t.ctaWork} →</MagLink>
            <MagLink to="/contact" className="pf-btn pf-btn-ghost">{t.ctaContact}</MagLink>
          </Reveal>
        </div>
        <Console />
      </section>

      <Marquee />

      <section className="home-work">
        <div className="home-work-head">
          <Reveal kind="up" as="h2">{"// "}{t.workTitle}</Reveal>
          <button type="button" onClick={() => navigate("/discovery")}>{t.nav.work} →</button>
        </div>
        <div ref={listRef}>
          {projects.map((p) => (
            <ProjectRow key={p.slug} project={p} active={active === p.slug} isTouch={isTouch} onOpen={open} />
          ))}
        </div>
      </section>
    </>
  );
}
