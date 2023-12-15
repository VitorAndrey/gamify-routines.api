import { PrismaTasksRepository } from "@/repositories/prisma/prisma-tasks-repository";
import { FastifyRequest, FastifyReply } from "fastify";
import { z } from "zod";
import { TaskService } from "../services/tasks-service";

export async function createTask(request: FastifyRequest, reply: FastifyReply) {
  const getTasksBodySchema = z.object({
    name: z.string(),
    price: z.number(),
  });

  const { name, price } = getTasksBodySchema.parse(request.body);

  try {
    const tasksRepository = new PrismaTasksRepository();
    const taskService = new TaskService(tasksRepository);

    const createdTask = await taskService.create({ name, price });
    if (createdTask) return reply.status(201).send();
  } catch (error) {
    return reply.status(500).send({ message: "Failed to create task.", error });
  }
}
