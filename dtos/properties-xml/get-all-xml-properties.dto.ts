import { PropertiesXML } from "../../entities";
import { PaginationQuery, PaginationResponse } from "../common";

export type GetAllXmlPropertiesQuery = PaginationQuery<PropertiesXML>;

export type GetAllXmlPropertiesResponse = PaginationResponse<PropertiesXML>;
