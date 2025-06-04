import { User } from "../../entities/User";
import { IdParamsQuery, PaginationQuery } from "../common";
export type GetUserCommunityProfileRequestParams = IdParamsQuery;
export type GetUserCommunityProfileRequestQuery = Pick<
  PaginationQuery<User>,
  "showFields"
>;

export type GetUserCommunityProfileResponse = {
  user: User;
  totalFollowers: number;
  totalFollowing: number;
};
