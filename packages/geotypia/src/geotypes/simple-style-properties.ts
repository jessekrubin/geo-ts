import typia from "typia";
import type { SimpleStyleProperties } from "@jsse/geotypes";

// SimpleStyleProperties
export const assertSimpleStyleProperties =
  typia.createAssert<SimpleStyleProperties>();
export const equalsSimpleStyleProperties =
  typia.createEquals<SimpleStyleProperties>();
export const isSimpleStyleProperties = typia.createIs<SimpleStyleProperties>();
export const randomSimpleStyleProperties =
  typia.createRandom<SimpleStyleProperties>();
export const stringifySimpleStyleProperties =
  typia.json.createStringify<SimpleStyleProperties>();
export const validateSimpleStyleProperties =
  typia.createValidate<SimpleStyleProperties>();
