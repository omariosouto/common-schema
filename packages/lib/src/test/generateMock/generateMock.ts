import { generateMock as generateMockModule, GenerateMockOptions } from '@anatine/zod-mock';
import { SchemaType } from "../../schema";

export function generateMock(schema: SchemaType, options: GenerateMockOptions) {
  return generateMockModule(schema as any, options);
}