"use client";

// PURPOSE: Minimal toast used for demo action feedback (save, toggle, export),
// reproducing the design's bottom-centered toast. Returns a `show` fn + element.

import { useCallback, useRef, useState } from "react";

export function useToast() {
  const [message, setMessage] = useState("");
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const show = useCallback((m: string) => {
    setMessage(m);
    if (timer.current) clearTimeout(timer.current);
    timer.current = setTimeout(() => setMessage(""), 2600);
  }, []);

  const toast = message ? (
    <div
      style={{
        position: "fixed",
        bottom: "26px",
        left: "50%",
        transform: "translateX(-50%)",
        zIndex: 80,
        background: "#152227",
        color: "#fff",
        padding: "12px 20px",
        borderRadius: "11px",
        font: "600 13.5px 'IBM Plex Sans',sans-serif",
        boxShadow: "0 18px 40px -14px rgba(0,0,0,.5)",
        animation: "bwToast .28s ease",
      }}
    >
      {message}
    </div>
  ) : null;

  return { show, toast };
}
