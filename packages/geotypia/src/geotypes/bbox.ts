import typia from "typia";
import type { BBox } from "@jsse/geotypes";

// BBox
export const assertBBox = typia.createAssert<BBox>();
export const equalsBBox = typia.createEquals<BBox>();
export const isBBox = typia.createIs<BBox>();
export const randomBBox = typia.createRandom<BBox>();
export const stringifyBBox = typia.json.createStringify<BBox>();
export const validateBBox = typia.createValidate<BBox>();
