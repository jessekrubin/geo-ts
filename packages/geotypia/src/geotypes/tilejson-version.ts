import typia from "typia";
import type { TilejsonVersion } from "@jsse/geotypes";

// TilejsonVersion
export const assertTilejsonVersion = typia.createAssert<TilejsonVersion>();
export const equalsTilejsonVersion = typia.createEquals<TilejsonVersion>();
export const isTilejsonVersion = typia.createIs<TilejsonVersion>();
export const randomTilejsonVersion = typia.createRandom<TilejsonVersion>();
export const stringifyTilejsonVersion =
  typia.json.createStringify<TilejsonVersion>();
export const validateTilejsonVersion = typia.createValidate<TilejsonVersion>();
