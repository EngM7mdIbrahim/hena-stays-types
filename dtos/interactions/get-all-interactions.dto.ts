import { PaginationQuery, PaginationResponse } from "../common";
import { Interactions } from "../../entities";

export type GetAllInteractionsQuery = PaginationQuery<Interactions>;

export type GetAllInteractionsResponse = PaginationResponse<Interactions>;
