import typia from "typia";
import type { TilejsonFormatExtra } from "@jsse/geotypes";

// TilejsonFormatExtra
export const assertTilejsonFormatExtra =
  typia.createAssert<TilejsonFormatExtra>();
export const equalsTilejsonFormatExtra =
  typia.createEquals<TilejsonFormatExtra>();
export const isTilejsonFormatExtra = typia.createIs<TilejsonFormatExtra>();
export const randomTilejsonFormatExtra =
  typia.createRandom<TilejsonFormatExtra>();
export const stringifyTilejsonFormatExtra =
  typia.json.createStringify<TilejsonFormatExtra>();
export const validateTilejsonFormatExtra =
  typia.createValidate<TilejsonFormatExtra>();
