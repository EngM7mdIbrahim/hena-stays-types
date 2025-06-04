import { Subscriptions } from "../../entities";
import { IdParamsQuery } from "../common";

export type GetOneSubscriptionRequestParams = IdParamsQuery;

export type GetOneSubscriptionResponseBody = {
  subscription: Subscriptions;
};
