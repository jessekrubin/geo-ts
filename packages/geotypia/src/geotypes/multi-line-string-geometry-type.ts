import typia from "typia";
import type { MultiLineStringGeometryType } from "@jsse/geotypes";

// MultiLineStringGeometryType
export const assertMultiLineStringGeometryType =
  typia.createAssert<MultiLineStringGeometryType>();
export const equalsMultiLineStringGeometryType =
  typia.createEquals<MultiLineStringGeometryType>();
export const isMultiLineStringGeometryType =
  typia.createIs<MultiLineStringGeometryType>();
export const randomMultiLineStringGeometryType =
  typia.createRandom<MultiLineStringGeometryType>();
export const stringifyMultiLineStringGeometryType =
  typia.json.createStringify<MultiLineStringGeometryType>();
export const validateMultiLineStringGeometryType =
  typia.createValidate<MultiLineStringGeometryType>();
