import { IdParamsQuery, PaginationQuery } from "../common";
import { SubCategory } from "../../entities";

export type GetOneSubCategoryRequestParams = IdParamsQuery;
export type GetOneSubCategoryRequestQuery = Pick<
  PaginationQuery<SubCategory>,
  "showFields"
>;

export type GetOneSubCategoryResponse = {
  subCategory: SubCategory;
};
