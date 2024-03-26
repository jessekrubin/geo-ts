import typia from "typia";
import type { PolygonGeometry } from "@jsse/geotypes";

// PolygonGeometry
export const assertPolygonGeometry = typia.createAssert<PolygonGeometry>();
export const equalsPolygonGeometry = typia.createEquals<PolygonGeometry>();
export const isPolygonGeometry = typia.createIs<PolygonGeometry>();
export const randomPolygonGeometry = typia.createRandom<PolygonGeometry>();
export const stringifyPolygonGeometry =
  typia.json.createStringify<PolygonGeometry>();
export const validatePolygonGeometry = typia.createValidate<PolygonGeometry>();
