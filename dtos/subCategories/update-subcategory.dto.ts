import { SubCategory } from "../../entities";
import { IdParamsQuery } from "../common";

export type UpdateSubCategoryRequest = Pick<SubCategory, "name"> & {
  category: string;
};

export type UpdateSubCategoryRequestParams = IdParamsQuery;

export type UpdateSubCategoryResponse = {
  subCategory: SubCategory;
};
