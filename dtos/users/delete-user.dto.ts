import { IdParamsQuery } from "../common";
import { User } from "../../entities";

export type DeleteUserRequestParams = IdParamsQuery;

export type DeleteUserResponse = {
  user: User;
};
