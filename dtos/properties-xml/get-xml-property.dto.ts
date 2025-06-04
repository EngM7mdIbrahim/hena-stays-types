import { User, XMLAgent } from "../../entities";
import { IdParamsQuery } from "../common";

export type GetXmlPropertyParams = IdParamsQuery;
export type GetXmlPropertyResponse = {
  creator: User;
  _id: string;
  url: string;
  agents: XMLAgent[];
  warnings: Record<string, string[]>;
  generalErrors: string[];
  rejectionReason?: string;
};
