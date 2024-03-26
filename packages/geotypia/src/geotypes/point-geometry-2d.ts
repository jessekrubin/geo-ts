import typia from "typia";
import type { PointGeometry2d } from "@jsse/geotypes";

// PointGeometry2d
export const assertPointGeometry2d = typia.createAssert<PointGeometry2d>();
export const equalsPointGeometry2d = typia.createEquals<PointGeometry2d>();
export const isPointGeometry2d = typia.createIs<PointGeometry2d>();
export const randomPointGeometry2d = typia.createRandom<PointGeometry2d>();
export const stringifyPointGeometry2d =
  typia.json.createStringify<PointGeometry2d>();
export const validatePointGeometry2d = typia.createValidate<PointGeometry2d>();
