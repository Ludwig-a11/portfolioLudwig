import { useEffect, useState } from "react";

const QUERY = "(hover: none) and (pointer: coarse)";

// Device capability, never viewport width: a phone with a mouse keeps hover.
export default function useIsTouch() {
  const [isTouch, setIsTouch] = useState(() => window.matchMedia(QUERY).matches);

  useEffect(() => {
    const mq = window.matchMedia(QUERY);
    const onChange = () => setIsTouch(mq.matches);
    onChange();
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  return isTouch;
}
