import { generateMock } from '@anatine/zod-mock';
import { merge } from "@omariosouto/common-core";
import { ZodTypeAny } from "zod";

interface SchemaGenerateOptions {
  seed?: number;
}
export function schemaGenerate<Schema = any>(schema: Schema, overrides: Partial<any> = {}, options: SchemaGenerateOptions = {}) {
  const fakeData = generateMock(schema as ZodTypeAny, {
    seed: options.seed,
  });
  return merge(fakeData, overrides);
}