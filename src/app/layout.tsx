import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Raleway } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/context/LanguageContext";

// cyrillic-ext is required (not just cyrillic) — it's the subset that
// covers the Tajik-specific Cyrillic letters (Ғ Қ Ӯ Ҳ Ҷ Ӣ), which sit
// outside the basic Russian Cyrillic range that "cyrillic" alone covers.
const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin", "cyrillic-ext"],
  style: ["normal", "italic"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const raleway = Raleway({
  variable: "--font-raleway",
  subsets: ["latin", "cyrillic-ext"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Умед & Аниса | Фотиҳа",
  description:
    "Бо камоли хушнудӣ шуморо ба маросими Фотиҳаи Умед ва Аниса, 22 августи 2026, даъват мекунем.",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#fbf6ee",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="tg"
      className={`${cormorant.variable} ${raleway.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-ivory text-charcoal">
        <div aria-hidden="true" className="grain-overlay" />
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
