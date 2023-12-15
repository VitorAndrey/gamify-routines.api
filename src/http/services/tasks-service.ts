import { Task } from "@/models";
import { TasksRepository } from "@/repositories/tasks-repository";

export class TaskService {
  constructor(private tasksRepository: TasksRepository) {}

  async create(newTask: Omit<Task, "id">) {
    const createdTask = await this.tasksRepository.create(newTask);

    return createdTask;
  }

  async getAll() {
    const allTasks = await this.tasksRepository.getAll();

    return allTasks;
  }

  async getById(id: string) {
    const task = await this.tasksRepository.getById(id);

    return task;
  }
}
