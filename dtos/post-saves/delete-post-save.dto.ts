import { PostSave } from "../../entities";
import { IdParamsQuery } from "../common";

export type DeletePostSaveRequest = IdParamsQuery;

export type DeletePostSaveResponse = {
  save: PostSave;
};
