import { News } from "../../entities";
import { IdParamsQuery } from "../common";

export type FindNewsRequestParams = IdParamsQuery;

export type FindNewsResponse = {
  news: News;
};
