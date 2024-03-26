import typia from "typia";
import type { MultiPolygonGeometry2d } from "@jsse/geotypes";

// MultiPolygonGeometry2d
export const assertMultiPolygonGeometry2d =
  typia.createAssert<MultiPolygonGeometry2d>();
export const equalsMultiPolygonGeometry2d =
  typia.createEquals<MultiPolygonGeometry2d>();
export const isMultiPolygonGeometry2d =
  typia.createIs<MultiPolygonGeometry2d>();
export const randomMultiPolygonGeometry2d =
  typia.createRandom<MultiPolygonGeometry2d>();
export const stringifyMultiPolygonGeometry2d =
  typia.json.createStringify<MultiPolygonGeometry2d>();
export const validateMultiPolygonGeometry2d =
  typia.createValidate<MultiPolygonGeometry2d>();
