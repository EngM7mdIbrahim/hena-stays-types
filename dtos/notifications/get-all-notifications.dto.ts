import { PaginationQuery, PaginationResponse } from "../common";
import { Notification } from "../../entities";
export type GetAllNotificationsQuery = PaginationQuery<Notification>;
export type GetAllNotificationsResponse = PaginationResponse<Notification>;
