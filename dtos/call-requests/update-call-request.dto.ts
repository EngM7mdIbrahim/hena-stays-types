import { CallRequest } from "../../entities";
import { IdParamsQuery } from "../common";

export type UpdateCallRequestRequestParams = IdParamsQuery;
export type UpdateCallRequestRequestBody = Partial<CallRequest>;

export type UpdateCallRequestResponse = {
  callRequest: CallRequest;
};
