import { RequestBuyProperty } from "../../entities";
import { IdParamsQuery, PaginationQuery } from "../common";

export type GetOneRequestBuyPropertyRequestParams = IdParamsQuery;
export type GetOneRequestBuyPropertyQuery = Pick<
  PaginationQuery<RequestBuyProperty>,
  "showFields"
>;

export type GetOneRequestBuyPropertyResponse = {
  requestBuyProperty: RequestBuyProperty;
};
