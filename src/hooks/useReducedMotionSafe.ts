"use client";

import { useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";

/**
 * Same intent as framer-motion's `useReducedMotion`, but guaranteed to
 * report `false` on the first client render so it always matches the
 * (motion-enabled) server-rendered markup. The real preference is applied
 * right after mount, which is a normal post-hydration update rather than
 * a hydration mismatch.
 */
export function useReducedMotionSafe(): boolean {
  const preference = useReducedMotion();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Standard hydration-safe "mounted" flag: intentionally fires once on
    // mount to reveal the real client preference after the SSR-matching
    // first paint.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
  }, []);

  return mounted ? Boolean(preference) : false;
}
