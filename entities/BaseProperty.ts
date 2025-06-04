import { Location } from "./Location";
import { Category } from "./Category";
import { SubCategory } from "./SubCategory";
import { Extendable } from "../genericTypes";
import {
  PropertyStatusEnumType,
  SaleTypeEnumType,
  CompletionEnumType,
} from "../enums";
import { User } from "./User";
import { Amenity } from "./Amenity";
import { BaseEntity } from "./BaseEntity";
export interface BaseProperty extends BaseEntity {
  status: PropertyStatusEnumType;
  type: SaleTypeEnumType;
  completion: CompletionEnumType;
  location?: Location;
  totalRooms?: number;
  floors?: number;
  floorNumber?: number;
  amenities?: {
    basic: Extendable<Amenity>[];
    other: string[];
  };
  category?: Extendable<Category>;
  subCategory?: Extendable<SubCategory>;
  createdBy: Extendable<User>;
  reasonDelete?: string;
}
