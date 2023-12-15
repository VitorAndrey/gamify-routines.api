import { PrismaTasksRepository } from "@/repositories/prisma/prisma-tasks-repository";
import { FastifyRequest, FastifyReply } from "fastify";
import { TaskService } from "../services/tasks-service";

export async function getTaskById(
  request: FastifyRequest,
  reply: FastifyReply
) {
  const { url } = request;
  const id = url.replace("/tasks/", "");

  try {
    const tasksRepository = new PrismaTasksRepository();
    const taskService = new TaskService(tasksRepository);

    const task = await taskService.getById(id);
    return reply.status(200).send(task);
  } catch (error) {
    return reply.status(500).send({ message: "Internal Server Error", error });
  }
}
