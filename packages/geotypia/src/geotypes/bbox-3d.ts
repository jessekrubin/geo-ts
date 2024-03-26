import typia from "typia";
import type { BBox3d } from "@jsse/geotypes";

// BBox3d
export const assertBBox3d = typia.createAssert<BBox3d>();
export const equalsBBox3d = typia.createEquals<BBox3d>();
export const isBBox3d = typia.createIs<BBox3d>();
export const randomBBox3d = typia.createRandom<BBox3d>();
export const stringifyBBox3d = typia.json.createStringify<BBox3d>();
export const validateBBox3d = typia.createValidate<BBox3d>();
