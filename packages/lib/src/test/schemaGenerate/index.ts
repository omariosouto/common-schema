
import { generateMock } from '@anatine/zod-mock';
import { merge } from "@omariosouto/common-core";
import { ZodTypeAny } from "zod";
import { s, SchemaType } from "../../schema";

interface SchemaGenerateOptions {
  seed?: number;
}
export function schemaGenerate<Schema extends SchemaType>(
  schema: Schema,
  overrides?: Partial<s.infer<Schema>>,
  options: SchemaGenerateOptions = {},
): s.infer<Schema> {
  const fakeData = generateMock(schema as ZodTypeAny, {
    seed: options.seed,
  });
  return merge(fakeData, overrides);
}