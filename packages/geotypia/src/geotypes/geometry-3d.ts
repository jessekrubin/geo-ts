import typia from "typia";
import type { Geometry3d } from "@jsse/geotypes";

// Geometry3d
export const assertGeometry3d = typia.createAssert<Geometry3d>();
export const equalsGeometry3d = typia.createEquals<Geometry3d>();
export const isGeometry3d = typia.createIs<Geometry3d>();
export const randomGeometry3d = typia.createRandom<Geometry3d>();
export const stringifyGeometry3d = typia.json.createStringify<Geometry3d>();
export const validateGeometry3d = typia.createValidate<Geometry3d>();
