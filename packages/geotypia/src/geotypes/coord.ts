import typia from "typia";
import type { Coord } from "@jsse/geotypes";

// Coord
export const assertCoord = typia.createAssert<Coord>();
export const equalsCoord = typia.createEquals<Coord>();
export const isCoord = typia.createIs<Coord>();
export const randomCoord = typia.createRandom<Coord>();
export const stringifyCoord = typia.json.createStringify<Coord>();
export const validateCoord = typia.createValidate<Coord>();
