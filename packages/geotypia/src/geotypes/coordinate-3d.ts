import typia from "typia";
import type { Coordinate3d } from "@jsse/geotypes";

// Coordinate3d
export const assertCoordinate3d = typia.createAssert<Coordinate3d>();
export const equalsCoordinate3d = typia.createEquals<Coordinate3d>();
export const isCoordinate3d = typia.createIs<Coordinate3d>();
export const randomCoordinate3d = typia.createRandom<Coordinate3d>();
export const stringifyCoordinate3d = typia.json.createStringify<Coordinate3d>();
export const validateCoordinate3d = typia.createValidate<Coordinate3d>();
