import { useCallback, useRef } from "react";

// Translates the element toward the cursor by (offset * strength).
export default function useMagnetic(strength = 0.18) {
  const ref = useRef(null);

  const enabled = () =>
    window.matchMedia("(hover: hover)").matches &&
    !window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const onMouseMove = useCallback(
    (e) => {
      const el = ref.current;
      if (!el || !enabled()) return;
      const r = el.getBoundingClientRect();
      const x = (e.clientX - (r.left + r.width / 2)) * strength;
      const y = (e.clientY - (r.top + r.height / 2)) * strength;
      el.style.transform = `translate(${x}px, ${y}px)`;
    },
    [strength],
  );

  const onMouseLeave = useCallback(() => {
    if (ref.current) ref.current.style.transform = "";
  }, []);

  return { ref, onMouseMove, onMouseLeave, style: { transition: "transform .35s var(--ease)" } };
}
