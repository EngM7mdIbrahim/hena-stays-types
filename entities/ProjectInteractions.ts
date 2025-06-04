import { BaseEntity } from "./BaseEntity";

export interface ProjectInteractions extends BaseEntity {
  project: string;
  visitors: number;
  impressions: number;
  views: number;
}
