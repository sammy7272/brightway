"use client";

// PURPOSE: App shell for an authenticated portal — applies the per-portal theme,
// renders the sidebar + sticky topbar (title, portal switch, notifications,
// user), and hosts the routed page content. Used by both portal layouts.

import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState, type CSSProperties } from "react";
import { Sidebar as SuperSidebar } from "@/components/super-admin/Sidebar";
import { Sidebar as StoreSidebar } from "@/components/admin/Sidebar";
import { BellIcon, ChevronDownIcon, MenuIcon, SwitchIcon } from "./icons";
import { THEME, type Portal } from "@/lib/ui";

const TITLES: Record<Portal, Record<string, string>> = {
  super: {
    "/admin/dashboard": "Dashboard",
    "/admin/stores": "Stores Management",
    "/admin/tpns": "TPNs",
    "/admin/fees-and-taxes": "Fees & Taxes",
    "/admin/transactions": "Transactions",
  },
  store: {
    "/store/dashboard": "Dashboard",
    "/store/transactions": "Transactions",
    "/store/deposits": "Deposits",
    "/store/reports": "Reports",
  },
};

const IDENTITY: Record<
  Portal,
  { eyebrow: string; avatarText: string; avatarSub: string; avatarEmail: string; switchLabel: string; switchHref: string }
> = {
  super: {
    eyebrow: "Brightway · Internal",
    avatarText: "BA",
    avatarSub: "Brightway Admin",
    avatarEmail: "admin@brightway.com",
    switchLabel: "View Store Portal",
    switchHref: "/store/dashboard",
  },
  store: {
    eyebrow: "Al-Noor Mart · Store Portal",
    avatarText: "YR",
    avatarSub: "Samyan Ahmed",
    avatarEmail: "owner@alnoormart.com",
    switchLabel: "View Admin Portal",
    switchHref: "/admin/dashboard",
  },
};

export function PortalShell({
  portal,
  children,
}: {
  portal: Portal;
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const router = useRouter();
  const [isMobile, setIsMobile] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);

  useEffect(() => {
    const onResize = () => setIsMobile(window.innerWidth < 900);
    onResize();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const id = IDENTITY[portal];
  const title = TITLES[portal][pathname] ?? "Dashboard";

  const rootStyle: CSSProperties = {
    ...(THEME[portal] as CSSProperties),
    minHeight: "100vh",
    fontFamily: "'IBM Plex Sans',system-ui,sans-serif",
    color: "var(--text)",
    background: "var(--page-bg)",
    display: !isMobile ? "flex" : "block",
  };

  const topbarStyle: CSSProperties = {
    display: "flex",
    alignItems: "center",
    gap: "12px",
    padding: "0 clamp(14px,3vw,24px)",
    height: "66px",
    background: "var(--header-grad)",
    position: "sticky",
    top: 0,
    zIndex: 30,
    boxShadow: "0 6px 22px -14px rgba(84,8,99,.55)",
  };

  const contentStyle: CSSProperties = {
    padding: isMobile ? "18px 15px 44px" : "26px clamp(18px,3vw,30px) 52px",
    display: "flex",
    flexDirection: "column",
    gap: "20px",
    flex: 1,
  };

  const SidebarCmp = portal === "super" ? SuperSidebar : StoreSidebar;

  return (
    <div style={rootStyle}>
      {isMobile && drawerOpen && (
        <div
          onClick={() => setDrawerOpen(false)}
          style={{ position: "fixed", inset: 0, background: "rgba(8,16,20,.48)", zIndex: 55 }}
        />
      )}

      <SidebarCmp isMobile={isMobile} open={drawerOpen} onClose={() => setDrawerOpen(false)} />

      <main style={{ flex: 1, minWidth: 0, display: "flex", flexDirection: "column", minHeight: "100vh" }}>
        <header style={topbarStyle}>
          {isMobile && (
            <button
              onClick={() => setDrawerOpen((v) => !v)}
              style={{ width: "38px", height: "38px", borderRadius: "9px", border: "1px solid rgba(255,255,255,.28)", background: "rgba(255,255,255,.14)", color: "#fff", display: "grid", placeItems: "center", cursor: "pointer", flex: "0 0 auto" }}
            >
              <MenuIcon />
            </button>
          )}
          <div style={{ minWidth: 0 }}>
            <div style={{ font: "600 11px 'IBM Plex Sans',sans-serif", letterSpacing: ".05em", textTransform: "uppercase", color: "rgba(255,255,255,.72)" }}>
              {id.eyebrow}
            </div>
            <h2 style={{ margin: "1px 0 0", font: "700 18px 'IBM Plex Sans',sans-serif", letterSpacing: "-.01em", color: "#fff" }}>
              {title}
            </h2>
          </div>
          <div style={{ marginLeft: "auto", display: "flex", alignItems: "center", gap: "10px" }}>
            <button
              onClick={() => router.push(id.switchHref)}
              style={{ display: "flex", alignItems: "center", gap: "7px", padding: "8px 12px", borderRadius: "9px", border: "1px solid rgba(255,255,255,.28)", background: "rgba(255,255,255,.13)", color: "#fff", font: "600 12.5px 'IBM Plex Sans',sans-serif", cursor: "pointer", whiteSpace: "nowrap" }}
            >
              <SwitchIcon />
              <span>{id.switchLabel}</span>
            </button>
            <button style={{ position: "relative", width: "40px", height: "40px", borderRadius: "11px", border: "1px solid rgba(255,255,255,.24)", background: "rgba(255,255,255,.13)", color: "#fff", display: "grid", placeItems: "center", cursor: "pointer", flex: "0 0 auto" }}>
              <BellIcon width={19} height={19} />
              <span style={{ position: "absolute", top: "8px", right: "9px", width: "8px", height: "8px", borderRadius: "999px", background: "#FF5D8F", border: "2px solid #fff" }} />
            </button>
            {!isMobile ? (
              <div style={{ display: "flex", alignItems: "center", gap: "9px", padding: "5px 11px 5px 6px", borderRadius: "12px", background: "rgba(255,255,255,.14)", border: "1px solid rgba(255,255,255,.2)" }}>
                <div style={{ width: "34px", height: "34px", borderRadius: "9px", background: "#fff", color: "var(--accent)", display: "grid", placeItems: "center", font: "700 13px 'IBM Plex Sans',sans-serif", flex: "0 0 auto" }}>
                  {id.avatarText}
                </div>
                <div style={{ minWidth: 0, lineHeight: 1.2 }}>
                  <div style={{ font: "600 13px 'IBM Plex Sans',sans-serif", color: "#fff", whiteSpace: "nowrap" }}>{id.avatarSub}</div>
                  <div style={{ font: "400 11px 'IBM Plex Sans',sans-serif", color: "rgba(255,255,255,.72)", whiteSpace: "nowrap" }}>{id.avatarEmail}</div>
                </div>
                <ChevronDownIcon stroke="rgba(255,255,255,.82)" style={{ flex: "0 0 auto" }} />
              </div>
            ) : (
              <div style={{ width: "38px", height: "38px", borderRadius: "10px", background: "#fff", color: "var(--accent)", display: "grid", placeItems: "center", font: "700 13px 'IBM Plex Sans',sans-serif", flex: "0 0 auto" }}>
                {id.avatarText}
              </div>
            )}
          </div>
        </header>

        <div style={contentStyle}>{children}</div>
      </main>
    </div>
  );
}
