import type {
  ExtendsUndefined,
  IsNull,
  IsOptional,
  IsUndefined,
} from "../utypes.js";
import type { BBox } from "./bbox.js";
import type { Position } from "./coord.js";

export type Longitude = number;
export type Latitude = number;

/**
 * WGS84 longitude
 * @minimum -180
 * @maximum 180
 */
export type LongitudeWgs84 = number;

/**
 * WGS84 latitude
 * @minimum -90
 * @maximum 90
 */
export type LatitudeWgs84 = number;

export type Coordinate2d = [x: Longitude, y: Latitude];
export type Coordinate3d = [x: Longitude, y: Latitude, z: number];
export type Coordinate =
  | [x: Longitude, y: Latitude]
  | [x: Longitude, y: Latitude, z: number];
export type GeojsonCoordLike = Coordinate | Position;

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
export type LineStringCoordinates<
  TCoordinate extends GeojsonCoordLike = GeojsonCoordLike,
> = [TCoordinate, TCoordinate, ...TCoordinate[]];

export type LinearRing<
  TCoordinate extends GeojsonCoordLike = GeojsonCoordLike,
> = [TCoordinate, TCoordinate, TCoordinate, TCoordinate, ...TCoordinate[]];

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
export type PointGeometry<
  TCoordinate extends GeojsonCoordLike = GeojsonCoordLike,
> = {
  type: "Point";
  coordinates: TCoordinate;
  bbox?: BBox;
};
export type LineStringGeometry<
  TCoordinate extends GeojsonCoordLike = GeojsonCoordLike,
> = {
  type: "LineString";
  coordinates: TCoordinate[];
  bbox?: BBox;
};
export type PolygonGeometry<
  TCoordinate extends GeojsonCoordLike = GeojsonCoordLike,
> = {
  type: "Polygon";
  coordinates: TCoordinate[][];
  bbox?: BBox;
};
export type MultiPointGeometry<
  TCoordinate extends GeojsonCoordLike = GeojsonCoordLike,
> = {
  type: "MultiPoint";
  coordinates: TCoordinate[];
  bbox?: BBox;
};
export type MultiLineStringGeometry<
  TCoordinate extends GeojsonCoordLike = GeojsonCoordLike,
> = {
  type: "MultiLineString";
  coordinates: TCoordinate[][];
  bbox?: BBox;
};
export type MultiPolygonGeometry<
  TCoordinate extends GeojsonCoordLike = GeojsonCoordLike,
> = {
  type: "MultiPolygon";
  coordinates: TCoordinate[][][];
  bbox?: BBox;
};

export type PrimitiveGeometry<
  TCoordinate extends GeojsonCoordLike = GeojsonCoordLike,
> =
  | PointGeometry<TCoordinate>
  | LineStringGeometry<TCoordinate>
  | PolygonGeometry<TCoordinate>
  | MultiPointGeometry<TCoordinate>
  | MultiLineStringGeometry<TCoordinate>
  | MultiPolygonGeometry<TCoordinate>;

/**
 * Use `interface` instead of `type` for declaration merging => recursive type
 */
// eslint-disable-next-line @typescript-eslint/consistent-type-definitions
export interface GeometryCollection<G extends Geometry = Geometry> {
  type: "GeometryCollection";
  geometries: G[];
}

export type Geometry<TCoordinate extends GeojsonCoordLike = GeojsonCoordLike> =
  | PrimitiveGeometry<TCoordinate>
  | GeometryCollection<Geometry<TCoordinate>>;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type GeoJsonProperties = { [name: string]: any } | null;
export type Geometry2d = Geometry<Coordinate2d>;
export type Geometry3d = Geometry<Coordinate3d>;

/**
 * =====================================================================================
 */
export type FeatureGenericOptions<
  // TProperties = GeoJsonProperties | undefined,
  TFeatureId extends string | number | undefined = string | number | undefined,
  TBBox extends BBox | undefined = BBox | undefined,
> = {
  // Properties: TProperties;
  id: TFeatureId;
  bbox: TBBox;
};

export type FeatureGenericGeometry<
  TCoordinate extends GeojsonCoordLike = GeojsonCoordLike,
  TGeometry extends Geometry<TCoordinate> = Geometry<TCoordinate>,
> = {
  Coordinate: TCoordinate;
  Geometry: TGeometry;
};

export type FeatureOptions<
  TOptions extends Partial<FeatureGenericOptions> | undefined = undefined,
> =
  IsUndefined<TOptions> extends true
    ? {
        id?: string | number;
        bbox?: BBox;
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
          : { bbox?: BBox });

type FeatureProperties<TProperties> =
  IsUndefined<TProperties> extends true
    ? {
        properties?: GeoJsonProperties | null;
      }
    : ExtendsUndefined<TProperties> extends true
      ? {
          properties?: TProperties;
        }
      : IsOptional<TProperties> extends true
        ?
            | {
                properties: null;
              }
            | {
                properties: TProperties;
              }
        : IsNull<TProperties> extends true
          ? {
              properties: null;
            }
          : {
              properties: TProperties;
            };

export type Feature<
  TGeometry extends Geometry | null = Geometry | null,
  TProperties extends GeoJsonProperties | null | undefined | unknown =
    | GeoJsonProperties
    | null
    | undefined,
  TFeatureOptions extends
    Partial<FeatureGenericOptions> = Partial<FeatureGenericOptions>,
> = {
  type: "Feature";
  geometry: TGeometry;
} & FeatureOptions<TFeatureOptions> &
  FeatureProperties<TProperties>;

export type FeatureCollection<
  TGeometry extends Geometry | null = Geometry,
  TProperties extends GeoJsonProperties | null | undefined | unknown =
    | GeoJsonProperties
    | null
    | undefined,
  TFeatureOptions extends
    Partial<FeatureGenericOptions> = FeatureGenericOptions,
> = {
  type: "FeatureCollection";
  features: Feature<TGeometry, TProperties, TFeatureOptions>[];
} & FeatureOptions<TFeatureOptions>;

export type PointFeature<
  TProperties extends GeoJsonProperties | undefined =
    | GeoJsonProperties
    | undefined,
  TFeatureOptions extends
    Partial<FeatureGenericOptions> = FeatureGenericOptions,
> = Feature<PointGeometry, TProperties, TFeatureOptions>;

export type LineStringFeature<
  TCoordinate extends GeojsonCoordLike = GeojsonCoordLike,
  TProperties extends GeoJsonProperties | undefined =
    | GeoJsonProperties
    | undefined,
  FeatureOptions extends Partial<FeatureGenericOptions> = FeatureGenericOptions,
> = Feature<LineStringGeometry<TCoordinate>, TProperties, FeatureOptions>;

export type PolygonFeature<
  TCoordinate extends GeojsonCoordLike = GeojsonCoordLike,
  TProperties extends GeoJsonProperties | undefined =
    | GeoJsonProperties
    | undefined,
  FeatureOptions extends Partial<FeatureGenericOptions> = FeatureGenericOptions,
> = Feature<PolygonGeometry<TCoordinate>, TProperties, FeatureOptions>;

export type MultiPointFeature<
  TProperties extends GeoJsonProperties | undefined =
    | GeoJsonProperties
    | undefined,
  FeatureOptions extends Partial<FeatureGenericOptions> = FeatureGenericOptions,
> = Feature<MultiPointGeometry, TProperties, FeatureOptions>;

export type MultiLineStringFeature<
  TCoordinate extends GeojsonCoordLike = GeojsonCoordLike,
  TProperties extends GeoJsonProperties | undefined =
    | GeoJsonProperties
    | undefined,
  FeatureOptions extends Partial<FeatureGenericOptions> = FeatureGenericOptions,
> = Feature<MultiLineStringGeometry<TCoordinate>, TProperties, FeatureOptions>;

export type MultiPolygonFeature<
  TCoordinate extends GeojsonCoordLike = GeojsonCoordLike,
  TProperties extends GeoJsonProperties | undefined =
    | GeoJsonProperties
    | undefined,
  FeatureOptions extends Partial<FeatureGenericOptions> = FeatureGenericOptions,
> = Feature<MultiPolygonGeometry<TCoordinate>, TProperties, FeatureOptions>;

// COMPAT W/ `@types/geojson`
// turn off prettier for this block
// prettier-ignore
export type Point<TCoordinate extends GeojsonCoordLike = GeojsonCoordLike> = PointGeometry<TCoordinate>;
export type LineString<
  TCoordinate extends GeojsonCoordLike = GeojsonCoordLike,
> = LineStringGeometry<TCoordinate>;
export type Polygon<TCoordinate extends GeojsonCoordLike = GeojsonCoordLike> =
  PolygonGeometry<TCoordinate>;
export type MultiPoint<
  TCoordinate extends GeojsonCoordLike = GeojsonCoordLike,
> = MultiPointGeometry<TCoordinate>;
export type MultiLineString<
  TCoordinate extends GeojsonCoordLike = GeojsonCoordLike,
> = MultiLineStringGeometry<TCoordinate>;
export type MultiPolygon<
  TCoordinate extends GeojsonCoordLike = GeojsonCoordLike,
> = MultiPolygonGeometry<TCoordinate>;
export type GeometryObject<
  TCoordinate extends GeojsonCoordLike = GeojsonCoordLike,
> = Geometry<TCoordinate>;

/**
 * =================================================================================
 * 2D GEOMETRY ~ 2D GEOMETRY ~ 2D GEOMETRY ~ 2D GEOMETRY ~ 2D GEOMETRY ~ 2D GEOMETRY
 * =================================================================================
 */
export type PointGeometry2d = PointGeometry<Coordinate2d>;
export type LineStringGeometry2d = LineStringGeometry<Coordinate2d>;
export type PolygonGeometry2d = PolygonGeometry<Coordinate2d>;
export type MultiPointGeometry2d = MultiPointGeometry<Coordinate2d>;
export type MultiLineStringGeometry2d = MultiLineStringGeometry<Coordinate2d>;
export type MultiPolygonGeometry2d = MultiPolygonGeometry<Coordinate2d>;

/**
 * =================================================================================
 * 3D GEOMETRY ~ 3D GEOMETRY ~ 3D GEOMETRY ~ 3D GEOMETRY ~ 3D GEOMETRY ~ 3D GEOMETRY
 * =================================================================================
 */
export type PointGeometry3d = PointGeometry<Coordinate3d>;
export type LineStringGeometry3d = LineStringGeometry<Coordinate3d>;
export type PolygonGeometry3d = PolygonGeometry<Coordinate3d>;
export type MultiPointGeometry3d = MultiPointGeometry<Coordinate3d>;
export type MultiLineStringGeometry3d = MultiLineStringGeometry<Coordinate3d>;
export type MultiPolygonGeometry3d = MultiPolygonGeometry<Coordinate3d>;

export type PointFeature2d<
  TProperties extends GeoJsonProperties | undefined =
    | GeoJsonProperties
    | undefined,
  TFeatureOptions extends
    Partial<FeatureGenericOptions> = FeatureGenericOptions,
> = Feature<PointGeometry2d, TProperties, TFeatureOptions>;

export type PointFeature3d<
  TProperties extends GeoJsonProperties | undefined =
    | GeoJsonProperties
    | undefined,
  FeatureOptions extends Partial<FeatureGenericOptions> = FeatureGenericOptions,
> = Feature<PointGeometry3d, TProperties, FeatureOptions>;

export type LineStringFeature2d<
  FeatureOptions extends Partial<FeatureGenericOptions> = FeatureGenericOptions,
> = Feature<
  LineStringGeometry2d,
  GeoJsonProperties | undefined,
  FeatureOptions
>;
export type LineStringFeature3d<
  FeatureOptions extends Partial<FeatureGenericOptions> = FeatureGenericOptions,
> = Feature<
  LineStringGeometry3d,
  GeoJsonProperties | undefined,
  FeatureOptions
>;

export type PolygonFeature2d<
  FeatureOptions extends Partial<FeatureGenericOptions> = FeatureGenericOptions,
> = Feature<PolygonGeometry2d, GeoJsonProperties | undefined, FeatureOptions>;

export type PolygonFeature3d<
  FeatureOptions extends Partial<FeatureGenericOptions> = FeatureGenericOptions,
> = Feature<PolygonGeometry3d, GeoJsonProperties | undefined, FeatureOptions>;
export type MultiPointFeature2d<
  FeatureOptions extends Partial<FeatureGenericOptions> = FeatureGenericOptions,
> = Feature<
  MultiPointGeometry2d,
  GeoJsonProperties | undefined,
  FeatureOptions
>;

export type MultiPointFeature3d<
  FeatureOptions extends Partial<FeatureGenericOptions> = FeatureGenericOptions,
> = Feature<
  MultiPointGeometry3d,
  GeoJsonProperties | undefined,
  FeatureOptions
>;

export type MultiLineStringFeature2d<
  FeatureOptions extends Partial<FeatureGenericOptions> = FeatureGenericOptions,
> = Feature<
  MultiLineStringGeometry2d,
  GeoJsonProperties | undefined,
  FeatureOptions
>;

export type MultiLineStringFeature3d<
  FeatureOptions extends Partial<FeatureGenericOptions> = FeatureGenericOptions,
> = Feature<
  MultiLineStringGeometry3d,
  GeoJsonProperties | undefined,
  FeatureOptions
>;

export type MultiPolygonFeature2d<
  FeatureOptions extends Partial<FeatureGenericOptions> = FeatureGenericOptions,
> = Feature<
  MultiPolygonGeometry2d,
  GeoJsonProperties | undefined,
  FeatureOptions
>;

export type MultiPolygonFeature3d<
  FeatureOptions extends Partial<FeatureGenericOptions> = FeatureGenericOptions,
> = Feature<
  MultiPolygonGeometry3d,
  GeoJsonProperties | undefined,
  FeatureOptions
>;

export type GeoJson<TCoordinate extends GeojsonCoordLike = GeojsonCoordLike> =
  | Geometry<TCoordinate>
  | Feature<Geometry<TCoordinate>>
  | FeatureCollection<Geometry<TCoordinate>>;

export type GeoJson2d = GeoJson<Coordinate2d>;
export type GeoJson3d = GeoJson<Coordinate3d>;

// GeoJSON alias for parity with `@types/geojson`
export type GeoJSON = GeoJson;
