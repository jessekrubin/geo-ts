import typia from "typia";
import type { PointGeometry3d } from "@jsse/geotypes";

// PointGeometry3d
export const assertPointGeometry3d = typia.createAssert<PointGeometry3d>();
export const equalsPointGeometry3d = typia.createEquals<PointGeometry3d>();
export const isPointGeometry3d = typia.createIs<PointGeometry3d>();
export const randomPointGeometry3d = typia.createRandom<PointGeometry3d>();
export const stringifyPointGeometry3d =
  typia.json.createStringify<PointGeometry3d>();
export const validatePointGeometry3d = typia.createValidate<PointGeometry3d>();
