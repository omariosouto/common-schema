import { merge } from "@omariosouto/common-core";
import { s, SchemaType } from "../../schema";
import { generateMock } from "../generateMock/generateMock";
interface SchemaGenerateOptions {
  seed?: number;
}
export function schemaGenerate<Schema extends SchemaType>(
  schema: Schema,
  overrides?: Partial<s.infer<Schema>>,
  options: SchemaGenerateOptions = {},
): s.infer<Schema> {
  const fakeData = generateMock(schema as any, {
    seed: options.seed,
  });
  return merge(fakeData, overrides);
}
