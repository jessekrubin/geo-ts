import typia from "typia";
import type { LineStringCoordinates } from "@jsse/geotypes";

// LineStringCoordinates
export const assertLineStringCoordinates =
  typia.createAssert<LineStringCoordinates>();
export const equalsLineStringCoordinates =
  typia.createEquals<LineStringCoordinates>();
export const isLineStringCoordinates = typia.createIs<LineStringCoordinates>();
export const randomLineStringCoordinates =
  typia.createRandom<LineStringCoordinates>();
export const stringifyLineStringCoordinates =
  typia.json.createStringify<LineStringCoordinates>();
export const validateLineStringCoordinates =
  typia.createValidate<LineStringCoordinates>();
