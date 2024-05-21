import typia from "typia";
import type { LineStringGeometry3d } from "@jsse/geotypes";

// LineStringGeometry3d
export const assertLineStringGeometry3d =
  typia.createAssert<LineStringGeometry3d>();
export const equalsLineStringGeometry3d =
  typia.createEquals<LineStringGeometry3d>();
export const isLineStringGeometry3d = typia.createIs<LineStringGeometry3d>();
export const randomLineStringGeometry3d =
  typia.createRandom<LineStringGeometry3d>();
export const stringifyLineStringGeometry3d =
  typia.json.createStringify<LineStringGeometry3d>();
export const validateLineStringGeometry3d =
  typia.createValidate<LineStringGeometry3d>();
