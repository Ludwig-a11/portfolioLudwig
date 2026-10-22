import { useCallback, useEffect, useRef, useState } from "react";
import { scramble } from "../utils/scramble";

// Per-row scramble state. `run` decodes, `reset` cancels and restores the real text.
export default function useScramble(text) {
  const [shown, setShown] = useState(text);
  const cancel = useRef(null);

  const reset = useCallback(() => {
    cancel.current?.();
    cancel.current = null;
    setShown(text);
  }, [text]);

  const run = useCallback(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    cancel.current?.();
    cancel.current = scramble(text, setShown, () => setShown(text));
  }, [text]);

  useEffect(() => () => cancel.current?.(), []);
  useEffect(() => setShown(text), [text]);

  return { shown, run, reset };
}
