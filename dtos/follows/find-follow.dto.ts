import { IdParamsQuery } from "@commonTypes";
import { Follow } from "../../entities";
import { Nullable } from "../../genericTypes";

export type FindFollowRequest = IdParamsQuery;
export type FindFollowResponse = {
  follow: Nullable<Follow>;
};
