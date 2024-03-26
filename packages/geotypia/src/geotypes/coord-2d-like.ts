import typia from "typia";
import type { Coord2dLike } from "@jsse/geotypes";

// Coord2dLike
export const assertCoord2dLike = typia.createAssert<Coord2dLike>();
export const equalsCoord2dLike = typia.createEquals<Coord2dLike>();
export const isCoord2dLike = typia.createIs<Coord2dLike>();
export const randomCoord2dLike = typia.createRandom<Coord2dLike>();
export const stringifyCoord2dLike = typia.json.createStringify<Coord2dLike>();
export const validateCoord2dLike = typia.createValidate<Coord2dLike>();
