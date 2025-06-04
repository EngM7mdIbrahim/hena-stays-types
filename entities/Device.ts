import { OSType, PlatformsType } from "../enums";
import { Extendable } from "../genericTypes";
import { BaseEntity } from "./BaseEntity";
import { User } from "./User";

export interface Device extends BaseEntity {
  user: Extendable<User>;
  fcmToken: string;
  device: {
    platform: PlatformsType;
    os: OSType;
  };
}
