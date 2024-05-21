import typia from "typia";
import type { Coordinate } from "@jsse/geotypes";

// Coordinate
export const assertCoordinate = typia.createAssert<Coordinate>();
export const equalsCoordinate = typia.createEquals<Coordinate>();
export const isCoordinate = typia.createIs<Coordinate>();
export const randomCoordinate = typia.createRandom<Coordinate>();
export const stringifyCoordinate = typia.json.createStringify<Coordinate>();
export const validateCoordinate = typia.createValidate<Coordinate>();
