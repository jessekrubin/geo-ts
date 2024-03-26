import typia from "typia";
import type { Geostats } from "@jsse/geotypes";

// Geostats
export const assertGeostats = typia.createAssert<Geostats>();
export const equalsGeostats = typia.createEquals<Geostats>();
export const isGeostats = typia.createIs<Geostats>();
export const randomGeostats = typia.createRandom<Geostats>();
export const stringifyGeostats = typia.json.createStringify<Geostats>();
export const validateGeostats = typia.createValidate<Geostats>();
