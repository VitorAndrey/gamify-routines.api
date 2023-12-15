import { FastifyInstance } from "fastify";

import { createTask } from "./controllers/create-task";
import { getAllTasks } from "./controllers/get-all-tasks";
import { getTaskById } from "./controllers/get-task-by-id";

export async function appRoutes(app: FastifyInstance) {
  app.post("/tasks", createTask);
  app.get("/tasks", getAllTasks);
  app.get("/tasks/:id", getTaskById);
}
