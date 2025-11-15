"use client";

import { useEffect, useState } from "react";

export function CounterTime({ time = 15 }: { time?: number }) {
  const [t, setT] = useState<number>(time);
  useEffect(() => {
    const interval = setInterval(() => {
      setT((num) => {
        if (num <= 0) {
          clearInterval(interval);
          return 0;
        }
        return num - 1;
      });
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);
  return <p>{t} seconds</p>;
}
