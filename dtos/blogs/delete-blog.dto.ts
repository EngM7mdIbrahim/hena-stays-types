import { Blog } from "../../entities";
import { IdParamsQuery } from "../common";

export type DeleteBlogRequestParams = IdParamsQuery;

export type DeleteBlogResponse = {
  blog: Blog;
};
