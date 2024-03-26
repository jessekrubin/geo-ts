import typia from "typia";
import type { LonLat } from "@jsse/geotypes";

// LonLat
export const assertLonLat = typia.createAssert<LonLat>();
export const equalsLonLat = typia.createEquals<LonLat>();
export const isLonLat = typia.createIs<LonLat>();
export const randomLonLat = typia.createRandom<LonLat>();
export const stringifyLonLat = typia.json.createStringify<LonLat>();
export const validateLonLat = typia.createValidate<LonLat>();
