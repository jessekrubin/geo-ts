import typia from "typia";
import type { Geometry } from "@jsse/geotypes";

// Geometry
export const assertGeometry = typia.createAssert<Geometry>();
export const equalsGeometry = typia.createEquals<Geometry>();
export const isGeometry = typia.createIs<Geometry>();
export const randomGeometry = typia.createRandom<Geometry>();
export const stringifyGeometry = typia.json.createStringify<Geometry>();
export const validateGeometry = typia.createValidate<Geometry>();
