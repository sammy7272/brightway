// PURPOSE: Format ISO date strings for display across the portal.
// TODO: Add relative-time helper (e.g. "2 days ago") when reports need it.

import { format, parseISO } from "date-fns";

/** Formats an ISO string as e.g. "Jul 1, 2026". */
export function formatDate(iso: string, pattern = "MMM d, yyyy"): string {
  return format(parseISO(iso), pattern);
}

/** Formats an ISO string including time, e.g. "Jul 1, 2026, 2:30 PM". */
export function formatDateTime(iso: string): string {
  return format(parseISO(iso), "MMM d, yyyy, h:mm a");
}
