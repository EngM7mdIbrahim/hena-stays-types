import { IdParamsQuery, PaginationQuery } from "../common";
import { Interactions } from "../../entities";

export type GetOneInteractionsRequestParams = IdParamsQuery;
export type GetOneInteractionsRequestQuery = Pick<
  PaginationQuery<Interactions>,
  "showFields"
>;

export type GetOneInteractionsResponse = {
  interaction: Interactions;
};
