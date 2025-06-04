import {
  AgeTypeEnumType,
  furnishedEnumType,
  OwnerShipEnumType,
  RecommendationTypeEnumType,
} from "../enums";
import { Extendable } from "../genericTypes";
import { Company } from "./Company";
import { BaseProperty } from "./BaseProperty";
import { Media } from "./media";
import { Price } from "./Price";
import { Project } from "./Project";

export interface Property extends BaseProperty {
  company?: Extendable<Company>;
  recommended?: RecommendationTypeEnumType;
  recommendationExpiresAt?: Date | null;
  age?: number;
  ageType?: AgeTypeEnumType;
  developer?: string;
  media: Media[];
  title: string;
  description: string;
  ownership?: OwnerShipEnumType;
  rating?: number;
  toilets?: number;
  living?: number;
  bedroom?: number;
  price: Price;
  area?: { plot: number; builtIn: number };
  permit: {
    number?: string;
    DED?: string;
    RERA?: string;
    BRN: string;
    tarkheesi?: string;
  };
  project?: Extendable<Project>;
  furnished?: furnishedEnumType;
  xmlMetaData?: {
    lastUpdated: Date;
    referenceNumber: string;
  };
}
