import { Subscriptions } from "../../entities";
import { PaginationQuery, PaginationResponse } from "../common";

export type GetAllSubscriptionsRequestQuery = PaginationQuery<Subscriptions>;

export type GetAllSubscriptionsResponseBody = PaginationResponse<Subscriptions>;
