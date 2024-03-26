import typia from "typia";
import type { GeoJsonProperties } from "@jsse/geotypes";

// GeoJsonProperties
export const assertGeoJsonProperties = typia.createAssert<GeoJsonProperties>();
export const equalsGeoJsonProperties = typia.createEquals<GeoJsonProperties>();
export const isGeoJsonProperties = typia.createIs<GeoJsonProperties>();
export const randomGeoJsonProperties = typia.createRandom<GeoJsonProperties>();
export const stringifyGeoJsonProperties =
  typia.json.createStringify<GeoJsonProperties>();
export const validateGeoJsonProperties =
  typia.createValidate<GeoJsonProperties>();
