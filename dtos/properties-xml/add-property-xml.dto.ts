import { XMLAgent } from "../../entities";

export type AddPropertyXMLBody = {
  url: string;
};

export type AddPropertyXMLResponse = {
  id: string;
  lastUpdatedAt: string;
  agents: XMLAgent[];
  warnings: Record<string, Array<string>>;
  generalErrors: string[];
};
