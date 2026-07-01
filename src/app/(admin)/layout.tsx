// PURPOSE: Layout for the store-owner (admin) portal at /store/*.
// Wraps all store pages in the themed app shell.
// TODO: Add an auth guard (admin only) + store scoping once auth is wired up.

import { PortalShell } from "@/components/shared/PortalShell";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <PortalShell portal="store">{children}</PortalShell>;
}
