import typia from "typia";
import type { TilejsonFormat } from "@jsse/geotypes";

// TilejsonFormat
export const assertTilejsonFormat = typia.createAssert<TilejsonFormat>();
export const equalsTilejsonFormat = typia.createEquals<TilejsonFormat>();
export const isTilejsonFormat = typia.createIs<TilejsonFormat>();
export const randomTilejsonFormat = typia.createRandom<TilejsonFormat>();
export const stringifyTilejsonFormat =
  typia.json.createStringify<TilejsonFormat>();
export const validateTilejsonFormat = typia.createValidate<TilejsonFormat>();
