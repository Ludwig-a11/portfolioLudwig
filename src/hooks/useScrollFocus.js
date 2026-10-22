import { useEffect, useState } from "react";

// Returns the slug of the `[data-row]` inside `containerRef` closest to a line at
// `line` × viewport height, or null if none is within `maxDist` × viewport height.
export default function useScrollFocus(containerRef, { line = 0.48, maxDist = 0.3, enabled = true, expanded = ".is-on .home-row-more-clip" } = {}) {
  const [active, setActive] = useState(null);

  useEffect(() => {
    if (!enabled) {
      setActive(null);
      return undefined;
    }
    let raf = 0;

    const compute = () => {
      raf = 0;
      const root = containerRef.current;
      if (!root) return;
      const vh = window.innerHeight;
      const target = vh * line;
      const rows = [...root.querySelectorAll("[data-row]")];

      // The last row can't scroll up to the line (footer + padding below it), so
      // the line slides down toward it near the end of the page. Measured with the
      // open row's expansion subtracted, so opening a row doesn't change the result.
      let lineY = target;
      const last = rows[rows.length - 1];
      if (last) {
        const open = root.querySelector(expanded);
        const extra = open ? open.scrollHeight : 0;
        const openBeforeLast = open && open.closest("[data-row]") !== last;
        const remaining = Math.max(
          0,
          document.documentElement.scrollHeight - extra - vh - window.scrollY,
        );
        const r = last.getBoundingClientRect();
        const centerAtMax =
          r.top + Math.min(r.height, 90) / 2 - (openBeforeLast ? extra : 0) - remaining;
        const shortfall = Math.max(0, centerAtMax - target);
        const p = Math.min(1, Math.max(0, 1 - remaining / (vh * 0.6)));
        lineY = target + shortfall * p;
      }

      let best = null;
      let bestDist = Infinity;
      rows.forEach((el) => {
        const r = el.getBoundingClientRect();
        if (r.bottom < 0 || r.top > vh) return;
        const dist = Math.abs(r.top + Math.min(r.height, 90) / 2 - lineY);
        if (dist < bestDist) {
          bestDist = dist;
          best = el.dataset.row;
        }
      });
      setActive(best && bestDist <= vh * maxDist ? best : null);
    };

    const schedule = () => {
      if (!raf) raf = requestAnimationFrame(compute);
    };

    compute();
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    const safety = setInterval(compute, 500); // iOS momentum scroll
    return () => {
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
      clearInterval(safety);
      cancelAnimationFrame(raf);
    };
  }, [containerRef, line, maxDist, enabled, expanded]);

  return active;
}
