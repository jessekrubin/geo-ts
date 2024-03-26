import typia from "typia";
import type { MultiLineStringFeature } from "@jsse/geotypes";

// MultiLineStringFeature
export const assertMultiLineStringFeature =
  typia.createAssert<MultiLineStringFeature>();
export const equalsMultiLineStringFeature =
  typia.createEquals<MultiLineStringFeature>();
export const isMultiLineStringFeature =
  typia.createIs<MultiLineStringFeature>();
export const randomMultiLineStringFeature =
  typia.createRandom<MultiLineStringFeature>();
export const stringifyMultiLineStringFeature =
  typia.json.createStringify<MultiLineStringFeature>();
export const validateMultiLineStringFeature =
  typia.createValidate<MultiLineStringFeature>();
