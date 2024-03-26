import typia from "typia";
import type { MultiLineStringFeature2d } from "@jsse/geotypes";

// MultiLineStringFeature2d
export const assertMultiLineStringFeature2d =
  typia.createAssert<MultiLineStringFeature2d>();
export const equalsMultiLineStringFeature2d =
  typia.createEquals<MultiLineStringFeature2d>();
export const isMultiLineStringFeature2d =
  typia.createIs<MultiLineStringFeature2d>();
export const randomMultiLineStringFeature2d =
  typia.createRandom<MultiLineStringFeature2d>();
export const stringifyMultiLineStringFeature2d =
  typia.json.createStringify<MultiLineStringFeature2d>();
export const validateMultiLineStringFeature2d =
  typia.createValidate<MultiLineStringFeature2d>();
