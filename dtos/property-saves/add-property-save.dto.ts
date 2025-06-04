import { PropertySave } from "../../entities";

export type AddPropertySaveRequest = {
  property: string;
};

export type AddPropertySaveResponse = {
  save: PropertySave;
};
