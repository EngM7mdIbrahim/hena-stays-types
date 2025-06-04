import { OfficialBlog } from "../../entities";
import { PaginationQuery, PaginationResponse } from "../common";

export type FindAllOfficialBlogsRequestQuery = PaginationQuery<OfficialBlog> & {
  mine?: string;
};
export type FindAllOfficialBlogsResponse = PaginationResponse<OfficialBlog>;
