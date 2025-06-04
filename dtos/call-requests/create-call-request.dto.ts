import { CallRequest } from "../../entities";

export type CreateCallRequestRequest = Omit<
  CallRequest,
  "_id" | "createdAt" | "status"
>;

export type CreateCallRequestResponse = {
  callRequest: CallRequest;
};
