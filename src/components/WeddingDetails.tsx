"use client";

import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/data/translations";
import { Countdown } from "./Countdown";
import { OrnamentDivider } from "./DecorativeElements";
import { Reveal } from "./Reveal";

export function WeddingDetails() {
  const { lang } = useLanguage();
  const t = translations[lang].details;

  return (
    <section
      id="details"
      aria-labelledby="details-heading"
      className="relative bg-ivory-deep px-6 py-28 sm:py-36"
    >
      <div className="container-invite flex flex-col items-center text-center">
        <Reveal>
          <p className="font-body text-xs font-medium uppercase tracking-[0.45em] text-gold-deep">
            {t.eyebrow}
          </p>
        </Reveal>

        <Reveal delay={0.08}>
          <h2
            id="details-heading"
            className="mt-6 font-display text-4xl font-semibold text-charcoal sm:text-5xl md:text-6xl"
          >
            {t.dateHeading}
          </h2>
        </Reveal>

        <Reveal delay={0.14}>
          <p className="mt-3 font-body text-sm uppercase tracking-[0.4em] text-espresso">
            {t.timeSub}
          </p>
        </Reveal>

        <Reveal delay={0.2}>
          <OrnamentDivider className="my-10 sm:my-12" />
        </Reveal>

        <Reveal delay={0.26} className="w-full">
          <Countdown />
        </Reveal>
      </div>
    </section>
  );
}
