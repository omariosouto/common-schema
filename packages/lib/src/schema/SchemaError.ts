import { CommonError } from "@omariosouto/common-errors";
import { ZodError } from "zod";

export class SchemaError extends CommonError {
  constructor(error: ZodError) {
    super({
      name: "SchemaError",
      message: "Schema validation failed",
      code: "SCHEMA_VALIDATION_ERROR",
      statusCode: 400,
      details: {
        issues: error.issues,
        zodError: error, // opcional, caso queira ter o objeto inteiro disponível
      },
    });

    this.stack = error.stack;
  }
}