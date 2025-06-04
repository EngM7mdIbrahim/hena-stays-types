import { Extendable, ValueRange } from "../genericTypes";
import { Category } from "./Category";
import { SubCategory } from "./SubCategory";

export interface Units {
  category: Extendable<Category>;
  subCategory: Extendable<SubCategory>;
  area: ValueRange<number>;
  price: ValueRange<number>;
}
