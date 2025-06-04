import { Authority, Jurisdiction } from "../enums/company";

import { Extendable, Nullable } from "../genericTypes";
import { BaseEntity } from "./BaseEntity";
import { User } from "./User";

export type AuthorityType = (typeof Authority)[keyof typeof Authority];
export type JurisdictionType = (typeof Jurisdiction)[keyof typeof Jurisdiction];

export interface Company extends BaseEntity {
  name: string;
  authority: AuthorityType;
  city: string;
  jurisdiction: JurisdictionType;
  address: string;
  license: string;
  licenseCopies: string[];
  licenseExpiryDate: Date;
  watermark?: string;
  owner?: Nullable<Extendable<User>>;
}
