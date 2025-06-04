import { CurrencyCodeType, RentDurationEnumType } from "../enums";

export interface Price {
  value: number;
  currency: CurrencyCodeType;
  duration: RentDurationEnumType | null;
}
