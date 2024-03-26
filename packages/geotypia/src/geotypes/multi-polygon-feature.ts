import typia from "typia";
import type { MultiPolygonFeature } from "@jsse/geotypes";

// MultiPolygonFeature
export const assertMultiPolygonFeature =
  typia.createAssert<MultiPolygonFeature>();
export const equalsMultiPolygonFeature =
  typia.createEquals<MultiPolygonFeature>();
export const isMultiPolygonFeature = typia.createIs<MultiPolygonFeature>();
export const randomMultiPolygonFeature =
  typia.createRandom<MultiPolygonFeature>();
export const stringifyMultiPolygonFeature =
  typia.json.createStringify<MultiPolygonFeature>();
export const validateMultiPolygonFeature =
  typia.createValidate<MultiPolygonFeature>();
