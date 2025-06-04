export const PriceDurations = {
  Yearly: "Yearly",
  Monthly: "Monthly",
  Weekly: "Weekly",
  Daily: "Daily",
} as const;

export type PriceDuration =
  (typeof PriceDurations)[keyof typeof PriceDurations];
