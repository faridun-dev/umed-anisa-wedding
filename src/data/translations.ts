import type { Lang } from "@/context/LanguageContext";

export interface Translation {
  common: {
    scroll: string;
    backToTop: string;
  };
  hero: {
    eyebrow: string;
    subtitle: string;
    dateAriaLabel: string;
    scrollAriaLabel: string;
  };
  invitation: {
    eyebrow: string;
    heading: string;
    paragraph: string;
  };
  details: {
    eyebrow: string;
    dateHeading: string;
    timeSub: string;
    countdown: {
      days: string;
      hours: string;
      minutes: string;
      seconds: string;
      timerAriaLabel: string;
      startedTitle: string;
      startedSubtitle: string;
    };
  };
  footer: {
    eyebrow: string;
    heading: string;
  };
}

export const couple = {
  partnerOne: "Умед",
  partnerTwo: "Аниса",
};

export const translations: Record<Lang, Translation> = {
  tg: {
    common: {
      scroll: "ПОЁН",
      backToTop: "БА БОЛО",
    },
    hero: {
      eyebrow: "БО ИШТИРОКИ ОИЛАҲО",
      subtitle:
        "Бо камоли хушнудӣ шуморо ба маросими Фотиҳаи худ даъват менамоянд.",
      dateAriaLabel: "Маросими Фотиҳа: 22 августи 2026, соати 20:30",
      scrollAriaLabel: "Ба сӯи даъватнома ҳаракат кунед",
    },
    invitation: {
      eyebrow: "ШУМО ДАЪВАТ ШУДАЕД",
      heading:
        "Бо дилҳои шодмону пур аз меҳр шуморо ба маросими Фотиҳа — оғози боби нави ҳаёти мо — даъват менамоем.",
      paragraph:
        "Ҳузури шумо барои мо бузургтарин ифтихор аст — мехоҳем ин лаҳзаи муборакро дар канори наздикону азизони худ ҷашн гирем.",
    },
    details: {
      eyebrow: "САНАИ ФОТИҲА",
      dateHeading: "22 августи 2026",
      timeSub: "соати 20:30 бегоҳ",
      countdown: {
        days: "РӮЗҲО",
        hours: "СОАТҲО",
        minutes: "ДАҚИҚАҲО",
        seconds: "СОНИЯҲО",
        timerAriaLabel: "Ҷамъшумории вақт то маросими Фотиҳа",
        startedTitle: "Маросим оғоз ёфт",
        startedSubtitle: "Умед ва Аниса имшаб файзи Фотиҳа мегиранд.",
      },
    },
    footer: {
      eyebrow: "ТО ОН РӮЗ",
      heading: "Мунтазири он ҳастем, ки бо шумо якҷоя ҷашн гирем.",
    },
  },
  ru: {
    common: {
      scroll: "ВНИЗ",
      backToTop: "НАВЕРХ",
    },
    hero: {
      eyebrow: "ВМЕСТЕ СО СВОИМИ СЕМЬЯМИ",
      subtitle: "С большой радостью приглашают вас на церемонию Фатиха.",
      dateAriaLabel: "Церемония Фатиха: 22 августа 2026, 20:30",
      scrollAriaLabel: "Перейти к приглашению",
    },
    invitation: {
      eyebrow: "ВЫ ПРИГЛАШЕНЫ",
      heading:
        "От всей души приглашаем вас разделить с нами радость церемонии Фатиха — начала новой главы нашей жизни.",
      paragraph:
        "Ваше присутствие станет для нас особенной честью — мы хотим встретить этот благословенный момент в окружении родных и близких.",
    },
    details: {
      eyebrow: "ДАТА ФАТИХА",
      dateHeading: "22 августа 2026",
      timeSub: "20:30 вечера",
      countdown: {
        days: "ДНЕЙ",
        hours: "ЧАСОВ",
        minutes: "МИНУТ",
        seconds: "СЕКУНД",
        timerAriaLabel: "Обратный отсчёт до церемонии Фатиха",
        startedTitle: "Церемония началась",
        startedSubtitle: "Умед и Аниса сегодня вечером получают благословение Фатиха.",
      },
    },
    footer: {
      eyebrow: "ДО ВСТРЕЧИ",
      heading: "Мы с нетерпением ждём этого праздника вместе с вами.",
    },
  },
};
