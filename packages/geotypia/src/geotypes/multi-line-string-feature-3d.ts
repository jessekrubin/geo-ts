import typia from "typia";
import type { MultiLineStringFeature3d } from "@jsse/geotypes";

// MultiLineStringFeature3d
export const assertMultiLineStringFeature3d =
  typia.createAssert<MultiLineStringFeature3d>();
export const equalsMultiLineStringFeature3d =
  typia.createEquals<MultiLineStringFeature3d>();
export const isMultiLineStringFeature3d =
  typia.createIs<MultiLineStringFeature3d>();
export const randomMultiLineStringFeature3d =
  typia.createRandom<MultiLineStringFeature3d>();
export const stringifyMultiLineStringFeature3d =
  typia.json.createStringify<MultiLineStringFeature3d>();
export const validateMultiLineStringFeature3d =
  typia.createValidate<MultiLineStringFeature3d>();
