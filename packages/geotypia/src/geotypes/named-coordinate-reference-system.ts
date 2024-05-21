import typia from "typia";
import type { NamedCoordinateReferenceSystem } from "@jsse/geotypes";

// NamedCoordinateReferenceSystem
export const assertNamedCoordinateReferenceSystem =
  typia.createAssert<NamedCoordinateReferenceSystem>();
export const equalsNamedCoordinateReferenceSystem =
  typia.createEquals<NamedCoordinateReferenceSystem>();
export const isNamedCoordinateReferenceSystem =
  typia.createIs<NamedCoordinateReferenceSystem>();
export const randomNamedCoordinateReferenceSystem =
  typia.createRandom<NamedCoordinateReferenceSystem>();
export const stringifyNamedCoordinateReferenceSystem =
  typia.json.createStringify<NamedCoordinateReferenceSystem>();
export const validateNamedCoordinateReferenceSystem =
  typia.createValidate<NamedCoordinateReferenceSystem>();
