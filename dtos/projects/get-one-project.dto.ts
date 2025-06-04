import { Project } from "../../entities";
import { BooleanString, IdParamsQuery, PaginationQuery } from "../common";

export type GetOneProjectRequestParams = IdParamsQuery;
export type GetOneProjectQuery = Pick<
  PaginationQuery<Project>,
  "showFields"
> & {
  mine?: BooleanString;
};
export type GetOneProjectResponse = {
  project: Project;
};
