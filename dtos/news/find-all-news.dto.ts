import { PaginationQuery, PaginationResponse } from "../common";
import { News } from "../../entities/News";

export type FindAllNewsRequestQuery = PaginationQuery<News>;
export type FindAllNewsResponse = PaginationResponse<News>;
