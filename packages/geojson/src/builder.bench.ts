import * as turfHelpers from "@turf/helpers";
import { bench, describe } from "vitest";
import * as geo from "./builders.js";

const libs = [
  {
    name: "geo",
    lib: geo as unknown as typeof turfHelpers,
  },
  {
    name: "turfHelpers",
    lib: turfHelpers,
  },
];
const benchOptions = {
  // sequential: true,
  concurrent: false,
};
describe("point", benchOptions, () => {
  for (const { lib, name } of libs) {
    bench(`${name} point`, () => {
      lib.point([5, 10]);
    });
  }
});

describe("lineString", benchOptions, () => {
  for (const { lib, name } of libs) {
    bench(`${name} lineString`, () => {
      lib.lineString([
        [5, 10],
        [20, 40],
      ]);
    });
  }
});

describe("polygon", benchOptions, () => {
  for (const { lib, name } of libs) {
    bench(`${name} polygon`, () => {
      lib.polygon([
        [
          [5, 10],
          [20, 40],
          [40, 0],
          [5, 10],
        ],
      ]);
    });
  }
});

describe("multiPoint", benchOptions, () => {
  for (const { lib, name } of libs) {
    bench(`${name} multiPoint`, () => {
      lib.multiPoint([
        [0, 0],
        [10, 10],
      ]);
    });
  }
});

describe("multiLineString", benchOptions, () => {
  for (const { lib, name } of libs) {
    bench(`${name} multiLineString`, () => {
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
    });
  }
});

describe("multiPolygon", benchOptions, () => {
  for (const { lib, name } of libs) {
    bench(`${name} multiPolygon`, () => {
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
    });
  }
});

describe("featureCollection", benchOptions, () => {
  for (const { lib, name } of libs) {
    bench(`${name} featureCollection`, () => {
      lib.featureCollection([lib.point([5, 10]), lib.point([5, 10])]);
    });
  }
});

describe("geometryCollection", benchOptions, () => {
  for (const { lib, name } of libs) {
    bench(`${name} geometryCollection`, () => {
      lib.geometryCollection([
        { type: "Point", coordinates: [100, 0] },
        { type: "Point", coordinates: [100, 0] },
      ]);
    });
  }
});
