import { SCHEDULER_TASKS } from "../../enums";

export interface SchedulerTaskReport {
  task: (typeof SCHEDULER_TASKS)[keyof typeof SCHEDULER_TASKS];
  status: "success" | "error";
  message: string;
}
