"use client";

import { useEffect, useState } from "react";

export function ClientTime() {
  const [t, setT] = useState("Loading...");
  useEffect(() => {
    setT(new Date().toISOString());
  }, []);
  return <p>{t}</p>;
}
