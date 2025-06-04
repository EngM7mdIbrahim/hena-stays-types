import {
  AgeTypeEnumType,
  furnishedEnumType,
  OwnerShipEnumType,
} from "../enums";
import { BaseProperty } from "./BaseProperty";
import { Media } from "./media";
import { Price } from "./Price";

export interface RequestSellProperty extends BaseProperty {
  age?: number;
  ageType?: AgeTypeEnumType;
  developer?: string;
  media: Media[];
  title: string;
  description: string;
  ownership?: OwnerShipEnumType;
  furnished?: furnishedEnumType;
  rating?: number;
  toilets?: number;
  living?: number;
  bedroom?: number;
  price: Price;
  area?: { plot: number; builtIn: number };
}
