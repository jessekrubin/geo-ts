import typia from "typia";
import type { PolygonGeometry3d } from "@jsse/geotypes";

// PolygonGeometry3d
export const assertPolygonGeometry3d = typia.createAssert<PolygonGeometry3d>();
export const equalsPolygonGeometry3d = typia.createEquals<PolygonGeometry3d>();
export const isPolygonGeometry3d = typia.createIs<PolygonGeometry3d>();
export const randomPolygonGeometry3d = typia.createRandom<PolygonGeometry3d>();
export const stringifyPolygonGeometry3d =
  typia.json.createStringify<PolygonGeometry3d>();
export const validatePolygonGeometry3d =
  typia.createValidate<PolygonGeometry3d>();
