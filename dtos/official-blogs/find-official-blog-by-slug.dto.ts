import { OfficialBlog, Post } from "../../entities";
import { Nullable } from "../../genericTypes";
import { IdParamsQuery, PaginationQuery } from "../common";

export type FindOneOfficialBlogBySlugRequestParams = {
  slug: string;
};
export type FindOneOfficialBlogBySlugQuery = Pick<
  PaginationQuery<OfficialBlog>,
  "showFields"
>;

export type FindOneOfficialBlogBySlugResponse = {
  officialBlog: Nullable<OfficialBlog>;
};
