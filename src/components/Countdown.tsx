"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/data/translations";
import { WEDDING_DATE } from "@/data/wedding";
import { useCountdown } from "@/hooks/useCountdown";
import { useReducedMotionSafe } from "@/hooks/useReducedMotionSafe";

function CountdownUnit({ value, label }: { value: number | null; label: string }) {
  const reducedMotion = useReducedMotionSafe();
  const display = value === null ? "--" : String(value).padStart(2, "0");

  return (
    <div className="flex flex-col items-center gap-2 sm:gap-3">
      <div className="relative flex h-16 w-16 items-center justify-center overflow-hidden rounded-xl border border-gold/30 bg-paper/70 shadow-[0_1px_2px_rgba(36,30,25,0.06)] backdrop-blur-sm sm:h-24 sm:w-24 sm:rounded-2xl">
        <AnimatePresence mode="popLayout">
          <motion.span
            key={display}
            initial={reducedMotion ? { opacity: 1 } : { opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reducedMotion ? { opacity: 1 } : { opacity: 0, y: -14 }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className="font-display text-2xl font-semibold tabular-nums text-wine sm:text-4xl"
          >
            {display}
          </motion.span>
        </AnimatePresence>
      </div>
      <span className="font-body text-[0.6rem] uppercase tracking-[0.25em] text-espresso sm:text-xs">
        {label}
      </span>
    </div>
  );
}

export function Countdown() {
  const { lang } = useLanguage();
  const t = translations[lang].details.countdown;
  const countdown = useCountdown(WEDDING_DATE);

  if (countdown?.isStarted) {
    return (
      <div
        role="status"
        aria-live="polite"
        className="flex flex-col items-center gap-3 py-4 text-center"
      >
        <motion.span
          aria-hidden="true"
          animate={{ scale: [1, 1.12, 1] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="font-display text-3xl text-wine sm:text-4xl"
        >
          &hearts;
        </motion.span>
        <p className="font-display text-2xl italic font-medium text-charcoal sm:text-3xl">
          {t.startedTitle}
        </p>
        <p className="font-body text-sm text-espresso">{t.startedSubtitle}</p>
      </div>
    );
  }

  return (
    <div
      role="timer"
      aria-live="off"
      aria-label={t.timerAriaLabel}
      className="flex items-start justify-center gap-3 sm:gap-6"
    >
      <CountdownUnit value={countdown?.days ?? null} label={t.days} />
      <CountdownUnit value={countdown?.hours ?? null} label={t.hours} />
      <CountdownUnit value={countdown?.minutes ?? null} label={t.minutes} />
      <CountdownUnit value={countdown?.seconds ?? null} label={t.seconds} />
    </div>
  );
}
