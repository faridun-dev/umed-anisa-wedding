"use client";

import { useLanguage } from "@/context/LanguageContext";
import { couple, translations } from "@/data/translations";
import { WEDDING_DATE_SHORT } from "@/data/wedding";
import { OrnamentDivider } from "./DecorativeElements";
import { Reveal } from "./Reveal";

export function Footer() {
  const { lang } = useLanguage();
  const t = translations[lang].footer;

  return (
    <footer
      id="closing"
      aria-label={t.eyebrow}
      className="relative overflow-hidden bg-[linear-gradient(165deg,var(--color-wine-deep)_0%,var(--color-wine)_55%,var(--color-charcoal)_100%)] px-6 py-28 text-center text-ivory sm:py-36"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-0 h-[30rem] w-[30rem] -translate-x-1/2 -translate-y-1/3 rounded-full bg-gold-light/10 blur-3xl"
      />

      <div className="container-invite relative flex flex-col items-center">
        <Reveal>
          <p className="font-body text-xs font-medium uppercase tracking-[0.45em] text-gold-light">
            {t.eyebrow}
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <h2 className="mt-8 max-w-xl text-balance font-display text-3xl italic font-medium leading-snug sm:text-4xl md:text-5xl">
            {t.heading}
          </h2>
        </Reveal>

        <Reveal delay={0.2}>
          <OrnamentDivider tone="ivory" className="my-10 sm:my-12" />
        </Reveal>

        <Reveal delay={0.28}>
          <p className="font-display text-4xl font-semibold sm:text-5xl">
            {couple.partnerOne} <span className="italic text-gold-light">&amp;</span>{" "}
            {couple.partnerTwo}
          </p>
        </Reveal>

        <Reveal delay={0.36}>
          <p className="mt-4 font-body text-sm uppercase tracking-[0.4em] text-ivory/70">
            {WEDDING_DATE_SHORT}
          </p>
        </Reveal>

        <Reveal delay={0.44}>
          <a
            href="#hero"
            className="mt-14 inline-flex items-center gap-2 font-body text-[0.65rem] uppercase tracking-[0.35em] text-ivory/60 transition-colors hover:text-gold-light"
          >
            <span aria-hidden="true">&uarr;</span> {translations[lang].common.backToTop}
          </a>
        </Reveal>
      </div>
    </footer>
  );
}
