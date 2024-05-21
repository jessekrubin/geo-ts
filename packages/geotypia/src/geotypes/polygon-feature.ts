import typia from "typia";
import type { PolygonFeature } from "@jsse/geotypes";

// PolygonFeature
export const assertPolygonFeature = typia.createAssert<PolygonFeature>();
export const equalsPolygonFeature = typia.createEquals<PolygonFeature>();
export const isPolygonFeature = typia.createIs<PolygonFeature>();
export const randomPolygonFeature = typia.createRandom<PolygonFeature>();
export const stringifyPolygonFeature =
  typia.json.createStringify<PolygonFeature>();
export const validatePolygonFeature = typia.createValidate<PolygonFeature>();
