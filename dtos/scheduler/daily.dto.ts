import { SchedulerTaskReport } from "./task.interface";

export type SchedulerResponseBody = {
  success: boolean;
  report: SchedulerTaskReport[];
};
