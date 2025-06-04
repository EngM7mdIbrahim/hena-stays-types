import { Blog } from "../../entities";

export type CreateBlogRequest = Omit<Blog, "_id" | "createdAt" | "user">;
export type CreateBlogResponse = {
  blog: Blog;
};
