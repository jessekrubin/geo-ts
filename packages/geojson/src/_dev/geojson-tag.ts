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
//
// type GeojsonTagObject = {
//   coord2d: boolean;
//   coord3d: boolean;
//   point: boolean;
//   multiPoint: boolean;
//   lineString: boolean;
//   multiLineString: boolean;
//   polygon: boolean;
//   multiPolygon: boolean;
//   geometryCollection: boolean;
//   feature: boolean;
//   featureCollection: boolean;
// };
//
// export function geojsontag2obj(num: number) {
//   //   use bit xor to get the tag object
//   if (!(Number.isInteger(num) && num >= 1 && num <= 12)) {
//     throw new Error("Invalid GeojsonTag number");
//   }
//
//   const tagObj: GeojsonTagObject = {
//     coord2d: !!(num & GeojsonTag.Coord2d),
//     coord3d: !!(num & GeojsonTag.Coord3d),
//     point: !!(num & GeojsonTag.Point),
//     multiPoint: !!(num & GeojsonTag.MultiPoint),
//     lineString: !!(num & GeojsonTag.LineString),
//     multiLineString: !!(num & GeojsonTag.MultiLineString),
//     polygon: !!(num & GeojsonTag.Polygon),
//     multiPolygon: !!(num & GeojsonTag.MultiPolygon),
//     geometryCollection: !!(num & GeojsonTag.GeometryCollection),
//     feature: !!(num & GeojsonTag.Feature),
//     featureCollection: !!(num & GeojsonTag.FeatureCollection),
//   };
//   return tagObj;
// }
