import { Notification } from "../../entities";
import { IdParamsQuery, PaginationQuery } from "../common";

export type GetOneNotificationParams = IdParamsQuery;
export type GetOneNotificationQuery = Pick<
  PaginationQuery<Notification>,
  "showFields"
>;

export type GetOneNotificationResponse = {
  notification: Notification;
};
