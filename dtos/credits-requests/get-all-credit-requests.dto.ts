import { CreditsRequest } from "../../entities";
import { PaginationQuery, PaginationResponse } from "../common";

export type GetAllCreditRequestsQuery = PaginationQuery<CreditsRequest>;

export type GetAllCreditRequestsResponse = PaginationResponse<CreditsRequest>;
