import { CreditsRequest } from "../../entities";
import { IdParamsQuery, PaginationQuery } from "../common";

export type GetCreditRequestParam = IdParamsQuery;
export type GetCreditRequestQuery = Pick<
  PaginationQuery<CreditsRequest>,
  "showFields"
>;
export type GetCreditRequestResponse = {
  creditsRequest: CreditsRequest;
};
