import { Amenity } from "../../entities";
import { IdParamsQuery } from "../common";

export type DeleteAmenityRequestParams = IdParamsQuery;

export type DeleteAmenityResponse = {
  amenity: Amenity;
};
