export const CompletionTypes = {
  Ready: "Ready",
  OffPlan: "Off-Plan",
} as const;
export type CompletionType =
  (typeof CompletionTypes)[keyof typeof CompletionTypes];
