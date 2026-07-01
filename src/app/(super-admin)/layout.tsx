// PURPOSE: Layout for the super-admin (Brightway operator) portal at /admin/*.
// Wraps all super-admin pages in the themed app shell.
// TODO: Add an auth guard (super_admin only) once Supabase auth is wired up.

import { PortalShell } from "@/components/shared/PortalShell";

export default function SuperAdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <PortalShell portal="super">{children}</PortalShell>;
}
