import type { GeoJSON, GeojsonCoord, Geometry } from "@jsse/geotypes";
import { isGeometryType } from "../is.js";

type CoordGenerator<T = GeojsonCoord> = Generator<T>;

function* geometryCoordGen<
  TGeometry extends Geometry<TCoordinate>,
  TCoordinate extends GeojsonCoord = GeojsonCoord,
>(
  geometry: TGeometry,
  options?: {
    excludeWrapCoord?: boolean;
  },
): CoordGenerator<TCoordinate> {
  switch (geometry.type) {
    case "Point": {
      yield geometry.coordinates;
      break;
    }
    case "LineString":
    case "MultiPoint": {
      yield* geometry.coordinates;
      break;
    }
    case "Polygon": {
      const maxIndex = options?.excludeWrapCoord
        ? geometry.coordinates.length - 1
        : geometry.coordinates.length;
      for (let i = 0; i < maxIndex; i++) {
        const c = geometry.coordinates[i];
        if (c) {
          yield* c;
        }
      }
      break;
    }
    case "MultiLineString": {
      for (const line of geometry.coordinates) {
        yield* line;
      }
      break;
    }
    case "MultiPolygon": {
      for (const polygon of geometry.coordinates) {
        const maxIndex = options?.excludeWrapCoord
          ? polygon.length - 1
          : polygon.length;
        for (let i = 0; i < maxIndex; i++) {
          const line = polygon[i];
          if (line) {
            yield* line;
          }
        }
      }
      break;
    }
    case "GeometryCollection": {
      for (const geom of geometry.geometries) {
        yield* geometryCoordGen(geom);
      }
      break;
    }
    default: {
      throw new Error("Invalid geojson-geometry object");
    }
  }
}

export function* coordGen<
  TGeojson extends GeoJSON<TCoordinate>,
  TCoordinate extends GeojsonCoord = GeojsonCoord,
>(geojson: TGeojson, excludeWrapCoord?: boolean): Generator<TCoordinate> {
  if (geojson.type === "FeatureCollection") {
    for (const feature of geojson.features) {
      yield* geometryCoordGen(feature.geometry, { excludeWrapCoord });
    }
  } else if (geojson.type === "Feature") {
    yield* geometryCoordGen(geojson.geometry, { excludeWrapCoord });
  } else if (isGeometryType(geojson.type)) {
    yield* geometryCoordGen(geojson, { excludeWrapCoord });
  } else {
    throw new Error("Invalid GeoJSON object");
  }
}
