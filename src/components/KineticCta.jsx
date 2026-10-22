import { Fragment, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useApp } from "../context/AppContext";
import "./kinetic-cta.css";

export default function KineticCta() {
  const { t } = useApp();
  const navigate = useNavigate();
  const section = useRef(null);
  const r1 = useRef(null);
  const r2 = useRef(null);
  const anims = useRef([]);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return undefined;
    const a1 = r1.current.animate(
      [{ transform: "translateX(0)" }, { transform: "translateX(-50%)" }],
      { duration: 38000, iterations: Infinity, easing: "linear" },
    );
    const a2 = r2.current.animate(
      [{ transform: "translateX(-50%)" }, { transform: "translateX(0)" }],
      { duration: 44000, iterations: Infinity, easing: "linear" },
    );
    anims.current = [a1, a2];

    // pause while off screen to save CPU
    const io = new IntersectionObserver(([entry]) => {
      anims.current.forEach((a) => (entry.isIntersecting ? a.play() : a.pause()));
    });
    io.observe(section.current);

    return () => {
      io.disconnect();
      anims.current.forEach((a) => a.cancel());
    };
  }, []);

  // playbackRate changes decelerate smoothly; never pause/restart for hover
  const setRate = (rate) => {
    if (!window.matchMedia("(hover: hover)").matches) return;
    anims.current.forEach((a) => {
      a.playbackRate = rate;
    });
  };

  const row1 = [t.kA, t.kB, t.kA, t.kB];
  const row2 = [t.kC, t.kD, t.kC, t.kD, t.kC, t.kD];
  const go = () => navigate("/contact");

  return (
    <section
      ref={section}
      className="kinetic-cta"
      role="link"
      tabIndex={0}
      aria-label={t.ctaContact}
      onClick={go}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          go();
        }
      }}
      onMouseEnter={() => setRate(0.25)}
      onMouseLeave={() => setRate(1)}
    >
      <div ref={r1} className="kc-row kc-row--fwd">
        {[0, 1].map((copy) =>
          row1.map((w, i) => (
            <Fragment key={`${copy}-${i}`}>
              <span className="kc-word" aria-hidden={copy === 1 ? "true" : undefined}>{w}</span>
              <span className="kc-sep" aria-hidden="true">✳</span>
            </Fragment>
          )),
        )}
      </div>
      <div ref={r2} className="kc-row kc-row--rev">
        {[0, 1].map((copy) =>
          row2.map((w, i) => (
            <Fragment key={`${copy}-${i}`}>
              <span className="kc-word kc-word--outline" aria-hidden={copy === 1 ? "true" : undefined}>{w}</span>
              <span className="kc-sep kc-sep--mono" aria-hidden="true">→</span>
            </Fragment>
          )),
        )}
      </div>
    </section>
  );
}
