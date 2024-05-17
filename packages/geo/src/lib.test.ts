import { describe, expect, test } from "vitest";
import type { BBox2d, BBox3d } from "@jsse/geotypes";
import { bbox, bbox2d, bbox3d } from "./index.js";
import * as geo from "./index.js";

test("coord 2d input", () => {
  const coord: geo.Coord2d = geo.coord(0, 0);
  expect(coord).toEqual([0, 0]);
});

test("coord 3d input", () => {
  const coord: geo.Coord3d = geo.coord(0, 0, 0);
  expect(coord).toEqual([0, 0, 0]);
});

test("coord2d", () => {
  const coord: geo.Coord2d = geo.coord2d(0, 0);
  expect(coord).toEqual([0, 0]);
});

test("coord3d", () => {
  const coord: geo.Coord3d = geo.coord3d(0, 0, 0);
  expect(coord).toEqual([0, 0, 0]);
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
