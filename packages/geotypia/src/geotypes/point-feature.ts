import typia from "typia";
import type { PointFeature } from "@jsse/geotypes";

// PointFeature
export const assertPointFeature = typia.createAssert<PointFeature>();
export const equalsPointFeature = typia.createEquals<PointFeature>();
export const isPointFeature = typia.createIs<PointFeature>();
export const randomPointFeature = typia.createRandom<PointFeature>();
export const stringifyPointFeature = typia.json.createStringify<PointFeature>();
export const validatePointFeature = typia.createValidate<PointFeature>();
