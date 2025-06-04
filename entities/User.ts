import { Extendable, Nullable } from "../genericTypes";
import { UserStatus, UserRole } from "../enums/user";
import { Broker } from "./Broker";
import { Company } from "./Company";
import { BaseEntity } from "./BaseEntity";
import { Subscriptions } from "./Subscriptions";

export type UserStatusType = (typeof UserStatus)[keyof typeof UserStatus];
export type UserRoleType = (typeof UserRole)[keyof typeof UserRole];

// TODO: Add Extendable<Subscription> , Extendable<Country> and Extendable<Views> to User
export interface User extends BaseEntity {
  name: string;
  email: string;
  username: string;
  phone: string;
  whatsapp: string;
  image?: Nullable<string>;
  watermark?: Nullable<string>;
  isActive: boolean;
  isBlocked: boolean;
  status: UserStatusType;
  role: UserRoleType;
  broker?: Nullable<Extendable<Broker>>;
  company?: Nullable<Extendable<Company>>;
  subscription: Nullable<Extendable<Subscriptions>>;
  stripeCustomerId?: Nullable<string>;
  chatMeta: {
    online: boolean;
    typing: boolean;
  };
}
