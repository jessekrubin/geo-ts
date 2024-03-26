import typia from "typia";
import type { TilejsonVector } from "@jsse/geotypes";

// TilejsonVector
export const assertTilejsonVector = typia.createAssert<TilejsonVector>();
export const equalsTilejsonVector = typia.createEquals<TilejsonVector>();
export const isTilejsonVector = typia.createIs<TilejsonVector>();
export const randomTilejsonVector = typia.createRandom<TilejsonVector>();
export const stringifyTilejsonVector =
  typia.json.createStringify<TilejsonVector>();
export const validateTilejsonVector = typia.createValidate<TilejsonVector>();
