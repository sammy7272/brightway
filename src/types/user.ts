// PURPOSE: User/account domain model. Two roles exist: super_admin (Brightway
// operators) and admin (store owners scoped to one or more stores).

export type UserRole = "super_admin" | "admin";

export interface User {
  /** Unique identifier (matches the Supabase auth user id). */
  id: string;
  /** Login email address. */
  email: string;
  /** Access role. */
  role: UserRole;
  /** Store ids this user can access. Empty for super_admin (sees all). */
  storeIds: string[];
  /** ISO-8601 timestamp of when the user was created. */
  createdAt: string;
}
