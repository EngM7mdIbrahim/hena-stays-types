import { PaginationQuery, PaginationResponse } from "../common";
import { Interactions, Location, Property } from "../../entities";
import { AtLeastOne } from "../../genericTypes";

export type GetAllPropertiesQuery = PaginationQuery<Property> & {
  mine?: string;
  savedByMe?: string;

  startLocation?: AtLeastOne<
    Omit<Location, "type" | "coordinates"> & {
      lat: number;
      lng: number;
    }
  >;
  endLocation?: {
    lat: number;
    lng: number;
  };
};

export type GetAllPropertiesResponse = PaginationResponse<
  Property & {
    isSavedByMe?: boolean;
    interaction?: Interactions;
  }
>;
