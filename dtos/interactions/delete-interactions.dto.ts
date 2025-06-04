import { Interactions } from "../../entities";
import { IdParamsQuery } from "../common";

export type DeleteInteractionsRequestParams = IdParamsQuery;

export type DeleteInteractionsResponse = {
  interaction: Interactions;
};
