import typia from "typia";
import type { FeatureGeneric } from "@jsse/geotypes";

// FeatureGeneric
export const assertFeatureGeneric = typia.createAssert<FeatureGeneric>();
export const equalsFeatureGeneric = typia.createEquals<FeatureGeneric>();
export const isFeatureGeneric = typia.createIs<FeatureGeneric>();
export const randomFeatureGeneric = typia.createRandom<FeatureGeneric>();
export const stringifyFeatureGeneric =
  typia.json.createStringify<FeatureGeneric>();
export const validateFeatureGeneric = typia.createValidate<FeatureGeneric>();
