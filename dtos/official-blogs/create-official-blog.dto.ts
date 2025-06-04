import { OfficialBlog } from "../../entities";

export type CreateOfficialBlogRequest = Omit<OfficialBlog, "_id" | "createdAt">;

export type CreateOfficialBlogResponse = {
  officialBlog: OfficialBlog;
};
