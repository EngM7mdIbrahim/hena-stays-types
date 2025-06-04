import { Leads } from "../../entities";
import { IdParamsQuery, PaginationQuery } from "../common";

export type GetLeadParams = IdParamsQuery;
export type GetLeadQuery = Pick<PaginationQuery<Leads>, "showFields">;

export type GetLeadResponse = {
  lead: Leads;
};
