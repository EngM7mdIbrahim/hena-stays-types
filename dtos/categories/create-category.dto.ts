import { Category } from "../../entities";

export type CreateCategoryRequest = Pick<Category, "name" | "code">;

export type CreateCategoryResponse = {
  category: Category;
};
