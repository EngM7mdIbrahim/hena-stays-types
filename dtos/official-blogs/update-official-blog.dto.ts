import { OfficialBlog } from "../../entities";
import { CreateOfficialBlogRequest } from "./create-official-blog.dto";
import { IdParamsQuery } from "../common";

export type UpdateOfficialBlogRequest = Partial<CreateOfficialBlogRequest> &
  IdParamsQuery;

export type UpdateOfficialBlogResponse = {
  officialBlog: OfficialBlog;
};
