import { Property } from "./Property";

export interface PropertiesAnalytics {
  totalActiveProperties: number;
  totalInactiveProperties: number;
  totalPerCategory: { _id: string; name: string; count: number }[];
  totalSale: number;
  totalRent: number;
  averageSellingPrice: number;
  averageRentingPriceDaily: number;
  averageRentingPriceMonthly: number;
  averageRentingPriceYearly: number;
}

export interface InteractionsPropertiesAnalytics {
  views: number;
  visitors: number;
  phone: number;
  whatsapp: number;
  email: number;
  chat: number;
  impressions: number;
  saves: number;
}

export interface MostSavedProperties {
  _id: string;
  property: Pick<
    Property,
    | "_id"
    | "title"
    | "status"
    | "price"
    | "media"
    | "toilets"
    | "living"
    | "bedroom"
  >;
  count: number;
}
