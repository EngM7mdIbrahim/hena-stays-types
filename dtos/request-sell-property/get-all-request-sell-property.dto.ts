import { PaginationQuery, PaginationResponse } from "../common";
import { RequestSellProperty } from "../../entities";

export type GetAllRequestSellPropertyQuery =
  PaginationQuery<RequestSellProperty> & {
    mine?: string;
  };

export type GetAllRequestSellPropertiesResponse =
  PaginationResponse<RequestSellProperty>;
