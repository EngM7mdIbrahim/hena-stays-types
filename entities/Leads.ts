import { BaseEntity } from "./BaseEntity";
import { Extendable } from "../genericTypes";
import { User } from "./User";
import { Property } from "./Property";
import { leadsContactsType, leadsStatusType } from "../enums";

export interface Leads extends BaseEntity {
  name: string;
  user?: Extendable<User>;
  property: Extendable<Property>;
  status: leadsStatusType;
  userContactDetails: {
    email: string;
    phone: string;
    whatsapp: string;
  };
  contactType: leadsContactsType;
}
