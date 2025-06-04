import { PaginationQuery, PaginationResponse } from "../common";
import { Post } from "../../entities/Post";

export type FindAllPostsRequestQuery = PaginationQuery<Post> & {
  mine?: string;
};
export type FindAllPostsResponse = PaginationResponse<
  Post & {
    isLikedByMe?: boolean;
    isSavedByMe?: boolean;
    isFollowedByMe?: boolean;
  }
>;
