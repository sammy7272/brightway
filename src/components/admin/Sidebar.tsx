"use client";

// PURPOSE: Store-owner (admin) navigation sidebar, scoped to the owner's store.
// Links: Dashboard, Transactions, Deposits, Reports.

import {
  SidebarFrame,
  type SidebarNavItem,
} from "@/components/shared/SidebarFrame";
import {
  DashboardIcon,
  DepositsIcon,
  ReportsIcon,
  TransactionsIcon,
} from "@/components/shared/icons";

const items: SidebarNavItem[] = [
  { label: "Dashboard", href: "/store/dashboard", icon: <DashboardIcon /> },
  { label: "Transactions", href: "/store/transactions", icon: <TransactionsIcon /> },
  { label: "Deposits", href: "/store/deposits", icon: <DepositsIcon /> },
  { label: "Reports", href: "/store/reports", icon: <ReportsIcon /> },
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
      portalName="Store Admin"
      avatarText="YR"
      avatarSub="Samyan Ahmed"
      items={items}
      isMobile={isMobile}
      open={open}
      onClose={onClose}
    />
  );
}
