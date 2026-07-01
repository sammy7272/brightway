# Brightway Portal

Financial operations web portal — upload the daily Dejavoo CSV, auto-calculate
each store's net deposit, export one NACHA file, and let store owners see their
own data. This repo currently contains the **front-end**, wired to **dummy
data**, ready for the Supabase back-end.

## Tech stack

- **Next.js 15** (App Router) + **React 18** + **TypeScript**
- **Tailwind CSS v3** + **shadcn/ui** primitives (`src/components/ui`)
- **Supabase** (`@supabase/ssr`) — clients are ready; paste keys into `.env.local`
- react-hook-form + zod, recharts, axios, date-fns, lucide-react
- ESLint + Prettier

> Note on versions: the design's file tree specifies both `next.config.ts` and
> `tailwind.config.ts`. `next.config.ts` requires Next 15+ (Next 14 can't use a
> TS config), and `tailwind.config.ts` is a Tailwind v3 file, so the project is
> pinned to Next 15 + Tailwind v3 for a stable, coherent base.

## Getting started

```bash
npm install
# fill in your Supabase keys in .env.local (created with empty values)
npm run dev                  # http://localhost:3000
```

Other scripts: `npm run build`, `npm run start`, `npm run lint`,
`npm run format`.

### Demo login

`/` redirects to `/login`. Use the tap-to-autofill demo credentials:

- **Super Admin** — `admin@brightway.com` → super-admin portal (`/admin/*`)
- **Store Admin** — `owner@alnoormart.com` → store portal (`/store/*`)

Password for both: `demo123`. (Auth is not real yet — login routes by email
pattern. Use the topbar "switch portal" button to jump between the two portals.)

## Routing

Both portals are grouped by App Router **route groups** but served under
distinct URL prefixes so pages never collide:

| Portal            | Route group        | URL prefix | Pages                                            |
| ----------------- | ------------------ | ---------- | ------------------------------------------------ |
| Auth              | `(auth)`           | `/login`   | login                                            |
| Super Admin       | `(super-admin)`    | `/admin`   | dashboard, stores, stores/[storeId], tpns, fees-and-taxes, transactions |
| Store Owner       | `(admin)`          | `/store`   | dashboard, transactions, deposits, reports       |

## Folder structure

```
src/
├── app/                      # App Router routes
│   ├── (auth)/login/         # sign-in screen
│   ├── (super-admin)/admin/  # super-admin portal pages (URL: /admin/*)
│   ├── (admin)/store/        # store-owner portal pages (URL: /store/*)
│   ├── api/                  # route handlers (placeholders returning JSON)
│   ├── layout.tsx            # root layout (fonts, global CSS)
│   ├── page.tsx              # "/" -> redirects to /login
│   └── globals.css           # Tailwind + design tokens + IBM Plex font import
├── components/
│   ├── ui/                   # shadcn/ui primitives (add via: npx shadcn add ...)
│   ├── super-admin/          # Sidebar, StoresTable, TPNsTable, TransactionsTable, FeesForm
│   ├── admin/                # Sidebar, DepositsTable, TransactionsTable, ReportsChart
│   └── shared/               # PortalShell, StatCard, DataTable, StatusBadge, BarChart,
│                             #   Toast, icons, FilterBar, and other cross-portal pieces
├── lib/
│   ├── supabase/             # browser (client.ts) + server (server.ts) Supabase clients
│   ├── dummy-data/           # ALL sample data lives here (stores, transactions, tpns,
│   │                         #   deposits, users, charts, metrics) — never in components
│   ├── utils/                # formatCurrency, formatDate, calculateFees, cn
│   ├── ui.ts                 # shared style tokens/helpers reproducing the design
│   └── constants.ts          # app-wide constants (roles, routes, thresholds)
├── types/                    # domain interfaces (Store, Transaction, TPN, Deposit, User)
├── hooks/                    # useAuth, useStores, useTransactions (dummy-data backed)
└── middleware.ts             # route-protection placeholder (pass-through for now)
```

### Conventions

- **All dummy data lives in `src/lib/dummy-data/`** — components/pages import it,
  never hardcode it. Swap these for Supabase queries (or the `use*` hooks) later.
- The portal screens use inline design tokens from `src/lib/ui.ts` (`THEME`, `S`,
  `badge`, `money`). shadcn/ui + Tailwind remain available for new UI.
- Every file is TypeScript; no `.js` app files.

## Environment variables

Set these in `.env.local` (present with empty values). Required for Supabase:

```
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
SUPABASE_SERVICE_ROLE_KEY=
NEXT_PUBLIC_APP_URL=
```

## Deployment

- **Frontend:** Vercel
- **Backend/API:** Supabase (Railway for any additional services)

## Status / next steps

- [x] Project scaffold, config, dummy data, types
- [x] Full front-end (both portals) on dummy data
- [ ] Real Supabase auth + session middleware
- [ ] CSV upload + TPN matching + deposit engine + NACHA export
- [ ] Replace dummy-data imports with live queries
