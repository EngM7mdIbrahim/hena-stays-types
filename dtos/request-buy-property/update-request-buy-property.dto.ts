import { RequestBuyProperty } from "../../entities";
import { IdParamsQuery } from "../common";

export type UpdateRequestBuyPropertyRequestParams = IdParamsQuery;
export type UpdateRequestBuyPropertyRequestBody = Partial<RequestBuyProperty>;

export type UpdateRequestBuyPropertyResponse = {
  requestBuyProperty: RequestBuyProperty;
};
