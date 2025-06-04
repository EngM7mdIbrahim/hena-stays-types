import { Project } from "../../entities";
import { IdParamsQuery } from "../common";

export type DeleteProjectRequestParams = IdParamsQuery;

export type DeleteProjectResponse = {
  project: Project;
};
