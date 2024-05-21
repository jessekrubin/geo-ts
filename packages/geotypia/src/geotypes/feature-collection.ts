import typia from "typia";
import type { FeatureCollection } from "@jsse/geotypes";

// FeatureCollection
export const assertFeatureCollection = typia.createAssert<FeatureCollection>();
export const equalsFeatureCollection = typia.createEquals<FeatureCollection>();
export const isFeatureCollection = typia.createIs<FeatureCollection>();
export const randomFeatureCollection = typia.createRandom<FeatureCollection>();
export const stringifyFeatureCollection =
  typia.json.createStringify<FeatureCollection>();
export const validateFeatureCollection =
  typia.createValidate<FeatureCollection>();
