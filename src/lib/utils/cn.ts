// PURPOSE: Class-name merge helper used by shadcn/ui components and app UI.
// Combines clsx (conditional classes) with tailwind-merge (dedupes conflicting
// Tailwind utilities, e.g. "px-2 px-4" -> "px-4").

import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
