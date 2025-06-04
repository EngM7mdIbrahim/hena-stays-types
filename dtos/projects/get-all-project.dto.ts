import { BooleanString, PaginationQuery, PaginationResponse } from "../common";
import { Project, ProjectInteractions } from "../../entities";

export type GetAllProjectsQuery = PaginationQuery<Project> & {
  mine?: BooleanString;
  projectInteraction?: ProjectInteractions;
};

export type GetAllProjectsResponse = PaginationResponse<Project>;
