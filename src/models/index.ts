import { JsonValue } from "@prisma/client/runtime/library";

export type Task = {
  id: JsonValue;
  name: string;
  price: JsonValue;
};
