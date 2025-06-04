import { LocationTypes } from "../enums";

export type LocationType = (typeof LocationTypes)[keyof typeof LocationTypes];
export interface Location {
  address: string;
  name: string;
  street: string;
  neighborhoods: string;
  country: string;
  state: string;
  city: string;
  coordinates: number[];
  type?: LocationType;
}
