import { PaginationQuery, PaginationResponse } from "../common";
import { RequestBuyProperty } from "../../entities";

export type GetAllRequestBuyPropertyQuery =
  PaginationQuery<RequestBuyProperty> & {
    mine?: string;
  };

export type GetAllRequestBuyPropertiesResponse =
  PaginationResponse<RequestBuyProperty>;
