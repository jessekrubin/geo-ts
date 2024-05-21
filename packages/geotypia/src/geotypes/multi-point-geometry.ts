import typia from "typia";
import type { MultiPointGeometry } from "@jsse/geotypes";

// MultiPointGeometry
export const assertMultiPointGeometry =
  typia.createAssert<MultiPointGeometry>();
export const equalsMultiPointGeometry =
  typia.createEquals<MultiPointGeometry>();
export const isMultiPointGeometry = typia.createIs<MultiPointGeometry>();
export const randomMultiPointGeometry =
  typia.createRandom<MultiPointGeometry>();
export const stringifyMultiPointGeometry =
  typia.json.createStringify<MultiPointGeometry>();
export const validateMultiPointGeometry =
  typia.createValidate<MultiPointGeometry>();
