import { describe, expect, it } from "vitest";
import { schemaGenerate } from "./index";
import { s } from "../../schema";
import { bigDecimalSchema } from "../../big-decimal";
import { BigDecimal } from "@omariosouto/common-core";

describe("Schema Generation", () => {
  it.each([1, 2, 3, 4, 5])("should generate a schema from a given object", () => {
    const schema = s.object({
      name: s.string(),
      age: s.number(),
    })

    const generatedSchema = schemaGenerate(schema, {
      name: "john",
    });

    expect(generatedSchema).to.have.keys([
      "name",
      "age",
    ]);
  });

  it.each([1, 2, 3, 4, 5])("should generate a schema from a given object with custom schemas", () => {
    const schema = s.object({
      price: bigDecimalSchema,
    });

    const generatedSchema = schemaGenerate(schema);

    expect(generatedSchema).to.have.keys([
      "price",
    ]);

    expect(generatedSchema.price).toBeInstanceOf(BigDecimal);
  });
});