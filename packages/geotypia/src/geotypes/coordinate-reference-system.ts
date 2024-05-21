import typia from "typia";
import type { CoordinateReferenceSystem } from "@jsse/geotypes";

// CoordinateReferenceSystem
export const assertCoordinateReferenceSystem =
  typia.createAssert<CoordinateReferenceSystem>();
export const equalsCoordinateReferenceSystem =
  typia.createEquals<CoordinateReferenceSystem>();
export const isCoordinateReferenceSystem =
  typia.createIs<CoordinateReferenceSystem>();
export const randomCoordinateReferenceSystem =
  typia.createRandom<CoordinateReferenceSystem>();
export const stringifyCoordinateReferenceSystem =
  typia.json.createStringify<CoordinateReferenceSystem>();
export const validateCoordinateReferenceSystem =
  typia.createValidate<CoordinateReferenceSystem>();
