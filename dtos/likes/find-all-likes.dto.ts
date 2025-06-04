import { PaginationQuery, PaginationResponse } from "../common";
import { Like } from "../../entities/Like";
import { FindPostResponse } from "../posts";

export type FindAllLikesRequestQuery = PaginationQuery<Like>;
export type FindAllLikesResponse = PaginationResponse<
  Omit<Like, "post"> & {
    post?: FindPostResponse["post"];
  }
>;
