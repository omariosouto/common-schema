import { SchemaType } from "./types";

export function parseSchema<Schema = SchemaType>(schema: Schema) {
  return schema.parse();
}