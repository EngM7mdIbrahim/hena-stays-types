import { RequestBuyProperty } from "../../entities";
import { IdParamsQuery } from "../common";

export type DeleteRequestBuyPropertyRequestParams = IdParamsQuery;

export type DeleteRequestBuyPropertyResponse = {
  requestBuyProperty: RequestBuyProperty;
};
