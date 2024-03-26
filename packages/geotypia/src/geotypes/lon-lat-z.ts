import typia from "typia";
import type { LonLatZ } from "@jsse/geotypes";

// LonLatZ
export const assertLonLatZ = typia.createAssert<LonLatZ>();
export const equalsLonLatZ = typia.createEquals<LonLatZ>();
export const isLonLatZ = typia.createIs<LonLatZ>();
export const randomLonLatZ = typia.createRandom<LonLatZ>();
export const stringifyLonLatZ = typia.json.createStringify<LonLatZ>();
export const validateLonLatZ = typia.createValidate<LonLatZ>();
