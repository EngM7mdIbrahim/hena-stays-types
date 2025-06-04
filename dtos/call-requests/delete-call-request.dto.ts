import { CallRequest } from "../../entities";
import { IdParamsQuery } from "../common";

export type DeleteCallRequestRequestParams = IdParamsQuery;

export type DeleteCallRequestResponse = {
  callRequest: CallRequest;
};
