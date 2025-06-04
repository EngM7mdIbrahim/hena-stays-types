export const AgeTypeEnum = {
  Days: "Days",
  Weeks: "Weeks",
  Months: "Months",
  Years: "Years",
} as const;
export type AgeTypeEnumType = (typeof AgeTypeEnum)[keyof typeof AgeTypeEnum];

export const PropertyStatusEnum = {
  Active: "Active",
  Inactive: "Inactive",
} as const;
export type PropertyStatusEnumType =
  (typeof PropertyStatusEnum)[keyof typeof PropertyStatusEnum];

export const SaleTypeEnum = {
  Sale: "Sale",
  Rent: "Rent",
} as const;
export type SaleTypeEnumType = (typeof SaleTypeEnum)[keyof typeof SaleTypeEnum];

export const CompletionEnum = {
  OffPlan: "off-plan",
  Ready: "ready",
} as const;
export type CompletionEnumType =
  (typeof CompletionEnum)[keyof typeof CompletionEnum];

export const FurnishedEnum = {
  Unfurnished: "unfurnished",
  PartiallyFurnished: "partially-furnished",
  Furnished: "furnished",
} as const;
export type furnishedEnumType =
  (typeof FurnishedEnum)[keyof typeof FurnishedEnum];

export const RentDurationEnum = {
  Daily: "daily",
  Weekly: "weekly",
  Monthly: "monthly",
  Yearly: "yearly",
} as const;
export type RentDurationEnumType =
  (typeof RentDurationEnum)[keyof typeof RentDurationEnum];

export const MediaTypeEnum = {
  Image: "image",
  Video: "video",
} as const;
export type MediaTypeEnumType =
  (typeof MediaTypeEnum)[keyof typeof MediaTypeEnum];

export const OwnerShipEnum = {
  Individual: "individual",
  Company: "company",
} as const;
export type OwnerShipEnumType =
  (typeof OwnerShipEnum)[keyof typeof OwnerShipEnum];

export const RecommendationTypeEnum = {
  None: "None",
  HotDeal: "Hot Deal",
  Signature: "Signature",
  PropertyOfTheWeek: "Property Of The Week",
} as const;
export type RecommendationTypeEnumType =
  (typeof RecommendationTypeEnum)[keyof typeof RecommendationTypeEnum];

export const RequestTypeEnum = {
  Buy: "BUY",
  Sale: "SALE",
} as const;
export type RequestTypeEnumType =
  (typeof RequestTypeEnum)[keyof typeof RequestTypeEnum];
