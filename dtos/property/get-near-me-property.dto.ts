import { Property } from "../../entities";
import { PaginationQuery, PaginationResponse } from "../common";
export type GetNearMeQuery = PaginationQuery<Property> & {
  latlng: string;
  rad: string;
  savedByMe?: string;
};

export type GetNearMeResponse = PaginationResponse<Property>;
