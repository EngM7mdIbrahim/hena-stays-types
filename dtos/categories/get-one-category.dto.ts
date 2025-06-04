import { Category } from "../../entities";
import { IdParamsQuery, PaginationQuery } from "../common";

export type GetCategoryParams = IdParamsQuery;
export type GetCategoryQuery = Pick<PaginationQuery<Category>, "showFields">;

export type GetCategoryResponse = {
  category: Category;
};
