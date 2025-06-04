import { Property } from "../../entities";
import { IdParamsQuery } from "../common";

export type DeletePropertyRequestParams = IdParamsQuery;
export type DeletePropertyRequestBody = {
  reasonDelete: string;
};

export type DeletePropertyResponse = {
  property: Property;
};
