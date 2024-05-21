import typia from "typia";
import type { FeatureGenericGeometry } from "@jsse/geotypes";

// FeatureGenericGeometry
export const assertFeatureGenericGeometry =
  typia.createAssert<FeatureGenericGeometry>();
export const equalsFeatureGenericGeometry =
  typia.createEquals<FeatureGenericGeometry>();
export const isFeatureGenericGeometry =
  typia.createIs<FeatureGenericGeometry>();
export const randomFeatureGenericGeometry =
  typia.createRandom<FeatureGenericGeometry>();
export const stringifyFeatureGenericGeometry =
  typia.json.createStringify<FeatureGenericGeometry>();
export const validateFeatureGenericGeometry =
  typia.createValidate<FeatureGenericGeometry>();
