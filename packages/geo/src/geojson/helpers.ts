import type {
  Coord2d,
  Coord3d,
  Feature,
  FeatureOptions,
  FeatureProperties,
  GeojsonCoord,
  GeoJsonProperties,
  LineStringGeometry,
  MultiLineStringGeometry,
  MultiPointGeometry,
  MultiPolygonGeometry,
  PointGeometry,
  PolygonGeometry,
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

// =============================================================================
// FEATURES
// =============================================================================

function _featureBase(
  options?: FeatureOptions,
): Pick<Feature, "type" | "id" | "bbox"> {
  return {
    type: "Feature",
    ...(options?.id && { id: options.id }),
    ...(options?.bbox && { bbox: options.bbox }),
  };
}

function _featureProperties<TProperties = GeoJsonProperties>(
  properties?: TProperties,
): FeatureProperties<TProperties> {
  return (
    // eslint-disable-next-line unicorn/no-null
    (
      properties === null ? null : (properties ?? {})
    ) as FeatureProperties<TProperties>
  );
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
    ..._featureBase(options),
    geometry: pointGeometry(coord),
    properties: _featureProperties(properties),
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
    geometry: lineStringGeometry(coords),
    properties: _featureProperties(properties),
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
    geometry: polygonGeometry(coords),
    properties: _featureProperties(properties),
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
    geometry: multiPointGeometry(coords),
    properties: _featureProperties(properties),
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
    geometry: multiLineStringGeometry(coords),
    properties: _featureProperties(properties),
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
    geometry: multiPolygonGeometry(coords),
    properties: _featureProperties(properties),
  };
}

// turf helpers aliases
export {
  lineStringFeature as lineString,
  multiLineStringFeature as multiLineString,
  multiPointFeature as multiPoint,
  multiPolygonFeature as multiPolygon,
  pointFeature as point,
  polygonFeature as polygon,
};
