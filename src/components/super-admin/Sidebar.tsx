"use client";

// PURPOSE: Super-admin (Brightway operator) navigation sidebar.
// Links: Dashboard, Stores, TPNs, Fees & Taxes, Transactions.

import {
  SidebarFrame,
  type SidebarNavItem,
} from "@/components/shared/SidebarFrame";
import {
  DashboardIcon,
  FeesIcon,
  StoreIcon,
  TerminalIcon,
  TransactionsIcon,
} from "@/components/shared/icons";

const items: SidebarNavItem[] = [
  { label: "Dashboard", href: "/admin/dashboard", icon: <DashboardIcon /> },
  { label: "Stores", href: "/admin/stores", icon: <StoreIcon /> },
  { label: "TPNs", href: "/admin/tpns", icon: <TerminalIcon /> },
  { label: "Fees & Taxes", href: "/admin/fees-and-taxes", icon: <FeesIcon /> },
  { label: "Transactions", href: "/admin/transactions", icon: <TransactionsIcon /> },
];

export function Sidebar({
  isMobile,
  open,
  onClose,
}: {
  isMobile: boolean;
  open: boolean;
  onClose: () => void;
}) {
  return (
    <SidebarFrame
      portalName="Super Admin"
      avatarText="BA"
      avatarSub="Brightway Admin"
      items={items}
      isMobile={isMobile}
      open={open}
      onClose={onClose}
    />
  );
}
