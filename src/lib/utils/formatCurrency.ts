// PURPOSE: Format a number as a USD currency string for display in tables/cards.
// TODO: Support store-specific locales/currencies if the portal expands beyond USD.

import { CURRENCY, LOCALE } from "@/lib/constants";

export function formatCurrency(
  amount: number,
  currency: string = CURRENCY
): string {
  return new Intl.NumberFormat(LOCALE, {
    style: "currency",
    currency,
  }).format(amount);
}
