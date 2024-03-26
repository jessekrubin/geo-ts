import typia from "typia";
import type { CoordLike } from "@jsse/geotypes";

// CoordLike
export const assertCoordLike = typia.createAssert<CoordLike>();
export const equalsCoordLike = typia.createEquals<CoordLike>();
export const isCoordLike = typia.createIs<CoordLike>();
export const randomCoordLike = typia.createRandom<CoordLike>();
export const stringifyCoordLike = typia.json.createStringify<CoordLike>();
export const validateCoordLike = typia.createValidate<CoordLike>();
