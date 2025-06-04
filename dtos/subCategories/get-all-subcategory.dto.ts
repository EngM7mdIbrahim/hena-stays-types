import { PaginationQuery, PaginationResponse } from "../common";
import { SubCategory } from "../../entities";

export type GetAllSubCategoriesQuery = PaginationQuery<SubCategory>;

export type GetAllSubCategoriesResponse = PaginationResponse<SubCategory>;
