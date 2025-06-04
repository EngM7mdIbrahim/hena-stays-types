import { User } from "../../entities";
import { PaginationQuery } from "../common";

export type GetTopPerformersQuery = Pick<PaginationQuery<User>, "limit">;
export type GetTopPerformersResponse = {
  topCompanies: {
    user: User;
    totalImpressions: number;
  }[];
  topAgents: {
    user: User;
    totalImpressions: number;
  }[];
};
