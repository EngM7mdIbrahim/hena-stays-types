import { Like } from "../../entities";
import { Nullable } from "../../genericTypes";
import { IdParamsQuery } from "../common";
import { FindPostResponse } from "../posts";

export type FindLikeRequest = IdParamsQuery;

export type FindLikeResponse = {
  like: Nullable<
    Omit<Like, "post"> & {
      post?: FindPostResponse["post"];
    }
  >;
};
