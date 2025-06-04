import { BaseEntity } from "./BaseEntity";
import { Extendable } from "../genericTypes";
import { Property } from "./Property";
import { User } from "./User";
export interface UserViewProperties extends BaseEntity {
  property: Extendable<Property>;
  user: Extendable<User>;
  views: number;
}
