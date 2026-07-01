// PURPOSE: Colored status pill (paid/pending, settled/declined, active/inactive)
// matching the design's badge styling.

import { badge, dot, statusKind, type BadgeKind } from "@/lib/ui";

export function StatusBadge({
  status,
  kind,
}: {
  status: string;
  /** Override the auto-derived color kind if needed. */
  kind?: BadgeKind;
}) {
  return (
    <span style={badge(kind ?? statusKind(status))}>
      <span style={dot} />
      {status}
    </span>
  );
}
