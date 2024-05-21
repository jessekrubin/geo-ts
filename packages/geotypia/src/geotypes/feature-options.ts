import typia from "typia";
import type { FeatureOptions } from "@jsse/geotypes";

// FeatureOptions
export const assertFeatureOptions = typia.createAssert<FeatureOptions>();
export const equalsFeatureOptions = typia.createEquals<FeatureOptions>();
export const isFeatureOptions = typia.createIs<FeatureOptions>();
export const randomFeatureOptions = typia.createRandom<FeatureOptions>();
export const stringifyFeatureOptions =
  typia.json.createStringify<FeatureOptions>();
export const validateFeatureOptions = typia.createValidate<FeatureOptions>();
