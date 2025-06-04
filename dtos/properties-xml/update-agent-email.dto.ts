import { XMLAgent } from "../../entities";
import { IdParamsQuery } from "../common";

export type UpdateAgentEmailBody = {
  previousAgentEmail: string;
  newAgentEmail: string;
};
export type UpdateAgentEmailParams = IdParamsQuery;

export type UpdateAgentEmailResponse = {
  id: string;
  lastUpdatedAt: string;
  agents: XMLAgent[];
  warnings: Record<string, Array<string>>;
  generalErrors: string[];
};
