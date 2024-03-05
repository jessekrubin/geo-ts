import { expect, test } from "vitest";
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
