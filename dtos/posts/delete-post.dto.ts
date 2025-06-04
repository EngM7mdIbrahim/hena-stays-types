import { Post } from "../../entities";
import { IdParamsQuery } from "../common";

export type DeletePostRequest = IdParamsQuery;

export type DeletePostResponse = {
  post: Post;
};
