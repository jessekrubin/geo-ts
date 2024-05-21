import typia from "typia";
import type { PointFeature3d } from "@jsse/geotypes";

// PointFeature3d
export const assertPointFeature3d = typia.createAssert<PointFeature3d>();
export const equalsPointFeature3d = typia.createEquals<PointFeature3d>();
export const isPointFeature3d = typia.createIs<PointFeature3d>();
export const randomPointFeature3d = typia.createRandom<PointFeature3d>();
export const stringifyPointFeature3d =
  typia.json.createStringify<PointFeature3d>();
export const validatePointFeature3d = typia.createValidate<PointFeature3d>();
