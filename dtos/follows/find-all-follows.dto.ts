import { PaginationQuery, PaginationResponse } from "../common";
import { Follow } from "../../entities";

export type FindAllFollowsRequestQuery = PaginationQuery<Follow>;
export type FindAllFollowsResponse = PaginationResponse<Follow>;
