import typia from "typia";
import type { MultiLineStringCoordinates } from "@jsse/geotypes";

// MultiLineStringCoordinates
export const assertMultiLineStringCoordinates =
  typia.createAssert<MultiLineStringCoordinates>();
export const equalsMultiLineStringCoordinates =
  typia.createEquals<MultiLineStringCoordinates>();
export const isMultiLineStringCoordinates =
  typia.createIs<MultiLineStringCoordinates>();
export const randomMultiLineStringCoordinates =
  typia.createRandom<MultiLineStringCoordinates>();
export const stringifyMultiLineStringCoordinates =
  typia.json.createStringify<MultiLineStringCoordinates>();
export const validateMultiLineStringCoordinates =
  typia.createValidate<MultiLineStringCoordinates>();
