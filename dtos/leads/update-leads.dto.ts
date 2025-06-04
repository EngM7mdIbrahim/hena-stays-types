import { Leads } from "../../entities";
import { IdParamsQuery } from "../common";
export type UpdateLeadsRequestBody = Partial<Leads>;
export type UpdateLeadsRequestParams = IdParamsQuery;
export type UpdateLeadsResponse = {
  lead: Leads;
};
