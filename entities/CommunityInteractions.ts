import { Extendable } from "../genericTypes";
import { BaseEntity } from "./BaseEntity";
import { Post } from "./Post";

export interface CommunityInteractions extends BaseEntity {
  post: Extendable<Post>;
  impressions: number;
  views: number;
  visitors: number;
  saves: number;
}
