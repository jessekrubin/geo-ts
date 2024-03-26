import typia from "typia";
import type { MultiPointFeature2d } from "@jsse/geotypes";

// MultiPointFeature2d
export const assertMultiPointFeature2d =
  typia.createAssert<MultiPointFeature2d>();
export const equalsMultiPointFeature2d =
  typia.createEquals<MultiPointFeature2d>();
export const isMultiPointFeature2d = typia.createIs<MultiPointFeature2d>();
export const randomMultiPointFeature2d =
  typia.createRandom<MultiPointFeature2d>();
export const stringifyMultiPointFeature2d =
  typia.json.createStringify<MultiPointFeature2d>();
export const validateMultiPointFeature2d =
  typia.createValidate<MultiPointFeature2d>();
