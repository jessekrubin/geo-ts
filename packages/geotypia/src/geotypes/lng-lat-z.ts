import typia from "typia";
import type { LngLatZ } from "@jsse/geotypes";

// LngLatZ
export const assertLngLatZ = typia.createAssert<LngLatZ>();
export const equalsLngLatZ = typia.createEquals<LngLatZ>();
export const isLngLatZ = typia.createIs<LngLatZ>();
export const randomLngLatZ = typia.createRandom<LngLatZ>();
export const stringifyLngLatZ = typia.json.createStringify<LngLatZ>();
export const validateLngLatZ = typia.createValidate<LngLatZ>();
