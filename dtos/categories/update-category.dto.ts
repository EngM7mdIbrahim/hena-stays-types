import { Category } from "../../entities";
import { IdParamsQuery } from "../common";

export type UpdateCategoryRequest = Pick<Category, "name">;

export type UpdateCategoryRequestParams = IdParamsQuery;

export type UpdateCategoryResponse = {
  category: Category;
};
