/* eslint-disable @typescript-eslint/no-unused-vars */

import type { Coord2d, Coord3d } from "../types/coord.js";
import type {
  AssertCoord2d,
  AssertGeojsonCoord,
  AssertCoord3d,
  ExtractCoordType,
  Feature,
  FeatureCollection,
  Geometry,
  GeometryCollection,
  PointFeature,
  PointFeature2d,
  PointFeature3d,
  PointGeometry,
  PolygonGeometry,
} from "../types/geojson.js";

function noop<T>(v: T): T {
  return v;
}

{
  type FeatureWithId = Feature<PointGeometry, unknown, { id: string }>;
  const featureWithNoProperties: FeatureWithId = {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [0, 0],
    },
    id: "some-id",
    properties: {},
  };
  const validFeature: FeatureWithId = {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [0, 0],
    },
    properties: {
      howdy: "partner",
    },
    id: "some-id",
  };

  type extractedCoord = ExtractCoordType<Feature>

  noop(featureWithNoProperties);
  noop(validFeature);

  // @ts-expect-error id is required
  const invalidFeature: FeatureWithId = {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [0, 0],
    },
    properties: {
      howdy: "partner",
    },
  };

  type FeatureWithProperties = Feature<
    PointGeometry,
    { howdy: "doody" } | undefined
  >;
  type FeatureWithPropertiesProperties = FeatureWithProperties["properties"];

  const featureWithProperties: FeatureWithProperties = {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [0, 0],
    },
    properties: {
      howdy: "doody",
    },
  };
}

{
  const pointFeature = {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [0, 0],
    },
    properties: {
      howdy: "partner",
    },
  } satisfies Feature;
}

{
  const pointFeature = {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [0, 0],
    },
    properties: {
      howdy: "partner",
    },
    id: "some-id",
  } satisfies PointFeature;
}

{
  const pointFeature = {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [0, 0],
    },
    properties: {
      howdy: "partner",
    },
  } satisfies PointFeature2d;
}

{
  const pointFeature = {
    type: "Feature",
    geometry: {
      type: "Point",
      // @ts-expect-error - 3d point
      coordinates: [0, 0],
    },
    properties: {
      howdy: "partner",
    },
  } satisfies PointFeature3d;
}

{
  // UTIL TYPES
  type a = ExtractCoordType<Feature<PointGeometry<Coord2d>>>;
  const aTrue: AssertCoord2d<a> = true;

  type b = ExtractCoordType<Feature<PointGeometry>>;
  const bTrue: AssertCoord2d<b> = false;

  type c = ExtractCoordType<Feature<PointGeometry<Coord3d>>>;
  const cTrue: AssertCoord2d<c> = false;

  type d = ExtractCoordType<Feature<PointGeometry<Coord2d>>>;
  const dTrue: AssertCoord3d<d> = false;

  type MixedGeometries = Geometry<Coord2d | Coord3d>;
  type MixedFeatures = FeatureCollection<MixedGeometries>;
  type e = ExtractCoordType<Feature<MixedGeometries>>;
  const eTrue: AssertGeojsonCoord<e> = true;

  type MixedCoordGeometryCollection = GeometryCollection<PointGeometry<Coord2d> | PolygonGeometry<Coord3d>>;
  type f = ExtractCoordType<Feature<MixedCoordGeometryCollection>>;
  const fTrue: AssertCoord3d<f> = false;

  // errors
  type g = ExtractCoordType<Feature<PointGeometry<Coord2d>>>;
  // @ts-expect-error - 3d point
  const gTrue: AssertCoord3d<g> = true;

  type h = ExtractCoordType<Feature<PointGeometry<Coord3d>>>;
  // @ts-expect-error - 2d point
  const hTrue: AssertCoord2d<h> = true;
}
