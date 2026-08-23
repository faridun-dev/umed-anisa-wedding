"use client";

import { motion } from "framer-motion";
import { useCallback, useEffect, useRef, useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { useReducedMotionSafe } from "@/hooks/useReducedMotionSafe";

// Plays background music through YouTube's own official embed rather than
// a downloaded/rehosted audio file — the video stays hosted and served by
// YouTube, this only remote-controls its official player.
const VIDEO_ID = "n1ttfScQEnU";

interface YouTubePlayerInstance {
  playVideo(): void;
  mute(): void;
  unMute(): void;
  destroy(): void;
}

interface YouTubePlayerOptions {
  videoId: string;
  width?: string | number;
  height?: string | number;
  playerVars?: Record<string, number | string>;
  events?: {
    onReady?: (event: { target: YouTubePlayerInstance }) => void;
  };
}

interface YouTubeIframeApi {
  Player: new (
    element: HTMLElement,
    options: YouTubePlayerOptions
  ) => YouTubePlayerInstance;
}

declare global {
  interface Window {
    YT?: YouTubeIframeApi;
    onYouTubeIframeAPIReady?: () => void;
  }
}

let apiLoadPromise: Promise<void> | null = null;

function loadYouTubeApi(): Promise<void> {
  if (window.YT?.Player) return Promise.resolve();
  if (apiLoadPromise) return apiLoadPromise;

  apiLoadPromise = new Promise((resolve) => {
    const previous = window.onYouTubeIframeAPIReady;
    window.onYouTubeIframeAPIReady = () => {
      previous?.();
      resolve();
    };
    const script = document.createElement("script");
    script.src = "https://www.youtube.com/iframe_api";
    document.head.appendChild(script);
  });

  return apiLoadPromise;
}

function NoteIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
      <path d="M12 3v10.55A4 4 0 1 0 14 17V7h4V3h-6z" />
    </svg>
  );
}

export function MusicPlayer() {
  const { lang } = useLanguage();
  const reducedMotion = useReducedMotionSafe();
  const mountRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const playerRef = useRef<YouTubePlayerInstance | null>(null);
  // The player autoplays muted immediately (browser-compliant); this tracks
  // whether the user has since made it audible — that, not YT's internal
  // playing state (true even while muted), is what the button should show.
  const [isAudible, setIsAudible] = useState(false);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    let cancelled = false;

    loadYouTubeApi().then(() => {
      if (cancelled || !mountRef.current || !window.YT) return;

      playerRef.current = new window.YT.Player(mountRef.current, {
        videoId: VIDEO_ID,
        // A degenerate 1-2px size breaks the embedded player's internal
        // init (onReady never fires) — keep a normal size and let the
        // sr-only wrapper below hide it visually instead.
        width: "200",
        height: "113",
        playerVars: {
          autoplay: 1,
          mute: 1,
          loop: 1,
          playlist: VIDEO_ID,
          controls: 0,
          disablekb: 1,
          fs: 0,
          modestbranding: 1,
          playsinline: 1,
        },
        events: {
          onReady: () => setReady(true),
        },
      });
    });

    return () => {
      cancelled = true;
      playerRef.current?.destroy();
    };
  }, []);

  const toggle = useCallback(() => {
    const player = playerRef.current;
    if (!player) return;
    if (isAudible) {
      player.mute();
      setIsAudible(false);
    } else {
      player.unMute();
      player.playVideo();
      setIsAudible(true);
    }
  }, [isAudible]);

  const label =
    lang === "tg"
      ? isAudible
        ? "Хомӯш кардани мусиқӣ"
        : "Пахши мусиқӣ"
      : isAudible
        ? "Выключить музыку"
        : "Включить музыку";

  return (
    <>
      <div className="sr-only" aria-hidden="true">
        <div ref={mountRef} />
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: ready ? 1 : 0 }}
        transition={{ duration: 0.6 }}
        className="fixed bottom-4 right-4 z-50 sm:bottom-6 sm:right-6"
      >
        <button
          ref={buttonRef}
          type="button"
          onClick={toggle}
          disabled={!ready}
          aria-pressed={isAudible}
          aria-label={label}
          title={label}
          className="flex h-11 w-11 items-center justify-center rounded-full border border-gold/30 bg-paper/80 shadow-[0_4px_16px_-8px_rgba(36,30,25,0.25)] backdrop-blur-sm transition-colors disabled:pointer-events-none"
        >
          <motion.span
            className={isAudible ? "text-wine" : "text-espresso/50"}
            animate={
              !reducedMotion && isAudible ? { rotate: 360 } : { rotate: 0 }
            }
            transition={{ duration: 6, repeat: isAudible ? Infinity : 0, ease: "linear" }}
          >
            <NoteIcon />
          </motion.span>
        </button>
      </motion.div>
    </>
  );
}
