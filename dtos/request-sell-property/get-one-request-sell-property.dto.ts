import { RequestSellProperty } from "../../entities";
import { IdParamsQuery, PaginationQuery } from "../common";

export type GetOneRequestSellPropertyRequestParams = IdParamsQuery;
export type GetOneRequestSellPropertyQuery = Pick<
  PaginationQuery<RequestSellProperty>,
  "showFields"
>;

export type GetOneRequestSellPropertyResponse = {
  requestSellProperty: RequestSellProperty;
};
