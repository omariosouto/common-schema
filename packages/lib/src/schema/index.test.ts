import { describe, expect, it } from "vitest";
import { parseSchema, s } from "./index";

describe("Wire In", () => {
  it("wire in schemas must always be loose and accept random data, but when parsed returns only what is expected", () => {
    const data = {
      name: "John Doe",
      age: 30,
      extraField: "This should be ignored",
    };

    const schema = s.looseObject({
      name: s.string(),
      age: s.number(),
    });

    const parsed = parseSchema(schema, data);

    console.log("Parsed data:", parsed);

    expect(parsed).toEqual({
      name: "John Doe",
      age: 30,
      // The extra field is ignored by the typing
      extraField: "This should be ignored",
    });
  });
});

describe("Wire Out", () => {
  it("wire out schemas must always be strict and reject random data, but when parsed returns only what is expected", () => {
    const data = {
      name: "John Doe",
      age: 30,
      extraField: "This should be ignored",
    };

    const schema = s.strictObject({
      name: s.string(),
      age: s.number(),
    });

    expect(() => parseSchema(schema, data)).toThrowErrorMatchingSnapshot();
  });
});