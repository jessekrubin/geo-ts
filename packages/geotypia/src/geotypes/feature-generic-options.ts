import typia from "typia";
import type { FeatureGenericOptions } from "@jsse/geotypes";

// FeatureGenericOptions
export const assertFeatureGenericOptions =
  typia.createAssert<FeatureGenericOptions>();
export const equalsFeatureGenericOptions =
  typia.createEquals<FeatureGenericOptions>();
export const isFeatureGenericOptions = typia.createIs<FeatureGenericOptions>();
export const randomFeatureGenericOptions =
  typia.createRandom<FeatureGenericOptions>();
export const stringifyFeatureGenericOptions =
  typia.json.createStringify<FeatureGenericOptions>();
export const validateFeatureGenericOptions =
  typia.createValidate<FeatureGenericOptions>();
