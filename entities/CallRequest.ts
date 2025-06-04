import { CallRequestStatus } from "../enums/call-request";
import { BaseEntity } from "./BaseEntity";
import { ContactWays } from "./ContactWays";
export type CallRequestStatusType =
  (typeof CallRequestStatus)[keyof typeof CallRequestStatus];

export interface CallRequest extends BaseEntity {
  status: CallRequestStatusType;
  email: string;
  name: string;
  phone: string;
  whatsapp: string;
  contactMethods: ContactWays;
}
