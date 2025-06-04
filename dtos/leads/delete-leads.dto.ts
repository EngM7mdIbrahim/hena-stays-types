import { Leads } from "../../entities";
import { IdParamsQuery } from "../common";

export type DeleteLeadsRequestParams = IdParamsQuery;

export type DeleteLeadsResponse = {
  lead: Leads;
};
