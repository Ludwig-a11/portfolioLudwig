import { useEffect, useState } from "react";

// Returns the slug of the `[data-row]` inside `containerRef` closest to a line at
// `line` × viewport height, or null if none is within `maxDist` × viewport height.
export default function useScrollFocus(containerRef, { line = 0.48, maxDist = 0.3, enabled = true } = {}) {
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
      let best = null;
      let bestDist = Infinity;
      root.querySelectorAll("[data-row]").forEach((el) => {
        const r = el.getBoundingClientRect();
        if (r.bottom < 0 || r.top > vh) return;
        const dist = Math.abs(r.top + Math.min(r.height, 90) / 2 - target);
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
  }, [containerRef, line, maxDist, enabled]);

  return active;
}
