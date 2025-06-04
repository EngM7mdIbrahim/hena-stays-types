import { Location } from "../../entities";

export type PlaceDetailsRequestQuery = {
  lat: string; // should be number but written string due to qs
  lng: string; // number but written string due to qs
};

export type PlaceDetailsResponse = {
  place: Location;
};
