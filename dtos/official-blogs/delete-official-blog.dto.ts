import { OfficialBlog } from "../../entities";
import { IdParamsQuery } from "../common";

export type DeleteOfficialBlogRequest = IdParamsQuery;

export type DeleteOfficialBlogResponse = {
  officialBlog: OfficialBlog;
};
