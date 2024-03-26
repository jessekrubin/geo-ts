import typia from "typia";
import type { MultiLineStringGeometry2d } from "@jsse/geotypes";

// MultiLineStringGeometry2d
export const assertMultiLineStringGeometry2d =
  typia.createAssert<MultiLineStringGeometry2d>();
export const equalsMultiLineStringGeometry2d =
  typia.createEquals<MultiLineStringGeometry2d>();
export const isMultiLineStringGeometry2d =
  typia.createIs<MultiLineStringGeometry2d>();
export const randomMultiLineStringGeometry2d =
  typia.createRandom<MultiLineStringGeometry2d>();
export const stringifyMultiLineStringGeometry2d =
  typia.json.createStringify<MultiLineStringGeometry2d>();
export const validateMultiLineStringGeometry2d =
  typia.createValidate<MultiLineStringGeometry2d>();
