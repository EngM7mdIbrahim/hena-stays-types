import { PropertySave } from "../../entities";
import { Nullable } from "../../genericTypes";
import { IdParamsQuery, PaginationQuery } from "../common";

export type FindPropertySaveRequest = IdParamsQuery;
export type FindPropertySaveQuery = Pick<
  PaginationQuery<PropertySave>,
  "showFields"
>;

export type FindPropertySaveResponse = {
  save: Nullable<PropertySave>;
};
