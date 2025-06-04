import { Comment, Post, User } from "../../entities";
export type CreateCommentRequest = Pick<Comment, "description" | "post">;

export type CreateCommentResponse = {
  comment: Comment;
  post?: Post;
  user?: User;
};
