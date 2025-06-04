import { BaseEntity } from "./BaseEntity";
import { Extendable } from "../genericTypes";
import { User } from "./User";
export interface Subscriptions extends BaseEntity {
  user: Extendable<User>;
  credits: number;
}
