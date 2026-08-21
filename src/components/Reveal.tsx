"use client";

import { motion, type Variants } from "framer-motion";
import type { ReactNode } from "react";
import { useReducedMotionSafe } from "@/hooks/useReducedMotionSafe";

interface RevealProps {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
  once?: boolean;
  as?: "div" | "span";
}

/** Fades + lifts content into place as it enters the viewport. Collapses
 * to a plain opacity fade when the user prefers reduced motion. */
export function Reveal({
  children,
  delay = 0,
  y = 26,
  className,
  once = true,
}: RevealProps) {
  const reducedMotion = useReducedMotionSafe();

  const variants: Variants = {
    hidden: { opacity: 0, y: reducedMotion ? 0 : y },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: reducedMotion ? 0.4 : 0.9,
        delay,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount: 0.25 }}
      variants={variants}
    >
      {children}
    </motion.div>
  );
}
