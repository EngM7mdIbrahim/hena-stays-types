import { User } from "../../entities";
import { IdParamsQuery, PaginationQuery } from "../common";
export type GetOneUserParams = IdParamsQuery;

export type GetOneUserQuery = Pick<PaginationQuery<User>, "showFields">;

export type GetOneUserResponse = {
  user: User;
};
