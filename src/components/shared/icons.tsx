// PURPOSE: Inline SVG icon set reproduced from the Brightway Portal design.
// Kept as small components so sidebars, topbar, and cards can share them.

import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

const base = (size = 20): IconProps => ({
  width: size,
  height: size,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.8,
  strokeLinecap: "round",
  strokeLinejoin: "round",
});

export function DashboardIcon(p: IconProps) {
  return (
    <svg {...base()} {...p}>
      <rect x="3" y="3" width="7.5" height="8.5" rx="1.6" />
      <rect x="13.5" y="3" width="7.5" height="5.5" rx="1.6" />
      <rect x="13.5" y="12" width="7.5" height="9" rx="1.6" />
      <rect x="3" y="15" width="7.5" height="6" rx="1.6" />
    </svg>
  );
}

export function StoreIcon(p: IconProps) {
  return (
    <svg {...base()} {...p}>
      <path d="M4 9.5 L5.2 4.5 H18.8 L20 9.5" />
      <path d="M5.2 9.5 V19.5 H18.8 V9.5" />
      <path d="M9.5 19.5 V14 H14.5 V19.5" />
    </svg>
  );
}

export function TerminalIcon(p: IconProps) {
  return (
    <svg {...base()} {...p}>
      <rect x="2.5" y="5.5" width="19" height="13" rx="2.4" />
      <path d="M2.5 9.5 H21.5" />
      <path d="M6 14.5 H10" />
    </svg>
  );
}

export function FeesIcon(p: IconProps) {
  return (
    <svg {...base()} {...p}>
      <path d="M18.5 5.5 L5.5 18.5" />
      <circle cx="7.5" cy="7.5" r="2.3" />
      <circle cx="16.5" cy="16.5" r="2.3" />
    </svg>
  );
}

export function TransactionsIcon(p: IconProps) {
  return (
    <svg {...base()} {...p}>
      <path d="M8 6 H20" />
      <path d="M8 12 H20" />
      <path d="M8 18 H20" />
      <path d="M4 6 H4.01" />
      <path d="M4 12 H4.01" />
      <path d="M4 18 H4.01" />
    </svg>
  );
}

export function DepositsIcon(p: IconProps) {
  return (
    <svg {...base()} {...p}>
      <rect x="2.5" y="6" width="19" height="12" rx="2.2" />
      <circle cx="12" cy="12" r="2.6" />
      <path d="M5.5 9 H5.51" />
      <path d="M18.5 15 H18.51" />
    </svg>
  );
}

export function ReportsIcon(p: IconProps) {
  return (
    <svg {...base()} {...p} strokeWidth={2.1}>
      <path d="M5 20 V11" />
      <path d="M12 20 V4" />
      <path d="M19 20 V14" />
    </svg>
  );
}

export function LogoutIcon(p: IconProps) {
  return (
    <svg {...base()} {...p}>
      <path d="M14 4 H7 A2.5 2.5 0 0 0 4.5 6.5 V17.5 A2.5 2.5 0 0 0 7 20 H14" />
      <path d="M17.5 8 L21.5 12 L17.5 16" />
      <path d="M21.5 12 H10" />
    </svg>
  );
}

export function MenuIcon(p: IconProps) {
  return (
    <svg {...base()} {...p} strokeWidth={1.9}>
      <path d="M4 7 H20" />
      <path d="M4 12 H20" />
      <path d="M4 17 H20" />
    </svg>
  );
}

export function BellIcon(p: IconProps) {
  return (
    <svg {...base()} {...p}>
      <path d="M6 9 A6 6 0 0 1 18 9 C18 14 20 16 20 16 H4 C4 16 6 14 6 9" />
      <path d="M10 19 A2 2 0 0 0 14 19" />
    </svg>
  );
}

export function SwitchIcon(p: IconProps) {
  return (
    <svg {...base(15)} {...p} strokeWidth={1.9}>
      <path d="M4 8 H17" />
      <path d="M14 5 L17 8 L14 11" />
      <path d="M20 16 H7" />
      <path d="M10 13 L7 16 L10 19" />
    </svg>
  );
}

export function ChevronDownIcon(p: IconProps) {
  return (
    <svg {...base(15)} {...p} strokeWidth={2}>
      <path d="M6 9 L12 15 L18 9" />
    </svg>
  );
}

/** The Brightway checkmark logo mark. */
export function LogoMark({
  size = 34,
  bg = "var(--highlight)",
  fg = "var(--sidebar)",
}: {
  size?: number;
  bg?: string;
  fg?: string;
}) {
  return (
    <svg width={size} height={size} viewBox="0 0 36 36" fill="none">
      <rect width="36" height="36" rx="10" fill={bg} />
      <path
        d="M8 24 L15 15.5 L20.5 20.5 L28 10.5"
        stroke={fg}
        strokeWidth="2.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="28" cy="10.5" r="2.5" fill={fg} />
    </svg>
  );
}
