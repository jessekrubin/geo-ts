import type { Fmt, IsFalse, IsOptional, IsUndefined } from "../utypes.js";
import type { BBox, BBox2d, BBox3d } from "./bbox.js";
import type { Coord, Coord2d, Coord3d } from "./coord.js";

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
export type FeatureType = "Feature";
export type FeatureCollectionType = "FeatureCollection";
export type GeometryCollectionType = "GeometryCollection";

/**
 * A LineString is an array of two or more positions.
 * const lineString: LineStringCoordinates = [ [100.0, 0.0], [101.0, 1.0] ];
 */
export type LineStringCoordinates<TCoordinate extends Coord = Coord> = [
  TCoordinate,
  TCoordinate,
  ...TCoordinate[],
];

export type LinearRing<TCoordinate extends Coord = Coord> = [
  TCoordinate,
  TCoordinate,
  TCoordinate,
  TCoordinate,
  ...TCoordinate[],
];

/**
 * A Polygon is an array of LinearRings. The first element in the array represents the exterior ring.
 * Any subsequent elements represent interior rings (or holes).
 * const polygon: PolygonCoordinates = [
 *  [
 *     [100.0, 0.0],
 *     [101.0, 0.0],
 *     [101.0, 1.0],
 *     [100.0, 1.0],
 *     [100.0, 0.0]
 *   ]
 * ];
 */
// export type PolygonCoordinates<TCoordinate extends Coordinate = Coordinate> = [
//   LinearRing<TCoordinate>,
// ];
// export type MultiPointCoordinates<TCoordinate extends Coordinate = Coordinate> =
//   TCoordinate[];
// export type MultiLineStringCoordinates<
//   TCoordinate extends Coordinate = Coordinate,
// > = [
//     LineStringCoordinates<TCoordinate>,
//     ...LineStringCoordinates<TCoordinate>[],
//   ];
// export type MultiPolygonCoordinates<
//   TCoordinate extends Coordinate = Coordinate,
// > = [PolygonCoordinates<TCoordinate>, ...PolygonCoordinates<TCoordinate>[]];

// Geometry object types
export type PointGeometry<
  TCoordinate extends Coord = Coord,
  TBBox extends BBox2d | BBox3d = BBox2d | BBox3d,
> = {
  type: "Point";
  coordinates: TCoordinate;
  bbox?: TBBox;
};
export type LineStringGeometry<
  TCoordinate extends Coord = Coord,
  TBBox extends BBox2d | BBox3d = BBox2d | BBox3d,
> = {
  type: "LineString";
  coordinates: [TCoordinate, TCoordinate, ...TCoordinate[]];
  bbox?: TBBox;
};
export type PolygonGeometry<
  TCoordinate extends Coord = Coord,
  TBBox extends BBox2d | BBox3d = BBox2d | BBox3d,
> = {
  type: "Polygon";
  coordinates: TCoordinate[][];
  bbox?: TBBox;
};
export type MultiPointGeometry<
  TCoordinate extends Coord = Coord,
  TBBox extends BBox2d | BBox3d = BBox2d | BBox3d,
> = {
  type: "MultiPoint";
  coordinates: TCoordinate[];
  bbox?: TBBox;
};
export type MultiLineStringGeometry<
  TCoordinate extends Coord = Coord,
  TBBox extends BBox2d | BBox3d = BBox2d | BBox3d,
> = {
  type: "MultiLineString";
  coordinates: TCoordinate[][];
  bbox?: TBBox;
};
export type MultiPolygonGeometry<
  TCoordinate extends Coord = Coord,
  TBBox extends BBox2d | BBox3d = BBox2d | BBox3d,
> = {
  type: "MultiPolygon";
  coordinates: TCoordinate[][][];
  bbox?: TBBox;
};

export type PrimitiveGeometry<
  TCoordinate extends Coord = Coord,
  TBBox extends BBox2d | BBox3d = BBox2d | BBox3d,
> =
  | PointGeometry<TCoordinate, TBBox>
  | LineStringGeometry<TCoordinate, TBBox>
  | PolygonGeometry<TCoordinate, TBBox>
  | MultiPointGeometry<TCoordinate, TBBox>
  | MultiLineStringGeometry<TCoordinate, TBBox>
  | MultiPolygonGeometry<TCoordinate, TBBox>;

/**
 * Use `interface` instead of `type` for declaration merging => recursive type
 */
// eslint-disable-next-line @typescript-eslint/consistent-type-definitions
export interface GeometryCollection<G extends Geometry = Geometry> {
  type: "GeometryCollection";
  geometries: G[];
}

export type Geometry<
  TCoordinate extends Coord = Coord,
  TBBox extends BBox2d | BBox3d = BBox2d | BBox3d,
> =
  | PrimitiveGeometry<TCoordinate, TBBox>
  | GeometryCollection<Geometry<TCoordinate, TBBox>>;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type GeoJsonProperties = { [name: string]: any } | null;

/**
 * =====================================================================================
 * Geojson CRS ~ Coordinate Reference System(s)
 * =====================================================================================
 */
export type NamedCoordinateReferenceSystem = {
  type: "name";
  properties: {
    name: string;
  };
};
export type LinkedCoordinateReferenceSystem = {
  type: "link";
  properties: {
    href: string;
    type: string;
  };
};

export type CoordinateReferenceSystem =
  | NamedCoordinateReferenceSystem
  | LinkedCoordinateReferenceSystem;
export type CoordinateReferenceSystemNullable =
  | CoordinateReferenceSystem
  | null
  | undefined;

/**
 * =====================================================================================
 */
export type FeatureOpts<
  TFeatureId extends string | number | undefined = string | number | undefined,
  TBBox extends BBox | undefined = BBox | undefined,
  TCrs extends CoordinateReferenceSystem | undefined | null =
    | CoordinateReferenceSystem
    | undefined,
> = {
  id: TFeatureId;
  bbox: TBBox;
  crs: TCrs;
};

// Utility type to normalize feature options
export type NormalizeFeatureOptions<
  T extends Partial<FeatureOpts> | undefined = undefined,
> =
  IsUndefined<T> extends true
    ? {
        id?: string | number;
        bbox?: BBox;
        crs?: CoordinateReferenceSystem | null;
      }
    : Fmt<Required<Pick<T, keyof T>> & Partial<Omit<FeatureOpts, keyof T>>>;

export type FeatureOptionsWTF<
  TOptions extends Partial<FeatureOpts> | false | undefined = undefined,
> =
  IsUndefined<TOptions> extends true
    ? {
        id?: string | number;
        bbox?: BBox;
        crs?: CoordinateReferenceSystem | null;
      }
    : IsFalse<TOptions> extends true
      ? {
          id: never;
          bbox: never;
          crs: never;
        }
      : ("id" extends keyof TOptions
          ? IsOptional<TOptions["id"]> extends true
            ? { id?: TOptions["id"] }
            : { id: TOptions["id"] }
          : { id?: string | number }) &
          ("bbox" extends keyof TOptions
            ? IsOptional<TOptions["bbox"]> extends true
              ? { bbox?: TOptions["bbox"] }
              : { bbox: TOptions["bbox"] }
            : { bbox?: BBox }) &
          ("crs" extends keyof TOptions
            ? IsOptional<TOptions["crs"]> extends true
              ? { crs?: TOptions["crs"] }
              : { crs: TOptions["crs"] }
            : { crs?: CoordinateReferenceSystem | null });

/**
 * Feature
 */
export type Feature<
  TGeometry extends Geometry | null = Geometry | null,
  TProperties extends GeoJsonProperties | null | undefined = GeoJsonProperties,
  TFeatureOptions extends Partial<FeatureOpts> | undefined =
    | Partial<FeatureOpts>
    | undefined,
> = Fmt<
  {
    type: "Feature";
    geometry: TGeometry;
    properties: IsUndefined<TProperties> extends true
      ? GeoJsonProperties | null
      : TProperties;
  } & NormalizeFeatureOptions<TFeatureOptions>
>;

/**
 * FeatureCollection
 */
export type FeatureCollection<
  TGeometry extends Geometry | null = Geometry,
  TProperties extends GeoJsonProperties | null = GeoJsonProperties,
  TFeatureOptions extends Partial<FeatureOpts> | undefined = undefined,
> = {
  type: "FeatureCollection";
  features: Feature<TGeometry, TProperties, TFeatureOptions>[];
};

// COMPAT W/ `@types/geojson`
export type Point<TCoordinate extends Coord = Coord> =
  PointGeometry<TCoordinate>;
export type LineString<TCoordinate extends Coord = Coord> =
  LineStringGeometry<TCoordinate>;
export type Polygon<TCoordinate extends Coord = Coord> =
  PolygonGeometry<TCoordinate>;
export type MultiPoint<TCoordinate extends Coord = Coord> =
  MultiPointGeometry<TCoordinate>;
export type MultiLineString<TCoordinate extends Coord = Coord> =
  MultiLineStringGeometry<TCoordinate>;
export type MultiPolygon<TCoordinate extends Coord = Coord> =
  MultiPolygonGeometry<TCoordinate>;
export type GeometryObject<TCoordinate extends Coord = Coord> =
  Geometry<TCoordinate>;

/**
 * =============================================================================
 * END of `@types/geojson` compatibility/types
 * =============================================================================
 */

/**
 * ===================================================================
 * 2D GEOMETRY ~ 2D GEOMETRY ~ 2D GEOMETRY ~ 2D GEOMETRY ~ 2D GEOMETRY
 * ===================================================================
 */

/**
 * PointGeometry2D ~ Geojson Point Geometry with 2D coordinates
 *
 * @example
 * const point: PointGeometry2d = {
 *  type: "Point",
 *  coordinates: [100.0, 0.0],
 *
 */
export type PointGeometry2d<TBBox extends BBox2d | BBox3d = BBox> =
  PointGeometry<Coord2d, TBBox>;
export type LineStringGeometry2d<TBBox extends BBox2d | BBox3d = BBox> =
  LineStringGeometry<Coord2d, TBBox>;
export type PolygonGeometry2d<TBBox extends BBox2d | BBox3d = BBox> =
  PolygonGeometry<Coord2d, TBBox>;
export type MultiPointGeometry2d<TBBox extends BBox2d | BBox3d = BBox> =
  MultiPointGeometry<Coord2d, TBBox>;
export type MultiLineStringGeometry2d<TBBox extends BBox2d | BBox3d = BBox> =
  MultiLineStringGeometry<Coord2d, TBBox>;
export type MultiPolygonGeometry2d<TBBox extends BBox2d | BBox3d = BBox> =
  MultiPolygonGeometry<Coord2d, TBBox>;
export type Geometry2d<TBBox extends BBox2d | BBox3d = BBox> = Geometry<
  Coord2d,
  TBBox
>;

/**
 * ===================================================================
 * 3D GEOMETRY ~ 3D GEOMETRY ~ 3D GEOMETRY ~ 3D GEOMETRY ~ 3D GEOMETRY
 * ===================================================================
 */
export type PointGeometry3d<TBBBox extends BBox2d | BBox3d = BBox> =
  PointGeometry<Coord3d, TBBBox>;
export type LineStringGeometry3d<TBBBox extends BBox2d | BBox3d = BBox> =
  LineStringGeometry<Coord3d, TBBBox>;
export type PolygonGeometry3d<TBBBox extends BBox2d | BBox3d = BBox> =
  PolygonGeometry<Coord3d, TBBBox>;
export type MultiPointGeometry3d<TBBBox extends BBox2d | BBox3d = BBox> =
  MultiPointGeometry<Coord3d, TBBBox>;
export type MultiLineStringGeometry3d<TBBBox extends BBox2d | BBox3d = BBox> =
  MultiLineStringGeometry<Coord3d, TBBBox>;
export type MultiPolygonGeometry3d<TBBBox extends BBox2d | BBox3d = BBox> =
  MultiPolygonGeometry<Coord3d, TBBBox>;
export type Geometry3d<TBBBox extends BBox2d | BBox3d = BBox> = Geometry<
  Coord3d,
  TBBBox
>;

/**
 * ==========================================================================
 * FEATURES ~ FEATURES ~ FEATURES ~ FEATURES ~ FEATURES ~ FEATURES ~ FEATURES
 * ==========================================================================
 */

/**
 * Point Feature ~ Feature<PointGeometry>
 */
export type PointFeature<
  TProperties extends GeoJsonProperties | null = GeoJsonProperties,
  TFeatureOptions extends Partial<FeatureOpts> | undefined = undefined,
> = Feature<PointGeometry, TProperties, TFeatureOptions>;

/**
 * LineString Feature ~ Feature<LineStringGeometry>
 */
export type LineStringFeature<
  TCoordinate extends Coord = Coord,
  TProperties extends GeoJsonProperties | null = GeoJsonProperties,
  TFeatureOptions extends Partial<FeatureOpts> | undefined = undefined,
> = Feature<LineStringGeometry<TCoordinate>, TProperties, TFeatureOptions>;

/**
 * Polygon Feature ~ Feature<PolygonGeometry>
 */
export type PolygonFeature<
  TCoordinate extends Coord = Coord,
  TProperties extends GeoJsonProperties | null = GeoJsonProperties,
  TFeatureOptions extends Partial<FeatureOpts> | undefined = undefined,
> = Feature<PolygonGeometry<TCoordinate>, TProperties, TFeatureOptions>;

export type MultiPointFeature<
  TCoordinate extends Coord = Coord,
  TProperties extends GeoJsonProperties | null = GeoJsonProperties,
  TFeatureOptions extends Partial<FeatureOpts> | undefined = undefined,
> = Feature<MultiPointGeometry<TCoordinate>, TProperties, TFeatureOptions>;

export type MultiLineStringFeature<
  TCoordinate extends Coord = Coord,
  TProperties extends GeoJsonProperties | null = GeoJsonProperties,
  TFeatureOptions extends Partial<FeatureOpts> | undefined = undefined,
> = Feature<MultiLineStringGeometry<TCoordinate>, TProperties, TFeatureOptions>;

export type MultiPolygonFeature<
  TCoordinate extends Coord = Coord,
  TProperties extends GeoJsonProperties | null = GeoJsonProperties,
  TFeatureOptions extends Partial<FeatureOpts> | undefined = undefined,
> = Feature<MultiPolygonGeometry<TCoordinate>, TProperties, TFeatureOptions>;

/**
 * ===================================================================
 * 2D FEATURES ~ 2D FEATURES ~ 2D FEATURES ~ 2D FEATURES ~ 2D FEATURES
 * ===================================================================
 */

/**
 * Point Feature 2d
 */
export type PointFeature2d<
  TProperties extends GeoJsonProperties | null = GeoJsonProperties,
  TFeatureOptions extends Partial<FeatureOpts> | undefined = undefined,
> = Feature<PointGeometry2d, TProperties, TFeatureOptions>;

/**
 * Point Feature 3d
 */
export type PointFeature3d<
  TProperties extends GeoJsonProperties | null = GeoJsonProperties,
  TFeatureOptions extends Partial<FeatureOpts> | undefined = undefined,
> = Feature<PointGeometry3d, TProperties, TFeatureOptions>;

/**
 * LineString Feature 2d
 */
export type LineStringFeature2d<
  TProperties extends GeoJsonProperties | null = GeoJsonProperties,
  TFeatureOptions extends Partial<FeatureOpts> | undefined = undefined,
> = Feature<LineStringGeometry2d, TProperties, TFeatureOptions>;

/**
 * LineString Feature 3d
 */
export type LineStringFeature3d<
  TProperties extends GeoJsonProperties | null = GeoJsonProperties,
  TFeatureOptions extends Partial<FeatureOpts> | undefined = undefined,
> = Feature<LineStringGeometry3d, TProperties, TFeatureOptions>;

/**
 * ===================================================================
 * 3D FEATURES ~ 3D FEATURES ~ 3D FEATURES ~ 3D FEATURES ~ 3D FEATURES
 * ===================================================================
 */
