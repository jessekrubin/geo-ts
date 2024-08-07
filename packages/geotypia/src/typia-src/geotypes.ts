/* eslint-disable @typescript-eslint/no-explicit-any,@typescript-eslint/no-unused-vars */
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import typia from "typia";

import type {
  BBox,
  BBox2d,
  BBox3d,
  Coord,
  Coord2d,
  Coord2dLike,
  Coord3d,
  Coord3dLike,
  Coordinate,
  Coordinate2d,
  Coordinate3d,
  CoordinateReferenceSystem,
  CoordinateReferenceSystemNullable,
  CoordLike,
  DeckglMapViewstate,
  DeckglTilejson,
  Feature,
  FeatureCollection,
  FeatureCollectionType,
  FeatureGeneric,
  FeatureGenericGeometry,
  FeatureGenericOptions,
  FeatureOptions,
  FeatureType,
  GeojsonBBox,
  GeojsonBBox2d,
  GeojsonBBox3d,
  GeoJsonProperties,
  Geometry,
  Geometry2d,
  Geometry3d,
  GeometryCollectionType,
  GeometryType,
  Geostats,
  GeostatsAttribute,
  GeostatsLayer,
  Latitude,
  LatitudeWgs84,
  LinearRing,
  LineStringCoordinates,
  LineStringFeature,
  LineStringFeature2d,
  LineStringFeature3d,
  LineStringGeometry,
  LineStringGeometry2d,
  LineStringGeometry3d,
  LineStringGeometryType,
  LinkedCoordinateReferenceSystem,
  LngLat,
  LngLatZ,
  Longitude,
  LongitudeWgs84,
  LonLat,
  LonLatZ,
  MbtilesMetadataRow,
  MbtilesMetadataRows,
  MbtilesTilesRow,
  MultiLineStringCoordinates,
  MultiLineStringFeature,
  MultiLineStringFeature2d,
  MultiLineStringFeature3d,
  MultiLineStringGeometry,
  MultiLineStringGeometry2d,
  MultiLineStringGeometry3d,
  MultiLineStringGeometryType,
  MultiPointCoordinates,
  MultiPointFeature,
  MultiPointFeature2d,
  MultiPointFeature3d,
  MultiPointGeometry,
  MultiPointGeometry2d,
  MultiPointGeometry3d,
  MultiPointGeometryType,
  MultiPolygonCoordinates,
  MultiPolygonFeature,
  MultiPolygonFeature2d,
  MultiPolygonFeature3d,
  MultiPolygonGeometry,
  MultiPolygonGeometry2d,
  MultiPolygonGeometry3d,
  MultiPolygonGeometryType,
  NamedCoordinateReferenceSystem,
  PointCoordinates,
  PointFeature,
  PointFeature2d,
  PointFeature3d,
  PointGeometry,
  PointGeometry2d,
  PointGeometry3d,
  PointGeometryType,
  PolygonCoordinates,
  PolygonFeature,
  PolygonFeature2d,
  PolygonFeature3d,
  PolygonGeometry,
  PolygonGeometry2d,
  PolygonGeometry3d,
  PolygonGeometryType,
  SimpleStyleProperties,
  Tilejson,
  Tilejson300,
  TilejsonCommon,
  TilejsonFormat,
  TilejsonFormatExtra,
  TilejsonRaster,
  TilejsonRasterFormat,
  TilejsonScheme,
  TilejsonVector,
  TilejsonVectorFormat,
  TilejsonVectorLayer,
  TilejsonVectorLayers,
  TilejsonVersion,
} from "@jsse/geotypes";

// BBox
export const assertBBox = typia.createAssert<BBox>();
export const equalsBBox = typia.createEquals<BBox>();
export const isBBox = typia.createIs<BBox>();
export const randomBBox = typia.createRandom<BBox>();
export const stringifyBBox = typia.json.createStringify<BBox>();
export const validateBBox = typia.createValidate<BBox>();

// BBox2d
export const assertBBox2d = typia.createAssert<BBox2d>();
export const equalsBBox2d = typia.createEquals<BBox2d>();
export const isBBox2d = typia.createIs<BBox2d>();
export const randomBBox2d = typia.createRandom<BBox2d>();
export const stringifyBBox2d = typia.json.createStringify<BBox2d>();
export const validateBBox2d = typia.createValidate<BBox2d>();

// BBox3d
export const assertBBox3d = typia.createAssert<BBox3d>();
export const equalsBBox3d = typia.createEquals<BBox3d>();
export const isBBox3d = typia.createIs<BBox3d>();
export const randomBBox3d = typia.createRandom<BBox3d>();
export const stringifyBBox3d = typia.json.createStringify<BBox3d>();
export const validateBBox3d = typia.createValidate<BBox3d>();

// Coord
export const assertCoord = typia.createAssert<Coord>();
export const equalsCoord = typia.createEquals<Coord>();
export const isCoord = typia.createIs<Coord>();
export const randomCoord = typia.createRandom<Coord>();
export const stringifyCoord = typia.json.createStringify<Coord>();
export const validateCoord = typia.createValidate<Coord>();

// Coord2d
export const assertCoord2d = typia.createAssert<Coord2d>();
export const equalsCoord2d = typia.createEquals<Coord2d>();
export const isCoord2d = typia.createIs<Coord2d>();
export const randomCoord2d = typia.createRandom<Coord2d>();
export const stringifyCoord2d = typia.json.createStringify<Coord2d>();
export const validateCoord2d = typia.createValidate<Coord2d>();

// Coord2dLike
export const assertCoord2dLike = typia.createAssert<Coord2dLike>();
export const equalsCoord2dLike = typia.createEquals<Coord2dLike>();
export const isCoord2dLike = typia.createIs<Coord2dLike>();
export const randomCoord2dLike = typia.createRandom<Coord2dLike>();
export const stringifyCoord2dLike = typia.json.createStringify<Coord2dLike>();
export const validateCoord2dLike = typia.createValidate<Coord2dLike>();

// Coord3d
export const assertCoord3d = typia.createAssert<Coord3d>();
export const equalsCoord3d = typia.createEquals<Coord3d>();
export const isCoord3d = typia.createIs<Coord3d>();
export const randomCoord3d = typia.createRandom<Coord3d>();
export const stringifyCoord3d = typia.json.createStringify<Coord3d>();
export const validateCoord3d = typia.createValidate<Coord3d>();

// Coord3dLike
export const assertCoord3dLike = typia.createAssert<Coord3dLike>();
export const equalsCoord3dLike = typia.createEquals<Coord3dLike>();
export const isCoord3dLike = typia.createIs<Coord3dLike>();
export const randomCoord3dLike = typia.createRandom<Coord3dLike>();
export const stringifyCoord3dLike = typia.json.createStringify<Coord3dLike>();
export const validateCoord3dLike = typia.createValidate<Coord3dLike>();

// Coordinate
export const assertCoordinate = typia.createAssert<Coordinate>();
export const equalsCoordinate = typia.createEquals<Coordinate>();
export const isCoordinate = typia.createIs<Coordinate>();
export const randomCoordinate = typia.createRandom<Coordinate>();
export const stringifyCoordinate = typia.json.createStringify<Coordinate>();
export const validateCoordinate = typia.createValidate<Coordinate>();

// Coordinate2d
export const assertCoordinate2d = typia.createAssert<Coordinate2d>();
export const equalsCoordinate2d = typia.createEquals<Coordinate2d>();
export const isCoordinate2d = typia.createIs<Coordinate2d>();
export const randomCoordinate2d = typia.createRandom<Coordinate2d>();
export const stringifyCoordinate2d = typia.json.createStringify<Coordinate2d>();
export const validateCoordinate2d = typia.createValidate<Coordinate2d>();

// Coordinate3d
export const assertCoordinate3d = typia.createAssert<Coordinate3d>();
export const equalsCoordinate3d = typia.createEquals<Coordinate3d>();
export const isCoordinate3d = typia.createIs<Coordinate3d>();
export const randomCoordinate3d = typia.createRandom<Coordinate3d>();
export const stringifyCoordinate3d = typia.json.createStringify<Coordinate3d>();
export const validateCoordinate3d = typia.createValidate<Coordinate3d>();

// CoordinateReferenceSystem
export const assertCoordinateReferenceSystem =
  typia.createAssert<CoordinateReferenceSystem>();
export const equalsCoordinateReferenceSystem =
  typia.createEquals<CoordinateReferenceSystem>();
export const isCoordinateReferenceSystem =
  typia.createIs<CoordinateReferenceSystem>();
export const randomCoordinateReferenceSystem =
  typia.createRandom<CoordinateReferenceSystem>();
export const stringifyCoordinateReferenceSystem =
  typia.json.createStringify<CoordinateReferenceSystem>();
export const validateCoordinateReferenceSystem =
  typia.createValidate<CoordinateReferenceSystem>();

// CoordinateReferenceSystemNullable
export const assertCoordinateReferenceSystemNullable =
  typia.createAssert<CoordinateReferenceSystemNullable>();
export const equalsCoordinateReferenceSystemNullable =
  typia.createEquals<CoordinateReferenceSystemNullable>();
export const isCoordinateReferenceSystemNullable =
  typia.createIs<CoordinateReferenceSystemNullable>();
export const randomCoordinateReferenceSystemNullable =
  typia.createRandom<CoordinateReferenceSystemNullable>();
export const stringifyCoordinateReferenceSystemNullable =
  typia.json.createStringify<CoordinateReferenceSystemNullable>();
export const validateCoordinateReferenceSystemNullable =
  typia.createValidate<CoordinateReferenceSystemNullable>();

// CoordLike
export const assertCoordLike = typia.createAssert<CoordLike>();
export const equalsCoordLike = typia.createEquals<CoordLike>();
export const isCoordLike = typia.createIs<CoordLike>();
export const randomCoordLike = typia.createRandom<CoordLike>();
export const stringifyCoordLike = typia.json.createStringify<CoordLike>();
export const validateCoordLike = typia.createValidate<CoordLike>();

// DeckglMapViewstate
export const assertDeckglMapViewstate =
  typia.createAssert<DeckglMapViewstate>();
export const equalsDeckglMapViewstate =
  typia.createEquals<DeckglMapViewstate>();
export const isDeckglMapViewstate = typia.createIs<DeckglMapViewstate>();
export const randomDeckglMapViewstate =
  typia.createRandom<DeckglMapViewstate>();
export const stringifyDeckglMapViewstate =
  typia.json.createStringify<DeckglMapViewstate>();
export const validateDeckglMapViewstate =
  typia.createValidate<DeckglMapViewstate>();

// DeckglTilejson
export const assertDeckglTilejson = typia.createAssert<DeckglTilejson>();
export const equalsDeckglTilejson = typia.createEquals<DeckglTilejson>();
export const isDeckglTilejson = typia.createIs<DeckglTilejson>();
export const randomDeckglTilejson = typia.createRandom<DeckglTilejson>();
export const stringifyDeckglTilejson =
  typia.json.createStringify<DeckglTilejson>();
export const validateDeckglTilejson = typia.createValidate<DeckglTilejson>();

// Feature
export const assertFeature = typia.createAssert<Feature>();
export const equalsFeature = typia.createEquals<Feature>();
export const isFeature = typia.createIs<Feature>();
export const randomFeature = typia.createRandom<Feature>();
export const stringifyFeature = typia.json.createStringify<Feature>();
export const validateFeature = typia.createValidate<Feature>();

// FeatureCollection
export const assertFeatureCollection = typia.createAssert<FeatureCollection>();
export const equalsFeatureCollection = typia.createEquals<FeatureCollection>();
export const isFeatureCollection = typia.createIs<FeatureCollection>();
export const randomFeatureCollection = typia.createRandom<FeatureCollection>();
export const stringifyFeatureCollection =
  typia.json.createStringify<FeatureCollection>();
export const validateFeatureCollection =
  typia.createValidate<FeatureCollection>();

// FeatureCollectionType
export const assertFeatureCollectionType =
  typia.createAssert<FeatureCollectionType>();
export const equalsFeatureCollectionType =
  typia.createEquals<FeatureCollectionType>();
export const isFeatureCollectionType = typia.createIs<FeatureCollectionType>();
export const randomFeatureCollectionType =
  typia.createRandom<FeatureCollectionType>();
export const stringifyFeatureCollectionType =
  typia.json.createStringify<FeatureCollectionType>();
export const validateFeatureCollectionType =
  typia.createValidate<FeatureCollectionType>();

// FeatureGeneric
export const assertFeatureGeneric = typia.createAssert<FeatureGeneric>();
export const equalsFeatureGeneric = typia.createEquals<FeatureGeneric>();
export const isFeatureGeneric = typia.createIs<FeatureGeneric>();
export const randomFeatureGeneric = typia.createRandom<FeatureGeneric>();
export const stringifyFeatureGeneric =
  typia.json.createStringify<FeatureGeneric>();
export const validateFeatureGeneric = typia.createValidate<FeatureGeneric>();

// FeatureGenericGeometry
export const assertFeatureGenericGeometry =
  typia.createAssert<FeatureGenericGeometry>();
export const equalsFeatureGenericGeometry =
  typia.createEquals<FeatureGenericGeometry>();
export const isFeatureGenericGeometry =
  typia.createIs<FeatureGenericGeometry>();
export const randomFeatureGenericGeometry =
  typia.createRandom<FeatureGenericGeometry>();
export const stringifyFeatureGenericGeometry =
  typia.json.createStringify<FeatureGenericGeometry>();
export const validateFeatureGenericGeometry =
  typia.createValidate<FeatureGenericGeometry>();

// FeatureGenericOptions
export const assertFeatureGenericOptions =
  typia.createAssert<FeatureGenericOptions>();
export const equalsFeatureGenericOptions =
  typia.createEquals<FeatureGenericOptions>();
export const isFeatureGenericOptions = typia.createIs<FeatureGenericOptions>();
export const randomFeatureGenericOptions =
  typia.createRandom<FeatureGenericOptions>();
export const stringifyFeatureGenericOptions =
  typia.json.createStringify<FeatureGenericOptions>();
export const validateFeatureGenericOptions =
  typia.createValidate<FeatureGenericOptions>();

// FeatureOptions
export const assertFeatureOptions = typia.createAssert<FeatureOptions>();
export const equalsFeatureOptions = typia.createEquals<FeatureOptions>();
export const isFeatureOptions = typia.createIs<FeatureOptions>();
export const randomFeatureOptions = typia.createRandom<FeatureOptions>();
export const stringifyFeatureOptions =
  typia.json.createStringify<FeatureOptions>();
export const validateFeatureOptions = typia.createValidate<FeatureOptions>();

// FeatureType
export const assertFeatureType = typia.createAssert<FeatureType>();
export const equalsFeatureType = typia.createEquals<FeatureType>();
export const isFeatureType = typia.createIs<FeatureType>();
export const randomFeatureType = typia.createRandom<FeatureType>();
export const stringifyFeatureType = typia.json.createStringify<FeatureType>();
export const validateFeatureType = typia.createValidate<FeatureType>();

// GeojsonBBox
export const assertGeojsonBBox = typia.createAssert<GeojsonBBox>();
export const equalsGeojsonBBox = typia.createEquals<GeojsonBBox>();
export const isGeojsonBBox = typia.createIs<GeojsonBBox>();
export const randomGeojsonBBox = typia.createRandom<GeojsonBBox>();
export const stringifyGeojsonBBox = typia.json.createStringify<GeojsonBBox>();
export const validateGeojsonBBox = typia.createValidate<GeojsonBBox>();

// GeojsonBBox2d
export const assertGeojsonBBox2d = typia.createAssert<GeojsonBBox2d>();
export const equalsGeojsonBBox2d = typia.createEquals<GeojsonBBox2d>();
export const isGeojsonBBox2d = typia.createIs<GeojsonBBox2d>();
export const randomGeojsonBBox2d = typia.createRandom<GeojsonBBox2d>();
export const stringifyGeojsonBBox2d =
  typia.json.createStringify<GeojsonBBox2d>();
export const validateGeojsonBBox2d = typia.createValidate<GeojsonBBox2d>();

// GeojsonBBox3d
export const assertGeojsonBBox3d = typia.createAssert<GeojsonBBox3d>();
export const equalsGeojsonBBox3d = typia.createEquals<GeojsonBBox3d>();
export const isGeojsonBBox3d = typia.createIs<GeojsonBBox3d>();
export const randomGeojsonBBox3d = typia.createRandom<GeojsonBBox3d>();
export const stringifyGeojsonBBox3d =
  typia.json.createStringify<GeojsonBBox3d>();
export const validateGeojsonBBox3d = typia.createValidate<GeojsonBBox3d>();

// GeoJsonProperties
export const assertGeoJsonProperties = typia.createAssert<GeoJsonProperties>();
export const equalsGeoJsonProperties = typia.createEquals<GeoJsonProperties>();
export const isGeoJsonProperties = typia.createIs<GeoJsonProperties>();
export const randomGeoJsonProperties = typia.createRandom<GeoJsonProperties>();
export const stringifyGeoJsonProperties =
  typia.json.createStringify<GeoJsonProperties>();
export const validateGeoJsonProperties =
  typia.createValidate<GeoJsonProperties>();

// Geometry
export const assertGeometry = typia.createAssert<Geometry>();
export const equalsGeometry = typia.createEquals<Geometry>();
export const isGeometry = typia.createIs<Geometry>();
export const randomGeometry = typia.createRandom<Geometry>();
export const stringifyGeometry = typia.json.createStringify<Geometry>();
export const validateGeometry = typia.createValidate<Geometry>();

// Geometry2d
export const assertGeometry2d = typia.createAssert<Geometry2d>();
export const equalsGeometry2d = typia.createEquals<Geometry2d>();
export const isGeometry2d = typia.createIs<Geometry2d>();
export const randomGeometry2d = typia.createRandom<Geometry2d>();
export const stringifyGeometry2d = typia.json.createStringify<Geometry2d>();
export const validateGeometry2d = typia.createValidate<Geometry2d>();

// Geometry3d
export const assertGeometry3d = typia.createAssert<Geometry3d>();
export const equalsGeometry3d = typia.createEquals<Geometry3d>();
export const isGeometry3d = typia.createIs<Geometry3d>();
export const randomGeometry3d = typia.createRandom<Geometry3d>();
export const stringifyGeometry3d = typia.json.createStringify<Geometry3d>();
export const validateGeometry3d = typia.createValidate<Geometry3d>();

// GeometryCollectionType
export const assertGeometryCollectionType =
  typia.createAssert<GeometryCollectionType>();
export const equalsGeometryCollectionType =
  typia.createEquals<GeometryCollectionType>();
export const isGeometryCollectionType =
  typia.createIs<GeometryCollectionType>();
export const randomGeometryCollectionType =
  typia.createRandom<GeometryCollectionType>();
export const stringifyGeometryCollectionType =
  typia.json.createStringify<GeometryCollectionType>();
export const validateGeometryCollectionType =
  typia.createValidate<GeometryCollectionType>();

// GeometryType
export const assertGeometryType = typia.createAssert<GeometryType>();
export const equalsGeometryType = typia.createEquals<GeometryType>();
export const isGeometryType = typia.createIs<GeometryType>();
export const randomGeometryType = typia.createRandom<GeometryType>();
export const stringifyGeometryType = typia.json.createStringify<GeometryType>();
export const validateGeometryType = typia.createValidate<GeometryType>();

// Geostats
export const assertGeostats = typia.createAssert<Geostats>();
export const equalsGeostats = typia.createEquals<Geostats>();
export const isGeostats = typia.createIs<Geostats>();
export const randomGeostats = typia.createRandom<Geostats>();
export const stringifyGeostats = typia.json.createStringify<Geostats>();
export const validateGeostats = typia.createValidate<Geostats>();

// GeostatsAttribute
export const assertGeostatsAttribute = typia.createAssert<GeostatsAttribute>();
export const equalsGeostatsAttribute = typia.createEquals<GeostatsAttribute>();
export const isGeostatsAttribute = typia.createIs<GeostatsAttribute>();
export const randomGeostatsAttribute = typia.createRandom<GeostatsAttribute>();
export const stringifyGeostatsAttribute =
  typia.json.createStringify<GeostatsAttribute>();
export const validateGeostatsAttribute =
  typia.createValidate<GeostatsAttribute>();

// GeostatsLayer
export const assertGeostatsLayer = typia.createAssert<GeostatsLayer>();
export const equalsGeostatsLayer = typia.createEquals<GeostatsLayer>();
export const isGeostatsLayer = typia.createIs<GeostatsLayer>();
export const randomGeostatsLayer = typia.createRandom<GeostatsLayer>();
export const stringifyGeostatsLayer =
  typia.json.createStringify<GeostatsLayer>();
export const validateGeostatsLayer = typia.createValidate<GeostatsLayer>();

// Latitude
export const assertLatitude = typia.createAssert<Latitude>();
export const equalsLatitude = typia.createEquals<Latitude>();
export const isLatitude = typia.createIs<Latitude>();
export const randomLatitude = typia.createRandom<Latitude>();
export const stringifyLatitude = typia.json.createStringify<Latitude>();
export const validateLatitude = typia.createValidate<Latitude>();

// LatitudeWgs84
export const assertLatitudeWgs84 = typia.createAssert<LatitudeWgs84>();
export const equalsLatitudeWgs84 = typia.createEquals<LatitudeWgs84>();
export const isLatitudeWgs84 = typia.createIs<LatitudeWgs84>();
export const randomLatitudeWgs84 = typia.createRandom<LatitudeWgs84>();
export const stringifyLatitudeWgs84 =
  typia.json.createStringify<LatitudeWgs84>();
export const validateLatitudeWgs84 = typia.createValidate<LatitudeWgs84>();

// LinearRing
export const assertLinearRing = typia.createAssert<LinearRing>();
export const equalsLinearRing = typia.createEquals<LinearRing>();
export const isLinearRing = typia.createIs<LinearRing>();
export const randomLinearRing = typia.createRandom<LinearRing>();
export const stringifyLinearRing = typia.json.createStringify<LinearRing>();
export const validateLinearRing = typia.createValidate<LinearRing>();

// LineStringCoordinates
export const assertLineStringCoordinates =
  typia.createAssert<LineStringCoordinates>();
export const equalsLineStringCoordinates =
  typia.createEquals<LineStringCoordinates>();
export const isLineStringCoordinates = typia.createIs<LineStringCoordinates>();
export const randomLineStringCoordinates =
  typia.createRandom<LineStringCoordinates>();
export const stringifyLineStringCoordinates =
  typia.json.createStringify<LineStringCoordinates>();
export const validateLineStringCoordinates =
  typia.createValidate<LineStringCoordinates>();

// LineStringFeature
export const assertLineStringFeature = typia.createAssert<LineStringFeature>();
export const equalsLineStringFeature = typia.createEquals<LineStringFeature>();
export const isLineStringFeature = typia.createIs<LineStringFeature>();
export const randomLineStringFeature = typia.createRandom<LineStringFeature>();
export const stringifyLineStringFeature =
  typia.json.createStringify<LineStringFeature>();
export const validateLineStringFeature =
  typia.createValidate<LineStringFeature>();

// LineStringFeature2d
export const assertLineStringFeature2d =
  typia.createAssert<LineStringFeature2d>();
export const equalsLineStringFeature2d =
  typia.createEquals<LineStringFeature2d>();
export const isLineStringFeature2d = typia.createIs<LineStringFeature2d>();
export const randomLineStringFeature2d =
  typia.createRandom<LineStringFeature2d>();
export const stringifyLineStringFeature2d =
  typia.json.createStringify<LineStringFeature2d>();
export const validateLineStringFeature2d =
  typia.createValidate<LineStringFeature2d>();

// LineStringFeature3d
export const assertLineStringFeature3d =
  typia.createAssert<LineStringFeature3d>();
export const equalsLineStringFeature3d =
  typia.createEquals<LineStringFeature3d>();
export const isLineStringFeature3d = typia.createIs<LineStringFeature3d>();
export const randomLineStringFeature3d =
  typia.createRandom<LineStringFeature3d>();
export const stringifyLineStringFeature3d =
  typia.json.createStringify<LineStringFeature3d>();
export const validateLineStringFeature3d =
  typia.createValidate<LineStringFeature3d>();

// LineStringGeometry
export const assertLineStringGeometry =
  typia.createAssert<LineStringGeometry>();
export const equalsLineStringGeometry =
  typia.createEquals<LineStringGeometry>();
export const isLineStringGeometry = typia.createIs<LineStringGeometry>();
export const randomLineStringGeometry =
  typia.createRandom<LineStringGeometry>();
export const stringifyLineStringGeometry =
  typia.json.createStringify<LineStringGeometry>();
export const validateLineStringGeometry =
  typia.createValidate<LineStringGeometry>();

// LineStringGeometry2d
export const assertLineStringGeometry2d =
  typia.createAssert<LineStringGeometry2d>();
export const equalsLineStringGeometry2d =
  typia.createEquals<LineStringGeometry2d>();
export const isLineStringGeometry2d = typia.createIs<LineStringGeometry2d>();
export const randomLineStringGeometry2d =
  typia.createRandom<LineStringGeometry2d>();
export const stringifyLineStringGeometry2d =
  typia.json.createStringify<LineStringGeometry2d>();
export const validateLineStringGeometry2d =
  typia.createValidate<LineStringGeometry2d>();

// LineStringGeometry3d
export const assertLineStringGeometry3d =
  typia.createAssert<LineStringGeometry3d>();
export const equalsLineStringGeometry3d =
  typia.createEquals<LineStringGeometry3d>();
export const isLineStringGeometry3d = typia.createIs<LineStringGeometry3d>();
export const randomLineStringGeometry3d =
  typia.createRandom<LineStringGeometry3d>();
export const stringifyLineStringGeometry3d =
  typia.json.createStringify<LineStringGeometry3d>();
export const validateLineStringGeometry3d =
  typia.createValidate<LineStringGeometry3d>();

// LineStringGeometryType
export const assertLineStringGeometryType =
  typia.createAssert<LineStringGeometryType>();
export const equalsLineStringGeometryType =
  typia.createEquals<LineStringGeometryType>();
export const isLineStringGeometryType =
  typia.createIs<LineStringGeometryType>();
export const randomLineStringGeometryType =
  typia.createRandom<LineStringGeometryType>();
export const stringifyLineStringGeometryType =
  typia.json.createStringify<LineStringGeometryType>();
export const validateLineStringGeometryType =
  typia.createValidate<LineStringGeometryType>();

// LinkedCoordinateReferenceSystem
export const assertLinkedCoordinateReferenceSystem =
  typia.createAssert<LinkedCoordinateReferenceSystem>();
export const equalsLinkedCoordinateReferenceSystem =
  typia.createEquals<LinkedCoordinateReferenceSystem>();
export const isLinkedCoordinateReferenceSystem =
  typia.createIs<LinkedCoordinateReferenceSystem>();
export const randomLinkedCoordinateReferenceSystem =
  typia.createRandom<LinkedCoordinateReferenceSystem>();
export const stringifyLinkedCoordinateReferenceSystem =
  typia.json.createStringify<LinkedCoordinateReferenceSystem>();
export const validateLinkedCoordinateReferenceSystem =
  typia.createValidate<LinkedCoordinateReferenceSystem>();

// LngLat
export const assertLngLat = typia.createAssert<LngLat>();
export const equalsLngLat = typia.createEquals<LngLat>();
export const isLngLat = typia.createIs<LngLat>();
export const randomLngLat = typia.createRandom<LngLat>();
export const stringifyLngLat = typia.json.createStringify<LngLat>();
export const validateLngLat = typia.createValidate<LngLat>();

// LngLatZ
export const assertLngLatZ = typia.createAssert<LngLatZ>();
export const equalsLngLatZ = typia.createEquals<LngLatZ>();
export const isLngLatZ = typia.createIs<LngLatZ>();
export const randomLngLatZ = typia.createRandom<LngLatZ>();
export const stringifyLngLatZ = typia.json.createStringify<LngLatZ>();
export const validateLngLatZ = typia.createValidate<LngLatZ>();

// Longitude
export const assertLongitude = typia.createAssert<Longitude>();
export const equalsLongitude = typia.createEquals<Longitude>();
export const isLongitude = typia.createIs<Longitude>();
export const randomLongitude = typia.createRandom<Longitude>();
export const stringifyLongitude = typia.json.createStringify<Longitude>();
export const validateLongitude = typia.createValidate<Longitude>();

// LongitudeWgs84
export const assertLongitudeWgs84 = typia.createAssert<LongitudeWgs84>();
export const equalsLongitudeWgs84 = typia.createEquals<LongitudeWgs84>();
export const isLongitudeWgs84 = typia.createIs<LongitudeWgs84>();
export const randomLongitudeWgs84 = typia.createRandom<LongitudeWgs84>();
export const stringifyLongitudeWgs84 =
  typia.json.createStringify<LongitudeWgs84>();
export const validateLongitudeWgs84 = typia.createValidate<LongitudeWgs84>();

// LonLat
export const assertLonLat = typia.createAssert<LonLat>();
export const equalsLonLat = typia.createEquals<LonLat>();
export const isLonLat = typia.createIs<LonLat>();
export const randomLonLat = typia.createRandom<LonLat>();
export const stringifyLonLat = typia.json.createStringify<LonLat>();
export const validateLonLat = typia.createValidate<LonLat>();

// LonLatZ
export const assertLonLatZ = typia.createAssert<LonLatZ>();
export const equalsLonLatZ = typia.createEquals<LonLatZ>();
export const isLonLatZ = typia.createIs<LonLatZ>();
export const randomLonLatZ = typia.createRandom<LonLatZ>();
export const stringifyLonLatZ = typia.json.createStringify<LonLatZ>();
export const validateLonLatZ = typia.createValidate<LonLatZ>();

// MbtilesMetadataRow
export const assertMbtilesMetadataRow =
  typia.createAssert<MbtilesMetadataRow>();
export const equalsMbtilesMetadataRow =
  typia.createEquals<MbtilesMetadataRow>();
export const isMbtilesMetadataRow = typia.createIs<MbtilesMetadataRow>();
export const randomMbtilesMetadataRow =
  typia.createRandom<MbtilesMetadataRow>();
export const stringifyMbtilesMetadataRow =
  typia.json.createStringify<MbtilesMetadataRow>();
export const validateMbtilesMetadataRow =
  typia.createValidate<MbtilesMetadataRow>();

// MbtilesMetadataRows
export const assertMbtilesMetadataRows =
  typia.createAssert<MbtilesMetadataRows>();
export const equalsMbtilesMetadataRows =
  typia.createEquals<MbtilesMetadataRows>();
export const isMbtilesMetadataRows = typia.createIs<MbtilesMetadataRows>();
export const randomMbtilesMetadataRows =
  typia.createRandom<MbtilesMetadataRows>();
export const stringifyMbtilesMetadataRows =
  typia.json.createStringify<MbtilesMetadataRows>();
export const validateMbtilesMetadataRows =
  typia.createValidate<MbtilesMetadataRows>();

// MbtilesTilesRow
export const assertMbtilesTilesRow = typia.createAssert<MbtilesTilesRow>();
export const equalsMbtilesTilesRow = typia.createEquals<MbtilesTilesRow>();
export const isMbtilesTilesRow = typia.createIs<MbtilesTilesRow>();
export const randomMbtilesTilesRow = typia.createRandom<MbtilesTilesRow>();
export const stringifyMbtilesTilesRow =
  typia.json.createStringify<MbtilesTilesRow>();
export const validateMbtilesTilesRow = typia.createValidate<MbtilesTilesRow>();

// MultiLineStringCoordinates
export const assertMultiLineStringCoordinates =
  typia.createAssert<MultiLineStringCoordinates>();
export const equalsMultiLineStringCoordinates =
  typia.createEquals<MultiLineStringCoordinates>();
export const isMultiLineStringCoordinates =
  typia.createIs<MultiLineStringCoordinates>();
export const randomMultiLineStringCoordinates =
  typia.createRandom<MultiLineStringCoordinates>();
export const stringifyMultiLineStringCoordinates =
  typia.json.createStringify<MultiLineStringCoordinates>();
export const validateMultiLineStringCoordinates =
  typia.createValidate<MultiLineStringCoordinates>();

// MultiLineStringFeature
export const assertMultiLineStringFeature =
  typia.createAssert<MultiLineStringFeature>();
export const equalsMultiLineStringFeature =
  typia.createEquals<MultiLineStringFeature>();
export const isMultiLineStringFeature =
  typia.createIs<MultiLineStringFeature>();
export const randomMultiLineStringFeature =
  typia.createRandom<MultiLineStringFeature>();
export const stringifyMultiLineStringFeature =
  typia.json.createStringify<MultiLineStringFeature>();
export const validateMultiLineStringFeature =
  typia.createValidate<MultiLineStringFeature>();

// MultiLineStringFeature2d
export const assertMultiLineStringFeature2d =
  typia.createAssert<MultiLineStringFeature2d>();
export const equalsMultiLineStringFeature2d =
  typia.createEquals<MultiLineStringFeature2d>();
export const isMultiLineStringFeature2d =
  typia.createIs<MultiLineStringFeature2d>();
export const randomMultiLineStringFeature2d =
  typia.createRandom<MultiLineStringFeature2d>();
export const stringifyMultiLineStringFeature2d =
  typia.json.createStringify<MultiLineStringFeature2d>();
export const validateMultiLineStringFeature2d =
  typia.createValidate<MultiLineStringFeature2d>();

// MultiLineStringFeature3d
export const assertMultiLineStringFeature3d =
  typia.createAssert<MultiLineStringFeature3d>();
export const equalsMultiLineStringFeature3d =
  typia.createEquals<MultiLineStringFeature3d>();
export const isMultiLineStringFeature3d =
  typia.createIs<MultiLineStringFeature3d>();
export const randomMultiLineStringFeature3d =
  typia.createRandom<MultiLineStringFeature3d>();
export const stringifyMultiLineStringFeature3d =
  typia.json.createStringify<MultiLineStringFeature3d>();
export const validateMultiLineStringFeature3d =
  typia.createValidate<MultiLineStringFeature3d>();

// MultiLineStringGeometry
export const assertMultiLineStringGeometry =
  typia.createAssert<MultiLineStringGeometry>();
export const equalsMultiLineStringGeometry =
  typia.createEquals<MultiLineStringGeometry>();
export const isMultiLineStringGeometry =
  typia.createIs<MultiLineStringGeometry>();
export const randomMultiLineStringGeometry =
  typia.createRandom<MultiLineStringGeometry>();
export const stringifyMultiLineStringGeometry =
  typia.json.createStringify<MultiLineStringGeometry>();
export const validateMultiLineStringGeometry =
  typia.createValidate<MultiLineStringGeometry>();

// MultiLineStringGeometry2d
export const assertMultiLineStringGeometry2d =
  typia.createAssert<MultiLineStringGeometry2d>();
export const equalsMultiLineStringGeometry2d =
  typia.createEquals<MultiLineStringGeometry2d>();
export const isMultiLineStringGeometry2d =
  typia.createIs<MultiLineStringGeometry2d>();
export const randomMultiLineStringGeometry2d =
  typia.createRandom<MultiLineStringGeometry2d>();
export const stringifyMultiLineStringGeometry2d =
  typia.json.createStringify<MultiLineStringGeometry2d>();
export const validateMultiLineStringGeometry2d =
  typia.createValidate<MultiLineStringGeometry2d>();

// MultiLineStringGeometry3d
export const assertMultiLineStringGeometry3d =
  typia.createAssert<MultiLineStringGeometry3d>();
export const equalsMultiLineStringGeometry3d =
  typia.createEquals<MultiLineStringGeometry3d>();
export const isMultiLineStringGeometry3d =
  typia.createIs<MultiLineStringGeometry3d>();
export const randomMultiLineStringGeometry3d =
  typia.createRandom<MultiLineStringGeometry3d>();
export const stringifyMultiLineStringGeometry3d =
  typia.json.createStringify<MultiLineStringGeometry3d>();
export const validateMultiLineStringGeometry3d =
  typia.createValidate<MultiLineStringGeometry3d>();

// MultiLineStringGeometryType
export const assertMultiLineStringGeometryType =
  typia.createAssert<MultiLineStringGeometryType>();
export const equalsMultiLineStringGeometryType =
  typia.createEquals<MultiLineStringGeometryType>();
export const isMultiLineStringGeometryType =
  typia.createIs<MultiLineStringGeometryType>();
export const randomMultiLineStringGeometryType =
  typia.createRandom<MultiLineStringGeometryType>();
export const stringifyMultiLineStringGeometryType =
  typia.json.createStringify<MultiLineStringGeometryType>();
export const validateMultiLineStringGeometryType =
  typia.createValidate<MultiLineStringGeometryType>();

// MultiPointCoordinates
export const assertMultiPointCoordinates =
  typia.createAssert<MultiPointCoordinates>();
export const equalsMultiPointCoordinates =
  typia.createEquals<MultiPointCoordinates>();
export const isMultiPointCoordinates = typia.createIs<MultiPointCoordinates>();
export const randomMultiPointCoordinates =
  typia.createRandom<MultiPointCoordinates>();
export const stringifyMultiPointCoordinates =
  typia.json.createStringify<MultiPointCoordinates>();
export const validateMultiPointCoordinates =
  typia.createValidate<MultiPointCoordinates>();

// MultiPointFeature
export const assertMultiPointFeature = typia.createAssert<MultiPointFeature>();
export const equalsMultiPointFeature = typia.createEquals<MultiPointFeature>();
export const isMultiPointFeature = typia.createIs<MultiPointFeature>();
export const randomMultiPointFeature = typia.createRandom<MultiPointFeature>();
export const stringifyMultiPointFeature =
  typia.json.createStringify<MultiPointFeature>();
export const validateMultiPointFeature =
  typia.createValidate<MultiPointFeature>();

// MultiPointFeature2d
export const assertMultiPointFeature2d =
  typia.createAssert<MultiPointFeature2d>();
export const equalsMultiPointFeature2d =
  typia.createEquals<MultiPointFeature2d>();
export const isMultiPointFeature2d = typia.createIs<MultiPointFeature2d>();
export const randomMultiPointFeature2d =
  typia.createRandom<MultiPointFeature2d>();
export const stringifyMultiPointFeature2d =
  typia.json.createStringify<MultiPointFeature2d>();
export const validateMultiPointFeature2d =
  typia.createValidate<MultiPointFeature2d>();

// MultiPointFeature3d
export const assertMultiPointFeature3d =
  typia.createAssert<MultiPointFeature3d>();
export const equalsMultiPointFeature3d =
  typia.createEquals<MultiPointFeature3d>();
export const isMultiPointFeature3d = typia.createIs<MultiPointFeature3d>();
export const randomMultiPointFeature3d =
  typia.createRandom<MultiPointFeature3d>();
export const stringifyMultiPointFeature3d =
  typia.json.createStringify<MultiPointFeature3d>();
export const validateMultiPointFeature3d =
  typia.createValidate<MultiPointFeature3d>();

// MultiPointGeometry
export const assertMultiPointGeometry =
  typia.createAssert<MultiPointGeometry>();
export const equalsMultiPointGeometry =
  typia.createEquals<MultiPointGeometry>();
export const isMultiPointGeometry = typia.createIs<MultiPointGeometry>();
export const randomMultiPointGeometry =
  typia.createRandom<MultiPointGeometry>();
export const stringifyMultiPointGeometry =
  typia.json.createStringify<MultiPointGeometry>();
export const validateMultiPointGeometry =
  typia.createValidate<MultiPointGeometry>();

// MultiPointGeometry2d
export const assertMultiPointGeometry2d =
  typia.createAssert<MultiPointGeometry2d>();
export const equalsMultiPointGeometry2d =
  typia.createEquals<MultiPointGeometry2d>();
export const isMultiPointGeometry2d = typia.createIs<MultiPointGeometry2d>();
export const randomMultiPointGeometry2d =
  typia.createRandom<MultiPointGeometry2d>();
export const stringifyMultiPointGeometry2d =
  typia.json.createStringify<MultiPointGeometry2d>();
export const validateMultiPointGeometry2d =
  typia.createValidate<MultiPointGeometry2d>();

// MultiPointGeometry3d
export const assertMultiPointGeometry3d =
  typia.createAssert<MultiPointGeometry3d>();
export const equalsMultiPointGeometry3d =
  typia.createEquals<MultiPointGeometry3d>();
export const isMultiPointGeometry3d = typia.createIs<MultiPointGeometry3d>();
export const randomMultiPointGeometry3d =
  typia.createRandom<MultiPointGeometry3d>();
export const stringifyMultiPointGeometry3d =
  typia.json.createStringify<MultiPointGeometry3d>();
export const validateMultiPointGeometry3d =
  typia.createValidate<MultiPointGeometry3d>();

// MultiPointGeometryType
export const assertMultiPointGeometryType =
  typia.createAssert<MultiPointGeometryType>();
export const equalsMultiPointGeometryType =
  typia.createEquals<MultiPointGeometryType>();
export const isMultiPointGeometryType =
  typia.createIs<MultiPointGeometryType>();
export const randomMultiPointGeometryType =
  typia.createRandom<MultiPointGeometryType>();
export const stringifyMultiPointGeometryType =
  typia.json.createStringify<MultiPointGeometryType>();
export const validateMultiPointGeometryType =
  typia.createValidate<MultiPointGeometryType>();

// MultiPolygonCoordinates
export const assertMultiPolygonCoordinates =
  typia.createAssert<MultiPolygonCoordinates>();
export const equalsMultiPolygonCoordinates =
  typia.createEquals<MultiPolygonCoordinates>();
export const isMultiPolygonCoordinates =
  typia.createIs<MultiPolygonCoordinates>();
export const randomMultiPolygonCoordinates =
  typia.createRandom<MultiPolygonCoordinates>();
export const stringifyMultiPolygonCoordinates =
  typia.json.createStringify<MultiPolygonCoordinates>();
export const validateMultiPolygonCoordinates =
  typia.createValidate<MultiPolygonCoordinates>();

// MultiPolygonFeature
export const assertMultiPolygonFeature =
  typia.createAssert<MultiPolygonFeature>();
export const equalsMultiPolygonFeature =
  typia.createEquals<MultiPolygonFeature>();
export const isMultiPolygonFeature = typia.createIs<MultiPolygonFeature>();
export const randomMultiPolygonFeature =
  typia.createRandom<MultiPolygonFeature>();
export const stringifyMultiPolygonFeature =
  typia.json.createStringify<MultiPolygonFeature>();
export const validateMultiPolygonFeature =
  typia.createValidate<MultiPolygonFeature>();

// MultiPolygonFeature2d
export const assertMultiPolygonFeature2d =
  typia.createAssert<MultiPolygonFeature2d>();
export const equalsMultiPolygonFeature2d =
  typia.createEquals<MultiPolygonFeature2d>();
export const isMultiPolygonFeature2d = typia.createIs<MultiPolygonFeature2d>();
export const randomMultiPolygonFeature2d =
  typia.createRandom<MultiPolygonFeature2d>();
export const stringifyMultiPolygonFeature2d =
  typia.json.createStringify<MultiPolygonFeature2d>();
export const validateMultiPolygonFeature2d =
  typia.createValidate<MultiPolygonFeature2d>();

// MultiPolygonFeature3d
export const assertMultiPolygonFeature3d =
  typia.createAssert<MultiPolygonFeature3d>();
export const equalsMultiPolygonFeature3d =
  typia.createEquals<MultiPolygonFeature3d>();
export const isMultiPolygonFeature3d = typia.createIs<MultiPolygonFeature3d>();
export const randomMultiPolygonFeature3d =
  typia.createRandom<MultiPolygonFeature3d>();
export const stringifyMultiPolygonFeature3d =
  typia.json.createStringify<MultiPolygonFeature3d>();
export const validateMultiPolygonFeature3d =
  typia.createValidate<MultiPolygonFeature3d>();

// MultiPolygonGeometry
export const assertMultiPolygonGeometry =
  typia.createAssert<MultiPolygonGeometry>();
export const equalsMultiPolygonGeometry =
  typia.createEquals<MultiPolygonGeometry>();
export const isMultiPolygonGeometry = typia.createIs<MultiPolygonGeometry>();
export const randomMultiPolygonGeometry =
  typia.createRandom<MultiPolygonGeometry>();
export const stringifyMultiPolygonGeometry =
  typia.json.createStringify<MultiPolygonGeometry>();
export const validateMultiPolygonGeometry =
  typia.createValidate<MultiPolygonGeometry>();

// MultiPolygonGeometry2d
export const assertMultiPolygonGeometry2d =
  typia.createAssert<MultiPolygonGeometry2d>();
export const equalsMultiPolygonGeometry2d =
  typia.createEquals<MultiPolygonGeometry2d>();
export const isMultiPolygonGeometry2d =
  typia.createIs<MultiPolygonGeometry2d>();
export const randomMultiPolygonGeometry2d =
  typia.createRandom<MultiPolygonGeometry2d>();
export const stringifyMultiPolygonGeometry2d =
  typia.json.createStringify<MultiPolygonGeometry2d>();
export const validateMultiPolygonGeometry2d =
  typia.createValidate<MultiPolygonGeometry2d>();

// MultiPolygonGeometry3d
export const assertMultiPolygonGeometry3d =
  typia.createAssert<MultiPolygonGeometry3d>();
export const equalsMultiPolygonGeometry3d =
  typia.createEquals<MultiPolygonGeometry3d>();
export const isMultiPolygonGeometry3d =
  typia.createIs<MultiPolygonGeometry3d>();
export const randomMultiPolygonGeometry3d =
  typia.createRandom<MultiPolygonGeometry3d>();
export const stringifyMultiPolygonGeometry3d =
  typia.json.createStringify<MultiPolygonGeometry3d>();
export const validateMultiPolygonGeometry3d =
  typia.createValidate<MultiPolygonGeometry3d>();

// MultiPolygonGeometryType
export const assertMultiPolygonGeometryType =
  typia.createAssert<MultiPolygonGeometryType>();
export const equalsMultiPolygonGeometryType =
  typia.createEquals<MultiPolygonGeometryType>();
export const isMultiPolygonGeometryType =
  typia.createIs<MultiPolygonGeometryType>();
export const randomMultiPolygonGeometryType =
  typia.createRandom<MultiPolygonGeometryType>();
export const stringifyMultiPolygonGeometryType =
  typia.json.createStringify<MultiPolygonGeometryType>();
export const validateMultiPolygonGeometryType =
  typia.createValidate<MultiPolygonGeometryType>();

// NamedCoordinateReferenceSystem
export const assertNamedCoordinateReferenceSystem =
  typia.createAssert<NamedCoordinateReferenceSystem>();
export const equalsNamedCoordinateReferenceSystem =
  typia.createEquals<NamedCoordinateReferenceSystem>();
export const isNamedCoordinateReferenceSystem =
  typia.createIs<NamedCoordinateReferenceSystem>();
export const randomNamedCoordinateReferenceSystem =
  typia.createRandom<NamedCoordinateReferenceSystem>();
export const stringifyNamedCoordinateReferenceSystem =
  typia.json.createStringify<NamedCoordinateReferenceSystem>();
export const validateNamedCoordinateReferenceSystem =
  typia.createValidate<NamedCoordinateReferenceSystem>();

// PointCoordinates
export const assertPointCoordinates = typia.createAssert<PointCoordinates>();
export const equalsPointCoordinates = typia.createEquals<PointCoordinates>();
export const isPointCoordinates = typia.createIs<PointCoordinates>();
export const randomPointCoordinates = typia.createRandom<PointCoordinates>();
export const stringifyPointCoordinates =
  typia.json.createStringify<PointCoordinates>();
export const validatePointCoordinates =
  typia.createValidate<PointCoordinates>();

// PointFeature
export const assertPointFeature = typia.createAssert<PointFeature>();
export const equalsPointFeature = typia.createEquals<PointFeature>();
export const isPointFeature = typia.createIs<PointFeature>();
export const randomPointFeature = typia.createRandom<PointFeature>();
export const stringifyPointFeature = typia.json.createStringify<PointFeature>();
export const validatePointFeature = typia.createValidate<PointFeature>();

// PointFeature2d
export const assertPointFeature2d = typia.createAssert<PointFeature2d>();
export const equalsPointFeature2d = typia.createEquals<PointFeature2d>();
export const isPointFeature2d = typia.createIs<PointFeature2d>();
export const randomPointFeature2d = typia.createRandom<PointFeature2d>();
export const stringifyPointFeature2d =
  typia.json.createStringify<PointFeature2d>();
export const validatePointFeature2d = typia.createValidate<PointFeature2d>();

// PointFeature3d
export const assertPointFeature3d = typia.createAssert<PointFeature3d>();
export const equalsPointFeature3d = typia.createEquals<PointFeature3d>();
export const isPointFeature3d = typia.createIs<PointFeature3d>();
export const randomPointFeature3d = typia.createRandom<PointFeature3d>();
export const stringifyPointFeature3d =
  typia.json.createStringify<PointFeature3d>();
export const validatePointFeature3d = typia.createValidate<PointFeature3d>();

// PointGeometry
export const assertPointGeometry = typia.createAssert<PointGeometry>();
export const equalsPointGeometry = typia.createEquals<PointGeometry>();
export const isPointGeometry = typia.createIs<PointGeometry>();
export const randomPointGeometry = typia.createRandom<PointGeometry>();
export const stringifyPointGeometry =
  typia.json.createStringify<PointGeometry>();
export const validatePointGeometry = typia.createValidate<PointGeometry>();

// PointGeometry2d
export const assertPointGeometry2d = typia.createAssert<PointGeometry2d>();
export const equalsPointGeometry2d = typia.createEquals<PointGeometry2d>();
export const isPointGeometry2d = typia.createIs<PointGeometry2d>();
export const randomPointGeometry2d = typia.createRandom<PointGeometry2d>();
export const stringifyPointGeometry2d =
  typia.json.createStringify<PointGeometry2d>();
export const validatePointGeometry2d = typia.createValidate<PointGeometry2d>();

// PointGeometry3d
export const assertPointGeometry3d = typia.createAssert<PointGeometry3d>();
export const equalsPointGeometry3d = typia.createEquals<PointGeometry3d>();
export const isPointGeometry3d = typia.createIs<PointGeometry3d>();
export const randomPointGeometry3d = typia.createRandom<PointGeometry3d>();
export const stringifyPointGeometry3d =
  typia.json.createStringify<PointGeometry3d>();
export const validatePointGeometry3d = typia.createValidate<PointGeometry3d>();

// PointGeometryType
export const assertPointGeometryType = typia.createAssert<PointGeometryType>();
export const equalsPointGeometryType = typia.createEquals<PointGeometryType>();
export const isPointGeometryType = typia.createIs<PointGeometryType>();
export const randomPointGeometryType = typia.createRandom<PointGeometryType>();
export const stringifyPointGeometryType =
  typia.json.createStringify<PointGeometryType>();
export const validatePointGeometryType =
  typia.createValidate<PointGeometryType>();

// PolygonCoordinates
export const assertPolygonCoordinates =
  typia.createAssert<PolygonCoordinates>();
export const equalsPolygonCoordinates =
  typia.createEquals<PolygonCoordinates>();
export const isPolygonCoordinates = typia.createIs<PolygonCoordinates>();
export const randomPolygonCoordinates =
  typia.createRandom<PolygonCoordinates>();
export const stringifyPolygonCoordinates =
  typia.json.createStringify<PolygonCoordinates>();
export const validatePolygonCoordinates =
  typia.createValidate<PolygonCoordinates>();

// PolygonFeature
export const assertPolygonFeature = typia.createAssert<PolygonFeature>();
export const equalsPolygonFeature = typia.createEquals<PolygonFeature>();
export const isPolygonFeature = typia.createIs<PolygonFeature>();
export const randomPolygonFeature = typia.createRandom<PolygonFeature>();
export const stringifyPolygonFeature =
  typia.json.createStringify<PolygonFeature>();
export const validatePolygonFeature = typia.createValidate<PolygonFeature>();

// PolygonFeature2d
export const assertPolygonFeature2d = typia.createAssert<PolygonFeature2d>();
export const equalsPolygonFeature2d = typia.createEquals<PolygonFeature2d>();
export const isPolygonFeature2d = typia.createIs<PolygonFeature2d>();
export const randomPolygonFeature2d = typia.createRandom<PolygonFeature2d>();
export const stringifyPolygonFeature2d =
  typia.json.createStringify<PolygonFeature2d>();
export const validatePolygonFeature2d =
  typia.createValidate<PolygonFeature2d>();

// PolygonFeature3d
export const assertPolygonFeature3d = typia.createAssert<PolygonFeature3d>();
export const equalsPolygonFeature3d = typia.createEquals<PolygonFeature3d>();
export const isPolygonFeature3d = typia.createIs<PolygonFeature3d>();
export const randomPolygonFeature3d = typia.createRandom<PolygonFeature3d>();
export const stringifyPolygonFeature3d =
  typia.json.createStringify<PolygonFeature3d>();
export const validatePolygonFeature3d =
  typia.createValidate<PolygonFeature3d>();

// PolygonGeometry
export const assertPolygonGeometry = typia.createAssert<PolygonGeometry>();
export const equalsPolygonGeometry = typia.createEquals<PolygonGeometry>();
export const isPolygonGeometry = typia.createIs<PolygonGeometry>();
export const randomPolygonGeometry = typia.createRandom<PolygonGeometry>();
export const stringifyPolygonGeometry =
  typia.json.createStringify<PolygonGeometry>();
export const validatePolygonGeometry = typia.createValidate<PolygonGeometry>();

// PolygonGeometry2d
export const assertPolygonGeometry2d = typia.createAssert<PolygonGeometry2d>();
export const equalsPolygonGeometry2d = typia.createEquals<PolygonGeometry2d>();
export const isPolygonGeometry2d = typia.createIs<PolygonGeometry2d>();
export const randomPolygonGeometry2d = typia.createRandom<PolygonGeometry2d>();
export const stringifyPolygonGeometry2d =
  typia.json.createStringify<PolygonGeometry2d>();
export const validatePolygonGeometry2d =
  typia.createValidate<PolygonGeometry2d>();

// PolygonGeometry3d
export const assertPolygonGeometry3d = typia.createAssert<PolygonGeometry3d>();
export const equalsPolygonGeometry3d = typia.createEquals<PolygonGeometry3d>();
export const isPolygonGeometry3d = typia.createIs<PolygonGeometry3d>();
export const randomPolygonGeometry3d = typia.createRandom<PolygonGeometry3d>();
export const stringifyPolygonGeometry3d =
  typia.json.createStringify<PolygonGeometry3d>();
export const validatePolygonGeometry3d =
  typia.createValidate<PolygonGeometry3d>();

// PolygonGeometryType
export const assertPolygonGeometryType =
  typia.createAssert<PolygonGeometryType>();
export const equalsPolygonGeometryType =
  typia.createEquals<PolygonGeometryType>();
export const isPolygonGeometryType = typia.createIs<PolygonGeometryType>();
export const randomPolygonGeometryType =
  typia.createRandom<PolygonGeometryType>();
export const stringifyPolygonGeometryType =
  typia.json.createStringify<PolygonGeometryType>();
export const validatePolygonGeometryType =
  typia.createValidate<PolygonGeometryType>();

// SimpleStyleProperties
export const assertSimpleStyleProperties =
  typia.createAssert<SimpleStyleProperties>();
export const equalsSimpleStyleProperties =
  typia.createEquals<SimpleStyleProperties>();
export const isSimpleStyleProperties = typia.createIs<SimpleStyleProperties>();
export const randomSimpleStyleProperties =
  typia.createRandom<SimpleStyleProperties>();
export const stringifySimpleStyleProperties =
  typia.json.createStringify<SimpleStyleProperties>();
export const validateSimpleStyleProperties =
  typia.createValidate<SimpleStyleProperties>();

// Tilejson
export const assertTilejson = typia.createAssert<Tilejson>();
export const equalsTilejson = typia.createEquals<Tilejson>();
export const isTilejson = typia.createIs<Tilejson>();
export const randomTilejson = typia.createRandom<Tilejson>();
export const stringifyTilejson = typia.json.createStringify<Tilejson>();
export const validateTilejson = typia.createValidate<Tilejson>();

// Tilejson300
export const assertTilejson300 = typia.createAssert<Tilejson300>();
export const equalsTilejson300 = typia.createEquals<Tilejson300>();
export const isTilejson300 = typia.createIs<Tilejson300>();
export const randomTilejson300 = typia.createRandom<Tilejson300>();
export const stringifyTilejson300 = typia.json.createStringify<Tilejson300>();
export const validateTilejson300 = typia.createValidate<Tilejson300>();

// TilejsonCommon
export const assertTilejsonCommon = typia.createAssert<TilejsonCommon>();
export const equalsTilejsonCommon = typia.createEquals<TilejsonCommon>();
export const isTilejsonCommon = typia.createIs<TilejsonCommon>();
export const randomTilejsonCommon = typia.createRandom<TilejsonCommon>();
export const stringifyTilejsonCommon =
  typia.json.createStringify<TilejsonCommon>();
export const validateTilejsonCommon = typia.createValidate<TilejsonCommon>();

// TilejsonFormat
export const assertTilejsonFormat = typia.createAssert<TilejsonFormat>();
export const equalsTilejsonFormat = typia.createEquals<TilejsonFormat>();
export const isTilejsonFormat = typia.createIs<TilejsonFormat>();
export const randomTilejsonFormat = typia.createRandom<TilejsonFormat>();
export const stringifyTilejsonFormat =
  typia.json.createStringify<TilejsonFormat>();
export const validateTilejsonFormat = typia.createValidate<TilejsonFormat>();

// TilejsonFormatExtra
export const assertTilejsonFormatExtra =
  typia.createAssert<TilejsonFormatExtra>();
export const equalsTilejsonFormatExtra =
  typia.createEquals<TilejsonFormatExtra>();
export const isTilejsonFormatExtra = typia.createIs<TilejsonFormatExtra>();
export const randomTilejsonFormatExtra =
  typia.createRandom<TilejsonFormatExtra>();
export const stringifyTilejsonFormatExtra =
  typia.json.createStringify<TilejsonFormatExtra>();
export const validateTilejsonFormatExtra =
  typia.createValidate<TilejsonFormatExtra>();

// TilejsonRaster
export const assertTilejsonRaster = typia.createAssert<TilejsonRaster>();
export const equalsTilejsonRaster = typia.createEquals<TilejsonRaster>();
export const isTilejsonRaster = typia.createIs<TilejsonRaster>();
export const randomTilejsonRaster = typia.createRandom<TilejsonRaster>();
export const stringifyTilejsonRaster =
  typia.json.createStringify<TilejsonRaster>();
export const validateTilejsonRaster = typia.createValidate<TilejsonRaster>();

// TilejsonRasterFormat
export const assertTilejsonRasterFormat =
  typia.createAssert<TilejsonRasterFormat>();
export const equalsTilejsonRasterFormat =
  typia.createEquals<TilejsonRasterFormat>();
export const isTilejsonRasterFormat = typia.createIs<TilejsonRasterFormat>();
export const randomTilejsonRasterFormat =
  typia.createRandom<TilejsonRasterFormat>();
export const stringifyTilejsonRasterFormat =
  typia.json.createStringify<TilejsonRasterFormat>();
export const validateTilejsonRasterFormat =
  typia.createValidate<TilejsonRasterFormat>();

// TilejsonScheme
export const assertTilejsonScheme = typia.createAssert<TilejsonScheme>();
export const equalsTilejsonScheme = typia.createEquals<TilejsonScheme>();
export const isTilejsonScheme = typia.createIs<TilejsonScheme>();
export const randomTilejsonScheme = typia.createRandom<TilejsonScheme>();
export const stringifyTilejsonScheme =
  typia.json.createStringify<TilejsonScheme>();
export const validateTilejsonScheme = typia.createValidate<TilejsonScheme>();

// TilejsonVector
export const assertTilejsonVector = typia.createAssert<TilejsonVector>();
export const equalsTilejsonVector = typia.createEquals<TilejsonVector>();
export const isTilejsonVector = typia.createIs<TilejsonVector>();
export const randomTilejsonVector = typia.createRandom<TilejsonVector>();
export const stringifyTilejsonVector =
  typia.json.createStringify<TilejsonVector>();
export const validateTilejsonVector = typia.createValidate<TilejsonVector>();

// TilejsonVectorFormat
export const assertTilejsonVectorFormat =
  typia.createAssert<TilejsonVectorFormat>();
export const equalsTilejsonVectorFormat =
  typia.createEquals<TilejsonVectorFormat>();
export const isTilejsonVectorFormat = typia.createIs<TilejsonVectorFormat>();
export const randomTilejsonVectorFormat =
  typia.createRandom<TilejsonVectorFormat>();
export const stringifyTilejsonVectorFormat =
  typia.json.createStringify<TilejsonVectorFormat>();
export const validateTilejsonVectorFormat =
  typia.createValidate<TilejsonVectorFormat>();

// TilejsonVectorLayer
export const assertTilejsonVectorLayer =
  typia.createAssert<TilejsonVectorLayer>();
export const equalsTilejsonVectorLayer =
  typia.createEquals<TilejsonVectorLayer>();
export const isTilejsonVectorLayer = typia.createIs<TilejsonVectorLayer>();
export const randomTilejsonVectorLayer =
  typia.createRandom<TilejsonVectorLayer>();
export const stringifyTilejsonVectorLayer =
  typia.json.createStringify<TilejsonVectorLayer>();
export const validateTilejsonVectorLayer =
  typia.createValidate<TilejsonVectorLayer>();

// TilejsonVectorLayers
export const assertTilejsonVectorLayers =
  typia.createAssert<TilejsonVectorLayers>();
export const equalsTilejsonVectorLayers =
  typia.createEquals<TilejsonVectorLayers>();
export const isTilejsonVectorLayers = typia.createIs<TilejsonVectorLayers>();
export const randomTilejsonVectorLayers =
  typia.createRandom<TilejsonVectorLayers>();
export const stringifyTilejsonVectorLayers =
  typia.json.createStringify<TilejsonVectorLayers>();
export const validateTilejsonVectorLayers =
  typia.createValidate<TilejsonVectorLayers>();

// TilejsonVersion
export const assertTilejsonVersion = typia.createAssert<TilejsonVersion>();
export const equalsTilejsonVersion = typia.createEquals<TilejsonVersion>();
export const isTilejsonVersion = typia.createIs<TilejsonVersion>();
export const randomTilejsonVersion = typia.createRandom<TilejsonVersion>();
export const stringifyTilejsonVersion =
  typia.json.createStringify<TilejsonVersion>();
export const validateTilejsonVersion = typia.createValidate<TilejsonVersion>();
