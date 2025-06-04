import { User } from "../../entities";
import { PaginationQuery } from "../common";

export * from "./get-properties-analytics.dto";
export * from "./get-user-analytics.dto";
export * from "./get-latest-comments.dto";
export * from "./get-community-analytics.dto";
export type GetAnalyticsQuery = Pick<
  PaginationQuery<Pick<User, "_id">>,
  "filter"
>;
