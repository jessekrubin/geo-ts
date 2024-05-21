import typia from "typia";
import type { FeatureCollectionType } from "@jsse/geotypes";

// FeatureCollectionType
export const assertFeatureCollectionType =
  typia.createAssert<FeatureCollectionType>();
export const equalsFeatureCollectionType =
  typia.createEquals<FeatureCollectionType>();
export const isFeatureCollectionType = typia.createIs<FeatureCollectionType>();
export const randomFeatureCollectionType =
  typia.createRandom<FeatureCollectionType>();
export const stringifyFeatureCollectionType =
  typia.json.createStringify<FeatureCollectionType>();
export const validateFeatureCollectionType =
  typia.createValidate<FeatureCollectionType>();
