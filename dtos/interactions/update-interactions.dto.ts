import { Interactions } from "../../entities";
import { IdParamsQuery } from "../common";

export type UpdateInteractionsRequest = Omit<Interactions, "_id" | "createdAt">;

export type UpdateInteractionsRequestParams = IdParamsQuery;

export type UpdateInteractionsResponse = {
  interaction: Interactions;
};
