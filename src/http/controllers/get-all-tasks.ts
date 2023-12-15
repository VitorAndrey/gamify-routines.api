import { PrismaTasksRepository } from "@/repositories/prisma/prisma-tasks-repository";
import { FastifyRequest, FastifyReply } from "fastify";
import { TaskService } from "../services/tasks-service";

export async function getAllTasks(
  request: FastifyRequest,
  reply: FastifyReply
) {
  try {
    const tasksRepository = new PrismaTasksRepository();
    const taskService = new TaskService(tasksRepository);

    const allTasks = await taskService.getAll();
    return reply.status(200).send(allTasks);
  } catch (error) {
    return reply.status(500).send({ message: "Internal Server Error", error });
  }
}
