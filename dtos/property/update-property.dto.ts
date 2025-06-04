import { Property } from "../../entities";
import { IdParamsQuery } from "../common";
export type UpdatePropertyRequestBody = Partial<Property>;
export type UpdatePropertyRequestParams = IdParamsQuery;
export type UpdatePropertyResponse = {
  property: Property;
};
