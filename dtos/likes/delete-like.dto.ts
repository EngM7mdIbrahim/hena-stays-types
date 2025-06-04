import { Like } from "../../entities";
import { IdParamsQuery } from "../common";
import { FindPostResponse } from "../posts";

export type DeleteLikeRequest = Partial<IdParamsQuery>;

export type DeleteLikeResponse = {
  like: Omit<Like, "post"> & {
    post?: FindPostResponse["post"];
  };
};
