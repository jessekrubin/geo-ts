import typia from "typia";
import type { MultiPointGeometry3d } from "@jsse/geotypes";

// MultiPointGeometry3d
export const assertMultiPointGeometry3d =
  typia.createAssert<MultiPointGeometry3d>();
export const equalsMultiPointGeometry3d =
  typia.createEquals<MultiPointGeometry3d>();
export const isMultiPointGeometry3d = typia.createIs<MultiPointGeometry3d>();
export const randomMultiPointGeometry3d =
  typia.createRandom<MultiPointGeometry3d>();
export const stringifyMultiPointGeometry3d =
  typia.json.createStringify<MultiPointGeometry3d>();
export const validateMultiPointGeometry3d =
  typia.createValidate<MultiPointGeometry3d>();
