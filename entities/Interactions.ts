import { BaseEntity } from "./BaseEntity";

export interface Interactions extends BaseEntity {
  property: string;
  visitors: number;
  leadClicks: {
    whatsapp: number;
    phone: number;
    email: number;
    chat: number;
  };
  impressions: number;
  saves: number;
  views: number;
}
