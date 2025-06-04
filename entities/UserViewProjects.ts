import { BaseEntity } from "./BaseEntity";

export interface UserViewProjects extends BaseEntity {
  user: string;
  project: string;
  views: number;
}
