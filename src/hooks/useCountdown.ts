"use client";

import { useEffect, useState } from "react";

export interface CountdownValue {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  isStarted: boolean;
}

function computeCountdown(target: Date): CountdownValue {
  const diff = target.getTime() - Date.now();

  if (diff <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0, isStarted: true };
  }

  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
    isStarted: false,
  };
}

/**
 * Returns `null` until mounted (avoids SSR/CSR hydration mismatch for a
 * clock-based value), then a live countdown updated every second.
 */
export function useCountdown(target: Date): CountdownValue | null {
  const [value, setValue] = useState<CountdownValue | null>(null);

  useEffect(() => {
    // Sync immediately so the first tick doesn't wait a full second, then
    // subscribe to the external clock via setInterval.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setValue(computeCountdown(target));
    const interval = setInterval(() => {
      setValue(computeCountdown(target));
    }, 1000);
    return () => clearInterval(interval);
  }, [target]);

  return value;
}
