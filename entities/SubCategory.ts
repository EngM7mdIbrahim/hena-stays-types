import { Category } from "./Category";
import { Extendable } from "../genericTypes";
import { BaseEntity } from "./BaseEntity";

export interface SubCategory extends BaseEntity {
  name: string;
  category: Extendable<Category>;
  code: string;
  sortOrder: number;
}
