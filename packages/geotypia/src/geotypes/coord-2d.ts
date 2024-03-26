import typia from "typia";
import type { Coord2d } from "@jsse/geotypes";

// Coord2d
export const assertCoord2d = typia.createAssert<Coord2d>();
export const equalsCoord2d = typia.createEquals<Coord2d>();
export const isCoord2d = typia.createIs<Coord2d>();
export const randomCoord2d = typia.createRandom<Coord2d>();
export const stringifyCoord2d = typia.json.createStringify<Coord2d>();
export const validateCoord2d = typia.createValidate<Coord2d>();
