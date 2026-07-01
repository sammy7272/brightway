// PURPOSE: Dummy user records — 1 super admin + 1 store-owner per store. Also
// exposes the demo login credentials shown on the sign-in screen. This is the
// ONLY place user sample data should live.
// TODO: Replace with Supabase auth + a users table when ready.

import type { User } from "@/types";

export const users: User[] = [
  { id: "user-super", email: "admin@brightway.com", role: "super_admin", storeIds: [], createdAt: "2026-01-01T08:00:00.000Z" },
  { id: "user-s1", email: "owner@alnoormart.com", role: "admin", storeIds: ["s1"], createdAt: "2026-01-12T09:05:00.000Z" },
  { id: "user-s2", email: "owner@citygrocery.com", role: "admin", storeIds: ["s2"], createdAt: "2026-02-03T14:35:00.000Z" },
  { id: "user-s3", email: "owner@metropharmacy.com", role: "admin", storeIds: ["s3"], createdAt: "2026-03-21T11:20:00.000Z" },
  { id: "user-s4", email: "owner@sunrisebakery.com", role: "admin", storeIds: ["s4"], createdAt: "2026-04-08T10:00:00.000Z" },
];

/** Demo credentials surfaced on the login screen (tap-to-autofill). */
export const DEMO_CREDENTIALS = {
  password: "demo123",
  superAdmin: { label: "Super Admin", email: "admin@brightway.com" },
  storeAdmin: { label: "Store Admin", email: "owner@alnoormart.com" },
};
