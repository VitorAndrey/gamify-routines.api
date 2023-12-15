import { PrismaTasksRepository } from "@/repositories/prisma/prisma-tasks-repository";
import { FastifyRequest, FastifyReply } from "fastify";
import { TaskService } from "../services/tasks-service";

export async function getTasks(request: FastifyRequest, reply: FastifyReply) {
  const { url } = request;

  const urlParams = url.slice(1).split("/");
  const numberOfParams = urlParams.length;

  try {
    const tasksRepository = new PrismaTasksRepository();
    const taskService = new TaskService(tasksRepository);

    if (numberOfParams === 2) {
      if (!urlParams[1]) return reply.status(400).send("Missing id.");

      console.log(urlParams[1]);
      const task = await taskService.getById(urlParams[1]);
      return reply.status(200).send(task);
    }

    if (numberOfParams === 1) {
      const allTasks = await taskService.getAll();
      return reply.status(200).send(allTasks);
    }
  } catch (error) {
    return reply.status(500).send("Internal Server Error");
  }
}
