import { describe, expect, it } from "vitest";
import { s } from "../../schema";
import { generateMock } from "./generateMock";

describe.only("generateMock()", () => {
  it.each([1])("should generate a schema from a given object", () => {
    const schema = s.object({
      name: s.string(),
      age: s.number(),
    })

    const generatedSchema = generateMock(schema, {
      seed: 1,
    });

    console.log("generatedSchema", generatedSchema);

    expect(generatedSchema).to.have.keys([
      "age",
      "name",
    ]);
  });
});
