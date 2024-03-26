import typia from "typia";
import type { PolygonGeometry2d } from "@jsse/geotypes";

// PolygonGeometry2d
export const assertPolygonGeometry2d = typia.createAssert<PolygonGeometry2d>();
export const equalsPolygonGeometry2d = typia.createEquals<PolygonGeometry2d>();
export const isPolygonGeometry2d = typia.createIs<PolygonGeometry2d>();
export const randomPolygonGeometry2d = typia.createRandom<PolygonGeometry2d>();
export const stringifyPolygonGeometry2d =
  typia.json.createStringify<PolygonGeometry2d>();
export const validatePolygonGeometry2d =
  typia.createValidate<PolygonGeometry2d>();
