import typia from "typia";
import type { BBox2d } from "@jsse/geotypes";

// BBox2d
export const assertBBox2d = typia.createAssert<BBox2d>();
export const equalsBBox2d = typia.createEquals<BBox2d>();
export const isBBox2d = typia.createIs<BBox2d>();
export const randomBBox2d = typia.createRandom<BBox2d>();
export const stringifyBBox2d = typia.json.createStringify<BBox2d>();
export const validateBBox2d = typia.createValidate<BBox2d>();
