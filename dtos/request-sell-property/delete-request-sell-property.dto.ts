import { RequestSellProperty } from "../../entities";
import { IdParamsQuery } from "../common";

export type DeleteRequestSellPropertyRequestParams = IdParamsQuery;

export type DeleteRequestSellPropertyResponse = {
  requestSellProperty: RequestSellProperty;
};
