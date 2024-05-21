import typia from "typia";
import type { LineStringFeature } from "@jsse/geotypes";

// LineStringFeature
export const assertLineStringFeature = typia.createAssert<LineStringFeature>();
export const equalsLineStringFeature = typia.createEquals<LineStringFeature>();
export const isLineStringFeature = typia.createIs<LineStringFeature>();
export const randomLineStringFeature = typia.createRandom<LineStringFeature>();
export const stringifyLineStringFeature =
  typia.json.createStringify<LineStringFeature>();
export const validateLineStringFeature =
  typia.createValidate<LineStringFeature>();
