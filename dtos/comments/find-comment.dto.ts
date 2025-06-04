import { Comment } from "../../entities";
import { Nullable } from "../../genericTypes";
import { IdParamsQuery, PaginationQuery } from "../common";

export type FindCommentRequestParams = IdParamsQuery;
export type FindCommentQuery = Pick<PaginationQuery<Comment>, "showFields">;

export type FindCommentResponse = {
  comment: Nullable<Comment>;
};
