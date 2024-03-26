import typia from "typia";
import type { PointGeometryType } from "@jsse/geotypes";

// PointGeometryType
export const assertPointGeometryType = typia.createAssert<PointGeometryType>();
export const equalsPointGeometryType = typia.createEquals<PointGeometryType>();
export const isPointGeometryType = typia.createIs<PointGeometryType>();
export const randomPointGeometryType = typia.createRandom<PointGeometryType>();
export const stringifyPointGeometryType =
  typia.json.createStringify<PointGeometryType>();
export const validatePointGeometryType =
  typia.createValidate<PointGeometryType>();
