"use client";

import { motion, type Variants } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { couple, translations } from "@/data/translations";
import { useReducedMotionSafe } from "@/hooks/useReducedMotionSafe";
import { FloatingParticles, OrnamentDivider } from "./DecorativeElements";

export function Hero() {
  const reducedMotion = useReducedMotionSafe();
  const { lang } = useLanguage();
  const t = translations[lang].hero;

  const container: Variants = {
    hidden: {},
    visible: {
      transition: reducedMotion
        ? { staggerChildren: 0.06, delayChildren: 0 }
        : { staggerChildren: 0.28, delayChildren: 0.15 },
    },
  };

  const item: Variants = {
    hidden: {
      opacity: 0,
      y: reducedMotion ? 0 : 22,
      filter: reducedMotion ? "none" : "blur(6px)",
    },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        duration: reducedMotion ? 0.5 : 1.2,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  return (
    <section
      id="hero"
      aria-label={t.dateAriaLabel}
      className="relative flex min-h-[100svh] flex-col items-center justify-center overflow-hidden px-6 py-24 text-center"
    >
      {/* Ambient background */}
      <motion.div
        aria-hidden="true"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: reducedMotion ? 0.6 : 2.2, ease: "easeOut" }}
        className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_50%_20%,var(--color-blush)_0%,var(--color-ivory)_55%),linear-gradient(180deg,var(--color-ivory)_0%,var(--color-ivory-deep)_100%)]"
      />
      <motion.div
        aria-hidden="true"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: reducedMotion ? 0.6 : 2.6, delay: 0.3, ease: "easeOut" }}
        className="absolute left-1/2 top-[-10%] -z-10 h-[46rem] w-[46rem] -translate-x-1/2 rounded-full bg-gold-light/20 blur-3xl"
      />

      <FloatingParticles />

      <motion.div
        initial="hidden"
        animate="visible"
        variants={container}
        className="flex max-w-3xl flex-col items-center"
      >
        <motion.p
          variants={item}
          className="font-body text-[0.7rem] font-medium uppercase tracking-[0.4em] text-espresso sm:text-xs"
        >
          {t.eyebrow}
        </motion.p>

        <motion.div variants={item} className="mt-7 sm:mt-9">
          <OrnamentDivider className="mb-7 sm:mb-9" />
        </motion.div>

        <motion.h1
          variants={item}
          className="font-display text-[3.1rem] font-semibold leading-[1.05] text-charcoal sm:text-7xl md:text-8xl"
        >
          <span>{couple.partnerOne}</span>
          <span className="mx-2 italic text-wine sm:mx-4">&amp;</span>
          <span>{couple.partnerTwo}</span>
        </motion.h1>

        <motion.p
          variants={item}
          className="mt-6 max-w-xl text-balance font-body text-sm font-light leading-relaxed text-espresso sm:text-base"
        >
          {t.subtitle}
        </motion.p>

        <motion.div variants={item} className="mt-10 sm:mt-12">
          <OrnamentDivider className="mb-8" />
          <div className="flex flex-col items-center gap-2 sm:flex-row sm:gap-6">
            <span className="font-display text-2xl tracking-[0.15em] text-wine sm:text-3xl">
              22 &middot; 08 &middot; 2026
            </span>
            <span
              aria-hidden="true"
              className="hidden h-5 w-px bg-gold/50 sm:block"
            />
            <span className="font-body text-sm uppercase tracking-[0.35em] text-espresso">
              20:30
            </span>
          </div>
        </motion.div>
      </motion.div>

      <motion.a
        href="#invitation"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: reducedMotion ? 0.4 : 2.1 }}
        className="group absolute bottom-8 left-1/2 flex -translate-x-1/2 flex-col items-center gap-3 text-espresso/70 transition-colors hover:text-wine sm:bottom-10"
        aria-label={t.scrollAriaLabel}
      >
        <span className="font-body text-[0.62rem] uppercase tracking-[0.4em]">
          {translations[lang].common.scroll}
        </span>
        <span className="relative flex h-9 w-5 justify-center rounded-full border border-espresso/30 group-hover:border-wine/60">
          <motion.span
            aria-hidden="true"
            className="mt-1.5 h-1.5 w-1.5 rounded-full bg-gold"
            animate={
              reducedMotion
                ? {}
                : { y: [0, 14, 0], opacity: [1, 0.2, 1] }
            }
            transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
          />
        </span>
      </motion.a>
    </section>
  );
}
