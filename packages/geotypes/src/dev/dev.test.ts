/* eslint-disable unused-imports/no-unused-vars */
import { expect, test } from "vitest";
import type {
  Coord,
  Coord2d,
  Coord3d,
  CoordinateReferenceSystem,
  Feature,
  FeatureGenericOptions,
  FeatureOpts,
  GeoJsonProperties,
  NormalizeFeatureOptions,
  PointGeometry,
} from "../geotypes.js";
import * as dev from "./mod.js";

test("dev", () => {
  expect(dev).toBeDefined();
  expect(dev.DEV).toBe("DEV");
});

function _properties<
  TProperties extends GeoJsonProperties | null = GeoJsonProperties,
>(properties?: TProperties): TProperties {
  if (properties === undefined) {
    return {} as TProperties;
  }
  return properties;
}

function _options<
  TOptions extends Partial<FeatureOpts> | undefined = undefined,
>(options?: TOptions): NormalizeFeatureOptions<TOptions> {
  return (
    options === undefined ? {} : options
  ) as NormalizeFeatureOptions<TOptions>;
}

function point<
  TProperties extends GeoJsonProperties = GeoJsonProperties,
  TOptions extends Partial<FeatureOpts> | undefined = undefined,
  TCoordinate extends Coord2d | Coord3d = Coord2d | Coord3d,
>(
  coordinates: TCoordinate,
  properties?: TProperties,
  options?: TOptions,
): Feature<PointGeometry<TCoordinate>, TProperties, TOptions> {
  return {
    type: "Feature" as const,
    geometry: {
      type: "Point",
      coordinates,
    },
    properties: _properties(properties),
    ..._options(options),
  };
}

test("point", () => {
  const p2d = point([1, 2]);

  type P2d = typeof p2d;

  const p2d2 = point([1, 2], { name: "point" });

  const withIdAndBBox = point<
    { name: string },
    { id: string; bbox: [number, number, number, number] }
  >([1, 2], { name: "point" }, { id: "point", bbox: [1, 2, 3, 4] });

  const _wBbox: {
    type: "Feature";
    geometry: PointGeometry<[number, number]>;
    properties: {
      name: string;
    };
    bbox: [number, number, number, number];
    id?: string | number | undefined;
    crs?: CoordinateReferenceSystem | undefined;
  } = point([1, 2], { name: "point" }, { bbox: [1, 2, 3, 4] } as {
    bbox?: [number, number, number, number];
  });
  const thingy = point([1, 2], { name: "point" }, { bbox: [1, 2, 3, 4] } as {
    bbox?: [number, number, number, number];
  });

  // const noOptions = point([1, 2], { name: "point" }, false);

  const p3d = point([1, 2, 3]);
});

test("point-2d-coords", () => {
  const p2d = point([1, 2]);
  expect(p2d).toBeDefined();
  expect(p2d.type).toBe("Feature");
  expect(p2d.geometry.type).toBe("Point");
  expect(p2d.geometry.coordinates).toEqual([1, 2]);
  expect(p2d.properties).toEqual({});

  type P2d = typeof p2d;
  const checkP2d: P2d = p2d; // Type checking
});

test("point-with-properties", () => {
  const p2d2 = point([1, 2], { name: "point" });
  expect(p2d2.properties).toEqual({ name: "point" });

  type P2d2 = typeof p2d2;
  const checkP2d2: P2d2 = p2d2; // Type checking
});

test("point-with-id-bbox", () => {
  const withIdAndBBox = point<
    { name: string },
    { id: string; bbox: [number, number, number, number] }
  >([1, 2], { name: "point" }, { id: "point", bbox: [1, 2, 3, 4] });

  expect(withIdAndBBox.properties).toEqual({ name: "point" });
  expect(withIdAndBBox.id).toBe("point");
  expect(withIdAndBBox.bbox).toEqual([1, 2, 3, 4]);

  type WithIdAndBBox = typeof withIdAndBBox;
  const checkWithIdAndBBox: WithIdAndBBox = withIdAndBBox; // Type checking
});

test("point with BBox only", () => {
  const _wBbox = point([1, 2], { name: "point" }, { bbox: [1, 2, 3, 4] });

  expect(_wBbox.properties).toEqual({ name: "point" });
  expect(_wBbox.bbox).toEqual([1, 2, 3, 4]);

  type WBbox = typeof _wBbox;
  const checkWBbox: WBbox = _wBbox; // Type checking
});

test("point-3d-coords", () => {
  const p3d = point([1, 2, 3]);
  expect(p3d).toBeDefined();
  expect(p3d.type).toBe("Feature");
  expect(p3d.geometry.type).toBe("Point");
  expect(p3d.geometry.coordinates).toEqual([1, 2, 3]);
  expect(p3d.properties).toEqual({});

  type P3d = typeof p3d;
  const checkP3d: P3d = p3d; // Type checking
});
