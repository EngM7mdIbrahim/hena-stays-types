import { RequestSellProperty } from "../../entities";
import { IdParamsQuery } from "../common";

export type UpdateRequestSellPropertyRequestParams = IdParamsQuery;
export type UpdateRequestSellPropertyRequestBody = Partial<RequestSellProperty>;

export type UpdateRequestSellPropertyResponse = {
  requestSellProperty: RequestSellProperty;
};
