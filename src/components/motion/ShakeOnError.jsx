/* eslint-disable react/prop-types */
import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";

/**
 * Wraps a form field and plays a short shake whenever `trigger` changes to a
 * truthy value (e.g. an incrementing counter set on a failed submit attempt).
 */
export function ShakeOnError({ trigger, children, className }) {
  const controls = useAnimation();

  useEffect(() => {
    if (trigger) {
      controls.start({
        x: [0, -6, 6, -4, 4, 0],
        transition: { duration: 0.4, ease: "easeInOut" },
      });
    }
  }, [trigger, controls]);

  return (
    <motion.div className={className} animate={controls}>
      {children}
    </motion.div>
  );
}
