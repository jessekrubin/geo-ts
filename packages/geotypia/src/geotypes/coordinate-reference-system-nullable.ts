import typia from "typia";
import type { CoordinateReferenceSystemNullable } from "@jsse/geotypes";

// CoordinateReferenceSystemNullable
export const assertCoordinateReferenceSystemNullable =
  typia.createAssert<CoordinateReferenceSystemNullable>();
export const equalsCoordinateReferenceSystemNullable =
  typia.createEquals<CoordinateReferenceSystemNullable>();
export const isCoordinateReferenceSystemNullable =
  typia.createIs<CoordinateReferenceSystemNullable>();
export const randomCoordinateReferenceSystemNullable =
  typia.createRandom<CoordinateReferenceSystemNullable>();
export const stringifyCoordinateReferenceSystemNullable =
  typia.json.createStringify<CoordinateReferenceSystemNullable>();
export const validateCoordinateReferenceSystemNullable =
  typia.createValidate<CoordinateReferenceSystemNullable>();
