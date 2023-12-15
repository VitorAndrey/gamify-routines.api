import { FastifyInstance } from "fastify";
import { createTask } from "./controllers/create-task-controller";
import { getTasks } from "./controllers/get-task-controller";

export async function appRoutes(app: FastifyInstance) {
  app.post("/tasks", createTask);

  app.get("/tasks", getTasks);
  app.get("/tasks/:id", getTasks);
}
