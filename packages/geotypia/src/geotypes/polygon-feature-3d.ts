import typia from "typia";
import type { PolygonFeature3d } from "@jsse/geotypes";

// PolygonFeature3d
export const assertPolygonFeature3d = typia.createAssert<PolygonFeature3d>();
export const equalsPolygonFeature3d = typia.createEquals<PolygonFeature3d>();
export const isPolygonFeature3d = typia.createIs<PolygonFeature3d>();
export const randomPolygonFeature3d = typia.createRandom<PolygonFeature3d>();
export const stringifyPolygonFeature3d =
  typia.json.createStringify<PolygonFeature3d>();
export const validatePolygonFeature3d =
  typia.createValidate<PolygonFeature3d>();
