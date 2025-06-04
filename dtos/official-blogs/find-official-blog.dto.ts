import { OfficialBlog, Post } from "../../entities";
import { Nullable } from "../../genericTypes";
import { IdParamsQuery, PaginationQuery } from "../common";

export type FindOneOfficialBlogRequestParams = IdParamsQuery;
export type FindOneOfficialBlogQuery = Pick<
  PaginationQuery<OfficialBlog>,
  "showFields"
>;

export type FindOneOfficialBlogResponse = {
  officialBlog: Nullable<OfficialBlog>;
};
