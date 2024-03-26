import typia from "typia";
import type { MultiPolygonFeature3d } from "@jsse/geotypes";

// MultiPolygonFeature3d
export const assertMultiPolygonFeature3d =
  typia.createAssert<MultiPolygonFeature3d>();
export const equalsMultiPolygonFeature3d =
  typia.createEquals<MultiPolygonFeature3d>();
export const isMultiPolygonFeature3d = typia.createIs<MultiPolygonFeature3d>();
export const randomMultiPolygonFeature3d =
  typia.createRandom<MultiPolygonFeature3d>();
export const stringifyMultiPolygonFeature3d =
  typia.json.createStringify<MultiPolygonFeature3d>();
export const validateMultiPolygonFeature3d =
  typia.createValidate<MultiPolygonFeature3d>();
