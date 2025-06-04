export const ProjectStatusEnum = {
  Active: "Active",
  Hold: "Hold",
  Done: "Done",
} as const;

export type ProjectStatus = keyof typeof ProjectStatusEnum;
