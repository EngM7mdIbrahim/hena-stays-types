import { NotificationType } from "../enums";
import { Extendable } from "../genericTypes";
import { BaseEntity } from "./BaseEntity";
import { User } from "./User";
import { NotificationToPayloadMap } from "../maps/notifcation-to-payload-map";

export interface Notification<
  T extends keyof NotificationToPayloadMap = NotificationType,
> extends BaseEntity {
  user: Extendable<User>;
  body?: string;
  type: T;
  title: string;
  image?: string;
  read: boolean;
  payload: NotificationToPayloadMap[T];
}
