import { BaseEntity } from "./BaseEntity";

export interface Broker extends BaseEntity {
  license: string;
  licenseCopies: string[];
  licenseExpiryDate: Date;
  city: string;
  watermark?: string;
}
