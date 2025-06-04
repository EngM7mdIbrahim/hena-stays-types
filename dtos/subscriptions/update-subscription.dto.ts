import { Subscriptions } from "../../entities";
import { IdParamsQuery } from "../common";

export type UpdateSubscriptionRequestBody = {
  credits: number;
};

export type UpdateSubscriptionResponseBody = {
  subscription: Subscriptions;
};

export type UpdateSubscriptionRequestParams = IdParamsQuery;
