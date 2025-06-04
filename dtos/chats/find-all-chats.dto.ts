import { Chat } from "../../entities";
import { PaginationQuery, PaginationResponse } from "../common";
export type FindAllChatsRequestQuery = PaginationQuery<Chat> & {
  support?: boolean;
};
export type FindAllChatsResponse = PaginationResponse<Chat>;
