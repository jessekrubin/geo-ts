import typia from "typia";
import type { Longitude } from "@jsse/geotypes";

// Longitude
export const assertLongitude = typia.createAssert<Longitude>();
export const equalsLongitude = typia.createEquals<Longitude>();
export const isLongitude = typia.createIs<Longitude>();
export const randomLongitude = typia.createRandom<Longitude>();
export const stringifyLongitude = typia.json.createStringify<Longitude>();
export const validateLongitude = typia.createValidate<Longitude>();
