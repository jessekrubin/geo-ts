import typia from "typia";
import type { MultiPolygonGeometry3d } from "@jsse/geotypes";

// MultiPolygonGeometry3d
export const assertMultiPolygonGeometry3d =
  typia.createAssert<MultiPolygonGeometry3d>();
export const equalsMultiPolygonGeometry3d =
  typia.createEquals<MultiPolygonGeometry3d>();
export const isMultiPolygonGeometry3d =
  typia.createIs<MultiPolygonGeometry3d>();
export const randomMultiPolygonGeometry3d =
  typia.createRandom<MultiPolygonGeometry3d>();
export const stringifyMultiPolygonGeometry3d =
  typia.json.createStringify<MultiPolygonGeometry3d>();
export const validateMultiPolygonGeometry3d =
  typia.createValidate<MultiPolygonGeometry3d>();
