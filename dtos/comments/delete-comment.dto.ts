import { Comment } from "../../entities";
import { IdParamsQuery } from "../common";

export type DeleteCommentRequest = IdParamsQuery;

export type DeleteCommentResponse = {
  comment: Comment;
};
