"use client";

// PURPOSE: Decorative giant watermark text behind the login card.
//   - "marquee": a seamless CSS marquee (two tiled copies) that scrolls slowly
//     and continuously — always visible, no flash, no JS timing.
//   - "static": stays centered.
// (Rendered purely with CSS so it shows immediately, including before hydration.)

import type { CSSProperties } from "react";

export type WatermarkMode = "marquee" | "static";

export function BouncingText({
  text,
  color = "rgba(255,255,255,.06)",
  tilt = -8,
  mode = "marquee",
  durationSec = 42,
}: {
  text: string;
  color?: string;
  /** Rotation of the watermark, in degrees. */
  tilt?: number;
  mode?: WatermarkMode;
  /** Seconds for one marquee cycle (higher = slower). */
  durationSec?: number;
}) {
  const textStyle: CSSProperties = {
    whiteSpace: "nowrap",
    font: "400 clamp(200px,32vw,480px) 'Press Start 2P','IBM Plex Sans',sans-serif",
    textTransform: "uppercase",
    color,
    userSelect: "none",
    paddingRight: "0.8em", // gap between the two tiled copies
  };

  return (
    <div
      aria-hidden="true"
      style={{
        position: "absolute",
        inset: 0,
        overflow: "hidden",
        zIndex: 0,
        pointerEvents: "none",
        display: "flex",
        alignItems: "center",
      }}
    >
      <div style={{ width: "100%", transform: `rotate(${tilt}deg)` }}>
        {mode === "static" ? (
          <div style={{ ...textStyle, textAlign: "center", paddingRight: 0 }}>
            {text}
          </div>
        ) : (
          <div
            style={{
              display: "inline-flex",
              width: "max-content",
              willChange: "transform",
              animation: `bwMarquee ${durationSec}s linear infinite`,
            }}
          >
            <span style={textStyle}>{text}</span>
            <span style={textStyle}>{text}</span>
          </div>
        )}
      </div>
    </div>
  );
}
