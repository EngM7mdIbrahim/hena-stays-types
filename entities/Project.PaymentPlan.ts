import { ProjectFullPrice } from "./Project.FullPrice";
import { ProjectCompletion } from "./Project.Completion";
import { Nullable } from "../genericTypes";

export interface ProjectPaymentPlan {
  downPaymentPercentage: number;
  fullPrice: Nullable<ProjectFullPrice>;
  projectCompletion: ProjectCompletion[];
  onHandOverPercentage: number;
  postHandOverPercentage: number;
}
