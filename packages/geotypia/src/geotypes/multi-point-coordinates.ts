import typia from "typia";
import type { MultiPointCoordinates } from "@jsse/geotypes";

// MultiPointCoordinates
export const assertMultiPointCoordinates =
  typia.createAssert<MultiPointCoordinates>();
export const equalsMultiPointCoordinates =
  typia.createEquals<MultiPointCoordinates>();
export const isMultiPointCoordinates = typia.createIs<MultiPointCoordinates>();
export const randomMultiPointCoordinates =
  typia.createRandom<MultiPointCoordinates>();
export const stringifyMultiPointCoordinates =
  typia.json.createStringify<MultiPointCoordinates>();
export const validateMultiPointCoordinates =
  typia.createValidate<MultiPointCoordinates>();
