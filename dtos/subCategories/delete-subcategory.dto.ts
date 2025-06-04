import { SubCategory } from "../../entities";
import { IdParamsQuery } from "../common";

export type DeleteSubCategoryRequestParams = IdParamsQuery;

export type DeleteSubCategoryResponse = {
  subCategory: SubCategory;
};
