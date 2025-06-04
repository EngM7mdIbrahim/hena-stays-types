import { PaginationQuery, PaginationResponse } from "../common";
import { Comment } from "../../entities";

export type FindAllCommentsRequestQuery = PaginationQuery<Comment>;
export type FindAllCommentsResponse = PaginationResponse<
  Comment & { isLikedByMe: boolean }
>;
