import { Notification } from "../../entities";
import { IdParamsQuery } from "../common";

export type DeleteNotificationRequestParams = IdParamsQuery;

export type DeleteNotificationResponse = {
  notification: Notification;
};
