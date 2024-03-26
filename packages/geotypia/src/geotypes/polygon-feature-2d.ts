import typia from "typia";
import type { PolygonFeature2d } from "@jsse/geotypes";

// PolygonFeature2d
export const assertPolygonFeature2d = typia.createAssert<PolygonFeature2d>();
export const equalsPolygonFeature2d = typia.createEquals<PolygonFeature2d>();
export const isPolygonFeature2d = typia.createIs<PolygonFeature2d>();
export const randomPolygonFeature2d = typia.createRandom<PolygonFeature2d>();
export const stringifyPolygonFeature2d =
  typia.json.createStringify<PolygonFeature2d>();
export const validatePolygonFeature2d =
  typia.createValidate<PolygonFeature2d>();
