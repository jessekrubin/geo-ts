import typia from "typia";
import type { LineStringFeature3d } from "@jsse/geotypes";

// LineStringFeature3d
export const assertLineStringFeature3d =
  typia.createAssert<LineStringFeature3d>();
export const equalsLineStringFeature3d =
  typia.createEquals<LineStringFeature3d>();
export const isLineStringFeature3d = typia.createIs<LineStringFeature3d>();
export const randomLineStringFeature3d =
  typia.createRandom<LineStringFeature3d>();
export const stringifyLineStringFeature3d =
  typia.json.createStringify<LineStringFeature3d>();
export const validateLineStringFeature3d =
  typia.createValidate<LineStringFeature3d>();
