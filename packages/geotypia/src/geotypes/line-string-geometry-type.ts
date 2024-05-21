import typia from "typia";
import type { LineStringGeometryType } from "@jsse/geotypes";

// LineStringGeometryType
export const assertLineStringGeometryType =
  typia.createAssert<LineStringGeometryType>();
export const equalsLineStringGeometryType =
  typia.createEquals<LineStringGeometryType>();
export const isLineStringGeometryType =
  typia.createIs<LineStringGeometryType>();
export const randomLineStringGeometryType =
  typia.createRandom<LineStringGeometryType>();
export const stringifyLineStringGeometryType =
  typia.json.createStringify<LineStringGeometryType>();
export const validateLineStringGeometryType =
  typia.createValidate<LineStringGeometryType>();
