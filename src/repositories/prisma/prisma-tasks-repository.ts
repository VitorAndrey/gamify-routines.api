import { Task } from "@/models";
import { TasksRepository } from "../tasks-repository";
import { prisma } from "@/lib/prisma";

export class PrismaTasksRepository implements TasksRepository {
  constructor() {}

  async create(newTask: Omit<Task, "id">) {
    const createdTask = await prisma.task.create({
      data: newTask,
    });

    return createdTask;
  }

  async getAll(): Promise<Task[]> {
    const allTasks = await prisma.task.findMany({});

    return allTasks;
  }

  async getById(id: string): Promise<Task | null> {
    const task = await prisma.task.findFirst({
      where: {
        id,
      },
    });

    return task;
  }
}
