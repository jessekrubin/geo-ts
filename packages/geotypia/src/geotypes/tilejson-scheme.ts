import typia from "typia";
import type { TilejsonScheme } from "@jsse/geotypes";

// TilejsonScheme
export const assertTilejsonScheme = typia.createAssert<TilejsonScheme>();
export const equalsTilejsonScheme = typia.createEquals<TilejsonScheme>();
export const isTilejsonScheme = typia.createIs<TilejsonScheme>();
export const randomTilejsonScheme = typia.createRandom<TilejsonScheme>();
export const stringifyTilejsonScheme =
  typia.json.createStringify<TilejsonScheme>();
export const validateTilejsonScheme = typia.createValidate<TilejsonScheme>();
