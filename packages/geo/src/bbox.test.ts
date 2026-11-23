import type { BBox2d, BBox3d } from "@jsse/geotypes";
import { describe, expect, test } from "vitest";
import { bboxesAntimeridian } from "./bbox.js";

describe("bboxes-antimeridian", () => {
  test("returns a non-crossing bbox unchanged", () => {
    const bbox: BBox2d = [-10, -10, 10, 10];
    expect(bboxesAntimeridian(bbox)).toStrictEqual([bbox]);
  });

  test("splits a crossing 2d bbox", () => {
    const bbox: BBox2d = [170, -10, -170, 10];
    expect(bboxesAntimeridian(bbox)).toStrictEqual([
      [170, -10, 180, 10],
      [-180, -10, -170, 10],
    ]);
  });

  test("splits a crossing 3d bbox and preserves z", () => {
    const bbox: BBox3d = [170, -10, 0, -170, 10, 100];
    expect(bboxesAntimeridian(bbox)).toStrictEqual([
      [170, -10, 0, 180, 10, 100],
      [-180, -10, 0, -170, 10, 100],
    ]);
  });
});
