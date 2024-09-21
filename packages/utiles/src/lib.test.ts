import { describe, expect, test } from "vitest";
import * as ut from "./index.js";

describe("is", () => {
  test("isTileArr", () => {
    expect(ut.isTileArr([0, 0, 0])).toBe(true);
    expect(ut.isTileArr([0, 0, 0, 0])).toBe(false);
    expect(ut.isTileArr([0, 0, "0"])).toBe(false);
    expect(ut.isTileArr([0, 0, 0.6])).toBe(false);
    expect(ut.isTileArr([0, 0, 0, 0])).toBe(false);
  });
});

describe("quadkey", () => {
  test.each([{ xyz: [0, 0, 0] }, { xyz: [1, 1, 1] }, { xyz: [2, 3, 4] }])(
    "convert: %o",
    ({ xyz }) => {
      const qk = ut.xyz2quadkey(xyz as [number, number, number]);
      expect(ut.quadkey2xyz(qk)).toEqual(xyz);
    },
  );

  test("number-quadkey", () => {
    expect(ut.quadkey2xyz(0)).toEqual([0, 0, 1]);
    expect(ut.quadkey2xyz(1)).toEqual([1, 0, 1]);
    expect(ut.quadkey2xyz(2)).toEqual([0, 1, 1]);
    expect(ut.quadkey2xyz(3)).toEqual([1, 1, 1]);
    expect(() => ut.quadkey2xyz(1235)).toThrow();
  });

  test("invalid-quadkey", () => {
    expect(() => ut.quadkey2xyz("?")).toThrow();
    expect(() => ut.quadkey2xyz("4")).toThrow();
    expect(() => ut.quadkey2xyz(1235)).toThrow();
    expect(() => ut.quadkey2xyz(-1235)).toThrow();
    expect(() => ut.quadkey2xyz(3.141_59)).toThrow();
    expect(() => ut.quadkey2xyz("a;sldkfj;aslkdjfa;sl")).toThrow();
  });
});

describe("zoom", () => {
  test("isZoom", () => {
    expect(ut.isZoom(0)).toBe(true);
    expect(ut.isZoom(30)).toBe(true);
    expect(ut.isZoom(-1)).toBe(false);
    expect(ut.isZoom(31)).toBe(false);
    expect(ut.isZoom(0.5)).toBe(false);
  });

  test("zoomset", () => {
    expect(ut.zvec2zset([])).toBe(0);
    expect(ut.zset2zvec(0b0000_0000_0000_0000_0000_0000_0000_0111)).toEqual([
      0, 1, 2,
    ]);
    expect(ut.zset2zvec(0b1111_0000_0000_0000_0000_0000_0000_0000)).toEqual([
      0, 1, 2,
    ]);

    expect(ut.zset2zvec(0b0000_0000_0000_0000_0000_0000_0000_0000)).toEqual([]);

    expect(ut.zvec2zset([0, 1, 2], { err: false })).toBe(
      0b0000_0000_0000_0000_0000_0000_0000_0111,
    );

    expect(
      ut.zvec2zset([
        0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
        20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30,
      ]),
    ).toBe(0b0111_1111_1111_1111_1111_1111_1111_1111);

    expect(() => ut.zset2zvec(-1)).toThrow();
    expect(() => ut.zset2zvec(4_294_967_295 + 1)).toThrow();
    // @ts-expect-error invalid zoom
    expect(() => ut.zvec2zset([0, 1, 2, 31])).toThrow();
  });
});
