import typia from "typia";
import type { PolygonCoordinates } from "@jsse/geotypes";

// PolygonCoordinates
export const assertPolygonCoordinates =
  typia.createAssert<PolygonCoordinates>();
export const equalsPolygonCoordinates =
  typia.createEquals<PolygonCoordinates>();
export const isPolygonCoordinates = typia.createIs<PolygonCoordinates>();
export const randomPolygonCoordinates =
  typia.createRandom<PolygonCoordinates>();
export const stringifyPolygonCoordinates =
  typia.json.createStringify<PolygonCoordinates>();
export const validatePolygonCoordinates =
  typia.createValidate<PolygonCoordinates>();
