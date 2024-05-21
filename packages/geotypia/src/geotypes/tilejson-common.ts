import typia from "typia";
import type { TilejsonCommon } from "@jsse/geotypes";

// TilejsonCommon
export const assertTilejsonCommon = typia.createAssert<TilejsonCommon>();
export const equalsTilejsonCommon = typia.createEquals<TilejsonCommon>();
export const isTilejsonCommon = typia.createIs<TilejsonCommon>();
export const randomTilejsonCommon = typia.createRandom<TilejsonCommon>();
export const stringifyTilejsonCommon =
  typia.json.createStringify<TilejsonCommon>();
export const validateTilejsonCommon = typia.createValidate<TilejsonCommon>();
