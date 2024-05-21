import typia from "typia";
import type { LineStringGeometry } from "@jsse/geotypes";

// LineStringGeometry
export const assertLineStringGeometry =
  typia.createAssert<LineStringGeometry>();
export const equalsLineStringGeometry =
  typia.createEquals<LineStringGeometry>();
export const isLineStringGeometry = typia.createIs<LineStringGeometry>();
export const randomLineStringGeometry =
  typia.createRandom<LineStringGeometry>();
export const stringifyLineStringGeometry =
  typia.json.createStringify<LineStringGeometry>();
export const validateLineStringGeometry =
  typia.createValidate<LineStringGeometry>();
