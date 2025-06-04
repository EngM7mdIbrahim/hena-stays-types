import { Post } from "../../entities";
import { CreatePostRequest } from "./create-post.dto";
import { IdParamsQuery } from "../common";

export type UpdatePostRequest = Partial<CreatePostRequest> & IdParamsQuery;

export type UpdatePostResponse = {
  post: Post;
};
