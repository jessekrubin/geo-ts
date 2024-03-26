import typia from "typia";
import type { Coord3dLike } from "@jsse/geotypes";

// Coord3dLike
export const assertCoord3dLike = typia.createAssert<Coord3dLike>();
export const equalsCoord3dLike = typia.createEquals<Coord3dLike>();
export const isCoord3dLike = typia.createIs<Coord3dLike>();
export const randomCoord3dLike = typia.createRandom<Coord3dLike>();
export const stringifyCoord3dLike = typia.json.createStringify<Coord3dLike>();
export const validateCoord3dLike = typia.createValidate<Coord3dLike>();
