export {
  geometry,
  geometryCollection,
  geometryCollectionFeature,
  geometryCollectionGeometry,
  lineString,
  lineStringFeature,
  lineStringGeometry,
  multiLineString,
  multiLineStringFeature,
  multiLineStringGeometry,
  multiPoint,
  multiPointFeature,
  multiPointGeometry,
  multiPolygon,
  multiPolygonFeature,
  multiPolygonGeometry,
  point,
  pointFeature,
  pointGeometry,
  polygon,
  polygonFeature,
  polygonGeometry,
} from "./builders.js";
export { isGeojsonType, isGeometryType } from "./is.js";
export { coordAll } from "./meta/coord-all.js";
export { coordEach } from "./meta/coord-each.js";
export { coordGen } from "./meta/coord-gen.js";

export const pkgid = Symbol.for("@jsse/geojson");
