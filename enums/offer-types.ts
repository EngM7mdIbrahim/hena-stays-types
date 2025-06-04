export const OfferTypes = {
  Sale: "Sale",
  Rent: "Rent",
} as const;
export type OfferType = (typeof OfferTypes)[keyof typeof OfferTypes];
