import { PaginationQuery, PaginationResponse } from "../common";
import { Post, PostSave } from "../../entities";

export type FindAllPostSavesRequestQuery = PaginationQuery<PostSave>;
export type FindAllPostSavesResponse = PaginationResponse<
  Post & { isLikedByMe: boolean; isFollowedByMe: boolean }
>;
