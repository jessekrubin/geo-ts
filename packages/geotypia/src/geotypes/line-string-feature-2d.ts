import typia from "typia";
import type { LineStringFeature2d } from "@jsse/geotypes";

// LineStringFeature2d
export const assertLineStringFeature2d =
  typia.createAssert<LineStringFeature2d>();
export const equalsLineStringFeature2d =
  typia.createEquals<LineStringFeature2d>();
export const isLineStringFeature2d = typia.createIs<LineStringFeature2d>();
export const randomLineStringFeature2d =
  typia.createRandom<LineStringFeature2d>();
export const stringifyLineStringFeature2d =
  typia.json.createStringify<LineStringFeature2d>();
export const validateLineStringFeature2d =
  typia.createValidate<LineStringFeature2d>();
