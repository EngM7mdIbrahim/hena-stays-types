import { PaginationQuery, PaginationResponse } from "../common";
import { Category } from "../../entities";
export type GetAllCategoryQuery = PaginationQuery<Category>;

export type GetAllCategoryResponse = PaginationResponse<Category>;
