import { furnishedEnumType, RentDurationEnumType } from "../enums";
import { ValueRange } from "../genericTypes";
import { BaseProperty } from "./BaseProperty";
import { ContactWays } from "./ContactWays";
import { User } from "./User";
export interface RequestBuyProperty extends BaseProperty {
  price?: {
    duration?: RentDurationEnumType;
    currency: string;
  } & ValueRange<number>;
  furnished?: Array<furnishedEnumType>;
  toilets?: ValueRange<number>;
  living?: ValueRange<number>;
  bedroom?: ValueRange<number>;
  age?: ValueRange<number>;
  area?: ValueRange<number>;
  contactWays: ContactWays;
  contactInfo: Pick<User, "name" | "email" | "phone" | "whatsapp">;
}
