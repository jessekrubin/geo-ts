import typia from "typia";
import type { Coordinate2d } from "@jsse/geotypes";

// Coordinate2d
export const assertCoordinate2d = typia.createAssert<Coordinate2d>();
export const equalsCoordinate2d = typia.createEquals<Coordinate2d>();
export const isCoordinate2d = typia.createIs<Coordinate2d>();
export const randomCoordinate2d = typia.createRandom<Coordinate2d>();
export const stringifyCoordinate2d = typia.json.createStringify<Coordinate2d>();
export const validateCoordinate2d = typia.createValidate<Coordinate2d>();
