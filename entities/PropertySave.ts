import { Extendable } from "../genericTypes";
import { BaseEntity } from "./BaseEntity";
import { Property } from "./Property";
import { User } from "./User";

export interface PropertySave extends BaseEntity {
  property: Extendable<Property>;
  user: Extendable<User>;
  createdAt: Date;
  isSavedByMe?: boolean;
}
