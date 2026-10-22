/* eslint-disable react/prop-types */
import { useLocation } from "react-router-dom";
import { motion, useReducedMotion } from "framer-motion";

export default function PageTransition({ children }) {
  const reduce = useReducedMotion();
  const { pathname } = useLocation();
  return (
    <motion.div
      key={pathname}
      initial={reduce ? false : { opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.2, 0.7, 0.2, 1] }}
    >
      {children}
    </motion.div>
  );
}
