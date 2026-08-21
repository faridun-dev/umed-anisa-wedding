"use client";

import { useLanguage, type Lang } from "@/context/LanguageContext";

const OPTIONS: { value: Lang; label: string }[] = [
  { value: "tg", label: "ТҶ" },
  { value: "ru", label: "РУ" },
];

export function LanguageSwitcher() {
  const { lang, setLang } = useLanguage();

  return (
    <div
      role="group"
      aria-label="Забон / Язык"
      className="fixed right-4 top-4 z-50 flex items-center gap-0.5 rounded-full border border-gold/30 bg-paper/80 p-1 shadow-[0_4px_16px_-8px_rgba(36,30,25,0.25)] backdrop-blur-sm sm:right-6 sm:top-6"
    >
      {OPTIONS.map((option) => (
        <button
          key={option.value}
          type="button"
          aria-pressed={lang === option.value}
          onClick={() => setLang(option.value)}
          className={`rounded-full px-3 py-1.5 font-body text-[0.65rem] font-medium uppercase tracking-[0.15em] transition-colors ${
            lang === option.value
              ? "bg-wine text-ivory"
              : "text-espresso hover:text-wine"
          }`}
        >
          {option.label}
        </button>
      ))}
    </div>
  );
}
