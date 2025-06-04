import { Category } from "../../entities";
import { IdParamsQuery } from "../common";

export type DeleteCategoryParams = IdParamsQuery;

export type DeleteCategoryResponse = {
  category: Category;
};
