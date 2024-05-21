import typia from "typia";
import type { Geometry2d } from "@jsse/geotypes";

// Geometry2d
export const assertGeometry2d = typia.createAssert<Geometry2d>();
export const equalsGeometry2d = typia.createEquals<Geometry2d>();
export const isGeometry2d = typia.createIs<Geometry2d>();
export const randomGeometry2d = typia.createRandom<Geometry2d>();
export const stringifyGeometry2d = typia.json.createStringify<Geometry2d>();
export const validateGeometry2d = typia.createValidate<Geometry2d>();
