export const GeojsonTag = {
  // geojson
  Geojson: 0b1,
  Coord2d: 0b10,
  Coord3d: 0b100,
  // geometries
  Point: 0b1000,
  MultiPoint: 0b1_0000,
  LineString: 0b10_0000,
  MultiLineString: 0b100_0000,
  Polygon: 0b1000_0000,
  MultiPolygon: 0b1_0000_0000,
  GeometryCollection: 0b10_0000_0000,
  // features
  Feature: 0b100_0000_0000,
  FeatureCollection: 0b1000_0000_0000,
} as const;

export const GeojsonTagSymbol = Symbol.for("@jsse/geo/json/tag");
