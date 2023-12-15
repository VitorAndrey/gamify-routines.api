import { v4 as uuidv4 } from "uuid";

import { Task } from "@/models";
import { TasksRepository } from "../tasks-repository";
import { prisma } from "@/lib/prisma";

export class PrismaTasksRepository implements TasksRepository {
  constructor() {}

  async create(newTask: Omit<Task, "id">) {
    const createdTask = await prisma.tasks.create({
      data: { id: uuidv4(), ...newTask },
    });

    return createdTask;
  }

  async getAll(): Promise<Task[]> {
    const allTasks = await prisma.tasks.findMany({});

    return allTasks;
  }

  async getById(id: any): Promise<Task | null> {
    const task = await prisma.tasks.findFirst({
      where: {
        id,
      },
    });

    return task;
  }
}
