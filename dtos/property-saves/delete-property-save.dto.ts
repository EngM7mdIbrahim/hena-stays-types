import { PropertySave } from "../../entities";
import { IdParamsQuery } from "../common";

export type DeletePropertySaveRequest = IdParamsQuery;

export type DeletePropertySaveResponse = {
  save: PropertySave;
};
