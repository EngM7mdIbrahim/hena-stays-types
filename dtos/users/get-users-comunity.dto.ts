import { User } from "../../entities/User";
import { PaginationQuery } from "../common";
export type GetUserCommunityResponse = {
  users: User[];
};

export type GetUserCommunityRequestQuery = PaginationQuery<User>;
