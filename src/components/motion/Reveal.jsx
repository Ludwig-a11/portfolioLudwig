/* eslint-disable react/prop-types */
import { motion } from "framer-motion";

const EASE = [0.22, 1, 0.36, 1];

/**
 * Fades/slides a single element in. `mode="scroll"` (default) triggers the
 * first time the element enters the viewport; `mode="mount"` triggers once,
 * right when the component mounts (for above-the-fold content).
 */
export function Reveal({
  children,
  as = "div",
  delay = 0,
  y = 24,
  duration = 0.6,
  className,
  once = true,
  amount = 0.2,
  mode = "scroll",
  ...rest
}) {
  const MotionTag = motion[as] || motion.div;
  const triggerProps =
    mode === "mount"
      ? { initial: { opacity: 0, y }, animate: { opacity: 1, y: 0 } }
      : {
          initial: { opacity: 0, y },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once, amount },
        };

  return (
    <MotionTag
      className={className}
      transition={{ duration, delay, ease: EASE }}
      {...triggerProps}
      {...rest}
    >
      {children}
    </MotionTag>
  );
}

const containerVariants = {
  hidden: {},
  visible: (custom) => ({
    transition: {
      staggerChildren: custom?.stagger ?? 0.08,
      delayChildren: custom?.delayChildren ?? 0.05,
    },
  }),
};

const revealItemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: EASE } },
};

/**
 * Wrap a list/grid of children with RevealItem to stagger them in together.
 */
export function RevealGroup({
  children,
  as = "div",
  className,
  stagger = 0.08,
  delayChildren = 0.05,
  once = true,
  amount = 0.2,
  mode = "scroll",
  ...rest
}) {
  const MotionTag = motion[as] || motion.div;
  const triggerProps =
    mode === "mount"
      ? { initial: "hidden", animate: "visible" }
      : { initial: "hidden", whileInView: "visible", viewport: { once, amount } };

  return (
    <MotionTag
      className={className}
      variants={containerVariants}
      custom={{ stagger, delayChildren }}
      {...triggerProps}
      {...rest}
    >
      {children}
    </MotionTag>
  );
}

export function RevealItem({ children, as = "div", className, variants, ...rest }) {
  const MotionTag = motion[as] || motion.div;
  return (
    <MotionTag className={className} variants={variants || revealItemVariants} {...rest}>
      {children}
    </MotionTag>
  );
}
