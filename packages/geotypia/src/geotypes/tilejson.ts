import typia from "typia";
import type { Tilejson } from "@jsse/geotypes";

// Tilejson
export const assertTilejson = typia.createAssert<Tilejson>();
export const equalsTilejson = typia.createEquals<Tilejson>();
export const isTilejson = typia.createIs<Tilejson>();
export const randomTilejson = typia.createRandom<Tilejson>();
export const stringifyTilejson = typia.json.createStringify<Tilejson>();
export const validateTilejson = typia.createValidate<Tilejson>();
