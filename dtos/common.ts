import { OSType } from "../enums";
import { PlatformsType } from "../enums";
import { FieldsPop, Filter } from "../genericTypes";

export type SortOrder = 1 | -1;

export interface PaginationQuery<T> {
  page?: string;
  limit?: string;
  sort?: Record<string, SortOrder>;
  filter?: Filter<T>;
  text?: string;
  showFields?: FieldsPop<T>;
}

export type BooleanString = "true" | "false";
export interface PaginationResponse<T> {
  items: T[];
  total: number;
  limit: number;
  page: number;
  totalPages: number;
  nextPage?: number;
  hasNext?: boolean;
}

export interface MessageResponse {
  msg: string;
}

export type IdParamsQuery = {
  id: string;
};

export type SearchQuery = {
  text: string;
};

export interface ErrorResponseBody {
  success: false;
  message: string;
  data: {
    code: string;
    message: string;
    path: string[];
  }[];
}

export type DeviceRegister = {
  fcmToken?: string;
  device?: {
    platform: PlatformsType;
    os: OSType;
  };
};
