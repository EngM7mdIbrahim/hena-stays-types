import { Amenity } from "../../entities";
import { PaginationQuery, PaginationResponse } from "../common";

export type FindAllAmenitiesRequestQuery = PaginationQuery<Amenity>;
export type FindAllAmenitiesResponse = PaginationResponse<Amenity>;
