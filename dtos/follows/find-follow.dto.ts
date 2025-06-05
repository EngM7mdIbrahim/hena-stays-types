import { IdParamsQuery } from "../../dtos/common";
import { Follow } from "../../entities/Follow";
import { Nullable } from "../../genericTypes";

export type FindFollowRequest = IdParamsQuery;
export type FindFollowResponse = {
  follow: Nullable<Follow>;
};
