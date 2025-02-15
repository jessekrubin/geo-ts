import type { IsEqual, IsUnknown } from "../utypes.js";
import type { BBox } from "./bbox.js";
import type { Coord2d, Coord3d } from "./coord.js";
import type { GeojsonCoordinateReferenceSystem } from "./geojson-crs.js";

export type { BBox } from "./bbox.js";
export type GeojsonCoord = Coord2d | Coord3d;
export type GeoJsonGeometryTypes =
  | "Point"
  | "LineString"
  | "Polygon"
  | "MultiPoint"
  | "MultiLineString"
  | "MultiPolygon"
  | "GeometryCollection";
export type GeoJsonTypes =
  | "Feature"
  | "FeatureCollection"
  | GeoJsonGeometryTypes;

/**
 * A LineString is an array of two or more positions.
 * const lineString: LineStringCoordinates = [ [100.0, 0.0], [101.0, 1.0] ];
 */
export type LineStringCoordinates<
  TCoordinate extends GeojsonCoord = GeojsonCoord,
> = [TCoordinate, TCoordinate, ...TCoordinate[]];

export type LinearRing<TCoordinate extends GeojsonCoord = GeojsonCoord> = [
  TCoordinate,
  TCoordinate,
  TCoordinate,
  TCoordinate,
  ...TCoordinate[],
];

/**
 * GeoJson Point Geometry
 *
 * @example
 * const point: PointGeometry = {
 *   type: "Point",
 *   coordinates: [100.0, 0.0],
 *   bbox: [100.0, 0.0, 100.0, 0.0],
 * };
 */
export type PointGeometry<TCoordinate extends GeojsonCoord = GeojsonCoord> = {
  type: "Point";
  coordinates: TCoordinate;
  bbox?: BBox;
};
export type LineStringGeometry<
  TCoordinate extends GeojsonCoord = GeojsonCoord,
> = {
  type: "LineString";
  coordinates: TCoordinate[];
  bbox?: BBox;
};
export type PolygonGeometry<TCoordinate extends GeojsonCoord = GeojsonCoord> = {
  type: "Polygon";
  coordinates: TCoordinate[][];
  bbox?: BBox;
};
export type MultiPointGeometry<
  TCoordinate extends GeojsonCoord = GeojsonCoord,
> = {
  type: "MultiPoint";
  coordinates: TCoordinate[];
  bbox?: BBox;
};
export type MultiLineStringGeometry<
  TCoordinate extends GeojsonCoord = GeojsonCoord,
> = {
  type: "MultiLineString";
  coordinates: TCoordinate[][];
  bbox?: BBox;
};
export type MultiPolygonGeometry<
  TCoordinate extends GeojsonCoord = GeojsonCoord,
> = {
  type: "MultiPolygon";
  coordinates: TCoordinate[][][];
  bbox?: BBox;
};

export type PrimitiveGeometry<TCoordinate extends GeojsonCoord = GeojsonCoord> =

    | PointGeometry<TCoordinate>
    | LineStringGeometry<TCoordinate>
    | PolygonGeometry<TCoordinate>
    | MultiPointGeometry<TCoordinate>
    | MultiLineStringGeometry<TCoordinate>
    | MultiPolygonGeometry<TCoordinate>;

export type PrimitiveGeometryCoords<
  TCoordinate extends GeojsonCoord = GeojsonCoord,
> = {
  Point: TCoordinate;
  LineString: TCoordinate[];
  Polygon: TCoordinate[][];
  MultiPoint: TCoordinate[];
  MultiLineString: TCoordinate[][];
  MultiPolygon: TCoordinate[][][];
};

/**
 * Use `interface` instead of `type` for declaration merging => recursive type
 */
// eslint-disable-next-line @typescript-eslint/consistent-type-definitions
export interface GeometryCollection<TGeometry extends Geometry = Geometry> {
  type: "GeometryCollection";
  geometries: TGeometry[];
}

export type Geometry<TCoordinate extends GeojsonCoord = GeojsonCoord> =
  | PrimitiveGeometry<TCoordinate>
  | GeometryCollection<Geometry<TCoordinate>>;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type GeoJsonProperties<TValue = any> = { [name: string]: TValue } | null;

export type FeatureOptions = {
  id?: string | number;
  bbox?: BBox;
  crs?: GeojsonCoordinateReferenceSystem;
};

export type FeatureProperties<TProperties> =
  IsUnknown<TProperties> extends true ? GeoJsonProperties : TProperties;

export type Feature<
  TGeometry extends Geometry | null = Geometry | null,
  TProperties = GeoJsonProperties,
  TFeatureOptions extends FeatureOptions = FeatureOptions,
> = {
  type: "Feature";
  geometry: TGeometry;
  // IsUndefined<TProperties> extends true ? GeoJsonProperties : TProperties;
  properties: FeatureProperties<TProperties>;
} & TFeatureOptions;

export type FeatureCollection<
  TGeometry extends Geometry | null = Geometry,
  TProperties = GeoJsonProperties,
  TFeatureOptions extends FeatureOptions = FeatureOptions,
> = {
  type: "FeatureCollection";
  features: Feature<TGeometry, TProperties, TFeatureOptions>[];
} & TFeatureOptions;

export type GeoJSON<TCoordinate extends GeojsonCoord = GeojsonCoord> =
  | Geometry<TCoordinate>
  | Feature<Geometry<TCoordinate> | null>
  | FeatureCollection<Geometry<TCoordinate>>;

// =====================================================================
// @types/geojson COMPAT ~ @types/geojson COMPAT ~ @types/geojson COMPAT
// =====================================================================

/**
 * Point Geometry Alias (compat w/ `@types/geojson`)
 */
export type Point<TCoordinate extends GeojsonCoord = GeojsonCoord> =
  PointGeometry<TCoordinate>;

/**
 * LineString Geometry Alias (compat w/ `@types/geojson`)
 */
export type LineString<TCoordinate extends GeojsonCoord = GeojsonCoord> =
  LineStringGeometry<TCoordinate>;

/**
 * Polygon Geometry Alias (compat w/ `@types/geojson`)
 */
export type Polygon<TCoordinate extends GeojsonCoord = GeojsonCoord> =
  PolygonGeometry<TCoordinate>;

/**
 * MultiPoint Geometry Alias (compat w/ `@types/geojson`)
 */
export type MultiPoint<TCoordinate extends GeojsonCoord = GeojsonCoord> =
  MultiPointGeometry<TCoordinate>;

/**
 * MultiLineString Geometry Alias (compat w/ `@types/geojson`)
 */
export type MultiLineString<TCoordinate extends GeojsonCoord = GeojsonCoord> =
  MultiLineStringGeometry<TCoordinate>;

/**
 * MultiPolygon Geometry Alias (compat w/ `@types/geojson`)
 */
export type MultiPolygon<TCoordinate extends GeojsonCoord = GeojsonCoord> =
  MultiPolygonGeometry<TCoordinate>;

/**
 * GeometryCollection Alias (compat w/ `@types/geojson`)
 */
export type GeometryObject<TCoordinate extends GeojsonCoord = GeojsonCoord> =
  Geometry<TCoordinate>;

// =============================================================================
// GEOJSON EXTRA TYPES
// =============================================================================

export type GeoJSON2d = GeoJSON<Coord2d>;
export type GeoJSON3d = GeoJSON<Coord3d>;

// ===================================================================
// 2D GEOMETRY ~ 2D GEOMETRY ~ 2D GEOMETRY ~ 2D GEOMETRY ~ 2D GEOMETRY
// ===================================================================

/**
 * Point Geometry 2D
 */
export type PointGeometry2d = PointGeometry<Coord2d>;

/**
 * LineString Geometry 2D
 */
export type LineStringGeometry2d = LineStringGeometry<Coord2d>;

/**
 * Polygon Geometry 2D
 */
export type PolygonGeometry2d = PolygonGeometry<Coord2d>;

/**
 * MultiPoint Geometry 2D
 */
export type MultiPointGeometry2d = MultiPointGeometry<Coord2d>;

/**
 * MultiLineString Geometry 2D
 */
export type MultiLineStringGeometry2d = MultiLineStringGeometry<Coord2d>;

/**
 * MultiPolygon Geometry 2D
 */
export type MultiPolygonGeometry2d = MultiPolygonGeometry<Coord2d>;

/**
 * GeometryCollection 2D
 */
export type GeometryCollection2d = GeometryCollection<Geometry2d>;

/**
 * Geometry 2D
 */
export type Geometry2d = Geometry<Coord2d>;

// ===================================================================
// 3D GEOMETRY ~ 3D GEOMETRY ~ 3D GEOMETRY ~ 3D GEOMETRY ~ 3D GEOMETRY
// ===================================================================

/**
 * Point Geometry 3D
 */
export type PointGeometry3d = PointGeometry<Coord3d>;

/**
 * LineString Geometry 3D
 */
export type LineStringGeometry3d = LineStringGeometry<Coord3d>;

/**
 * Polygon Geometry 3D
 */
export type PolygonGeometry3d = PolygonGeometry<Coord3d>;

/**
 * MultiPoint Geometry 3D
 */
export type MultiPointGeometry3d = MultiPointGeometry<Coord3d>;

/**
 * MultiLineString Geometry 3D
 */
export type MultiLineStringGeometry3d = MultiLineStringGeometry<Coord3d>;

/**
 * MultiPolygon Geometry 3D
 */
export type MultiPolygonGeometry3d = MultiPolygonGeometry<Coord3d>;

/**
 * GeometryCollection 3D
 */
export type GeometryCollection3d = GeometryCollection<Geometry3d>;

/**
 * Geometry 3D
 */
export type Geometry3d = Geometry<Coord3d>;

// =============================================================================
// FEATURE TYPES
// =============================================================================

export type PointFeature<
  TCoordinate extends GeojsonCoord = GeojsonCoord,
  TProperties = GeoJsonProperties,
> = Feature<PointGeometry<TCoordinate>, TProperties>;
export type LineStringFeature<
  TCoordinate extends GeojsonCoord = GeojsonCoord,
  TProperties = GeoJsonProperties,
> = Feature<LineStringGeometry<TCoordinate>, TProperties>;
export type PolygonFeature<
  TCoordinate extends GeojsonCoord = GeojsonCoord,
  TProperties = GeoJsonProperties,
> = Feature<PolygonGeometry<TCoordinate>, TProperties>;
export type MultiLineStringFeature<
  TCoordinate extends GeojsonCoord = GeojsonCoord,
  TProperties = GeoJsonProperties,
> = Feature<MultiLineStringGeometry<TCoordinate>, TProperties>;
export type MultiPointFeature<
  TCoordinate extends GeojsonCoord = GeojsonCoord,
  TProperties = GeoJsonProperties,
> = Feature<MultiPointGeometry<TCoordinate>, TProperties>;
export type MultiPolygonFeature<
  TCoordinate extends GeojsonCoord = GeojsonCoord,
  TProperties = GeoJsonProperties,
> = Feature<MultiPolygonGeometry<TCoordinate>, TProperties>;
export type GeometryCollectionFeature<
  TGeometry extends Geometry = Geometry,
  TProperties = GeoJsonProperties,
> = Feature<GeometryCollection<TGeometry>, TProperties>;

// =============================================================================
export type PointFeature2d<TProperties = GeoJsonProperties> = PointFeature<
  Coord2d,
  TProperties
>;
export type PointFeature3d<TProperties = GeoJsonProperties> = PointFeature<
  Coord3d,
  TProperties
>;
export type LineStringFeature2d<TProperties = GeoJsonProperties> =
  LineStringFeature<Coord2d, TProperties>;
export type LineStringFeature3d<TProperties = GeoJsonProperties> =
  LineStringFeature<Coord3d, TProperties>;
export type PolygonFeature2d<TProperties = GeoJsonProperties> = PolygonFeature<
  Coord2d,
  TProperties
>;
export type PolygonFeature3d<TProperties = GeoJsonProperties> = PolygonFeature<
  Coord3d,
  TProperties
>;
export type MultiPointFeature2d<TProperties = GeoJsonProperties> =
  MultiPointFeature<Coord2d, TProperties>;
export type MultiPointFeature3d<TProperties = GeoJsonProperties> =
  MultiPointFeature<Coord3d, TProperties>;
export type MultiPolygonFeature2d<TProperties = GeoJsonProperties> =
  MultiPolygonFeature<Coord2d, TProperties>;
export type MultiPolygonFeature3d<TProperties = GeoJsonProperties> =
  MultiPolygonFeature<Coord3d, TProperties>;
export type MultiLineStringFeature2d<TProperties = GeoJsonProperties> =
  MultiLineStringFeature<Coord2d, TProperties>;
export type MultiLineStringFeature3d<TProperties = GeoJsonProperties> =
  MultiLineStringFeature<Coord3d, TProperties>;
export type GeometryCollectionFeature2d<TProperties = GeoJsonProperties> =
  GeometryCollectionFeature<Geometry2d, TProperties>;
export type GeometryCollectionFeature3d<TProperties = GeoJsonProperties> =
  GeometryCollectionFeature<Geometry3d, TProperties>;

// =============================================================================
// GEOJSON UTIL TYPES
// =============================================================================

/**
 * type is a GeoJSON Geometry
 */
export type IsGeometry<T> = T extends Geometry ? true : false;

/**
 * type is a GeoJSON Feature
 */
export type IsFeature<T> = T extends Feature ? true : false;

/**
 * Extracts the coordinate type from a GeoJSON type.
 *
 * @typeParam T - The GeoJSON type to extract from.
 */
export type ExtractCoordType<T> = T extends Coord2d | Coord3d
  ? T
  : // If T is a Geometry with coordinate type TCoordinate
    T extends Geometry<infer TCoordinate>
    ? TCoordinate
    : // If T is a GeometryCollection, recursively extract from its geometries
      T extends GeometryCollection<infer TGeometry>
      ? ExtractCoordType<TGeometry>
      : // If T is a Feature, extract from its geometry
        T extends Feature<infer TGeometry>
        ? ExtractCoordType<TGeometry>
        : // If T is a FeatureCollection, extract from its features
          T extends FeatureCollection<infer TGeometry>
          ? ExtractCoordType<TGeometry>
          : // Default to never if none of the above
            never;

// =============================================================================
// TRANSFORM TYPES
// =============================================================================
export type TransformGeometryCoordType<
  TGeometry extends Geometry | null,
  TCoordFrom extends GeojsonCoord,
  TCoordTo extends GeojsonCoord,
> = TGeometry extends null
  ? null
  : TGeometry extends PointGeometry<TCoordFrom>
    ? PointGeometry<TCoordTo>
    : TGeometry extends LineStringGeometry<TCoordFrom>
      ? LineStringGeometry<TCoordTo>
      : TGeometry extends PolygonGeometry<TCoordFrom>
        ? PolygonGeometry<TCoordTo>
        : TGeometry extends MultiPointGeometry<TCoordFrom>
          ? MultiPointGeometry<TCoordTo>
          : TGeometry extends MultiLineStringGeometry<TCoordFrom>
            ? MultiLineStringGeometry<TCoordTo>
            : TGeometry extends MultiPolygonGeometry<TCoordFrom>
              ? MultiPolygonGeometry<TCoordTo>
              : TGeometry extends GeometryCollection<infer TGeometry>
                ? GeometryCollection<
                    TransformGeometryCoordType<TGeometry, TCoordFrom, TCoordTo>
                  >
                : TGeometry;

export type TransformFeatureCoordType<
  TFeature extends Feature,
  TCoordFrom extends GeojsonCoord,
  TCoordTo extends GeojsonCoord,
> =
  TFeature extends Feature<
    infer TGeometry,
    infer TProperties,
    infer TFeatureOptions
  >
    ? Feature<
        TransformGeometryCoordType<TGeometry, TCoordFrom, TCoordTo>,
        TProperties,
        TFeatureOptions
      >
    : TFeature;

export type TransformFeatureCollectionCoordType<
  TFeatureCollection extends FeatureCollection,
  TCoordFrom extends GeojsonCoord,
  TCoordTo extends GeojsonCoord,
> =
  TFeatureCollection extends FeatureCollection<
    infer TGeometry,
    infer TProperties,
    infer TFeatureOptions
  >
    ? FeatureCollection<
        TransformGeometryCoordType<TGeometry, TCoordFrom, TCoordTo>,
        TProperties,
        TFeatureOptions
      >
    : TFeatureCollection;

export type TransformCoordType<
  T,
  TCoordFrom extends GeojsonCoord,
  TCoordTo extends GeojsonCoord,
> = T extends Geometry | null
  ? TransformGeometryCoordType<T, TCoordFrom, TCoordTo>
  : T extends Feature
    ? TransformFeatureCoordType<T, TCoordFrom, TCoordTo>
    : T extends FeatureCollection
      ? TransformFeatureCollectionCoordType<T, TCoordFrom, TCoordTo>
      : T;

// =============================================================================
// ASSERTION TYPES
// =============================================================================

/**
 * Asserts that a type is a GeoJSON coordinate type.
 */
export type AssertCoordType<T, TCoordinate> = IsEqual<
  ExtractCoordType<T>,
  TCoordinate
>;

/**
 * Asserts that a type is a GeoJSON 2D coordinate type.
 */
export type AssertCoord2d<T> = AssertCoordType<T, Coord2d>;

/**
 * Asserts that a type is a GeoJSON 3D coordinate type.
 */
export type AssertCoord3d<T> = AssertCoordType<T, Coord3d>;

/**
 * Asserts that a type is a GeoJSON 2D or 3D coordinate type.
 */
export type AssertGeojsonCoord<T> = AssertCoordType<T, Coord2d | Coord3d>;
