import typia from "typia";
import type { PolygonGeometryType } from "@jsse/geotypes";

// PolygonGeometryType
export const assertPolygonGeometryType =
  typia.createAssert<PolygonGeometryType>();
export const equalsPolygonGeometryType =
  typia.createEquals<PolygonGeometryType>();
export const isPolygonGeometryType = typia.createIs<PolygonGeometryType>();
export const randomPolygonGeometryType =
  typia.createRandom<PolygonGeometryType>();
export const stringifyPolygonGeometryType =
  typia.json.createStringify<PolygonGeometryType>();
export const validatePolygonGeometryType =
  typia.createValidate<PolygonGeometryType>();
