import type { GeoJsonTypes } from "@jsse/geotypes";

const GEOJSON_GEOMETRY_TYPES = new Set([
  "Point",
  "LineString",
  "Polygon",
  "MultiPoint",
  "MultiLineString",
  "MultiPolygon",
  "GeometryCollection",
]);

export function isGeometryType(value: unknown): value is GeoJsonTypes {
  return typeof value === "string" && GEOJSON_GEOMETRY_TYPES.has(value);
}

const GEOJSON_TYPES = new Set([
  "Point",
  "LineString",
  "Polygon",
  "MultiPoint",
  "MultiLineString",
  "MultiPolygon",
  "GeometryCollection",
  "Feature",
  "FeatureCollection",
]);
export function isGeojsonType(value: unknown): value is GeoJsonTypes {
  return typeof value === "string" && GEOJSON_TYPES.has(value);
}
