import type {
  Fmt,
  IsFalse,
  IsOptional,
  IsUndefined,
} from "../utypes.js";

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
export type GeojsonBBox2d =
  | [west: Longitude, south: Latitude, east: Longitude, north: Latitude]
  | readonly [
    west: Longitude,
    south: Latitude,
    east: Longitude,
    north: Latitude,
  ];
export type GeojsonBBox3d =
  | [
    west: Longitude,
    south: Latitude,
    east: Longitude,
    north: Latitude,
    minZ: number,
    maxZ: number,
  ]
  | readonly [
    west: Longitude,
    south: Latitude,
    east: Longitude,
    north: Latitude,
    minZ: number,
    maxZ: number,
  ];
export type GeojsonBBox =
  | [west: Longitude, south: Latitude, east: Longitude, north: Latitude]
  | readonly [
    west: Longitude,
    south: Latitude,
    east: Longitude,
    north: Latitude,
  ]
  | [
    west: Longitude,
    south: Latitude,
    east: Longitude,
    north: Latitude,
    minZ: number,
    maxZ: number,
  ]
  | readonly [
    west: Longitude,
    south: Latitude,
    east: Longitude,
    north: Latitude,
    minZ: number,
    maxZ: number,
  ];

// 'type' property literals
// export type PointGeometryType = "Point";
// export type LineStringGeometryType = "LineString";
// export type PolygonGeometryType = "Polygon";
// export type MultiPointGeometryType = "MultiPoint";
// export type MultiLineStringGeometryType = "MultiLineString";
// export type MultiPolygonGeometryType = "MultiPolygon";

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
export type LineStringCoordinates<TCoordinate extends Coordinate = Coordinate> =
  [TCoordinate, TCoordinate, ...TCoordinate[]];

export type LinearRing<TCoordinate extends Coordinate = Coordinate> = [
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
export type PointGeometry<TCoordinate extends Coordinate = Coordinate> = {
  type: "Point";
  coordinates: TCoordinate;
};
export type LineStringGeometry<TCoordinate extends Coordinate = Coordinate> = {
  type: "LineString";
  coordinates: [TCoordinate, TCoordinate, ...TCoordinate[]];
};
export type PolygonGeometry<TCoordinate extends Coordinate = Coordinate> = {
  type: "Polygon";
  coordinates: TCoordinate[][];
};
export type MultiPointGeometry<TCoordinate extends Coordinate = Coordinate> = {
  type: "MultiPoint";
  coordinates: TCoordinate[];
};
export type MultiLineStringGeometry<
  TCoordinate extends Coordinate = Coordinate,
> = {
  type: "MultiLineString";
  coordinates: TCoordinate[][];
};
export type MultiPolygonGeometry<TCoordinate extends Coordinate = Coordinate> =
  {
    type: "MultiPolygon";
    coordinates: TCoordinate[][][];
  };

export type PrimitiveGeometry<TCoordinate extends Coordinate = Coordinate> =
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

export type Geometry<TCoordinate extends Coordinate = Coordinate> =
  | PrimitiveGeometry<TCoordinate>
  | GeometryCollection<Geometry<TCoordinate>>;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type GeoJsonProperties = { [name: string]: any } | null;
export type Geometry2d = Geometry<Coordinate2d>;
export type Geometry3d = Geometry<Coordinate3d>;

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
  TBBox extends GeojsonBBox | undefined = GeojsonBBox | undefined,
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
    bbox?: GeojsonBBox;
    crs?: CoordinateReferenceSystem | null;
  }
  : Fmt<Required<Pick<T, keyof T>> & Partial<Omit<FeatureOpts, keyof T>>>;

export type FeatureOptionsWTF<
  TOptions extends Partial<FeatureOpts> | false | undefined = undefined,
> =
  IsUndefined<TOptions> extends true
  ? {
    id?: string | number;
    bbox?: GeojsonBBox;
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
    : { bbox?: GeojsonBBox }) &
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
  TCoordinate extends Coordinate = Coordinate,
  TProperties extends GeoJsonProperties | null = GeoJsonProperties,
  TFeatureOptions extends Partial<FeatureOpts> | undefined = undefined,
> = Feature<LineStringGeometry<TCoordinate>, TProperties, TFeatureOptions>;

/**
 * Polygon Feature ~ Feature<PolygonGeometry>
 */
export type PolygonFeature<
  TCoordinate extends Coordinate = Coordinate,
  TProperties extends GeoJsonProperties | null = GeoJsonProperties,
  TFeatureOptions extends Partial<FeatureOpts> | undefined = undefined,
> = Feature<PolygonGeometry<TCoordinate>, TProperties, TFeatureOptions>;

export type MultiPointFeature<
  TCoordinate extends Coordinate = Coordinate,
  TProperties extends GeoJsonProperties | null = GeoJsonProperties,
  TFeatureOptions extends Partial<FeatureOpts> | undefined = undefined,
> = Feature<MultiPointGeometry<TCoordinate>, TProperties, TFeatureOptions>;

export type MultiLineStringFeature<
  TCoordinate extends Coordinate = Coordinate,
  TProperties extends GeoJsonProperties | null = GeoJsonProperties,
  TFeatureOptions extends Partial<FeatureOpts> | undefined = undefined,
> = Feature<MultiLineStringGeometry<TCoordinate>, TProperties, TFeatureOptions>;

export type MultiPolygonFeature<
  TCoordinate extends Coordinate = Coordinate,
  TProperties extends GeoJsonProperties | null = GeoJsonProperties,
  TFeatureOptions extends Partial<FeatureOpts> | undefined = undefined,
> = Feature<MultiPolygonGeometry<TCoordinate>, TProperties, TFeatureOptions>;

// COMPAT W/ `@types/geojson`
export type Point<TCoordinate extends Coordinate = Coordinate> =
  PointGeometry<TCoordinate>;
export type LineString<TCoordinate extends Coordinate = Coordinate> =
  LineStringGeometry<TCoordinate>;
export type Polygon<TCoordinate extends Coordinate = Coordinate> =
  PolygonGeometry<TCoordinate>;
export type MultiPoint<TCoordinate extends Coordinate = Coordinate> =
  MultiPointGeometry<TCoordinate>;
export type MultiLineString<TCoordinate extends Coordinate = Coordinate> =
  MultiLineStringGeometry<TCoordinate>;
export type MultiPolygon<TCoordinate extends Coordinate = Coordinate> =
  MultiPolygonGeometry<TCoordinate>;
export type GeometryObject<TCoordinate extends Coordinate = Coordinate> =
  Geometry<TCoordinate>;

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
  TProperties extends GeoJsonProperties | null = GeoJsonProperties,
  TFeatureOptions extends Partial<FeatureOpts> | undefined = undefined,
> = Feature<PointGeometry2d, TProperties, TFeatureOptions>;
export type PointFeature3d<
  TProperties extends GeoJsonProperties | null = GeoJsonProperties,
  TFeatureOptions extends Partial<FeatureOpts> | undefined = undefined,
> = Feature<PointGeometry3d, TProperties, TFeatureOptions>;
export type LineStringFeature2d<
  TProperties extends GeoJsonProperties | null = GeoJsonProperties,
  TFeatureOptions extends Partial<FeatureOpts> | undefined = undefined,
> = Feature<LineStringGeometry2d, TProperties, TFeatureOptions>;
export type LineStringFeature3d<
  TProperties extends GeoJsonProperties | null = GeoJsonProperties,
  TFeatureOptions extends Partial<FeatureOpts> | undefined = undefined,
> = Feature<LineStringGeometry3d, TProperties, TFeatureOptions>;
