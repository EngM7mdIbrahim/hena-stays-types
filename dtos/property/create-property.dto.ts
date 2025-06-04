import { Media, Property } from "../../entities";

export type CreatePropertyRequestBody = Omit<
  Property,
  "_id" | "createdAt" | "createdBy"
>;
export type CreatePropertyResponse = {
  property: Property;
};
