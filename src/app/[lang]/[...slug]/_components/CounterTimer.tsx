"use client";

import { useEffect, useState } from "react";

export function CounterTime() {
  const [t, setT] = useState<number>(15);
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
