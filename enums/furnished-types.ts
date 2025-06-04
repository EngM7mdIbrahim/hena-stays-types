export const FurnishedTypes = {
  Furnished: "Furnished",
  NotFurnished: "Not Furnished",
  PartiallyFurnished: "Partially Furnished",
} as const;
export type FurnishedType =
  (typeof FurnishedTypes)[keyof typeof FurnishedTypes];
