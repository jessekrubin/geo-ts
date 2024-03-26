import typia from "typia";
import type { MultiLineStringGeometry } from "@jsse/geotypes";

// MultiLineStringGeometry
export const assertMultiLineStringGeometry =
  typia.createAssert<MultiLineStringGeometry>();
export const equalsMultiLineStringGeometry =
  typia.createEquals<MultiLineStringGeometry>();
export const isMultiLineStringGeometry =
  typia.createIs<MultiLineStringGeometry>();
export const randomMultiLineStringGeometry =
  typia.createRandom<MultiLineStringGeometry>();
export const stringifyMultiLineStringGeometry =
  typia.json.createStringify<MultiLineStringGeometry>();
export const validateMultiLineStringGeometry =
  typia.createValidate<MultiLineStringGeometry>();
