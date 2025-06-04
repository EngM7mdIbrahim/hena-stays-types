import { SubCategory } from "../../entities";

export type CreateSubCategoryRequest = Omit<SubCategory, "category"> & {
  category: string;
};

export type CreateSubCategoryResponse = {
  subCategory: SubCategory;
};
