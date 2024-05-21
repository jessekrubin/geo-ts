import typia from "typia";
import type { MultiPointGeometryType } from "@jsse/geotypes";

// MultiPointGeometryType
export const assertMultiPointGeometryType =
  typia.createAssert<MultiPointGeometryType>();
export const equalsMultiPointGeometryType =
  typia.createEquals<MultiPointGeometryType>();
export const isMultiPointGeometryType =
  typia.createIs<MultiPointGeometryType>();
export const randomMultiPointGeometryType =
  typia.createRandom<MultiPointGeometryType>();
export const stringifyMultiPointGeometryType =
  typia.json.createStringify<MultiPointGeometryType>();
export const validateMultiPointGeometryType =
  typia.createValidate<MultiPointGeometryType>();
