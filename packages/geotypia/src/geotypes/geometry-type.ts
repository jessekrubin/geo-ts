import typia from "typia";
import type { GeometryType } from "@jsse/geotypes";

// GeometryType
export const assertGeometryType = typia.createAssert<GeometryType>();
export const equalsGeometryType = typia.createEquals<GeometryType>();
export const isGeometryType = typia.createIs<GeometryType>();
export const randomGeometryType = typia.createRandom<GeometryType>();
export const stringifyGeometryType = typia.json.createStringify<GeometryType>();
export const validateGeometryType = typia.createValidate<GeometryType>();
