import { Leads } from "../../entities";

export type CreateLeadsRequest = Pick<Leads, "contactType" | "property">;

export type CreateLeadsResponse = {
  lead: Leads;
};
