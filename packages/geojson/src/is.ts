import type { GeoJsonTypes } from "@jsse/geotypes";

export function isGeometryType(value: unknown): value is GeoJsonTypes {
  return (
    typeof value === "string" &&
    (value === "Point" ||
      value === "LineString" ||
      value === "Polygon" ||
      value === "MultiPoint" ||
      value === "MultiLineString" ||
      value === "MultiPolygon" ||
      value === "GeometryCollection")
  );
}

export function isGeojsonType(value: unknown): value is GeoJsonTypes {
  return (
    typeof value === "string" &&
    (value === "Point" ||
      value === "LineString" ||
      value === "Polygon" ||
      value === "MultiPoint" ||
      value === "MultiLineString" ||
      value === "MultiPolygon" ||
      value === "GeometryCollection" ||
      value === "Feature" ||
      value === "FeatureCollection")
  );
}
