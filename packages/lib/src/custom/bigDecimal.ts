import { BigDecimal } from "@omariosouto/common-core";
import { s } from "../schema";

export const bigDecimalSchema = s
  .union([                       // tipos de entrada aceitos
    s.instanceof(BigDecimal),         // já é Money
    s.number(),                  // 10  → R$ 10,00
    s.string(),                  // "10.50" → R$ 10,50 (ou USD 10.50, depende de opções)
  ])
  .transform<BigDecimal>((raw, ctx) => {
    try {
      return new BigDecimal(raw as BigDecimal);
    } catch (err) {
      ctx.addIssue({
        code:  "custom",
        message: "Valor inválido para Money",
      });
      return s.NEVER;
    }
  });