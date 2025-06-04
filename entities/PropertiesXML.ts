import { BaseEntity } from "./BaseEntity";
import { Extendable } from "../genericTypes";
import { Property, User } from "./";
import { PropertyXMLStatusType } from "../enums";
// DB Entity
export interface PropertiesXML extends BaseEntity {
  creator: Extendable<User>;
  lastUpdatedAt: Date;
  status: PropertyXMLStatusType;
  url: string;
  rejectionReason?: string;
  xmlErrors?: string[];
  warnings?: Record<string, string[]>;
  originalParsedProperties?: any[];
  tempProperties?: any[];
}
export type XMLProperty = Pick<
  Property,
  | "type"
  | "title"
  | "description"
  | "completion"
  | "furnished"
  | "location"
  | "media"
  | "area"
  | "category"
  | "subCategory"
  | "permit"
  | "amenities"
  | "bedroom"
  | "toilets"
  | "price"
> & {
  _id?: string;
  createdBy?: string;
  xmlMetaData: NonNullable<Property["xmlMetaData"]>;
  isEligible?: boolean;
};

export type XMLAgent = Pick<User, "name" | "phone" | "email" | "image"> & {
  _id?: string;
  properties: XMLProperty[];
  approvalIssues?: string[];
};

export interface XMLParserResult {
  generalErrors: string[];
  warnings: Record<string, string[]>;
  agents: XMLAgent[];
}
