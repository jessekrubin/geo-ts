import typia from "typia";
import type { LinkedCoordinateReferenceSystem } from "@jsse/geotypes";

// LinkedCoordinateReferenceSystem
export const assertLinkedCoordinateReferenceSystem =
  typia.createAssert<LinkedCoordinateReferenceSystem>();
export const equalsLinkedCoordinateReferenceSystem =
  typia.createEquals<LinkedCoordinateReferenceSystem>();
export const isLinkedCoordinateReferenceSystem =
  typia.createIs<LinkedCoordinateReferenceSystem>();
export const randomLinkedCoordinateReferenceSystem =
  typia.createRandom<LinkedCoordinateReferenceSystem>();
export const stringifyLinkedCoordinateReferenceSystem =
  typia.json.createStringify<LinkedCoordinateReferenceSystem>();
export const validateLinkedCoordinateReferenceSystem =
  typia.createValidate<LinkedCoordinateReferenceSystem>();
