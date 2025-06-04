import { Post } from "../../entities";
import { Nullable } from "../../genericTypes";
import { IdParamsQuery, PaginationQuery } from "../common";

export type FindPostRequestParams = IdParamsQuery;
export type FindOnePostQuery = Pick<PaginationQuery<Post>, "showFields">;

export type FindPostResponse = {
  post: Nullable<Post> & {
    isLikedByMe?: boolean;
    isSavedByMe?: boolean;
    isFollowedByMe?: boolean;
  };
};
