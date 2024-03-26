import typia from "typia";
import type { Feature } from "@jsse/geotypes";

// Feature
export const assertFeature = typia.createAssert<Feature>();
export const equalsFeature = typia.createEquals<Feature>();
export const isFeature = typia.createIs<Feature>();
export const randomFeature = typia.createRandom<Feature>();
export const stringifyFeature = typia.json.createStringify<Feature>();
export const validateFeature = typia.createValidate<Feature>();
