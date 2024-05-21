import typia from "typia";
import type { Latitude } from "@jsse/geotypes";

// Latitude
export const assertLatitude = typia.createAssert<Latitude>();
export const equalsLatitude = typia.createEquals<Latitude>();
export const isLatitude = typia.createIs<Latitude>();
export const randomLatitude = typia.createRandom<Latitude>();
export const stringifyLatitude = typia.json.createStringify<Latitude>();
export const validateLatitude = typia.createValidate<Latitude>();
