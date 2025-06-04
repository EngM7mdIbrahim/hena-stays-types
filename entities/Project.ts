import { Location } from "./Location";
import { Media } from "./media";
import { BaseEntity } from "./BaseEntity";
import { ProjectPaymentPlan } from "./Project.PaymentPlan";
import { Units } from "./Project.Units";
import { Extendable, Nullable } from "../genericTypes";
import { User } from "./User";
import { Company } from "./Company";
import { ProjectStatus } from "../enums";
export interface Project extends BaseEntity {
  title: string;
  description: string;
  media: Media[];
  location: Location;
  status: ProjectStatus;
  handOverDate: Date;
  paymentPlan: ProjectPaymentPlan;
  units: Units[];
  startingPrice: number;
  owner: Extendable<User>;
  company?: Extendable<Company>;
  recommended: Nullable<boolean>;
}
