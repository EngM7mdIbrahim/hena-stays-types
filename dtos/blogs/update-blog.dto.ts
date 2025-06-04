import { Blog } from "../../entities";
import { CreateBlogRequest } from "./create-blog.dto";
import { IdParamsQuery } from "../common";

export type UpdateBlogRequest = Partial<CreateBlogRequest> & IdParamsQuery;

export type UpdateBlogResponse = {
  blog: Blog;
};
