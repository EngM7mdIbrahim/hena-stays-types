import { Comment } from "../../entities";
import { CreateCommentRequest } from "./create-comment.dto";
import { IdParamsQuery } from "../common";

export type UpdateCommentRequest = Partial<CreateCommentRequest> &
  IdParamsQuery;

export type UpdateCommentResponse = {
  comment: Comment;
};
