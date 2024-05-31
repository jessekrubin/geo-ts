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
