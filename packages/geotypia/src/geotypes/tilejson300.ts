import typia from "typia";
import type { Tilejson300 } from "@jsse/geotypes";

// Tilejson300
export const assertTilejson300 = typia.createAssert<Tilejson300>();
export const equalsTilejson300 = typia.createEquals<Tilejson300>();
export const isTilejson300 = typia.createIs<Tilejson300>();
export const randomTilejson300 = typia.createRandom<Tilejson300>();
export const stringifyTilejson300 = typia.json.createStringify<Tilejson300>();
export const validateTilejson300 = typia.createValidate<Tilejson300>();
