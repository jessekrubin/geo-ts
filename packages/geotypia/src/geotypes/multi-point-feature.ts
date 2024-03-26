import typia from "typia";
import type { MultiPointFeature } from "@jsse/geotypes";

// MultiPointFeature
export const assertMultiPointFeature = typia.createAssert<MultiPointFeature>();
export const equalsMultiPointFeature = typia.createEquals<MultiPointFeature>();
export const isMultiPointFeature = typia.createIs<MultiPointFeature>();
export const randomMultiPointFeature = typia.createRandom<MultiPointFeature>();
export const stringifyMultiPointFeature =
  typia.json.createStringify<MultiPointFeature>();
export const validateMultiPointFeature =
  typia.createValidate<MultiPointFeature>();
