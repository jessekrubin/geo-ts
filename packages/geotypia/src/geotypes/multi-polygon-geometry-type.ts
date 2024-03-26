import typia from "typia";
import type { MultiPolygonGeometryType } from "@jsse/geotypes";

// MultiPolygonGeometryType
export const assertMultiPolygonGeometryType =
  typia.createAssert<MultiPolygonGeometryType>();
export const equalsMultiPolygonGeometryType =
  typia.createEquals<MultiPolygonGeometryType>();
export const isMultiPolygonGeometryType =
  typia.createIs<MultiPolygonGeometryType>();
export const randomMultiPolygonGeometryType =
  typia.createRandom<MultiPolygonGeometryType>();
export const stringifyMultiPolygonGeometryType =
  typia.json.createStringify<MultiPolygonGeometryType>();
export const validateMultiPolygonGeometryType =
  typia.createValidate<MultiPolygonGeometryType>();
