import { Location } from "../../entities";
import { SearchQuery } from "../common";

export type SearchPlaceRequestQuery = SearchQuery;

export type SearchPlaceResponse = {
  places: Location[];
};
