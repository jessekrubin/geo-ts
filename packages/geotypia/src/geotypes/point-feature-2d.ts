import typia from "typia";
import type { PointFeature2d } from "@jsse/geotypes";

// PointFeature2d
export const assertPointFeature2d = typia.createAssert<PointFeature2d>();
export const equalsPointFeature2d = typia.createEquals<PointFeature2d>();
export const isPointFeature2d = typia.createIs<PointFeature2d>();
export const randomPointFeature2d = typia.createRandom<PointFeature2d>();
export const stringifyPointFeature2d =
  typia.json.createStringify<PointFeature2d>();
export const validatePointFeature2d = typia.createValidate<PointFeature2d>();
