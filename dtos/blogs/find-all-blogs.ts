import { PaginationQuery, PaginationResponse } from "../common";
import { Blog } from "../../entities";
export type FindAllBlogsRequestQuery = PaginationQuery<Blog>;
export type FindAllBlogsResponse = PaginationResponse<Blog>;
