import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

/**
 * Decorative top progress bar that pulses on every route change to
 * reinforce the sense of navigation, since page swaps are instant.
 */
export default function RouteProgressBar() {
  const location = useLocation();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);
    const timeout = setTimeout(() => setVisible(false), 420);
    return () => clearTimeout(timeout);
  }, [location.pathname]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="routeProgressBar"
          initial={{ scaleX: 0, opacity: 1 }}
          animate={{ scaleX: 1, transition: { duration: 0.38, ease: "easeInOut" } }}
          exit={{ opacity: 0, transition: { duration: 0.15 } }}
        />
      )}
    </AnimatePresence>
  );
}
