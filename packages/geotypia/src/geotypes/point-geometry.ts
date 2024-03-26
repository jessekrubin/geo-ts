import typia from "typia";
import type { PointGeometry } from "@jsse/geotypes";

// PointGeometry
export const assertPointGeometry = typia.createAssert<PointGeometry>();
export const equalsPointGeometry = typia.createEquals<PointGeometry>();
export const isPointGeometry = typia.createIs<PointGeometry>();
export const randomPointGeometry = typia.createRandom<PointGeometry>();
export const stringifyPointGeometry =
  typia.json.createStringify<PointGeometry>();
export const validatePointGeometry = typia.createValidate<PointGeometry>();
