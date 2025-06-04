import { Media, Project } from "../../entities";

export type CreateProjectRequestBody = Omit<
  Project,
  | "_id"
  | "createdAt"
  | "owner"
  | "company"
  | "units"
  | "recommended"
  | "startingPrice"
>;
export type CreateProjectResponse = {
  project: Project;
};
