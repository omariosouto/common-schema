import { ZodError } from "zod";
import { SchemaType } from "./types";
import { SchemaError } from "./SchemaError";

export { SchemaError } from "./SchemaError";

export function parseSchema<Schema extends SchemaType>(
  schema: Schema,
  payload: unknown
): Schema["_output"] {
  try {
    const output = schema.parse(payload);
    return output;
  } catch (error) {
    if(error instanceof ZodError) {
      throw new SchemaError(error);
    }
    throw error;
  }
}