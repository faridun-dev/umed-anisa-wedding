"use client";

import { motion } from "framer-motion";
import { useReducedMotionSafe } from "@/hooks/useReducedMotionSafe";

/** Thin horizontal rule with a small centered diamond — used to separate
 * typographic blocks without resorting to boxed cards. */
export function OrnamentDivider({
  className = "",
  tone = "gold",
}: {
  className?: string;
  tone?: "gold" | "ivory";
}) {
  const line = tone === "gold" ? "bg-gold/60" : "bg-ivory/50";
  const diamond = tone === "gold" ? "border-gold" : "border-ivory/70";
  return (
    <div
      aria-hidden="true"
      className={`flex items-center justify-center gap-3 ${className}`}
    >
      <span className={`h-px w-10 sm:w-16 ${line}`} />
      <span className={`h-1.5 w-1.5 rotate-45 border ${diamond}`} />
      <span className={`h-px w-10 sm:w-16 ${line}`} />
    </div>
  );
}

/** Fine corner flourish, purely decorative. */
export function CornerFlourish({
  className = "",
  flip = false,
}: {
  className?: string;
  flip?: boolean;
}) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 120 120"
      fill="none"
      className={`${flip ? "-scale-x-100" : ""} ${className}`}
    >
      <path
        d="M4 4C40 4 60 24 60 60"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinecap="round"
      />
      <path
        d="M18 4C42 6 54 26 54 44"
        stroke="currentColor"
        strokeWidth="0.75"
        strokeLinecap="round"
        opacity="0.6"
      />
      <circle cx="60" cy="60" r="2.5" fill="currentColor" />
    </svg>
  );
}

const PARTICLE_PRESETS = [
  { left: "8%", top: "18%", size: 5, duration: 9, delay: 0 },
  { left: "22%", top: "68%", size: 3, duration: 11, delay: 1.2 },
  { left: "38%", top: "30%", size: 4, duration: 8, delay: 0.4 },
  { left: "58%", top: "72%", size: 6, duration: 12, delay: 2 },
  { left: "72%", top: "22%", size: 3, duration: 10, delay: 0.8 },
  { left: "84%", top: "58%", size: 5, duration: 13, delay: 1.6 },
  { left: "48%", top: "12%", size: 3, duration: 9.5, delay: 2.4 },
  { left: "92%", top: "82%", size: 4, duration: 11.5, delay: 0.6 },
];

/** Slow, low-count floating particles. GPU-friendly (transform + opacity
 * only) and static under prefers-reduced-motion.
 *
 * Uses `useReducedMotionSafe` so the first client render always matches
 * the server-rendered (motion-enabled) markup — the `animate` prop is the
 * only thing that changes, and framer-motion applies it imperatively
 * after mount rather than through SSR-diffed inline styles. */
export function FloatingParticles({ className = "" }: { className?: string }) {
  const reducedMotion = useReducedMotionSafe();

  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}
    >
      {PARTICLE_PRESETS.map((p, i) => (
        <motion.span
          key={i}
          className="absolute rounded-full bg-gold-light/70"
          style={{
            left: p.left,
            top: p.top,
            width: p.size,
            height: p.size,
            opacity: 0.3,
          }}
          animate={
            reducedMotion
              ? undefined
              : {
                  y: [0, -18, 0],
                  opacity: [0.15, 0.6, 0.15],
                }
          }
          transition={{
            duration: p.duration,
            delay: p.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}

/** Oversized ghost ampersand watermark for editorial backdrops. */
export function Monogram({ className = "" }: { className?: string }) {
  return (
    <span
      aria-hidden="true"
      className={`font-display italic select-none text-wine/[0.05] ${className}`}
    >
      &
    </span>
  );
}
