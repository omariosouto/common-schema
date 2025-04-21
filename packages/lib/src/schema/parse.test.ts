import { describe, expect, it } from "vitest";
import { s } from "../schema";
import { parseSchema } from "./parse";

describe("Schema Parsing", () => {
  it("should parse a valid schema", () => {
    const schema = s.object({
      name: s.string(),
      age: s.number(),
    });

    const payload = {
      name: "John Doe",
      age: 30,
    };

    const parsed = parseSchema(schema, payload);
    expect(parsed).toEqual(payload);
  });
  it("should throw an error for invalid schema", () => {
    const schema = s.object({
      name: s.string(),
      age: s.number(),
    });

    const payload = {
      name: "John Doe",
      age: "thirty",
    };

    expect(() => parseSchema(schema, payload)).toThrow();
  });
});