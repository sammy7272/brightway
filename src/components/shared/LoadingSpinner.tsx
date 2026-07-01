// PURPOSE: Reusable loading spinner for async/data-fetching states.

import { Loader2 } from "lucide-react";

export function LoadingSpinner({ size = 20 }: { size?: number }) {
  return (
    <div role="status" style={{ display: "grid", placeItems: "center", padding: "24px", color: "var(--accent)" }}>
      <Loader2 size={size} style={{ animation: "spin 1s linear infinite" }} />
      <span style={{ position: "absolute", width: 1, height: 1, overflow: "hidden", clip: "rect(0 0 0 0)" }}>
        Loading…
      </span>
    </div>
  );
}
