import { Amenity } from "../../entities";

export type AddAmenityRequest = Omit<Amenity, "_id" | "createdAt">;

export type AddAmenityResponse = {
  amenity: Amenity;
};
