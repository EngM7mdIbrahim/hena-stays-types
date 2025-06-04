import { Blog } from "../../entities";
import { Nullable } from "../../genericTypes";
import { IdParamsQuery, PaginationQuery } from "../common";

export type FindBlogRequestParams = IdParamsQuery;
export type FindBlogQuery = Pick<PaginationQuery<Blog>, "showFields">;
export interface FindBlogResponse {
  blog: Nullable<Blog>;
}
