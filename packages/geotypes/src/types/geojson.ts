import type {
  ExtendsUndefined,
  IsNull,
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

// 2d Geometry object types
export type PointGeometry2d = PointGeometry<Coordinate2d>;
export type LineStringGeometry2d = LineStringGeometry<Coordinate2d>;
export type PolygonGeometry2d = PolygonGeometry<Coordinate2d>;
export type MultiPointGeometry2d = MultiPointGeometry<Coordinate2d>;
export type MultiLineStringGeometry2d = MultiLineStringGeometry<Coordinate2d>;
export type MultiPolygonGeometry2d = MultiPolygonGeometry<Coordinate2d>;

// 3d Geometry object types
export type PointGeometry3d = PointGeometry<Coordinate3d>;
export type LineStringGeometry3d = LineStringGeometry<Coordinate3d>;
export type PolygonGeometry3d = PolygonGeometry<Coordinate3d>;
export type MultiPointGeometry3d = MultiPointGeometry<Coordinate3d>;
export type MultiLineStringGeometry3d = MultiLineStringGeometry<Coordinate3d>;
export type MultiPolygonGeometry3d = MultiPolygonGeometry<Coordinate3d>;

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
// export type GeoJsonProperties = Record<string, unknown> | null;
export type Geometry2d = Geometry<Coordinate2d>;
export type Geometry3d = Geometry<Coordinate3d>;

/**
 * =====================================================================================
 * GEOJSON Coordinate Reference System Objects
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

export type FeatureGenericOptions<
  // TProperties = GeoJsonProperties | undefined,
  TFeatureId extends string | number | undefined = string | number | undefined,
  TBBox extends GeojsonBBox | undefined = GeojsonBBox | undefined,
  TCrs extends CoordinateReferenceSystem | undefined | null =
    | CoordinateReferenceSystem
    | undefined,
> = {
  // Properties: TProperties;
  id: TFeatureId;
  bbox: TBBox;
  crs: TCrs;
};

export type FeatureGenericGeometry<
  TCoordinate extends Coordinate = Coordinate,
  TGeometry extends Geometry<TCoordinate> = Geometry<TCoordinate>,
> = {
  Coordinate: TCoordinate;
  Geometry: TGeometry;
};

export type FeatureGeneric<
  TFeatureId extends string | number | undefined = string | number | undefined,
  TCoordinate extends Coordinate = Coordinate,
  TGeometry extends Geometry<TCoordinate> = Geometry<TCoordinate>,
  // TProperties extends GeoJsonProperties | undefined = GeoJsonProperties | undefined,
  TBBox extends GeojsonBBox | undefined = GeojsonBBox | undefined,
  TCrs extends CoordinateReferenceSystem | undefined | null =
    | CoordinateReferenceSystem
    | undefined,
> = FeatureGenericGeometry<TCoordinate, TGeometry> &
  FeatureGenericOptions<TFeatureId, TBBox, TCrs>;

// type FeatureIdOption<TFeatureId extends string | number | undefined = undefined> =
//   ExtendsUndefined<TFeatureId> extends true
//   ? {
//     Id?: string | number;
//   }
//   : {
//     Id: TFeatureId;
//   };
// type FeatureBBoxOption<TBBox extends BBox | undefined = undefined> = ExtendsUndefined<TBBox> extends true
//   ? {
//     BBox?: BBox;
//   }
//   : {
//     BBox: TBBox;
//   };
// type FeatureCrsOption<TCrs extends CoordinateReferenceSystem | undefined | null> = ExtendsUndefined<TCrs> extends true
//   ? {
//     Crs?: CoordinateReferenceSystem | null;
//   }
//   : {
//     Crs: TCrs;
//   };
// type FeatureOptionsGeneric<
//   TFeatureId extends string | number | undefined = undefined,
//   TBBox extends BBox | undefined = undefined,
//   TCrs extends CoordinateReferenceSystem | undefined | null = undefined,
// > = FeatureIdOption<TFeatureId> & FeatureBBoxOption<TBBox> & FeatureCrsOption<TCrs>;

export type FeatureOptions<
  TOptions extends Partial<FeatureGenericOptions> | undefined = undefined,
> =
  IsUndefined<TOptions> extends true
    ? {
        id?: string | number;
        bbox?: GeojsonBBox;
        crs?: CoordinateReferenceSystem | null;
      }
    : // (("id" extends keyof TOptions ? { id: TOptions["id"] } : { id?: string | number }) &
      ("id" extends keyof TOptions
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
    | Partial<FeatureGenericOptions>
    | undefined = FeatureGenericOptions,
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
    | Partial<FeatureGenericOptions>
    | undefined = undefined,
> = {
  type: "FeatureCollection";
  features: Feature<TGeometry, TProperties, TFeatureOptions>[];
} & FeatureOptions<TFeatureOptions>;

export type PointFeature<
  TProperties extends GeoJsonProperties | undefined =
    | GeoJsonProperties
    | undefined,
  TFeatureOptions extends
    | Partial<FeatureGenericOptions>
    | undefined = undefined,
> = Feature<PointGeometry, TProperties, TFeatureOptions>;

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

export type LineStringFeature<
  TCoordinate extends Coordinate = Coordinate,
  TProperties extends GeoJsonProperties | undefined =
    | GeoJsonProperties
    | undefined,
  FeatureOptions extends Partial<FeatureGenericOptions> = FeatureGenericOptions,
> = Feature<LineStringGeometry<TCoordinate>, TProperties, FeatureOptions>;
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

export type PolygonFeature<
  TCoordinate extends Coordinate = Coordinate,
  TProperties extends GeoJsonProperties | undefined =
    | GeoJsonProperties
    | undefined,
  FeatureOptions extends Partial<FeatureGenericOptions> = FeatureGenericOptions,
> = Feature<PolygonGeometry<TCoordinate>, TProperties, FeatureOptions>;

export type PolygonFeature2d<
  FeatureOptions extends Partial<FeatureGenericOptions> = FeatureGenericOptions,
> = Feature<PolygonGeometry2d, GeoJsonProperties | undefined, FeatureOptions>;

export type PolygonFeature3d<
  FeatureOptions extends Partial<FeatureGenericOptions> = FeatureGenericOptions,
> = Feature<PolygonGeometry3d, GeoJsonProperties | undefined, FeatureOptions>;

export type MultiPointFeature<
  TProperties extends GeoJsonProperties | undefined =
    | GeoJsonProperties
    | undefined,
  FeatureOptions extends Partial<FeatureGenericOptions> = FeatureGenericOptions,
> = Feature<MultiPointGeometry, TProperties, FeatureOptions>;

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

export type MultiLineStringFeature<
  TCoordinate extends Coordinate = Coordinate,
  TProperties extends GeoJsonProperties | undefined =
    | GeoJsonProperties
    | undefined,
  FeatureOptions extends Partial<FeatureGenericOptions> = FeatureGenericOptions,
> = Feature<MultiLineStringGeometry<TCoordinate>, TProperties, FeatureOptions>;

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

export type MultiPolygonFeature<
  TCoordinate extends Coordinate = Coordinate,
  TProperties extends GeoJsonProperties | undefined =
    | GeoJsonProperties
    | undefined,
  FeatureOptions extends Partial<FeatureGenericOptions> = FeatureGenericOptions,
> = Feature<MultiPolygonGeometry<TCoordinate>, TProperties, FeatureOptions>;

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
// COMPAT W/ `@types/geojson`
export type {
  // geometry types
  PointGeometry as Point,
  LineStringGeometry as LineString,
  PolygonGeometry as Polygon,
  MultiPointGeometry as MultiPoint,
  MultiLineStringGeometry as MultiLineString,
  MultiPolygonGeometry as MultiPolygon,
  // feature types
  Geometry as GeometryObject,
};
