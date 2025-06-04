import { Amenity } from "../../entities";
import { IdParamsQuery } from "../common";

export type UpdateAmenityRequestParams = IdParamsQuery;

export type UpdateAmenityRequestBody = Partial<Amenity>;

export type UpdateAmenityResponse = {
  amenity: Amenity;
};
