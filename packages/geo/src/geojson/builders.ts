import type {
  BBox,
  Coord2d,
  Coord3d,
  Feature,
  FeatureCollection,
  FeatureOptions,
  FeatureProperties,
  GeojsonCoord,
  GeoJsonProperties,
  Geometry,
  GeometryCollection,
  GeometryObject,
  LineStringGeometry,
  MultiLineStringGeometry,
  MultiPointGeometry,
  MultiPolygonGeometry,
  PointGeometry,
  PolygonGeometry,
  PrimitiveGeometry,
} from "@jsse/geotypes";

// =============================================================================
// GEOMETRIES
// =============================================================================

export function pointGeometry<TCoord extends GeojsonCoord>(
  coord: TCoord,
): PointGeometry<TCoord> {
  return {
    type: "Point",
    coordinates: coord,
  };
}

export function lineStringGeometry<TCoord extends GeojsonCoord>(
  coords: TCoord[],
): LineStringGeometry<TCoord> {
  return {
    type: "LineString",
    coordinates: coords,
  };
}

export function polygonGeometry<TCoord extends GeojsonCoord>(
  coords: TCoord[][],
): PolygonGeometry<TCoord> {
  return {
    type: "Polygon",
    coordinates: coords,
  };
}

export function multiPointGeometry<TCoord extends GeojsonCoord>(
  coords: TCoord[],
): MultiPointGeometry<TCoord> {
  return {
    type: "MultiPoint",
    coordinates: coords,
  };
}

export function multiLineStringGeometry<TCoord extends GeojsonCoord>(
  coords: TCoord[][],
): MultiLineStringGeometry<TCoord> {
  return {
    type: "MultiLineString",
    coordinates: coords,
  };
}

export function multiPolygonGeometry<TCoord extends GeojsonCoord>(
  coords: TCoord[][][],
): MultiPolygonGeometry<TCoord> {
  return {
    type: "MultiPolygon",
    coordinates: coords,
  };
}

export function geometryCollectionGeometry(
  geometries: PrimitiveGeometry[],
): GeometryCollection {
  return {
    type: "GeometryCollection",
    geometries,
  };
}

// Overload for Point
export function geometry<TCoordinate extends GeojsonCoord = GeojsonCoord>(
  type: "Point",
  coords: TCoordinate,
): PointGeometry<TCoordinate>;
export function geometry<TCoordinate extends GeojsonCoord = GeojsonCoord>(
  type: "LineString",
  coords: TCoordinate[],
): LineStringGeometry<TCoordinate>;
export function geometry<TCoordinate extends GeojsonCoord = GeojsonCoord>(
  type: "Polygon",
  coords: TCoordinate[][],
): PolygonGeometry<TCoordinate>;
export function geometry<TCoordinate extends GeojsonCoord = GeojsonCoord>(
  type: "MultiPoint",
  coords: TCoordinate[],
): MultiPointGeometry<TCoordinate>;
export function geometry<TCoordinate extends GeojsonCoord = GeojsonCoord>(
  type: "MultiLineString",
  coords: TCoordinate[][],
): MultiLineStringGeometry<TCoordinate>;
export function geometry<TCoordinate extends GeojsonCoord = GeojsonCoord>(
  type: "MultiPolygon",
  coords: TCoordinate[][][],
): MultiPolygonGeometry<TCoordinate>;
export function geometry(
  type: PrimitiveGeometry["type"],
  coords: GeojsonCoord | GeojsonCoord[] | GeojsonCoord[][] | GeojsonCoord[][][],
): PrimitiveGeometry {
  switch (type) {
    case "Point": {
      return pointGeometry(coords as GeojsonCoord);
    }
    case "LineString": {
      return lineStringGeometry(coords as GeojsonCoord[]);
    }
    case "Polygon": {
      return polygonGeometry(coords as GeojsonCoord[][]);
    }
    case "MultiPoint": {
      return multiPointGeometry(coords as GeojsonCoord[]);
    }
    case "MultiLineString": {
      return multiLineStringGeometry(coords as GeojsonCoord[][]);
    }
    case "MultiPolygon": {
      return multiPolygonGeometry(coords as GeojsonCoord[][][]);
    }
    default: {
      throw new TypeError(`Invalid geometry type: ${type}`);
    }
  }
}

// =============================================================================
// FEATURES
// =============================================================================

function _featureProperties<TProperties = GeoJsonProperties>(
  properties?: TProperties,
): FeatureProperties<TProperties> {
  if (properties === undefined) {
    return {} as FeatureProperties<TProperties>;
  }
  return properties;
}

export function pointFeature<
  TCoord extends GeojsonCoord = Coord2d | Coord3d,
  TProperties = GeoJsonProperties,
>(
  coord: TCoord,
  properties?: TProperties,
  options?: FeatureOptions,
): Feature<PointGeometry<TCoord>, TProperties> {
  return {
    type: "Feature",
    id: options?.id,
    bbox: options?.bbox,
    crs: options?.crs,
    properties: _featureProperties(properties),
    geometry: pointGeometry(coord),
  };
}

export function lineStringFeature<
  TCoord extends GeojsonCoord = Coord2d | Coord3d,
  TProperties extends GeoJsonProperties = GeoJsonProperties,
>(
  coords: TCoord[],
  properties?: TProperties,
  options?: FeatureOptions,
): Feature<LineStringGeometry<TCoord>, TProperties> {
  return {
    type: "Feature",
    id: options?.id,
    bbox: options?.bbox,
    crs: options?.crs,
    properties: _featureProperties(properties),
    geometry: lineStringGeometry(coords),
  };
}

export function polygonFeature<
  TCoord extends GeojsonCoord = Coord2d | Coord3d,
  TProperties extends GeoJsonProperties = GeoJsonProperties,
>(
  coords: TCoord[][],
  properties?: TProperties,
  options?: FeatureOptions,
): Feature<PolygonGeometry<TCoord>, TProperties> {
  return {
    type: "Feature",
    id: options?.id,
    bbox: options?.bbox,
    crs: options?.crs,
    properties: _featureProperties(properties),
    geometry: polygonGeometry(coords),
  };
}

export function multiPointFeature<
  TCoord extends GeojsonCoord = Coord2d | Coord3d,
  TProperties extends GeoJsonProperties = GeoJsonProperties,
>(
  coords: TCoord[],
  properties?: TProperties,
  options?: FeatureOptions,
): Feature<MultiPointGeometry<TCoord>, TProperties, FeatureOptions> {
  return {
    type: "Feature",
    id: options?.id,
    bbox: options?.bbox,
    crs: options?.crs,
    properties: _featureProperties(properties),
    geometry: multiPointGeometry(coords),
  };
}

export function multiLineStringFeature<
  TCoord extends GeojsonCoord = Coord2d | Coord3d,
  TProperties extends GeoJsonProperties = GeoJsonProperties,
>(
  coords: TCoord[][],
  properties?: TProperties,
  options?: FeatureOptions,
): Feature<MultiLineStringGeometry<TCoord>, TProperties, FeatureOptions> {
  return {
    type: "Feature",
    id: options?.id,
    bbox: options?.bbox,
    crs: options?.crs,
    properties: _featureProperties(properties),
    geometry: multiLineStringGeometry(coords),
  };
}

export function multiPolygonFeature<
  TCoord extends GeojsonCoord = Coord2d | Coord3d,
  TProperties extends GeoJsonProperties = GeoJsonProperties,
>(
  coords: TCoord[][][],
  properties?: TProperties,
  options?: FeatureOptions,
): Feature<MultiPolygonGeometry<TCoord>, TProperties> {
  return {
    type: "Feature",
    id: options?.id,
    bbox: options?.bbox,
    crs: options?.crs,
    properties: _featureProperties(properties),
    geometry: multiPolygonGeometry(coords),
  };
}

export function geometryCollectionFeature<
  TProperties extends GeoJsonProperties = GeoJsonProperties,
>(
  geometries: PrimitiveGeometry[],
  properties?: TProperties,
  options: FeatureOptions = {},
): Feature<GeometryCollection, TProperties> {
  return {
    type: "Feature",
    id: options.id,
    bbox: options.bbox,
    crs: options.crs,
    properties: _featureProperties(properties),
    geometry: geometryCollectionGeometry(geometries),
  };
}

export function featureCollection<
  G extends GeometryObject = Geometry,
  P extends GeoJsonProperties = GeoJsonProperties,
>(
  features: Feature<G, P>[],
  options: { bbox?: BBox; id?: string | number } = {},
): FeatureCollection<G, P> {
  return {
    type: "FeatureCollection",
    id: options.id,
    bbox: options.bbox,
    features,
  };
}

// turf helpers aliases
export {
  geometryCollectionFeature as geometryCollection,
  lineStringFeature as lineString,
  multiLineStringFeature as multiLineString,
  multiPointFeature as multiPoint,
  multiPolygonFeature as multiPolygon,
  pointFeature as point,
  polygonFeature as polygon,
};
