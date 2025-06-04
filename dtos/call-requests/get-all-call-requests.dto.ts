import { CallRequest } from "../../entities";
import { PaginationQuery, PaginationResponse } from "../common";

export type GetAllCallRequestsResponse = PaginationResponse<CallRequest>;
export type GetAllCallRequestsQuery = PaginationQuery<CallRequest>;
