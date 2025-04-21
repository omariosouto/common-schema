import { SchemaType } from "./types";

export function parseSchema<Schema extends SchemaType>(
  schema: Schema,
  payload: unknown
): Schema["_output"] {
  return schema.parse(payload);
}