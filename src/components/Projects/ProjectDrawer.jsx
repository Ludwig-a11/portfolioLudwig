/* eslint-disable react/prop-types */
import { useEffect } from "react";
import { AnimatePresence, motion, useDragControls, useReducedMotion } from "framer-motion";
import { useApp } from "../../context/AppContext";
import useOpenProject from "../../hooks/useOpenProject";
import ProjectImage from "./ProjectImage";
import useProjects from "../../hooks/useProjects";
import useMediaQuery, { MOBILE_QUERY } from "../../hooks/useMediaQuery";
import "./drawer.css";

const EASE = [0.2, 0.7, 0.2, 1];

function Content({ project, onClose }) {
  const { t } = useApp();
  return (
    <>
      <div className="pf-drawer-hero">
        <ProjectImage src={project.img} />
        <button type="button" className="pf-drawer-close" onClick={onClose}>
          esc · {t.close} ✕
        </button>
      </div>
      <div className="pf-drawer-body">
        <span className="pf-drawer-kicker">
          {project.n} · {project.tag}
        </span>
        <h2 id="pf-drawer-title">{project.title}</h2>
        <p className="pf-drawer-problem">{project.problem}</p>
        <h3 className="pf-drawer-h">{t.solution}</h3>
        {project.solution.map((s) => (
          <p key={s} className="pf-drawer-row">{s}</p>
        ))}
        <div className="pf-drawer-results">
          <h3>{t.results}</h3>
          {project.results.map((s) => (
            <p key={s}><span>✓</span> {s}</p>
          ))}
        </div>
        <div className="pf-chips pf-chips-lg">
          {project.stack.map((s) => (
            <span key={s}>{s}</span>
          ))}
        </div>
        {project.live && (
          <a className="pf-drawer-live" href={project.live} target="_blank" rel="noreferrer">
            {t.live} ↗
          </a>
        )}
      </div>
    </>
  );
}

export default function ProjectDrawer() {
  const { slug, close } = useOpenProject();
  const projects = useProjects();
  const project = projects.find((p) => p.slug === slug) || null;
  const isSheet = useMediaQuery(MOBILE_QUERY);
  const reduce = useReducedMotion();
  const drag = useDragControls();

  useEffect(() => {
    if (!project) return undefined;
    const onKey = (e) => e.key === "Escape" && close();
    window.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [project?.slug]);

  const hidden = isSheet ? { opacity: 0, y: reduce ? 0 : 28 } : { opacity: 0, x: reduce ? 0 : 28 };
  const shown = isSheet ? { opacity: 1, y: 0 } : { opacity: 1, x: 0 };

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          key="overlay"
          className="pf-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          onClick={close}
        >
          <motion.aside
            key={project.slug}
            className={isSheet ? "pf-drawer is-sheet" : "pf-drawer"}
            role="dialog"
            aria-modal="true"
            aria-labelledby="pf-drawer-title"
            initial={hidden}
            animate={shown}
            exit={hidden}
            transition={{ duration: 0.5, ease: EASE }}
            onClick={(e) => e.stopPropagation()}
            {...(isSheet
              ? {
                  drag: "y",
                  dragControls: drag,
                  dragListener: false,
                  dragConstraints: { top: 0, bottom: 0 },
                  dragElastic: { top: 0, bottom: 0.6 },
                  onDragEnd: (_, info) => (info.offset.y > 110 || info.velocity.y > 600) && close(),
                }
              : {})}
          >
            {isSheet && (
              <div className="pf-grab" onPointerDown={(e) => drag.start(e)}>
                <span />
              </div>
            )}
            <Content project={project} onClose={close} />
          </motion.aside>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
