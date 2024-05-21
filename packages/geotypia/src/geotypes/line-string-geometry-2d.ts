import typia from "typia";
import type { LineStringGeometry2d } from "@jsse/geotypes";

// LineStringGeometry2d
export const assertLineStringGeometry2d =
  typia.createAssert<LineStringGeometry2d>();
export const equalsLineStringGeometry2d =
  typia.createEquals<LineStringGeometry2d>();
export const isLineStringGeometry2d = typia.createIs<LineStringGeometry2d>();
export const randomLineStringGeometry2d =
  typia.createRandom<LineStringGeometry2d>();
export const stringifyLineStringGeometry2d =
  typia.json.createStringify<LineStringGeometry2d>();
export const validateLineStringGeometry2d =
  typia.createValidate<LineStringGeometry2d>();
