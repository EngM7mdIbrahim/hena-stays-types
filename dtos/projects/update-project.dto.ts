import { Project } from "../../entities";
import { IdParamsQuery } from "../common";
export type UpdateProjectRequestBody = Partial<Project>;
export type UpdateProjectRequestParams = IdParamsQuery;
export type UpdateProjectResponse = {
  project: Project;
};
