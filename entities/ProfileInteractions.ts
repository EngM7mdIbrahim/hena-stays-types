import { BaseEntity } from "./BaseEntity";

export interface ProfileInteractions extends BaseEntity {
  user: string;
  views: number;
  visitors: number;
}
