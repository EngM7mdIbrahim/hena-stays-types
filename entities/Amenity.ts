import { BaseEntity } from "./BaseEntity";

export interface Amenity extends BaseEntity {
  name: string;
  image: string;
  code: string;
}
