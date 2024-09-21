import { describe, expect, test } from "vitest";
import * as dem from "./dem.js";

describe("terrarium", () => {
  test("terrarium2hgt", () => {
    expect(dem.terrariumDecode(0, 0, 0)).toBe(-32_768);
    expect(dem.terrariumDecode(255, 255, 255)).toBe(32_767.996_093_75);
    expect(dem.terrariumDecode(137, 219, 68)).toBeCloseTo(2523.266, 1);
  });
  test("hgt2terrarium", () => {
    const starting = 2523.266;
    const expected = [137, 219, 68];
    expect(dem.terrariumEncode(starting)).toEqual(expected);
  });
});

describe("mapbox-dem", () => {
  test("rgbdem2hgt", () => {
    expect(dem.rgbdemDecode(0, 0, 0)).toBe(-10_000);
    expect(dem.rgbdemDecode(255, 255, 255)).toBe(1_667_721.5);
    expect(dem.rgbdemDecode(1, 233, 49)).toBeCloseTo(2523.266, 1);
  });
  test("hgt2rgbdem", () => {
    const starting = 2523.266;
    const expected = [1, 233, 49];
    expect(dem.rgbdemEncode(starting)).toEqual(expected);
  });
});
