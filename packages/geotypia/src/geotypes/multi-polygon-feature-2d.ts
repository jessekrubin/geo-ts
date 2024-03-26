import typia from "typia";
import type { MultiPolygonFeature2d } from "@jsse/geotypes";

// MultiPolygonFeature2d
export const assertMultiPolygonFeature2d =
  typia.createAssert<MultiPolygonFeature2d>();
export const equalsMultiPolygonFeature2d =
  typia.createEquals<MultiPolygonFeature2d>();
export const isMultiPolygonFeature2d = typia.createIs<MultiPolygonFeature2d>();
export const randomMultiPolygonFeature2d =
  typia.createRandom<MultiPolygonFeature2d>();
export const stringifyMultiPolygonFeature2d =
  typia.json.createStringify<MultiPolygonFeature2d>();
export const validateMultiPolygonFeature2d =
  typia.createValidate<MultiPolygonFeature2d>();
