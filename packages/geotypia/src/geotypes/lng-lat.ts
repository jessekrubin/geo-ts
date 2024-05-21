import typia from "typia";
import type { LngLat } from "@jsse/geotypes";

// LngLat
export const assertLngLat = typia.createAssert<LngLat>();
export const equalsLngLat = typia.createEquals<LngLat>();
export const isLngLat = typia.createIs<LngLat>();
export const randomLngLat = typia.createRandom<LngLat>();
export const stringifyLngLat = typia.json.createStringify<LngLat>();
export const validateLngLat = typia.createValidate<LngLat>();
