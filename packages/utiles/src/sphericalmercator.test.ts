import { describe, expect, test } from "vitest";

import { MAX_EXTENT_MERC, MAX_EXTENT_WGS84 } from "./const.js";
import { SphericalMercator } from "./sphericalmercator.js";

const sm = new SphericalMercator();
const antiM = new SphericalMercator({ antimeridian: true });

describe("bbox", () => {
  test("[0,0,0] converted to proper bbox.", () => {
    expect(sm.bbox(0, 0, 0, true, "WGS84")).toEqual([
      -180, -85.05112877980659, 180, 85.0511287798066,
    ]);
  });

  test("[0,0,1] converted to proper bbox.", () => {
    expect(sm.bbox(0, 0, 1, true, "WGS84")).toEqual([
      -180, -85.05112877980659, 0, 0,
    ]);
  });
});

describe("xyz", () => {
  test("world extents converted to proper tile ranges.", () => {
    expect(
      sm.xyz(
        [-180, -85.05112877980659, 180, 85.0511287798066],
        0,
        true,
        "WGS84",
      ),
    ).toEqual({ minX: 0, minY: 0, maxX: 0, maxY: 0 });
  });

  test("sW converted to proper tile ranges.", () => {
    expect(sm.xyz([-180, -85.05112877980659, 0, 0], 1, true, "WGS84")).toEqual({
      minX: 0,
      minY: 0,
      maxX: 0,
      maxY: 0,
    });
  });
});

describe("xyz-broken", () => {
  test("x and y coordinates comparison", () => {
    const xyz = sm.xyz(
      [-0.087891, 40.95703, 0.087891, 41.044916],
      3,
      true,
      "WGS84",
    );
    expect(xyz.minX <= xyz.maxX).toBe(true);
    expect(xyz.minY <= xyz.maxY).toBe(true);
  });
});

describe("xyz-negative", () => {
  test("returns zero for y value", () => {
    const xyz = sm.xyz([-112.5, 85.0511, -112.5, 85.0511], 0);
    expect(xyz.minY).toBe(0);
  });
});

describe("xyz-fuzz", () => {
  test("fuzz testing of xyz function", () => {
    for (let i = 0; i < 1000; i++) {
      const x = [-180 + 360 * Math.random(), -180 + 360 * Math.random()];
      const y = [-85 + 170 * Math.random(), -85 + 170 * Math.random()];
      const z = Math.floor(22 * Math.random());
      const xyz = sm.xyz(
        [Math.min(...x), Math.min(...y), Math.max(...x), Math.max(...y)],
        z,
        true,
        "WGS84",
      );
      if (xyz.minX > xyz.maxX) {
        expect(xyz.minX <= xyz.maxX).toBe(true);
      }
      if (xyz.minY > xyz.maxY) {
        expect(xyz.minY <= xyz.maxY).toBe(true);
      }
    }
  });
});

describe("convert", () => {
  test("convert WGS84 to Mercator", () => {
    expect(sm.convert([...MAX_EXTENT_WGS84], "900913")).toEqual(
      MAX_EXTENT_MERC,
    );
  });

  test("convert Mercator to WGS84", () => {
    expect(sm.convert([...MAX_EXTENT_MERC], "WGS84")).toEqual(MAX_EXTENT_WGS84);
  });
});

describe("extents", () => {
  test("maximum extents enforced on conversion to tile ranges.", () => {
    expect(sm.convert([-240, -90, 240, 90], "900913")).toEqual(MAX_EXTENT_MERC);
    expect(sm.xyz([-240, -90, 240, 90], 4, true, "WGS84")).toEqual({
      minX: 0,
      minY: 0,
      maxX: 15,
      maxY: 15,
    });
  });
});

describe("ll", () => {
  test("lL with int zoom value converts", () => {
    expect(sm.ll([200, 200], 9)).toEqual([-179.45068359375, 85.00351401304403]);
  });

  test("lL with float zoom value converts", () => {
    expect(sm.ll([200, 200], 8.6574)).toEqual([
      -179.3034449476476, 84.99067388699072,
    ]);
  });
});

describe("px", () => {
  test("pX with int zoom value converts", () => {
    expect(sm.px([-179, 85], 9)).toEqual([364, 215]);
  });

  test("pX with float zoom value converts", () => {
    expect(sm.px([-179, 85], 8.6574)).toEqual([
      287.12734093961626, 169.30444219392666,
    ]);
  });

  test("clamps PX by default when lon >180", () => {
    expect(sm.px([250, 3], 4)).toEqual([4096, 2014]);
  });

  test("pX with lon > 180 converts when antimeridian=true", () => {
    expect(antiM.px([250, 3], 4)).toEqual([4892, 2014]);
  });

  test("pX for lon 360 and antimeridian=true", () => {
    expect(antiM.px([400, 3], 4)).toEqual([6599, 2014]);
  });

  test("clamps PX when lon >360 and antimeridian=true", () => {
    expect(antiM.px([400, 3], 4)).toEqual([6599, 2014]);
  });
});

function round(val: number): string {
  return Number(val.toString()).toFixed(6);
}

describe("high precision float", () => {
  test("first six decimals are the same", () => {
    const withInt = sm.ll([200, 200], 4);
    const withFloat = sm.ll([200, 200], 4.0000000001);

    expect(round(withInt[0])).toEqual(round(withFloat[0]));
    expect(round(withInt[1])).toEqual(round(withFloat[1]));
  });
});
