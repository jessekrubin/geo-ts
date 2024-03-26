import typia from "typia";
import type { MultiPointFeature3d } from "@jsse/geotypes";

// MultiPointFeature3d
export const assertMultiPointFeature3d =
  typia.createAssert<MultiPointFeature3d>();
export const equalsMultiPointFeature3d =
  typia.createEquals<MultiPointFeature3d>();
export const isMultiPointFeature3d = typia.createIs<MultiPointFeature3d>();
export const randomMultiPointFeature3d =
  typia.createRandom<MultiPointFeature3d>();
export const stringifyMultiPointFeature3d =
  typia.json.createStringify<MultiPointFeature3d>();
export const validateMultiPointFeature3d =
  typia.createValidate<MultiPointFeature3d>();
