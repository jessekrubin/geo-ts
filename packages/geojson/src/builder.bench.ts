import * as turfHelpers from "@turf/helpers";
import { test, describe } from "vitest";
import * as _geo from "./builders.js";

const point = _geo.point;
const lineString = _geo.lineString;
const polygon = _geo.polygon;
const multiPoint = _geo.multiPoint;
const multiLineString = _geo.multiLineString;
const multiPolygon = _geo.multiPolygon;
const featureCollection = _geo.featureCollection;
const geometryCollection = _geo.geometryCollection;
const jsse = {
  point,
  lineString,
  polygon,
  multiPoint,
  multiLineString,
  multiPolygon,
  featureCollection,
  geometryCollection,
};
const libs = [
  // { name: "geo", lib: geo as unknown as typeof turfHelpers },
  { name: "geo", lib: jsse as unknown as typeof turfHelpers },
  { name: "turfHelpers", lib: turfHelpers },
];
const benchOptions = {
  // sequential: true,
  concurrent: false,
};
describe("point", benchOptions, () => {
  for (const { lib, name } of libs) {
    test(`${name} point`, async ({ bench }) => {
      await bench(`${name} point`, () => {
        lib.point([5, 10]);
      }).run();
    });
  }
});

describe("lineString", benchOptions, () => {
  for (const { lib, name } of libs) {
    test(`${name} lineString`, async ({ bench }) => {
      await bench(`${name} lineString`, () => {
        lib.lineString([
          [5, 10],
          [20, 40],
        ]);
      }).run();
    });
  }
});

describe("polygon", benchOptions, () => {
  for (const { lib, name } of libs) {
    test(`${name} polygon`, async ({ bench }) => {
      await bench(`${name} polygon`, () => {
        lib.polygon([
          [
            [5, 10],
            [20, 40],
            [40, 0],
            [5, 10],
          ],
        ]);
      }).run();
    });
  }
});

describe("multiPoint", benchOptions, () => {
  for (const { lib, name } of libs) {
    test(`${name} multiPoint`, async ({ bench }) => {
      await bench(`${name} multiPoint`, () => {
        lib.multiPoint([
          [0, 0],
          [10, 10],
        ]);
      }).run();
    });
  }
});

describe("multiLineString", benchOptions, () => {
  for (const { lib, name } of libs) {
    test(`${name} multiLineString`, async ({ bench }) => {
      await bench(`${name} multiLineString`, () => {
        lib.multiLineString([
          [
            [0, 0],
            [10, 10],
          ],
          [
            [5, 0],
            [15, 8],
          ],
        ]);
      }).run();
    });
  }
});

describe("multiPolygon", benchOptions, () => {
  for (const { lib, name } of libs) {
    test(`${name} multiPolygon`, async ({ bench }) => {
      await bench(`${name} multiPolygon`, () => {
        lib.multiPolygon([
          [
            [
              [94, 57],
              [78, 49],
              [94, 43],
              [94, 57],
            ],
          ],
          [
            [
              [93, 19],
              [63, 7],
              [79, 0],
              [93, 19],
            ],
          ],
        ]);
      }).run();
    });
  }
});

describe("featureCollection", benchOptions, () => {
  for (const { lib, name } of libs) {
    test(`${name} featureCollection`, async ({ bench }) => {
      await bench(`${name} featureCollection`, () => {
        lib.featureCollection([lib.point([5, 10]), lib.point([5, 10])]);
      }).run();
    });
  }
});

describe("geometryCollection", benchOptions, () => {
  for (const { lib, name } of libs) {
    test(`${name} geometryCollection`, async ({ bench }) => {
      await bench(`${name} geometryCollection`, () => {
        lib.geometryCollection([
          { type: "Point", coordinates: [100, 0] },
          { type: "Point", coordinates: [100, 0] },
        ]);
      }).run();
    });
  }
});
