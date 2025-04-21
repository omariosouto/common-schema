export { s } from "./schema";
export type { SchemaType } from "./schema";

// TODO: Make this available on next release
export function parseSchema<Schema = SchemaType>(schema: Schema) {
  return schema.parse();
}