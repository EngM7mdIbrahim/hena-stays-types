import { CallRequest } from "../../entities";
import { IdParamsQuery } from "../common";

export type GetOneCallRequestRequestParams = IdParamsQuery;

export type GetOneCallRequestResponse = {
  callRequest: CallRequest;
};
