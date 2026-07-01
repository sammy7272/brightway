// PURPOSE: Deposit / fee calculation engine.
// Confirmed formula (proposal): net deposit = total volume - [ (feeRate * volume)
//   + (flatFee * transactionCount) ].
// TODO: Wire flatFee from the Store model once it is added, and pull real
//   transaction data from Supabase instead of dummy data.

export interface FeeBreakdown {
  grossAmount: number;
  percentageFee: number;
  flatFeeTotal: number;
  feeDeducted: number;
  netDeposited: number;
}

export function calculateFees(
  grossAmount: number,
  feeRate: number,
  transactionCount = 0,
  flatFee = 0
): FeeBreakdown {
  const percentageFee = grossAmount * feeRate;
  const flatFeeTotal = flatFee * transactionCount;
  const feeDeducted = percentageFee + flatFeeTotal;
  const netDeposited = grossAmount - feeDeducted;

  return { grossAmount, percentageFee, flatFeeTotal, feeDeducted, netDeposited };
}
