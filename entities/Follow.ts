import { Extendable } from "../genericTypes";
import { BaseEntity } from "./BaseEntity";
import { User } from "./User";

export interface Follow extends BaseEntity {
  follower: Extendable<User>;
  following: Extendable<User>;
  createdAt: Date;
}
