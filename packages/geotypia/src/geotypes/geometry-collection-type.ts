import typia from "typia";
import type { GeometryCollectionType } from "@jsse/geotypes";

// GeometryCollectionType
export const assertGeometryCollectionType =
  typia.createAssert<GeometryCollectionType>();
export const equalsGeometryCollectionType =
  typia.createEquals<GeometryCollectionType>();
export const isGeometryCollectionType =
  typia.createIs<GeometryCollectionType>();
export const randomGeometryCollectionType =
  typia.createRandom<GeometryCollectionType>();
export const stringifyGeometryCollectionType =
  typia.json.createStringify<GeometryCollectionType>();
export const validateGeometryCollectionType =
  typia.createValidate<GeometryCollectionType>();
