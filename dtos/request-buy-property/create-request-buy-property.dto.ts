import { RequestBuyProperty } from "../../entities";

export type CreateRequestBuyPropertyRequestBody = Omit<
  RequestBuyProperty,
  "createdAt" | "_id" | "createdBy" | "status"
>;
export type CreateRequestBuyPropertyResponse = {
  requestBuyProperty: RequestBuyProperty;
};
