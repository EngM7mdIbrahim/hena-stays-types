import { PostSave } from "../../entities";
import { Nullable } from "../../genericTypes";
import { IdParamsQuery } from "../common";

export type FindPostSaveRequest = IdParamsQuery;

export type FindPostSaveResponse = {
  save: Nullable<PostSave>;
};
