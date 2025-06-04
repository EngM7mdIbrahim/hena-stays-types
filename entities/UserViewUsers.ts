import { BaseEntity } from "./BaseEntity";
import { Extendable } from "../genericTypes";
import { User } from "./User";
export interface UserViewUsers extends BaseEntity {
  userViewed: Extendable<User>;
  user: Extendable<User>;
  views: number;
}
