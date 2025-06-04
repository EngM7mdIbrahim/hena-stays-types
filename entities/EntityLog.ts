import { EntityActions } from "../enums";
import { Extendable } from "../genericTypes";
import { BaseEntity } from "./BaseEntity";
import { User } from "./User";

export type EntityAction = (typeof EntityActions)[keyof typeof EntityActions];

export interface EntityLog extends BaseEntity {
  entity: string;
  entityId: string;
  action: EntityAction;
  user: Extendable<User>; // The user who performed the action
  message: string;
}
