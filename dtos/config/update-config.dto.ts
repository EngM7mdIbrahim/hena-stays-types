import { Config } from "../../entities";

export type UpdateConfigRequestBody = Partial<Config>;
export type UpdateConfigResponse = { config: Config };
