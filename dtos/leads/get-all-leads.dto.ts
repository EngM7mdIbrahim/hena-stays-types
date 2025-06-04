import { PaginationQuery, PaginationResponse } from "../common";
import { Leads } from "../../entities";

export type GetAllLeadsQuery = PaginationQuery<Leads>;

export type GetAllLeadsResponse = PaginationResponse<Leads>;
