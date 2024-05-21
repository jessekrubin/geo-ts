import typia from "typia";
import type { Coord3d } from "@jsse/geotypes";

// Coord3d
export const assertCoord3d = typia.createAssert<Coord3d>();
export const equalsCoord3d = typia.createEquals<Coord3d>();
export const isCoord3d = typia.createIs<Coord3d>();
export const randomCoord3d = typia.createRandom<Coord3d>();
export const stringifyCoord3d = typia.json.createStringify<Coord3d>();
export const validateCoord3d = typia.createValidate<Coord3d>();
