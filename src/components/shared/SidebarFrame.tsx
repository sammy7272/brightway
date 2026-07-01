"use client";

// PURPOSE: Shared sidebar chrome (logo, nav list, user footer, sign-out) used by
// both the super-admin and store Sidebar components. Active state is derived from
// the current pathname; navigation uses the Next.js router.

import { usePathname, useRouter } from "next/navigation";
import type { CSSProperties, ReactNode } from "react";
import { LogoMark, LogoutIcon } from "./icons";

export interface SidebarNavItem {
  label: string;
  href: string;
  icon: ReactNode;
}

export interface SidebarFrameProps {
  portalName: string;
  avatarText: string;
  avatarSub: string;
  items: SidebarNavItem[];
  isMobile: boolean;
  open: boolean;
  onClose: () => void;
}

const navBase: CSSProperties = {
  display: "flex",
  alignItems: "center",
  gap: "12px",
  width: "100%",
  padding: "11px 13px",
  border: "none",
  borderRadius: "10px",
  background: "transparent",
  color: "var(--sidebar-muted)",
  font: "500 14px 'IBM Plex Sans',sans-serif",
  cursor: "pointer",
  textAlign: "left",
};

const navActive: CSSProperties = {
  background: "var(--active-bg)",
  color: "#fff",
  boxShadow: "inset 3px 0 0 0 var(--highlight)",
};

export function SidebarFrame({
  portalName,
  avatarText,
  avatarSub,
  items,
  isMobile,
  open,
  onClose,
}: SidebarFrameProps) {
  const pathname = usePathname();
  const router = useRouter();

  const sidebarBase: CSSProperties = {
    background: "var(--sidebar)",
    color: "var(--sidebar-text)",
    display: "flex",
    flexDirection: "column",
    padding: "18px 14px 16px",
    gap: "2px",
  };

  const sidebarStyle: CSSProperties = isMobile
    ? {
        ...sidebarBase,
        position: "fixed",
        top: 0,
        left: 0,
        bottom: 0,
        width: "270px",
        zIndex: 60,
        transform: open ? "translateX(0)" : "translateX(-100%)",
        transition: "transform .25s ease",
        boxShadow: open ? "0 0 50px rgba(0,0,0,.45)" : "none",
        overflowY: "auto",
      }
    : {
        ...sidebarBase,
        width: "252px",
        flex: "0 0 252px",
        height: "100vh",
        position: "sticky",
        top: 0,
      };

  const navigate = (href: string) => {
    router.push(href);
    onClose();
  };

  return (
    <aside style={sidebarStyle}>
      <div style={{ display: "flex", alignItems: "center", gap: "11px", padding: "6px 8px 4px" }}>
        <LogoMark size={34} />
        <div style={{ minWidth: 0 }}>
          <div style={{ font: "700 16px 'IBM Plex Sans',sans-serif", color: "#fff", letterSpacing: "-.01em", lineHeight: 1.1 }}>
            Brightway
          </div>
          <div style={{ font: "600 11px 'IBM Plex Sans',sans-serif", color: "var(--highlight)", letterSpacing: ".04em" }}>
            {portalName}
          </div>
        </div>
      </div>

      <div style={{ font: "600 10.5px 'IBM Plex Sans',sans-serif", letterSpacing: ".09em", textTransform: "uppercase", color: "var(--sidebar-muted)", padding: "16px 10px 8px" }}>
        Menu
      </div>

      <nav style={{ display: "flex", flexDirection: "column", gap: "3px", flex: 1 }}>
        {items.map((item) => {
          const active = pathname === item.href;
          return (
            <button
              key={item.href}
              onClick={() => navigate(item.href)}
              style={{ ...navBase, ...(active ? navActive : {}) }}
            >
              {item.icon}
              <span>{item.label}</span>
            </button>
          );
        })}
      </nav>

      <div style={{ marginTop: "auto", paddingTop: "12px", borderTop: "1px solid rgba(255,255,255,.09)", display: "flex", flexDirection: "column", gap: "6px" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "10px", padding: "6px 8px" }}>
          <div style={{ width: "34px", height: "34px", borderRadius: "9px", background: "rgba(255,255,255,.1)", color: "#fff", display: "grid", placeItems: "center", font: "700 12px 'IBM Plex Sans',sans-serif", flex: "0 0 auto" }}>
            {avatarText}
          </div>
          <div style={{ minWidth: 0 }}>
            <div style={{ font: "600 13px 'IBM Plex Sans',sans-serif", color: "#fff", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
              {avatarSub}
            </div>
            <div style={{ font: "400 11.5px 'IBM Plex Sans',sans-serif", color: "var(--sidebar-muted)" }}>{portalName}</div>
          </div>
        </div>
        <button
          onClick={() => router.push("/login")}
          style={{ display: "flex", alignItems: "center", gap: "12px", width: "100%", padding: "11px 13px", border: "none", borderRadius: "10px", background: "transparent", color: "var(--sidebar-muted)", font: "500 14px 'IBM Plex Sans',sans-serif", cursor: "pointer", textAlign: "left" }}
        >
          <LogoutIcon />
          <span>Sign out</span>
        </button>
      </div>
    </aside>
  );
}
