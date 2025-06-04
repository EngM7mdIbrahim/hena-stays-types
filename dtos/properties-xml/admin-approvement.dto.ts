import { PropertyXMLStatusType } from "../../enums";

export type AdminApprovementBody = {
  status: PropertyXMLStatusType;
  message?: string;
};

export type AdminApprovementResponse = {
  email: string;
  name: string;
  url: string;
  message?: string;
};
