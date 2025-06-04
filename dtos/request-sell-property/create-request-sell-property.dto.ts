import { RequestSellProperty } from "../../entities";

export type CreateRequestSellPropertyRequestBody = Omit<
  RequestSellProperty,
  "createdAt" | "_id" | "createdBy"
>;
export type CreateRequestSellPropertyResponse = {
  requestSellProperty: RequestSellProperty;
};
