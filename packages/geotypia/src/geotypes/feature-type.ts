import typia from "typia";
import type { FeatureType } from "@jsse/geotypes";

// FeatureType
export const assertFeatureType = typia.createAssert<FeatureType>();
export const equalsFeatureType = typia.createEquals<FeatureType>();
export const isFeatureType = typia.createIs<FeatureType>();
export const randomFeatureType = typia.createRandom<FeatureType>();
export const stringifyFeatureType = typia.json.createStringify<FeatureType>();
export const validateFeatureType = typia.createValidate<FeatureType>();
