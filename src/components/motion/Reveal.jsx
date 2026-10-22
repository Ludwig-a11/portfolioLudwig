/* eslint-disable react/prop-types */
import { motion, useReducedMotion } from "framer-motion";

const EASE = [0.2, 0.7, 0.2, 1];

const KINDS = {
  up: { from: { opacity: 0, y: 28 }, to: { opacity: 1, y: 0 }, duration: 0.85 },
  rise: { from: { y: "105%" }, to: { y: "0%" }, duration: 1 },
  fade: { from: { opacity: 0 }, to: { opacity: 1 }, duration: 0.85 },
  scale: { from: { opacity: 0, scale: 0.94 }, to: { opacity: 1, scale: 1 }, duration: 0.85 },
  blur: {
    from: { opacity: 0, filter: "blur(12px)", y: 10 },
    to: { opacity: 1, filter: "blur(0px)", y: 0 },
    duration: 0.85,
  },
  left: { from: { opacity: 0, x: -28 }, to: { opacity: 1, x: 0 }, duration: 0.85 },
};

/**
 * Reveals once when it enters the viewport (top < 94% of the viewport height).
 * `delay` in ms. Disabled under prefers-reduced-motion.
 */
export default function Reveal({ kind = "up", delay = 0, duration, as = "div", children, ...rest }) {
  const reduce = useReducedMotion();
  const Tag = motion[as];
  if (reduce) {
    const Plain = as;
    return <Plain {...rest}>{children}</Plain>;
  }
  const k = KINDS[kind];
  return (
    <Tag
      initial={k.from}
      whileInView={k.to}
      viewport={{ once: true, margin: "0px 0px -6% 0px" }}
      transition={{ duration: duration ?? k.duration, delay: delay / 1000, ease: EASE }}
      {...rest}
    >
      {children}
    </Tag>
  );
}

// Headline line with an overflow:hidden mask and a rising inner span.
// The viewport trigger lives on the (static) mask: an IntersectionObserver on the
// translated inner span would never fire, since it starts fully clipped.
export function MaskLine({ children, delay = 0, className = "", innerClassName = "", ...rest }) {
  const reduce = useReducedMotion();
  if (reduce) {
    return (
      <span className={`mask-line ${className}`} {...rest}>
        <span className={`mask-line-inner ${innerClassName}`}>{children}</span>
      </span>
    );
  }
  return (
    <motion.span
      className={`mask-line ${className}`}
      initial="hidden"
      whileInView="shown"
      viewport={{ once: true, margin: "0px 0px -6% 0px" }}
      {...rest}
    >
      <motion.span
        className={`mask-line-inner ${innerClassName}`}
        variants={{ hidden: { y: "105%" }, shown: { y: "0%" } }}
        transition={{ duration: 1, delay: delay / 1000, ease: EASE }}
      >
        {children}
      </motion.span>
    </motion.span>
  );
}
