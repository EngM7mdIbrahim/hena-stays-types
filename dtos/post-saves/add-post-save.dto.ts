import { PostSave } from "../../entities";

export type AddPostSaveRequest = {
  post: string;
};

export type AddPostSaveResponse = {
  save: PostSave;
};
