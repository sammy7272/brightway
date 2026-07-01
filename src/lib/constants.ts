// PURPOSE: App-wide constants shared across the portal.
// brightway portal — configuration constants

/** Display name of the application. */
export const APP_NAME = "Brightway Portal";

/** Public app URL (used for redirects, emails, NACHA metadata). */
export const APP_URL = process.env.NEXT_PUBLIC_APP_URL ?? "http://localhost:3000";

/**
 * MID / TPN monthly-volume alert threshold. When processed volume reaches this
 * fraction of the monthly limit, the UI shows a warning (proposal: 80%).
 */
export const VOLUME_WARNING_THRESHOLD = 0.8;

/** User roles used for route protection and access control. */
export const ROLES = {
  SUPER_ADMIN: "super_admin",
  ADMIN: "admin",
} as const;

/** Route groups keyed by role, used by middleware and navigation. */
export const ROUTES = {
  login: "/login",
  superAdmin: {
    dashboard: "/admin/dashboard",
    stores: "/admin/stores",
    tpns: "/admin/tpns",
    transactions: "/admin/transactions",
    feesAndTaxes: "/admin/fees-and-taxes",
  },
  admin: {
    dashboard: "/store/dashboard",
    transactions: "/store/transactions",
    deposits: "/store/deposits",
    reports: "/store/reports",
  },
} as const;

/** Supported card brands (matches the Dejavoo export). */
export const CARD_TYPES = ["Visa", "Mastercard", "Amex", "Discover"] as const;

/** Default currency for all monetary formatting. */
export const CURRENCY = "USD";
export const LOCALE = "en-US";
