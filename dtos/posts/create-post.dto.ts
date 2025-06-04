import { Post } from "../../entities/";
export type CreatePostRequest = Pick<
  Post,
  "description" | "location" | "media"
>;

export type CreatePostResponse = {
  post: Post;
};
