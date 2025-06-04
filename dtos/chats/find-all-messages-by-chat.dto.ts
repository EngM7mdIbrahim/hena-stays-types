import { Message } from "../../entities";
import { PaginationQuery, PaginationResponse } from "../common";

export type FindAllMessagesByChatRequestParams = {
  id: string;
};

export type FindAllMessagesByChatQuery = PaginationQuery<Message>;
export type FindAllMessagesByChatResponse = PaginationResponse<Message>;
