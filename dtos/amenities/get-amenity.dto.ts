import { Amenity } from "../../entities";
import { IdParamsQuery } from "../common";

export type GetAmenityRequestParams = IdParamsQuery;

export type GetAmenityResponse = {
  amenity: Amenity;
};
