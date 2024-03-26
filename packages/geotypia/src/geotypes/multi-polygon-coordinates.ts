import typia from "typia";
import type { MultiPolygonCoordinates } from "@jsse/geotypes";

// MultiPolygonCoordinates
export const assertMultiPolygonCoordinates =
  typia.createAssert<MultiPolygonCoordinates>();
export const equalsMultiPolygonCoordinates =
  typia.createEquals<MultiPolygonCoordinates>();
export const isMultiPolygonCoordinates =
  typia.createIs<MultiPolygonCoordinates>();
export const randomMultiPolygonCoordinates =
  typia.createRandom<MultiPolygonCoordinates>();
export const stringifyMultiPolygonCoordinates =
  typia.json.createStringify<MultiPolygonCoordinates>();
export const validateMultiPolygonCoordinates =
  typia.createValidate<MultiPolygonCoordinates>();
