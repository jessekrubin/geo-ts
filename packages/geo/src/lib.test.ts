import type { BBox2d, BBox3d, Coord, Coord2d, Coord3d } from "@jsse/geotypes";
import { describe, expect, test } from "vitest";
import { bbox, bbox2d, bbox3d } from "./index.js";
import * as geo from "./index.js";

describe("coord", () => {
  test("coord", () => {
    const coord2d: Coord2d = geo.coord([0, 0]);
    expect(coord2d).toEqual([0, 0]);

    const coord3d: Coord3d = geo.coord([0, 0, 0]);
    expect(coord3d).toEqual([0, 0, 0]);

    const coord2d2: Coord2d = geo.coord(0, 0);
    expect(coord2d2).toEqual([0, 0]);

    const coord3d2: Coord3d = geo.coord(0, 0, 0);
    expect(coord3d2).toEqual([0, 0, 0]);
  });

  test("coord 2d input", () => {
    const coord: Coord2d = geo.coord(0, 0);
    expect(coord).toEqual([0, 0]);

    const coord2: Coord2d = geo.coord([0, 0]);
    expect(coord2).toEqual([0, 0]);
  });

  test("coord 3d input", () => {
    const coord: Coord3d = geo.coord(0, 0, 0);
    expect(coord).toEqual([0, 0, 0]);
  });

  test("coord2d", () => {
    const coord: Coord2d = geo.coord2d(0, 0);
    expect(coord).toEqual([0, 0]);

    const coord2: Coord2d = geo.coord2d([0, 0]);
    expect(coord2).toEqual([0, 0]);
  });

  test("coord3d", () => {
    const coord: Coord3d = geo.coord3d(0, 0, 0);
    expect(coord).toEqual([0, 0, 0]);

    const coord2: Coord3d = geo.coord3d([0, 0, 0]);
    expect(coord2).toEqual([0, 0, 0]);
  });

  test("coords", () => {
    const coords2d: Coord2d[] = geo.coords([
      [0, 0],
      [1, 1],
    ]);
    expect(coords2d).toEqual([
      [0, 0],
      [1, 1],
    ]);

    const coords3d: Coord3d[] = geo.coords([
      [0, 0, 0],
      [1, 1, 1],
    ]);
    expect(coords3d).toEqual([
      [0, 0, 0],
      [1, 1, 1],
    ]);

    const coordsArrayInput: Coord[] = geo.coords([
      [0, 0],
      [1, 1, 1],
    ]);
    expect(coordsArrayInput).toEqual([
      [0, 0],
      [1, 1, 1],
    ]);

    const _coords_array_of_2d: Coord2d[] = geo.coords([
      [0, 0],
      [1, 1],
      [2, 2],
      [3, 3],
    ]);
    const _coords_array_of_3d: Coord3d[] = geo.coords([
      [0, 0, 0],
      [1, 1, 1],
      [2, 2, 2],
      [3, 3, 3],
    ]);
    const _coords_array_of_mixed: Coord[] = geo.coords([
      [0, 0],
      [1, 1, 1],
      [2, 2],
      [3, 3, 3],
    ]);

    expect(_coords_array_of_2d).toEqual([
      [0, 0],
      [1, 1],
      [2, 2],
      [3, 3],
    ]);
    expect(_coords_array_of_3d).toEqual([
      [0, 0, 0],
      [1, 1, 1],
      [2, 2, 2],
      [3, 3, 3],
    ]);
    expect(_coords_array_of_mixed).toEqual([
      [0, 0],
      [1, 1, 1],
      [2, 2],
      [3, 3, 3],
    ]);
  });
});

describe("bbox functions", () => {
  // Tests for bbox2d
  describe("bbox2d", () => {
    test("should return a 2d bounding box array from individual coordinates", () => {
      const result: BBox2d = bbox2d(1, 2, 3, 4);
      expect(result).toEqual([1, 2, 3, 4]);
    });

    test("should return a 2d bounding box array from a tuple", () => {
      const result: BBox2d = bbox2d([1, 2, 3, 4]);
      expect(result).toEqual([1, 2, 3, 4]);
    });
  });

  // Tests for bbox3d
  describe("bbox3d", () => {
    test("should return a 3d bounding box array from individual coordinates", () => {
      const result: BBox3d = bbox3d(1, 2, 3, 4, 5, 6);
      expect(result).toEqual([1, 2, 3, 4, 5, 6]);
    });

    test("should return a 3d bounding box array from a tuple", () => {
      const result: BBox3d = bbox3d([1, 2, 3, 4, 5, 6]);
      expect(result).toEqual([1, 2, 3, 4, 5, 6]);
    });
  });

  // Tests for bbox
  describe("bbox", () => {
    test("should return a 2d bounding box array from individual coordinates", () => {
      const result: BBox2d = bbox(1, 2, 3, 4);
      expect(result).toEqual([1, 2, 3, 4]);
    });

    test("should return a 3d bounding box array from individual coordinates", () => {
      const result: BBox3d = bbox(1, 2, 3, 4, 5, 6);
      expect(result).toEqual([1, 2, 3, 4, 5, 6]);
    });

    test("should return a 2d bounding box array from a tuple", () => {
      const result: BBox2d = bbox([1, 2, 3, 4]);
      expect(result).toEqual([1, 2, 3, 4]);
    });

    test("should return a 3d bounding box array from a tuple", () => {
      const result: BBox3d = bbox([1, 2, 3, 4, 5, 6]);
      expect(result).toEqual([1, 2, 3, 4, 5, 6]);
    });
  });
});
