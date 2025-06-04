import { PaginationQuery, PaginationResponse } from "../common";
import { PropertySave } from "../../entities";

export type FindAllPropertySavesRequestQuery = PaginationQuery<PropertySave>;
export type FindAllPropertySavesResponse = PaginationResponse<PropertySave>;
