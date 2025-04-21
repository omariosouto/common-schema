import { BigDecimal } from "@omariosouto/common-core";
import { s } from "../schema";

export const bigDecimalSchema = s
  .union([
    s.instanceof(BigDecimal),
    s.number(),
    s.string(),
  ])
  .transform<BigDecimal>((raw, ctx) => {
    try {
      return new BigDecimal(raw as BigDecimal);
    } catch (err) {
      ctx.addIssue({
        code: "custom",
        message: "Invalid BigDecimal",
      });
      return s.NEVER;
    }
  });