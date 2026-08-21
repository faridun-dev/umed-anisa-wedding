"use client";

import { useLanguage } from "@/context/LanguageContext";
import { couple, translations } from "@/data/translations";
import { Monogram, OrnamentDivider } from "./DecorativeElements";
import { Reveal } from "./Reveal";

export function InvitationMessage() {
  const { lang } = useLanguage();
  const t = translations[lang].invitation;

  return (
    <section
      id="invitation"
      aria-labelledby="invitation-heading"
      className="relative overflow-hidden px-6 py-28 sm:py-36"
    >
      <Monogram className="pointer-events-none absolute left-1/2 top-1/2 -z-10 -translate-x-1/2 -translate-y-1/2 text-[26rem] leading-none sm:text-[38rem]" />

      <div className="container-invite flex flex-col items-center text-center">
        <Reveal>
          <p className="font-body text-xs font-medium uppercase tracking-[0.45em] text-gold-deep">
            {t.eyebrow}
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <h2
            id="invitation-heading"
            className="mt-8 max-w-3xl text-balance font-display text-3xl italic font-medium leading-[1.35] text-charcoal sm:text-4xl md:text-5xl"
          >
            {t.heading}
          </h2>
        </Reveal>

        <Reveal delay={0.2}>
          <OrnamentDivider className="my-10 sm:my-12" />
        </Reveal>

        <Reveal delay={0.25}>
          <p className="max-w-xl text-balance font-body text-sm font-light leading-loose text-espresso sm:text-base">
            {t.paragraph}
          </p>
        </Reveal>

        <Reveal delay={0.35}>
          <p className="mt-10 font-display text-xl italic font-medium text-wine sm:text-2xl">
            {couple.partnerOne} &amp; {couple.partnerTwo}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
