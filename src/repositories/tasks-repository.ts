import { Task } from "@/models";

export interface TasksRepository {
  create(newTask: Omit<Task, "id">): Promise<Task>;

  getAll(): Promise<Task[]>;

  getById(id: string): Promise<Task | null>;
}
