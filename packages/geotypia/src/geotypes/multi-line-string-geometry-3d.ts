import typia from "typia";
import type { MultiLineStringGeometry3d } from "@jsse/geotypes";

// MultiLineStringGeometry3d
export const assertMultiLineStringGeometry3d =
  typia.createAssert<MultiLineStringGeometry3d>();
export const equalsMultiLineStringGeometry3d =
  typia.createEquals<MultiLineStringGeometry3d>();
export const isMultiLineStringGeometry3d =
  typia.createIs<MultiLineStringGeometry3d>();
export const randomMultiLineStringGeometry3d =
  typia.createRandom<MultiLineStringGeometry3d>();
export const stringifyMultiLineStringGeometry3d =
  typia.json.createStringify<MultiLineStringGeometry3d>();
export const validateMultiLineStringGeometry3d =
  typia.createValidate<MultiLineStringGeometry3d>();
