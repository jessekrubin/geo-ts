import typia from "typia";
import type { PointCoordinates } from "@jsse/geotypes";

// PointCoordinates
export const assertPointCoordinates = typia.createAssert<PointCoordinates>();
export const equalsPointCoordinates = typia.createEquals<PointCoordinates>();
export const isPointCoordinates = typia.createIs<PointCoordinates>();
export const randomPointCoordinates = typia.createRandom<PointCoordinates>();
export const stringifyPointCoordinates =
  typia.json.createStringify<PointCoordinates>();
export const validatePointCoordinates =
  typia.createValidate<PointCoordinates>();
