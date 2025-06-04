import { Property } from "../../entities";
import { IdParamsQuery, PaginationQuery } from "../common";

export type GetOnePropertyRequestParams = IdParamsQuery;
export type GetOnePropertyQuery = Pick<PaginationQuery<Property>, "showFields">;
export type GetOnePropertyResponse = {
  property: Property & {
    isSavedByMe?: boolean;
  };
};
