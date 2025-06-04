import { BaseEntity } from "./BaseEntity";
import { Extendable } from "../genericTypes";
import { User } from "./User";
import { Media } from "./media";
import { CreditRequestStatusType } from "../enums";
export interface CreditsRequest extends BaseEntity {
  user: Extendable<User>;
  status: CreditRequestStatusType;
  credits: number;
  fees: number;
  taxes: number;
  total: number;
  media: Media;
}
