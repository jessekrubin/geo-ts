import typia from "typia";
import type { MultiPointGeometry2d } from "@jsse/geotypes";

// MultiPointGeometry2d
export const assertMultiPointGeometry2d =
  typia.createAssert<MultiPointGeometry2d>();
export const equalsMultiPointGeometry2d =
  typia.createEquals<MultiPointGeometry2d>();
export const isMultiPointGeometry2d = typia.createIs<MultiPointGeometry2d>();
export const randomMultiPointGeometry2d =
  typia.createRandom<MultiPointGeometry2d>();
export const stringifyMultiPointGeometry2d =
  typia.json.createStringify<MultiPointGeometry2d>();
export const validateMultiPointGeometry2d =
  typia.createValidate<MultiPointGeometry2d>();
